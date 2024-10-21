!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d5aae042-b25f-457e-8780-b61c3d36888f", e._sentryDebugIdIdentifier = "sentry-dbid-d5aae042-b25f-457e-8780-b61c3d36888f");
  } catch (e2) {
  }
}();
function createParser(onParse) {
  let isFirstChunk;
  let buffer;
  let startingPosition;
  let startingFieldLength;
  let eventId;
  let eventName;
  let data;
  reset();
  return {
    feed,
    reset
  };
  function reset() {
    isFirstChunk = true;
    buffer = "";
    startingPosition = 0;
    startingFieldLength = -1;
    eventId = void 0;
    eventName = void 0;
    data = "";
  }
  function feed(chunk) {
    buffer = buffer ? buffer + chunk : chunk;
    if (isFirstChunk && hasBom(buffer)) {
      buffer = buffer.slice(BOM.length);
    }
    isFirstChunk = false;
    const length = buffer.length;
    let position = 0;
    let discardTrailingNewline = false;
    while (position < length) {
      if (discardTrailingNewline) {
        if (buffer[position] === "\n") {
          ++position;
        }
        discardTrailingNewline = false;
      }
      let lineLength = -1;
      let fieldLength = startingFieldLength;
      let character;
      for (let index = startingPosition; lineLength < 0 && index < length; ++index) {
        character = buffer[index];
        if (character === ":" && fieldLength < 0) {
          fieldLength = index - position;
        } else if (character === "\r") {
          discardTrailingNewline = true;
          lineLength = index - position;
        } else if (character === "\n") {
          lineLength = index - position;
        }
      }
      if (lineLength < 0) {
        startingPosition = length - position;
        startingFieldLength = fieldLength;
        break;
      } else {
        startingPosition = 0;
        startingFieldLength = -1;
      }
      parseEventStreamLine(buffer, position, fieldLength, lineLength);
      position += lineLength + 1;
    }
    if (position === length) {
      buffer = "";
    } else if (position > 0) {
      buffer = buffer.slice(position);
    }
  }
  function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        onParse({
          type: "event",
          id: eventId,
          event: eventName || void 0,
          data: data.slice(0, -1)
          // remove trailing newline
        });
        data = "";
        eventId = void 0;
      }
      eventName = void 0;
      return;
    }
    const noValue = fieldLength < 0;
    const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
    let step = 0;
    if (noValue) {
      step = lineLength;
    } else if (lineBuffer[index + fieldLength + 1] === " ") {
      step = fieldLength + 2;
    } else {
      step = fieldLength + 1;
    }
    const position = index + step;
    const valueLength = lineLength - step;
    const value = lineBuffer.slice(position, position + valueLength).toString();
    if (field === "data") {
      data += value ? "".concat(value, "\n") : "\n";
    } else if (field === "event") {
      eventName = value;
    } else if (field === "id" && !value.includes("\0")) {
      eventId = value;
    } else if (field === "retry") {
      const retry = parseInt(value, 10);
      if (!Number.isNaN(retry)) {
        onParse({
          type: "reconnect-interval",
          value: retry
        });
      }
    }
  }
}
const BOM = [239, 187, 191];
function hasBom(buffer) {
  return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
}
function createEventStreamTransformer(customParser) {
  const textDecoder = new TextDecoder();
  let eventSourceParser;
  return new TransformStream({
    async start(controller) {
      eventSourceParser = createParser(
        (event) => {
          if ("data" in event && event.type === "event" && event.data === "[DONE]" || // Replicate doesn't send [DONE] but does send a 'done' event
          // @see https://replicate.com/docs/streaming
          event.event === "done") {
            controller.terminate();
            return;
          }
          if ("data" in event) {
            const parsedMessage = customParser ? customParser(event.data) : event.data;
            if (parsedMessage)
              controller.enqueue(parsedMessage);
          }
        }
      );
    },
    transform(chunk) {
      eventSourceParser.feed(textDecoder.decode(chunk));
    }
  });
}
function createCallbacksTransformer(callbacks) {
  const textEncoder = new TextEncoder();
  let aggregatedResponse = "";
  const { onStart, onToken, onCompletion } = callbacks || {};
  return new TransformStream({
    async start() {
      if (onStart)
        await onStart();
    },
    async transform(message, controller) {
      controller.enqueue(textEncoder.encode(message));
      if (onToken)
        await onToken(message);
      if (onCompletion)
        aggregatedResponse += message;
    },
    async flush() {
      if (onCompletion)
        await onCompletion(aggregatedResponse);
    }
  });
}
function trimStartOfStreamHelper() {
  let isStreamStart = true;
  return (text) => {
    if (isStreamStart) {
      text = text.trimStart();
      if (text)
        isStreamStart = false;
    }
    return text;
  };
}
function AIStream(response, customParser, callbacks) {
  if (!response.ok) {
    if (response.body) {
      const reader = response.body.getReader();
      return new ReadableStream({
        async start(controller) {
          const { done, value } = await reader.read();
          if (!done) {
            const errorText = new TextDecoder().decode(value);
            controller.error(new Error(`Response error: ${errorText}`));
          }
        }
      });
    } else {
      return new ReadableStream({
        start(controller) {
          controller.error(new Error("Response error: No response body"));
        }
      });
    }
  }
  const responseBodyStream = response.body || createEmptyReadableStream();
  return responseBodyStream.pipeThrough(createEventStreamTransformer(customParser)).pipeThrough(createCallbacksTransformer(callbacks));
}
function createEmptyReadableStream() {
  return new ReadableStream({
    start(controller) {
      controller.close();
    }
  });
}
function readableFromAsyncIterable(iterable) {
  let it = iterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await it.next();
      if (done)
        controller.close();
      else
        controller.enqueue(value);
    },
    async cancel(reason) {
      var _a;
      await ((_a = it.return) == null ? void 0 : _a.call(it, reason));
    }
  });
}
function parseOpenAIStream() {
  const extract = chunkToText();
  return (data) => {
    return extract(JSON.parse(data));
  };
}
async function* streamable(stream) {
  const extract = chunkToText();
  for await (const chunk of stream) {
    const text = extract(chunk);
    if (text)
      yield text;
  }
}
function chunkToText() {
  const trimStartOfStream = trimStartOfStreamHelper();
  let isFunctionStreamingIn;
  return (json) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    if ((_c = (_b = (_a = json.choices[0]) == null ? void 0 : _a.delta) == null ? void 0 : _b.function_call) == null ? void 0 : _c.name) {
      isFunctionStreamingIn = true;
      return `{"function_call": {"name": "${(_e = (_d = json.choices[0]) == null ? void 0 : _d.delta) == null ? void 0 : _e.function_call.name}", "arguments": "`;
    } else if ((_h = (_g = (_f = json.choices[0]) == null ? void 0 : _f.delta) == null ? void 0 : _g.function_call) == null ? void 0 : _h.arguments) {
      const argumentChunk = json.choices[0].delta.function_call.arguments;
      let escapedPartialJson = argumentChunk.replace(/\\/g, "\\\\").replace(/\//g, "\\/").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
      return `${escapedPartialJson}`;
    } else if (isFunctionStreamingIn && (((_i = json.choices[0]) == null ? void 0 : _i.finish_reason) === "function_call" || ((_j = json.choices[0]) == null ? void 0 : _j.finish_reason) === "stop")) {
      isFunctionStreamingIn = false;
      return '"}}';
    }
    const text = trimStartOfStream(
      (_o = (_n = (_l = (_k = json.choices[0]) == null ? void 0 : _k.delta) == null ? void 0 : _l.content) != null ? _n : (_m = json.choices[0]) == null ? void 0 : _m.text) != null ? _o : ""
    );
    return text;
  };
}
var __internal__OpenAIFnMessagesSymbol = Symbol("internal_openai_fn_messages");
function OpenAIStream(res, callbacks) {
  const cb = callbacks;
  let stream;
  if (Symbol.asyncIterator in res) {
    stream = readableFromAsyncIterable(streamable(res)).pipeThrough(
      createCallbacksTransformer(cb)
    );
  } else {
    stream = AIStream(res, parseOpenAIStream(), cb);
  }
  if (cb && cb.experimental_onFunctionCall) {
    const functionCallTransformer = createFunctionCallTransformer(cb);
    return stream.pipeThrough(functionCallTransformer);
  } else {
    return stream;
  }
}
function createFunctionCallTransformer(callbacks) {
  const textEncoder = new TextEncoder();
  let isFirstChunk = true;
  let aggregatedResponse = "";
  let isFunctionStreamingIn = false;
  let functionCallMessages = callbacks[__internal__OpenAIFnMessagesSymbol] || [];
  return new TransformStream({
    async transform(chunk, controller) {
      const message = new TextDecoder().decode(chunk);
      const shouldHandleAsFunction = isFirstChunk && message.startsWith('{"function_call":');
      if (shouldHandleAsFunction) {
        isFunctionStreamingIn = true;
        aggregatedResponse += message;
        isFirstChunk = false;
        return;
      }
      if (!isFunctionStreamingIn) {
        controller.enqueue(chunk);
        return;
      } else {
        aggregatedResponse += message;
      }
    },
    async flush(controller) {
      const isEndOfFunction = !isFirstChunk && callbacks.experimental_onFunctionCall && isFunctionStreamingIn;
      if (isEndOfFunction && callbacks.experimental_onFunctionCall) {
        isFunctionStreamingIn = false;
        const payload = JSON.parse(aggregatedResponse);
        const argumentsPayload = JSON.parse(payload.function_call.arguments);
        let newFunctionCallMessages = [...functionCallMessages];
        const functionResponse = await callbacks.experimental_onFunctionCall(
          {
            name: payload.function_call.name,
            arguments: argumentsPayload
          },
          (result) => {
            newFunctionCallMessages = [
              ...functionCallMessages,
              {
                role: "assistant",
                content: "",
                function_call: payload.function_call
              },
              {
                role: "function",
                name: payload.function_call.name,
                content: JSON.stringify(result)
              }
            ];
            return newFunctionCallMessages;
          }
        );
        if (!functionResponse) {
          controller.enqueue(textEncoder.encode(aggregatedResponse));
          return;
        } else if (typeof functionResponse === "string") {
          controller.enqueue(textEncoder.encode(functionResponse));
          return;
        }
        const filteredCallbacks = {
          ...callbacks,
          onStart: void 0,
          onCompletion: void 0
        };
        const openAIStream = OpenAIStream(functionResponse, {
          ...filteredCallbacks,
          [__internal__OpenAIFnMessagesSymbol]: newFunctionCallMessages
        });
        const reader = openAIStream.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          controller.enqueue(value);
        }
      }
    }
  });
}
var StreamingTextResponse = class extends Response {
  constructor(res, init) {
    super(res, {
      ...init,
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        ...init == null ? void 0 : init.headers
      }
    });
  }
};
new TextDecoder("utf-8");

export { OpenAIStream as O, StreamingTextResponse as S };
//# sourceMappingURL=index3-80b47e16.js.map
