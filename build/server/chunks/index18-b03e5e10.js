import { g as get_store_value } from './utils-26d532f8.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import { i as isOrgAdmin } from './org-8fc26a61.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5fb6d178-1bac-4e25-8cb5-04de7232317e", e._sentryDebugIdIdentifier = "sentry-dbid-5fb6d178-1bac-4e25-8cb5-04de7232317e");
  } catch (e2) {
  }
}();
function isUUID(uuid) {
  let s = "" + uuid;
  const m = s.match(
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
  );
  if (m === null) {
    return false;
  }
  return true;
}
const QUESTION_TYPE = {
  RADIO: 1,
  CHECKBOX: 2,
  TEXTAREA: 3
};
const QUESTION_TYPES = [
  {
    id: QUESTION_TYPE.RADIO,
    label: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.single"
  },
  {
    id: QUESTION_TYPE.CHECKBOX,
    label: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.multiple"
  },
  {
    id: QUESTION_TYPE.TEXTAREA,
    label: "course.navItem.lessons.exercises.all_exercises.edit_mode.question_types.paragraph"
  }
];
const QUESTION_TEMPLATE = {
  id: 1,
  title: "",
  type: QUESTION_TYPE.RADIO,
  answers: [],
  options: [
    {
      id: 1,
      value: null
    }
  ]
};
var STATUS = /* @__PURE__ */ ((STATUS2) => {
  STATUS2[STATUS2["ACTIVE"] = 0] = "ACTIVE";
  STATUS2[STATUS2["ARCHIVE"] = 1] = "ARCHIVE";
  STATUS2[STATUS2["DELETED"] = 2] = "DELETED";
  return STATUS2;
})(STATUS || {});
async function fetchCourses(profileId, orgId) {
  if (!orgId || !profileId)
    return;
  const match = {};
  if (!get_store_value(isOrgAdmin)) {
    match.member_profile_id = profileId;
  }
  const { data: allCourses } = await supabase.rpc("get_courses", {
    org_id_arg: orgId,
    profile_id_arg: profileId
  }).match(match);
  console.log(`allCourses`, allCourses);
  if (!Array.isArray(allCourses)) {
    return {
      allCourses: []
    };
  }
  return { allCourses };
}
const SLUG_QUERY = `
  id,
  title,
  type,
  description,
  overview,
  logo,
  is_published,
  slug,
  cost,
  version,
  currency,
  metadata,
  is_certificate_downloadable,
  certificate_theme,
  lesson_section(id, title, order),
  lessons:lesson(
    id, title, order, section_id
  )
`;
const ID_QUERY = `
  id,
  title,
  type,
  description,
  overview,
  logo,
  is_published,
  version,
  group(*,
    members:groupmember(*,
      profile(*)
    )
  ),
  slug,
  cost,
  currency,
  metadata,
  is_certificate_downloadable,
  certificate_theme,
  lesson_section(id, title, order, created_at),
  lessons:lesson(
    id, title, public, lesson_at, is_unlocked, order, created_at, section_id,
    note, videos, slide_url, call_url, totalExercises:exercise(count), totalComments:lesson_comment(count),
    profile:teacher_id(id, avatar_url, fullname),
    lesson_completion(id, profile_id, is_complete)
  ),
  attendance:group_attendance(*),
  polls:apps_poll(status)
`;
async function fetchCourse(courseId, slug) {
  const match = {};
  if (slug) {
    match.slug = slug;
  } else {
    match.id = courseId;
  }
  match.status = STATUS[STATUS.ACTIVE];
  const response = await supabase.from("course").select(slug ? SLUG_QUERY : ID_QUERY).match(match).single();
  const { data, error } = response;
  console.log(`error`, error);
  console.log(`data`, data);
  if (!data || error) {
    console.log(`data`, data);
    console.log(`fetchCourse => error`, error);
    return { data, error };
  }
  return {
    data,
    error
  };
}
async function uploadAvatar(courseId, avatar) {
  const filename = `course/${courseId + Date.now()}.webp`;
  let logo;
  const { data } = await supabase.storage.from("avatars").upload(filename, avatar, {
    cacheControl: "3600",
    upsert: false
  });
  if (data) {
    const { data: data2 } = supabase.storage.from("avatars").getPublicUrl(filename);
    if (!data2.publicUrl)
      return;
    logo = data2.publicUrl;
  }
  return logo;
}
async function updateCourse(courseId, avatar, course) {
  if (avatar && courseId) {
    const filename = `course/${courseId + Date.now()}.webp`;
    const { data } = await supabase.storage.from("avatars").upload(filename, avatar, {
      cacheControl: "3600",
      upsert: false
    });
    if (data) {
      const { data: response } = supabase.storage.from("avatars").getPublicUrl(filename);
      if (!response.publicUrl)
        return;
      course.logo = response.publicUrl;
    }
  }
  await supabase.from("course").update(course).match({ id: courseId });
  return course.logo;
}
async function deleteCourse(courseId) {
  return await supabase.from("course").update({ status: "DELETED" }).match({ id: courseId });
}
function addGroupMember(member) {
  return supabase.from("groupmember").insert(member).select();
}
function deleteGroupMember(groupMemberId) {
  return supabase.from("groupmember").delete().match({ id: groupMemberId });
}
function fetchLesson(lessonId) {
  return supabase.from("lesson").select(
    `id,
      title,
      note,
      videos,
      slide_url,
      call_url,
      totalExercises:exercise(count),
      totalComments:lesson_comment(count),
      lesson_completion(id, profile_id, is_complete),
      lesson_language(id, content, locale)
    `
  ).eq("id", lessonId).single();
}
function fetchLesssonLanguageHistory(lessonId, locale, endRange) {
  return supabase.from("lesson_versions").select("*").range(0, endRange).eq("lesson_id", lessonId).eq("locale", locale).order("timestamp", { ascending: false });
}
function createLesson(lesson) {
  return supabase.from("lesson").insert(lesson).select();
}
function createLessonSection(section) {
  return supabase.from("lesson_section").insert(section).select();
}
function updateLessonSection(section, sectionId) {
  return supabase.from("lesson_section").update({ ...section, id: void 0 }).match({ id: sectionId });
}
async function updateLesson(lesson, lessonId) {
  return supabase.from("lesson").update({ ...lesson, id: void 0 }).match({ id: lessonId });
}
function deleteLesson(lessonId) {
  return supabase.from("lesson").delete().match({ id: lessonId });
}
function createExercise(exercise) {
  return supabase.from("exercise").insert(exercise).select();
}
function isNew(item) {
  return isNaN(item);
}
async function createExerciseFromTemplate(lessonId, template) {
  const { data, error } = await createExercise({
    title: template.title,
    description: template.description,
    lesson_id: lessonId
  });
  if (error) {
    console.error("Something went wrong", error);
    return;
  }
  const { id } = data[0] || {};
  if (!id) {
    console.error("Something went wrong, no id", error);
    return;
  }
  await upsertExercise(template.questionnaire, id);
  return data[0];
}
async function upsertExercise(questionnaire, exerciseId) {
  const {
    questions,
    title,
    description,
    due_by,
    is_title_dirty,
    is_description_dirty,
    is_due_by_dirty
  } = questionnaire;
  if (is_description_dirty || is_title_dirty || is_due_by_dirty) {
    await supabase.from("exercise").update({
      title,
      description,
      due_by
    }).match({ id: exerciseId });
  }
  const updatedQuestions = [];
  for (const question of questions) {
    const { title: title2, id, name, question_type, options, deleted_at, order, points, is_dirty } = question;
    if (deleted_at) {
      if (!isNew(id)) {
        await supabase.from("option").delete().match({ question_id: id });
        await supabase.from("question_answer").delete().match({ question_id: id });
        const { error } = await supabase.from("question").delete().match({ id });
        if (error) {
          console.error("Cannot delete this question", error);
          continue;
        }
      }
      continue;
    }
    const newQuestion = {
      id: isNew(id) ? void 0 : id,
      name: isNew(id) ? void 0 : name,
      title: title2,
      points,
      order,
      question_type_id: question_type.id,
      exercise_id: exerciseId
    };
    let questionSupabaseRes;
    if (is_dirty || isNew(id)) {
      const res = await supabase.from("question").upsert(newQuestion).select();
      if (res.error) {
        console.error(`Upsert question`, res.error);
      }
      questionSupabaseRes = Array.isArray(res.data) ? res.data[0] : null;
    } else {
      questionSupabaseRes = Object.assign(newQuestion);
    }
    if (questionSupabaseRes) {
      const { question_type_id, id: id2, name: name2, order: order2 } = questionSupabaseRes;
      delete newQuestion.question_type_id;
      newQuestion.question_type = { id: question_type_id, label: question_type.label || "" };
      newQuestion.id = id2;
      newQuestion.name = name2;
      newQuestion.order = order2;
      newQuestion.options = [];
      if (QUESTION_TYPE.TEXTAREA !== question_type_id) {
        for (const option of options) {
          const { deleted_at: deleted_at2, is_dirty: is_dirty2 } = option;
          if (deleted_at2) {
            if (!isNew(option.id)) {
              supabase.from("option").delete().match({ id: option.id });
            }
            continue;
          }
          const newOption = {
            ...option,
            is_dirty: void 0,
            id: isNew(option.id) ? void 0 : option.id,
            value: isUUID(option.value) ? option.value : void 0,
            // this value is of UUID type
            question_id: newQuestion.id
          };
          if (is_dirty2 || isNew(option.id)) {
            const { data } = await supabase.from("option").upsert(newOption).select();
            if (Array.isArray(data)) {
              newQuestion.options.push(data[0]);
            }
          } else {
            newQuestion.options.push(newOption);
          }
        }
      }
      updatedQuestions.push(newQuestion);
    }
  }
  return updatedQuestions;
}
async function deleteExercise(questions, exerciseId) {
  for (const question of questions) {
    const { id } = question;
    await supabase.from("option").delete().match({ question_id: id });
    await supabase.from("question_answer").delete().match({ question_id: id });
    await supabase.from("question").delete().match({ id });
  }
  await supabase.from("submission").delete().match({ exercise_id: exerciseId });
  await supabase.from("exercise").delete().match({ id: exerciseId });
}

export { QUESTION_TYPES as Q, updateLessonSection as a, createLessonSection as b, createLesson as c, deleteLesson as d, updateCourse as e, fetchCourse as f, uploadAvatar as g, fetchLesson as h, createExerciseFromTemplate as i, createExercise as j, fetchLesssonLanguageHistory as k, QUESTION_TEMPLATE as l, QUESTION_TYPE as m, upsertExercise as n, isUUID as o, deleteExercise as p, deleteGroupMember as q, deleteCourse as r, addGroupMember as s, fetchCourses as t, updateLesson as u };
//# sourceMappingURL=index18-b03e5e10.js.map
