import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from './ssr-10c5b872.js';
import { p as public_env } from './shared-server-e0f2abd3.js';
import { g as goto } from './navigation-cd282f65.js';
import { T as TextField } from './TextField-86164973.js';
import { V as VARIANTS, P as PrimaryButton } from './index11-4ef8d5a0.js';
import { p as profile } from './user-e923b6d4.js';
import { o as onboardingValidation } from './validator-27ec1d5c.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import { e as getOrganizations } from './index6-4a1599e3.js';
import { g as generateSitename } from './org2-00101c59.js';
import { t as t2, h as handleLocaleChange } from './translations-90190f83.js';
import { L as LOCALE } from './index15-c5761f1e.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import './index9-eea8802c.js';
import './index2-aea858a5.js';
import 'lodash/isNumber.js';
import 'zod';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './org-8fc26a61.js';
import 'lodash/cloneDeep.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './ChevronDown-d5b93e8c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "84e5c282-c52b-43a5-8422-0915a4116bc7", e._sentryDebugIdIdentifier = "sentry-dbid-84e5c282-c52b-43a5-8422-0915a4116bc7");
  } catch (e2) {
  }
}();
const UserProfileIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_174_5581)"><path d="M16 8C15.0111 8 14.0444 8.29325 13.2222 8.84265C12.3999 9.39206 11.759 10.173 11.3806 11.0866C11.0022 12.0002 10.9031 13.0055 11.0961 13.9755C11.289 14.9454 11.7652 15.8363 12.4645 16.5355C13.1637 17.2348 14.0546 17.711 15.0246 17.9039C15.9945 18.0969 16.9998 17.9978 17.9134 17.6194C18.8271 17.241 19.6079 16.6001 20.1574 15.7779C20.7068 14.9556 21 13.9889 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8Z" fill="#ADADAD"></path><path d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C29.9958 12.2883 28.5195 8.72973 25.8949 6.10512C23.2703 3.48052 19.7118 2.00418 16 2ZM23.9925 24.9258C23.9726 23.614 23.4382 22.3626 22.5043 21.4412C21.5704 20.5198 20.3119 20.0022 19 20H13C11.6881 20.0022 10.4296 20.5198 9.49573 21.4412C8.56186 22.3626 8.02739 23.614 8.00751 24.9258C6.19407 23.3065 4.91524 21.1747 4.34034 18.8125C3.76545 16.4503 3.92161 13.9691 4.78814 11.6977C5.65468 9.42618 7.19073 7.47147 9.19288 6.09237C11.195 4.71327 13.5688 3.97483 16 3.97483C18.4312 3.97483 20.805 4.71327 22.8071 6.09237C24.8093 7.47147 26.3453 9.42618 27.2119 11.6977C28.0784 13.9691 28.2346 16.4503 27.6597 18.8125C27.0848 21.1747 25.8059 23.3065 23.9925 24.9258Z" fill="#ADADAD"></path></g><defs><clipPath id="clip0_174_5581"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>`;
});
const css = {
  code: ".form-container.svelte-etgh37{max-height:66%}",
  map: null
};
const maxSteps = 2;
let isSiteNameTouched = false;
let selectedId = "en";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let fields = {
    fullname: "",
    orgName: "",
    goal: "Learning",
    siteName: "",
    locale: LOCALE.EN
  };
  let errors = {};
  let progress = 50;
  let step = 1;
  let loading = false;
  let dropdownItems = [
    { id: "en", text: "English" },
    { id: "hi", text: "Hindi" },
    { id: "fr", text: "French" },
    { id: "pt", text: "Portuguese" },
    { id: "de", text: "German" },
    { id: "vi", text: "Vietnamese" },
    { id: "ru", text: "Russian" },
    { id: "es", text: "Spanish" }
  ];
  [
    {
      label: $t("onboarding.sell"),
      value: "sell-online"
    },
    {
      label: $t("onboarding.teach"),
      value: "teach-online"
    },
    {
      label: $t("onboarding.employees"),
      value: "employees"
    },
    {
      label: $t("onboarding.customers"),
      value: "customers"
    },
    {
      label: $t("onboarding.expanding"),
      value: "expanding-platform"
    }
  ];
  const sources = [
    {
      label: $t("onboarding.articles"),
      value: "articles"
    },
    {
      label: $t("onboarding.search"),
      value: "search-engine"
    },
    {
      label: $t("onboarding.social"),
      value: "social-media"
    },
    {
      label: $t("onboarding.friends"),
      value: "friends-family"
    }
  ];
  async function setMetaData() {
    if (!public_env.PUBLIC_IP_REGISTRY_KEY)
      return;
    const response = await fetch(`https://api.ipregistry.co/?key=${public_env.PUBLIC_IP_REGISTRY_KEY}`);
    const payload = await response.json();
    fields.metadata = payload;
  }
  function setOrgSiteName(orgName, isTouched) {
    if (!orgName || isTouched)
      return;
    fields.siteName = orgName?.toLowerCase()?.replace(/\s+/g, "-")?.replace(/[^a-zA-Z0-9-]/g, "");
  }
  const handleSubmit = async () => {
    loading = true;
    console.log(fields);
    errors = onboardingValidation(fields, step);
    console.log("errors", errors);
    if (Object.keys(errors).length || !$profile.id) {
      loading = false;
      return;
    }
    if (step === 1) {
      const { data: org, error } = await supabase.from("organization").select().eq("name", "KinetsHub").single();
      await supabase.from("organizationmember").insert({
        organization_id: org.id,
        profile_id: $profile.id,
        role_id: 3,
        verified: true
      }).select();
      if (error) {
        loading = false;
        return;
      }
      await getOrganizations($profile.id);
    }
    if (step === maxSteps) {
      await setMetaData();
      await supabase.from("profile").update({
        ...fields,
        orgName: void 0,
        siteName: void 0
      }).match({ id: $profile.id });
      loading = false;
      if (fields.fullname) {
        set_store_value(profile, $profile.fullname = fields.fullname, $profile);
      }
      if (fields.locale) {
        set_store_value(profile, $profile.locale = fields.locale, $profile);
        if (fields.locale !== LOCALE.EN) {
          handleLocaleChange(fields.locale);
        }
      }
      return goto(`/lms`);
    }
    step = step + 1;
    loading = false;
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    progress = Math.round(step / maxSteps * 100);
    fields.siteName = generateSitename(fields.siteName || "");
    {
      setOrgSiteName(fields.orgName, isSiteNameTouched);
    }
    $$rendered = `${$profile.id ? `<div class="w-full min-h-screen flex justify-center"><div class="flex justify-center items-center flex-col w-9/12 max-w-md"> <div class="flex flex-col items-center"><div class="flex items-center w-full justify-center mb-4" data-svelte-h="svelte-12fb6p5"><img src="/logo-192.png" alt="KinetsHub logo" height="50" width="50" data-atf="1"> <h4 class="dark:text-white text-xl">KinetsHub</h4></div>  <div class="w-64 flex items-center justify-center mb-6 py-6 bg-gray-100 dark:bg-neutral-800 rounded-2xl border border-gray-300">${validate_component(UserProfileIcon, "UserProfileIcon").$$render($$result, {}, {}, {})} <p class="dark:text-white text-sm ml-2">${escape($profile.email)}</p></div></div> <div class="form-container overflow-y-auto w-full px-2 svelte-etgh37">${step === 1 ? ` <div id="role-question" class="flex items-start flex-col mb-6"> ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: $t("onboarding.fullname"),
        name: "fullname",
        type: "text",
        placeholder: "e.g Joke Silva",
        className: "mb-5 w-full",
        labelClassName: "text-lg font-normal",
        errorMessage: errors.fullname,
        isRequired: true,
        value: fields.fullname
      },
      {
        value: ($$value) => {
          fields.fullname = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: $t("onboarding.phone"),
        name: "Phone",
        type: "text",
        placeholder: "e.g 25198765",
        className: "mb-5 w-full",
        labelClassName: "text-lg font-normal",
        errorMessage: errors.phone,
        isRequired: true,
        value: fields.phone
      },
      {
        value: ($$value) => {
          fields.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>` : ` <div id="goal-question" class="flex items-center flex-col mb-6"><div class="w-10/12">   <div class="w-full flex items-start flex-col justify-between"><label for="text-field" class="dark:text-white m-0 text-lg font-normal mb-3">${escape($t("onboarding.how"))}</label>  ${each(sources, (source) => {
      return `<label class="dark:text-white w-full inline-flex items-center mb-1 font-light"><input type="radio" name="source"${add_attribute("value", source.value, 0)} class="mr-2"${source.value === fields.source ? add_attribute("checked", true, 1) : ""}> ${escape(source.label)} </label>`;
    })}  ${errors.source ? `<p class="text-sm text-red-500">${escape(errors.source)}</p>` : ``}</div>  <div class="mt-10"><span>${escape($t("content.toggle_label"))}:</span> ${validate_component(Dropdown$1, "Dropdown").$$render(
      $$result,
      {
        items: dropdownItems,
        selectedId,
        class: "w-full"
      },
      {},
      {}
    )}</div></div></div>`}</div>  <div class="flex justify-between items-center mt-8 w-full"><div class="w-24 h-2 bg-gray-300 relative"><span class="progress absolute top-0 left-0 bg-primary-700 h-full" style="${"width: " + escape(progress, true) + "%;"}"></span></div> <div class="flex">${step > 1 ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("onboarding.back"),
        variant: VARIANTS.NONE,
        className: "py-3 px-6 mr-2 text-primary-700",
        onClick: () => step = step - 1
      },
      {},
      {}
    )}` : ``} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("onboarding.continue"),
        variant: VARIANTS.CONTAINED,
        type: "button",
        className: "px-5 py-3",
        isLoading: loading,
        onClick: handleSubmit
      },
      {},
      {}
    )}</div></div></div></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1198105d.js.map
