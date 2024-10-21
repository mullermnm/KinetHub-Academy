import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f908fd79-64fa-4706-87fd-0826404c97c7", e._sentryDebugIdIdentifier = "sentry-dbid-f908fd79-64fa-4706-87fd-0826404c97c7");
  } catch (e2) {
  }
}();
const getCurrencyFormatter = (currency) => {
  const locale = currency == "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2
  });
};

export { getCurrencyFormatter as g };
//# sourceMappingURL=getCurrencyFormatter-56d8d145.js.map
