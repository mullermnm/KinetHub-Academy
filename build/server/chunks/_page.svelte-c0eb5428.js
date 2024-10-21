import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { p as page } from './stores-793c1e19.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { g as getConfirmPasswordError, a as authValidation, b as getDisableSubmit } from './validator-27ec1d5c.js';
import { S as SIGNUP_FIELDS } from './authentication-b7fc4ef1.js';
import { A as AuthUI } from './index29-00da53b0.js';
import { p as profile } from './user-e923b6d4.js';
import { c as currentOrg } from './org-8fc26a61.js';
import { c as capturePosthogEvent } from './index23-8c8bac96.js';
import { g as globalStore } from './app-d638cf5d.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index9-eea8802c.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import 'lodash/isNumber.js';
import 'zod';
import './translations-90190f83.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './index10-b2b97ef7.js';
import 'lodash/cloneDeep.js';
import 'posthog-js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "26e55079-4b81-4752-8d22-c125df1a15ad", e._sentryDebugIdIdentifier = "sentry-dbid-26e55079-4b81-4752-8d22-c125df1a15ad");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $globalStore, $$unsubscribe_globalStore;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $page, $$unsubscribe_page;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let supabase = getSupabase();
  let fields = Object.assign({}, SIGNUP_FIELDS);
  let loading = false;
  let success = false;
  let errors = {};
  let submitError;
  let disableSubmit = false;
  let formRef;
  let query = new URLSearchParams($page.url.search);
  let redirect = query.get("redirect");
  async function handleSubmit() {
    const validationRes = authValidation(fields);
    console.log("validationRes", validationRes);
    if (Object.keys(validationRes).length) {
      errors = Object.assign(errors, validationRes);
      return;
    }
    try {
      loading = true;
      const { data: { session }, error } = await supabase.auth.signUp({
        email: fields.email,
        password: fields.password
      });
      console.log("session", session);
      if (error)
        throw error;
      const { user: authUser } = session || {};
      if (!authUser) {
        throw "Error creating user";
      }
      if (!$currentOrg.id)
        return;
      const [regexUsernameMatch] = [...authUser.email?.matchAll(/(.*)@/g) || []];
      const response = await fetch("https://api.ipregistry.co/?key=tryout");
      const metadata = await response.json();
      const profileRes = await supabase.from("profile").insert({
        id: authUser.id,
        username: regexUsernameMatch[1] + `${( new Date()).getTime()}`,
        fullname: regexUsernameMatch[1],
        email: authUser.email,
        metadata
      }).select();
      console.log("profileRes", profileRes);
      if (profileRes.error) {
        throw profileRes.error;
      }
      console.log("setting profile", profileRes.data[0]);
      profile.set(profileRes.data[0]);
      capturePosthogEvent("user_signed_up", {
        distinct_id: $profile.id || "",
        email: authUser.email,
        username: regexUsernameMatch[1],
        metadata
      });
      if ($globalStore.isOrgSite) {
        capturePosthogEvent("student_signed_up", {
          distinct_id: $profile.id || "",
          email: authUser.email,
          username: regexUsernameMatch[1],
          metadata
        });
      }
      if (redirect) {
        goto(redirect);
      } else {
        goto("/login");
      }
      formRef?.reset();
      success = true;
      fields = Object.assign({}, SIGNUP_FIELDS);
    } catch (error) {
      submitError = error?.error_description || error?.message;
      loading = false;
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    errors.confirmPassword = getConfirmPasswordError(fields);
    disableSubmit = getDisableSubmit(fields);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-lxd68k_START -->${$$result.title = `<title>Join KinetsHub</title>`, ""}<!-- HEAD_svelte-lxd68k_END -->`, ""}  ${validate_component(AuthUI, "AuthUI").$$render(
      $$result,
      {
        supabase,
        isLogin: false,
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
          return `<div class="mt-4 w-full"><p class="dark:text-white text-lg font-semibold mb-6" data-svelte-h="svelte-10rpjg0">Create a free account</p>  ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Your Email",
              type: "email",
              placeholder: "you@domain.com",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: loading,
              errorMessage: errors.email,
              isRequired: true,
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
              label: "Your Password",
              type: "password",
              placeholder: "************",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: loading,
              errorMessage: errors.password,
              helperMessage: "Password must be more than 6 characters",
              isRequired: true,
              value: fields.password
            },
            {
              value: ($$value) => {
                fields.password = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Confirm Password",
              type: "password",
              placeholder: "************",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: loading,
              errorMessage: errors.confirmPassword,
              isRequired: true,
              value: fields.confirmPassword
            },
            {
              value: ($$value) => {
                fields.confirmPassword = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${submitError ? `<p class="text-sm text-red-500">${escape(submitError)}</p>` : ``}</div> <div class="my-4 w-full flex justify-end items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: "Create Account",
              type: "submit",
              className: "sm:w-full w-full",
              isDisabled: disableSubmit || loading,
              isLoading: loading
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_globalStore();
  $$unsubscribe_currentOrg();
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c0eb5428.js.map
