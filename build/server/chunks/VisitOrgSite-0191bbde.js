import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { A as ArrowTopRight } from './ArrowTopRight-dc8d0443.js';
import { e as currentOrgDomain } from './org-8fc26a61.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { t as t2 } from './translations-90190f83.js';
import { u as user } from './user-e923b6d4.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "27858347-1cf6-4d24-93ef-2fa2a047cb42", e._sentryDebugIdIdentifier = "sentry-dbid-27858347-1cf6-4d24-93ef-2fa2a047cb42");
  } catch (e2) {
  }
}();
const VisitOrgSite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let href;
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  let $user, $$unsubscribe_user;
  let $isMobile, $$unsubscribe_isMobile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { className = "" } = $$props;
  let { isLMS = false } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.isLMS === void 0 && $$bindings.isLMS && isLMS !== void 0)
    $$bindings.isLMS(isLMS);
  href = isLMS && $user.isLoggedIn ? `${$currentOrgDomain}/home` : $currentOrgDomain;
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_user();
  $$unsubscribe_isMobile();
  $$unsubscribe_t();
  return `<a${add_attribute("href", href, 0)} target="_blank" class="${escape(className, true) + " ml-2 hover:no-underline"}">${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { variant: VARIANTS.CONTAINED_DARK }, {}, {
    default: () => {
      return `${!$isMobile ? `${isLMS ? `${escape($t("dashboard.visit_site"))}` : `${escape($t("settings.subheadings.view_site"))}`}` : ``} ${validate_component(ArrowTopRight, "ArrowUpRightIcon").$$render($$result, {}, {}, {})}`;
    }
  })}</a>`;
});

export { VisitOrgSite as V };
//# sourceMappingURL=VisitOrgSite-0191bbde.js.map
