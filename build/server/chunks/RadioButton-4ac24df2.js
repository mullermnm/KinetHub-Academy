import { d as compute_rest_props, f as compute_slots, s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, j as getContext, d as spread, f as escape_object, a as add_attribute, i as add_classes, e as escape } from './ssr-10c5b872.js';
import { w as writable } from './index2-aea858a5.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9a18a5fe-2bab-41f0-98a9-7ef4ad169937", e._sentryDebugIdIdentifier = "sentry-dbid-9a18a5fe-2bab-41f0-98a9-7ef4ad169937");
  } catch (e2) {
  }
}();
const RadioButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "checked",
    "disabled",
    "required",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $selectedValue, $$unsubscribe_selectedValue;
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("RadioButtonGroup");
  const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : void 0);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value2) => $selectedValue = value2);
  if (ctx) {
    ctx.add({ id, checked, disabled, value });
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  checked = $selectedValue === value;
  $$unsubscribe_selectedValue();
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--radio-button-wrapper " + (labelPosition === "left" ? "bx--radio-button-wrapper--label-left" : "")
  })}><input type="radio"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("value", value, 0)}${add_classes("bx--radio-button".trim())}${add_attribute("this", ref, 0)}> <label${add_attribute("for", id, 0)}${add_classes("bx--radio-button__label".trim())}><span${add_classes("bx--radio-button__appearance".trim())}></span> ${labelText || $$slots.labelText ? `<span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : ` ${escape(labelText)} `}</span>` : ``}</label></div>`;
});
const RadioButton$1 = RadioButton;

export { RadioButton$1 as R };
//# sourceMappingURL=RadioButton-4ac24df2.js.map
