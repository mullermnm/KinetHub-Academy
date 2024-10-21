import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each, m as missing_component, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { s as subscribe, d as compute_rest_props } from './utils-26d532f8.js';
import { p as page } from './stores-793c1e19.js';
import { H as HomeIcon, a as Help, P as ProfileMenu } from './index19-2a5aa9f3.js';
import { C as CourseIcon } from './CourseIcon-c2776210.js';
import { A as Avatar } from './index10-b2b97ef7.js';
import { p as profile } from './user-e923b6d4.js';
import { N as NavClasses } from './reusableClass-512f4804.js';
import { s as sideBar, p as profileMenu } from './store-37f0dea3.js';
import { t as t2 } from './translations-90190f83.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { C as ChevronRight } from './ChevronRight2-6f4a443c.js';
import './app-d638cf5d.js';
import './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';
import './Rocket-f94fd084.js';
import './Settings-0a14f57d.js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import 'posthog-js';
import './index8-59a07edf.js';
import './index9-eea8802c.js';
import './useMobile-47eebf4e.js';
import './Popover-a92462a3.js';
import './index15-c5761f1e.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f189fdb0-3f83-4c4a-bda6-84200cf2d6db", e._sentryDebugIdIdentifier = "sentry-dbid-f189fdb0-3f83-4c4a-bda6-84200cf2d6db");
  } catch (e2) {
  }
}();
const Explore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M22.707,9.2931a.9992.9992,0,0,0-1.0234-.2417l-9,3a1.001,1.001,0,0,0-.6323.6323l-3,9a1,1,0,0,0,1.2651,1.2651l9-3a1.0013,1.0013,0,0,0,.6323-.6324l3-9A1,1,0,0,0,22.707,9.2931ZM11.5811,20.419l2.2094-6.6284L18.21,18.21Z"></path><path d="M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z"></path></svg>`;
});
const LicenseDraft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M8 6H20V8H8zM8 10H20V12H8zM8 14H14V16H8zM8 24H12V26H8z"></path><path d="M29.707 19.293l-3-3a.9994.9994 0 00-1.414 0L16 25.5859V30h4.4141l9.2929-9.293A.9994.9994 0 0029.707 19.293zM19.5859 28H18V26.4141l5-5L24.5859 23zM26 21.5859L24.4141 20 26 18.4141 27.5859 20zM12 30H6a2.0021 2.0021 0 01-2-2V4A2.0021 2.0021 0 016 2H22a2.0021 2.0021 0 012 2V14H22V4H6V28h6z"></path></svg>`;
});
const CommunityIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "currentColor" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2588 0.5V2C15.2534 2 16.2072 2.39509 16.9104 3.09835C17.6137 3.80161 18.0088 4.75544 18.0088 5.75C18.0088 6.74456 17.6137 7.69839 16.9104 8.40165C16.2072 9.10491 15.2534 9.5 14.2588 9.5V11C15.6512 11 16.9865 10.4469 17.9711 9.46231C18.9557 8.47774 19.5088 7.14239 19.5088 5.75C19.5088 4.35761 18.9557 3.02226 17.9711 2.03769C16.9865 1.05312 15.6512 0.5 14.2588 0.5ZM14.2588 21.5H15.7588V17.75C15.7572 16.3581 15.2035 15.0237 14.2193 14.0395C13.2351 13.0553 11.9007 12.5016 10.5088 12.5H6.00879C4.6169 12.5016 3.28249 13.0553 2.29828 14.0395C1.31406 15.0237 0.760417 16.3581 0.758789 17.75V21.5H2.25879V17.75C2.25996 16.7558 2.65542 15.8027 3.35843 15.0996C4.06144 14.3966 5.01459 14.0012 6.00879 14H10.5088C11.503 14.0012 12.4561 14.3966 13.1591 15.0996C13.8622 15.8027 14.2576 16.7558 14.2588 17.75V21.5ZM20.2588 21.5H21.7588V17.75C21.7572 16.3581 21.2036 15.0236 20.2194 14.0394C19.2352 13.0552 17.9007 12.5015 16.5088 12.5V14C17.503 14.0011 18.4562 14.3966 19.1592 15.0996C19.8622 15.8026 20.2577 16.7558 20.2588 17.75V21.5ZM10.3422 2.63199C9.7255 2.21993 9.00047 2 8.25879 2C7.26423 2 6.3104 2.39509 5.60714 3.09835C4.90388 3.80161 4.50879 4.75544 4.50879 5.75C4.50879 6.49168 4.72873 7.2167 5.14078 7.83339C5.55284 8.45007 6.13851 8.93072 6.82373 9.21455C7.50895 9.49838 8.26295 9.57264 8.99038 9.42795C9.71781 9.28325 10.386 8.9261 10.9104 8.40165C11.4349 7.8772 11.792 7.20902 11.9367 6.48159C12.0814 5.75416 12.0072 5.00016 11.7233 4.31494C11.4395 3.62971 10.9589 3.04404 10.3422 2.63199ZM5.34205 1.38478C6.20541 0.807907 7.22044 0.5 8.25879 0.5C9.65118 0.5 10.9865 1.05312 11.9711 2.03769C12.9557 3.02226 13.5088 4.35761 13.5088 5.75C13.5088 6.78835 13.2009 7.80339 12.624 8.66674C12.0471 9.5301 11.2272 10.203 10.2679 10.6004C9.30857 10.9977 8.25297 11.1017 7.23457 10.8991C6.21617 10.6966 5.28071 10.1965 4.54648 9.46231C3.81226 8.72808 3.31224 7.79262 3.10967 6.77422C2.9071 5.75582 3.01106 4.70022 3.40842 3.74091C3.80578 2.7816 4.47869 1.96166 5.34205 1.38478Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
function isActive(pagePath, itemPath) {
  const pageLinkItems = pagePath.split("/");
  const itemLinkItems = itemPath.split("/");
  if (itemLinkItems.length !== pageLinkItems.length) {
    return false;
  }
  return pagePath.includes(itemPath);
}
const SideBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sideBar, $$unsubscribe_sideBar;
  let $t, $$unsubscribe_t;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $profileMenu, $$unsubscribe_profileMenu;
  let $profile, $$unsubscribe_profile;
  let $page, $$unsubscribe_page;
  $$unsubscribe_sideBar = subscribe(sideBar, (value) => $sideBar = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_profileMenu = subscribe(profileMenu, (value) => $profileMenu = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let sideLinks = [];
  sideLinks = [
    {
      name: $t("lms_navigation.home"),
      icon: HomeIcon,
      link: "/lms"
    },
    {
      name: $t("lms_navigation.my_learning"),
      icon: CourseIcon,
      link: "/lms/mylearning"
    },
    {
      name: $t("lms_navigation.exercise"),
      icon: LicenseDraft,
      link: "/lms/exercises",
      show() {
        return $currentOrg?.customization?.dashboard?.exercise;
      }
    },
    {
      name: $t("lms_navigation.community"),
      icon: CommunityIcon,
      link: "/lms/community",
      show() {
        return $currentOrg?.customization?.dashboard?.community;
      }
    },
    {
      name: $t("lms_navigation.explore"),
      icon: Explore,
      link: "/lms/explore"
    }
  ].filter((link) => link.show ? link.show() : true);
  $$unsubscribe_sideBar();
  $$unsubscribe_t();
  $$unsubscribe_currentOrg();
  $$unsubscribe_profileMenu();
  $$unsubscribe_profile();
  $$unsubscribe_page();
  return `<div class="static md:relative"${add_attribute("this", $profileMenu.ref, 0)}><aside${add_attribute(
    "class",
    `${$sideBar.hidden ? "-translate-x-[100%] absolute md:translate-x-0 md:relative z-40 top-[48px] md:top-0" : "translate-x-0 absolute md:relative z-40 top-[48px] md:top-0"}  overflow-y-auto transition w-[250px] min-w-[250px] bg-gray-100 dark:bg-neutral-900 h-[calc(100vh-48px)]`,
    0
  )}><div class="h-full flex flex-col"><div class="border-b border-gray-200 dark:border-neutral-600 pt-5 px-4"><div class="w-full flex flex-col items-center">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: $profile.avatar_url || "images/user.png",
      name: $profile.fullname,
      shape: "rounded-full",
      width: "w-30",
      height: "h-20"
    },
    {},
    {}
  )} <div class="mt-5 flex justify-center w-full"><p class="dark:text-white text-lg font-bold whitespace-nowrap truncate max-w-[80%] text-center">${escape($profile.fullname)}</p></div></div> <ul class="my-5">${each(sideLinks, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="text-black"><li class="${"flex items-center py-3 px-4 mb-2 " + escape(NavClasses.item, true) + " " + escape(
      isActive($page.url.pathname, `${item.link}`) ? NavClasses.active : "dark:text-white",
      true
    )}">${validate_component(item.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        size: 24,
        class: "carbon-icon dark:fill-[#fff]"
      },
      {},
      {}
    )} <p class="dark:text-white ml-2">${escape(item.name)}</p></li> </a>`;
  })}</ul></div> <span class="flex-grow"></span> <ul class="my-5 pb-5 px-4"><a href="/lms" class="text-black"><li class="flex items-center py-3 px-4 mb-2 rounded">${validate_component(Help, "HelpIcon").$$render(
    $$result,
    {
      size: 20,
      class: "carbon-icon dark:text-white"
    },
    {},
    {}
  )} <p class="dark:text-white ml-2">${escape($t("lms_navigation.help"))}</p></li></a> <button class="w-full"><div class="${"text-black no-underline cursor-pointer flex items-center justify-between mb-2 px-2.5 py-1.5 w-full " + escape(NavClasses.item, true)}"><div class="flex text-start items-center justify-start space-x-1">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: $profile.avatar_url || "images/user.png",
      name: $profile.username,
      width: "w-[2.2rem]",
      height: "h-[1.2rem]"
    },
    {},
    {}
  )} <p class="text-sm dark:text-white font-medium truncate max-w-full">${escape($profile.fullname)}</p></div> <div>${validate_component(ChevronRight, "ChevronRight").$$render($$result, {}, {}, {})}</div></div></button></ul></div></aside> ${validate_component(ProfileMenu, "ProfileMenu").$$render($$result, {}, {}, {})}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="org-root w-full flex items-center justify-between">${validate_component(SideBar, "LMSSideBar").$$render($$result, {}, {}, {})} <div class="org-slot bg-white dark:bg-black w-full">${slots.default ? slots.default({}) : ``}</div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-01c52924.js.map
