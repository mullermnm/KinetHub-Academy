import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component } from './ssr-10c5b872.js';
import { p as profile } from './user-e923b6d4.js';
import { g as group } from './store4-ef39175f.js';
import { i as isOrgAdmin, R as ROLE } from './org-8fc26a61.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "613c1abb-a688-44fa-9302-c9caa1fc61d8", e._sentryDebugIdIdentifier = "sentry-dbid-613c1abb-a688-44fa-9302-c9caa1fc61d8");
  } catch (e2) {
  }
}();
const RoleBasedSecurity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show;
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  let $group, $$unsubscribe_group;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  let { allowedRoles = [] } = $$props;
  let { onDenied = () => {
  } } = $$props;
  let { onlyStudent = false } = $$props;
  let userRole = 0;
  function isAllowed(userRole2) {
    return allowedRoles.includes(userRole2);
  }
  if ($$props.allowedRoles === void 0 && $$bindings.allowedRoles && allowedRoles !== void 0)
    $$bindings.allowedRoles(allowedRoles);
  if ($$props.onDenied === void 0 && $$bindings.onDenied && onDenied !== void 0)
    $$bindings.onDenied(onDenied);
  if ($$props.onlyStudent === void 0 && $$bindings.onlyStudent && onlyStudent !== void 0)
    $$bindings.onlyStudent(onlyStudent);
  {
    {
      const user = $group.people.find((person) => person.profile_id === $profile.id);
      userRole = user ? user.role_id : userRole;
      if (!$isOrgAdmin && $group.people.length && !isAllowed(userRole)) {
        onDenied();
      }
    }
  }
  show = onlyStudent ? isAllowed(ROLE.STUDENT) : isAllowed(userRole) || $isOrgAdmin;
  $$unsubscribe_isOrgAdmin();
  $$unsubscribe_group();
  $$unsubscribe_profile();
  return `${show ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});

export { RoleBasedSecurity as R };
//# sourceMappingURL=index14-890f60bc.js.map
