import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { S as Save } from './Save-257b9640.js';
import './index9-eea8802c.js';
import { S as SectionTitle } from './SectionTitle-d97525be.js';
import { T as TextField } from './TextField-86164973.js';
import { f as currentOrgPath, c as currentOrg } from './org-8fc26a61.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { b as snackbar } from './store2-dc811f17.js';
import { h as handleOpenWidget, U as UploadWidget } from './index22-747425c4.js';
import { t as t2 } from './translations-90190f83.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';
import { T as Toggle$1 } from './Toggle-e0c8f3da.js';
import './_sentry-release-injection-file-6be6a010.js';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './index24-7fcbd4fe.js';
import './Text-e3f4b18b.js';
import './index8-59a07edf.js';
import './index15-c5761f1e.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ec1fbb77-f1b3-43cd-9589-1dfe186abaf4", e._sentryDebugIdIdentifier = "sentry-dbid-ec1fbb77-f1b3-43cd-9589-1dfe186abaf4");
  } catch (e2) {
  }
}();
const CustomizeLms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $handleOpenWidget, $$unsubscribe_handleOpenWidget;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_handleOpenWidget = subscribe(handleOpenWidget, (value) => $handleOpenWidget = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  const supabase = getSupabase();
  let widgetKey = "";
  let isSaving = false;
  function widgetControl(key) {
    widgetKey = key;
    set_store_value(handleOpenWidget, $handleOpenWidget.open = true, $handleOpenWidget);
  }
  async function handleSave() {
    isSaving = true;
    const { error } = await supabase.from("organization").update({ customization: $currentOrg.customization }).match({ id: $currentOrg.id });
    if (error) {
      const message = error?.message || "snackbar.lms.error.try_again";
      console.error("Error updating customizations", message);
      snackbar.error("snackbar.lms.error.update");
    } else {
      snackbar.success("snackbar.success_update");
    }
    isSaving = false;
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border-c rounded border-gray-200 dark:border-neutral-600 w-full mt-5 relative"
      },
      {},
      {
        default: () => {
          return `${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 4, md: 4, lg: 4 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("components.settings.customize_lms.dashboard.title"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 8,
                    md: 8,
                    lg: 8,
                    class: "mt-4 lg:mt-0"
                  },
                  {},
                  {
                    default: () => {
                      return `<div><p>${escape($t("components.settings.customize_lms.dashboard.community"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          class: "mb-3",
                          toggled: $currentOrg.customization.dashboard.community
                        },
                        {
                          toggled: ($$value) => {
                            $currentOrg.customization.dashboard.community = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("components.settings.customize_lms.enabled"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("components.settings.customize_lms.disabled"))}</span>`;
                          }
                        }
                      )}</div> <div><p>${escape($t("components.settings.customize_lms.dashboard.exercises"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          class: "mb-3",
                          toggled: $currentOrg.customization.dashboard.exercise
                        },
                        {
                          toggled: ($$value) => {
                            $currentOrg.customization.dashboard.exercise = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("components.settings.customize_lms.enabled"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("components.settings.customize_lms.disabled"))}</span>`;
                          }
                        }
                      )}</div> <div class="mb-3"><p>${escape($t("components.settings.customize_lms.dashboard.banner_image"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          variant: VARIANTS.OUTLINED,
                          label: $t("components.settings.customize_lms.dashboard.banner_image_btn"),
                          className: "mt-3",
                          onClick: () => widgetControl("banner-image")
                        },
                        {},
                        {}
                      )} ${$currentOrg.customization.dashboard.bannerImage ? `<img alt="Banner"${add_attribute("src", $currentOrg.customization.dashboard.bannerImage, 0)} class="mt-2 rounded-md w-full">` : ``} ${$handleOpenWidget.open && widgetKey === "banner-image" ? `${validate_component(UploadWidget, "UploadWidget").$$render(
                        $$result,
                        {
                          imageURL: $currentOrg.customization.dashboard.bannerImage
                        },
                        {
                          imageURL: ($$value) => {
                            $currentOrg.customization.dashboard.bannerImage = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}` : ``}</div> <div><p>${escape($t("components.settings.customize_lms.dashboard.banner_text"))}</p> ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("components.settings.customize_lms.dashboard.banner_text_label"),
                          placeholder: $t("components.settings.customize_lms.dashboard.banner_text_placeholder"),
                          className: "mb-5",
                          value: $currentOrg.customization.dashboard.bannerText
                        },
                        {
                          value: ($$value) => {
                            $currentOrg.customization.dashboard.bannerText = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div>`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 4, md: 4, lg: 4 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("components.settings.customize_lms.course.title"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 8,
                    md: 8,
                    lg: 8,
                    class: "mt-4 lg:mt-0"
                  },
                  {},
                  {
                    default: () => {
                      return `<div><p>${escape($t("components.settings.customize_lms.course.newsfeed"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          class: "mb-3",
                          toggled: $currentOrg.customization.course.newsfeed
                        },
                        {
                          toggled: ($$value) => {
                            $currentOrg.customization.course.newsfeed = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("components.settings.customize_lms.enabled"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("components.settings.customize_lms.disabled"))}</span>`;
                          }
                        }
                      )}</div> <div><p>${escape($t("components.settings.customize_lms.course.grading"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          class: "mb-3",
                          toggled: $currentOrg.customization.course.grading
                        },
                        {
                          toggled: ($$value) => {
                            $currentOrg.customization.course.grading = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("components.settings.customize_lms.enabled"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("components.settings.customize_lms.disabled"))}</span>`;
                          }
                        }
                      )}</div>`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 4, md: 4, lg: 4 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("components.settings.customize_lms.apps.title"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 8,
                    md: 8,
                    lg: 8,
                    class: "mt-4 lg:mt-0"
                  },
                  {},
                  {
                    default: () => {
                      return `<div><p>${escape($t("components.settings.customize_lms.apps.poll"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          class: "mb-3",
                          toggled: $currentOrg.customization.apps.poll
                        },
                        {
                          toggled: ($$value) => {
                            $currentOrg.customization.apps.poll = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("components.settings.customize_lms.enabled"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("components.settings.customize_lms.disabled"))}</span>`;
                          }
                        }
                      )}</div> <div><p>${escape($t("components.settings.customize_lms.apps.live_comment"))}</p> ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          class: "mb-3",
                          toggled: $currentOrg.customization.apps.comments
                        },
                        {
                          toggled: ($$value) => {
                            $currentOrg.customization.apps.comments = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("components.settings.customize_lms.enabled"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("components.settings.customize_lms.disabled"))}</span>`;
                          }
                        }
                      )}</div>`;
                    }
                  }
                )}`;
              }
            }
          )} <div class="hidden md:block sticky float-right bottom-12 mr-2 z-[120]">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("components.settings.customize_lms.save"),
              onClick: handleSave,
              isLoading: isSaving,
              isDisabled: isSaving
            },
            {},
            {}
          )}</div>`;
        }
      }
    )} <div class="absolute block md:hidden right-6 bottom-8 z-[120]">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        onClick: handleSave,
        isLoading: isSaving,
        isDisabled: isSaving
      },
      {},
      {
        default: () => {
          return `${validate_component(Save, "Save").$$render($$result, { size: 24, class: "" }, {}, {})}`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_handleOpenWidget();
  $$unsubscribe_t();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-idt0lm_START -->${$$result.title = `<title>Customize LMS - KinetsHub</title>`, ""}<!-- HEAD_svelte-idt0lm_END -->`, ""} <section class="w-full md:max-w-4xl mx-auto"><div class="py-10 px-3 md:px-5"><a class="text-gray-500 dark:text-white text-md"${add_attribute("href", `${$currentOrgPath}/settings?tab=org`, 0)}>${escape($t("upgrade.back"))}</a> <div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-3xl font-bold">${escape($t("components.settings.customize_lms.title"))}</h1></div> ${validate_component(CustomizeLms, "CustomizeLMS").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e7cf33b8.js.map
