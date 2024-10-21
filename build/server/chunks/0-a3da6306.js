import './index-62ac255a.js';
import './_sentry-release-injection-file-6be6a010.js';
import { g as getCurrentOrg } from './index6-4a1599e3.js';
import { s as supabase, g as getSupabase } from './supabase-cbc58bc2.js';
import './translations-90190f83.js';
import { b as private_env } from './shared-server-e0f2abd3.js';
import './utils-26d532f8.js';
import './navigation-cd282f65.js';
import './org-8fc26a61.js';
import './index2-aea858a5.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './index15-c5761f1e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3c0afff7-bf48-4cb1-b9d6-cae73a9e2bc3", e._sentryDebugIdIdentifier = "sentry-dbid-3c0afff7-bf48-4cb1-b9d6-cae73a9e2bc3");
  } catch (e2) {
  }
}();
const IS_SELFHOSTED = "true";
if (!supabase) {
  getSupabase();
}
const load = async ({ url, cookies }) => {
  const response = {
    orgSiteName: "",
    isOrgSite: false,
    skipAuth: false,
    org: null,
    baseMetaTags: getBaseMetaTags(url)
  };
  console.log("IS_SELFHOSTED", IS_SELFHOSTED);
  {
    const subdomain2 = getSubdomain(url);
    console.log("subdomain", subdomain2);
    if (subdomain2) {
      const org = await getCurrentOrg(subdomain2, true) || null;
      if (!org) {
        return response;
      }
      response.org = org;
      response.isOrgSite = true;
      response.orgSiteName = subdomain2;
    }
    return response;
  }
};
function getBaseMetaTags(url) {
  return Object.freeze({
    title: "KinetsHub | The Open Source Learning Management System for Companies",
    description: "A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations",
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: "website",
      url: new URL(url.pathname, url.origin).href,
      locale: "en_IE",
      title: "KinetsHub | The Open Source Learning Management System for Companies",
      description: "A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations",
      siteName: "KinetsHub",
      images: [
        {
          url: "https://brand.cdn.clsrio.com/og/classroomio-og.png",
          alt: "KinetsHub OG Image",
          width: 1920,
          height: 1080,
          secureUrl: "https://brand.cdn.clsrio.com/og/classroomio-og.png",
          type: "image/jpeg"
        }
      ]
    },
    twitter: {
      handle: "@classroomio",
      site: "@classroomio",
      cardType: "summary_large_image",
      title: "ClassroomIO | The Open Source Learning Management System for Companies",
      description: "A flexible, user-friendly platform for creating, managing, and delivering courses for companies and training organisations",
      image: "https://brand.cdn.clsrio.com/og/classroomio-og.png",
      imageAlt: "ClassroomIO OG Image"
    }
  });
}
function getSubdomain(url) {
  const host = url.host.replace("www.", "");
  const parts = host.split(".");
  if (host.endsWith(private_env.PRIVATE_APP_HOST)) {
    return parts.length >= 3 ? parts[0] : null;
  }
  return null;
}

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-291694ad.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.fe6acf45.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/globals.f8c38982.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/index.8c9a3a3e.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/stores.5de49fb7.js","_app/immutable/chunks/isEmpty.f6f5efd6.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/index.403f118a.js","_app/immutable/chunks/get.c5ebb55c.js","_app/immutable/chunks/isSymbol.9bd2fb8d.js","_app/immutable/chunks/Rocket.cbc98465.js","_app/immutable/chunks/index.6192f669.js","_app/immutable/chunks/SkeletonPlaceholder.85251fa5.js","_app/immutable/chunks/SkeletonText.4f748957.js","_app/immutable/chunks/getCurrencyFormatter.392a4e64.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/RadioButtonChecked.77d3c8da.js","_app/immutable/chunks/course.f6cde1df.js","_app/immutable/chunks/ImageLoader.531bb295.js","_app/immutable/chunks/CaretRight.c02921e3.js","_app/immutable/chunks/Tag.87ac45b2.js","_app/immutable/chunks/Close.999bfca1.js","_app/immutable/chunks/validator.b0d7db8b.js","_app/immutable/chunks/validateEmail.f14e5c64.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/user.9ccdc884.js","_app/immutable/chunks/app.0a7d2343.js","_app/immutable/chunks/index.6649ce47.js","_app/immutable/chunks/CoursesEmptyIcon.6beb1fc2.js","_app/immutable/chunks/store.9800a6a8.js","_app/immutable/chunks/index.90bb86b1.js","_app/immutable/chunks/TextArea.af35e63e.js","_app/immutable/chunks/HTMLRender.93b52c11.js","_app/immutable/chunks/Popover.d830a8b5.js","_app/immutable/chunks/store.1f8b3295.js","_app/immutable/chunks/PoweredBy.716d12d0.js","_app/immutable/chunks/ChevronRight.32b7b090.js","_app/immutable/chunks/Column.85a33c57.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/ArrowLeft.eacc72f9.js","_app/immutable/chunks/app.bd3189d3.js","_app/immutable/chunks/store.0b901476.js","_app/immutable/chunks/index.4cadf3f1.js","_app/immutable/chunks/Text.40bcd65a.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/ErrorFilled.c75c44fe.js","_app/immutable/chunks/WarningAltFilled.a18ba147.js","_app/immutable/chunks/Locked.d4110ef1.js","_app/immutable/chunks/index.691cdcca.js","_app/immutable/chunks/index.5d9eba69.js","_app/immutable/chunks/axios.49bc0800.js","_app/immutable/chunks/Settings.88886624.js","_app/immutable/chunks/constants.35eea698.js","_app/immutable/chunks/CheckmarkOutline.0b1688ef.js","_app/immutable/chunks/index.9237e2d9.js","_app/immutable/chunks/store.f203a796.js","_app/immutable/chunks/index.523fac41.js","_app/immutable/chunks/date.4043184d.js","_app/immutable/chunks/dayjs.min.1a74010f.js","_app/immutable/chunks/Add.efc40c97.js","_app/immutable/chunks/TrashCan.b6b32865.js","_app/immutable/chunks/index.f39bbea9.js","_app/immutable/chunks/index.2f8954c4.js","_app/immutable/chunks/org.214021e8.js","_app/immutable/chunks/routes.b19e6fa5.js","_app/immutable/chunks/useMobile.7962b2bd.js","_app/immutable/chunks/theme.5ef85a9d.js","_app/immutable/chunks/index.287abee1.js","_app/immutable/chunks/Toggle.f83aed0d.js","_app/immutable/chunks/SelectItem.b7c50800.js","_app/immutable/chunks/ChevronDown.55b97967.js"];
const stylesheets = ["_app/immutable/assets/0.231d4e58.css","_app/immutable/assets/ArrowUp.baf5064f.css","_app/immutable/assets/index.95d9f026.css","_app/immutable/assets/index.8b642df3.css","_app/immutable/assets/TextField.963919e0.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/TextArea.37048e21.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/Text.2eef1a2a.css","_app/immutable/assets/index.f910ccfb.css","_app/immutable/assets/index.1ede2f13.css","_app/immutable/assets/index.9757e74d.css","_app/immutable/assets/index.aa635e36.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-a3da6306.js.map
