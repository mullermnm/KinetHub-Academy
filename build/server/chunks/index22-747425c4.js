import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as each } from './ssr-10c5b872.js';
import { T as Tabs, a as TabContent } from './index24-7fcbd4fe.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import { M as Modal } from './index8-59a07edf.js';
import { w as writable } from './index2-aea858a5.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { t as t2 } from './translations-90190f83.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e5c72220-ab62-436e-92d2-d9ebac92bd58", e._sentryDebugIdIdentifier = "sentry-dbid-e5c72220-ab62-436e-92d2-d9ebac92bd58");
  } catch (e2) {
  }
}();
const reviewsModalStore = writable({
  open: false
});
let handleOpenWidget = writable({
  open: false
});
const css = {
  code: ".hide-scrollbar.svelte-12qjvsn{width:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.hide-scrollbar.svelte-12qjvsn::-webkit-scrollbar{width:0;background:transparent}",
  map: null
};
const UploadWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $handleOpenWidget, $$unsubscribe_handleOpenWidget;
  let $t, $$unsubscribe_t;
  $$unsubscribe_handleOpenWidget = subscribe(handleOpenWidget, (value) => $handleOpenWidget = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { imageURL = "" } = $$props;
  getSupabase();
  const tabs = [{ label: "Unsplash", value: "unsplash" }, { label: "Upload", value: "upload" }];
  let isUploading = false;
  let currentTab = tabs[0].value;
  let searchQuery = "";
  let unsplashImages = [];
  let fileInput;
  let label = $t("snackbar.landing_page_settings.error.label");
  const onChange = (tabValue) => () => currentTab = tabValue;
  function handleUpload() {
    fileInput.click();
  }
  if ($$props.imageURL === void 0 && $$bindings.imageURL && imageURL !== void 0)
    $$bindings.imageURL(imageURL);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => $handleOpenWidget.open = false,
        width: "w-3/5",
        maxWidth: "",
        modalHeading: $t("course.navItem.landing_page.upload_widget.title"),
        open: $handleOpenWidget.open
      },
      {
        open: ($$value) => {
          $handleOpenWidget.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="w-full bg-white dark:bg-inherit p-5">${validate_component(Tabs, "Tabs").$$render($$result, { tabs, currentTab, onChange }, {}, {
            content: () => {
              return `<slot:fragment slot="content">${validate_component(TabContent, "TabContent").$$render($$result, { value: tabs[1].value, index: currentTab }, {}, {
                default: () => {
                  return ` <div class="w-full"><input type="file" style="display: none;" ${""}> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      label,
                      onClick: handleUpload,
                      isLoading: isUploading,
                      className: "w-full font-semibold m-auto"
                    },
                    {},
                    {}
                  )} <p class="text-center text-sm text-gray-500 my-2">${escape($t("course.navItem.landing_page.upload_widget.width"))}</p> <p class="text-center text-sm text-gray-500">${escape($t("course.navItem.landing_page.upload_widget.size"))}</p></div>`;
                }
              })} ${validate_component(TabContent, "TabContent").$$render($$result, { value: tabs[0].value, index: currentTab }, {}, {
                default: () => {
                  return ` <div class="h-full overflow-y-scroll"><form class="flex gap-2 pb-3 mt-1"><input type="text" name="" id="" class="rounded-lg w-[85%] ml-2 dark:text-black"${add_attribute("value", searchQuery, 0)}> <button type="submit" class="px-3 py-1 bg-white rounded-lg border-[1px] border-gray-500 text-black">${escape($t("course.navItem.landing_page.upload_widget.submit"))}</button></form> ${unsplashImages && unsplashImages.length > 0 ? `<div class="flex flex-row items-center flex-wrap gap-2 px-[10px] max-h-[300px] hide-scrollbar svelte-12qjvsn">${each(unsplashImages, (unsplashImages2) => {
                    return `<div><div class="w-[195px] h-[130px] overflow-hidden relative"><button><img${add_attribute("src", unsplashImages2.urls.regular, 0)}${add_attribute("alt", unsplashImages2.alt_description, 0)} class="w-full h-full object-cover rounded-md hover:opacity-80 cursor-pointer"> </button></div> ${unsplashImages2.user.name ? `<p class="text-center text-xs mt-1 text-gray-500 font-light">By <a${add_attribute("href", `https://unsplash.com/@${unsplashImages2.user.username}`, 0)} target="_blank" class="hover:text-red-700">${escape(unsplashImages2.user.name)}</a> </p>` : ``} </div>`;
                  })}</div>` : `<p class="text-center pt-7">${escape($t("course.navItem.landing_page.upload_widget.no_images"))}</p>`}</div>`;
                }
              })}</slot:fragment>`;
            }
          })}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_handleOpenWidget();
  $$unsubscribe_t();
  return $$rendered;
});

export { UploadWidget as U, handleOpenWidget as h, reviewsModalStore as r };
//# sourceMappingURL=index22-747425c4.js.map
