import { d as derived, w as writable } from './index2-aea858a5.js';
import { p as public_env } from './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4f374cd7-d957-4949-8d8a-57c438bbbbd0", e._sentryDebugIdIdentifier = "sentry-dbid-4f374cd7-d957-4949-8d8a-57c438bbbbd0");
  } catch (e2) {
  }
}();
const themeImages = {
  standard: {
    card: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/standard-quiz-card.svg",
    editor: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/standard-quiz-editor.svg",
    play: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/standard-quiz-play.svg"
  },
  mainland: {
    card: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/mainstream-quiz-card.svg",
    editor: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/mainstream-quiz-editor.svg",
    play: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/mainstream-quiz-play.svg"
  }
};
const optionImage = {
  circle: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/circle.svg",
  spade: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/spade.svg",
  square: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/square.svg",
  pentagon: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/pentagon.svg",
  hexagon: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/hexagon.svg",
  triangle: "https://api.classroomio.com/storage/v1/object/public/avatars/quizes/triangle.svg"
};
const allOptions = [
  {
    id: "circle",
    label: "",
    isCorrect: false
  },
  {
    id: "triangle",
    label: "",
    isCorrect: false
  },
  {
    id: "spade",
    label: "",
    isCorrect: false
  },
  {
    id: "square",
    label: "",
    isCorrect: false
  },
  {
    id: "pentagon",
    label: "",
    isCorrect: false
  },
  {
    id: "hexagon",
    label: "",
    isCorrect: false
  }
];
const allThemes = [
  {
    id: "standard",
    label: "Standard"
  },
  {
    id: "mainland",
    label: "Mainland Bridge"
  }
];
({
  id: (/* @__PURE__ */ new Date()).getTime(),
  title: "",
  type: "multichoice",
  options: [],
  timelimit: "10s"
});
const STEPS = {
  CONNECT_TO_PLAY: "CONNECT_TO_PLAY",
  WAIT_FOR_PLAYERS: "WAIT_FOR_PLAYERS",
  SHOW_NEXT_QUESTION: "SHOW_NEXT_QUESTION",
  SCOREBOARD: "SCOREBOARD",
  PODIUM: "PODIUM"
};
const ROLE = {
  ADMIN: 1,
  TUTOR: 2,
  STUDENT: 3
};
const ROLE_LABEL = {
  [ROLE.ADMIN]: "course.navItem.people.roles.admin",
  [ROLE.TUTOR]: "course.navItem.people.roles.tutor",
  [ROLE.STUDENT]: "course.navItem.people.roles.student"
};
const ROLES = [
  {
    label: "course.navItem.people.roles.filter",
    value: "all"
  },
  {
    label: ROLE_LABEL[ROLE.ADMIN],
    value: ROLE.ADMIN
  },
  {
    label: ROLE_LABEL[ROLE.TUTOR],
    value: ROLE.TUTOR
  },
  {
    label: ROLE_LABEL[ROLE.STUDENT],
    value: ROLE.STUDENT
  }
];
const PLAN = {
  BASIC: "BASIC",
  EARLY_ADOPTER: "EARLY_ADOPTER",
  ENTERPRISE: "ENTERPRISE"
};
const PLAN_NAMES = {
  [PLAN.BASIC]: "Free",
  [PLAN.EARLY_ADOPTER]: "Early Adopter",
  [PLAN.ENTERPRISE]: "Enterprise"
};
const defaultCurrentOrgState = {
  id: "",
  name: "",
  shortName: "",
  siteName: "",
  avatar_url: "",
  memberId: "",
  role_id: 0,
  landingpage: {},
  customization: {
    apps: { poll: true, comments: true },
    course: { grading: true, newsfeed: true },
    dashboard: { exercise: true, community: true, bannerText: "", bannerImage: "" }
  },
  theme: "",
  organization_plan: [],
  is_restricted: false
};
const orgs = writable([]);
const currentOrg = writable(defaultCurrentOrgState);
const orgAudience = writable([]);
const orgTeam = writable([]);
const isOrgAdmin = derived(currentOrg, ($currentOrg) => $currentOrg.role_id === ROLE.ADMIN);
const getActivePlan = (org) => {
  return org.organization_plan.find((p) => p.is_active);
};
const currentOrgPlan = derived(currentOrg, ($currentOrg) => getActivePlan($currentOrg));
const currentOrgPath = derived(
  currentOrg,
  ($currentOrg) => $currentOrg.siteName ? `/org/${$currentOrg.siteName}` : ""
);
const currentOrgDomain = derived(currentOrg, ($currentOrg) => {
  return $currentOrg.customDomain && $currentOrg.isCustomDomainVerified ? `https://${$currentOrg.customDomain}` : $currentOrg.siteName ? `https://${$currentOrg.siteName}.KinetsHub.com` : "";
});
const isFreePlan = derived(currentOrg, ($currentOrg) => {
  if (!$currentOrg.id || public_env.IS_SELFHOSTED === "true")
    return false;
  const plan = getActivePlan($currentOrg);
  return !plan || plan.plan_name === PLAN.BASIC;
});
const currentOrgMaxAudience = derived(
  currentOrgPlan,
  ($plan) => !$plan ? 20 : $plan.plan_name === PLAN.EARLY_ADOPTER ? 1e4 : $plan.plan_name === PLAN.ENTERPRISE ? Number.MAX_SAFE_INTEGER : 20
);
const createQuizModal = writable({
  open: false,
  openEdit: false,
  title: "",
  id: null
});
const deleteModal = writable({
  id: null,
  open: false,
  isQuestion: false
});
const quizesStore = writable([]);
const quizStore = writable({
  uuid: "",
  title: "",
  questions: [],
  timelimit: "10s",
  theme: "standard",
  pin: ""
});
const playQuizStore = writable({
  step: STEPS.CONNECT_TO_PLAY
});
const userUpcomingData = writable([]);

export { PLAN as P, ROLE as R, ROLE_LABEL as a, orgTeam as b, currentOrg as c, orgAudience as d, currentOrgDomain as e, currentOrgPath as f, isFreePlan as g, currentOrgPlan as h, isOrgAdmin as i, PLAN_NAMES as j, ROLES as k, currentOrgMaxAudience as l, createQuizModal as m, quizesStore as n, orgs as o, playQuizStore as p, quizStore as q, deleteModal as r, allOptions as s, themeImages as t, userUpcomingData as u, allThemes as v, optionImage as w };
//# sourceMappingURL=org-8fc26a61.js.map
