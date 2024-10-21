import { w as writable } from './index2-aea858a5.js';
import { L as LOCALE } from './index15-c5761f1e.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5ad1239b-8399-4036-9ea1-8c1648895844", e._sentryDebugIdIdentifier = "sentry-dbid-5ad1239b-8399-4036-9ea1-8c1648895844");
  } catch (e2) {
  }
}();
const defaultUserState = {
  openAuthModal: false,
  fetchingUser: false,
  isLoggedIn: false,
  currentSession: void 0,
  expiresAt: 0
};
const defaultProfileState = {
  id: void 0,
  fullname: "",
  avatar_url: "https://pbs.twimg.com/profile_images/1416443682157473795/dGtFbtht_normal.jpg",
  username: "Elon",
  user_id: "",
  email: "",
  role: "",
  goal: "",
  source: "",
  telegram_chat_id: null,
  locale: LOCALE.EN,
  is_email_verified: true,
  verified_at: ""
};
const user = writable(defaultUserState);
const profile = writable(defaultProfileState);

export { profile as p, user as u };
//# sourceMappingURL=user-e923b6d4.js.map
