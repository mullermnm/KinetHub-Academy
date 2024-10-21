import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "be9152d9-d5c9-4a76-81b8-fb1a83ad90ba", e._sentryDebugIdIdentifier = "sentry-dbid-be9152d9-d5c9-4a76-81b8-fb1a83ad90ba");
  } catch (e2) {
  }
}();
const isCourseFree = (cost) => !(Number(cost) > 0);
const getStudentInviteLink = (_course, orgSiteName, origin) => {
  const hash = encodeURIComponent(
    btoa(
      JSON.stringify({
        id: _course.id,
        name: _course.title,
        description: _course.description,
        orgSiteName
      })
    )
  );
  return `${origin}/invite/s/${hash}`;
};
function calcCourseDiscount(percent = 0, cost, showDiscount) {
  if (!percent || !showDiscount)
    return cost;
  const discountAmount = percent / 100 * cost;
  const discountedPrice = cost - discountAmount;
  return Math.round(discountedPrice);
}

export { calcCourseDiscount as c, getStudentInviteLink as g, isCourseFree as i };
//# sourceMappingURL=course-a9172902.js.map
