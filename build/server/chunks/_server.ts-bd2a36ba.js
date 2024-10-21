import { j as json } from './index-62ac255a.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import { b as private_env } from './shared-server-e0f2abd3.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1eed7621-4708-4fac-96a5-9d8d5f9e65cf", e._sentryDebugIdIdentifier = "sentry-dbid-1eed7621-4708-4fac-96a5-9d8d5f9e65cf");
  } catch (e2) {
  }
}();
const addDomainToVercel = async (domain) => {
  return await fetch(
    `https://api.vercel.com/v10/projects/${private_env.PROJECT_ID_VERCEL}/domains${private_env.TEAM_ID_VERCEL ? `?teamId=${private_env.TEAM_ID_VERCEL}` : ""}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${private_env.AUTH_BEARER_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: domain
        // Optional: Redirect www. to root domain
        // ...(domain.startsWith("www.") && {
        //   redirect: domain.replace("www.", ""),
        // }),
      })
    }
  ).then((res) => res.json());
};
const removeDomainFromVercelProject = async (domain) => {
  return await fetch(
    `https://api.vercel.com/v9/projects/${private_env.PROJECT_ID_VERCEL}/domains/${domain}${private_env.TEAM_ID_VERCEL ? `?teamId=${private_env.TEAM_ID_VERCEL}` : ""}`,
    {
      headers: {
        Authorization: `Bearer ${private_env.AUTH_BEARER_TOKEN}`
      },
      method: "DELETE"
    }
  ).then((res) => res.json());
};
const getConfigResponse = async (domain) => {
  return await fetch(
    `https://api.vercel.com/v6/domains/${domain}/config${private_env.TEAM_ID_VERCEL ? `?teamId=${private_env.TEAM_ID_VERCEL}` : ""}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${private_env.AUTH_BEARER_TOKEN}`,
        "Content-Type": "application/json"
      }
    }
  ).then((res) => res.json());
};
const supabase = getSupabase();
async function POST({ request }) {
  const { params } = await request.json();
  const accessToken = request.headers.get("Authorization");
  console.log("/GET api/domain", params);
  if (!params?.key || !accessToken) {
    return json({ success: false, message: "Missing fields" }, { status: 400 });
  }
  let user;
  try {
    const { data } = await supabase.auth.getUser(accessToken);
    user = data.user;
  } catch (error) {
    console.error(error);
  }
  if (!user) {
    return json({ success: false, message: "Unauthenticated user" }, { status: 401 });
  }
  try {
    switch (params.key) {
      case "verify_domain": {
        const configResponse = await getConfigResponse(params.domain);
        return json({ success: true, verified: !configResponse.misconfigured }, { status: 200 });
      }
      case "add_domain": {
        const addDomainResponse = await addDomainToVercel(params.domain);
        return json({ success: true, data: addDomainResponse }, { status: 200 });
      }
      case "remove_domain": {
        const removeDomainResponse = await removeDomainFromVercelProject(params.domain);
        return json({ success: true, data: removeDomainResponse }, { status: 200 });
      }
      default:
        return json({ success: false, message: "Invalid key" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export { POST };
//# sourceMappingURL=_server.ts-bd2a36ba.js.map
