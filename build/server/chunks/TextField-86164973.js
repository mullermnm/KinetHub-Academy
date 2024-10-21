import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from './ssr-10c5b872.js';
import { I as IconButton } from './index9-eea8802c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b172ed79-854a-4828-9eb0-5454457a7d6f", e._sentryDebugIdIdentifier = "sentry-dbid-b172ed79-854a-4828-9eb0-5454457a7d6f");
  } catch (e2) {
  }
}();
/* empty css                                         */const PasswordEye = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isClosed = true } = $$props;
  if ($$props.isClosed === void 0 && $$bindings.isClosed && isClosed !== void 0)
    $$bindings.isClosed(isClosed);
  return `${isClosed ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.6 11.3L3.3 10.6C2.6 9.8 1.9 9 1.5 8C2.5 5.5 5.3 3.5 8 3.5C8.7 3.5 9.4 3.6 10 3.9L10.8 3.1C9.9 2.7 9 2.5 8 2.5C4.7 2.6 1.7 4.7 0.5 7.8V8.1C1 9.3 1.7 10.4 2.6 11.3ZM12.6 4.1C13.9 5 14.9 6.3 15.5 7.8V8.2C14.3 11.3 11.3 13.4 8 13.5C6.7 13.4 5.4 13.1 4.3 12.4L1.7 15L1 14.3L14.3 1L15 1.7L12.6 4.1ZM7.8 6.1C6.9 6.1 6.1 6.9 6 7.9L5.1 8.8C5 8.3 5 7.7 5.1 7.2C5.5 5.6 7.2 4.7 8.7 5.2L7.8 6.1ZM10 8C10 9.1 9.1 10 8 10C7.7 10 7.3 9.9 7 9.7L9.7 7C9.9 7.3 10 7.6 10 8ZM5 11.7C5.9 12.2 7 12.5 8 12.5C10.6 12.5 13.4 10.5 14.5 8C13.9 6.7 13 5.6 11.9 4.8L10.5 6.2C11.2 7.2 11.2 8.6 10.5 9.6C9.5 11 7.7 11.3 6.3 10.4L5 11.7Z" fill="#ADADAD"></path></svg>` : `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path d="M0.666748 8.00008C0.666748 8.00008 3.33341 2.66675 8.00008 2.66675C12.6667 2.66675 15.3334 8.00008 15.3334 8.00008C15.3334 8.00008 12.6667 13.3334 8.00008 13.3334C3.33341 13.3334 0.666748 8.00008 0.666748 8.00008Z" stroke="#ADADAD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#ADADAD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg>`}`;
});
const css = {
  code: ".form-input.svelte-tjgfuu{box-shadow:none !important}.password-eye.svelte-tjgfuu{position:absolute;top:30px;right:6px}input.svelte-tjgfuu::-webkit-outer-spin-button,input.svelte-tjgfuu::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}",
  map: null
};
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { value = null } = $$props;
  let { name = "" } = $$props;
  let { onKeyDown = (e) => {
  } } = $$props;
  let { className = "" } = $$props;
  let { inputClassName = "" } = $$props;
  let { labelClassName = "font-light" } = $$props;
  let { bgColor = "bg-gray-100 focus:bg-primary-50 dark:bg-neutral-700 dark:text-white" } = $$props;
  let { type = "text" } = $$props;
  let { isPassword = false } = $$props;
  let { autoFocus = false } = $$props;
  let { isRequired = false } = $$props;
  let { isDisabled = false } = $$props;
  let { min = void 0 } = $$props;
  let { max = void 0 } = $$props;
  let { errorMessage = "" } = $$props;
  let { helperMessage = "" } = $$props;
  let { autoComplete = true } = $$props;
  let { onChange = () => {
  } } = $$props;
  let { onInputChange = () => {
  } } = $$props;
  let ref = void 0;
  let fieldNode = void 0;
  let focusClass = "";
  function typeAction(node) {
    if (!node)
      return;
    node.type = type || "text";
    if (isRequired) {
      node.required = true;
    }
    fieldNode = node;
  }
  function handlePasswordEye() {
    type = type === "password" ? "text" : "password";
    typeAction(fieldNode);
  }
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.onKeyDown === void 0 && $$bindings.onKeyDown && onKeyDown !== void 0)
    $$bindings.onKeyDown(onKeyDown);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.inputClassName === void 0 && $$bindings.inputClassName && inputClassName !== void 0)
    $$bindings.inputClassName(inputClassName);
  if ($$props.labelClassName === void 0 && $$bindings.labelClassName && labelClassName !== void 0)
    $$bindings.labelClassName(labelClassName);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.isPassword === void 0 && $$bindings.isPassword && isPassword !== void 0)
    $$bindings.isPassword(isPassword);
  if ($$props.autoFocus === void 0 && $$bindings.autoFocus && autoFocus !== void 0)
    $$bindings.autoFocus(autoFocus);
  if ($$props.isRequired === void 0 && $$bindings.isRequired && isRequired !== void 0)
    $$bindings.isRequired(isRequired);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.errorMessage === void 0 && $$bindings.errorMessage && errorMessage !== void 0)
    $$bindings.errorMessage(errorMessage);
  if ($$props.helperMessage === void 0 && $$bindings.helperMessage && helperMessage !== void 0)
    $$bindings.helperMessage(helperMessage);
  if ($$props.autoComplete === void 0 && $$bindings.autoComplete && autoComplete !== void 0)
    $$bindings.autoComplete(autoComplete);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.onInputChange === void 0 && $$bindings.onInputChange && onInputChange !== void 0)
    $$bindings.onInputChange(onInputChange);
  $$result.css.add(css);
  return `<label class="${"block relative " + escape(className, true) + " svelte-tjgfuu"}">${label ? `<p for="text-field" class="${"text-sm dark:text-white text-left m-0 " + escape(labelClassName, true) + " svelte-tjgfuu"}">${escape(label)} ${isRequired ? `<span class="text-red-700" data-svelte-h="svelte-1qj2sto">*</span>` : ``}</p>` : ``} <input class="${"form-input border-l-0 border-r-0 border-t-0 border-b-2 border-gray-200 dark:border-neutral-600 focus:border-l-0 focus:border-r-0 rounded-t-md focus:border-t-0 focus:border-b-2 " + escape(inputClassName, true) + " " + escape(focusClass, true) + " " + escape(isDisabled && "hover:cursor-not-allowed opacity-50", true) + " dark:text-black p-3 mt-1 block w-full " + escape(bgColor, true) + " " + escape(errorMessage ? "border-red-600" : "", true) + " svelte-tjgfuu"}"${add_attribute("placeholder", placeholder, 0)} ${isRequired ? "required" : ""} ${isDisabled ? "disabled" : ""}${add_attribute("autocomplete", autoComplete ? "on" : "off", 0)}${add_attribute("name", name, 0)}${add_attribute("min", min, 0)}${add_attribute("max", max, 0)}${add_attribute("value", value, 0)}${add_attribute("this", ref, 0)}> ${isPassword ? `<span class="password-eye svelte-tjgfuu">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      value: "write-code",
      onClick: handlePasswordEye
    },
    {},
    {
      default: () => {
        return `${validate_component(PasswordEye, "PasswordEye").$$render(
          $$result,
          {
            isClosed: type === "password" ? true : false
          },
          {},
          {}
        )}`;
      }
    }
  )}</span>` : ``} ${errorMessage ? `<p class="text-sm text-red-500">${escape(errorMessage)}</p>` : `${helperMessage ? `<p class="dark:text-white text-sm opacity-70">${escape(helperMessage)}</p>` : ``}`} </label>`;
});

export { TextField as T };
//# sourceMappingURL=TextField-86164973.js.map
