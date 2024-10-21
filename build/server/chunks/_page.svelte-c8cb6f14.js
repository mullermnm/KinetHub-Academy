import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, b as each, e as escape, a as add_attribute } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { p as page } from './stores-793c1e19.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { M as Modal } from './index8-59a07edf.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { u as updateSubmission, d as deleteSubmission, e as updateQuestionAnswer, S as STATUS, P as Preview } from './index28-97d9d4c9.js';
import './_sentry-release-injection-file-6be6a010.js';
import { u as useCompletion, T as TextArea } from './TextArea-9e2a2a4d.js';
import { m as QUESTION_TYPE } from './index18-b03e5e10.js';
import { t as t2 } from './translations-90190f83.js';
import { O as OverflowMenu$1, a as OverflowMenuItem$1 } from './OverflowMenuItem-10e1618e.js';
import { T as Tag$1 } from './Tag-37c50bfd.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';
import { C as Chip } from './index12-9c021b5e.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { c as course } from './store4-ef39175f.js';
import { b as snackbar } from './store2-dc811f17.js';
import './config-8c22ba68.js';
import { e as currentOrgDomain } from './org-8fc26a61.js';
import './index9-eea8802c.js';
import './user-e923b6d4.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './TextField-86164973.js';
import './HTMLRender-9a6e04f8.js';
import './SkeletonText-d2851876.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './Popover-a92462a3.js';
import './Close-73e0af44.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './ChevronDown-d5b93e8c.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './Text-e3f4b18b.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './Add-78ef4d23.js';
import './function-efda068b.js';
import './FlashFilled-4a89bd75.js';
import './reusableClass-512f4804.js';
import './Settings-0a14f57d.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './app-d638cf5d.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "df692d92-6090-470e-89d6-4cf528887e1f", e._sentryDebugIdIdentifier = "sentry-dbid-df692d92-6090-470e-89d6-4cf528887e1f");
  } catch (e2) {
  }
}();
const css$1 = {
  code: ".badge.svelte-bvxti{width:fit-content}",
  map: null
};
function getMaxPoints$1(questions) {
  return (questions || []).reduce((acc, question) => acc + question.points, 0);
}
function calculateTotal$1(grades) {
  if (!grades)
    return 0;
  return Object.values(grades).reduce((acc, grade) => acc + parseInt(grade || "0"), 0);
}
const MarkExerciseModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $input, $$unsubscribe_input;
  let $t, $$unsubscribe_t;
  let $completion, $$unsubscribe_completion;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { open = false } = $$props;
  let { onClose = () => {
  } } = $$props;
  let { handleSave = (d) => {
  } } = $$props;
  let { isGradeWithAI = false } = $$props;
  let { data } = $$props;
  let { deleteSubmission: deleteSubmission2 = async (id, statusId) => {
  } } = $$props;
  let { updateStatus = (arg) => {
  } } = $$props;
  let { isSaving = false } = $$props;
  const SELECTABLE_STATUS = [
    {
      id: STATUS.SUBMITTED,
      text: $t("course.navItem.submissions.submission_status.submitted")
    },
    {
      id: STATUS.IN_PROGRESS,
      text: $t("course.navItem.submissions.submission_status.in_progress")
    },
    {
      id: STATUS.GRADED,
      text: $t("course.navItem.submissions.submission_status.graded")
    }
  ];
  let status = SELECTABLE_STATUS[0];
  let selectedId = status.id;
  let reasons = {};
  let isLoading = false;
  let total = 0;
  let maxPoints = 0;
  let openMenu = false;
  function setStatus(data2) {
    const statusBySelectedId = SELECTABLE_STATUS.find((status2) => status2.id === data2.statusId);
    if (!statusBySelectedId) {
      return;
    }
    status = statusBySelectedId;
    if (data2.statusId !== selectedId) {
      selectedId = data2.statusId;
    }
  }
  const { input, handleSubmit, completion } = useCompletion({
    api: "/api/completion/gradingprompt",
    onFinish: async () => {
      try {
        const responseData = $completion.replace("```json", "").replace("```", "");
        let aiResponses = [];
        try {
          aiResponses = JSON.parse(responseData);
        } catch (error) {
          console.error("Error parsing AI response", error);
        }
        data?.questions.forEach((question) => {
          const { id, points, question_type_id } = question;
          if (question_type_id !== QUESTION_TYPE.TEXTAREA) {
            const answer = data.questionAnswers.find((q) => q.question_id === id);
            const answerPoints = answer?.answers?.length ?? 0;
            reasons = {
              ...reasons,
              [id]: `${$t("course.navItem.submissions.grading_modal.questions_tried")} ${answerPoints} `
            };
            data.questionAnswerByPoint[id] = `${Math.ceil(points / answerPoints)}`;
          } else if (aiResponses.length) {
            const graded = aiResponses.find((res) => res.id === id);
            reasons = {
              ...reasons,
              [id]: `${graded?.explanation}`
            };
            data.questionAnswerByPoint[id] = `${graded?.score}`;
          }
        });
      } catch (error) {
        console.error("Error", error);
      } finally {
        isLoading = false;
      }
    }
  });
  $$unsubscribe_input = subscribe(input, (value) => $input = value);
  $$unsubscribe_completion = subscribe(completion, (value) => $completion = value);
  function gradeWithAI() {
    isGradeWithAI = true;
    isLoading = true;
    const paragraphAiInput = data.questions.filter((q) => q.question_type_id === QUESTION_TYPE.TEXTAREA).map((q) => {
      const answer = data.questionAnswers.find((qA) => qA.question_id === q.id);
      return {
        id: q.id,
        question: q.title,
        answer: answer?.open_answer,
        point: q.points
      };
    });
    set_store_value(input, $input = JSON.stringify(paragraphAiInput), $input);
    handleSubmit({
      preventDefault: () => {
      }
    });
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.handleSave === void 0 && $$bindings.handleSave && handleSave !== void 0)
    $$bindings.handleSave(handleSave);
  if ($$props.isGradeWithAI === void 0 && $$bindings.isGradeWithAI && isGradeWithAI !== void 0)
    $$bindings.isGradeWithAI(isGradeWithAI);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.deleteSubmission === void 0 && $$bindings.deleteSubmission && deleteSubmission2 !== void 0)
    $$bindings.deleteSubmission(deleteSubmission2);
  if ($$props.updateStatus === void 0 && $$bindings.updateStatus && updateStatus !== void 0)
    $$bindings.updateStatus(updateStatus);
  if ($$props.isSaving === void 0 && $$bindings.isSaving && isSaving !== void 0)
    $$bindings.isSaving(isSaving);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    total = calculateTotal$1(data.questionAnswerByPoint);
    maxPoints = getMaxPoints$1(data.questions);
    {
      setStatus(data);
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        modalHeading: data.title,
        onClose,
        width: "w-4/5 h-[90%]",
        containerClass: "flex items-start !max-h-full h-[85%] py-0 px-4",
        headerClass: "py-2",
        labelClass: "text-base font-semibold",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="w-full h-full mt-2">${`${validate_component(Preview, "Preview").$$render(
            $$result,
            {
              questions: Array.isArray(data.questions) ? data.questions.sort((a, b) => a.order - b.order) : [],
              questionnaireMetaData: {
                answers: data.answers || {},
                isFinished: true
              },
              disableGrading: false,
              grades: data.questionAnswerByPoint,
              reasons,
              isGradeWithAI,
              isLoading
            },
            {
              grades: ($$value) => {
                data.questionAnswerByPoint = $$value;
                $$settled = false;
              },
              reasons: ($$value) => {
                reasons = $$value;
                $$settled = false;
              },
              isGradeWithAI: ($$value) => {
                isGradeWithAI = $$value;
                $$settled = false;
              },
              isLoading: ($$value) => {
                isLoading = $$value;
                $$settled = false;
              }
            },
            {}
          )}`}</div> <div class="ml-4 mt-2 w-2/5 sticky top-0"><div class="border border-gray-300 rounded-md"><div class="flex gap-1 justify-between items-center border-b border-t-0 border-l-0 border-r-0 border-gray-300 p-3"><p class="dark:text-white font-bold text-base">${escape($t("course.navItem.submissions.grading_modal.details"))} ${data.isEarly ? `<span class="ml-2 text-sm badge rounded-sm px-2 bg-green-500 text-white svelte-bvxti">${escape($t("course.navItem.submissions.grading_modal.early"))}</span>` : `<span class="ml-2 badge text-sm rounded-sm px-2 bg-red-500 text-white svelte-bvxti">${escape($t("course.navItem.submissions.grading_modal.late"))}</span>`}</p> ${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { open: openMenu, flipped: true }, {}, {
            default: () => {
              return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: $t("delete_modal.label"),
                  danger: true
                },
                {},
                {}
              )}`;
            }
          })}</div> <div class="flex items-center space-x-4 text-sm px-3 py-2"><p class="dark:text-white text-sm text-gray-500 font-semibold">${escape($t("course.navItem.submissions.grading_modal.total_grade"))}:</p> ${validate_component(Tag$1, "Tag").$$render(
            $$result,
            {
              class: "dark:text-white font-semibold text-black bg-gray-100 dark:bg-neutral-700 rounded-md w-fit"
            },
            {},
            {
              default: () => {
                return `${escape(total)}/${escape(maxPoints)}`;
              }
            }
          )}</div>  <div class="flex items-center space-x-4 text-sm px-3 py-2"><p class="dark:text-white text-sm text-gray-500 font-semibold">${escape($t("course.navItem.submissions.grading_modal.student"))}:</p> ${data.student ? `<div class="flex flex-row justify-center items-center bg-gray-100 dark:bg-neutral-700 rounded-md p-[6px]"><img alt="Student avatar" class="flex rounded-full h-5 w-5"${add_attribute("src", data.student.avatar_url, 0)}> <p class="dark:text-white font-semibold ml-2 text-sm line-clamp-1">${escape(data.student.fullname)}</p></div>` : ``}</div>  <div class="flex flex-col items-start text-sm px-3 py-2"><p class="dark:text-white text-gray-500 font-semibold">${escape($t("course.navItem.submissions.grading_modal.status"))}:</p> ${validate_component(Dropdown$1, "Dropdown").$$render(
            $$result,
            {
              items: SELECTABLE_STATUS,
              class: "w-full",
              selectedId
            },
            {
              selectedId: ($$value) => {
                selectedId = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="flex flex-col items-start text-sm px-3 py-2"><p class="dark:text-white text-gray-500 font-semibold">${escape($t("course.navItem.submissions.grading_modal.add_comment"))}:</p> ${validate_component(TextArea, "TextArea").$$render(
            $$result,
            {
              bgColor: "bg-gray-100 dark:bg-neutral-700",
              className: "font-semibold",
              placeholder: $t("course.navItem.submissions.grading_modal.add_comment_placeholder"),
              value: data.feedback
            },
            {
              value: ($$value) => {
                data.feedback = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> <div class="flex flex-col w-full space-y-3 px-3 py-2">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              onClick: gradeWithAI,
              variant: VARIANTS.OUTLINED,
              className: "space-x-3 py-3 px-8 w-full "
            },
            {},
            {
              default: () => {
                return `<img src="/ai.svg" alt="ai"> <p class="font-semibold text-sm">${escape($t("course.navItem.submissions.grading_modal.grade_with_ai"))}</p>`;
              }
            }
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              onClick: () => {
                handleSave(data);
              },
              // onClose();
              isLoading: isSaving,
              label: $t("course.navItem.submissions.grading_modal.submit_grades"),
              variant: VARIANTS.CONTAINED,
              className: "py-3 px-8 w-full"
            },
            {},
            {}
          )}</div> </div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_input();
  $$unsubscribe_t();
  $$unsubscribe_completion();
  return $$rendered;
});
const css = {
  code: ".section.svelte-1j77sks{max-width:355px;min-width:355px;height:75vh}.content.svelte-1j77sks{height:95%}@media screen and (max-width: 768px){.section.svelte-1j77sks{min-width:250px}}",
  map: null
};
function getMaxPoints(questions) {
  return (questions || []).reduce((acc, question) => acc + question.points, 0);
}
function calculateTotal(grades) {
  if (!grades)
    return 0;
  return Object.values(grades).reduce((acc, grade) => acc + parseInt(grade), 0);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $course, $$unsubscribe_course;
  let $currentOrgDomain, $$unsubscribe_currentOrgDomain;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => $currentOrgDomain = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  const { courseId } = data;
  let exerciseDetails;
  let lessonDetails;
  let totalMark = 0;
  let maxMark = 0;
  let submissionIdData = {};
  let submissionId;
  let openExercise = false;
  let isGradeWithAI = false;
  let isSaving = false;
  const submissionStatus = {
    1: $t("course.navItem.submissions.submission_status.submitted"),
    2: $t("course.navItem.submissions.submission_status.in_progress"),
    3: $t("course.navItem.submissions.submission_status.graded")
  };
  let sections = [
    {
      id: 1,
      title: $t("course.navItem.submissions.submission_status.submitted"),
      value: 0,
      items: []
    },
    {
      id: 2,
      title: $t("course.navItem.submissions.submission_status.in_progress"),
      value: 0,
      items: []
    },
    {
      id: 3,
      title: $t("course.navItem.submissions.submission_status.graded"),
      value: 10,
      items: []
    }
  ];
  const notifyStudent = (submissionData) => {
    maxMark = getMaxPoints(submissionData?.questions);
    totalMark = calculateTotal(submissionData?.questionAnswerByPoint);
    const { fullname, email } = submissionData?.student;
    const { title, statusId } = submissionData;
    const exerciseLink = `${$currentOrgDomain}/courses/${courseId}/lessons/${lessonDetails.id}/exercises/${exerciseDetails.id}`;
    `
      <p>Hello ${fullname},</p>
        <p>The status of your submitted exercise on <strong>${title}</strong> has been updated to ${submissionStatus[statusId]}</p>
        ${statusId == 3 ? `<p>Your score was ${totalMark}/${maxMark}</p>
              <a class="button" href="${exerciseLink}">View your Result</a>
            ` : `<a class="button" href="${exerciseLink}">Open Exercise</a>`}
        <p>This exercise is for <strong>${lessonDetails.title}</strong> in a course you are taking titled <strong>${$course.title}</strong></p>
      `;
  };
  function handleModalClose() {
    isGradeWithAI = false;
    goto($page.url.pathname);
  }
  function updateStatus({ submissionId: submissionId2, prevStatusId, nextStatusId, total }) {
    let itemToWithNewStatus;
    const { items } = sections[prevStatusId - 1];
    sections[prevStatusId - 1].items = items?.filter((item) => {
      if (item.id === submissionId2) {
        itemToWithNewStatus = Object.assign(item);
        if (itemToWithNewStatus) {
          itemToWithNewStatus.statusId = nextStatusId;
        }
        return false;
      }
      return true;
    });
    if (itemToWithNewStatus) {
      sections[nextStatusId - 1].items = [...sections[nextStatusId - 1].items, itemToWithNewStatus];
    }
    if (itemToWithNewStatus) {
      submissionIdData[itemToWithNewStatus.id] = {
        ...submissionIdData[itemToWithNewStatus.id],
        statusId: itemToWithNewStatus.statusId
      };
      notifyStudent(submissionIdData[itemToWithNewStatus.id]);
      updateSubmission({
        id: itemToWithNewStatus.id,
        status_id: itemToWithNewStatus.statusId,
        total
      }).then((res) => console.log("Updated submission", res));
    }
  }
  async function handleDeleteSubmission(id, statusId) {
    const { items } = sections[statusId - 1];
    sections[statusId - 1].items = items?.filter((item) => {
      return item.id === id ? false : true;
    });
    submissionIdData[id] = void 0;
    const { error } = await deleteSubmission(id);
    if (error) {
      console.error("Error deleting submission", error);
      snackbar.error("course.navItem.submissions.grading_modal.delete_error");
      return;
    }
    snackbar.success("course.navItem.submissions.grading_modal.delete_success");
    handleModalClose();
  }
  async function handleSave(submission) {
    isSaving = true;
    const { questionAnswerByPoint, questionAnswers, feedback } = submission;
    let totalPoints = 0;
    for (const questionId in questionAnswerByPoint) {
      if (Object.prototype.hasOwnProperty.call(questionAnswerByPoint, questionId)) {
        const questionAnswer = questionAnswers.find((answer) => answer.question_id == questionId);
        const point = questionAnswerByPoint[questionId];
        totalPoints += parseInt(point, 10);
        const qaResponse = await updateQuestionAnswer({ point }, { id: questionAnswer?.id });
        if (qaResponse.error) {
          console.error("Error saving", qaResponse.error);
          snackbar.error(`snackbar.something`);
          return;
        }
      }
    }
    await updateSubmission({
      id: submissionId,
      total: totalPoints,
      feedback
    });
    snackbar.success("snackbar.submissions.success.grading");
    isSaving = false;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const query = new URLSearchParams($page.url.search);
        submissionId = query.get("submissionId") ?? "";
        openExercise = !!submissionId && submissionIdData[submissionId];
      }
    }
    $$rendered = `${validate_component(MarkExerciseModal, "MarkExerciseModal").$$render(
      $$result,
      {
        onClose: handleModalClose,
        data: submissionIdData[submissionId] || {},
        handleSave,
        updateStatus,
        deleteSubmission: handleDeleteSubmission,
        isSaving,
        open: openExercise,
        isGradeWithAI
      },
      {
        open: ($$value) => {
          openExercise = $$value;
          $$settled = false;
        },
        isGradeWithAI: ($$value) => {
          isGradeWithAI = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(CourseContainer, "CourseContainer").$$render(
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
          return `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
            default: () => {
              return `${validate_component(PageNav, "PageNav").$$render(
                $$result,
                {
                  title: $t("course.navItem.submissions.title")
                },
                {},
                {}
              )} ${validate_component(PageBody, "PageBody").$$render(
                $$result,
                {
                  width: "w-full max-w-6xl md:w-11/12 overflow-x-auto"
                },
                {},
                {
                  default: () => {
                    return `<div class="flex items-center w-full">${each(sections, ({ id, title, items }, idx) => {
                      return `<div class="section rounded-md bg-gray-100 dark:bg-black border border-gray-50 dark:border-neutral-600 p-3 h-80 mr-3 overflow-hidden svelte-1j77sks"><div class="flex items-center mb-2">${validate_component(Chip, "Chip").$$render(
                        $$result,
                        {
                          value: items.length,
                          className: "bg-set dark:bg-neutral-800"
                        },
                        {},
                        {}
                      )} <p class="dark:text-white ml-2 font-bold">${escape(title)}</p></div> ${`<div class="content pr-2 overflow-y-auto mb-3 svelte-1j77sks">${each(items, (item) => {
                        return `<div class="${escape(item.isEarly ? "border-none" : "border border-red-700", true) + " w-full my-2 mx-0 rounded-md bg-white dark:bg-neutral-800 py-3 px-3"}"><a class="flex w-full items-center cursor-pointer text-black mb-2"${add_attribute("href", `${$page.url.pathname}?submissionId=${item.id}`, 0)}><img alt="Student avatar" class="block rounded-full h-6 w-6"${add_attribute("src", item.student.avatar_url, 0)}> <p class="dark:text-white ml-2 text-sm">${escape(item.student.username)} </p></a> <a class="text-primary-700 text-md font-bold" href="${escape($page.url.pathname, true) + "?submissionId=" + escape(item.id, true)}">${escape(item.exercise.title)}</a> <a class="flex items-center no-underline hover:underline text-black my-2" href="${escape($page.url?.pathname?.replace("submissions", "lessons"), true) + "/" + escape(item.lesson.id, true) + "/exercises/" + escape(item.exercise.id, true)}"><p class="dark:text-white text-grey text-sm">#${escape(item.lesson.title)} </p></a> <p class="dark:text-white text-gray-500 text-xs">${escape(item.submittedAt)}</p>  </div>`;
                      })} </div>`} </div>`;
                    })}</div>`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_course();
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c8cb6f14.js.map
