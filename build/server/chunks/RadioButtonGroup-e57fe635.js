import { d as compute_rest_props, f as compute_slots, s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, g as createEventDispatcher, s as setContext, d as spread, h as escape_attribute_value, f as escape_object, i as add_classes, e as escape } from './ssr-10c5b872.js';
import { w as writable } from './index2-aea858a5.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bbfebe5d-5cf2-49fa-9b6e-94ba4689332b", e._sentryDebugIdIdentifier = "sentry-dbid-bbfebe5d-5cf2-49fa-9b6e-94ba4689332b");
  } catch (e2) {
  }
}();
const RadioButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "selected",
    "disabled",
    "legendText",
    "hideLegend",
    "labelPosition",
    "orientation",
    "id"
  ]);
  let $$slots = compute_slots(slots);
  let $$unsubscribe_selectedValue;
  let { selected = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { legendText = "" } = $$props;
  let { hideLegend = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { id = void 0 } = $$props;
  const dispatch = createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => value);
  setContext("RadioButtonGroup", {
    selectedValue,
    add: ({ checked, value }) => {
      if (checked) {
        selectedValue.set(value);
      }
    },
    update: (value) => {
      selected = value;
    }
  });
  selectedValue.subscribe((value) => {
    selected = value;
    dispatch("change", value);
  });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.legendText === void 0 && $$bindings.legendText && legendText !== void 0)
    $$bindings.legendText(legendText);
  if ($$props.hideLegend === void 0 && $$bindings.hideLegend && hideLegend !== void 0)
    $$bindings.hideLegend(hideLegend);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$unsubscribe_selectedValue();
  return `  <div${spread([{ id: escape_attribute_value(id) }, escape_object($$restProps)], { classes: "bx--form-item" })}><fieldset ${disabled ? "disabled" : ""}${add_classes(("bx--radio-button-group " + (orientation === "vertical" ? "bx--radio-button-group--vertical" : "") + " " + (labelPosition === "left" ? "bx--radio-button-group--label-left" : "") + " " + (labelPosition === "right" ? "bx--radio-button-group--label-right" : "")).trim())}>${legendText || $$slots.legendText ? `<legend${add_classes(("bx--label " + (hideLegend ? "bx--visually-hidden" : "")).trim())}>${slots.legendText ? slots.legendText({}) : `${escape(legendText)}`}</legend>` : ``} ${slots.default ? slots.default({}) : ``}</fieldset></div>`;
});
const RadioButtonGroup$1 = RadioButtonGroup;

export { RadioButtonGroup$1 as R };
//# sourceMappingURL=RadioButtonGroup-e57fe635.js.map
