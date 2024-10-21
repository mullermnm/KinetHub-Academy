import { L as LOCALE } from './index15-c5761f1e.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1841f109-0062-44de-972c-e55a6d478f70", e._sentryDebugIdIdentifier = "sentry-dbid-1841f109-0062-44de-972c-e55a6d478f70");
  } catch (e2) {
  }
}();
const LANGUAGE = {
  [LOCALE.EN]: "English",
  [LOCALE.HI]: "Hindi",
  [LOCALE.FR]: "French",
  [LOCALE.PT]: "Portuguese",
  [LOCALE.DE]: "German",
  [LOCALE.VI]: "Vietnamese",
  [LOCALE.RU]: "Russian",
  [LOCALE.ES]: "Spanish"
};
const LANGUAGES = Object.keys(LANGUAGE).map((lang) => ({
  id: lang,
  text: LANGUAGE[lang]
}));

export { LANGUAGES as L };
//# sourceMappingURL=translation-fd577170.js.map
