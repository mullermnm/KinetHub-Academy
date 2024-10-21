import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, a as add_attribute } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { A as AudioConsole } from './AudioConsole-151cda47.js';
import 'papaparse';
import { D as Download } from './Download-43b21059.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { B as Box } from './index17-3166eaf0.js';
import { R as ROLE, c as currentOrg } from './org-8fc26a61.js';
import { c as course, g as group, b as lessons } from './store4-ef39175f.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import { g as getLectureNo } from './function-efda068b.js';
import { p as profile } from './user-e923b6d4.js';
import { g as globalStore } from './app-d638cf5d.js';
import { t as t2 } from './translations-90190f83.js';
import 'jspdf';
import 'jspdf-autotable';
import { O as OverflowMenu$1, a as OverflowMenuItem$1 } from './OverflowMenuItem-10e1618e.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './stores-793c1e19.js';
import './Text-e3f4b18b.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './Add-78ef4d23.js';
import './FlashFilled-4a89bd75.js';
import './index9-eea8802c.js';
import './reusableClass-512f4804.js';
import './index2-aea858a5.js';
import './Settings-0a14f57d.js';
import './index15-c5761f1e.js';
import './SkeletonText-d2851876.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './index18-b03e5e10.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './index8-59a07edf.js';
import './index11-4ef8d5a0.js';
import './index12-9c021b5e.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './store2-dc811f17.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "27f7dfbb-4be8-49fc-ab47-f2aacdff6d0a", e._sentryDebugIdIdentifier = "sentry-dbid-27f7dfbb-4be8-49fc-ab47-f2aacdff6d0a");
  } catch (e2) {
  }
}();
const css = {
  code: ".col.svelte-1llk664{text-align:center;padding:5px;width:100px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.br.svelte-1llk664{border-right:1px solid rgba(209, 213, 219, var(--tw-border-opacity))}.box.svelte-1llk664{height:95px}.lesson-number.svelte-1llk664{height:30px}",
  map: null
};
let borderBottomGrey = "border-r-0 border-t-0 border-b border-l-0 border-gray-300";
let borderleftGrey = "border-r-0 border-t-0 border-b-0 border-l border-gray-300";
function calculateStudentTotal(studentExerciseData) {
  if (!studentExerciseData)
    return 0;
  return Object.values(studentExerciseData).reduce((total, point) => total += parseInt(point), 0);
}
function getPageRoles(org) {
  const roles = [1, 2];
  if (org.customization.course.grading) {
    roles.push(3);
  }
  return roles;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_course;
  let $group, $$unsubscribe_group;
  let $profile, $$unsubscribe_profile;
  let $globalStore, $$unsubscribe_globalStore;
  let $lessons, $$unsubscribe_lessons;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  $$unsubscribe_course = subscribe(course, (value) => value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { data } = $$props;
  let students = [];
  let lessonMapping = {};
  let studentMarksByExerciseId = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    students = $globalStore.isStudent ? $group.people.filter((person) => !!person.profile && person.profile.id === $profile.id) : $group.people.filter((person) => !!person.profile && person.role_id === ROLE.STUDENT);
    $$rendered = `${validate_component(CourseContainer, "CourseContainer").$$render(
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
          return `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render(
            $$result,
            {
              allowedRoles: getPageRoles($currentOrg),
              onDenied: () => {
                goto(`/courses/${data.courseId}/lessons?next=true`);
              }
            },
            {},
            {
              default: () => {
                return `${validate_component(PageNav, "PageNav").$$render($$result, { title: $t("course.navItem.marks.title") }, {}, {
                  widget: () => {
                    return `<slot:fragment slot="widget">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                      default: () => {
                        return `${validate_component(OverflowMenu$1, "OverflowMenu").$$render(
                          $$result,
                          {
                            flipped: true,
                            style: "border-radius: 50px",
                            class: "bg-gray-100 dark:bg-neutral-800"
                          },
                          {},
                          {
                            menu: () => {
                              return `<div slot="menu" style="">${`${validate_component(Download, "Download").$$render($$result, {}, {}, {})}`}</div>`;
                            },
                            default: () => {
                              return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                                $$result,
                                {
                                  text: $t("course.navItem.marks.export.csv")
                                },
                                {},
                                {}
                              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                                $$result,
                                {
                                  text: $t("course.navItem.marks.export.pdf")
                                },
                                {},
                                {}
                              )}`;
                            }
                          }
                        )}`;
                      }
                    })}</slot:fragment>`;
                  }
                })} ${validate_component(PageBody, "PageBody").$$render($$result, { width: "w-full max-w-6xl md:w-11/12" }, {}, {
                  default: () => {
                    return `<div id="tableContainer" class="table rounded-md border border-gray-300 w-full"><div class="${"flex items-center " + escape(borderBottomGrey, true) + " svelte-1llk664"}"><div class="box flex items-center p-3 svelte-1llk664"><p class="dark:text-white w-40">${escape($t("course.navItem.marks.student"))}</p></div> ${each($lessons, (lesson, index) => {
                      return `${lessonMapping[lesson.id] ? `<div class="${"box flex flex-col items-center " + escape(borderleftGrey, true) + " svelte-1llk664"}"><p class="dark:text-white col lesson-number svelte-1llk664"${add_attribute("title", lesson.title, 0)}>${escape(getLectureNo(index + 1))}</p> <div class="flex h-full items-center border-r-0 border-t border-b-0 border-l-0 border-gray-300">${each(Object.keys(lessonMapping[lesson.id]), (exerciseId, index2) => {
                        return `<p class="${"col text-sm dark:text-white " + escape(index2 && borderleftGrey, true) + " svelte-1llk664"}"${add_attribute("title", lessonMapping[lesson.id][exerciseId].title, 0)}>${escape(lessonMapping[lesson.id][exerciseId].title)} <span>(${escape(lessonMapping[lesson.id][exerciseId].points)})</span> </p>`;
                      })}</div> </div>` : ``}`;
                    })} <div class="${"box flex items-center " + escape(borderleftGrey, true) + " svelte-1llk664"}"><p class="dark:text-white w-20 text-center">${escape($t("course.navItem.marks.total"))}</p></div></div> ${students.length ? each(students, (student) => {
                      return `<div class="${"flex relative items-center p-3 cursor-pointer " + escape(borderBottomGrey, true) + " svelte-1llk664"}"><div class="w-40 flex items-center"><img alt="Student avatar"${add_attribute("src", student.profile.avatar_url, 0)} class="w-8 h-8 rounded-full mr-2"> <div class="text-sm"><p class="dark:text-white font-semibold">${escape(student.profile.fullname)}</p> <p class="dark:text-white">${escape(`${student.assigned_student_id ? "#" + student.assigned_student_id : "-"}`)}</p> </div></div> ${each($lessons, (lesson) => {
                        return `${lessonMapping[lesson.id] ? `<div class="flex items-center">${each(Object.keys(lessonMapping[lesson.id]), (exerciseId) => {
                          return `<p class="dark:text-white col svelte-1llk664">${escape(studentMarksByExerciseId[student.id] ? studentMarksByExerciseId[student.id][exerciseId] || "-" : "-")} </p>`;
                        })} </div>` : ``}`;
                      })} <div class="w-20 flex items-center"><div class="text-sm"><p class="dark:text-white col svelte-1llk664">${escape(calculateStudentTotal(studentMarksByExerciseId[student.id]))}</p> </div></div> </div>`;
                    }) : `${validate_component(Box, "Box").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(AudioConsole, "AudioConsoleIcon").$$render($$result, { size: 32, class: "carbon-icon w-80" }, {}, {})} <h3 class="text-3xl text-gray-500 dark:text-white">${escape($t("course.navItem.marks.no_student"))}</h3> `;
                      }
                    })}`}</div>`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_course();
  $$unsubscribe_group();
  $$unsubscribe_profile();
  $$unsubscribe_globalStore();
  $$unsubscribe_lessons();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5ad0f8a4.js.map
