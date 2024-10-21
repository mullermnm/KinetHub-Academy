import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { T as TextField } from './TextField-86164973.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { f as forgotValidation } from './validator-27ec1d5c.js';
import { a as ROUTE } from './routes-a5d469f3.js';
import { F as FORGOT_PASSWORD_FIELDS } from './authentication-b7fc4ef1.js';
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
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "283c3ace-6810-46e1-bfb6-2f3184425b57", e._sentryDebugIdIdentifier = "sentry-dbid-283c3ace-6810-46e1-bfb6-2f3184425b57");
  } catch (e2) {
  }
}();
const EmailSentIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M85.3281 31H34.6719C33.4724 31 32.5 31.9724 32.5 33.1719V70.8281C32.5 72.0276 33.4724 73 34.6719 73H85.3281C86.5276 73 87.5 72.0276 87.5 70.8281V33.1719C87.5 31.9724 86.5276 31 85.3281 31ZM34.6719 27C31.2632 27 28.5 29.7632 28.5 33.1719V70.8281C28.5 74.2368 31.2632 77 34.6719 77H85.3281C88.7368 77 91.5 74.2368 91.5 70.8281V33.1719C91.5 29.7632 88.7368 27 85.3281 27H34.6719Z" fill="#0233BD"></path><rect x="40.9844" y="37.875" width="36.4141" height="3.08594" rx="1.54297" fill="#658DFE"></rect><rect x="40.9844" y="44.0469" width="36.4141" height="3.08594" rx="1.54297" fill="#658DFE"></rect><rect x="40.9844" y="50.2188" width="36.4141" height="3.08594" rx="1.54297" fill="#658DFE"></rect><path d="M23 94.0391V62.5938H97V94.0391C97 96.067 95.356 97.7109 93.3281 97.7109H26.6719C24.644 97.7109 23 96.067 23 94.0391Z" fill="#658DFE" stroke="#0233BD" stroke-width="5"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let supabase = getSupabase();
  let fields = Object.assign({}, FORGOT_PASSWORD_FIELDS);
  let submitError;
  let loading = false;
  let success = false;
  let errors = {};
  async function handleSubmit() {
    errors = forgotValidation(fields);
    console.log("errors", errors);
    if (Object.keys(errors).length) {
      return;
    }
    try {
      loading = true;
      const { data, error } = await supabase.auth.resetPasswordForEmail(fields.email, {
        redirectTo: `${window.location.origin}/reset`
      });
      console.log("data", data);
      if (error)
        throw error;
      success = true;
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1pp4lsd_START -->${$$result.title = `<title>Reset Password - KinetsHub</title>`, ""}<!-- HEAD_svelte-1pp4lsd_END -->`, ""} ${validate_component(AuthUI, "AuthUI").$$render(
      $$result,
      {
        supabase,
        handleSubmit,
        showOnlyContent: true,
        showLogo: !success
      },
      {},
      {
        default: () => {
          return `${success ? `<div class="mt-4 w-full flex items-center justify-center flex-col">${validate_component(EmailSentIcon, "EmailSentIcon").$$render($$result, {}, {}, {})} <h3 class="dark:text-white text-xl font-semibold my-3" data-svelte-h="svelte-1ae3m7y">Email Sent!</h3> <p class="dark:text-white text-md mb-6 text-center">We have sent a confirmation email to <span class="text-primary-700">${escape(fields.email)}</span>.
        Kindly check your inbox to reset password or spam to reset your password.</p></div> <div class="my-4 w-full flex justify-end items-center flex-col">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: "Okay",
              type: "button",
              className: "sm:w-full w-full mb-4",
              onClick: () => goto(ROUTE.LOGIN)
            },
            {},
            {}
          )}</div>` : `<div class="mt-4 w-full"><h3 class="dark:text-white text-xl font-semibold my-3" data-svelte-h="svelte-1itzpaf">Forgot Password</h3> <p class="dark:text-white text-sm mb-6" data-svelte-h="svelte-1skc1ql">We will send you a reset link to your email</p> ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Your email",
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
          )} ${submitError ? `<p class="text-sm text-red-500">${escape(submitError)}</p>` : ``}</div> <div class="my-4 w-full flex justify-end items-center flex-col">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: "Reset Password",
              type: "submit",
              className: "sm:w-full w-full mb-4",
              isDisabled: loading,
              isLoading: loading
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: "Cancel",
              type: "button",
              className: "sm:w-full w-full text-primary-700",
              variant: VARIANTS.NONE,
              onClick: () => goto(ROUTE.LOGIN)
            },
            {},
            {}
          )}</div>`}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b57dccf2.js.map
