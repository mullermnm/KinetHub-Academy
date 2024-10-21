import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import 'pluralize';
import './_sentry-release-injection-file-6be6a010.js';
import './index9-eea8802c.js';
import { c as currentOrg, i as isOrgAdmin } from './org-8fc26a61.js';
import { p as profile } from './user-e923b6d4.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import './validator-27ec1d5c.js';
import { b as snackbar } from './store2-dc811f17.js';
import { D as DeleteModal } from './DeleteModal-1dea6658.js';
import './date-30c46a0e.js';
import { t as fetchCourses } from './index18-b03e5e10.js';
import { t as t2 } from './translations-90190f83.js';
import { a as courses } from './store5-4ab63ff0.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './index15-c5761f1e.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import 'lodash/isNumber.js';
import 'zod';
import './index8-59a07edf.js';
import './index11-4ef8d5a0.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63083080-7284-4ed8-b541-fed3253067dc", e._sentryDebugIdIdentifier = "sentry-dbid-63083080-7284-4ed8-b541-fed3253067dc");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $profile, $$unsubscribe_profile;
  let $courses, $$unsubscribe_courses;
  let $$unsubscribe_t;
  let $$unsubscribe_isOrgAdmin;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_t = subscribe(t2, (value) => value);
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => value);
  let { data } = $$props;
  let question;
  let deleteComment = {
    shouldDelete: false,
    commentId: "",
    isDeleting: false
  };
  let deleteQuestion = {
    shouldDelete: false,
    questionId: "",
    isDeleting: false
  };
  async function getCourses(userId, orgId) {
    if ($courses.length) {
      [...$courses];
      return;
    }
    const coursesResults = await fetchCourses(userId, orgId);
    coursesResults?.allCourses || [];
  }
  async function handleDelete(isQuestion) {
    if (!isQuestion) {
      deleteComment.isDeleting = true;
      const { error } = await supabase.from("community_answer").delete().match({ id: deleteComment.commentId });
      deleteComment.isDeleting = false;
      if (error) {
        snackbar.error("snackbar.community.error.deleting_comments");
        console.log("Error deleting comments", error);
        return;
      }
      snackbar.success("snackbar.community.success.success_delete");
      question.comments = question.comments.filter((c) => c.id !== deleteComment.commentId);
      deleteComment.shouldDelete = false;
      deleteComment.commentId = "";
      return;
    }
    deleteQuestion.isDeleting = true;
    const { error: commentDeleteError } = await supabase.from("community_answer").delete().match({ question_id: deleteQuestion.questionId });
    if (commentDeleteError) {
      snackbar.error("snackbar.community.error.deleting_comments");
      console.log("Error deleting comments", commentDeleteError);
      deleteQuestion.isDeleting = false;
      return;
    }
    const { error: questionDeleteError } = await supabase.from("community_question").delete().match({ id: deleteQuestion.questionId });
    if (questionDeleteError) {
      snackbar.error("snackbar.community.error.deleting_question");
      console.log("Error deleting question", questionDeleteError);
      return;
    }
    snackbar.success("snackbar.community.success.success_delete");
    goto(`/lms/community`);
    deleteQuestion.isDeleting = false;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if ($profile.id && $currentOrg.id) {
          getCourses($profile.id, $currentOrg.id);
        }
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-7qdk32_START -->${$$result.title = `<title>${escape("Question")}</title>`, ""}<!-- HEAD_svelte-7qdk32_END -->`, ""} ${validate_component(DeleteModal, "DeleteModal").$$render(
      $$result,
      {
        onCancel: () => {
          deleteQuestion.shouldDelete = false;
          deleteQuestion.questionId = "";
        },
        onDelete: () => handleDelete(true),
        isQuestion: true,
        open: deleteQuestion.shouldDelete,
        isDeleting: deleteQuestion.isDeleting
      },
      {
        open: ($$value) => {
          deleteQuestion.shouldDelete = $$value;
          $$settled = false;
        },
        isDeleting: ($$value) => {
          deleteQuestion.isDeleting = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(DeleteModal, "DeleteModal").$$render(
      $$result,
      {
        isDeleting: deleteComment.isDeleting,
        onCancel: () => {
          deleteComment.shouldDelete = false;
          deleteComment.commentId = "";
        },
        onDelete: () => handleDelete(false),
        open: deleteComment.shouldDelete
      },
      {
        open: ($$value) => {
          deleteComment.shouldDelete = $$value;
          $$settled = false;
        }
      },
      {}
    )} <section class="max-w-3xl mx-auto md:mx-10 lg:mb-20">${`<div class="py-10 px-5 mb-3">${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { style: "width: 25%;" }, {}, {})} ${validate_component(SkeletonText$1, "SkeletonText").$$render(
      $$result,
      {
        style: "width: 100%; margin-bottom: 2rem"
      },
      {},
      {}
    )} ${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render($$result, { style: "width: 100%; height: 20rem;" }, {}, {})}</div>`}</section>`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_courses();
  $$unsubscribe_t();
  $$unsubscribe_isOrgAdmin();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-035bf23f.js.map
