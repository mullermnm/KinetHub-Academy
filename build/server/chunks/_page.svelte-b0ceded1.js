import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { g as getConfirmPasswordError, r as resetValidation, b as getDisableSubmit } from './validator-27ec1d5c.js';
import { R as RESET_FIELDS } from './authentication-b7fc4ef1.js';
import { A as AuthUI } from './index29-00da53b0.js';
import './utils-26d532f8.js';
import './index9-eea8802c.js';
import './_sentry-release-injection-file-6be6a010.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import 'lodash/isNumber.js';
import 'zod';
import './translations-90190f83.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './stores-793c1e19.js';
import './index10-b2b97ef7.js';
import './org-8fc26a61.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "06d87468-9fc9-4b2a-9d1c-adf9bb673195", e._sentryDebugIdIdentifier = "sentry-dbid-06d87468-9fc9-4b2a-9d1c-adf9bb673195");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase = getSupabase();
  let fields = Object.assign({}, RESET_FIELDS);
  let loading = false;
  let errors = {};
  let submitError;
  let disableSubmit = false;
  let formRef;
  async function handleSubmit(e) {
    errors = resetValidation(fields);
    console.log("errors", errors);
    if (Object.keys(errors).length) {
      return;
    }
    try {
      loading = true;
      const { data, error } = await supabase.auth.updateUser({ password: fields.password });
      console.log("data", data);
      if (error)
        throw error;
      formRef?.reset();
      return goto("/login");
    } catch (error) {
      submitError = error.error_description || error.message;
    } finally {
      loading = false;
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    errors.confirmPassword = getConfirmPasswordError(fields);
    disableSubmit = getDisableSubmit(fields);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-lxd68k_START -->${$$result.title = `<title>Join KinetsHub</title>`, ""}<!-- HEAD_svelte-lxd68k_END -->`, ""} ${validate_component(AuthUI, "AuthUI").$$render(
      $$result,
      {
        supabase,
        isLogin: false,
        handleSubmit,
        showOnlyContent: true,
        isLoading: loading,
        showLogo: true,
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
          return `<div class="mt-4 w-full"><h3 class="dark:text-white text-xl font-semibold my-3" data-svelte-h="svelte-1x4uuxo">New Password</h3> <p class="dark:text-white text-sm mb-6" data-svelte-h="svelte-886lse">Enter your new password details</p> ${validate_component(TextField, "TextField").$$render(
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
              label: "Reset Password",
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
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b0ceded1.js.map
