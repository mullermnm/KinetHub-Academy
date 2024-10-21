import { f as fetchCourse } from './index18-b03e5e10.js';
import { s as supabase, g as getSupabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import './utils-26d532f8.js';
import './org-8fc26a61.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "88e23867-a809-422f-aba1-d1673dd9b0c3", e._sentryDebugIdIdentifier = "sentry-dbid-88e23867-a809-422f-aba1-d1673dd9b0c3");
  } catch (e2) {
  }
}();
if (!supabase) {
  getSupabase();
}
const load = async ({ params = { slug: "" } }) => {
  const { data } = await fetchCourse(void 0, params.slug);
  const pageMetaTags = Object.freeze({
    title: data?.title,
    description: data?.description,
    openGraph: {
      title: data?.title,
      description: data?.description,
      images: [
        {
          url: data?.logo || "",
          alt: data?.title,
          width: 280,
          height: 200,
          secureUrl: data?.logo,
          type: "image/jpeg"
        }
      ]
    },
    twitter: {
      handle: "@",
      site: "@",
      cardType: "summary_large_image",
      title: data?.title,
      description: data?.description,
      image: data?.logo,
      imageAlt: "ClassroomIO OG Image"
    }
  });
  return {
    slug: params.slug,
    course: data,
    pageMetaTags
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2f0d2098.js')).default;
const universal_id = "src/routes/course/[slug]/+page.ts";
const imports = ["_app/immutable/nodes/9.61b90dd0.js","_app/immutable/chunks/index.523fac41.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/supabase.2c784bff.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/org.1ee4885a.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/chunks/index.7b07177d.js","_app/immutable/chunks/each.4f9c2159.js","_app/immutable/chunks/index.8c9a3a3e.js","_app/immutable/chunks/get.c5ebb55c.js","_app/immutable/chunks/isSymbol.9bd2fb8d.js","_app/immutable/chunks/pluralize.2d93e111.js","_app/immutable/chunks/stores.5de49fb7.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/spread.5cc747ed.js","_app/immutable/chunks/function.53788a56.js","_app/immutable/chunks/store.f203a796.js","_app/immutable/chunks/index.89e0ac82.js","_app/immutable/chunks/store.21c1b842.js","_app/immutable/chunks/validator.b0d7db8b.js","_app/immutable/chunks/validateEmail.f14e5c64.js","_app/immutable/chunks/translations.f943b7b3.js","_app/immutable/chunks/date.4043184d.js","_app/immutable/chunks/dayjs.min.1a74010f.js","_app/immutable/chunks/index.99ecf054.js","_app/immutable/chunks/index.79d3b1ae.js","_app/immutable/chunks/Text.40bcd65a.js","_app/immutable/chunks/index.bf0b6763.js","_app/immutable/chunks/index.e68f3ff9.js","_app/immutable/chunks/index.550ce75a.js","_app/immutable/chunks/index.5d9eba69.js","_app/immutable/chunks/index.4cadf3f1.js","_app/immutable/chunks/getCurrencyFormatter.392a4e64.js","_app/immutable/chunks/course.f6cde1df.js","_app/immutable/chunks/navigation.4bf4851d.js","_app/immutable/chunks/HTMLRender.93b52c11.js","_app/immutable/chunks/TextField.05bb724d.js","_app/immutable/chunks/formatYoutubeVideo.9b573f81.js","_app/immutable/chunks/index.287abee1.js","_app/immutable/chunks/PoweredBy.716d12d0.js","_app/immutable/chunks/CheckmarkOutline.0b1688ef.js","_app/immutable/chunks/ImageLoader.531bb295.js","_app/immutable/chunks/ErrorFilled.c75c44fe.js"];
const stylesheets = ["_app/immutable/assets/index.bc9ae5af.css","_app/immutable/assets/index.8674b7ef.css","_app/immutable/assets/Text.2eef1a2a.css","_app/immutable/assets/index.b04b4802.css","_app/immutable/assets/index.5a0592f8.css","_app/immutable/assets/index.1ede2f13.css","_app/immutable/assets/TextField.963919e0.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=9-59a58dbc.js.map
