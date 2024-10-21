import { g as getSupabase } from './supabase-cbc58bc2.js';
import get from 'lodash/get.js';
import './_sentry-release-injection-file-6be6a010.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f9c6ad06-10ab-4493-9636-b96a0d27676e", e._sentryDebugIdIdentifier = "sentry-dbid-f9c6ad06-10ab-4493-9636-b96a0d27676e");
  } catch (e2) {
  }
}();
const supabase = getSupabase();
async function getGenericData(orgSlug) {
  const { data } = await supabase.from("course").select(
    `
	    id,
	    is_published,
	    group:group_id!inner(
	      organization!inner(
	        avatar_url,
	        siteName
	      )
	    )
	  `
  ).eq("group.organization.siteName", orgSlug);
  const result = data || [];
  console.log("courseData", result);
  return {
    isCoursePublished: result.some((c) => c.is_published === true),
    isCourseCreated: result.length > 0,
    orgHasAvatarUrl: !!get(result[0], "group.organization.avatar_url", ""),
    courseData: result
  };
}
async function getIsLessonCreated(orgSlug) {
  const { data } = await supabase.from("lesson").select(
    `
	    id,
	    course:course_id!inner(
	      group:group_id!inner(
	        organization!inner(
	          siteName
	        )
	      )
	    )
	  `
  ).eq("course.group.organization.siteName", orgSlug);
  console.log("lessonsData", data);
  return {
    isLessonCreated: Array.isArray(data) ? data.length > 0 : false,
    lessonData: data
  };
}
async function getIsExerciseCreated(orgSlug) {
  const { data } = await supabase.from("exercise").select(
    `
	    id,
	    lesson:lesson_id!inner(
	      course:course_id!inner(
	        group:group_id!inner(
	          organization!inner(
	            siteName
	          )
	        )
	      )
	    )
	  `
  ).eq("lesson.course.group.organization.siteName", orgSlug);
  return Array.isArray(data) ? data?.length > 0 : false;
}
const load = async ({ params = { slug: "" } }) => {
  const { isCourseCreated, isCoursePublished, orgHasAvatarUrl, courseData } = await getGenericData(
    params.slug
  );
  const { isLessonCreated, lessonData } = await getIsLessonCreated(params.slug);
  const isExerciseCreated = await getIsExerciseCreated(params.slug);
  const data = [
    {
      id: "profile",
      title: "setup.personal_profile.title",
      desc: "setup.personal_profile.desc",
      is_completed: false,
      button_label: "setup.personal_profile.button_label"
    },
    {
      id: "organization",
      title: "setup.organization_profile.title",
      desc: "setup.organization_profile.desc",
      is_completed: orgHasAvatarUrl,
      button_label: "setup.organization_profile.button_label"
    },
    {
      id: "course",
      title: "setup.course.title",
      desc: "setup.course.desc",
      is_completed: isCourseCreated,
      button_label: "setup.course.button_label"
    },
    {
      id: "lesson",
      title: "setup.lesson.title",
      desc: "setup.lesson.desc",
      is_completed: isLessonCreated,
      button_label: "setup.lesson.button_label"
    },
    {
      id: "exercise",
      title: "setup.exercise.title",
      desc: "setup.exercise.desc",
      is_completed: isExerciseCreated,
      button_label: "setup.exercise.button_label"
    },
    {
      id: "publish",
      title: "setup.publish_course.title",
      desc: "setup.publish_course.desc",
      is_completed: isCoursePublished,
      button_label: "setup.publish_course.button_label"
    }
  ];
  return {
    orgSiteName: params.slug,
    setup: data,
    courses: courseData,
    lessons: lessonData
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 47;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fa196b43.js')).default;
const universal_id = "src/routes/org/[slug]/setup/+page.ts";
const imports = ["_app/immutable/nodes/47.b303c830.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/get.c5ebb55c.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/isSymbol.9bd2fb8d.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/Text.40bcd65a.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/CheckmarkOutline.0b1688ef.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/translations.f943b7b3.js"];
const stylesheets = ["_app/immutable/assets/Text.2eef1a2a.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=47-64be3a03.js.map
