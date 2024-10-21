import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each } from './ssr-10c5b872.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1f9f461f-19bb-4e7d-8775-adab523b54ab", e._sentryDebugIdIdentifier = "sentry-dbid-1f9f461f-19bb-4e7d-8775-adab523b54ab");
  } catch (e2) {
  }
}();
const css$1 = {
  code: ".tooltip.svelte-1sud66r.svelte-1sud66r{position:relative;display:inline-block}.right.svelte-1sud66r.svelte-1sud66r{left:100%;right:unset !important}.bottom.svelte-1sud66r.svelte-1sud66r{bottom:-75% !important;left:-80%;right:unset !important;top:unset !important}.tooltip.svelte-1sud66r .tooltiptext.svelte-1sud66r{color:#fff;padding:8px;font-size:0.625rem;font-family:'Roboto', 'Helvetica', 'Arial', sans-serif;font-weight:500;line-height:1.4em;border-radius:8px;background-color:#000;visibility:hidden;text-align:center;font-weight:bold;white-space:nowrap;font-size:13px;position:absolute;z-index:2;top:20%;right:100%;margin-left:5px}.tooltip.svelte-1sud66r:hover .tooltiptext.svelte-1sud66r{visibility:visible}.shortcut.svelte-1sud66r span.svelte-1sud66r{font-weight:lighter;padding:2px 4px;background-color:rgba(97, 97, 97, 0.9);border-radius:2px;margin-left:5px}",
  map: null
};
const ToolTip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { hotkeys = [] } = $$props;
  let { direction = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.hotkeys === void 0 && $$bindings.hotkeys && hotkeys !== void 0)
    $$bindings.hotkeys(hotkeys);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  $$result.css.add(css$1);
  return `${!!title ? `<div class="tooltip svelte-1sud66r"><span class="${"tooltiptext z-20 " + escape(
    direction === "right" ? "right" : direction === "top" ? "top" : direction === "bottom" ? "bottom" : "left",
    true
  ) + " svelte-1sud66r"}">${escape(title)} ${Array.isArray(hotkeys) && hotkeys.length ? `<span class="shortcut svelte-1sud66r">${each(hotkeys, (hotkey) => {
    return `<span class="svelte-1sud66r">${escape(hotkey)}</span>`;
  })}</span>` : ``}</span> ${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const css = {
  code: ".root.svelte-1wc5ham{flex:0 0 auto;padding:12px;font-size:1.5rem;text-align:center;transition:background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;border-radius:50%;border:0;cursor:pointer;margin:0;display:flex;outline:0;align-items:center;justify-content:center;text-decoration:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;width:-moz-fit-content;width:fit-content}.root.disabled.svelte-1wc5ham{cursor:not-allowed;color:rgba(0, 0, 0, 0.07)}.root.svelte-1wc5ham:hover{background-color:rgba(0, 0, 0, 0.04)}.root.small.svelte-1wc5ham{padding:5px}.contained.svelte-1wc5ham{background-color:rgba(0, 0, 0, 0.04)}",
  map: null
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = (v) => {
  } } = $$props;
  let { stopPropagation = false } = $$props;
  let { disabled = false } = $$props;
  let { selected = false } = $$props;
  let { buttonClassName = "" } = $$props;
  let { contained = false } = $$props;
  let { value = "" } = $$props;
  let { type = "button" } = $$props;
  let { size = "large" } = $$props;
  let { color = "" } = $$props;
  let { toolTipProps = { title: "", hotkeys: [], direction: "" } } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.stopPropagation === void 0 && $$bindings.stopPropagation && stopPropagation !== void 0)
    $$bindings.stopPropagation(stopPropagation);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.buttonClassName === void 0 && $$bindings.buttonClassName && buttonClassName !== void 0)
    $$bindings.buttonClassName(buttonClassName);
  if ($$props.contained === void 0 && $$bindings.contained && contained !== void 0)
    $$bindings.contained(contained);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.toolTipProps === void 0 && $$bindings.toolTipProps && toolTipProps !== void 0)
    $$bindings.toolTipProps(toolTipProps);
  $$result.css.add(css);
  return `${validate_component(ToolTip, "ToolTip").$$render(
    $$result,
    {
      title: toolTipProps.title,
      hotkeys: disabled ? [] : toolTipProps.hotkeys,
      direction: toolTipProps.direction
    },
    {},
    {
      default: () => {
        return `<button class="${"root " + escape(color, true) + " " + escape(selected && "active", true) + " " + escape(disabled && "disabled", true) + " " + escape(size, true) + " " + escape(contained && "contained dark:bg-neutral-700", true) + " " + escape(buttonClassName, true) + " svelte-1wc5ham"}" ${disabled ? "disabled" : ""}${add_attribute("type", type, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
      }
    }
  )}`;
});

export { IconButton as I };
//# sourceMappingURL=index9-eea8802c.js.map
