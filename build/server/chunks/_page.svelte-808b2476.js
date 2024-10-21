import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { g as getConfirmPasswordError, a as authValidation, b as getDisableSubmit } from './validator-27ec1d5c.js';
import { S as SIGNUP_FIELDS } from './authentication-b7fc4ef1.js';
import { A as AuthUI } from './index29-00da53b0.js';
import { f as currentOrgPath, c as currentOrg } from './org-8fc26a61.js';
import './_sentry-release-injection-file-6be6a010.js';
import 'posthog-js';
import './user-e923b6d4.js';
import './index9-eea8802c.js';
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
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3beb2226-ad65-4c49-8c06-0b25547be3bb", e._sentryDebugIdIdentifier = "sentry-dbid-3beb2226-ad65-4c49-8c06-0b25547be3bb");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $currentOrg, $$unsubscribe_currentOrg;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  let { data } = $$props;
  let supabase = getSupabase();
  let fields = Object.assign({}, SIGNUP_FIELDS);
  let loading = false;
  let errors = {};
  let submitError;
  let disableSubmit = false;
  let formRef;
  async function handleSubmit() {
    const validationRes = authValidation({ ...fields, email: "test@gmail.com" });
    console.log("validationRes", validationRes);
    if (Object.keys(validationRes).length) {
      errors = Object.assign(errors, validationRes);
      return;
    }
    try {
      loading = true;
      let profile = data.invite.profile;
      if (!data.invite.profile) {
        const { data: signupData, error } = await supabase.auth.signUp({
          email: data.invite.email,
          password: fields.password
        });
        console.log("Signup", signupData);
        if (error)
          throw error;
        if (!signupData.user) {
          throw "User cannot be created ";
        }
        const userId = signupData.user.id;
        const profileRes = await supabase.from("profile").insert({
          id: userId,
          username: fields.name.toLowerCase().replace(" ", "-") + /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(),
          fullname: fields.name,
          email: data.invite.email
        }).select();
        console.log("Insert profile", profileRes.data);
        if (profileRes.error) {
          throw profileRes.error;
        }
        profile = profileRes.data[0] || {};
      }
      if (!profile?.id) {
        throw "Unable to create profile";
      }
      const res = await supabase.auth.signInWithPassword({
        email: profile.email,
        password: fields.password
      });
      if (res.error) {
        throw res.error;
      }
      const updateMemberRes = await supabase.from("organizationmember").update({ verified: true, profile_id: profile.id }).match({
        email: profile.email,
        organization_id: data.invite.currentOrg?.id
      });
      console.log("Update member response", updateMemberRes);
      formRef?.reset();
      return goto($currentOrgPath);
    } catch (error) {
      if (error instanceof Error) {
        submitError = error.message;
      } else {
        submitError = error?.toString() || "";
      }
    } finally {
      loading = false;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    errors.confirmPassword = getConfirmPasswordError(fields);
    disableSubmit = getDisableSubmit(fields);
    {
      console.log("data", data.invite);
    }
    {
      console.log("org", $currentOrg);
    }
    {
      console.log("path", $currentOrgPath);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-lxd68k_START -->${$$result.title = `<title>Join KinetsHub</title>`, ""}<!-- HEAD_svelte-lxd68k_END -->`, ""} ${validate_component(AuthUI, "AuthUI").$$render(
      $$result,
      {
        supabase,
        isLogin: false,
        handleSubmit,
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
          return `<div class="mt-4 w-full"><p class="dark:text-white text-lg font-semibold mb-6">${data.invite.profile ? `Log in to join` : `Create a free account to join`}</p> ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Your Email",
              value: data.invite.email,
              type: "email",
              placeholder: "you@domain.com",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: true
            },
            {},
            {}
          )} ${!data.invite.profile ? `${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Full Name",
              type: "text",
              autoFocus: true,
              placeholder: "e.g Joke Silva",
              className: "mb-6",
              inputClassName: "w-full",
              isDisabled: loading,
              errorMessage: errors.name,
              isRequired: true,
              value: fields.name
            },
            {
              value: ($$value) => {
                fields.name = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${validate_component(TextField, "TextField").$$render(
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
          )} ${!data.invite.profile ? `${validate_component(TextField, "TextField").$$render(
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
          )}` : ``} ${submitError ? `<p class="text-sm text-red-500">${escape(submitError)}</p>` : ``}</div> <div class="my-4 w-full flex justify-end items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: "Accept Invite",
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
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_currentOrg();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-808b2476.js.map
