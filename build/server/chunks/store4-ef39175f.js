import { w as writable } from './index2-aea858a5.js';
import { d as deleteLesson, u as updateLesson, c as createLesson, a as updateLessonSection, b as createLessonSection } from './index18-b03e5e10.js';
import { L as LOCALE, C as COURSE_TYPE, a as COURSE_VERSION } from './index15-c5761f1e.js';
import { b as snackbar } from './store2-dc811f17.js';
import { l as lessonValidation } from './validator-27ec1d5c.js';
import './_sentry-release-injection-file-6be6a010.js';
import { R as ROLE } from './org-8fc26a61.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "40c9a52f-f2d4-486e-81b3-419db7659e68", e._sentryDebugIdIdentifier = "sentry-dbid-40c9a52f-f2d4-486e-81b3-419db7659e68");
  } catch (e2) {
  }
}();
const uploadCourseVideoStore = writable({
  isModalOpen: false
});
const lessons = writable([]);
const lessonSections = writable([]);
const lesson = writable({
  id: null,
  locale: LOCALE.EN,
  title: "",
  totalExercises: 0,
  totalComments: 0,
  isSaving: false,
  isFetching: false,
  materials: {
    note: "",
    slide_url: "",
    videos: []
  },
  exercises: [],
  lesson_completion: []
});
const lessonByTranslation = writable({});
const isLessonDirty = writable(false);
async function handleDelete(lessonId) {
  if (!lessonId) {
    return;
  }
  const { error } = await deleteLesson(lessonId);
  if (error) {
    snackbar.error(error.message);
    return console.error("Error deleting course", error);
  }
  lessons.update((_lessons) => _lessons.filter((lesson2) => lesson2.id !== lessonId));
  lessonSections.update(
    (_sections) => _sections.map((section) => {
      section.lessons = section.lessons.filter((lesson2) => lesson2.id !== lessonId);
      return section;
    })
  );
  snackbar.success("snackbar.generic.success_delete");
  console.log(`lessonId`, lessonId);
}
async function handleSaveLesson(lesson2, courseId) {
  const result = lessonValidation(lesson2);
  if (Object.keys(result).length) {
    return result;
  }
  console.log(`handleSaveLesson lesson`, lesson2);
  const newLesson = {
    title: lesson2.title,
    lesson_at: lesson2?.lesson_at,
    call_url: lesson2?.call_url,
    teacher_id: lesson2?.profile ? lesson2?.profile.id : void 0,
    course_id: courseId,
    is_unlocked: lesson2.is_unlocked,
    section_id: lesson2.section_id
  };
  let newLessonData = null;
  if (lesson2.id) {
    await updateLesson(newLesson, lesson2.id);
  } else {
    const { data } = await createLesson(newLesson);
    newLessonData = data;
  }
  return newLessonData;
}
async function handleSaveLessonSection(section, courseId) {
  const result = lessonValidation(section);
  if (Object.keys(result).length) {
    return result;
  }
  console.log(`handleSaveLessonSection lesson`, section);
  const newSection = {
    id: section.id,
    title: section.title,
    course_id: courseId
  };
  let newSectionData = null;
  if (newSection.id) {
    await updateLessonSection(newSection, newSection.id);
  } else {
    const { data } = await createLessonSection(newSection);
    newSectionData = data;
  }
  return newSectionData;
}
async function handleUpdateLessonMaterials(lesson2, lessonId) {
  const materials = {
    ...lesson2.materials
  };
  delete materials.lesson_completion;
  delete materials.profile;
  return await updateLesson(materials, lessonId);
}
const deleteLessonVideo = (index) => {
  lesson.update((currentLesson) => ({
    ...currentLesson,
    materials: {
      ...currentLesson.materials,
      videos: currentLesson.materials.videos.filter((video, i) => i !== index)
    }
  }));
};
const defaultCourse = {
  id: "",
  title: "",
  description: "",
  type: COURSE_TYPE.LIVE_CLASS,
  cost: 0,
  currency: "",
  status: "ACTIVE",
  is_certificate_downloadable: false,
  certificate_theme: "professional",
  is_published: false,
  created_at: (/* @__PURE__ */ new Date()).toDateString(),
  updated_at: (/* @__PURE__ */ new Date()).toDateString(),
  attendance: [],
  polls: [],
  version: COURSE_VERSION.V2,
  metadata: {
    requirements: "",
    description: "",
    goals: "",
    videoUrl: "",
    showDiscount: false,
    discount: 0,
    paymentLink: "",
    reward: {
      show: false,
      description: ""
    },
    instructor: {
      name: "",
      role: "",
      coursesNo: 0,
      description: "",
      imgUrl: ""
    },
    lessonTabsOrder: [
      { id: 1, name: "course.navItem.lessons.materials.tabs.note.title" },
      { id: 2, name: "course.navItem.lessons.materials.tabs.slide.title" },
      { id: 3, name: "course.navItem.lessons.materials.tabs.video.title" }
    ],
    grading: false,
    lessonDownload: true,
    allowNewStudent: false
  }
};
const course = writable({ ...defaultCourse });
const group = writable({
  id: "",
  tutors: [],
  students: [],
  people: []
});
async function setCourse(data, setLesson = true) {
  if (!data || !(Object.values(data) && Object.values(data).length))
    return;
  if (data.group) {
    const groupData = Object.assign(data.group, {
      tutors: [],
      students: [],
      people: []
    });
    if (Array.isArray(groupData.members)) {
      for (const member of groupData.members) {
        if (member.role_id === ROLE.STUDENT) {
          groupData.students.push(member);
        } else if (member.profile) {
          groupData.tutors.push({
            ...member.profile,
            memberId: member.id
          });
        }
      }
      groupData.people = groupData.members;
    }
    delete groupData.members;
    group.set(groupData);
  }
  if (setLesson) {
    const orderedLessons = sortLesson(data.lessons);
    lessons.set(orderedLessons);
    if (data.lesson_section) {
      const sections = data.lesson_section?.map((section) => {
        const lessons2 = (data.lessons || []).filter((lesson2) => lesson2.section_id === section.id);
        section.lessons = sortLesson(lessons2);
        return section;
      });
      lessonSections.set(sortLessonSection(sections));
    }
  }
  delete data.lessons;
  delete data?.lesson_section;
  if (data.metadata && !Object.values(data.metadata)) {
    data.metadata = {
      requirements: "",
      description: "",
      goals: "",
      videoUrl: "",
      showDiscount: false,
      discount: 0,
      reward: {
        show: false,
        description: ""
      },
      instructor: {
        name: "",
        role: "",
        coursesNo: 0,
        description: "",
        imgUrl: ""
      },
      allowNewStudent: false
    };
  }
  if (!data.certificate_theme) {
    data.certificate_theme = "professional";
  }
  course.set(data);
}
function sortLesson(lessons2 = []) {
  return lessons2.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
function sortLessonSection(sections = []) {
  return sections.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export { lessonSections as a, lessons as b, course as c, defaultCourse as d, handleSaveLessonSection as e, handleSaveLesson as f, group as g, handleDelete as h, lessonByTranslation as i, isLessonDirty as j, deleteLessonVideo as k, lesson as l, handleUpdateLessonMaterials as m, setCourse as s, uploadCourseVideoStore as u };
//# sourceMappingURL=store4-ef39175f.js.map
