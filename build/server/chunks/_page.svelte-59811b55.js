import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { d as compute_rest_props } from './utils-26d532f8.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index9-eea8802c.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7bd47781-1e49-414a-a3cc-f58ca4d23793", e._sentryDebugIdIdentifier = "sentry-dbid-7bd47781-1e49-414a-a3cc-f58ca4d23793");
  } catch (e2) {
  }
}();
const ChartClusterBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path><path d="M10 16H12V26H10zM7 22H9V26H7zM26 8H28V26H26zM23 14H25V26H23z"></path><path d="M15 12H17V26H15z" transform="rotate(-180 16 19)"></path><path d="M18 18H20V26H18z" transform="rotate(-180 19 22)"></path></svg>`;
});
const FlowStreamReference = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M20 24H16v2h4v3h8V21H20zm2-1h4v4H22zM4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM24 5a3.9962 3.9962 0 00-3.8579 3H14v2h6.1421a3.94 3.94 0 00.4248 1.019L14 17.5862 15.4138 19l6.5672-6.5669A3.9521 3.9521 0 0024 13a4 4 0 000-8zm0 6a2 2 0 112-2A2.0023 2.0023 0 0124 11zM9.6929 12.7505a5 5 0 01-.0005-7.5L11.0166 6.75a3 3 0 00-.0005 4.501z"></path><path d="M7.0474,15.751a9,9,0,0,1,0-13.501l1.3232,1.5a7,7,0,0,0,0,10.501Z"></path></svg>`;
});
const MachineLearningModel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27 24a2.9609 2.9609 0 00-1.2854.3008L21.4141 20H18v2h2.5859l3.7146 3.7148A2.9665 2.9665 0 0024 27a3 3 0 103-3zm0 4a1 1 0 111-1A1.0009 1.0009 0 0127 28zM27 13a2.9948 2.9948 0 00-2.8157 2H18v2h6.1843A2.9947 2.9947 0 1027 13zm0 4a1 1 0 111-1A1.0009 1.0009 0 0127 17zM27 2a3.0033 3.0033 0 00-3 3 2.9657 2.9657 0 00.3481 1.373L20.5957 10H18v2h3.4043l4.3989-4.2524A2.9987 2.9987 0 1027 2zm0 4a1 1 0 111-1A1.0009 1.0009 0 0127 6z"></path><path d="M18,6h2V4H18a3.9756,3.9756,0,0,0-3,1.3823A3.9756,3.9756,0,0,0,12,4H11a9.01,9.01,0,0,0-9,9v6a9.01,9.01,0,0,0,9,9h1a3.9756,3.9756,0,0,0,3-1.3823A3.9756,3.9756,0,0,0,18,28h2V26H18a2.0023,2.0023,0,0,1-2-2V8A2.0023,2.0023,0,0,1,18,6ZM12,26H11a7.0047,7.0047,0,0,1-6.92-6H6V18H4V14H7a3.0033,3.0033,0,0,0,3-3V9H8v2a1.0009,1.0009,0,0,1-1,1H4.08A7.0047,7.0047,0,0,1,11,6h1a2.0023,2.0023,0,0,1,2,2v4H12v2h2v4H12a3.0033,3.0033,0,0,0-3,3v2h2V21a1.0009,1.0009,0,0,1,1-1h2v4A2.0023,2.0023,0,0,1,12,26Z"></path></svg>`;
});
const animate = "transition delay-75 duration-300 ease-in-out";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let isAdding = false;
  getSupabase();
  const areas = [
    {
      title: "Access",
      description: "Quickly find any material you need to get your job done. KinetsHub offers the All-in-on-platform"
    },
    {
      title: "Analytics",
      description: "Avoid assumptions, better understand the needs of your classrooms and give students a personlized experience"
    },
    {
      title: "Automation",
      description: "Lesson reminders, deadline reminders and many other automated alerts to help everyone in the learning process be proactive"
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-17i5s62_START -->${$$result.title = `<title>KinetsHub - The classroom software</title>`, ""}<!-- HEAD_svelte-17i5s62_END -->`, ""} <div class="md:h-[93vh] w-screen flex items-center justify-center flex-col m-2 sm:m-0 font-sans"> <div data-svelte-h="svelte-1gb007d"><h3 class="dark:text-white text-4xl text-center">Classroom<span class="text-primary-700">IO</span></h3> <p class="dark:text-white text-lg text-center">The operating system for classroooms of the future 🚀🚀🚀.</p></div> <form class="my-4 hidden"><div class="flex items-center flex-col sm:flex-row">${`${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        type: "email",
        placeholder: "Enter your email..",
        className: "mr-3 my-2",
        isRequired: true,
        isDisabled: isAdding,
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { type: "submit", isLoading: isAdding }, {}, {
      default: () => {
        return `Join waiting list`;
      }
    })}`}</div></form> <div class="flex flex-col md:flex-row mt-4">${each(areas, (area, index) => {
      return `<div class="${"max-w-[350px] m-3 bg-white dark:bg-black rounded-md py-3 px-12 active shadow-xl border-2 hover:border-primary-700 " + escape(animate, true)}"><h3 class="dark:text-white text-3xl">${index === 0 ? `${validate_component(FlowStreamReference, "FlowStreamReferenceIcon").$$render(
        $$result,
        {
          size: 32,
          class: "carbon-icon dark:text-white"
        },
        {},
        {}
      )}` : `${index === 1 ? `${validate_component(ChartClusterBar, "ChartClusterBarIcon").$$render(
        $$result,
        {
          size: 32,
          class: "carbon-icon dark:text-white"
        },
        {},
        {}
      )}` : `${index === 2 ? `${validate_component(MachineLearningModel, "MachineLearningModelIcon").$$render(
        $$result,
        {
          size: 32,
          class: "carbon-icon dark:text-white"
        },
        {},
        {}
      )}` : ``}`}`} ${escape(area.title)}</h3> <p class="dark:text-white">${escape(area.description)}</p> </div>`;
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-59811b55.js.map
