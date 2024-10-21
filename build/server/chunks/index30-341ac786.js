import { s as subscribe, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { V as Vote } from './index13-ea3bca06.js';
import { B as Box } from './index17-3166eaf0.js';
import { C as CoursesEmptyIcon } from './CoursesEmptyIcon-3e8d3605.js';
import { c as currentOrg, f as currentOrgPath } from './org-8fc26a61.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { c as calDateDiff } from './date-30c46a0e.js';
import { t as fetchCourses } from './index18-b03e5e10.js';
import { p as profile } from './user-e923b6d4.js';
import { t as t2 } from './translations-90190f83.js';
import { a as courses } from './store5-4ab63ff0.js';
import { S as Search$1 } from './Search-b1d61a12.js';
import { D as Dropdown$1 } from './Dropdown-08db662d.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5455af8d-3f3d-4c6b-b496-d265c0defc26", e._sentryDebugIdIdentifier = "sentry-dbid-5455af8d-3f3d-4c6b-b496-d265c0defc26");
  } catch (e2) {
  }
}();
const AddComment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z"></path><path d="M17 9L15 9 15 13 11 13 11 15 15 15 15 19 17 19 17 15 21 15 21 13 17 13 17 9z"></path></svg>`;
});
const Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[70px] w-full border border-gray-100 dark:border-neutral-600 dark:bg-neutral-800 mx-4 my-2 rounded-md transition ease-in-out relative flex pt-3 px-3"><div class="w-10 flex justify-evenly flex-col px-1 mr-2 rounded-md">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render(
    $$result,
    {
      style: "width: 100%; height: 40%; border-radius: 4px;"
    },
    {},
    {}
  )} ${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render(
    $$result,
    {
      style: "width: 100%; height: 40%; border-radius: 4px;"
    },
    {},
    {}
  )}</div> <div class="w-9/12 mt-1.5 flex justify-evenly flex-col rounded-md"> <div class="w-3/6 h-full">${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      style: "height: 50%; border-radius: 4px;"
    },
    {},
    {}
  )}</div>  ${validate_component(SkeletonText$1, "SkeletonText").$$render(
    $$result,
    {
      style: "width: 10%; height: 50%; border-radius: 4px;"
    },
    {},
    {}
  )}</div> <div class="w-10 justify-evenly flex-col px-1 mt-1.5 ml-auto rounded-md">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render(
    $$result,
    {
      style: "width: 100%; height: 41%; border-radius: 4px;"
    },
    {},
    {}
  )}</div></div>`;
});
const css$1 = {
  code: ".actions.svelte-1n945m1{flex-grow:1}",
  map: null
};
const Space = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="actions svelte-1n945m1"></div>`;
});
const css = {
  code: "h4.svelte-ha2sdg{font-size:16px;font-weight:900;word-break:break-word;overflow-wrap:break-word;margin:0}",
  map: null
};
const Community = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredDiscussions;
  let $profile, $$unsubscribe_profile;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $courses, $$unsubscribe_courses;
  let $t, $$unsubscribe_t;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_courses = subscribe(courses, (value) => $courses = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { isLMS = false } = $$props;
  let isLoading = false;
  let discussions = [];
  let searchValue = "";
  let allCourses = [];
  let selectedId = "";
  async function fetchCommunityQuestions(orgId, profileId) {
    if (!orgId || !profileId)
      return;
    isLoading = true;
    if ($courses.length) {
      allCourses = [...$courses];
    } else {
      const courseResult = await fetchCourses(profileId, orgId) || { allCourses: [] };
      allCourses = courseResult.allCourses;
    }
    const courseIds = allCourses.map((course) => course.id);
    const courseIdsFilter = `(${courseIds.join(",")})`;
    const { data, error } = await supabase.from("community_question").select(`
        organization_id,
        course_id,
        title,
        votes,
        created_at,
        slug,
        comments:community_answer(count),
        author:profile(
          fullname
        ),
        course!inner (
          title
        )
      `).filter("course_id", "in", courseIdsFilter).order("created_at", { ascending: false });
    console.log("data", data);
    console.log("error", error);
    isLoading = false;
    if (error) {
      console.error("Error loading community", error);
      return goto(isLMS ? "/lms" : $currentOrgPath);
    }
    discussions = data?.map((discussion) => ({
      title: discussion.title,
      courseId: discussion.course_id,
      courseTitle: discussion.course?.title,
      slug: discussion.slug,
      author: discussion?.author?.fullname,
      comments: discussion.comments?.[0]?.count || 0,
      votes: discussion.votes,
      createdAt: calDateDiff(discussion.created_at)
    })) || [];
  }
  if ($$props.isLMS === void 0 && $$bindings.isLMS && isLMS !== void 0)
    $$bindings.isLMS(isLMS);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      fetchCommunityQuestions($currentOrg.id, $profile.id);
    }
    filteredDiscussions = discussions.filter((discussion) => discussion.title.toLowerCase().includes(searchValue.toLowerCase()) && (!selectedId || discussion.courseId === selectedId));
    $$rendered = `<div class="flex justify-between">${validate_component(Search$1, "Search").$$render(
      $$result,
      {
        placeholder: $t("community.find_question"),
        searchClass: "mr-2",
        class: " bg-gray-100 dark:bg-neutral-800",
        value: searchValue
      },
      {
        value: ($$value) => {
          searchValue = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Dropdown$1, "Dropdown").$$render(
      $$result,
      {
        class: "w-[25%] h-full",
        size: "xl",
        label: $t("community.ask.select_course"),
        items: [
          { id: "", text: $t("community.all") },
          ...allCourses.map((course) => ({ id: course.id, text: course.title }))
        ],
        selectedId
      },
      {
        selectedId: ($$value) => {
          selectedId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex items-center justify-center lg:justify-start flex-wrap my-4 m-auto border-c rounded bg-gray-100 dark:bg-neutral-800">${isLoading ? `${validate_component(Loader, "CommunityLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CommunityLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CommunityLoader").$$render($$result, {}, {}, {})} ${validate_component(Loader, "CommunityLoader").$$render($$result, {}, {}, {})}` : `${filteredDiscussions.length ? each(filteredDiscussions, (discussion) => {
      return `<div class="w-full flex border-bottom-c p-3">${validate_component(Vote, "Vote").$$render($$result, { value: discussion.votes }, {}, {})} <div class="text-sm flex flex-col gap-y-0.5"><h4 class="mt-0 svelte-ha2sdg"><a class="text-black dark:text-white" href="${escape(isLMS ? "/lms" : $currentOrgPath, true) + "/community/" + escape(discussion.slug, true)}">${escape(discussion.title)} </a></h4> <span class="text-gray-600 dark:text-white">${escape(discussion.author)} asked ${escape(discussion.createdAt)}</span> <a class="m-0" href="${"/courses/" + escape(discussion.courseId, true)}"><span class="text-xs text-primary-200 dark:text-black text-primary-700 p-0">#${escape(discussion.courseTitle)}</span> </a></div> ${validate_component(Space, "Space").$$render($$result, {}, {}, {})} <div class="flex items-center">${validate_component(AddComment, "AddCommentIcon").$$render($$result, { size: 20 }, {}, {})} <span class="ml-1">${escape(discussion.comments)}</span></div> </div>`;
    }) : `${validate_component(Box, "Box").$$render($$result, { className: "w-screen" }, {}, {
      default: () => {
        return `${validate_component(CoursesEmptyIcon, "CoursesEmptyIcon").$$render($$result, {}, {}, {})} <h3 class="dark:text-white text-2xl my-5">${escape($t("community.no_question"))}</h3> <p class="dark:text-white w-1/3 text-center">${escape($t("community.ask_a_question"))}</p> `;
      }
    })}`}`} </div>`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_currentOrg();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_courses();
  $$unsubscribe_t();
  return $$rendered;
});

export { Community as C };
//# sourceMappingURL=index30-341ac786.js.map
