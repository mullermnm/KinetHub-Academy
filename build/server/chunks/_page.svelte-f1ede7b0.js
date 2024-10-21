import { s as subscribe, e as set_store_value, d as compute_rest_props, g as get_store_value, c as null_to_empty, h as assign, i as is_function, n as noop } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute, d as spread, h as escape_attribute_value, f as escape_object, s as setContext, j as getContext, i as add_classes } from './ssr-10c5b872.js';
import { u as user, p as profile } from './user-e923b6d4.js';
import { A as Add } from './Add-78ef4d23.js';
import { L as Locked } from './Locked-3612b17f.js';
import { g as goto } from './navigation-cd282f65.js';
import dayjs from 'dayjs';
import { d as derived, w as writable, r as readable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';
import { t as tick } from './scheduler-aae59940.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { f as formatDate, a as formatUserUpcomingData } from './dashboard-f779ca70.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { M as Modal } from './index8-59a07edf.js';
import { p as page } from './stores-793c1e19.js';
import { c as currentOrg, u as userUpcomingData, i as isOrgAdmin, f as currentOrgPath } from './org-8fc26a61.js';
import './config-8c22ba68.js';
import { t as t2 } from './translations-90190f83.js';
import { V as VisitOrgSite } from './VisitOrgSite-0191bbde.js';
import { g as getGreeting } from './date-30c46a0e.js';
import { g as globalStore } from './app-d638cf5d.js';
import './index15-c5761f1e.js';
import 'dayjs/plugin/isYesterday.js';
import 'dayjs/plugin/isToday.js';
import 'dayjs/plugin/isTomorrow.js';
import '@supabase/supabase-js';
import './index9-eea8802c.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './ArrowTopRight-dc8d0443.js';
import 'dayjs/plugin/relativeTime.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5617c672-d428-432c-8a3e-b327ee833551", e._sentryDebugIdIdentifier = "sentry-dbid-5617c672-d428-432c-8a3e-b327ee833551");
  } catch (e2) {
  }
}();
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function cubicInOut(t2) {
  return t2 < 0.5 ? 4 * t2 * t2 * t2 : 0.5 * Math.pow(2 * t2 - 2, 3) + 1;
}
function cubicOut(t2) {
  const f = t2 - 1;
  return f * f * f + 1;
}
function crossfade({ fallback, ...defaults }) {
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from_node, node, params) {
    const {
      delay = 0,
      duration: duration2 = (d2) => Math.sqrt(d2) * 30,
      easing = cubicOut
    } = assign(assign({}, defaults), params);
    const from = from_node.getBoundingClientRect();
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration2) ? duration2(d) : duration2,
      easing,
      css: (t2, u) => `
				opacity: ${t2 * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t2 + (1 - t2) * dw}, ${t2 + (1 - t2) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, node);
      return () => {
        if (counterparts.has(params.key)) {
          const other_node = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(other_node, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [transition(to_send, to_receive, false), transition(to_receive, to_send, true)];
}
const Unlocked = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M24,14H12V8a4,4,0,0,1,8,0h2A6,6,0,0,0,10,8v6H8a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V16A2,2,0,0,0,24,14Zm0,14H8V16H24Z"></path></svg>`;
});
const PICKER_TYPES = ["days", "months", "years"];
const updateSelected = (value, property) => (state) => {
  const newState = { ...state, [property]: value };
  return { ...newState, selected: new Date(newState.year, newState.month, newState.day) };
};
const pipe = (...fns) => (val) => fns.reduce((accum, fn) => fn(accum), val);
const zeroDay = (date) => dayjs(date).startOf("day").toDate();
const get = ({ selected, start, end, startOfWeekIndex = 0, shouldEnlargeDay = false }) => {
  const { subscribe: subscribe2, set, update } = writable({
    open: false,
    hasChosen: false,
    selected,
    start: zeroDay(start),
    end: zeroDay(end),
    shouldEnlargeDay,
    enlargeDay: false,
    year: selected.getFullYear(),
    month: selected.getMonth(),
    day: selected.getDate(),
    activeView: "days",
    activeViewDirection: 1,
    startOfWeekIndex
  });
  return {
    set,
    subscribe: subscribe2,
    getState() {
      return get_store_value({ subscribe: subscribe2 });
    },
    enlargeDay(enlargeDay = true) {
      update((state) => ({ ...state, enlargeDay }));
    },
    getSelectableVector(date) {
      const { start: start2, end: end2 } = this.getState();
      if (date < start2)
        return -1;
      if (date > end2)
        return 1;
      return 0;
    },
    isSelectable(date, clamping = []) {
      const vector = this.getSelectableVector(date);
      if (vector === 0)
        return true;
      if (!clamping.length)
        return false;
      const clamped = this.clampValue(dayjs(date), clamping).toDate();
      return this.isSelectable(clamped);
    },
    clampValue(day, clampable) {
      const vector = this.getSelectableVector(day.toDate());
      if (vector === 0)
        return day;
      const boundaryKey = vector === 1 ? "end" : "start";
      const boundary = dayjs(this.getState()[boundaryKey]);
      return clampable.reduce((day2, type) => day2[type](boundary[type]()), day);
    },
    add(amount, unit, clampable = []) {
      update(({ month, year, day, ...state }) => {
        const d = this.clampValue(dayjs(new Date(year, month, day)).add(amount, unit), clampable);
        if (!this.isSelectable(d.toDate()))
          return { ...state, year, month, day };
        return {
          ...state,
          month: d.month(),
          year: d.year(),
          day: d.date(),
          selected: d.toDate()
        };
      });
    },
    setActiveView(newActiveView) {
      const newIndex = PICKER_TYPES.indexOf(newActiveView);
      if (newIndex === -1)
        return;
      update(({ activeView, ...state }) => ({
        ...state,
        activeViewDirection: PICKER_TYPES.indexOf(activeView) > newIndex ? -1 : 1,
        activeView: newActiveView
      }));
    },
    setYear(year) {
      update(updateSelected(year, "year"));
    },
    setMonth(month) {
      update(updateSelected(month, "month"));
    },
    setDay(day) {
      update(
        pipe(
          updateSelected(day.getDate(), "day"),
          updateSelected(day.getMonth(), "month"),
          updateSelected(day.getFullYear(), "year")
        )
      );
    },
    close(extraState) {
      update((state) => ({ ...state, ...extraState, open: false }));
    },
    selectDay() {
      this.close({ hasChosen: true });
    },
    getCalendarPage(month, year) {
      const { startOfWeekIndex: startOfWeekIndex2 } = this.getState();
      let last = { date: new Date(year, month, 1), outsider: false };
      const days = [];
      while (last.date.getMonth() === month) {
        days.push(last);
        const date = new Date(last.date);
        date.setDate(last.date.getDate() + 1);
        last = { date, outsider: false };
      }
      while (days[0].date.getDay() !== startOfWeekIndex2) {
        const date = new Date(days[0].date);
        date.setDate(days[0].date.getDate() - 1);
        days.unshift({
          date,
          outsider: true
        });
      }
      last.outsider = true;
      while (days.length < 42) {
        days.push(last);
        last = { date: new Date(last.date), outsider: true };
        last.date.setDate(last.date.getDate() + 1);
      }
      return days;
    }
  };
};
const datepickerStore = { get };
const storeContextKey = {};
const keyControlsContextKey = {};
const themeContextKey = {};
const Crossfade = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key = {} } = $$props;
  let { duration: duration2 = (d) => Math.max(150, Math.sqrt(d * 150)) } = $$props;
  let { easing = cubicInOut } = $$props;
  const [send, receive] = crossfade({
    duration: duration2,
    easing,
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      return {
        duration: duration2,
        easing,
        css: (t2) => `
					transform: ${transform} scale(${t2});
					opacity: ${t2}
				`
      };
    }
  });
  const store = readable({ key, send, receive });
  setContext("crossfade", store);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.duration === void 0 && $$bindings.duration && duration2 !== void 0)
    $$bindings.duration(duration2);
  if ($$props.easing === void 0 && $$bindings.easing && easing !== void 0)
    $$bindings.easing(easing);
  return `${slots.default ? slots.default({ key, send, receive }) : ``}`;
});
const css$b = {
  code: ".trigger.svelte-ff0ii6{display:inline-block}.sc-popover.svelte-ff0ii6{position:relative;display:inline-block}.contents-wrapper.svelte-ff0ii6{transform:translate(-50%, -50%);position:absolute;top:50%;left:50%;z-index:10;overflow:hidden}",
  map: null
};
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { style = "" } = $$props;
  let translateY = 0;
  let translateX = 0;
  let popover;
  let triggerWidth;
  let triggerHeight;
  let contentsWrapper;
  const close = () => {
    isOpen = false;
  };
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  $$result.css.add(css$b);
  return `${validate_component(Crossfade, "Crossfade").$$render($$result, {}, {}, {
    default: ({ receive, send, key }) => {
      return `<div class="sc-popover svelte-ff0ii6" style="${escape(style, true) + "; min-width: " + escape(triggerWidth + 1, true) + "px; min-height: " + escape(triggerHeight + 1, true) + "px;"}"${add_attribute("this", popover, 0)}>${!isOpen ? `<div class="trigger svelte-ff0ii6">${slots.default ? slots.default({ key, send, receive }) : ``}</div>` : `<div class="contents-wrapper svelte-ff0ii6" style="${"transform: translate(-50%,-50%) translate(" + escape(translateX, true) + "px, " + escape(translateY, true) + "px)"}"${add_attribute("this", contentsWrapper, 0)}><div class="contents"><div class="contents-inner">${slots.contents ? slots.contents({ key, send, receive }) : ``}</div></div></div>`}</div>`;
    }
  })}`;
});
const light = {
  calendar: {
    width: "700px",
    maxWidth: "100vw",
    legend: {
      height: "45px"
    },
    shadow: "0px 10px 26px rgba(0, 0, 0, 0.25)",
    colors: {
      text: {
        primary: "#333",
        highlight: "#fff"
      },
      background: {
        primary: "#fff",
        highlight: "#eb7400",
        hover: "#eee"
      },
      border: "#eee"
    },
    font: {
      regular: "1.5em",
      large: "37em"
    },
    grid: {
      disabledOpacity: ".35",
      outsiderOpacity: ".6"
    }
  }
};
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let { theme = {} } = $$props;
  let { appliedTheme } = $$props;
  let { prefix = "--sc-theme" } = $$props;
  let { defaultTheme = light } = $$props;
  const store = writable();
  setContext(themeContextKey, store);
  const getStyle = (obj) => Object.entries(obj).map(([k, v]) => `${prefix}-${k}: ${v}`).join(";");
  const getTheme = (defaults, overrides = {}, base = "") => Object.entries(defaults).reduce(
    (acc, [k, v]) => {
      if (typeof v === "object")
        return {
          ...acc,
          ...getTheme(v, overrides[k], [base, k].filter(Boolean).join("-"))
        };
      return {
        ...acc,
        [[base, k].filter(Boolean).join("-")]: overrides[k] || v
      };
    },
    {}
  );
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.appliedTheme === void 0 && $$bindings.appliedTheme && appliedTheme !== void 0)
    $$bindings.appliedTheme(appliedTheme);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0)
    $$bindings.defaultTheme(defaultTheme);
  appliedTheme = getTheme(defaultTheme, theme);
  style = getStyle(appliedTheme);
  {
    store.set(appliedTheme);
  }
  return `${slots.default ? slots.default({ appliedTheme, style }) : ``}`;
});
const KEY_CODES = {
  33: "pageUp",
  34: "pageDown",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  27: "escape",
  13: "enter",
  17: "control"
};
var justThrottle = throttle;
function throttle(fn, interval, options) {
  var timeoutId = null;
  var throttledFn = null;
  var leading = options && options.leading;
  var trailing = options && options.trailing;
  if (leading == null) {
    leading = true;
  }
  if (trailing == null) {
    trailing = !leading;
  }
  if (leading == true) {
    trailing = false;
  }
  var cancel = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  var flush = function() {
    var call = throttledFn;
    cancel();
    if (call) {
      call();
    }
  };
  var throttleWrapper = function() {
    var callNow = leading && !timeoutId;
    var context = this;
    var args = arguments;
    throttledFn = function() {
      return fn.apply(context, args);
    };
    if (!timeoutId) {
      timeoutId = setTimeout(function() {
        timeoutId = null;
        if (trailing) {
          return throttledFn();
        }
      }, interval);
    }
    if (callNow) {
      callNow = false;
      return throttledFn();
    }
  };
  throttleWrapper.cancel = cancel;
  throttleWrapper.flush = flush;
  return throttleWrapper;
}
const throttle$1 = /* @__PURE__ */ getDefaultExportFromCjs(justThrottle);
const KeyControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentCtx, $$unsubscribe_currentCtx;
  let { limit = 0 } = $$props;
  let { ctx = null } = $$props;
  const currentCtx = getContext(keyControlsContextKey);
  $$unsubscribe_currentCtx = subscribe(currentCtx, (value) => $currentCtx = value);
  const key = (evt) => {
    if (ctx && !ctx.includes($currentCtx))
      return;
    const mapping = $$props[KEY_CODES[evt.keyCode]];
    if (mapping)
      mapping();
  };
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  limit ? throttle$1(key, limit) : key;
  $$unsubscribe_currentCtx();
  return ` ${slots.default ? slots.default({}) : ``}`;
});
const css$a = {
  code: ".grid.svelte-jmgdr0{display:grid;background:var(--sc-theme-calendar-colors-border);row-gap:1px;column-gap:1px;height:100%}.grid.svelte-jmgdr0>*{font-size:var(--sc-theme-calendar-font-regular);text-decoration:none;color:var(--sc-theme-calendar-colors-text-primary);transition:all 180ms ease-out;background:var(--sc-theme-calendar-colors-background-primary);display:grid;text-align:center;align-items:center}@media(max-width: 720px){.grid.svelte-jmgdr0>*{font-size:calc(var(--sc-theme-calendar-font-regular) * 0.75)}}.grid.svelte-jmgdr0>*:hover{background:var(--sc-theme-calendar-colors-background-hover)}.grid.svelte-jmgdr0>*.selected{background:var(--sc-theme-calendar-colors-background-highlight);color:var(--sc-theme-calendar-colors-text-highlight);opacity:1}.grid.svelte-jmgdr0>*.outsider{opacity:var(--sc-theme-calendar-grid-outsiderOpacity)}.grid.svelte-jmgdr0>*.disabled{opacity:var(--sc-theme-calendar-grid-disabledOpacity)}.grid.svelte-jmgdr0>*.disabled:hover{background:var(--sc-theme-calendar-colors-background-primary);cursor:default}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { template = "repeat(4, 1fr) / repeat(3, 1fr)" } = $$props;
  if ($$props.template === void 0 && $$bindings.template && template !== void 0)
    $$bindings.template(template);
  $$result.css.add(css$a);
  return `<div class="grid svelte-jmgdr0" style="${"grid-template: " + escape(template, true) + ";"}">${slots.default ? slots.default({}) : ``} </div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const css$9 = {
  code: ".grid.svelte-198r3wi.svelte-198r3wi{overflow:hidden;height:100%;display:grid}.grid.svelte-198r3wi>.svelte-198r3wi{position:absolute;top:0;left:0;right:0;bottom:0;transition-property:none !important}",
  map: null
};
const InfiniteGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let gridStyle;
  let $initialized, $$unsubscribe_initialized;
  let $dim, $$unsubscribe_dim;
  let $offset, $$unsubscribe_offset;
  let $visibleData, $$unsubscribe_visibleData;
  let { cellCount = 4 } = $$props;
  let { itemCount = 0 } = $$props;
  let { index = 0 } = $$props;
  let { vertical = true } = $$props;
  let { get: get2 } = $$props;
  let { stiffness = 0.065 } = $$props;
  let { damping = 0.9 } = $$props;
  let { useCache = true } = $$props;
  let { idKey = void 0 } = $$props;
  const move = (amount) => {
    index = Math.max(0, Math.min(itemCount - 1, index + amount));
  };
  const forceUpdate = writable(false);
  const triggerUpdate = async () => {
    await tick();
    forceUpdate.set(true);
    await tick();
    forceUpdate.set(false);
  };
  const getCached = (index2) => $visibleData.find(({ index: i }) => i === index2)?.data || get2(index2);
  let inRange = [-Infinity, Infinity];
  const initialized = writable(false);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  const dim = writable({ w: 0, h: 0 });
  $$unsubscribe_dim = subscribe(dim, (value) => $dim = value);
  const offset = spring(0, { stiffness, damping });
  $$unsubscribe_offset = subscribe(offset, (value) => $offset = value);
  const visibleData = derived(
    [dim, offset, initialized, forceUpdate],
    ([{ w, h }, $o, $initialized2, $force]) => {
      if (!w || !h || !$initialized2)
        return [];
      if ($o < inRange[0] || $o > inRange[1])
        return $visibleData;
      const cellHeight = h / cellCount;
      const start = Math.max(-1, Math.floor(-1 * $o / cellHeight) - 1);
      const baseOffset = $o % cellHeight;
      return Array(cellCount + 2).fill(0).map((_, i) => {
        const index2 = i + start;
        const pos = baseOffset + (i - 1) * cellHeight;
        if (index2 < 0 || index2 >= itemCount)
          return void 0;
        const data = $force || !useCache ? get2(index2) : getCached(index2);
        return { data, pos, index: index2 };
      }).filter(Boolean);
    },
    []
  );
  $$unsubscribe_visibleData = subscribe(visibleData, (value) => $visibleData = value);
  const updateOffset = (o) => {
    inRange = [o, $offset].sort((a, b) => a - b);
    offset.set(o, { hard: !$initialized });
  };
  if ($$props.cellCount === void 0 && $$bindings.cellCount && cellCount !== void 0)
    $$bindings.cellCount(cellCount);
  if ($$props.itemCount === void 0 && $$bindings.itemCount && itemCount !== void 0)
    $$bindings.itemCount(itemCount);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.get === void 0 && $$bindings.get && get2 !== void 0)
    $$bindings.get(get2);
  if ($$props.stiffness === void 0 && $$bindings.stiffness && stiffness !== void 0)
    $$bindings.stiffness(stiffness);
  if ($$props.damping === void 0 && $$bindings.damping && damping !== void 0)
    $$bindings.damping(damping);
  if ($$props.useCache === void 0 && $$bindings.useCache && useCache !== void 0)
    $$bindings.useCache(useCache);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.move === void 0 && $$bindings.move && move !== void 0)
    $$bindings.move(move);
  if ($$props.triggerUpdate === void 0 && $$bindings.triggerUpdate && triggerUpdate !== void 0)
    $$bindings.triggerUpdate(triggerUpdate);
  if ($$props.visibleData === void 0 && $$bindings.visibleData && visibleData !== void 0)
    $$bindings.visibleData(visibleData);
  $$result.css.add(css$9);
  type = vertical ? "rows" : "columns";
  gridStyle = `grid-template-${type}: repeat(${cellCount}, 1fr);`;
  {
    {
      if ($dim.w && $dim.h) {
        updateOffset($dim.h / cellCount * index * -1);
        if (!$initialized)
          initialized.set(true);
      }
    }
  }
  $$unsubscribe_initialized();
  $$unsubscribe_dim();
  $$unsubscribe_offset();
  $$unsubscribe_visibleData();
  return `<div class="grid svelte-198r3wi"${add_attribute("style", gridStyle, 0)}>${each($visibleData, (obj) => {
    return `<div style="${"transform: translateY(" + escape(obj.pos, true) + "px)"}" class="svelte-198r3wi">${slots.default ? slots.default({ ...obj.data, index: obj.index }) : ``} </div>`;
  })} </div>`;
});
const css$8 = {
  code: ".container.svelte-1unzsxu{display:grid;grid-template-rows:auto 1fr}.legend.svelte-1unzsxu{display:grid;grid-template:1fr / repeat(7, 1fr);height:var(--sc-theme-calendar-legend-height);z-index:2;background:var(--sc-theme-calendar-colors-background-primary);border-bottom:1px solid var(--sc-theme-calendar-colors-border);align-items:center}a.svelte-1unzsxu{font-size:1em}.stage.svelte-1unzsxu{display:grid;grid-row:2;grid-column:1}.selected-big.svelte-1unzsxu{color:var(--sc-theme-calendar-colors-background-highlight);background:var(--sc-theme-calendar-colors-background-hover);text-align:center;align-items:center;font-size:var(--sc-theme-calendar-font-large);z-index:2;opacity:1;line-height:0}@media(max-width: 720px){.selected-big.svelte-1unzsxu{font-size:calc(var(--sc-theme-calendar-font-large) * 0.7)}}",
  map: null
};
const duration = 450;
const DayPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalMonths;
  let monthIndex;
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const legend = Array(7).fill(0).map((d, i) => dayjs().day(($store.startOfWeekIndex + i) % 7).format("ddd"));
  const add = (amount) => () => store.add(amount, "day");
  const select = (day) => () => {
    if (!store.isSelectable(day))
      return;
    store.setDay(day || $store.selected);
    if (!$store.shouldEnlargeDay)
      return store.selectDay();
    store.enlargeDay();
    setTimeout(
      () => {
        store.selectDay();
        store.enlargeDay(false);
      },
      duration + 60
    );
  };
  const KEY_MAPPINGS = {
    left: add(-1),
    right: add(1),
    up: add(-7),
    down: add(7),
    enter: select(),
    escape: () => store.close()
  };
  const calPagesBetweenDates = (a, b) => {
    const yearDelta = b.getFullYear() - a.getFullYear();
    const firstPartialYear = yearDelta ? 12 - a.getMonth() : b.getMonth() - a.getMonth() + 1;
    const fullYears = yearDelta > 1 ? (yearDelta - 1) * 12 : 0;
    const lastPartialYear = yearDelta ? b.getMonth() + 1 : 0;
    return firstPartialYear + fullYears + lastPartialYear;
  };
  const get2 = (index) => {
    const d = dayjs($store.start).add(index, "month");
    return {
      days: store.getCalendarPage(d.month(), d.year())
    };
  };
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    totalMonths = calPagesBetweenDates($store.start, $store.end);
    monthIndex = calPagesBetweenDates($store.start, $store.selected) - 1;
    $$rendered = `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, KEY_MAPPINGS, { ctx: ["days"] }), {}, {})} <div class="container svelte-1unzsxu"><div class="legend svelte-1unzsxu">${each(legend, (label) => {
      return `<span>${escape(label)}</span>`;
    })}</div> ${validate_component(Crossfade, "Crossfade").$$render($$result, { duration }, {}, {
      default: ({ key, receive, send }) => {
        return `<div class="stage svelte-1unzsxu">${validate_component(InfiniteGrid, "InfiniteGrid").$$render(
          $$result,
          {
            cellCount: 1,
            itemCount: totalMonths,
            get: get2,
            index: monthIndex
          },
          {
            index: ($$value) => {
              monthIndex = $$value;
              $$settled = false;
            }
          },
          {
            default: ({ days, index }) => {
              return `${validate_component(Grid, "Grid").$$render(
                $$result,
                {
                  template: "repeat(6, 1fr) / repeat(7, 1fr)"
                },
                {},
                {
                  default: () => {
                    return `${each(days, (day, i) => {
                      return `${!$store.enlargeDay || index !== monthIndex || !dayjs(day.date).isSame($store.selected) ? `<a href="#pickday" class="${[
                        "svelte-1unzsxu",
                        (!store.isSelectable(day.date) ? "disabled" : "") + " " + (index === monthIndex && dayjs(day.date).isSame($store.selected, "day") ? "selected" : "") + " " + (day.outsider ? "outsider" : "")
                      ].join(" ").trim()}">${escape(day.date.getDate())} </a>` : ``}`;
                    })}`;
                  }
                }
              )}`;
            }
          }
        )}</div> ${$store.enlargeDay ? `<div class="stage selected-big svelte-1unzsxu">${escape(dayjs($store.selected).date())}</div>` : ``}`;
      }
    })} </div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const ViewTransitionEffect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => value);
  $$unsubscribe_store();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const css$7 = {
  code: "i.svelte-1eiemu5{display:inline-block;width:23px;height:23px;border-style:solid;border-color:var(--sc-theme-calendar-colors-text-primary);border-width:0;border-bottom-width:3px;border-right-width:3px;transform-origin:center center}i.right.svelte-1eiemu5{transform:translateX(-6px) rotate(-45deg)}i.left.svelte-1eiemu5{transform:translateX(6px) rotate(135deg)}",
  map: null
};
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dir = "left" } = $$props;
  if ($$props.dir === void 0 && $$bindings.dir && dir !== void 0)
    $$bindings.dir(dir);
  $$result.css.add(css$7);
  return `<i class="${escape(null_to_empty(dir), true) + " svelte-1eiemu5"}"></i>`;
});
const css$6 = {
  code: ".controls.svelte-1ro74h8{display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;text-align:center;z-index:2;border-bottom:1px solid var(--sc-theme-calendar-colors-border);font-size:1.5em;overflow:hidden}.controls.svelte-1ro74h8>*{height:80px;padding:0 17px;display:grid;align-items:center}.button.svelte-1ro74h8{padding:10px 18px;cursor:pointer;background:var(--sc-theme-calendar-colors-background-primary);transition:all 100ms linear}.button.svelte-1ro74h8:hover{background:var(--sc-theme-calendar-colors-background-hover)}.label.svelte-1ro74h8{font-weight:bold}",
  map: null
};
const CalendarControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visibleMonth;
  let label;
  let addMult;
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const UNIT_BY_VIEW = {
    days: "month",
    months: "year",
    years: "year"
  };
  const add = (amount) => () => store.add(amount * addMult, UNIT_BY_VIEW[$store.activeView]);
  const VIEW_TRANSITIONS = ["days", "months", "years"];
  const updateActiveView = () => {
    const transitionIndex = VIEW_TRANSITIONS.indexOf($store.activeView) + 1;
    const newView = transitionIndex ? VIEW_TRANSITIONS[transitionIndex] : null;
    if (newView)
      store.setActiveView(newView);
  };
  const KEY_MAPPINGS = {
    pageDown: add(-1),
    pageUp: add(1),
    control: updateActiveView
  };
  $$result.css.add(css$6);
  visibleMonth = dayjs(new Date($store.year, $store.month, 1));
  label = `${$store.activeView === "days" ? visibleMonth.format("MMMM ") : ""}${$store.year}`;
  addMult = $store.activeView === "years" ? 10 : 1;
  $$unsubscribe_store();
  return `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, { ctx: ["days", "months", "years"] }, { limit: 180 }, KEY_MAPPINGS), {}, {})} <div class="controls svelte-1ro74h8"><div class="button svelte-1ro74h8">${validate_component(Arrow, "Arrow").$$render($$result, { dir: "left" }, {}, {})}</div> <span class="button label svelte-1ro74h8">${escape(label)}</span> <div class="button svelte-1ro74h8">${validate_component(Arrow, "Arrow").$$render($$result, { dir: "right" }, {}, {})}</div> </div>`;
});
const CrossfadeProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  const noop2 = () => false;
  const store = getContext("crossfade") || writable({ send: noop2, receive: noop2 });
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  $$unsubscribe_store();
  return `${slots.default ? slots.default({
    key: $store.key,
    send: $store.send,
    receive: $store.receive
  }) : ``}`;
});
const css$5 = {
  code: "div.svelte-t161t{display:grid;height:100%}",
  map: null
};
const MonthPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let yearIndex;
  let itemCount;
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  let grid;
  const get2 = (index) => ({
    months: Array(12).fill(0).map((d, i) => {
      const month = dayjs(new Date($store.start.getFullYear() + index, i, 1));
      return {
        year: $store.start.getFullYear() + index,
        label: month.format("MMM"),
        index: i,
        disabled: !store.isSelectable(month, ["date"])
      };
    })
  });
  const close = () => store.setActiveView("days");
  const add = (amount) => () => {
    store.add(amount, "month", ["date"]);
  };
  const KEY_MAPPINGS = {
    left: add(-1),
    right: add(1),
    up: add(-3),
    down: add(3),
    enter: close,
    escape: close
  };
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    yearIndex = $store.year - $store.start.getFullYear();
    itemCount = $store.end.getFullYear() - $store.start.getFullYear() + 1;
    $$rendered = `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, KEY_MAPPINGS, { ctx: ["months"] }), {}, {})} <div class="svelte-t161t">${validate_component(InfiniteGrid, "InfiniteGrid").$$render(
      $$result,
      {
        cellCount: 1,
        itemCount,
        get: get2,
        index: yearIndex,
        this: grid
      },
      {
        index: ($$value) => {
          yearIndex = $$value;
          $$settled = false;
        },
        this: ($$value) => {
          grid = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ months }) => {
          return `${validate_component(Grid, "Grid").$$render(
            $$result,
            {
              template: "repeat(4, 1fr) / repeat(3, 1fr)"
            },
            {},
            {
              default: () => {
                return `${each(months, (month, i) => {
                  return `<a href="#selectMonth"${add_classes(((month.disabled ? "disabled" : "") + " " + ($store.month === i && $store.year === month.year ? "selected" : "")).trim())}>${escape(month.label)} </a>`;
                })}`;
              }
            }
          )}`;
        }
      }
    )} </div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const css$4 = {
  code: "div.svelte-t161t{display:grid;height:100%}",
  map: null
};
const YearPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let KEY_MAPPINGS;
  let startYear;
  let endYear;
  let numPerPage;
  let itemCount;
  let yearIndex;
  let $store, $$unsubscribe_store;
  let { rowCount = 3 } = $$props;
  let { colCount = 3 } = $$props;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const close = () => store.setActiveView("months");
  const add = (amount) => () => {
    const result = $store.year + amount;
    if (result < startYear || result > endYear)
      return;
    store.add(amount, "year", ["month", "date"]);
  };
  const get2 = (index) => {
    const firstYear = startYear + index * numPerPage;
    return {
      years: Array(numPerPage).fill(0).map((d, i) => ({
        number: firstYear + i,
        selectable: firstYear + i <= endYear
      }))
    };
  };
  if ($$props.rowCount === void 0 && $$bindings.rowCount && rowCount !== void 0)
    $$bindings.rowCount(rowCount);
  if ($$props.colCount === void 0 && $$bindings.colCount && colCount !== void 0)
    $$bindings.colCount(colCount);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    KEY_MAPPINGS = {
      up: add(-1 * colCount),
      down: add(colCount),
      left: add(-1),
      right: add(1),
      enter: close,
      escape: close
    };
    startYear = $store.start.getFullYear();
    endYear = $store.end.getFullYear();
    numPerPage = rowCount * colCount;
    itemCount = Math.ceil(endYear - startYear + 1) / numPerPage;
    yearIndex = Math.floor(($store.year - startYear) / numPerPage);
    $$rendered = `${validate_component(KeyControls, "KeyControls").$$render($$result, Object.assign({}, KEY_MAPPINGS, { ctx: ["years"] }), {}, {})} <div class="svelte-t161t">${validate_component(InfiniteGrid, "InfiniteGrid").$$render(
      $$result,
      {
        cellCount: 1,
        itemCount,
        get: get2,
        index: yearIndex
      },
      {
        index: ($$value) => {
          yearIndex = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ years }) => {
          return `${validate_component(Grid, "Grid").$$render(
            $$result,
            {
              template: "repeat(" + rowCount + ", 1fr) / repeat(" + colCount + ", 1fr)"
            },
            {},
            {
              default: () => {
                return `${each(years, (year) => {
                  return `<a href="#year"${add_classes((($store.year === year.number ? "selected" : "") + " " + (!year.selectable ? "disabled" : "")).trim())}>${escape(year.number)} </a>`;
                })}`;
              }
            }
          )}`;
        }
      }
    )} </div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const css$3 = {
  code: ".grid.svelte-126ec0f.svelte-126ec0f{display:grid;width:var(--sc-theme-calendar-width);max-width:var(--sc-theme-calendar-maxWidth);grid-template-rows:auto calc(\n				min(var(--sc-theme-calendar-maxWidth), var(--sc-theme-calendar-width)) * 6 / 7 +\n					var(--sc-theme-calendar-legend-height)\n			);font-family:Rajdhani, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,\n			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';box-shadow:var(--sc-theme-calendar-shadow);background:var(--sc-theme-calendar-colors-background-primary);text-align:center;color:var(--sc-theme-calendar-colors-text-primary)}.contents.svelte-126ec0f.svelte-126ec0f{display:grid;overflow:hidden}.grid.svelte-126ec0f .contents.svelte-126ec0f>*{display:grid;grid-row:1;grid-column:1;height:100%;grid-template:1fr / 1fr}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  const store = getContext(storeContextKey);
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  $$result.css.add(css$3);
  $$unsubscribe_store();
  return `${validate_component(CrossfadeProvider, "CrossfadeProvider").$$render($$result, {}, {}, {
    default: ({ key, send, receive }) => {
      return `<div class="grid svelte-126ec0f">${validate_component(CalendarControls, "DatepickerControls").$$render($$result, {}, {}, {})} <div class="contents svelte-126ec0f">${$store.activeView === "days" ? `${validate_component(ViewTransitionEffect, "ViewTransitionEffect").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(DayPicker, "DayPicker").$$render($$result, {}, {}, {})}`;
        }
      })}` : `${$store.activeView === "months" ? `${validate_component(ViewTransitionEffect, "ViewTransitionEffect").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(MonthPicker, "MonthPicker").$$render($$result, {}, {}, {})}`;
        }
      })}` : `${$store.activeView === "years" ? `${validate_component(ViewTransitionEffect, "ViewTransitionEffect").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(YearPicker, "YearPicker").$$render($$result, {}, {}, {})}`;
        }
      })}` : ``}`}`}</div></div>`;
    }
  })}`;
});
const calendar = {
  selected: /* @__PURE__ */ new Date(),
  start: dayjs().add(-100, "year").toDate(),
  end: dayjs().add(100, "year").toDate(),
  format: "MM/DD/YYYY"
};
const css$2 = {
  code: ".button-container.svelte-18igz6t.svelte-18igz6t{display:grid}.button-container.svelte-18igz6t>.svelte-18igz6t{grid-column:1;grid-row:1;height:100%}button.svelte-18igz6t.svelte-18igz6t{padding:16px 30px;background:var(--sc-theme-calendar-colors-background-primary);color:var(--sc-theme-calendar-colors-text-primary);font-size:1.3em;border-radius:2px;border:0;box-shadow:4px 3px 9px rgb(0 0 0 / 20%);cursor:pointer}.button-text.svelte-18igz6t.svelte-18igz6t{padding:16px 30px;color:var(--sc-theme-calendar-colors-text-primary);font-size:1.3em;cursor:pointer}",
  map: null
};
const Datepicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { selected = calendar.selected } = $$props;
  let { start = calendar.start } = $$props;
  let { end = calendar.end } = $$props;
  let { format = calendar.format } = $$props;
  let { formatted = "" } = $$props;
  let { theme = {} } = $$props;
  let { defaultTheme = void 0 } = $$props;
  let { startOfWeekIndex = 0 } = $$props;
  let { store = datepickerStore.get({
    selected,
    start,
    end,
    shouldEnlargeDay: true,
    startOfWeekIndex
  }) } = $$props;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  setContext(storeContextKey, store);
  setContext(keyControlsContextKey, derived(store, ($s) => $s.activeView));
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.formatted === void 0 && $$bindings.formatted && formatted !== void 0)
    $$bindings.formatted(formatted);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0)
    $$bindings.defaultTheme(defaultTheme);
  if ($$props.startOfWeekIndex === void 0 && $$bindings.startOfWeekIndex && startOfWeekIndex !== void 0)
    $$bindings.startOfWeekIndex(startOfWeekIndex);
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    selected = $store.selected;
    formatted = dayjs(selected).format(format);
    $$rendered = `${validate_component(Theme, "Theme").$$render($$result, { defaultTheme, theme }, {}, {
      default: ({ style }) => {
        return `${validate_component(Popover, "Popover").$$render(
          $$result,
          { style, isOpen: $store.open },
          {
            isOpen: ($$value) => {
              $store.open = $$value;
              $$settled = false;
            }
          },
          {
            contents: () => {
              return `${validate_component(Calendar, "Calendar").$$render($$result, {}, {}, {})} `;
            },
            default: ({ key, send, receive }) => {
              return `${slots.default ? slots.default({ key, send, receive, formatted }) : ` <div class="button-container svelte-18igz6t"><button class="svelte-18igz6t"></button> <span class="button-text svelte-18igz6t">${escape(formatted)}</span></div> `}`;
            }
          }
        )}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_store();
  return $$rendered;
});
const CrossfadeBoundary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("crossfade", null);
  return `${slots.default ? slots.default({}) : ``}`;
});
const css$1 = {
  code: "div.svelte-1g1k4nu{display:inline-block}",
  map: null
};
const InlineCalendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let { selected = calendar.selected } = $$props;
  let { start = calendar.start } = $$props;
  let { end = calendar.end } = $$props;
  let { format = calendar.format } = $$props;
  let { formatted = "" } = $$props;
  let { theme = {} } = $$props;
  let { defaultTheme = void 0 } = $$props;
  let { startOfWeekIndex = 0 } = $$props;
  let { store = datepickerStore.get({ selected, start, end, startOfWeekIndex }) } = $$props;
  $$unsubscribe_store = subscribe(store, (value) => $store = value);
  const focused = writable(false);
  setContext(storeContextKey, store);
  setContext(keyControlsContextKey, derived([store, focused], ([$s, $focused]) => $focused ? $s.activeView : void 0));
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.formatted === void 0 && $$bindings.formatted && formatted !== void 0)
    $$bindings.formatted(formatted);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.defaultTheme === void 0 && $$bindings.defaultTheme && defaultTheme !== void 0)
    $$bindings.defaultTheme(defaultTheme);
  if ($$props.startOfWeekIndex === void 0 && $$bindings.startOfWeekIndex && startOfWeekIndex !== void 0)
    $$bindings.startOfWeekIndex(startOfWeekIndex);
  if ($$props.store === void 0 && $$bindings.store && store !== void 0)
    $$bindings.store(store);
  $$result.css.add(css$1);
  selected = $store.selected;
  formatted = dayjs(selected).format(format);
  $$unsubscribe_store();
  return `${validate_component(CrossfadeBoundary, "CrossfadeBoundary").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Theme, "Theme").$$render($$result, { defaultTheme, theme }, {}, {
        default: ({ style }) => {
          return `<div${add_attribute("style", style, 0)} class="svelte-1g1k4nu">${validate_component(Calendar, "Calendar").$$render($$result, {}, {}, {})}</div>`;
        }
      })}`;
    }
  })}`;
});
function getFirstAndLastDayOfMonth() {
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).toISOString();
  const nextMonth = new Date(year, month + 1, 1);
  const lastDay = new Date(nextMonth - 1).toISOString();
  return {
    firstDay,
    lastDay
  };
}
async function fetchUserUpcomingData(profileId, orgId) {
  if (!profileId) {
    return [];
  }
  const { lastDay, firstDay } = getFirstAndLastDayOfMonth();
  const { data: userUpcomingData2 } = await supabase.rpc("get_user_upcoming_lessons", {
    profile_id_arg: profileId,
    org_id_arg: orgId
  }).filter("lesson_at", "gte", firstDay).filter("lesson_at", "lte", lastDay);
  console.log(`userUpcomingData`, userUpcomingData2);
  if (!Array.isArray(userUpcomingData2)) {
    return [];
  }
  return userUpcomingData2;
}
const WelcomeModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let query = new URLSearchParams($page.url.search);
  let welcomePopup = query.get("welcomePopup");
  const closeModal = () => {
    goto($currentOrgPath + "/courses?create=true");
  };
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_page();
  $$unsubscribe_t();
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      onClose: closeModal,
      open: welcomePopup === "true",
      width: "w-9/12",
      maxWidth: "w-[800px]",
      modalHeading: "Welcome"
    },
    {},
    {
      default: () => {
        return `<p class="text-black dark:text-white text-sm md:text-base lg:text-lg">${escape($t("welcome_modal.we_at"))} <a href="https://KinetsHub.com/" class="text-primary-700 no-underline hover:no-underline" data-svelte-h="svelte-1au9170">KinetsHub</a> ${escape($t("welcome_modal.small_team"))} <span class="text-primary-700">${escape($t("welcome_modal.thank_you"))};</span> ${escape($t("welcome_modal.deeply_appreciate"))}</p> <img src="/images/welcome-img.svg" alt="A welcome banner" class="w-full my-6">`;
      }
    }
  )}`;
});
const css = {
  code: ".root.svelte-jtycu2{min-height:93vh}.box.svelte-jtycu2{width:246px;height:165px}.header.svelte-jtycu2{border-bottom:1px solid var(--border-color);min-height:61px}.lesson-data.svelte-jtycu2{border-bottom:1px solid var(--border-color)}.no-data.svelte-jtycu2{height:100px}.join-call.svelte-jtycu2{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-height:48px;width:110px;text-align:center}span.active-day{position:absolute;bottom:-8px;left:40%;color:var(--main-primary-color)}#calendar .controls .button.label{font-size:1rem}@media(max-width: 640px){span.active-day{font-size:30px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $store;
  let $user, $$unsubscribe_user;
  let $isMobile, $$unsubscribe_isMobile;
  let $userUpcomingData, $$unsubscribe_userUpcomingData;
  let $t, $$unsubscribe_t;
  let $profile, $$unsubscribe_profile;
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_userUpcomingData = subscribe(userUpcomingData, (value) => $userUpcomingData = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  let { data } = $$props;
  const { orgName } = data;
  let theme = {};
  let store;
  let calendar2 = null;
  let lessonsByMonth = {};
  let prevSelectedDate = /* @__PURE__ */ (/* @__PURE__ */ new Date()).toUTCString();
  let selectedDateLessonData = [];
  function createCourse() {
    goto(`/org/${orgName}/courses?create=true`);
  }
  const addDotsToCalendar = (currentMonthIndexInRenderedMonth) => setTimeout(
    () => {
      if (!calendar2)
        calendar2 = document.getElementById("calendar");
      const renderedMonths = calendar2?.querySelectorAll(".contents .container .stage .grid .grid") || [];
      const currentMonthIndex = new Date($store?.selected).getMonth();
      const currentMonth = renderedMonths[currentMonthIndexInRenderedMonth];
      const currentMonthElements = currentMonth?.querySelectorAll("a:not(.outsider)") || [];
      const currentMonthData = lessonsByMonth[currentMonthIndex];
      if (!currentMonthData)
        return;
      for (let i in currentMonthElements) {
        if (!currentMonthElements.hasOwnProperty(i)) {
          continue;
        }
        const dayElement = currentMonthElements[i];
        dayElement.style.position = "relative";
        const dateIndex = Number(dayElement.innerHTML);
        if (!!currentMonthData[dateIndex]) {
          dayElement.insertAdjacentHTML("beforeend", '<span class="active-day">•</span>');
        }
      }
    },
    500
  );
  async function runFirstThings(currentSession, orgId) {
    if (!currentSession || !currentSession.id || !orgId)
      return;
    if (!$userUpcomingData.length) {
      set_store_value(userUpcomingData, $userUpcomingData = await fetchUserUpcomingData(currentSession.id, orgId), $userUpcomingData);
    }
    lessonsByMonth = formatUserUpcomingData($userUpcomingData);
    if (!$isMobile) {
      addDotsToCalendar(1);
    }
  }
  function getDataOfSelectedDate(_selectedDate, orgId) {
    if (!_selectedDate)
      return [];
    const selectedDate = new Date(_selectedDate).toUTCString();
    const monthIndex = new Date(selectedDate).getMonth();
    const dateIndex = new Date(selectedDate).getDate();
    const prevMonthIndex = new Date(prevSelectedDate).getMonth();
    if (prevMonthIndex !== monthIndex) {
      const currentMonthIndexInRenderedMonth = monthIndex < prevMonthIndex ? 1 : 2;
      addDotsToCalendar(currentMonthIndexInRenderedMonth);
    }
    prevSelectedDate = selectedDate;
    const monthLessonData = lessonsByMonth[monthIndex];
    if (!monthLessonData) {
      return [];
    }
    const dateLessonData = monthLessonData[dateIndex];
    if (!dateLessonData) {
      return [];
    }
    return dateLessonData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      runFirstThings($user.currentSession, $currentOrg.id);
    }
    selectedDateLessonData = getDataOfSelectedDate($store?.selected, $currentOrg.id);
    theme = {
      calendar: {
        width: "250px",
        height: "283px",
        shadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
        legend: { height: "30px" },
        colors: {
          text: {
            primary: $globalStore.isDark ? "#eee" : "#333",
            highlight: "#fff"
          },
          background: {
            primary: $globalStore.isDark ? "#333" : "#fff",
            highlight: $globalStore.isDark ? "#5829d6" : "#eb7400",
            hover: $globalStore.isDark ? "#222" : "#eee"
          },
          border: $globalStore.isDark ? "#222" : "#eee"
        }
      }
    };
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-16qwx4l_START -->${$$result.title = `<title>Dashboard - KinetsHub</title>`, ""}<!-- HEAD_svelte-16qwx4l_END -->`, ""} ${validate_component(WelcomeModal, "WelcomeModal").$$render($$result, {}, {}, {})} <div class="py-10 px-5 w-full max-w-5xl md:mx-auto"><div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-2xl md:text-3xl font-bold mb-3">${escape($t(getGreeting()))} ${escape($profile.fullname)}!</h1> <div class="flex items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: VARIANTS.OUTLINED,
        onClick: createCourse,
        isDisabled: !$isOrgAdmin,
        className: "min-h-[36px]"
      },
      {},
      {
        default: () => {
          return `${$isMobile ? `${validate_component(Add, "Add").$$render($$result, { size: 24 }, {}, {})}` : `${escape($t("dashboard.create_course"))}`}`;
        }
      }
    )} ${validate_component(VisitOrgSite, "VisitOrgSiteButton").$$render($$result, {}, {}, {})}</div></div> <div class="w-full h-fit lg:h-[265px] flex md:items-center justify-between flex-col-reverse md:flex-row p-5 lg:p-10 rounded-md bg-primary-900 my-2"><span><p class="w-full md:w-[75%] lg:w-[80%] text-white text-xs lg:text-xl font-normal mb-5">${escape($t("dashboard.hero_content"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("dashboard.hero_button"),
        variant: VARIANTS.CONTAINED_WHITE,
        onClick: () => goto(`${$currentOrgPath}/courses`)
      },
      {},
      {}
    )}</span> <img src="/images/student-learning.svg" alt="student Learning Pictogram" class="w-28 md:block md:w-1/3 lg:w-[200px] lg:max-h-[205px] mb-3 md:mb-0"></div>  <div class="w-full"> <div class="w-full xl:w-auto container"><p class="dark:text-white font-bold mt-7 mb-4">${escape($t("dashboard.your_schedule"))}</p> <div class="rounded border border-gray-200 dark:border-neutral-600 gap-3 flex flex-col md:flex-row items-start px-2 md:px-5 py-5 w-full">${!$isMobile ? `<div id="calendar" class="flex justify-center mt-5 w-2/5 min-w-[250px]">${validate_component(InlineCalendar, "InlineCalendar").$$render(
      $$result,
      { theme, store },
      {
        store: ($$value) => {
          store = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : `<div class="header w-full flex items-center svelte-jtycu2">${validate_component(Datepicker, "Datepicker").$$render(
      $$result,
      { store },
      {
        store: ($$value) => {
          store = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ key, send, receive }) => {
          return `<button class="text-lg font-bold text-primary-700 p-3 hover:bg-gray-300 rounded-md">${escape(formatDate($store?.selected))}</button>`;
        }
      }
    )}</div>`} <div class="max-h-[400px] overflow-y-scroll w-full">${!$isMobile ? `<p class="dark:text-white font-bold m-5">${escape(formatDate($store?.selected))}</p>` : ``} ${selectedDateLessonData.length ? each(selectedDateLessonData, (lessonData) => {
      return `<div class="flex items-center justify-between p-5 lesson-data svelte-jtycu2"><div class="w-full"><a class="text-black-700 text-lg font-bold flex items-center"${add_attribute("href", `/courses/${lessonData.course_id}/lessons/${lessonData.is_unlocked ? lessonData.lesson_id : ""}`, 0)}>${escape(lessonData.lesson_title)} ${lessonData.is_unlocked ? `<span class="ml-2 success">${validate_component(Locked, "LockedIcon").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})} </span>` : `${validate_component(Unlocked, "UnlockedIcon").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})}`}</a> <p class="dark:text-white text-grey text-sm flex items-center"><a class="underline text-primary-700 my-2" href="${"/courses/" + escape(lessonData.course_id, true)}">${escape(` ${lessonData.course_title}`)}</a> </p></div> ${lessonData.is_unlocked ? `<a class="${"join-call rounded-3xl bg-primary-600 text-white py-3 font-bold shadow-lg " + escape(!lessonData.call_url && "opacity-50 pointer-events-none cursor-not-allowed", true) + " svelte-jtycu2"}"${add_attribute("href", !!lessonData.call_url ? lessonData.call_url : void 0, 0)} target="_blank"${add_attribute(
        "title",
        !!lessonData.call_url ? $t("dashboard.click_to_join") : $t("dashboard.no_call_link"),
        0
      )}>${escape($t("dashboard.join_call"))} </a>` : ``} </div>`;
    }) : `<p class="dark:text-white flex items-center justify-center w-full no-data svelte-jtycu2">${escape($t("dashboard.no_schedule"))} </p>`}</div></div></div>  </div> </div>`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  $$unsubscribe_currentOrg();
  $$unsubscribe_user();
  $$unsubscribe_isMobile();
  $$unsubscribe_userUpcomingData();
  $$unsubscribe_t();
  $$unsubscribe_profile();
  $$unsubscribe_isOrgAdmin();
  $$unsubscribe_currentOrgPath();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f1ede7b0.js.map
