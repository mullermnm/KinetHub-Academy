import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from './ssr-10c5b872.js';
import { B as Box } from './index17-3166eaf0.js';
import { L as Loader, C as Card } from './index16-68b7dc8d.js';
import { i as isMobile } from './useMobile-47eebf4e.js';
import { t as t2 } from './translations-90190f83.js';
import { S as StructuredList$1, a as StructuredListHead$1, b as StructuredListRow$1, c as StructuredListCell$1, d as StructuredListBody$1 } from './StructuredListRow-3dfbce79.js';
import { T as Tag$1 } from './Tag-37c50bfd.js';
import { O as OverflowMenu$1, a as OverflowMenuItem$1 } from './OverflowMenuItem-10e1618e.js';
import { C as CoursesEmptyIcon } from './CoursesEmptyIcon-3e8d3605.js';
import { c as courseMetaDeta } from './store5-4ab63ff0.js';
import { g as globalStore } from './app-d638cf5d.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e6251021-7d91-4897-acb6-9d1206c09a86", e._sentryDebugIdIdentifier = "sentry-dbid-e6251021-7d91-4897-acb6-9d1206c09a86");
  } catch (e2) {
  }
}();
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { id = "" } = $$props;
  let { title = "" } = $$props;
  let { type = "" } = $$props;
  let { description = "" } = $$props;
  let { isPublished = false } = $$props;
  let { totalLessons = 0 } = $$props;
  let { totalStudents = 0 } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.isPublished === void 0 && $$bindings.isPublished && isPublished !== void 0)
    $$bindings.isPublished(isPublished);
  if ($$props.totalLessons === void 0 && $$bindings.totalLessons && totalLessons !== void 0)
    $$bindings.totalLessons(totalLessons);
  if ($$props.totalStudents === void 0 && $$bindings.totalStudents && totalStudents !== void 0)
    $$bindings.totalStudents(totalStudents);
  $$unsubscribe_isMobile();
  $$unsubscribe_t();
  return `${validate_component(StructuredListRow$1, "StructuredListRow").$$render($$result, { label: true, for: "row-" + id }, {}, {
    default: () => {
      return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="font-semibold">${escape(title)}</p>`;
        }
      })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="line-clamp-2">${escape(description)}</p>`;
        }
      })} ${!$isMobile ? `${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(type)}`;
        }
      })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(totalLessons)}`;
        }
      })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(totalStudents)}`;
        }
      })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Tag$1, "Tag").$$render(
            $$result,
            {
              class: "break-normal",
              type: isPublished ? "green" : "cool-gray"
            },
            {},
            {
              default: () => {
                return `${isPublished ? `${escape($t("courses.course_card.published"))}` : `${escape($t("courses.course_card.unpublished"))}`}`;
              }
            }
          )}`;
        }
      })}` : ``} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { id: "course-list", flipped: true }, {}, {
            default: () => {
              return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: $t("courses.course_card.context_menu.clone")
                },
                {},
                {}
              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: $t("courses.course_card.context_menu.share")
                },
                {},
                {}
              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  text: $t("courses.course_card.context_menu.invite")
                },
                {},
                {}
              )} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render(
                $$result,
                {
                  danger: true,
                  text: $t("courses.course_card.context_menu.delete")
                },
                {},
                {}
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
function calcProgressRate(progressRate, totalLessons) {
  if (!progressRate || !totalLessons) {
    return 0;
  }
  return Math.round(progressRate / totalLessons * 100);
}
const Courses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $courseMetaDeta, $$unsubscribe_courseMetaDeta;
  let $globalStore, $$unsubscribe_globalStore;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_courseMetaDeta = subscribe(courseMetaDeta, (value) => $courseMetaDeta = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  let { courses = [] } = $$props;
  let { emptyTitle = $t("courses.course_card.empty_title") } = $$props;
  let { emptyDescription = $t("courses.course_card.empty_description") } = $$props;
  let { isExplore = false } = $$props;
  if ($$props.courses === void 0 && $$bindings.courses && courses !== void 0)
    $$bindings.courses(courses);
  if ($$props.emptyTitle === void 0 && $$bindings.emptyTitle && emptyTitle !== void 0)
    $$bindings.emptyTitle(emptyTitle);
  if ($$props.emptyDescription === void 0 && $$bindings.emptyDescription && emptyDescription !== void 0)
    $$bindings.emptyDescription(emptyDescription);
  if ($$props.isExplore === void 0 && $$bindings.isExplore && isExplore !== void 0)
    $$bindings.isExplore(isExplore);
  $$unsubscribe_t();
  $$unsubscribe_courseMetaDeta();
  $$unsubscribe_globalStore();
  return ` <div${add_attribute("class", `w-full my-4 mx-auto`, 0)}>${$courseMetaDeta.isLoading ? `<section${add_attribute(
    "class",
    `${$courseMetaDeta.isLoading || courses ? "cards-container" : ""} `,
    0
  )}>${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CardLoader").$$render($$result, {}, {}, {})}</section>` : `${$courseMetaDeta.view === "list" ? `${validate_component(StructuredList$1, "StructuredList").$$render($$result, { selection: true, class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(StructuredListHead$1, "StructuredListHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(StructuredListRow$1, "StructuredListRow").$$render($$result, { head: true }, {}, {
            default: () => {
              return `${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape($t("courses.course_card.list_view.title"))}`;
                }
              })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape($t("courses.course_card.list_view.description"))}`;
                }
              })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape($t("courses.course_card.list_view.type"))}`;
                }
              })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape($t("courses.course_card.list_view.lessons"))}`;
                }
              })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape($t("courses.course_card.list_view.students"))}`;
                }
              })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape($t("courses.course_card.list_view.published"))}`;
                }
              })} ${validate_component(StructuredListCell$1, "StructuredListCell").$$render($$result, { head: true }, {}, {
                default: () => {
                  return `${escape("")}`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(StructuredListBody$1, "StructuredListBody").$$render($$result, {}, {}, {
        default: () => {
          return `${each(courses, (courseData) => {
            return `${validate_component(List, "List").$$render(
              $$result,
              {
                id: courseData.id,
                title: courseData.title,
                type: $t(`course.navItem.settings.${courseData.type.toLowerCase()}`),
                description: courseData.description,
                isPublished: courseData.is_published,
                totalLessons: courseData.total_lessons,
                totalStudents: courseData.total_students
              },
              {},
              {}
            )}`;
          })}`;
        }
      })}`;
    }
  })}` : `<section${add_attribute(
    "class",
    `${$courseMetaDeta.isLoading || courses ? "cards-container" : ""} `,
    0
  )}>${each(courses, (courseData) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        id: courseData.id,
        slug: courseData.slug,
        bannerImage: courseData.logo || "/images/classroomio-course-img-template.jpg",
        title: courseData.title,
        description: courseData.description,
        isPublished: courseData.is_published,
        cost: courseData.cost,
        type: courseData.type,
        currency: courseData.currency,
        totalLessons: courseData.total_lessons,
        totalStudents: courseData.total_students,
        isLMS: $globalStore.isOrgSite,
        isExplore,
        progressRate: calcProgressRate(courseData.progress_rate, courseData.total_lessons)
      },
      {},
      {}
    )}`;
  })}</section>`}`}</div> ${!$courseMetaDeta.isLoading && !courses.length ? `${validate_component(Box, "Box").$$render($$result, { className: "w-full" }, {}, {
    default: () => {
      return `${validate_component(CoursesEmptyIcon, "CoursesEmptyIcon").$$render($$result, {}, {}, {})} <h3 class="dark:text-white text-2xl my-5">${escape(emptyTitle)}</h3> <p class="dark:text-white w-1/3 text-center">${escape(emptyDescription)}</p>`;
    }
  })}` : ``}`;
});

export { Courses as C };
//# sourceMappingURL=index31-c26626f1.js.map
