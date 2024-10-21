import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from './ssr-10c5b872.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { M as Modal } from './index8-59a07edf.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { T as TextField } from './TextField-86164973.js';
import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';
import { T as Toggle$1 } from './Toggle-e0c8f3da.js';
import { F as FlashFilled } from './FlashFilled-4a89bd75.js';
import { g as goto } from './navigation-cd282f65.js';
import { e as updateCourse } from './index18-b03e5e10.js';
import { B as Banner } from './Banner-bd19e4d5.js';
import { c as course } from './store4-ef39175f.js';
import { g as isFreePlan, c as currentOrg } from './org-8fc26a61.js';
import { g as globalStore } from './app-d638cf5d.js';
import { t as t2 } from './translations-90190f83.js';
import { b as snackbar } from './store2-dc811f17.js';
import { s as saveCertificateValidation } from './validator-27ec1d5c.js';
import { R as RadioButtonGroup$1 } from './RadioButtonGroup-e57fe635.js';
import { R as RadioButton$1 } from './RadioButton-4ac24df2.js';
import { D as Download } from './Download-43b21059.js';
import { p as public_env } from './shared-server-e0f2abd3.js';
import { p as profile } from './user-e923b6d4.js';
import { B as Box } from './index17-3166eaf0.js';
import './config-8c22ba68.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './stores-793c1e19.js';
import './Text-e3f4b18b.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './Add-78ef4d23.js';
import './function-efda068b.js';
import './index9-eea8802c.js';
import './reusableClass-512f4804.js';
import './Settings-0a14f57d.js';
import './index15-c5761f1e.js';
import './SkeletonText-d2851876.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './index12-9c021b5e.js';
import './Popover-a92462a3.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import 'lodash/cloneDeep.js';
import 'lodash/isNumber.js';
import 'zod';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "80888bd1-21d1-4c48-9b57-2f566a84f984", e._sentryDebugIdIdentifier = "sentry-dbid-80888bd1-21d1-4c48-9b57-2f566a84f984");
  } catch (e2) {
  }
}();
const issueCertificateModal = writable({
  open: false,
  automatic: false,
  email: "",
  date: "",
  message: ""
});
const resetForm = () => issueCertificateModal.update(() => ({
  open: false,
  automatic: false,
  email: "",
  date: "",
  message: ""
}));
const IssueCertificateModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $issueCertificateModal, $$unsubscribe_issueCertificateModal;
  $$unsubscribe_issueCertificateModal = subscribe(issueCertificateModal, (value) => $issueCertificateModal = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: resetForm,
        width: "w-3/5",
        maxWidth: "",
        modalHeading: "Send Certificate",
        open: $issueCertificateModal.open
      },
      {
        open: ($$value) => {
          $issueCertificateModal.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<main><div>${validate_component(Toggle$1, "Toggle").$$render(
            $$result,
            {
              labelText: "Automatically send certificates on completion",
              size: "sm",
              class: "mb-4"
            },
            {},
            {
              labelB: () => {
                return `<span slot="labelB" style="color: green" data-svelte-h="svelte-lmndp4">Automatic</span>`;
              },
              labelA: () => {
                return `<span slot="labelA" style="color: #161616" data-svelte-h="svelte-lw7h0m">Automatic</span>`;
              }
            }
          )} <p class="text-sm font-medium my-4" data-svelte-h="svelte-zb423m">If you set this as automatic, certificates will be issued after the
        learner completes the course.</p></div> <p class="text-xs font-normal text-gray-500 my-4" data-svelte-h="svelte-1vn1abu">or send a personalised/ custom certificate below:</p> <form><div class="flex flex-col md:flex-row gap-2 w-full">${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Email address of the student",
              className: "w-full my-4",
              labelClassName: "text-xs font-normal",
              inputClassName: "text-sm placeholder:text-sm placeholder:font-medium ",
              placeholder: "email,comma seperated",
              value: $issueCertificateModal.email
            },
            {
              value: ($$value) => {
                $issueCertificateModal.email = $$value;
                $$settled = false;
              }
            },
            {}
          )} ${validate_component(TextField, "TextField").$$render(
            $$result,
            {
              label: "Schedule date",
              className: "w-full my-4",
              labelClassName: "text-xs font-normal",
              inputClassName: "text-sm placeholder:text-sm placeholder:font-medium ",
              placeholder: "12/06/2023",
              value: $issueCertificateModal.date
            },
            {
              value: ($$value) => {
                $issueCertificateModal.date = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> ${validate_component(TextArea, "TextArea").$$render(
            $$result,
            {
              label: "Add a personalized message",
              labelClassName: "text-xs font-normal",
              rows: "2",
              maxRows: "3",
              placeholder: "your message here",
              className: "mb-4",
              value: $issueCertificateModal.message
            },
            {
              value: ($$value) => {
                $issueCertificateModal.message = $$value;
                $$settled = false;
              }
            },
            {}
          )} <div class="mt-5 flex w-full items-end justify-end">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3 rounded-md text-sm font-medium",
              label: "Issue certificate",
              type: "submit"
            },
            {},
            {}
          )}</div></form></main>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_issueCertificateModal();
  return $$rendered;
});
const css$2 = {
  code: ".student-name.svelte-1etc7d8{font-family:'Qwitcher Grypen', cursive}.desc.svelte-1etc7d8{font-size:10px}.clamp.svelte-1etc7d8{font-size:clamp(14px, 3vw, 16px)}.certificate-bg.svelte-1etc7d8{background-color:#f5f8fe}",
  map: null
};
const borderwidth$1 = "border-l-8";
const bordercolor$1 = "border-primary-800";
const logo$5 = "/logo-512.png";
const Professional = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  let $currentOrg, $$unsubscribe_currentOrg;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  let { studentName = "" } = $$props;
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  $$result.css.add(css$2);
  $$unsubscribe_course();
  $$unsubscribe_currentOrg();
  return `<div class="certificate-bg w-full flex items-center justify-center border border-dashed border-primary-400 svelte-1etc7d8"><div class="${escape(borderwidth$1, true) + " " + escape(bordercolor$1, true) + " w-full svelte-1etc7d8"}"><div class="w-full px-5 py-3"><p class="text-sm font-normal my-2 uppercase text-gray-500" data-svelte-h="svelte-vqqxsr">Certificate<br> of completion</p> <div class="border-b border-gray-500 mb-4"><p class="text-xs text-black font-medium" data-svelte-h="svelte-zp032k">This is to certify that</p> <p class="student-name text-center text-5xl dark:text-black svelte-1etc7d8">${escape(studentName)}</p></div> <div class="mb-2"><p class="text-xs text-black font-medium" data-svelte-h="svelte-17f4v67">has successfully completed introductory courses in</p> <div><p class="clamp bg-transparent text-base font-semibold text-primary-800 text-center uppercase my-2 svelte-1etc7d8">${escape($course.title)}</p></div></div> <p class="desc mb-4 text-justify dark:text-black svelte-1etc7d8">${escape($course.description)}</p> <div class="flex items-center gap-1 my-2"><img${add_attribute("src", $currentOrg.avatar_url ? $currentOrg.avatar_url : logo$5, 0)} alt="logo" class="w-10 h-10 rounded-md"> <p class="font-semibold capitalize dark:text-black">${escape($currentOrg.name)}</p></div></div></div> </div>`;
});
const css$1 = {
  code: ".student-name.svelte-1etc7d8{font-family:'Qwitcher Grypen', cursive}.desc.svelte-1etc7d8{font-size:10px}.clamp.svelte-1etc7d8{font-size:clamp(14px, 3vw, 16px)}.certificate-bg.svelte-1etc7d8{background-color:#f5f8fe}",
  map: null
};
const borderwidth = "border-4";
const bordercolor = "border-pink-700";
const logo$4 = "/logo-512.png";
const Plain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $course, $$unsubscribe_course;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { studentName = "" } = $$props;
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  $$result.css.add(css$1);
  $$unsubscribe_currentOrg();
  $$unsubscribe_course();
  return `<div class="${"certificate-bg w-full flex flex-col items-center justify-center " + escape(borderwidth, true) + " " + escape(bordercolor, true) + " py-3 svelte-1etc7d8"}"><div class="flex items-center gap-1 my-2"><img${add_attribute("src", $currentOrg.avatar_url ? $currentOrg.avatar_url : logo$4, 0)} alt="logo" class="w-10 h-10 rounded-md"> <p class="font-semibold capitalize dark:text-black">${escape($currentOrg.name)}</p></div> <div class="w-full px-5 py-3"><p class="text-sm text-center font-normal my-2 uppercase tracking-widest text-gray-500 w-full" data-svelte-h="svelte-i0dq90">Certificate of completion</p> <div class="border-b border-gray-500 mb-4"><p class="text-xs text-black font-medium" data-svelte-h="svelte-zp032k">This is to certify that</p> <p class="student-name text-center text-5xl dark:text-black svelte-1etc7d8">${escape(studentName)}</p></div> <div class="mb-2"><p class="text-xs text-black font-medium" data-svelte-h="svelte-10q9clu">has successfully completed the course</p> <div><p class="clamp bg-transparent text-base font-semibold text-pink-700 text-center uppercase svelte-1etc7d8">${escape($course.title)}</p></div></div> <p class="desc text-center dark:text-black svelte-1etc7d8">${escape($course.description)}</p></div> </div>`;
});
const logo$3 = "/logo-512.png";
const PurpleProfessionalBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $course, $$unsubscribe_course;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { studentName = "" } = $$props;
  const dateIssued = (/* @__PURE__ */ new Date()).toLocaleDateString();
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  $$unsubscribe_currentOrg();
  $$unsubscribe_course();
  return `<div class="p-3 w-full dark:text-black bg-[#95449A]"><div class="w-full bg-white pb-5 flex"><div class="w-[80%] pl-3"><header class="flex justify-start items-center gap-1 text-sm font-bold"><img${add_attribute("src", $currentOrg.avatar_url ? $currentOrg.avatar_url : logo$3, 0)} alt="logo" class="w-5"> <h1 class="text-sm">${escape($currentOrg.name)}</h1></header> <div class="font-bold mt-7"><h2 class="text-[7px] m-0" data-svelte-h="svelte-l80udo">This certificate is awarded to</h2> <h1 class="text-lg m-0 mt-0.5 leading-3 text-[#95449A]">${escape(studentName)}</h1></div> <div class="font-bold mt-3 w-[90%]"><h1 class="text-[7px]" data-svelte-h="svelte-1v10936">has succesfully completed training on</h1> <h2 class="text-lg m-0">${escape($course.title)}</h2></div> <div class="flex justify-between items-center mt-8 mb-5 text-center"><div class=""><h1 class="h-2/4 m-0 text-[7px]" data-svelte-h="svelte-xds90x">DATE ISSUED:</h1> <p class="border-b border-black font-bold text-[7px]">${escape(dateIssued)}</p></div> <div class="w-[20%] text-[7px]" data-svelte-h="svelte-4mqcii"><div class=""></div> <p class="border-t border-black font-bold text-[7px]">Signature</p></div></div> <footer class="text-[8px] font-bold w-[90%] desc">${escape($course.description)}</footer></div> <div class="w-[20%]" data-svelte-h="svelte-4a0jkd"><img src="/images/purple-professional-badge.svg" alt="A badge" class="w-full"></div></div></div>`;
});
const logo$2 = "/logo-512.png";
const BlueProfessionalBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $course, $$unsubscribe_course;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { studentName = "" } = $$props;
  const dateIssued = (/* @__PURE__ */ new Date()).toLocaleDateString();
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  $$unsubscribe_currentOrg();
  $$unsubscribe_course();
  return `<div class="p-3 w-full dark:text-black bg-[#2D499F]"><div class="w-full bg-white pb-5 flex"><div class="w-[80%] pl-3"><header class="flex justify-start items-center gap-1 text-sm font-bold"><img${add_attribute("src", $currentOrg.avatar_url ? $currentOrg.avatar_url : logo$2, 0)} alt="logo" class="w-5"> <h1 class="text-sm">${escape($currentOrg.name)}</h1></header> <div class="font-bold mt-7"><h2 class="text-[7px] m-0" data-svelte-h="svelte-l80udo">This certificate is awarded to</h2> <h1 class="text-lg m-0 mt-0.5 leading-3 text-[#2D499F]">${escape(studentName)}</h1></div> <div class="font-bold mt-3 w-[90%]"><h1 class="text-[7px]" data-svelte-h="svelte-1v10936">has succesfully completed training on</h1> <h2 class="text-lg m-0">${escape($course.title)}</h2></div> <div class="flex justify-between items-center mt-8 mb-5 text-center"><div class=""><h1 class="h-2/4 m-0 text-[7px]" data-svelte-h="svelte-xds90x">DATE ISSUED:</h1> <p class="border-b border-black font-bold text-[7px]">${escape(dateIssued)}</p></div> <div class="w-[20%] text-[7px]" data-svelte-h="svelte-4mqcii"><div class=""></div> <p class="border-t border-black font-bold text-[7px]">Signature</p></div></div> <footer class="text-[8px] font-bold w-[90%] desc">${escape($course.description)}</footer></div> <div class="w-[20%]" data-svelte-h="svelte-17a7mbn"><img src="/images/blue-professional-badge.svg" alt="A badge" class="w-full"></div></div></div>`;
});
const logo$1 = "/logo-512.png";
const PurpleBadgePattern = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $course, $$unsubscribe_course;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { studentName = "" } = $$props;
  const dateIssued = (/* @__PURE__ */ new Date()).toLocaleDateString();
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  $$unsubscribe_currentOrg();
  $$unsubscribe_course();
  return `<div class="w-full relative dark:text-black"><img src="/images/purple-badge-pattern-background.svg" alt="" class="w-full h-full absolute z-0 object-cover"> <div class="relative md:h-[17rem] h-full bg-white flex justify-between z-20 m-2"><div class="w-[70%] pl-3"><header class="absolute w-full flex justify-center items-center gap-1 text-sm font-bold"><img${add_attribute("src", $currentOrg.avatar_url ? $currentOrg.avatar_url : logo$1, 0)} alt="logo" class="w-5"> <h1 class="text-sm">${escape($currentOrg.name)}</h1></header> <div class="font-bold mt-16"><h2 class="text-[7px] m-0" data-svelte-h="svelte-l80udo">This certificate is awarded to</h2> <h1 class="text-lg m-0 mt-0.5 leading-3 text-[#914397]">${escape(studentName)}</h1></div> <div class="font-bold mt-3 w-[90%]"><h1 class="text-[7px]" data-svelte-h="svelte-1jyhxed">has successfully completed training on</h1> <h2 class="text-lg m-0">${escape($course.title)}</h2></div> <div class="flex justify-between items-center my-8 text-center"><div><h1 class="h-2/4 m-0 text-[7px]" data-svelte-h="svelte-xds90x">DATE ISSUED:</h1> <p class="border-b border-black font-bold text-[7px]">${escape(dateIssued)}</p></div> <div class="w-[20%] text-[7px]" data-svelte-h="svelte-1h83cr9"><div></div> <p class="border-t border-black font-bold text-[7px]">Signature</p></div></div> <footer class="text-[8px] font-bold w-[90%] desc">${escape($course.description)}</footer></div> <div class="overflow-hidden flex justify-center items-center" data-svelte-h="svelte-111jvb"><img src="/images/purple-badge-pattern-badge.svg" alt="A badge" class="max-w-none w-[8rem] md:w-[10rem]"></div></div></div>`;
});
const logo = "/logo-512.png";
const BlueBadgePattern = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $course, $$unsubscribe_course;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { studentName = "" } = $$props;
  const dateIssued = (/* @__PURE__ */ new Date()).toLocaleDateString();
  if ($$props.studentName === void 0 && $$bindings.studentName && studentName !== void 0)
    $$bindings.studentName(studentName);
  $$unsubscribe_currentOrg();
  $$unsubscribe_course();
  return `<div class="w-full relative dark:text-black"><img src="/images/blue-badge-pattern-background.svg" alt="" class="w-full h-full absolute z-0 object-cover"> <div class="relative md:h-[17rem] h-full bg-white flex justify-between z-20 m-2"><div class="w-[70%] pl-3"><header class="absolute w-full flex justify-center items-center gap-1 text-sm font-bold"><img${add_attribute("src", $currentOrg.avatar_url ? $currentOrg.avatar_url : logo, 0)} alt="logo" class="w-5"> <h1 class="text-sm">${escape($currentOrg.name)}</h1></header> <div class="font-bold mt-16"><h2 class="text-[7px] m-0" data-svelte-h="svelte-l80udo">This certificate is awarded to</h2> <h1 class="text-lg m-0 mt-0.5 leading-3 text-[#2D499F]">${escape(studentName)}</h1></div> <div class="font-bold mt-3 w-[90%]"><h1 class="text-[7px]" data-svelte-h="svelte-1jyhxed">has successfully completed training on</h1> <h2 class="text-lg m-0">${escape($course.title)}</h2></div> <div class="flex justify-between items-center my-8 text-center"><div><h1 class="h-2/4 m-0 text-[7px]" data-svelte-h="svelte-xds90x">DATE ISSUED:</h1> <p class="border-b border-black font-bold text-[7px]">${escape(dateIssued)}</p></div> <div class="w-[20%] text-[7px]" data-svelte-h="svelte-1h83cr9"><div></div> <p class="border-t border-black font-bold text-[7px]">Signature</p></div></div> <footer class="text-[8px] font-bold w-[90%] desc">${escape($course.description)}</footer></div> <div class="overflow-hidden flex justify-center items-center" data-svelte-h="svelte-14vxerh"><img src="/images/blue-badge-pattern-badge.svg" alt="A badge" class="max-w-none w-[8rem] md:w-[10rem]"></div></div></div>`;
});
const css = {
  code: "p.svelte-8tvv8m{color:#262626}.certificate-container.svelte-8tvv8m{width:95%;max-width:95%}",
  map: null
};
const studentNamePlaceholder = "Name of student";
const Design = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $course, $$unsubscribe_course;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  const themes = [
    "professional",
    "plain",
    "purpleProfessionalBadge",
    "blueProfessionalBadge",
    "purpleBadgePattern",
    "blueBadgePattern"
  ];
  let isSaving = false;
  let errors = { description: "" };
  let helperText = "";
  const saveCertificate = async () => {
    isSaving = true;
    try {
      const result = saveCertificateValidation({
        description: $course.description || "",
        is_certificate_downloadable: $course.is_certificate_downloadable || false,
        certificate_theme: $course.certificate_theme || ""
      });
      if (result && Object.keys(result).length > 0) {
        errors.description = $t(result.description) || $t("course.navItem.certificates.description_error");
        throw new Error(errors.description);
      }
      errors.description = "";
      await updateCourse($course.id, void 0, {
        description: $course.description || "",
        is_certificate_downloadable: $course.is_certificate_downloadable || false,
        certificate_theme: $course.certificate_theme || ""
      });
      snackbar.success("snackbar.course_settings.success.saved");
    } catch (error) {
      if (error.message) {
        errors.description = error.message;
      } else {
        errors.description = $t("course.navItem.certificates.unexpected_error");
      }
    } finally {
      isSaving = false;
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    helperText = `${$course.description?.length || 0}/200 ${$t("course.navItem.certificates.characters")}`;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-t5k7ri_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"><link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"><!-- HEAD_svelte-t5k7ri_END -->`, ""} ${validate_component(Banner, "UpgradeBanner").$$render($$result, {}, {}, {
      default: () => {
        return `${escape($t("upgrade.certificate"))}`;
      }
    })} <main class="md:-ml-3 md:-mr-3 px-2 mt-2"><div class="flex-1 flex flex-col lg:flex-row justify-between gap-3 w-full mb-3 h-4/5"><section class="w-full lg:w-2/5 h-full"><strong class="my-2 text-base font-semibold text-black dark:text-gray-100">${escape($t("course.navItem.certificates.certificate_settings"))}</strong> <p class="text-xs font-normal my-4 dark:text-gray-100 svelte-8tvv8m">${escape($t("course.navItem.certificates.theme"))}</p> ${validate_component(RadioButtonGroup$1, "RadioButtonGroup").$$render(
      $$result,
      {
        class: "mb-10",
        disabled: $isFreePlan,
        selected: $course.certificate_theme
      },
      {
        selected: ($$value) => {
          $course.certificate_theme = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex flex-wrap justify-between gap-y-5">${each(themes, (theme) => {
            return `<div class="flex mr-3">${validate_component(RadioButton$1, "RadioButton").$$render($$result, { value: theme }, {}, {})} <img${add_attribute("src", `/images/certificate_theme_${theme}.png`, 0)} alt="themes" class="w-[110px] h-[82px]"> </div>`;
          })}</div>`;
        }
      }
    )} <div><p class="text-xs font-normal text-black my-2 dark:text-gray-100 svelte-8tvv8m">${escape($t("course.navItem.certificates.logo"))}</p> <div><p class="text-base mt-1 dark:text-gray-100 svelte-8tvv8m">${escape($t("course.navItem.certificates.to_update"))} <strong class="font-semibold">${escape($t("course.navItem.certificates.settings"))}</strong> ${escape($t("course.navItem.certificates.and_upload"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.certificates.goto_settings"),
        variant: VARIANTS.OUTLINED,
        className: "rounded-md mt-3",
        onClick: () => goto(`/org/${$currentOrg.siteName}/settings`)
      },
      {},
      {}
    )}</div> <span class="my-4"><p class="dark:text-gray-100 text-xs font-normal mt-4 mb-2 svelte-8tvv8m">${escape($t("course.navItem.certificates.description"))}</p> ${validate_component(TextArea, "TextArea").$$render(
      $$result,
      {
        rows: 6,
        placeholder: $t("course.navItem.certificates.placeholder"),
        errorMessage: errors.description,
        disabled: $isFreePlan,
        helperMessage: helperText,
        value: $course.description
      },
      {
        value: ($$value) => {
          $course.description = $$value;
          $$settled = false;
        }
      },
      {}
    )}</span> ${validate_component(Toggle$1, "Toggle").$$render(
      $$result,
      {
        labelText: $t("course.navItem.certificates.allow"),
        class: "my-4",
        size: "sm",
        disabled: $isFreePlan,
        toggled: $course.is_certificate_downloadable
      },
      {
        toggled: ($$value) => {
          $course.is_certificate_downloadable = $$value;
          $$settled = false;
        }
      },
      {
        labelB: () => {
          return `<span slot="labelB" style="color: green">${escape($t("generic.unlocked"))}</span>`;
        },
        labelA: () => {
          return `<span slot="labelA"${add_attribute("style", $globalStore.isDark ? "color: white" : "color: #161616", 0)}>${escape($t("generic.locked"))}</span>`;
        }
      }
    )}</div></section> <section class="bg-gray-100 dark:bg-neutral-800 flex justify-center items-center rounded-md w-full lg:w-3/5"><div class="certificate-container flex justify-center items-center svelte-8tvv8m">${$course.certificate_theme === "professional" ? `${validate_component(Professional, "Professional").$$render($$result, { studentName: studentNamePlaceholder }, {}, {})}` : `${$course.certificate_theme === "plain" ? `${validate_component(Plain, "Plain").$$render($$result, { studentName: studentNamePlaceholder }, {}, {})}` : `${$course.certificate_theme === "purpleProfessionalBadge" ? `${validate_component(PurpleProfessionalBadge, "PurpleProfessionalBadge").$$render($$result, { studentName: studentNamePlaceholder }, {}, {})}` : `${$course.certificate_theme === "blueProfessionalBadge" ? `${validate_component(BlueProfessionalBadge, "BlueProfessionalBadge").$$render($$result, { studentName: studentNamePlaceholder }, {}, {})}` : `${$course.certificate_theme === "purpleBadgePattern" ? `${validate_component(PurpleBadgePattern, "PurpleBadgePattern").$$render($$result, { studentName: studentNamePlaceholder }, {}, {})}` : `${$course.certificate_theme === "blueBadgePattern" ? `${validate_component(BlueBadgePattern, "BlueBadgePattern").$$render($$result, { studentName: studentNamePlaceholder }, {}, {})}` : ``}`}`}`}`}`}</div></section></div> <div class="h-1/5">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        className: "rounded-md flex gap-2 items-center",
        variant: VARIANTS.CONTAINED_DARK,
        onClick: saveCertificate,
        isLoading: isSaving,
        isDisabled: $isFreePlan
      },
      {},
      {
        default: () => {
          return `${$isFreePlan ? `${validate_component(FlashFilled, "FlashFilled").$$render($$result, { size: 16, class: "text-blue-700" }, {}, {})}` : ``} ${escape($t("course.navItem.certificates.save"))}`;
        }
      }
    )}</div> </main>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_course();
  $$unsubscribe_isFreePlan();
  $$unsubscribe_currentOrg();
  $$unsubscribe_globalStore();
  return $$rendered;
});
const UnlockedCertificate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let subtitle;
  let $$unsubscribe_profile;
  let $$unsubscribe_course;
  let $t, $$unsubscribe_t;
  let $$unsubscribe_currentOrg;
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_course = subscribe(course, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  let isLoading = false;
  let isCourseComplete = false;
  const downLoadCertificate = async () => {
    return;
  };
  title = "course.navItem.certificates.complete_to_download_title";
  subtitle = "course.navItem.certificates.complete_to_download_subtitle";
  $$unsubscribe_profile();
  $$unsubscribe_course();
  $$unsubscribe_t();
  $$unsubscribe_currentOrg();
  return `${validate_component(Box, "Box").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col items-center justify-center w-max h-full gap-5"><img src="/images/student-certificate-preview.png" alt="Certificate" class="max-w-[218px]"> <p class="text-xl font-normal text-center">${escape($t(title))}</p> <p class="text-sm font-normal text-center max-w-md">${escape($t(subtitle))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
        $$result,
        {
          className: "flex items-center gap-2",
          onClick: downLoadCertificate,
          variant: VARIANTS.CONTAINED_DARK,
          isDisabled: !public_env.PUBLIC_SERVER_URL || !isCourseComplete,
          isLoading
        },
        {},
        {
          default: () => {
            return `${validate_component(Download, "Download").$$render($$result, { size: 16 }, {}, {})} ${escape($t("course.navItem.certificates.download_certificate"))}`;
          }
        }
      )}</div>`;
    }
  })}`;
});
const LockedCertificate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `${validate_component(Box, "Box").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col items-center justify-center w-max h-full gap-2"><img src="/images/student-certificate-preview.png" alt="Certificate" class="max-w-[218px]"> <p class="text-xl font-normal text-center">${escape($t("course.navItem.certificates.locked_certificate"))}</p> <p class="text-sm font-normal text-center">${escape($t("course.navItem.certificates.instructor_unlock"))} <br> ${escape($t("course.navItem.certificates.contact_instructor"))}</p></div>`;
    }
  })}`;
});
const Index = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $course, $$unsubscribe_course;
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_course();
  return `<div>${$course.is_certificate_downloadable == true ? `${validate_component(UnlockedCertificate, "UnlockedCertificate").$$render($$result, {}, {}, {})}` : `${validate_component(LockedCertificate, "LockedCertificate").$$render($$result, {}, {}, {})}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(IssueCertificateModal, "IssueCertificateModal").$$render($$result, {}, {}, {})} ${validate_component(CourseContainer, "CourseContainer").$$render(
      $$result,
      { courseId: data.courseId },
      {
        courseId: ($$value) => {
          data.courseId = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(PageNav, "PageNav").$$render(
            $$result,
            {
              title: $t("course.navItem.certificates.title"),
              disableSticky: true
            },
            {},
            {
              widget: () => {
                return `<slot:fragment slot="widget">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                  default: () => {
                    return ` `;
                  }
                })}</slot:fragment>`;
              }
            }
          )} ${validate_component(PageBody, "PageBody").$$render(
            $$result,
            {
              className: "w-full mx-0",
              padding: "px-3 pb-10"
            },
            {},
            {
              default: () => {
                return `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                  default: () => {
                    return `${validate_component(Design, "Design").$$render($$result, {}, {}, {})}`;
                  }
                })} ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { onlyStudent: true }, {}, {
                  default: () => {
                    return `${validate_component(Index, "StudentCertificate").$$render($$result, {}, {}, {})}`;
                  }
                })} `;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-efbeb248.js.map
