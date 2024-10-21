var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var _sentryReleaseInjectionFile = {};

var hasRequired_sentryReleaseInjectionFile;

function require_sentryReleaseInjectionFile () {
	if (hasRequired_sentryReleaseInjectionFile) return _sentryReleaseInjectionFile;
	hasRequired_sentryReleaseInjectionFile = 1;
	!function() {
	  try {
	    var e = "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : {}, n = new Error().stack;
	    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "78e36982-9ca4-4053-a420-a915ad808005", e._sentryDebugIdIdentifier = "sentry-dbid-78e36982-9ca4-4053-a420-a915ad808005");
	  } catch (e2) {
	  }
	}();
	var _global = typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : {};
	_global.SENTRY_RELEASE = { id: "d32fdfcfd7761d5e612638e08bd8a46cf3156553" };
	
	return _sentryReleaseInjectionFile;
}

require_sentryReleaseInjectionFile();

export { getDefaultExportFromCjs as g };
//# sourceMappingURL=_sentry-release-injection-file-6be6a010.js.map
