import { d as compute_rest_props, s as subscribe, g as get_store_value } from './utils-26d532f8.js';
import { o as onDestroy, c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape, v as validate_component, a as add_attribute } from './ssr-10c5b872.js';
import { w as writable } from './index2-aea858a5.js';
import { I as IconButton } from './index9-eea8802c.js';
import { t as t2 } from './translations-90190f83.js';
import { P as Popover$1 } from './Popover-a92462a3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7259cfa5-c2fc-471e-93fa-36e75baac1b0", e._sentryDebugIdIdentifier = "sentry-dbid-7259cfa5-c2fc-471e-93fa-36e75baac1b0");
  } catch (e2) {
  }
}();
const MagicWandFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M29.4141,24,12,6.5859a2.0476,2.0476,0,0,0-2.8281,0l-2.586,2.586a2.0021,2.0021,0,0,0,0,2.8281L23.999,29.4141a2.0024,2.0024,0,0,0,2.8281,0l2.587-2.5865a1.9993,1.9993,0,0,0,0-2.8281ZM8,10.5859,10.5859,8l5,5-2.5866,2.5869-5-5Z"></path><path d="M2.586 14.586H5.414V17.414H2.586z" transform="rotate(-45 4 16)"></path><path d="M14.586 2.586H17.414V5.414H14.586z" transform="rotate(-45 16 4)"></path><path d="M2.586 2.586H5.414V5.414H2.586z" transform="rotate(-45 4 4)"></path></svg>`;
});
var P = Object.defineProperty;
var F = (r, e, t2) => e in r ? P(r, e, { enumerable: true, configurable: true, writable: true, value: t2 }) : r[e] = t2;
var h = (r, e, t2) => (F(r, typeof e != "symbol" ? e + "" : e, t2), t2);
var I = class {
  constructor() {
    h(this, "listeners", /* @__PURE__ */ new Map());
  }
  /**
   * Subscribes a given listener.
   */
  subscribe(e, t2) {
    this.listeners.has(e) || this.listeners.set(e, []), !this.listeners.get(e).includes(t2) && this.listeners.get(e).push(t2);
  }
  /**
   * Unsubscribes the given listener.
   */
  unsubscribe(e, t2) {
    this.listeners.has(e) && this.listeners.get(e).includes(t2) && (this.listeners.get(e).splice(this.listeners.get(e).indexOf(t2), 1), this.listeners.get(e).length === 0 && this.listeners.delete(e));
  }
  /**
   * Emits an event to all active listeners.
   */
  emit(e, t2) {
    this.listeners.has(e) && this.listeners.get(e).forEach((s) => s(t2));
  }
};
var L = {
  broadcast: false
};
var S = {
  broadcast: false
};
var O = class {
  /**
   * Creates the cache item given the data and expiration at.
   */
  constructor({ data: e, expiresAt: t2 = null }) {
    h(this, "data");
    h(this, "expiresAt");
    this.data = e, this.expiresAt = t2;
  }
  /**
   * Determines if the current cache item is still being resolved.
   * This returns true if data is a promise, or false if type `D`.
   */
  isResolving() {
    return this.data instanceof Promise;
  }
  /**
   * Determines if the given cache item has expired.
   */
  hasExpired() {
    return this.expiresAt === null || this.expiresAt < /* @__PURE__ */ new Date();
  }
  /**
   * Set the expiration time of the given cache item relative to now.
   */
  expiresIn(e) {
    return this.expiresAt = /* @__PURE__ */ new Date(), this.expiresAt.setMilliseconds(this.expiresAt.getMilliseconds() + e), this;
  }
};
var q = class {
  constructor() {
    h(this, "elements", /* @__PURE__ */ new Map());
    h(this, "event", new I());
  }
  /**
   * Resolves the promise and replaces the Promise to the resolved data.
   * It also broadcasts the value change if needed or deletes the key if
   * the value resolves to undefined or null.
   */
  resolve(e, t2) {
    Promise.resolve(t2.data).then((s) => {
      if (s == null)
        return this.remove(e);
      t2.data = s, this.broadcast(e, s);
    });
  }
  /**
   * Gets an element from the cache.
   *
   * It is assumed the item always exist when
   * you get it. Use the has method to check
   * for the existence of it.
   */
  get(e) {
    return this.elements.get(e);
  }
  /**
   * Sets an element to the cache.
   */
  set(e, t2) {
    this.elements.set(e, t2), this.resolve(e, t2);
  }
  /**
   * Removes an key-value pair from the cache.
   */
  remove(e, t2) {
    const { broadcast: s } = { ...L, ...t2 };
    s && this.broadcast(e, void 0), this.elements.delete(e);
  }
  /**
   * Removes all the key-value pairs from the cache.
   */
  clear(e) {
    const { broadcast: t2 } = { ...S, ...e };
    if (t2)
      for (const s of this.elements.keys())
        this.broadcast(s, void 0);
    this.elements.clear();
  }
  /**
   * Determines if the given key exists
   * in the cache.
   */
  has(e) {
    return this.elements.has(e);
  }
  /**
   * Subscribes the callback to the given key.
   */
  subscribe(e, t2) {
    this.event.subscribe(e, t2);
  }
  /**
   * Unsubscribes to the given key events.
   */
  unsubscribe(e, t2) {
    this.event.unsubscribe(e, t2);
  }
  /**
   * Broadcasts a value change  on all subscribed instances.
   */
  broadcast(e, t2) {
    this.event.emit(e, t2);
  }
};
var x = {
  cache: new q(),
  errors: new I(),
  fetcher: async (r) => {
    const e = await fetch(r);
    if (!e.ok)
      throw Error("Not a 2XX response.");
    return e.json();
  },
  fallbackData: void 0,
  loadInitialCache: true,
  revalidateOnStart: true,
  dedupingInterval: 2e3,
  revalidateOnFocus: true,
  focusThrottleInterval: 5e3,
  revalidateOnReconnect: true,
  reconnectWhen: (r, { enabled: e }) => e && typeof window < "u" ? (window.addEventListener("online", r), () => window.removeEventListener("online", r)) : () => {
  },
  focusWhen: (r, { enabled: e, throttleInterval: t2 }) => {
    if (e && typeof window < "u") {
      let s = null;
      const i = () => {
        const a = Date.now();
        (s === null || a - s > t2) && (s = a, r());
      };
      return window.addEventListener("focus", i), () => window.removeEventListener("focus", i);
    }
    return () => {
    };
  },
  revalidateFunction: void 0
};
var E = {
  ...x,
  force: false
};
var T = {
  revalidate: true,
  revalidateOptions: { ...E },
  revalidateFunction: void 0
};
var X = {
  broadcast: false
};
var H = class {
  /**
   * Creates a new instance of SWR.
   */
  constructor(e) {
    h(this, "options");
    this.options = { ...x, ...e };
  }
  /**
   * Gets the cache of the SWR.
   */
  get cache() {
    return this.options.cache;
  }
  /**
   * Gets the cache of the SWR.
   */
  get errors() {
    return this.options.errors;
  }
  /**
   * Requests the data using the provided fetcher.
   */
  async requestData(e, t2) {
    return await Promise.resolve(t2(e)).catch((s) => {
      throw this.errors.emit(e, s), s;
    });
  }
  /**
   * Resolves the given to a SWRKey or undefined.
   */
  resolveKey(e) {
    if (typeof e == "function")
      try {
        return e();
      } catch (e2) {
        return;
      }
    return e;
  }
  /**
   * Clear the specified keys from the cache. If no keys
   * are specified, it clears all the cache keys.
   */
  clear(e, t2) {
    const s = { ...X, ...t2 };
    if (e == null)
      return this.cache.clear(s);
    if (!Array.isArray(e))
      return this.cache.remove(e, s);
    for (const i of e)
      this.cache.remove(i, s);
  }
  /**
   * Revalidates the key and mutates the cache if needed.
   */
  async revalidate(e, t2) {
    if (!e)
      throw new Error("[Revalidate] Key issue: ${key}");
    const { fetcher: s, dedupingInterval: i } = this.options, { force: a, fetcher: o, dedupingInterval: n } = {
      ...E,
      fetcher: s,
      dedupingInterval: i,
      ...t2
    };
    if (a || !this.cache.has(e) || this.cache.has(e) && this.cache.get(e).hasExpired()) {
      const c2 = this.requestData(e, o), l = c2.catch(() => {
      });
      return this.cache.set(e, new O({ data: l }).expiresIn(n)), await c2;
    }
    return this.getWait(e);
  }
  /**
   * Mutates the data of a given key with a new value.
   * This is used to replace the cache contents of the
   * given key manually.
   */
  async mutate(e, t2, s) {
    var _a;
    if (!e)
      throw new Error("[Mutate] Key issue: ${key}");
    const {
      revalidate: i,
      revalidateOptions: a,
      revalidateFunction: o
    } = {
      ...T,
      ...s
    };
    let n;
    if (typeof t2 == "function") {
      let c2;
      if (this.cache.has(e)) {
        const l = this.cache.get(e);
        l.isResolving() || (c2 = l.data);
      }
      n = t2(c2);
    } else
      n = t2;
    return this.cache.set(e, new O({ data: n })), i ? await ((_a = o == null ? void 0 : o(e, a)) != null ? _a : this.revalidate(e, a)) : n;
  }
  /**
   * Gets the data of the given key. Keep in mind
   * this data will be stale and revalidate in the background
   * unless specified otherwise.
   */
  subscribeData(e, t2) {
    if (e) {
      const s = (i) => t2(i);
      return this.cache.subscribe(e, s), () => this.cache.unsubscribe(e, s);
    }
    return () => {
    };
  }
  /**
   * Subscribes to errors on the given key.
   */
  subscribeErrors(e, t2) {
    if (e) {
      const s = (i) => t2(i);
      return this.errors.subscribe(e, s), () => this.errors.unsubscribe(e, s);
    }
    return () => {
    };
  }
  /**
   * Gets the current cached data of the given key.
   * This does not trigger any revalidation nor mutation
   * of the data.
   * - If the data has never been validated
   * (there is no cache) it will return undefined.
   * - If the item is pending to resolve (there is a request
   * pending to resolve) it will return undefined.
   */
  get(e) {
    if (e && this.cache.has(e)) {
      const t2 = this.cache.get(e);
      if (!t2.isResolving())
        return t2.data;
    }
  }
  /**
   * Gets an element from the cache. The difference
   * with the get is that this method returns a promise
   * that will resolve the the value. If there's no item
   * in the cache, it will wait for it before resolving.
   */
  getWait(e) {
    return new Promise((t2, s) => {
      const i = this.subscribeData(e, (n) => {
        if (i(), n !== void 0)
          return t2(n);
      }), a = this.subscribeErrors(e, (n) => {
        if (a(), n !== void 0)
          return s(n);
      }), o = this.get(e);
      if (o !== void 0)
        return t2(o);
    });
  }
  /**
   * Use a SWR value given the key and
   * subscribe to future changes.
   */
  subscribe(e, t2, s, i) {
    const {
      fetcher: a,
      fallbackData: o,
      loadInitialCache: n,
      revalidateOnStart: c2,
      dedupingInterval: l,
      revalidateOnFocus: A2,
      focusThrottleInterval: C,
      revalidateOnReconnect: R,
      reconnectWhen: W2,
      focusWhen: D2,
      revalidateFunction: d
    } = {
      // Current instance options
      // (includes default options)
      ...this.options,
      // Current call options.
      ...i
    }, K2 = (m) => {
      var _a;
      return (_a = d == null ? void 0 : d(this.resolveKey(e), m)) != null ? _a : this.revalidate(this.resolveKey(e), m);
    }, f = () => K2({ fetcher: a, dedupingInterval: l }), u = n ? this.get(this.resolveKey(e)) : o != null ? o : void 0, g = c2 ? f() : Promise.resolve(void 0), M = u ? Promise.resolve(u) : g;
    u && (t2 == null || t2(u));
    const v2 = t2 ? this.subscribeData(this.resolveKey(e), t2) : void 0, b = s ? this.subscribeErrors(this.resolveKey(e), s) : void 0, p2 = D2(f, {
      throttleInterval: C,
      enabled: A2
    }), w2 = W2(f, {
      enabled: R
    });
    return { unsubscribe: () => {
      v2 == null || v2(), b == null || b(), p2 == null || p2(), w2 == null || w2();
    }, dataPromise: M, revalidatePromise: g };
  }
};
function p() {
}
function D(t2) {
  return t2();
}
function q2(t2) {
  t2.forEach(D);
}
function x2(t2) {
  return typeof t2 == "function";
}
function K(t2, e) {
  return t2 != t2 ? e == e : t2 !== e || t2 && typeof t2 == "object" || typeof t2 == "function";
}
function z(t2, ...e) {
  if (t2 == null) {
    for (const r of e)
      r(void 0);
    return p;
  }
  const n = t2.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
var v = [];
function A(t2, e) {
  return {
    subscribe: y(t2, e).subscribe
  };
}
function y(t2, e = p) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (K(t2, u) && (t2 = u, n)) {
      const f = !v.length;
      for (const s of r)
        s[1](), v.push(s, t2);
      if (f) {
        for (let s = 0; s < v.length; s += 2)
          v[s][0](v[s + 1]);
        v.length = 0;
      }
    }
  }
  function a(u) {
    i(u(t2));
  }
  function d(u, f = p) {
    const s = [u, f];
    return r.add(s), r.size === 1 && (n = e(i, a) || p), u(t2), () => {
      r.delete(s), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: d };
}
function S2(t2, e, n) {
  const r = !Array.isArray(t2), i = r ? [t2] : t2;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return A(n, (d, u) => {
    let f = false;
    const s = [];
    let h2 = 0, o = p;
    const l = () => {
      if (h2)
        return;
      o();
      const b = e(r ? s[0] : s, d, u);
      a ? d(b) : o = x2(b) ? b : p;
    }, g = i.map(
      (b, m) => z(
        b,
        (R) => {
          s[m] = R, h2 &= ~(1 << m), f && l();
        },
        () => {
          h2 |= 1 << m;
        }
      )
    );
    return f = true, l(), function() {
      q2(g), o(), f = false;
    };
  });
}
var O2 = class extends H {
  /**
   * Svelte specific use of SWR.
   */
  useSWR(e, n) {
    const i = y(void 0, () => () => void 0), a = y(void 0, () => () => void 0);
    onDestroy(() => void 0);
    const d = (o, l) => this.mutate(this.resolveKey(e), o, {
      revalidateOptions: n,
      ...l
    }), u = (o) => this.revalidate(this.resolveKey(e), { ...n, ...o }), f = (o) => this.clear(this.resolveKey(e), o), s = S2([i, a], ([o, l]) => o === void 0 && l === void 0), h2 = S2([i, a], ([o, l]) => o !== void 0 && l === void 0);
    return { data: i, error: a, mutate: d, revalidate: u, clear: f, isLoading: s, isValid: h2 };
  }
};
var W = (t2) => new O2(t2);
var c = W();
var F2 = (t2, e) => c.useSWR(t2, e);
function createChunkDecoder() {
  const decoder = new TextDecoder();
  return function(chunk) {
    if (!chunk)
      return "";
    return decoder.decode(chunk, { stream: true });
  };
}
var uniqueId2 = 0;
var store2 = {};
function useCompletion({
  api = "/api/completion",
  id,
  initialCompletion = "",
  initialInput = "",
  credentials,
  headers,
  body,
  onResponse,
  onFinish,
  onError
} = {}) {
  const completionId = id || `completion-${uniqueId2++}`;
  const key = `${api}|${completionId}`;
  const {
    data,
    mutate: originalMutate,
    isLoading: isSWRLoading
  } = F2(key, {
    fetcher: () => store2[key] || initialCompletion,
    fallbackData: initialCompletion
  });
  const loading = writable(false);
  data.set(initialCompletion);
  const mutate = (data2) => {
    store2[key] = data2;
    return originalMutate(data2);
  };
  const completion = data;
  const error = writable(void 0);
  let abortController = null;
  async function triggerRequest(prompt, options) {
    try {
      loading.set(true);
      abortController = new AbortController();
      mutate("");
      const res = await fetch(api, {
        method: "POST",
        body: JSON.stringify({
          prompt,
          ...body,
          ...options == null ? void 0 : options.body
        }),
        headers: {
          ...headers,
          ...options == null ? void 0 : options.headers
        },
        signal: abortController.signal,
        credentials
      }).catch((err) => {
        throw err;
      });
      if (onResponse) {
        try {
          await onResponse(res);
        } catch (err) {
          throw err;
        }
      }
      if (!res.ok) {
        throw new Error(
          await res.text() || "Failed to fetch the chat response."
        );
      }
      if (!res.body) {
        throw new Error("The response body is empty.");
      }
      let result = "";
      const reader = res.body.getReader();
      const decoder = createChunkDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        result += decoder(value);
        mutate(result);
        if (abortController === null) {
          reader.cancel();
          break;
        }
      }
      if (onFinish) {
        onFinish(prompt, result);
      }
      abortController = null;
      return result;
    } catch (err) {
      if (err.name === "AbortError") {
        abortController = null;
        return null;
      }
      if (onError && error instanceof Error) {
        onError(error);
      }
      error.set(err);
    } finally {
      loading.set(false);
    }
  }
  const complete = async (prompt, options) => {
    return triggerRequest(prompt, options);
  };
  const stop = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  const setCompletion = (completion2) => {
    mutate(completion2);
  };
  const input = writable(initialInput);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = get_store_value(input);
    if (!inputValue)
      return;
    return complete(inputValue);
  };
  return {
    completion,
    complete,
    error,
    stop,
    setCompletion,
    input,
    handleSubmit,
    isLoading: isSWRLoading || loading
  };
}
const CustomPromptBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_completion;
  let $t, $$unsubscribe_t;
  let $$unsubscribe_input;
  let $$unsubscribe_isLoading;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { className = "" } = $$props;
  let { handleInsert = (v2) => {
  } } = $$props;
  let { defaultPrompt = "" } = $$props;
  let { alignPopover = "left" } = $$props;
  let { isHTML = false } = $$props;
  let openPopover = false;
  let prompt = defaultPrompt;
  const { input, handleSubmit, completion, isLoading } = useCompletion({ api: "/api/completion/customprompt" });
  $$unsubscribe_input = subscribe(input, (value) => value);
  $$unsubscribe_completion = subscribe(completion, (value) => value);
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => value);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.handleInsert === void 0 && $$bindings.handleInsert && handleInsert !== void 0)
    $$bindings.handleInsert(handleInsert);
  if ($$props.defaultPrompt === void 0 && $$bindings.defaultPrompt && defaultPrompt !== void 0)
    $$bindings.defaultPrompt(defaultPrompt);
  if ($$props.alignPopover === void 0 && $$bindings.alignPopover && alignPopover !== void 0)
    $$bindings.alignPopover(alignPopover);
  if ($$props.isHTML === void 0 && $$bindings.isHTML && isHTML !== void 0)
    $$bindings.isHTML(isHTML);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    prompt = defaultPrompt;
    $$rendered = `<div class="${escape(className, true) + " relative z-[100]"}">${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        contained: true,
        color: "text-primary-700 dark:bg-neutral-500 dark:text-white",
        size: "large",
        onClick: () => openPopover = !openPopover
      },
      {},
      {
        default: () => {
          return `${validate_component(MagicWandFilled, "MagicWandFilled").$$render($$result, { size: 16, class: "carbon-icon" }, {}, {})} ${validate_component(Popover$1, "Popover").$$render(
            $$result,
            {
              caret: true,
              align: alignPopover,
              open: openPopover
            },
            {
              open: ($$value) => {
                openPopover = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<button class="p-2 w-[300px] h-[220px] text-start" type="button">${`<div class="h-full"><p class="text-sm font-medium mb-2 ml-1">${escape($t("ai.help_me"))}</p> <textarea class="w-full border-0 rounded-lg h-[65%] text-sm m-0 dark:text-black"${add_attribute("placeholder", $t("ai.placeholder"), 0)}>${escape(prompt || "")}</textarea> <button class="flex text-xs px-4 py-2 m-0 border rounded-md font-medium" type="button">${escape($t("ai.text"))}</button></div>`}</button>`;
              }
            }
          )}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_completion();
  $$unsubscribe_t();
  $$unsubscribe_input();
  $$unsubscribe_isLoading();
  return $$rendered;
});
const css = {
  code: ".form-textarea.svelte-8xff7c{box-shadow:none !important}",
  map: null
};
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value2) => $t = value2);
  let { label = "" } = $$props;
  let { disabled = false } = $$props;
  let { placeholder = $t("course.navItem.lessons.exercises.all_exercises.write_your_answer") } = $$props;
  let { value = "" } = $$props;
  let { rows = 3 } = $$props;
  let { className = "" } = $$props;
  let { labelClassName = "" } = $$props;
  let { bgColor = "bg-gray-50 focus:bg-primary-50 dark:bg-neutral-700 dark:text-white" } = $$props;
  let { helperMessage = "" } = $$props;
  let { errorMessage = "" } = $$props;
  let { isRequired = false } = $$props;
  let { onChange = () => {
  } } = $$props;
  let { ref = null } = $$props;
  let { isAIEnabled = false } = $$props;
  let { initAIPrompt = "" } = $$props;
  let { aiAlignPopover = "left" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.labelClassName === void 0 && $$bindings.labelClassName && labelClassName !== void 0)
    $$bindings.labelClassName(labelClassName);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.helperMessage === void 0 && $$bindings.helperMessage && helperMessage !== void 0)
    $$bindings.helperMessage(helperMessage);
  if ($$props.errorMessage === void 0 && $$bindings.errorMessage && errorMessage !== void 0)
    $$bindings.errorMessage(errorMessage);
  if ($$props.isRequired === void 0 && $$bindings.isRequired && isRequired !== void 0)
    $$bindings.isRequired(isRequired);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.isAIEnabled === void 0 && $$bindings.isAIEnabled && isAIEnabled !== void 0)
    $$bindings.isAIEnabled(isAIEnabled);
  if ($$props.initAIPrompt === void 0 && $$bindings.initAIPrompt && initAIPrompt !== void 0)
    $$bindings.initAIPrompt(initAIPrompt);
  if ($$props.aiAlignPopover === void 0 && $$bindings.aiAlignPopover && aiAlignPopover !== void 0)
    $$bindings.aiAlignPopover(aiAlignPopover);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<label for="text-field" class="${"block w-full relative " + escape(className, true) + " svelte-8xff7c"}">${label ? `<p class="${"dark:text-white text-left w-full flex items-center justify-between " + escape(labelClassName, true) + " svelte-8xff7c"}"><span>${escape(label)} ${isRequired ? `<span class="text-red-700" data-svelte-h="svelte-1qj2sto">*</span>` : ``}</span> ${isAIEnabled ? `${validate_component(CustomPromptBtn, "CustomPromptBtn").$$render(
      $$result,
      {
        alignPopover: aiAlignPopover,
        handleInsert: (v2) => {
          value = v2;
        },
        defaultPrompt: initAIPrompt
      },
      {
        defaultPrompt: ($$value) => {
          initAIPrompt = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</p>` : ``}  <textarea ${disabled ? "disabled" : ""}${add_attribute("rows", rows, 0)}${add_attribute("placeholder", placeholder, 0)} ${isRequired ? "required" : ""} class="${"form-textarea border-l-0 border-r-0 border-t-0 border-b-2 border-gray-200 dark:border-neutral-600 focus:border-l-0 focus:border-r-0 rounded-t-md focus:border-t-0 focus:border-b-2 focus:border-primary-600 mt-1 block w-full " + escape(bgColor, true) + " " + escape(!!errorMessage ? "border-red-500" : "border-gray-300", true) + " svelte-8xff7c"}"${add_attribute("this", ref, 0)}>${escape(value || "")}</textarea> ${!!errorMessage ? `<p class="text-sm text-red-500">${escape(errorMessage)}</p>` : `${helperMessage ? `<p class="text-sm text-gray-500 dark:text-white">${escape(helperMessage)}</p>` : ``}`} ${slots.iconbutton ? slots.iconbutton({}) : ``} </label>`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { CustomPromptBtn as C, MagicWandFilled as M, TextArea as T, useCompletion as u };
//# sourceMappingURL=TextArea-9e2a2a4d.js.map
