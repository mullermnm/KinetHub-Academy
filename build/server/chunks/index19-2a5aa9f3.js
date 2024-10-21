import { d as compute_rest_props, s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, d as spread, h as escape_attribute_value, f as escape_object, e as escape, a as add_attribute, v as validate_component } from './ssr-10c5b872.js';
import { g as globalStore } from './app-d638cf5d.js';
import { p as profile } from './user-e923b6d4.js';
import { f as currentOrgPath, c as currentOrg, e as currentOrgDomain } from './org-8fc26a61.js';
import { R as Rocket } from './Rocket-f94fd084.js';
import { S as Settings } from './Settings-0a14f57d.js';
import { p as profileMenu } from './store-37f0dea3.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import 'posthog-js';
import { t as t2 } from './translations-90190f83.js';
import { M as Modal } from './index8-59a07edf.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { P as Popover$1 } from './Popover-a92462a3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "db165c01-14b2-4846-9dda-14f07f1f9377", e._sentryDebugIdIdentifier = "sentry-dbid-db165c01-14b2-4846-9dda-14f07f1f9377");
  } catch (e2) {
  }
}();
const Help = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><circle cx="16" cy="23.5" r="1.5"></circle><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"></path></svg>`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"></path><path d="M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"></path></svg>`;
});
const NewTab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"></path><path d="M26,26H6V6H16V4H6A2.002,2.002,0,0,0,4,6V26a2.002,2.002,0,0,0,2,2H26a2.002,2.002,0,0,0,2-2V16H26Z"></path><path d="M26 6L26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6 26 6z"></path></svg>`;
});
const HomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "currentColor" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="dark"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5H21C21.3977 1.50046 21.7789 1.65864 22.0602 1.93984C22.3414 2.22105 22.4995 2.60232 22.5 3V21C22.4995 21.3977 22.3413 21.7789 22.0601 22.0601C21.7789 22.3413 21.3977 22.4995 21 22.5H3C2.60232 22.4995 2.22105 22.3414 1.93984 22.0602C1.65864 21.7789 1.50046 21.3977 1.5 21V3C1.5004 2.6023 1.65856 2.221 1.93978 1.93978C2.221 1.65856 2.6023 1.5004 3 1.5ZM10.5 8.25H21V3H10.5V8.25ZM9 8.25V3H3V8.25H9ZM3 9.75V21H21.0015L21.0005 9.75H3ZM8.25 19.5C7.2558 19.4988 6.30265 19.1034 5.59964 18.4004C4.89664 17.6973 4.50117 16.7442 4.5 15.75H6C6 16.195 6.13196 16.63 6.37919 17C6.62643 17.37 6.97783 17.6584 7.38896 17.8287C7.8001 17.999 8.2525 18.0436 8.68895 17.9568C9.12541 17.87 9.52632 17.6557 9.84099 17.341C10.1557 17.0263 10.37 16.6254 10.4568 16.189C10.5436 15.7525 10.499 15.3001 10.3287 14.889C10.1584 14.4778 9.87004 14.1264 9.50003 13.8792C9.13002 13.632 8.69501 13.5 8.25 13.5V12C9.24456 12 10.1984 12.3951 10.9017 13.0983C11.6049 13.8016 12 14.7554 12 15.75C12 16.7446 11.6049 17.6984 10.9017 18.4016C10.1984 19.1049 9.24456 19.5 8.25 19.5ZM15 12H16.5V19.5H15V12ZM18 15.75H19.5V19.5H18V15.75Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_profileMenu;
  let $t, $$unsubscribe_t;
  let $globalStore, $$unsubscribe_globalStore;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $profile, $$unsubscribe_profile;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  $$unsubscribe_profileMenu = subscribe(profileMenu, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_profileMenu();
  $$unsubscribe_t();
  $$unsubscribe_globalStore();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_profile();
  $$unsubscribe_currentOrg();
  $$unsubscribe_currentOrgDomain();
  return `<div class="md:px-4 md:py-4 py-2 px-2 rounded-md cursor-pointer"><div class="border-b py-3 space-y-4"><p class="text-xs font-semibold text-gray-500">${escape($t("profileMenu.profile"))}</p> <a${add_attribute("href", `${!$globalStore.isOrgSite ? $currentOrgPath : "/lms"}/settings`, 0)} class="flex items-center justify-between hover:no-underline"><span class="flex items-center gap-2 max-w-[70%]"><img${add_attribute("src", $profile.avatar_url || "images/user.png", 0)} alt="profile" class="h-8 w-10 rounded-full"> <div><p class="text-sm font-semibold w-[80%] truncate">${escape($profile.fullname)}</p> <p class="text-xs w-[80%] truncate">${escape($profile.email)}</p></div></span> <div>${validate_component(Settings, "Settings").$$render($$result, { size: 20 }, {}, {})}</div></a></div> ${!$globalStore.isOrgSite ? `<div class="border-b py-3 space-y-4"><p class="text-xs font-semibold text-gray-500">${escape($t("profileMenu.current_org"))}</p> <a${add_attribute("href", `${$currentOrgPath}/settings?tab=org`, 0)} class="flex items-center justify-between hover:no-underline"><span class="flex items-center gap-2 max-w-[70%]"><div class="flex items-center justify-center h-8 w-8 p-4 bg-blue-900 text-white font-semibold rounded-lg">${escape($currentOrg.shortName)}</div> <div><p class="text-sm font-semibold w-[80%] truncate">${escape($currentOrg.name)}</p> <p class="text-xs w-[80%] truncate">${escape($currentOrgDomain)}</p></div></span> <div>${validate_component(Settings, "Settings").$$render($$result, { size: 20 }, {}, {})}</div></a></div>` : ``}  ${!$globalStore.isOrgSite ? `<div class="border-b py-3 space-y-4"><a href="https://kinetshub.com/" target="_blank" class="hover:no-underline flex items-center gap-2">${validate_component(NewTab, "NewTab").$$render($$result, {}, {}, {})} <p class="text-sm font-semibold">${escape($t("profileMenu.whats_new"))}</p></a> <a href="https://kinetshub.com/" target="_blank" class="hover:no-underline flex items-center gap-2">${validate_component(Rocket, "Rocket").$$render($$result, {}, {}, {})} <p class="text-sm font-semibold">${escape($t("profileMenu.launch_week"))}</p></a></div>` : ``} <button class="w-full pt-3 space-y-4"><span class="flex items-center gap-2">${validate_component(Logout, "Logout").$$render($$result, {}, {}, {})} <p class="text-sm font-semibold">${escape($t("settings.profile.logout"))}</p></span></button></div>`;
});
const ProfileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  let $profileMenu, $$unsubscribe_profileMenu;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_profileMenu = subscribe(profileMenu, (value) => $profileMenu = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$isMobile ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => $profileMenu.open = false,
        width: "w-4/5",
        containerClass: "h-full !max-h-[70vh] pt-0 pb-2",
        headerClass: "py-1",
        open: $profileMenu.open
      },
      {
        open: ($$value) => {
          $profileMenu.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
        }
      }
    )}` : `${validate_component(Popover$1, "Popover").$$render(
      $$result,
      {
        align: "right-bottom",
        caret: true,
        open: $profileMenu.open
      },
      {
        open: ($$value) => {
          $profileMenu.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Menu, "Menu").$$render($$result, {}, {}, {})}`;
        }
      }
    )}`}`;
  } while (!$$settled);
  $$unsubscribe_isMobile();
  $$unsubscribe_profileMenu();
  return $$rendered;
});

export { HomeIcon as H, ProfileMenu as P, Help as a };
//# sourceMappingURL=index19-2a5aa9f3.js.map
