import { s as subscribe, d as compute_rest_props, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as each, d as spread, h as escape_attribute_value, f as escape_object, s as setContext, j as getContext, i as add_classes } from './ssr-10c5b872.js';
import get from 'lodash/get.js';
import { R as Rocket } from './Rocket-f94fd084.js';
import { L as Loader, C as Card } from './index16-68b7dc8d.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import './validator-27ec1d5c.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { g as goto } from './navigation-cd282f65.js';
import { p as page } from './stores-793c1e19.js';
import { u as user } from './user-e923b6d4.js';
import { c as isCoursePage } from './app2-29b60895.js';
import { t as t2 } from './translations-90190f83.js';
import { B as Box } from './index17-3166eaf0.js';
import { C as CoursesEmptyIcon } from './CoursesEmptyIcon-3e8d3605.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { c as courseMetaDeta, a as courses } from './store5-4ab63ff0.js';
import { b as getCourseBySiteName } from './index6-4a1599e3.js';
import './_sentry-release-injection-file-6be6a010.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { l as landingPageSettings } from './store6-6153cb6b.js';
import { P as PoweredBy } from './PoweredBy-58475ea5.js';
import { w as writable } from './index2-aea858a5.js';
import { C as ChevronRight$1 } from './ChevronRight-920dc215.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cea31797-d627-4f99-a2ff-178cfa86b0af", e._sentryDebugIdIdentifier = "sentry-dbid-cea31797-d627-4f99-a2ff-178cfa86b0af");
  } catch (e2) {
  }
}();
const AccordionSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["count", "align", "size", "open"]);
  let { count = 4 } = $$props;
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { open = true } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `  <ul${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${open ? `<li${add_classes("bx--accordion__item bx--accordion__item--active".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span> <div${add_classes("bx--accordion__content".trim())}>${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "90%" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "80%" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "95%" }, {}, {})}</div></li>` : ``} ${each(Array.from({ length: open ? count - 1 : count }, (_, i) => i), (item) => {
    return `<li${add_classes("bx--accordion__item".trim())}><span${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render($$result, { class: "bx--accordion__arrow" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { class: "bx--accordion__title" }, {}, {})}</span> </li>`;
  })}</ul>`;
});
const AccordionSkeleton$1 = AccordionSkeleton;
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["align", "size", "disabled", "skeleton"]);
  let { align = "end" } = $$props;
  let { size = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { skeleton = false } = $$props;
  const disableItems = writable(disabled);
  setContext("Accordion", { disableItems });
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  {
    disableItems.set(disabled);
  }
  return ` ${skeleton ? `${validate_component(AccordionSkeleton$1, "AccordionSkeleton").$$render($$result, Object.assign({}, $$restProps, { align }, { size }), {}, {})}` : ` <ul${spread([escape_object($$restProps)], {
    classes: "bx--accordion " + (align === "start" ? "bx--accordion--start" : "") + " " + (align === "end" ? "bx--accordion--end" : "") + " " + (size === "sm" ? "bx--accordion--sm" : "") + " " + (size === "xl" ? "bx--accordion--xl" : "")
  })}>${slots.default ? slots.default({}) : ``}</ul>`}`;
});
const Accordion$1 = Accordion;
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "open", "disabled", "iconDescription"]);
  let { title = "title" } = $$props;
  let { open = false } = $$props;
  let { disabled = false } = $$props;
  let { iconDescription = "Expand/Collapse" } = $$props;
  let initialDisabled = disabled;
  const ctx = getContext("Accordion");
  ctx.disableItems.subscribe((value) => {
    if (!value && initialDisabled)
      return;
    disabled = value;
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return ` <li${spread([escape_object($$restProps)], {
    classes: "bx--accordion__item " + (open ? "bx--accordion__item--active" : "") + " " + (disabled ? "bx--accordion__item--disabled" : "") + "  "
  })}><button type="button"${add_attribute("title", iconDescription, 0)}${add_attribute("aria-expanded", open, 0)} ${disabled ? "disabled" : ""}${add_classes("bx--accordion__heading".trim())}>${validate_component(ChevronRight$1, "ChevronRight").$$render(
    $$result,
    {
      class: "bx--accordion__arrow",
      "aria-label": iconDescription
    },
    {},
    {}
  )} <div${add_classes("bx--accordion__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</div></button> <div${add_classes("bx--accordion__content".trim())}>${slots.default ? slots.default({}) : ``}</div></li>`;
});
const AccordionItem$1 = AccordionItem;
const css = {
  code: "ul.svelte-1fvwtdt{margin:0 auto;padding:0}ul.svelte-1fvwtdt::after{content:'';display:block;clear:both}a.svelte-1fvwtdt{text-decoration:none;color:var(--main-primary-color);padding:0 1.5em;font-weight:700;display:flex;align-items:center;flex-direction:column}@media only screen and (max-width: 1002px){nav.hide.svelte-1fvwtdt{display:none}ul.svelte-1fvwtdt{align-items:center}a.svelte-1fvwtdt{padding:0 0.5em}}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $user, $$unsubscribe_user;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { disableSignup = false } = $$props;
  let { logo } = $$props;
  let { orgName } = $$props;
  let { isOrgSite = false } = $$props;
  let { backgroundColor = "bg-white dark:bg-black" } = $$props;
  let navClass = "";
  const redirect = isCoursePage($page.url.pathname) ? `?redirect=${$page.url.pathname}` : "";
  if ($$props.disableSignup === void 0 && $$bindings.disableSignup && disableSignup !== void 0)
    $$bindings.disableSignup(disableSignup);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  if ($$props.orgName === void 0 && $$bindings.orgName && orgName !== void 0)
    $$bindings.orgName(orgName);
  if ($$props.isOrgSite === void 0 && $$bindings.isOrgSite && isOrgSite !== void 0)
    $$bindings.isOrgSite(isOrgSite);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  $$result.css.add(css);
  navClass = "";
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_user();
  return `<nav class="${escape(navClass, true) + " " + escape(backgroundColor, true) + " sticky top-0 z-50 flex w-full px-2 py-1 border-t-0 border-r-0 border-b border-l-0 border-gray-300 svelte-1fvwtdt"}"><ul class="flex w-full items-center svelte-1fvwtdt"><div class="logo"><a href="/"${add_attribute("title", `${$t("navigation.goto")} ${orgName || "KinetsHub"} ${$t("navigation.home")}`, 0)} id="logo" data-hveid="8" class="svelte-1fvwtdt"><img${add_attribute("src", logo || "/logo-192.png", 0)}${add_attribute("alt", `${orgName || "KinetsHub"} logo`, 0)} class="rounded w-9 inline-block mx-auto" data-atf="1"></a></div> ${$user.isLoggedIn ? `<li class="hidden"><a class="block svelte-1fvwtdt" href="dashboard">${escape($t("navigation.dashboard"))}</a></li> <li class="hidden"><a class="block svelte-1fvwtdt" href="courses">${escape($t("navigation.courses"))}</a></li> <li class="hidden"><a class="block svelte-1fvwtdt" href="discussions">${escape($t("navigation.discussion"))}</a></li> <li class="hidden"><a class="block svelte-1fvwtdt" href="people">${escape($t("navigation.people"))}</a></li>` : ``} <span class="flex-grow"></span> ${$user.isLoggedIn ? `${isOrgSite ? `<li><a class="block svelte-1fvwtdt" href="/lms">${escape($t("navigation.goto_lms"))}</a></li>` : ``}` : `${!$page.url.pathname?.includes("/404") ? `<li><div class="flex">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("navigation.login"),
      variant: VARIANTS.TEXT,
      onClick: () => goto("/login" + redirect)
    },
    {},
    {}
  )}</div></li> <li>${!disableSignup ? `<div class="flex">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("navigation.signup"),
      variant: VARIANTS.CONTAINED,
      onClick: () => goto("/signup" + redirect)
    },
    {},
    {}
  )}</div>` : ``}</li>` : ``}`}  </ul> </nav>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"></path></svg>`;
});
const LocationFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2A11.0134,11.0134,0,0,0,5,13a10.8885,10.8885,0,0,0,2.2163,6.6s.3.3945.3482.4517L16,30l8.439-9.9526c.0444-.0533.3447-.4478.3447-.4478l.0015-.0024A10.8846,10.8846,0,0,0,27,13,11.0134,11.0134,0,0,0,16,2Zm0,15a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,17Z"></path><circle cx="16" cy="13" r="4" fill="none"></circle></svg>`;
});
const LogoFacebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26.67,4H5.33A1.34,1.34,0,0,0,4,5.33V26.67A1.34,1.34,0,0,0,5.33,28H16.82V18.72H13.7V15.09h3.12V12.42c0-3.1,1.89-4.79,4.67-4.79.93,0,1.86,0,2.79.14V11H22.37c-1.51,0-1.8.72-1.8,1.77v2.31h3.6l-.47,3.63H20.57V28h6.1A1.34,1.34,0,0,0,28,26.67V5.33A1.34,1.34,0,0,0,26.67,4Z"></path></svg>`;
});
const LogoLinkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26.2,4H5.8C4.8,4,4,4.8,4,5.7v20.5c0,0.9,0.8,1.7,1.8,1.7h20.4c1,0,1.8-0.8,1.8-1.7V5.7C28,4.8,27.2,4,26.2,4z M11.1,24.4	H7.6V13h3.5V24.4z M9.4,11.4c-1.1,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.1,0,2.1,0.9,2.1,2.1S10.5,11.4,9.4,11.4z M24.5,24.3	H21v-5.6c0-1.3,0-3.1-1.9-3.1c-1.9,0-2.1,1.5-2.1,2.9v5.7h-3.5V13h3.3v1.5h0.1c0.5-0.9,1.7-1.9,3.4-1.9c3.6,0,4.3,2.4,4.3,5.5V24.3z"></path></svg>`;
});
const LogoTwitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M11.5475,25.7523c9.0566,0,14.0102-7.5034,14.0102-14.0102,0-.2131,0-.4253-.0144-.6365,.9637-.697,1.7955-1.5601,2.4566-2.5488-.8987,.3982-1.852,.6594-2.8282,.7747,1.0279-.6154,1.7972-1.5833,2.1648-2.7235-.9666,.5736-2.024,.9778-3.1267,1.1952-1.8648-1.9829-4.984-2.0786-6.9669-.2138-1.2788,1.2026-1.8214,2.9947-1.4245,4.7047-3.9591-.1985-7.6479-2.0685-10.1482-5.1446-1.3069,2.2499-.6394,5.1282,1.5245,6.5731-.7836-.0232-1.5501-.2346-2.2349-.6163v.0624c.0006,2.3439,1.6529,4.3628,3.9504,4.8269-.7249,.1977-1.4855,.2266-2.2234,.0845,.6451,2.0058,2.4937,3.38,4.6003,3.4195-1.7436,1.3703-3.8975,2.1142-6.1152,2.112-.3918-.0008-.7832-.0245-1.1722-.071,2.2518,1.4451,4.8719,2.2116,7.5475,2.208"></path></svg>`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z"></path></svg>`;
});
const PageLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="w-screen h-screen p-5"> <div class="flex items-center justify-between w-full rounded-md overflow-hidden">${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      style: "width:80%; margin-right:10rem;border-radius:10px"
    },
    {},
    {}
  )} <div class="flex items-center justify-between w-[20%]">${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      style: "width:2%;  margin-right:1rem; border-radius:10px"
    },
    {},
    {}
  )} ${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      style: "width:2%;  margin-right:1rem; border-radius:10px"
    },
    {},
    {}
  )} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width:2%;  border-radius:10px" }, {}, {})}</div></div>  <div class="flex flex-row gap-5 items-start justify-center flex-wrap w-full my-8 rounded-md overflow-hidden">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "width:100%; height:20rem" }, {}, {})}</div>  <div class="flex gap-5 items-center justify-center flex-wrap my-4 rounded-md overflow-hidden">${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})}</div></section>`;
});
function isYouTubeLink(link) {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  return youtubeRegex.test(link.trim());
}
function getBgImage(settings) {
  const { show, image } = settings.header.background || {
    show: true,
    image: "/images/org-landingpage-banner.jpeg"
  };
  if (!show) {
    return void 0;
  }
  if (image) {
    return `url('${image}')`;
  }
}
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $landingPageSettings, $$unsubscribe_landingPageSettings;
  let $courseMetaDeta, $$unsubscribe_courseMetaDeta;
  let $t, $$unsubscribe_t;
  let $courses, $$unsubscribe_courses;
  $$unsubscribe_landingPageSettings = subscribe(landingPageSettings, (value) => $landingPageSettings = value);
  $$unsubscribe_courseMetaDeta = subscribe(courseMetaDeta, (value) => $courseMetaDeta = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  let { orgSiteName = "" } = $$props;
  let { org } = $$props;
  let email;
  let isAdding = false;
  let viewAll = false;
  let isContactSubmiting = false;
  let player;
  let contact = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  let contactError = {};
  getSupabase();
  async function loadData(siteName) {
    if (!siteName)
      return;
    try {
      console.log("sitename", siteName);
      set_store_value(courseMetaDeta, $courseMetaDeta.isLoading = true, $courseMetaDeta);
      const coursesResult = await getCourseBySiteName(siteName);
      courses.set(coursesResult);
      set_store_value(courseMetaDeta, $courseMetaDeta.isLoading = false, $courseMetaDeta);
    } catch (error) {
      console.log("error", error);
    }
  }
  function initPlyr(_player, _video) {
    return;
  }
  function setDefault(landingpage) {
    if (landingpage && Object.keys(landingpage).length) {
      if (!landingpage?.header?.banner) {
        landingpage.header.banner = $landingPageSettings.header.banner;
      }
      set_store_value(landingPageSettings, $landingPageSettings = { ...landingpage }, $landingPageSettings);
    }
  }
  if ($$props.orgSiteName === void 0 && $$bindings.orgSiteName && orgSiteName !== void 0)
    $$bindings.orgSiteName(orgSiteName);
  if ($$props.org === void 0 && $$bindings.org && org !== void 0)
    $$bindings.org(org);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      loadData(orgSiteName);
    }
    {
      initPlyr(player, $landingPageSettings.header?.banner?.video);
    }
    {
      setDefault(org?.landingpage);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1oui3cm_START -->${$$result.title = `<title> ${escape(!org?.name ? "" : `${org.name}'s `)}${escape($t("course.navItem.landing_page.landing_page"))} </title>`, ""}<!-- HEAD_svelte-1oui3cm_END -->`, ""} ${validate_component(PoweredBy, "PoweredBy").$$render($$result, {}, {}, {})} ${!org?.landingpage ? `${validate_component(PageLoader, "PageLoader").$$render($$result, {}, {}, {})}` : `<main> ${$landingPageSettings.header.show ? `<header id="header"${add_attribute(
      "class",
      `w-full h-[100vh] md:h-[90vh] mb-10 relative ${$landingPageSettings.header.background?.show ? "bg-cover bg-center" : "border-b border-gray-300"}`,
      0
    )} style="${"background-image: " + escape(getBgImage($landingPageSettings), true)}">${validate_component(Navigation, "Navigation").$$render(
      $$result,
      {
        logo: org.avatar_url,
        orgName: org.name,
        disableSignup: true,
        isOrgSite: true
      },
      {},
      {}
    )} <div class="absolute h-[100vh] md:h-[90vh] top-0 w-full opacity-80 z-10 bg-white"></div> ${$landingPageSettings.header.banner.show ? `<div class="flex items-center justify-center md:h-full py-2"><div class="md:w-11/12 lg:w-5/6 w-full flex items-center justify-center md:justify-between flex-col-reverse md:flex-row z-20 relative"> <div class="md:w-2/5 w-11/12 py-10 flex flex-col items-center md:items-start mr-3"><p class="text-primary-600 text-2xl font-semibold capitalize">${escape(org.name)}</p> <h1 class="text-4xl md:text-5xl lg:text-6xl text-center md:text-start my-4 font-bold">${escape($landingPageSettings.header.title)} <br><span class="text-primary-600">${escape($landingPageSettings.header.titleHighlight)}</span></h1> <p class="text-md mb-3 md:mb-5 text-xl text-center md:text-start">${escape($landingPageSettings.header.subtitle)}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $landingPageSettings.header.action.label,
        className: "mt-2 md:mt-5 px-10 w-fit",
        onClick: () => {
          $landingPageSettings.header.action.redirect && goto($landingPageSettings.header.action.link);
        }
      },
      {},
      {}
    )}</div> <div class="w-5/6 md:w-1/2 md:max-w-[650px] flex">${isYouTubeLink($landingPageSettings.header?.banner?.video) && $landingPageSettings.header.banner.type === "video" ? `<div id="player" style="width:100%; border-radius:12px"${add_attribute("this", player, 0)}><iframe${add_attribute("title", $t("course.navItem.landing_page.header_video"), 0)}${add_attribute("src", $landingPageSettings.header?.banner?.video, 0)} allowfullscreen allowtransparency allow="autoplay"></iframe></div>` : ` <img class="rounded-md"${add_attribute("src", $landingPageSettings.header?.banner?.image, 0)} alt="landing page banner">`}</div></div></div>` : `<div class="w-full h-full flex items-center justify-center md:flex-row z-20 relative"><div class="max-w-[600px] mx-auto w-11/12 py-10 flex flex-col items-center"><p class="text-primary-600 text-2xl font-semibold capitalize">${escape(org.name)}</p> <h1 class="text-4xl md:text-5xl lg:text-6xl text-center my-4 font-bold">${escape($landingPageSettings.header.title)} <br><span class="text-primary-600">${escape($landingPageSettings.header.titleHighlight)}</span></h1> <p class="text-md mb-6 text-center text-xl">${escape($landingPageSettings.header.subtitle)}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $landingPageSettings.header.action.label,
        className: "mt-5 px-10 w-fit",
        onClick: () => {
          $landingPageSettings.header.action.redirect && goto($landingPageSettings.header.action.link);
        }
      },
      {},
      {}
    )}</div></div>`}</header>` : ``}  ${$landingPageSettings.aboutUs.show ? `<section id="aboutus" class="m-h-[400px] my-10 mx-auto max-w-6xl w-full"><div class="mx-4 flex items-center justify-evenly flex-col lg:flex-row"><div class="max-w-[600px] lg:w-2/5 mr-5 mb-5 lg:mb-0"><h2 class="text-4xl md:text-5xl lg:text-6xl">${escape($landingPageSettings.aboutUs.title)}</h2> <p class="mb-2">${escape($landingPageSettings.aboutUs.content)}</p></div> <div class="image"><img${add_attribute("src", $landingPageSettings.aboutUs.imageUrl, 0)} alt="Our Story" class="rounded-2xl max-h-[450px]"></div></div></section>` : ``}  ${$landingPageSettings.courses.show ? `<section id="courses" class="my-10 mx-auto max-w-6xl w-full"><div class="w-full"><div class="max-w-[500px] mx-auto w-11/12 py-10"><h1 class="text-4xl md:text-5xl lg:text-6xl text-center my-4 font-bold">${escape($landingPageSettings.courses.title)} <span class="text-primary-600">${escape($landingPageSettings.courses.titleHighlight)}</span></h1> <p class="text-md text-center">${escape($landingPageSettings.courses.subtitle)}</p></div></div> ${$courseMetaDeta.isLoading ? `<div class="cards-container my-4 mx-2">${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})}</div>` : `${$courses.length > 0 ? `<div class="cards-container my-4 mx-2">${each($courses.slice(0, viewAll ? $courses.length : 3), (courseData) => {
      return `${validate_component(Card, "Card").$$render(
        $$result,
        {
          id: courseData.id,
          slug: courseData.slug,
          bannerImage: courseData.logo || "/images/classroomio-course-img-template.jpg",
          title: courseData.title,
          type: courseData.type,
          description: courseData.description,
          isPublished: courseData.is_published,
          pricingData: {
            cost: courseData.cost,
            discount: courseData.metadata.discount,
            showDiscount: courseData.metadata.showDiscount,
            currency: courseData.currency
          },
          currency: courseData.currency,
          totalLessons: get(courseData, "lessons[0].count", 0),
          isOnLandingPage: true
        },
        {},
        {}
      )}`;
    })}</div>` : `${validate_component(Box, "Box").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(CoursesEmptyIcon, "CoursesEmptyIcon").$$render($$result, {}, {}, {})} <h3 class="dark:text-white text-2xl my-5">${escape($t("course.navItem.landing_page.no_course_published"))}</h3> <p class="dark:text-white w-1/3 text-center">${escape($t("course.navItem.landing_page.coming_your_way"))}</p>`;
      }
    })}`}`} ${$courses.length > 3 ? `<div class="w-full mt-3 flex justify-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        variant: VARIANTS.OUTLINED,
        onClick: () => viewAll = !viewAll,
        label: viewAll ? $t("course.navItem.landing_page.view_less") : $t("course.navItem.landing_page.view_all"),
        className: "px-10 py-5 w-fit"
      },
      {},
      {}
    )}</div>` : ``}</section>` : ``}  ${$landingPageSettings.faq.show ? `<section id="faq" class="my-10 mx-auto max-w-[700px] w-full"><div class="py-10"><h1 class="text-4xl md:text-5xl lg:text-6xl text-center my-4 font-bold">${escape($landingPageSettings.faq.title)}</h1></div> <div class="mx-2">${validate_component(Accordion$1, "Accordion").$$render($$result, { size: "xl" }, {}, {
      default: () => {
        return `${each($landingPageSettings.faq.questions, (faq) => {
          return `${validate_component(AccordionItem$1, "AccordionItem").$$render($$result, { title: faq.title, class: "text-3xl" }, {}, {
            default: () => {
              return `<p class="text-lg">${escape(faq.content)}</p> `;
            }
          })}`;
        })}`;
      }
    })}</div></section>` : ``}  ${$landingPageSettings.contact.show ? `<section id="contact" class="my-10 w-full bg-primary-50"><div class="mx-auto max-w-6xl w-full"><div class="max-w-[500px] mx-auto w-11/12 py-10"><h1 class="text-4xl md:text-5xl lg:text-6xl text-center my-4 font-bold">${escape($landingPageSettings.contact.title)} <span class="text-primary-600">${escape($landingPageSettings.contact.titleHighlight)}</span></h1> <p class="text-md text-center">${escape($landingPageSettings.contact.subtitle)}</p></div> ${validate_component(Grid$1, "Grid").$$render($$result, { class: "max-w-[700px] pb-10" }, {}, {
      default: () => {
        return ` ${validate_component(Row$1, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Column$1, "Column").$$render(
              $$result,
              {
                class: "flex items-center flex-col justify-center break-all text-center cursor-pointer hover:shadow-xl rounded-lg transition-all duration-500 py-2 mx-2"
              },
              {},
              {
                default: () => {
                  return `${validate_component(LocationFilled, "LocationFilled").$$render($$result, { size: 32 }, {}, {})} <p class="text-xs md:text-sm mt-3 max-w-[200px]">${escape($landingPageSettings.contact.address)}</p>`;
                }
              }
            )} ${validate_component(Column$1, "Column").$$render(
              $$result,
              {
                class: "flex items-center flex-col justify-center break-all text-center cursor-pointer hover:shadow-xl rounded-lg transition-all duration-500 py-2 mx-2"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Phone, "Phone").$$render($$result, { size: 32 }, {}, {})} <p class="text-xs md:text-sm mt-3">${escape($landingPageSettings.contact.phone)}</p>`;
                }
              }
            )} ${validate_component(Column$1, "Column").$$render(
              $$result,
              {
                class: "flex items-center flex-col justify-center break-all text-center cursor-pointer hover:shadow-xl rounded-lg transition-all duration-500 py-2 mx-2"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Email, "Email").$$render($$result, { size: 32 }, {}, {})} <p class="text-xs md:text-sm mt-3">${escape($landingPageSettings.contact.email)}</p>`;
                }
              }
            )}`;
          }
        })}  <div class="mt-8 bg-white p-7 rounded-lg">${`<form><div class="w-full flex justify-between flex-col md:flex-row"><div class="w-full md:w-2/4 mr-5">${validate_component(TextField, "TextField").$$render(
          $$result,
          {
            label: $t("course.navItem.landing_page.name"),
            errorMessage: contactError.name,
            className: "mb-5",
            labelClassName: "font-bold",
            placeholder: "Elon Musk",
            value: contact.name
          },
          {
            value: ($$value) => {
              contact.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(TextField, "TextField").$$render(
          $$result,
          {
            label: $t("course.navItem.landing_page.email"),
            errorMessage: contactError.email,
            className: "text-xs font-normal mb-5",
            placeholder: "musk@x.com",
            value: contact.email
          },
          {
            value: ($$value) => {
              contact.email = $$value;
              $$settled = false;
            }
          },
          {}
        )} ${validate_component(TextField, "TextField").$$render(
          $$result,
          {
            label: $t("course.navItem.landing_page.phone"),
            errorMessage: contactError.phone,
            className: "text-xs font-normal mb-5",
            placeholder: "+1194802480",
            value: contact.phone
          },
          {
            value: ($$value) => {
              contact.phone = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div> <div class="w-full md:w-2/4">${validate_component(TextArea, "TextArea").$$render(
          $$result,
          {
            label: $t("course.navItem.landing_page.message"),
            errorMessage: contactError.message,
            rows: 9,
            placeholder: $t("course.navItem.landing_page.your_message"),
            value: contact.message
          },
          {
            value: ($$value) => {
              contact.message = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div></div> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
          $$result,
          {
            className: "w-full mx-auto mt-5 md:mt-0",
            type: "submit",
            isLoading: isContactSubmiting
          },
          {},
          {
            default: () => {
              return `<span class="mr-2 text-md">${escape($t("course.navItem.landing_page.submit"))}</span> ${validate_component(Rocket, "Rocket").$$render($$result, { size: 24 }, {}, {})}`;
            }
          }
        )}</form>`}</div>`;
      }
    })}</div></section>` : ``}  ${$landingPageSettings.mailinglist.show ? `<section id="waitlist" class="my-10 mx-auto max-w-6xl w-[95%]"><div class="bg-primary-700 rounded-lg flex flex-col lg:flex-row lg:items-center px-4 md:px-10 py-14"><div class="w-full md:w-[65%] md:mr-4"><h1 class="text-4xl font-bold mb-5 mt-0 text-white">${escape($landingPageSettings.mailinglist.title)}</h1> <p class="text-lg text-white">${escape($landingPageSettings.mailinglist.subtitle)}</p></div> <form class="my-4 w-full md:w-fit"><div class="flex items-center flex-col sm:flex-row">${`${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        type: "email",
        placeholder: $t("course.navItem.landing_page.enter"),
        className: "sm:mr-3 my-0 w-full md:w-fit",
        isRequired: true,
        isDisabled: isAdding,
        inputClassName: "py-2",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        className: "my-1 w-full mt-2",
        variant: VARIANTS.CONTAINED_LIGHT,
        type: "submit",
        isLoading: isAdding
      },
      {},
      {
        default: () => {
          return `${escape($landingPageSettings.mailinglist.buttonLabel)}`;
        }
      }
    )}`}</div></form></div></section>` : ``}  ${$landingPageSettings.footer.show ? `<footer id="footer" class="flex justify-center items-center flex-col my-10 w-full px-5 py-10 md:py-3 border-b-0 border-r-0 border-t border-l-0 border-gray-300"><ul class="flex w-11/12 items-center flex-col sm:flex-row"><div class="logo"><a href="/"${add_attribute("title", `Go to ${org.name} Home`, 0)} id="logo" data-hveid="8" class="flex items-center"><img${add_attribute("src", org.avatar_url || "/logo-192.png", 0)}${add_attribute("alt", `${org.name} logo`, 0)} class="rounded max-h-10 w-10 inline-block mx-auto" data-atf="1"> <h3 class="text-black ml-3 text-xl">${escape(org.name)}</h3></a></div> <span class="flex-grow"></span> <div class="flex mt-5 sm:mt-0 gap-2">${$landingPageSettings.footer.facebook ? `<li><a${add_attribute("href", $landingPageSettings.footer.facebook, 0)} target="_blank"${add_attribute("title", $t("settings.landing_page.footer.facebook"), 0)} id="logo-fb" data-hveid="8">${validate_component(LogoFacebook, "LogoFacebook").$$render($$result, { size: 24 }, {}, {})}</a></li>` : ``} ${$landingPageSettings.footer.twitter ? `<li><a${add_attribute("href", $landingPageSettings.footer.twitter, 0)} target="_blank"${add_attribute("title", $t("settings.landing_page.footer.twitter"), 0)} id="logo-tw" data-hveid="8">${validate_component(LogoTwitter, "LogoTwitter").$$render($$result, { size: 24 }, {}, {})}</a></li>` : ``} ${$landingPageSettings.footer.linkedin ? `<li><a${add_attribute("href", $landingPageSettings.footer.linkedin, 0)} target="_blank"${add_attribute("title", $t("settings.landing_page.footer.linkedin"), 0)} id="logo-ln" data-hveid="8">${validate_component(LogoLinkedin, "LogoLinkedin").$$render($$result, { size: 24 }, {}, {})}</a></li>` : ``}</div></ul></footer>` : ``}</main>`}`;
  } while (!$$settled);
  $$unsubscribe_landingPageSettings();
  $$unsubscribe_courseMetaDeta();
  $$unsubscribe_t();
  $$unsubscribe_courses();
  return $$rendered;
});

export { LandingPage as L, Navigation as N };
//# sourceMappingURL=index7-7ca5be32.js.map
