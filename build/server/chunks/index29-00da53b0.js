import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import './_sentry-release-injection-file-6be6a010.js';
import { A as Avatar } from './index10-b2b97ef7.js';
import { c as currentOrg } from './org-8fc26a61.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "061a0263-04fe-4b89-9ce7-734db30ee0ee", e._sentryDebugIdIdentifier = "sentry-dbid-061a0263-04fe-4b89-9ce7-734db30ee0ee");
  } catch (e2) {
  }
}();
const css = {
  code: ".container.svelte-cbzzgc{width:450px}",
  map: null
};
const AuthUI = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { supabase } = $$props;
  let { handleSubmit = () => {
  } } = $$props;
  let { isLogin = true } = $$props;
  let { showOnlyContent = false } = $$props;
  let { isLoading = false } = $$props;
  let { showLogo = false } = $$props;
  let { formRef } = $$props;
  let { hideGoogleAuth = false } = $$props;
  if ($$props.supabase === void 0 && $$bindings.supabase && supabase !== void 0)
    $$bindings.supabase(supabase);
  if ($$props.handleSubmit === void 0 && $$bindings.handleSubmit && handleSubmit !== void 0)
    $$bindings.handleSubmit(handleSubmit);
  if ($$props.isLogin === void 0 && $$bindings.isLogin && isLogin !== void 0)
    $$bindings.isLogin(isLogin);
  if ($$props.showOnlyContent === void 0 && $$bindings.showOnlyContent && showOnlyContent !== void 0)
    $$bindings.showOnlyContent(showOnlyContent);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.showLogo === void 0 && $$bindings.showLogo && showLogo !== void 0)
    $$bindings.showLogo(showLogo);
  if ($$props.formRef === void 0 && $$bindings.formRef && formRef !== void 0)
    $$bindings.formRef(formRef);
  if ($$props.hideGoogleAuth === void 0 && $$bindings.hideGoogleAuth && hideGoogleAuth !== void 0)
    $$bindings.hideGoogleAuth(hideGoogleAuth);
  $$result.css.add(css);
  $$unsubscribe_currentOrg();
  $$unsubscribe_page();
  return `<div class="app-background w-full min-h-screen flex items-center justify-center"><div class="container border border-gray bg-white dark:bg-black svelte-cbzzgc"><div class="flex items-center flex-col p-2 lg:px-8 lg:py-3">${!showOnlyContent || showLogo ? `<div class="flex flex-col items-center justify-center w-full pt-2">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: $currentOrg.avatar_url ? $currentOrg.avatar_url : "/logo-192.png",
      name: $currentOrg.name ? $currentOrg.name : "KinetsHub",
      shape: "rounded-md",
      width: "w-20",
      height: "max-h-10",
      className: "mr-2"
    },
    {},
    {}
  )} <a href="/"><h4 class="dark:text-white text-xl mt-0">${escape($currentOrg.name ? $currentOrg.name : "KinetsHub")}</h4></a></div>` : ``} <form class="flex items-center flex-col w-10/12"${add_attribute("this", formRef, 0)}>${slots.default ? slots.default({}) : ``}</form> </div> ${!showOnlyContent ? `<div class="w-full p-6 border-t border-grey text-center">${isLogin ? `Not registered yet? <a class="hover:underline text-primary-700" href="${"/signup" + escape($page.url.search, true)}">Sign up</a>` : `Already have an account? <a class="hover:underline text-primary-700" href="${"/login" + escape($page.url.search, true)}">Log In</a>`}</div>` : ``}</div> </div>`;
});

export { AuthUI as A };
//# sourceMappingURL=index29-00da53b0.js.map
