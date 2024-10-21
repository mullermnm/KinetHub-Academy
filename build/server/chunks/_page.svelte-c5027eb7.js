import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each } from './ssr-10c5b872.js';
import { A as AudioConsole } from './AudioConsole-151cda47.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { B as Box } from './index17-3166eaf0.js';
import { c as course, g as group, b as lessons } from './store4-ef39175f.js';
import { g as getLectureNo } from './function-efda068b.js';
import { R as ROLE } from './org-8fc26a61.js';
import './config-8c22ba68.js';
import './_sentry-release-injection-file-6be6a010.js';
import { w as writable } from './index2-aea858a5.js';
import { p as profile } from './user-e923b6d4.js';
import { g as globalStore } from './app-d638cf5d.js';
import { t as t2 } from './translations-90190f83.js';
import { C as Checkbox$1 } from './Checkbox-b33da6d1.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import { S as StructuredList$1, a as StructuredListHead$1, b as StructuredListRow$1, c as StructuredListCell$1, d as StructuredListBody$1 } from './StructuredListRow-3dfbce79.js';
import { P as Pagination$1 } from './Pagination-ecdae900.js';
import './navigation-cd282f65.js';
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
import './store2-dc811f17.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './Close-73e0af44.js';
import './CaretRight-a9e49169.js';
import './Button-f9944a26.js';
import './SelectItem-00c29785.js';
import './ChevronDown-d5b93e8c.js';
import './WarningAltFilled-13a554ec.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4a1f0d43-f511-43fc-92f3-c10ea75d2ddb", e._sentryDebugIdIdentifier = "sentry-dbid-4a1f0d43-f511-43fc-92f3-c10ea75d2ddb");
  } catch (e2) {
  }
}();
const attendance = writable({});
function searchStudents(query, _students) {
  const lowercaseQuery = query.toLowerCase();
  return _students.filter((student) => student.profile?.fullname?.toLowerCase()?.includes(lowercaseQuery));
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_course;
  let $group, $$unsubscribe_group;
  let $profile, $$unsubscribe_profile;
  let $globalStore, $$unsubscribe_globalStore;
  let $attendance, $$unsubscribe_attendance;
  let $t, $$unsubscribe_t;
  let $lessons, $$unsubscribe_lessons;
  $$unsubscribe_course = subscribe(course, (value) => value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_attendance = subscribe(attendance, (value) => $attendance = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_lessons = subscribe(lessons, (value) => $lessons = value);
  let { data } = $$props;
  let students = [];
  let searchValue = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
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
          return `${validate_component(PageNav, "PageNav").$$render(
            $$result,
            {
              title: $t("course.navItem.attendance.title")
            },
            {},
            {}
          )} ${validate_component(PageBody, "PageBody").$$render($$result, { width: "w-full max-w-6xl md:w-11/12" }, {}, {
            default: () => {
              return `<section class="flex items-center mx-2 lg:mx-9 my-5"><div class="flex flex-col lg:flex-row items-start gap-2 lg:items-center justify-between w-full"><div class="flex"><p class="flex items-center mr-5">${validate_component(Checkbox$1, "Checkbox").$$render($$result, { checked: true, disabled: true }, {}, {})} ${escape($t("course.navItem.attendance.present"))}</p> <p class="flex items-center">${validate_component(Checkbox$1, "Checkbox").$$render($$result, { disabled: true }, {}, {})} ${escape($t("course.navItem.attendance.absent"))}</p></div> <div>${validate_component(Search$1, "Search").$$render(
                $$result,
                {
                  class: "dark:text-slate-950",
                  placeholder: $t("course.navItem.attendance.search_students"),
                  value: searchValue
                },
                {
                  value: ($$value) => {
                    searchValue = $$value;
                    $$settled = false;
                  }
                },
                {}
              )}</div></div></section> <section class="my-5 mx-2 lg:mx-9">${validate_component(StructuredList$1, "StructuredList").$$render($$result, { class: "m-0 relative" }, {}, {
                default: () => {
                  return ` ${validate_component(StructuredListHead$1, "StructuredListHead").$$render($$result, { class: "bg-primary-100" }, {}, {
                    default: () => {
                      return `${validate_component(StructuredListRow$1, "StructuredListRow").$$render($$result, { head: true, class: "mx-7" }, {}, {
                        default: () => {
                          return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render(
                            $$result,
                            {
                              head: true,
                              class: "text-primary-600 py-3"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape($t("course.navItem.attendance.student"))}`;
                              }
                            }
                          )} ${each($lessons, (lesson, index) => {
                            return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render(
                              $$result,
                              {
                                head: true,
                                class: "text-primary-600 py-3"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape($t("course.navItem.attendance.lesson"))} 0${escape(getLectureNo(index + 1))}`;
                                }
                              }
                            )}`;
                          })}`;
                        }
                      })}`;
                    }
                  })} ${each(searchStudents(searchValue, students), (student) => {
                    return `${validate_component(StructuredListBody$1, "StructuredListBody").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(StructuredListRow$1, "StructuredListRow").$$render($$result, {}, {}, {
                          default: () => {
                            return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
                              default: () => {
                                return `<div class="w-1/4 flex items-center"><p class="dark:text-white font-semibold">${escape(student.profile.fullname)} </p></div> `;
                              }
                            })} ${each($lessons, (lesson) => {
                              return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { class: "" }, {}, {
                                default: () => {
                                  return `${validate_component(Checkbox$1, "Checkbox").$$render(
                                    $$result,
                                    {
                                      class: $globalStore.isStudent ? "cursor-not-allowed" : "",
                                      disabled: $globalStore.isStudent,
                                      checked: $attendance[student.id] ? $attendance[student.id][lesson.id] ? $attendance[student.id][lesson.id].is_present : false : false
                                    },
                                    {},
                                    {}
                                  )} `;
                                }
                              })}`;
                            })} `;
                          }
                        })} `;
                      }
                    })}`;
                  })}`;
                }
              })} ${students.length === 0 ? `${validate_component(Box, "Box").$$render($$result, { className: "h-[300px] w-full" }, {}, {
                default: () => {
                  return `${validate_component(AudioConsole, "AudioConsoleIcon").$$render($$result, { size: 32, class: "carbon-icon w-80" }, {}, {})} <h3 class="text-3xl text-gray-500 dark:text-white text-center">${escape($t("course.navItem.attendance.no_student"))}</h3>`;
                }
              })}` : ``} ${students.length !== 0 ? `${validate_component(Pagination$1, "Pagination").$$render($$result, { totalItems: 10, pageSizes: [10, 15, 20] }, {}, {})}` : ``}</section>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_course();
  $$unsubscribe_group();
  $$unsubscribe_profile();
  $$unsubscribe_globalStore();
  $$unsubscribe_attendance();
  $$unsubscribe_t();
  $$unsubscribe_lessons();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c5027eb7.js.map
