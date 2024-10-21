import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ae2a68d6-9065-425d-a2f0-f595dac19b14", e._sentryDebugIdIdentifier = "sentry-dbid-ae2a68d6-9065-425d-a2f0-f595dac19b14");
  } catch (e2) {
  }
}();
function formatYoutubeVideo(url, errors) {
  console.log(`url`, url);
  const prefix = "https://www.youtube.com/embed";
  if (url.includes("embed")) {
    return url;
  }
  if (url.includes(".be/")) {
    const splittedUrlWithBe = url.split(".be/");
    return `${prefix}/${splittedUrlWithBe[1]}`;
  }
  const splitedUrl = url.split("watch");
  if (splitedUrl.length !== 2) {
    errors.video = "Not a valid youtube link";
    return;
  }
  const query = new URLSearchParams(splitedUrl[1]);
  return `${prefix}/${query.get("v")}`;
}
function getEmbedId(url) {
  if (url.includes("embed")) {
    return url.split("embed/")[1];
  }
  if (url.includes(".be/")) {
    const splittedUrlWithBe = url.split(".be/");
    return splittedUrlWithBe[1];
  }
  const splitedUrl = url.split("watch");
  if (splitedUrl.length !== 2) {
    return "";
  }
  const query = new URLSearchParams(splitedUrl[1]);
  return query.get("v");
}

export { formatYoutubeVideo as f, getEmbedId as g };
//# sourceMappingURL=formatYoutubeVideo-86462462.js.map
