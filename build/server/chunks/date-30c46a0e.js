import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7edfdc91-a0f5-492d-8057-9690e4ac8da2", e._sentryDebugIdIdentifier = "sentry-dbid-7edfdc91-a0f5-492d-8057-9690e4ac8da2");
  } catch (e2) {
  }
}();
dayjs.extend(relativeTime);
const calDateDiff = (date) => {
  return dayjs(date).fromNow(true) + ` ago`;
};
const getGreeting = () => {
  const date = /* @__PURE__ */ new Date();
  const hours = date.getHours();
  return hours < 12 ? "dashboard.morning_heading" : hours < 18 ? "dashboard.afternoon_heading" : "dashboard.evening_heading";
};

export { calDateDiff as c, getGreeting as g };
//# sourceMappingURL=date-30c46a0e.js.map
