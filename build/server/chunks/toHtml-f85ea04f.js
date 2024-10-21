import { b as browser } from './environment-b7cb3169.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b9dfd275-31c9-45d3-b253-1307d8c359c1", e._sentryDebugIdIdentifier = "sentry-dbid-b9dfd275-31c9-45d3-b253-1307d8c359c1");
  } catch (e2) {
  }
}();
const isHtmlValueEmpty = (html) => {
  if (!html || typeof html !== "string")
    return true;
  if (!document || !browser)
    return false;
  return getTextFromHTML(html) === "";
};
const getTextFromHTML = (html) => {
  const dummyDiv = document.createElement("div");
  dummyDiv.innerHTML = html;
  return dummyDiv.textContent?.trim() || "";
};

export { getTextFromHTML as g, isHtmlValueEmpty as i };
//# sourceMappingURL=toHtml-f85ea04f.js.map
