import { c as create_ssr_component, v as validate_component } from './ssr-10c5b872.js';
import { C as CourseLandingPage } from './index21-6643701c.js';
import './utils-26d532f8.js';
import 'lodash/get.js';
import 'pluralize';
import './stores-793c1e19.js';
import './function-efda068b.js';
import './_sentry-release-injection-file-6be6a010.js';
import './org-8fc26a61.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './store4-ef39175f.js';
import './index18-b03e5e10.js';
import './supabase-cbc58bc2.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './index15-c5761f1e.js';
import './store2-dc811f17.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './translations-90190f83.js';
import './date-30c46a0e.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './index22-747425c4.js';
import './index24-7fcbd4fe.js';
import './Text-e3f4b18b.js';
import './index8-59a07edf.js';
import './index9-eea8802c.js';
import './index11-4ef8d5a0.js';
import './index12-9c021b5e.js';
import './index10-b2b97ef7.js';
import './getCurrencyFormatter-56d8d145.js';
import './course-a9172902.js';
import './navigation-cd282f65.js';
import './HTMLRender-9a6e04f8.js';
import './TextField-86164973.js';
import './index23-8c8bac96.js';
import 'posthog-js';
import './PoweredBy-58475ea5.js';
import './formatYoutubeVideo-86462462.js';
import './ImageLoader-d6ed26af.js';
import './ErrorFilled-1371f254.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fc32c8ea-84ca-4477-9f22-64de29f0b5c2", e._sentryDebugIdIdentifier = "sentry-dbid-fc32c8ea-84ca-4477-9f22-64de29f0b5c2");
  } catch (e2) {
  }
}();
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let courseData;
  function setCourseData(course) {
    if (!course)
      return;
    courseData = { ...course };
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    setCourseData(data.course);
  }
  return `${validate_component(CourseLandingPage, "CourseLandingPage").$$render($$result, { courseData }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2f0d2098.js.map
