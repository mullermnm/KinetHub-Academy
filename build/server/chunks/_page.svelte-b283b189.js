import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { A as AuthUI } from './index29-00da53b0.js';
import { R as ROLE, c as currentOrg } from './org-8fc26a61.js';
import './_sentry-release-injection-file-6be6a010.js';
import { s as addGroupMember } from './index18-b03e5e10.js';
import { p as profile } from './user-e923b6d4.js';
import { b as snackbar } from './store2-dc811f17.js';
import { c as capturePosthogEvent } from './index23-8c8bac96.js';
import { p as page } from './stores-793c1e19.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './index10-b2b97ef7.js';
import './index2-aea858a5.js';
import 'lodash/cloneDeep.js';
import './index15-c5761f1e.js';
import 'posthog-js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7e6407eb-1b36-4148-a19e-ad5aa2f0b207", e._sentryDebugIdIdentifier = "sentry-dbid-7e6407eb-1b36-4148-a19e-ad5aa2f0b207");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $page, $$unsubscribe_page;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let supabase = getSupabase();
  let loading = false;
  let formRef;
  async function handleSubmit() {
    loading = true;
    if (!$profile.id || !$profile.email) {
      console.log("Profile not found", $profile);
      return goto(`/signup?redirect=${$page.url?.pathname || ""}`);
    }
    const { data: courseData, error } = await supabase.from("course").select("group_id").eq("id", data.id).single();
    console.log({ courseData });
    if (!courseData?.group_id) {
      console.error("error getting group", error);
      return;
    }
    const member = {
      profile_id: $profile.id,
      group_id: courseData.group_id,
      role_id: ROLE.STUDENT
    };
    const teacherMembers = await supabase.from("groupmember").select("id, profile(email)").eq("group_id", courseData.group_id).eq("role_id", ROLE.TUTOR).returns();
    teacherMembers.data?.map((teacher) => {
      return teacher.profile?.email || "";
    }) || [];
    addGroupMember(member).then((addedMember) => {
      loading = false;
      if (addedMember.error) {
        console.error("Error adding student to group", courseData.group_id, addedMember.error);
        snackbar.error("snackbar.invite.failed_join");
        window.location.href = "/lms";
        return;
      }
      capturePosthogEvent("student_joined_course", {
        course_name: data.name,
        student_id: $profile.id,
        student_email: $profile.email
      });
      return goto("/lms");
    });
  }
  function setCurOrg(cOrg) {
    if (!cOrg)
      return;
    currentOrg.set(cOrg);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setCurOrg(data.currentOrg);
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1ucdzck_START -->${$$result.title = `<title>Join ${escape(data.name)} on KinetsHub</title>`, ""}<!-- HEAD_svelte-1ucdzck_END -->`, ""} ${validate_component(AuthUI, "AuthUI").$$render(
      $$result,
      {
        supabase,
        isLogin: false,
        handleSubmit,
        isLoading: loading,
        showOnlyContent: true,
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
          return `<div class="mt-0 w-full"><h3 class="dark:text-white text-lg font-medium mt-0 mb-4 text-center">${escape(data.name)}</h3> <p class="dark:text-white text-sm font-light text-center">${escape(data.description)}</p></div> <div class="my-4 w-full flex justify-center items-center">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: "Join Course",
              type: "submit",
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
  $$unsubscribe_profile();
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b283b189.js.map
