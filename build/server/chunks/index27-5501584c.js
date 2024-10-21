import { s as subscribe, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { t as t2 } from './translations-90190f83.js';
import { L as Loading$1 } from './index11-4ef8d5a0.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "32857280-83ea-48eb-889d-920dce0f57de", e._sentryDebugIdIdentifier = "sentry-dbid-32857280-83ea-48eb-889d-920dce0f57de");
  } catch (e2) {
  }
}();
const Camera = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M29,26H3a1,1,0,0,1-1-1V8A1,1,0,0,1,3,7H9.46l1.71-2.55A1,1,0,0,1,12,4h8a1,1,0,0,1,.83.45L22.54,7H29a1,1,0,0,1,1,1V25A1,1,0,0,1,29,26ZM4,24H28V9H22a1,1,0,0,1-.83-.45L19.46,6H12.54L10.83,8.55A1,1,0,0,1,10,9H4Z"></path><path d="M16,22a6,6,0,1,1,6-6A6,6,0,0,1,16,22Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,16,12Z"></path></svg>`;
});
const css = {
  code: ".width-fit.svelte-1cmq9ow{width:fit-content}.avatar-container.setwidthheight.svelte-1cmq9ow{height:128px;width:128px}.upload-icon.svelte-1cmq9ow{display:none}",
  map: null
};
const UploadImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { avatar } = $$props;
  let { src } = $$props;
  let { widthHeight = "" } = $$props;
  let { shape = "rounded-full" } = $$props;
  let { errorMessage = null } = $$props;
  let { isDisabled = false } = $$props;
  let { maxFileSizeInMb = 2 } = $$props;
  let { flexDirection = "flex-col" } = $$props;
  let { isUploading = false } = $$props;
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.widthHeight === void 0 && $$bindings.widthHeight && widthHeight !== void 0)
    $$bindings.widthHeight(widthHeight);
  if ($$props.shape === void 0 && $$bindings.shape && shape !== void 0)
    $$bindings.shape(shape);
  if ($$props.errorMessage === void 0 && $$bindings.errorMessage && errorMessage !== void 0)
    $$bindings.errorMessage(errorMessage);
  if ($$props.isDisabled === void 0 && $$bindings.isDisabled && isDisabled !== void 0)
    $$bindings.isDisabled(isDisabled);
  if ($$props.maxFileSizeInMb === void 0 && $$bindings.maxFileSizeInMb && maxFileSizeInMb !== void 0)
    $$bindings.maxFileSizeInMb(maxFileSizeInMb);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  if ($$props.isUploading === void 0 && $$bindings.isUploading && isUploading !== void 0)
    $$bindings.isUploading(isUploading);
  $$result.css.add(css);
  $$unsubscribe_t();
  return `<section class="${"width-fit p-3 flex " + escape(flexDirection, true) + " items-center justify-between gap-5 svelte-1cmq9ow"}"><div class="${"avatar-container " + escape(widthHeight || "setwidthheight", true) + " pointer border-2 border-gray-200 dark:border-neutral-600 relative " + escape(shape, true) + " svelte-1cmq9ow"}">${src ? `<img class="${"w-full h-full " + escape(shape, true) + " svelte-1cmq9ow"}"${add_attribute("src", src, 0)} alt="Avatar">` : `${avatar ? `<img class="${"w-full h-full " + escape(shape, true) + " svelte-1cmq9ow"}"${add_attribute("src", avatar, 0)} alt="Avatar">` : `<img class="${"w-full h-full " + escape(shape, true) + " svelte-1cmq9ow"}" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="">`}`}</div> <div class="flex flex-col items-center"><button class="${"width-fit text-primary-700 flex flex-col items-center text-sm " + escape(
    isDisabled || isUploading ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    true
  ) + " svelte-1cmq9ow"}" ${isDisabled || isUploading ? "disabled" : ""}>${isUploading ? `${validate_component(Loading$1, "Loading").$$render($$result, { withOverlay: false, small: true }, {}, {})}` : `${validate_component(Camera, "Camera").$$render($$result, { size: 20 }, {}, {})}`} <span class="ml-2">${escape($t("settings.profile.profile_picture.upload_image"))}</span></button> <p class="text-xs text-center text-gray-500">${escape($t("settings.profile.profile_picture.file_size"))} ${escape(maxFileSizeInMb)}MB<br> ${escape($t("settings.profile.profile_picture.accepted"))}: jpeg, jpg, png, webp</p> ${errorMessage ? `<p class="text-sm text-red-500">${escape(errorMessage)}</p>` : ``}</div> <input style="display:none" type="file" accept=".jpg, .jpeg, .png, .webp"> </section>`;
});

export { UploadImage as U };
//# sourceMappingURL=index27-5501584c.js.map
