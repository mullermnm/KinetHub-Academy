import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { g as goto } from './navigation-cd282f65.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e1c68f04-ff8f-42bf-9321-2ca150c22290", e._sentryDebugIdIdentifier = "sentry-dbid-e1c68f04-ff8f-42bf-9321-2ca150c22290");
  } catch (e2) {
  }
}();
const css = {
  code: ".root.svelte-muzyqa{height:calc(100vh - 45px)}",
  map: null
};
const NotFound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOrg = false } = $$props;
  function handleClick() {
    if (!isOrg) {
      return goto("/");
    }
    return goto("https://academy.KinetsHub.com");
  }
  if ($$props.isOrg === void 0 && $$bindings.isOrg && isOrg !== void 0)
    $$bindings.isOrg(isOrg);
  $$result.css.add(css);
  return `<div class="root flex items-center justify-center flex-col w-screen svelte-muzyqa"><img src="https://brand.cdn.clsrio.com/404.png" alt="classroomio_error_image"> <div class="flex flex-col items-center justify-center dark:text-white gap-3 w-4/5 lg:w-2/5"><p class="text-4xl dark:text-white font-semibold mb-5">${isOrg ? `Organization doesn&#39;t exist!` : `Page not found`}</p> <p class="text-gray-700 text-lg text-center dark:text-white mb-5" data-svelte-h="svelte-bkdgnx">The page you are looking for doesn&#39;t exist or has been moved. Please go back to the homepage.</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      variant: VARIANTS.CONTAINED_DARK,
      label: "Go to Home",
      className: "text-lg",
      onClick: handleClick
    },
    {},
    {}
  )}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query;
  let isOrg;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  query = new URLSearchParams($page.url.search);
  isOrg = query.get("type") === "org";
  $$unsubscribe_page();
  return `${validate_component(NotFound, "NotFound").$$render($$result, { isOrg }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-66a69152.js.map
