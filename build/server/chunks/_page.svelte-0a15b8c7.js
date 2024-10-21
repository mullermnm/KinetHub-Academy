import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { a as authValidation } from './validator-27ec1d5c.js';
import { L as LOGIN_FIELDS } from './authentication-b7fc4ef1.js';
import { A as AuthUI } from './index29-00da53b0.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { c as capturePosthogEvent } from './index23-8c8bac96.js';
import { t as t2 } from './translations-90190f83.js';
import { g as globalStore } from './app-d638cf5d.js';
import './index9-eea8802c.js';
import './_sentry-release-injection-file-6be6a010.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import 'lodash/isNumber.js';
import 'zod';
import './index10-b2b97ef7.js';
import './index2-aea858a5.js';
import 'lodash/cloneDeep.js';
import 'posthog-js';
import './index15-c5761f1e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0fde807e-4d87-4340-b0db-e277ef22cbca", e._sentryDebugIdIdentifier = "sentry-dbid-0fde807e-4d87-4340-b0db-e277ef22cbca");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $page, $$unsubscribe_page;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let formRef;
  let supabase = getSupabase();
  let fields = Object.assign({}, LOGIN_FIELDS);
  let submitError;
  let loading = false;
  let errors = Object.assign({}, LOGIN_FIELDS);
  let query = new URLSearchParams($page.url.search);
  query.get("redirect");
  async function handleSubmit() {
    const validationRes = authValidation(fields);
    console.log("validationRes", validationRes);
    if (Object.keys(validationRes).length) {
      errors = Object.assign(errors, validationRes);
      return;
    }
    try {
      loading = true;
      const { data, error } = await supabase.auth.signInWithPassword({
        email: fields.email,
        password: fields.password
      });
      console.log("data", data);
      if (error)
        throw error;
      capturePosthogEvent("login", { email: fields.email });
      if ($globalStore.isOrgSite) {
        capturePosthogEvent("student_login", { email: fields.email });
      }
    } catch (error) {
      submitError = error.error_description || error.message;
      loading = false;
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-7tw8i2_START -->${$$result.title = `<title>Welcome back to ${escape($currentOrg.name || "KinetsHub")}</title>`, ""}<!-- HEAD_svelte-7tw8i2_END -->`, ""} ${validate_component(AuthUI, "AuthUI").$$render(
      $$result,
      {
        supabase,
        isLogin: true,
        handleSubmit,
        isLoading: loading,
        formRef
      },
      {
        formRef: ($$value) => {
          formRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="mt-4 w-full"><p class="dark:text-white text-lg font-semibold mb-6">${escape($t("login.welcome"))}</p> ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t("login.email"),
              type: "email",
              autoFocus: true,
              placeholder: "you@domain.com",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: loading,
              errorMessage: errors.email,
              value: fields.email
            },
            {
              value: ($$value) => {
                fields.email = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: $t("login.password"),
              type: "password",
              placeholder: "************",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: loading,
              errorMessage: errors.password,
              value: fields.password
            },
            {
              value: ($$value) => {
                fields.password = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${submitError ? `<p class="text-sm text-red-500">${escape(submitError)}</p>` : ``} <div class="w-full text-right"><a class="text-md text-primary-700" href="/forgot">${escape($t("login.forgot"))}</a></div></div> <div class="my-4 w-full flex justify-end items-center"> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("login.login"),
              type: "submit",
              className: "sm:w-full w-full",
              isDisabled: loading,
              isLoading: loading
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_globalStore();
  $$unsubscribe_page();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0a15b8c7.js.map
