import { d as compute_rest_props, s as subscribe, e as set_store_value, f as compute_slots } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape, v as validate_component, a as add_attribute, o as onDestroy, b as each } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { M as Moon } from './Moon-632bccb1.js';
import { b as browser } from './environment-b7cb3169.js';
import { p as page } from './stores-793c1e19.js';
import { T as Text } from './Text-e3f4b18b.js';
import { L as Locked } from './Locked-3612b17f.js';
import { C as CheckmarkFilled } from './CheckmarkFilled-36899326.js';
import { A as Add } from './Add-78ef4d23.js';
import { a as getNavItemRoute, b as getLessonsRoute, g as getLectureNo, C as ChevronDown } from './function-efda068b.js';
import { F as FlashFilled } from './FlashFilled-4a89bd75.js';
import { I as IconButton } from './index9-eea8802c.js';
import { N as NavClasses } from './reusableClass-512f4804.js';
import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';
import { S as Settings } from './Settings-0a14f57d.js';
import { i as isOrgAdmin, g as isFreePlan, c as currentOrg } from './org-8fc26a61.js';
import { g as group, c as course, a as lessonSections, b as lessons, d as defaultCourse, s as setCourse } from './store4-ef39175f.js';
import { C as COURSE_TYPE, a as COURSE_VERSION } from './index15-c5761f1e.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { s as sideBar } from './store-37f0dea3.js';
import { p as profile } from './user-e923b6d4.js';
import { t as t2 } from './translations-90190f83.js';
import { B as Backdrop } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import 'canvas-confetti';
import { f as fetchCourse } from './index18-b03e5e10.js';
import { g as globalStore } from './app-d638cf5d.js';
import { M as Modal } from './index8-59a07edf.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1a768223-a175-4a7d-8c21-3e00bf0404fd", e._sentryDebugIdIdentifier = "sentry-dbid-1a768223-a175-4a7d-8c21-3e00bf0404fd");
  } catch (e2) {
  }
}();
const ApplicationWeb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26 2H30V6H26zM26 8H30V12H26zM20 2H24V6H20zM20 8H24V12H20z"></path><path d="M28,16v6H4V6H16V4H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2h8v4H8v2H24V28H20V24h8a2,2,0,0,0,2-2V16ZM18,28H14V24h4Z"></path></svg>`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M23 2L24.593 5 28 5.414 25.5 7.667 26 11 23 9.125 20 11 20.5 7.667 18 5.414 21.5 5 23 2z"></path><path d="M22.7168,13.249l-1.9375-.498A6.9942,6.9942,0,1,1,15.7505,4.22l.499-1.9365A8.99,8.99,0,0,0,8,17.689V30l6-4,6,4V17.7078A8.9627,8.9627,0,0,0,22.7168,13.249ZM18,26.2627l-4-2.6665-4,2.6665V19.05a8.9238,8.9238,0,0,0,8,.0062Z"></path></svg>`;
});
const Bullhorn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,6V8.17L5.64,11.87a2,2,0,0,0-1.64,2v4.34a2,2,0,0,0,1.64,2L8,20.56V24a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V22.74l6,1.09V26h2V6ZM18,24H10V20.93l8,1.45ZM6,18.17V13.83L26,10.2V21.8Z"></path></svg>`;
});
const ChevronUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"></path></svg>`;
});
const Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M31 30H29V27a3 3 0 00-3-3H22a3 3 0 00-3 3v3H17V27a5 5 0 015-5h4a5 5 0 015 5zM24 12a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 10zM15 22H13V19a3 3 0 00-3-3H6a3 3 0 00-3 3v3H1V19a5 5 0 015-5h4a5 5 0 015 5zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"></path></svg>`;
});
const IbmWatsonKnowledgeCatalog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M23 27.2L20.4 24.6 19 26 23 30 30 23 28.6 21.6zM12 18H20V20H12zM12 13H20V15H12zM12 8H20V10H12z"></path><path d="M16,28H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v16h2V4c0-1.1-0.9-2-2-2H6C4.9,2,4,2.9,4,4v4H2v2h2v5H2v2h2v5H2v2h2v4	c0,1.1,0.9,2,2,2h10V28z"></path></svg>`;
});
const ListChecked = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 22H30V24H16zM14 19.4L12.6 18 6 24.6 3.4 22 2 23.4 6 27.4zM16 8H30V10H16zM14 5.4L12.6 4 6 10.6 3.4 8 2 9.4 6 13.4z"></path></svg>`;
});
const Result = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M14 23H22V25H14zM10 23H12V25H10zM14 18H22V20H14zM10 18H12V20H10zM14 13H22V15H14zM10 13H12V15H10z"></path><path d="M25,5H22V4a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2V5H7A2,2,0,0,0,5,7V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V7A2,2,0,0,0,25,5ZM12,4h8V8H12ZM25,28H7V7h3v3H22V7h3Z"></path></svg>`;
});
const TableOfContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M4 6H22V8H4zM4 12H22V14H4zM4 18H22V20H4zM4 24H22V26H4zM26 6H28V8H26zM26 12H28V14H26zM26 18H28V20H26zM26 24H28V26H26z"></path></svg>`;
});
const Workspace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16 17v8H6V17H16m0-2H6a2 2 0 00-2 2v8a2 2 0 002 2H16a2 2 0 002-2V17a2 2 0 00-2-2zM27 6v5H17V6H27m0-2H17a2 2 0 00-2 2v5a2 2 0 002 2H27a2 2 0 002-2V6a2 2 0 00-2-2zM27 17v5H22V17h5m0-2H22a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V17a2 2 0 00-2-2zM11 6v5H6V6h5m0-2H6A2 2 0 004 6v5a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2z"></path></svg>`;
});
const confettiStore = writable({
  show: false
});
function toggleConfetti() {
  confettiStore.update((confetti) => ({
    ...confetti,
    show: !confetti.show
  }));
}
const css$2 = {
  code: "canvas.svelte-1nimpl6{position:absolute;width:60%;height:70%}",
  map: null
};
const Confetti = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $confettiStore, $$unsubscribe_confettiStore;
  $$unsubscribe_confettiStore = subscribe(confettiStore, (value) => $confettiStore = value);
  let myCanvas;
  let myConfetti;
  function showConfetti(show) {
    if (!show)
      return;
    const duration = 5 * 1e3;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0
    };
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    const interval = setInterval(
      function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        myConfetti(Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.1, 0.3),
            y: Math.random() - 0.2
          }
        }));
        myConfetti(Object.assign({}, defaults, {
          particleCount,
          origin: {
            x: randomInRange(0.7, 0.9),
            y: Math.random() - 0.2
          }
        }));
      },
      250
    );
  }
  $$result.css.add(css$2);
  {
    showConfetti($confettiStore.show);
  }
  $$unsubscribe_confettiStore();
  return `<canvas class="svelte-1nimpl6"${add_attribute("this", myCanvas, 0)}></canvas>`;
});
const css$1 = {
  code: ".head.svelte-15agr9y{top:0px;z-index:1}",
  map: null
};
const PageBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { width = "max-w-4xl w-full lg:w-11/12" } = $$props;
  let { padding = "pb-5 px-4" } = $$props;
  let { className = "" } = $$props;
  let { headerClassName = "" } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { isPageNavHidden = false } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.headerClassName === void 0 && $$bindings.headerClassName && headerClassName !== void 0)
    $$bindings.headerClassName(headerClassName);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.isPageNavHidden === void 0 && $$bindings.isPageNavHidden && isPageNavHidden !== void 0)
    $$bindings.isPageNavHidden(isPageNavHidden);
  $$result.css.add(css$1);
  padding = isPageNavHidden ? `pb-20 px-4` : padding;
  return `<div class="${"overflow-y-auto " + escape(
    isPageNavHidden ? "h-[calc(100vh-65px)] lg:h-[calc(100vh-127px)]" : "h-[calc(100vh-127px)]",
    true
  ) + " mt-4 mx-auto " + escape(width, true) + " " + escape(className, true) + " relative " + escape(padding, true) + " svelte-15agr9y"}">${$$slots.header ? `<div class="${"head dark:bg-neutral-800 flex items-center justify-between sticky right-0 w-full px-3 " + escape(headerClassName, true) + " svelte-15agr9y"}">${slots.header ? slots.header({}) : ``}</div>` : ``} ${slots.default ? slots.default({}) : ``} </div>`;
});
const handleAddLessonWidget = writable({
  id: "",
  open: false,
  isSection: false
});
const NAV_IDS = {
  NEWS_FEED: "NEWS_FEED",
  LESSONS: "LESSONS",
  ATTENDANCE: "ATTENDANCE",
  SUBMISSIONS: "SUBMISSIONS",
  MARKS: "MARKS",
  CERTIFICATES: "CERTIFICATES",
  LANDING_PAGE: "LANDING_PAGE",
  PEOPLE: "PEOPLE",
  SETTINGS: "SETTINGS",
  SECTION: "SECTION"
};
const NavIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${name === NAV_IDS.SECTION ? `${validate_component(TableOfContents, "TableOfContents").$$render(
    $$result,
    {
      size: 20,
      class: "carbon-icon mr-2",
      style: "min-width: 20px;"
    },
    {},
    {}
  )}` : `${name === NAV_IDS.NEWS_FEED ? `${validate_component(Bullhorn, "Bullhorn").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.LESSONS ? `${validate_component(IbmWatsonKnowledgeCatalog, "IbmWatsonKnowledgeCatalog").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.ATTENDANCE ? `${validate_component(ListChecked, "ListChecked").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.SUBMISSIONS ? `${validate_component(Workspace, "Workspace").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.MARKS ? `${validate_component(Result, "Result").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.PEOPLE ? `${validate_component(Group, "Group").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.LANDING_PAGE ? `${validate_component(ApplicationWeb, "ApplicationWeb").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.CERTIFICATES ? `${validate_component(Badge, "Badge").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : `${name === NAV_IDS.SETTINGS ? `${validate_component(Settings, "Settings").$$render($$result, { size: 20, class: "carbon-icon mr-2" }, {}, {})}` : ``}`}`}`}`}`}`}`}`}`}`;
});
const NavExpandable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $handleAddLessonWidget, $$unsubscribe_handleAddLessonWidget;
  let $course, $$unsubscribe_course;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_handleAddLessonWidget = subscribe(handleAddLessonWidget, (value) => $handleAddLessonWidget = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let { handleClick = () => {
  } } = $$props;
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { label = "" } = $$props;
  let { isGroupActive = false } = $$props;
  let { isExpanded } = $$props;
  let { total = 0 } = $$props;
  let { isLoading = true } = $$props;
  let { isLesson = false } = $$props;
  let { isSection = false } = $$props;
  let { isStudent = true } = $$props;
  let { isPaidFeature = false } = $$props;
  let { className = "" } = $$props;
  let { btnPadding = "py-3 px-4" } = $$props;
  function addLesson() {
    goto("/courses/" + $course.id + "/lessons");
    set_store_value(handleAddLessonWidget, $handleAddLessonWidget.open = true, $handleAddLessonWidget);
    if ($course.version === COURSE_VERSION.V2) {
      set_store_value(handleAddLessonWidget, $handleAddLessonWidget.isSection = isSection ? false : true, $handleAddLessonWidget);
      if (isSection) {
        set_store_value(handleAddLessonWidget, $handleAddLessonWidget.id = id, $handleAddLessonWidget);
      }
    }
  }
  function toggleIsExpanded() {
    isExpanded = !isExpanded;
  }
  if ($$props.handleClick === void 0 && $$bindings.handleClick && handleClick !== void 0)
    $$bindings.handleClick(handleClick);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.isGroupActive === void 0 && $$bindings.isGroupActive && isGroupActive !== void 0)
    $$bindings.isGroupActive(isGroupActive);
  if ($$props.isExpanded === void 0 && $$bindings.isExpanded && isExpanded !== void 0)
    $$bindings.isExpanded(isExpanded);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.isLesson === void 0 && $$bindings.isLesson && isLesson !== void 0)
    $$bindings.isLesson(isLesson);
  if ($$props.isSection === void 0 && $$bindings.isSection && isSection !== void 0)
    $$bindings.isSection(isSection);
  if ($$props.isStudent === void 0 && $$bindings.isStudent && isStudent !== void 0)
    $$bindings.isStudent(isStudent);
  if ($$props.isPaidFeature === void 0 && $$bindings.isPaidFeature && isPaidFeature !== void 0)
    $$bindings.isPaidFeature(isPaidFeature);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.btnPadding === void 0 && $$bindings.btnPadding && btnPadding !== void 0)
    $$bindings.btnPadding(btnPadding);
  $$unsubscribe_handleAddLessonWidget();
  $$unsubscribe_course();
  $$unsubscribe_isFreePlan();
  return `<div${add_attribute("class", className, 0)}><button class="${"item relative flex items-center " + escape(btnPadding, true) + " ml-2 mb-1 " + escape(NavClasses.item, true) + " " + escape(isGroupActive && !isLoading && NavClasses.active, true) + " w-[95%]"}" tabindex="0" ${isLoading ? "disabled" : ""}>${validate_component(NavIcons, "NavIcons").$$render($$result, { name }, {}, {})} ${isLoading ? `<div class="w-11/12 mx-auto">${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      class: "rounded-md",
      style: "margin: 0px; height: 30px;"
    },
    {},
    {}
  )}</div>` : `<span class="font-bold text-md text-start leading-4 line-clamp-2">${escape(label)}</span> ${total ? `<span class="ml-1">(${escape(total)})</span>` : ``}`} <span class="grow"></span> ${isPaidFeature && $isFreePlan ? `${validate_component(FlashFilled, "FlashFilled").$$render($$result, { size: 20, class: "text-blue-700" }, {}, {})}` : ``} ${(isLesson || isSection) && !isLoading && !isStudent ? `${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      stopPropagation: true,
      onClick: addLesson,
      size: "small"
    },
    {},
    {
      default: () => {
        return `${validate_component(Add, "Add").$$render($$result, {}, {}, {})}`;
      }
    }
  )} ${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      size: "small",
      stopPropagation: true,
      onClick: toggleIsExpanded
    },
    {},
    {
      default: () => {
        return `${isExpanded ? `${validate_component(ChevronUp, "ChevronUp").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})}` : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})}`}`;
      }
    }
  )}` : ``}</button> ${isExpanded && !isLoading ? `<div class="flex flex-col">${slots.default ? slots.default({}) : ``}</div>` : ``}</div>`;
});
function getIsLessonComplete(completions, profileId) {
  if (!Array.isArray(completions))
    return false;
  return completions.some((c) => {
    return c.is_complete && c.profile_id === profileId;
  });
}
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  let $t, $$unsubscribe_t;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $page, $$unsubscribe_page;
  let $lessonSections, $$unsubscribe_lessonSections;
  let $isMobile, $$unsubscribe_isMobile;
  let $sideBar, $$unsubscribe_sideBar;
  let $lessons, $$unsubscribe_lessons;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_lessonSections = subscribe(lessonSections, (value) => $lessonSections = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_sideBar = subscribe(sideBar, (value) => $sideBar = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  let { path } = $$props;
  let { isStudent = false } = $$props;
  let sidebarRef;
  let menuContentRef;
  const toggleSidebar = (defaultValue) => {
    set_store_value(sideBar, $sideBar.hidden = defaultValue ?? !$sideBar.hidden, $sideBar);
  };
  const toggleSidebarOnMobile = () => $isMobile && toggleSidebar();
  function handleMainGroupClick(href) {
    return () => {
      goto(href);
      toggleSidebarOnMobile();
    };
  }
  let navItems = [];
  onDestroy(() => {
    {
      return;
    }
  });
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.isStudent === void 0 && $$bindings.isStudent && isStudent !== void 0)
    $$bindings.isStudent(isStudent);
  {
    {
      navItems = [
        {
          id: NAV_IDS.NEWS_FEED,
          label: $t("course.navItems.nav_news_feed"),
          to: getNavItemRoute($course.id),
          hideSortIcon: true,
          isPaidFeature: false,
          show() {
            return isStudent ? $currentOrg.customization.course.newsfeed : true;
          }
        },
        {
          id: NAV_IDS.LESSONS,
          label: $t("course.navItems.nav_content"),
          to: getLessonsRoute($course.id),
          hideSortIcon: false,
          isPaidFeature: false,
          isLesson: true,
          sections: $lessonSections.map((section) => ({
            ...section,
            label: section.title,
            isExpanded: true
          })),
          isExpanded: isStudent ? true : $page.url.pathname.includes("/lessons")
        },
        {
          id: NAV_IDS.ATTENDANCE,
          label: $t("course.navItems.nav_attendance"),
          to: getNavItemRoute($course.id, "attendance"),
          isPaidFeature: false,
          hideSortIcon: true,
          show() {
            if ($course.type !== COURSE_TYPE.LIVE_CLASS)
              return false;
            return true;
          }
        },
        {
          id: NAV_IDS.SUBMISSIONS,
          label: $t("course.navItems.nav_submissions"),
          to: getNavItemRoute($course.id, "submissions"),
          hideSortIcon: true,
          isPaidFeature: false,
          show() {
            if (isStudent)
              return false;
            return true;
          }
        },
        {
          id: NAV_IDS.MARKS,
          label: $t("course.navItems.nav_marks"),
          to: getNavItemRoute($course.id, "marks"),
          isPaidFeature: false,
          hideSortIcon: true,
          show() {
            if ($course.type == COURSE_TYPE.LIVE_CLASS) {
              return isStudent ? $currentOrg.customization.course.grading : true;
            }
            return false;
          }
        },
        {
          id: NAV_IDS.CERTIFICATES,
          label: $t("course.navItems.nav_certificates"),
          to: getNavItemRoute($course.id, "certificates"),
          hideSortIcon: true,
          isPaidFeature: true,
          show() {
            if (isStudent && $isFreePlan) {
              return false;
            }
            return true;
          }
        },
        {
          id: NAV_IDS.LANDING_PAGE,
          label: $t("course.navItems.nav_landing_page"),
          to: getNavItemRoute($course.id, "landingpage"),
          hideSortIcon: true,
          isPaidFeature: false,
          show() {
            return !isStudent;
          }
        },
        {
          id: NAV_IDS.PEOPLE,
          label: $t("course.navItems.nav_people"),
          to: getNavItemRoute($course.id, "people"),
          isPaidFeature: false,
          hideSortIcon: true,
          show() {
            return !isStudent;
          }
        },
        {
          id: NAV_IDS.SETTINGS,
          label: $t("course.navItems.nav_settings"),
          to: getNavItemRoute($course.id, "settings"),
          hideSortIcon: true,
          isPaidFeature: false,
          show() {
            return !isStudent;
          }
        }
      ];
    }
  }
  $$unsubscribe_course();
  $$unsubscribe_t();
  $$unsubscribe_isFreePlan();
  $$unsubscribe_currentOrg();
  $$unsubscribe_page();
  $$unsubscribe_lessonSections();
  $$unsubscribe_isMobile();
  $$unsubscribe_sideBar();
  $$unsubscribe_lessons();
  $$unsubscribe_profile();
  return `<aside${add_attribute(
    "class",
    `
  ${$sideBar.hidden ? "-translate-x-[100%] absolute z-[40]" : "translate-x-0 absolute md:relative z-[40]"}
    transition w-[90vw] md:w-[300px] lg:w-[350px] bg-gray-100 dark:bg-black h-[calc(100vh-48px)] 
  
  ${"dark:border-r-neutral-600"} overflow-y-auto border border-l-0 border-t-0 border-b-0 border-r-1`,
    0
  )}${add_attribute("style", $sideBar.hidden === true ? "width:0" : "width:300px", 0)}${add_attribute("this", sidebarRef, 0)}><div class="flex flex-col"><ul class="sidebar-content my-5"${add_attribute("style", $sideBar.hidden === true ? "" : "display:block", 0)}${add_attribute("this", menuContentRef, 0)}>${each(navItems, (navItem) => {
    return `${!navItem.show || typeof navItem.show === "function" && navItem.show() ? `${validate_component(NavExpandable, "NavExpandable").$$render(
      $$result,
      {
        id: navItem.id,
        name: navItem.id,
        label: navItem.label,
        handleClick: handleMainGroupClick(navItem.to),
        isGroupActive: (path || $page.url.pathname) === navItem.to,
        total: navItem.isLesson ? ($lessons || []).length : 0,
        isLoading: !$course.id,
        isLesson: navItem.isLesson,
        isPaidFeature: navItem.isPaidFeature,
        isExpanded: navItem.isExpanded,
        isStudent
      },
      {},
      {
        default: () => {
          return `${$course.version === COURSE_VERSION.V1 ? `${each($lessons, (item, index) => {
            return `<a class="${"pl-7 w-[95%] text-[0.80rem] mb-2 text-black dark:text-white " + escape(
              isStudent && !item.is_unlocked ? "cursor-not-allowed" : "",
              true
            )}"${add_attribute(
              "href",
              isStudent && !item.is_unlocked ? $page.url.pathname : getLessonsRoute($course.id, item.id),
              0
            )}${add_attribute("aria-disabled", !item.is_unlocked, 0)}${add_attribute("title", item.title, 0)}><div class="${"flex items-center py-2 px-4 " + escape(NavClasses.item, true) + " " + escape((path || $page.url.pathname).includes(item.id) && NavClasses.active, true)}">${validate_component(Text, "TextChip").$$render(
              $$result,
              {
                value: getLectureNo(index + 1),
                className: "bg-primary-200 text-primary-600 text-xs mr-2",
                size: "sm",
                shape: "rounded-full"
              },
              {},
              {}
            )} <span class="w-[85%] text-ellipsis line-clamp-2">${escape(item.title)}</span> <span class="grow"></span> ${!item.is_unlocked ? `<span class="text-md ml-2" title="This lesson is locked.">${validate_component(Locked, "LockedIcon").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})} </span>` : `${getIsLessonComplete(item.lesson_completion, $profile.id) ? `<span class="ml-2" title="You have completed this lesson">${validate_component(CheckmarkFilled, "CheckmarkFilled").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})} </span>` : ``}`}</div> </a>`;
          })}` : `${navItem.sections ? `${each(navItem.sections, (section) => {
            return `${validate_component(NavExpandable, "NavExpandable").$$render(
              $$result,
              {
                id: section.id,
                name: NAV_IDS.SECTION,
                label: section.label,
                isLoading: !$course.id,
                isSection: true,
                isExpanded: section.isExpanded,
                className: "ml-4",
                btnPadding: "py-2 px-3",
                isStudent
              },
              {},
              {
                default: () => {
                  return `${each(section.lessons, (item) => {
                    return `<a class="${"pl-7 w-[95%] text-[0.80rem] mb-2 text-black dark:text-white " + escape(
                      isStudent && !item.is_unlocked ? "cursor-not-allowed" : "",
                      true
                    )}"${add_attribute(
                      "href",
                      isStudent && !item.is_unlocked ? $page.url.pathname : getLessonsRoute($course.id, item.id),
                      0
                    )}${add_attribute("aria-disabled", !item.is_unlocked, 0)}${add_attribute("title", item.title, 0)}><div class="${"flex items-center py-2 px-4 " + escape(NavClasses.item, true) + " " + escape((path || $page.url.pathname).includes(item.id) && NavClasses.active, true)}"><span class="w-[85%] text-ellipsis line-clamp-2">${escape(item.title)}</span> <span class="grow"></span> ${!item.is_unlocked ? `<span class="text-md ml-2" title="This lesson is locked.">${validate_component(Locked, "LockedIcon").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})} </span>` : `${getIsLessonComplete(item.lesson_completion, $profile.id) ? `<span class="ml-2" title="You have completed this lesson">${validate_component(CheckmarkFilled, "CheckmarkFilled").$$render($$result, { class: "carbon-icon dark:text-white" }, {}, {})} </span>` : ``}`}</div> </a>`;
                  })} `;
                }
              }
            )}`;
          })}` : ``}`} `;
        }
      }
    )}` : ``}`;
  })}</ul></div></aside>`;
});
const css = {
  code: ".root.svelte-n074yn{display:flex;width:100%}.rightBar.svelte-n074yn{flex-grow:1;width:calc(100% - 360px)}",
  map: null
};
const CourseContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $group, $$unsubscribe_group;
  let $profile, $$unsubscribe_profile;
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  let $globalStore, $$unsubscribe_globalStore;
  let $course, $$unsubscribe_course;
  let $t, $$unsubscribe_t;
  let $isMobile, $$unsubscribe_isMobile;
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  let { courseId = "" } = $$props;
  let { path = "" } = $$props;
  let { isExercisePage = false } = $$props;
  let { isFetching = false } = $$props;
  let { containerClass = "" } = $$props;
  let prevCourseId = "";
  let isPermitted = true;
  async function onCourseIdChange(courseId2 = "") {
    if (!courseId2 || prevCourseId === courseId2 || !browser || $course.id === courseId2)
      return;
    isFetching = true;
    course.set(defaultCourse);
    lessons.set([]);
    const { data: _data } = await fetchCourse(courseId2);
    if (_data) {
      set_store_value(course, $course.type = _data.type, $course);
      setCourse(_data);
    }
    isFetching = false;
    prevCourseId = courseId2;
  }
  function filterPollsByStatus(shouldFilter) {
    if (!shouldFilter)
      return;
    set_store_value(course, $course.polls = $course.polls.filter((poll) => poll.status === "published"), $course);
  }
  if ($$props.courseId === void 0 && $$bindings.courseId && courseId !== void 0)
    $$bindings.courseId(courseId);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.isExercisePage === void 0 && $$bindings.isExercisePage && isExercisePage !== void 0)
    $$bindings.isExercisePage(isExercisePage);
  if ($$props.isFetching === void 0 && $$bindings.isFetching && isFetching !== void 0)
    $$bindings.isFetching(isFetching);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0)
    $$bindings.containerClass(containerClass);
  $$result.css.add(css);
  {
    onCourseIdChange(courseId);
  }
  {
    {
      const user = $group.people.find((person) => person.profile_id === $profile.id);
      if (user) {
        set_store_value(globalStore, $globalStore.isStudent = user.role_id === 3, $globalStore);
        filterPollsByStatus($globalStore.isStudent);
      } else if (!$isOrgAdmin && $profile.id && $group.people.length) {
        isPermitted = false;
      }
    }
  }
  $$unsubscribe_group();
  $$unsubscribe_profile();
  $$unsubscribe_isOrgAdmin();
  $$unsubscribe_globalStore();
  $$unsubscribe_course();
  $$unsubscribe_t();
  $$unsubscribe_isMobile();
  return `${$$result.head += `<!-- HEAD_svelte-1jmrdti_START -->${$$result.title = `<title>${escape($course.title || "KinetsHub Course")}</title>`, ""}<!-- HEAD_svelte-1jmrdti_END -->`, ""} ${isFetching ? `${validate_component(Backdrop, "Backdrop").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Moon, "Moon").$$render(
        $$result,
        {
          size: "60",
          color: "#1d4ed8",
          unit: "px",
          duration: "1s"
        },
        {},
        {}
      )}`;
    }
  })}` : ``} ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      open: !isPermitted,
      width: "w-96",
      modalHeading: $t("course.not_permitted.header")
    },
    {},
    {
      default: () => {
        return `<div><p class="dark:text-white text-md text-center">${escape($t("course.not_permitted.body"))}</p> <div class="mt-5 flex justify-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
          $$result,
          {
            className: "px-6 py-3",
            label: $t("course.not_permitted.button"),
            onClick: () => {
              goto("/org/*");
            }
          },
          {},
          {}
        )}</div></div>`;
      }
    }
  )} <div class="root svelte-n074yn">${validate_component(Navigation, "Navigation").$$render($$result, { path, isStudent: $globalStore.isStudent }, {}, {})} <div class="${[
    "rightBar " + escape(containerClass, true) + " svelte-n074yn",
    $isMobile ? "isMobile" : ""
  ].join(" ").trim()}">${isExercisePage ? `${validate_component(Confetti, "Confetti").$$render($$result, {}, {}, {})}` : ``}  ${isPermitted ? `${slots.default ? slots.default({}) : ``}` : ``}</div> </div>`;
});

export { CourseContainer as C, ListChecked as L, PageBody as P, Confetti as a, getIsLessonComplete as g, handleAddLessonWidget as h, toggleConfetti as t };
//# sourceMappingURL=index25-9c55d031.js.map
