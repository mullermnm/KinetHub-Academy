import { f as compute_slots } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, e as escape, k as add_styles } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5a8e781f-95c0-43a2-8e6d-982cd0aae805", e._sentryDebugIdIdentifier = "sentry-dbid-5a8e781f-95c0-43a2-8e6d-982cd0aae805");
  } catch (e2) {
  }
}();
const HTMLRender = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { content = "" } = $$props;
  let { className = "" } = $$props;
  let { id = "" } = $$props;
  let { disableMaxWidth = false } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.disableMaxWidth === void 0 && $$bindings.disableMaxWidth && disableMaxWidth !== void 0)
    $$bindings.disableMaxWidth(disableMaxWidth);
  return `<article${add_attribute("id", id, 0)} class="${"preview prose prose-sm sm:prose " + escape(className, true) + " dark:text-white"}"${add_styles({
    "max-width": disableMaxWidth ? "unset" : void 0
  })}>${$$slots.content ? `${slots.content ? slots.content({}) : ``}` : `<!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END -->`}</article>`;
});

export { HTMLRender as H };
//# sourceMappingURL=HTMLRender-9a6e04f8.js.map
