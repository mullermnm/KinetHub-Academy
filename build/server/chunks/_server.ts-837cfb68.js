import { j as json } from './index-62ac255a.js';
import { b as private_env } from './shared-server-e0f2abd3.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a9e57abf-3a2c-41d5-adde-c3776448d47d", e._sentryDebugIdIdentifier = "sentry-dbid-a9e57abf-3a2c-41d5-adde-c3776448d47d");
  } catch (e2) {
  }
}();
const UNSPLASH_API_URL = `https://api.unsplash.com/search/photos?page=2&per_page=15&auto=format&fit=crop&w=2970&q=80&client_id=${private_env.UNSPLASH_API_KEY}`;
async function POST({ request }) {
  const body = await request.json();
  const { searchQuery } = body;
  const query = searchQuery || "rocks";
  try {
    const response = await fetch(`${UNSPLASH_API_URL}&query=${encodeURIComponent(query)}`, {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error("Unable to fetch photos from Unsplash API");
    }
    const data = await response.json();
    return json({
      success: true,
      photos: data.results
    });
  } catch (error) {
    console.error(error);
    return json(
      { success: false, message: "Error fetching photos from Unsplash" },
      { status: 500 }
    );
  }
}

export { POST };
//# sourceMappingURL=_server.ts-837cfb68.js.map
