import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as each, a as add_attribute, g as createEventDispatcher, m as missing_component, k as add_styles } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { T as TextField } from './TextField-86164973.js';
import { S as SectionTitle } from './SectionTitle-d97525be.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { U as UploadImage } from './index27-5501584c.js';
import { g as getSupabase, s as supabase } from './supabase-cbc58bc2.js';
import { p as profile } from './user-e923b6d4.js';
import { b as snackbar } from './store2-dc811f17.js';
import { T as Tabs$1, a as TabContent$1, I as Integrations, b as Tab$1, L as LanguagePicker, g as generateUUID } from './Integrations-48d75cd8.js';
import { t as t2, h as handleLocaleChange } from './translations-90190f83.js';
import { u as updateProfileValidation, e as updateOrgNameValidation } from './validator-27ec1d5c.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';
import { T as TrashCan } from './TrashCan-54bce261.js';
import { S as Save } from './Save-257b9640.js';
import { I as IconButton } from './index9-eea8802c.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { i as isOrgAdmin, c as currentOrg, f as currentOrgPath, g as isFreePlan, h as currentOrgPlan } from './org-8fc26a61.js';
import { l as landingPageSettings } from './store6-6153cb6b.js';
import { h as handleOpenWidget, U as UploadWidget } from './index22-747425c4.js';
import { T as Toggle$1 } from './Toggle-e0c8f3da.js';
import { R as RadioButtonGroup$1 } from './RadioButtonGroup-e57fe635.js';
import { R as RadioButton$1 } from './RadioButton-4ac24df2.js';
import { g as goto } from './navigation-cd282f65.js';
import debounce from 'lodash/debounce.js';
import { t as tick } from './scheduler-aae59940.js';
import { F as FlashFilled } from './FlashFilled-4a89bd75.js';
import './_sentry-release-injection-file-6be6a010.js';
import { V as VisitOrgSite } from './VisitOrgSite-0191bbde.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './ChevronDown-d5b93e8c.js';
import './translation-fd577170.js';
import './Dropdown-08db662d.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './CheckmarkFilled-36899326.js';
import './ArrowTopRight-dc8d0443.js';
import 'lodash/isNumber.js';
import 'zod';
import './Popover-a92462a3.js';
import 'lodash/cloneDeep.js';
import './index24-7fcbd4fe.js';
import './Text-e3f4b18b.js';
import './index8-59a07edf.js';
import './useMobile-47eebf4e.js';

!function() {
  try {
    var e2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n2 = new Error().stack;
    n2 && (e2._sentryDebugIds = e2._sentryDebugIds || {}, e2._sentryDebugIds[n2] = "6caa3dc0-dda4-4d10-806c-710142787864", e2._sentryDebugIdIdentifier = "sentry-dbid-6caa3dc0-dda4-4d10-806c-710142787864");
  } catch (e3) {
  }
}();
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let avatar = "";
  let loading = false;
  let hasLangChanged = false;
  let locale = "";
  let errors = {};
  async function handleUpdate() {
    errors = updateProfileValidation($profile);
    if (Object.values(errors).some((error) => error)) {
      loading = false;
      return;
    }
    try {
      console.log({ hasLangChanged });
      loading = true;
      const updates = {
        fullname: $profile.fullname,
        username: $profile.username,
        email: $profile.email,
        locale
      };
      if (avatar) {
        const filename = `user/${generateUUID()}.webp`;
        const { data } = await supabase.storage.from("avatars").upload(filename, avatar, { cacheControl: "3600", upsert: false });
        if (data) {
          const { data: response } = await supabase.storage.from("avatars").getPublicUrl(filename);
          updates.avatar_url = response.publicUrl;
          set_store_value(profile, $profile.avatar_url = response.publicUrl, $profile);
        }
        avatar = void 0;
      }
      let { error } = await supabase.from("profile").update(updates).match({ id: $profile.id });
      profile.update((_profile) => ({ ..._profile, ...updates }));
      snackbar.success("snackbar.course_settings.success.update_successful");
      if (hasLangChanged) {
        handleLocaleChange(locale);
      }
      if (error)
        throw error;
    } catch (error) {
      let message = error.message;
      if (message.includes("profile_username_key")) {
        message = $t("snackbar.lms.error.username_exists");
      }
      snackbar.error(`${$t("snackbar.lms.error.update")} ${message}`);
      loading = false;
    } finally {
      loading = false;
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    locale = !locale ? $profile.locale : locale;
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border-c rounded border-gray-200 dark:border-neutral-600 w-full mt-5"
      },
      {},
      {
        default: () => {
          return `${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex flex-col lg:flex-row items-center lg:items-start py-7 border-bottom-c "
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 4,
                    md: 8,
                    lg: 4,
                    class: "mt-2 md:mt-0"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape($t("settings.profile.profile_picture.heading"))}`;
                        }
                      })}`;
                    }
                  }
                )} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 2,
                    md: 4,
                    lg: 8,
                    class: "mt-2 lg:mt-0"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(UploadImage, "UploadImage").$$render(
                        $$result,
                        {
                          src: $profile.avatar_url,
                          widthHeight: "w-16 h-16 lg:w-24 lg:h-24",
                          avatar
                        },
                        {
                          avatar: ($$value) => {
                            avatar = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex flex-col lg:flex-row py-7 border-bottom-c"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 4, md: 4, lg: 4 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("settings.profile.personal_information.heading"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 8,
                    md: 8,
                    lg: 8,
                    class: "mt-2 lg:mt-0"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.profile.personal_information.full_name"),
                          className: "w-full lg:w-60 mb-4",
                          errorMessage: $t(errors.fullname),
                          value: $profile.fullname
                        },
                        {
                          value: ($$value) => {
                            $profile.fullname = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.profile.personal_information.username"),
                          className: "w-full lg:w-60 mb-4",
                          errorMessage: $t(errors.username),
                          value: $profile.username
                        },
                        {
                          value: ($$value) => {
                            $profile.username = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.profile.personal_information.email"),
                          className: "w-full lg:w-60 mb-4",
                          errorMessage: $t(errors.email),
                          value: $profile.email
                        },
                        {
                          value: ($$value) => {
                            $profile.email = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(LanguagePicker, "LanguagePicker").$$render(
                        $$result,
                        {
                          className: "w-full lg:w-60 mb-4",
                          hasLangChanged,
                          value: locale
                        },
                        {
                          hasLangChanged: ($$value) => {
                            hasLangChanged = $$value;
                            $$settled = false;
                          },
                          value: ($$value) => {
                            locale = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "m-5 w-full flex items-center gap-2 lg:justify-center"
            },
            {},
            {
              default: () => {
                return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                  $$result,
                  {
                    label: $t("settings.profile.update_profile"),
                    variant: VARIANTS.CONTAINED_DARK,
                    className: "mr-5",
                    isLoading: loading,
                    isDisabled: loading,
                    onClick: handleUpdate
                  },
                  {},
                  {}
                )}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_t();
  return $$rendered;
});
const css$9 = {
  code: "@media screen and (min-width: 769px){.desktop.svelte-1qqe4ae{display:block}.mobile.svelte-1qqe4ae{display:none}}@media screen and (max-width: 768px){.desktop.svelte-1qqe4ae{display:none}.mobile.svelte-1qqe4ae{display:flex}}",
  map: null
};
const LandingpageSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $landingPageSettings, $$unsubscribe_landingPageSettings;
  let $handleOpenWidget, $$unsubscribe_handleOpenWidget;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_landingPageSettings = subscribe(landingPageSettings, (value) => $landingPageSettings = value);
  $$unsubscribe_handleOpenWidget = subscribe(handleOpenWidget, (value) => $handleOpenWidget = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let isSaving = false;
  let creatingNewQuestion = false;
  let widgetKey = "";
  const banner = [
    {
      value: "video",
      label: `${$t("settings.landing_page.actions.banner_type.video")}`
    },
    {
      value: "image",
      label: `${$t("settings.landing_page.actions.banner_type.image")}`
    }
  ];
  const supabase2 = getSupabase();
  let newQuestion = { title: "", content: "" };
  function widgetControl(key) {
    widgetKey = key;
    set_store_value(handleOpenWidget, $handleOpenWidget.open = true, $handleOpenWidget);
  }
  function createNewFaq() {
    newQuestion = { title: "", content: "" };
    creatingNewQuestion = true;
  }
  function saveNewFAQ() {
    if (newQuestion.title !== "" && newQuestion.content !== "") {
      set_store_value(
        landingPageSettings,
        $landingPageSettings.faq.questions = [
          ...$landingPageSettings.faq.questions,
          {
            id: /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(),
            title: newQuestion.title,
            content: newQuestion.content
          }
        ],
        $landingPageSettings
      );
      creatingNewQuestion = false;
    }
  }
  function cancelNewFAQ() {
    creatingNewQuestion = false;
  }
  function deleteFaq(id) {
    let faqs = $landingPageSettings.faq.questions;
    const filteredFaq = faqs.filter((faq) => faq.id !== id);
    set_store_value(landingPageSettings, $landingPageSettings.faq.questions = filteredFaq, $landingPageSettings);
  }
  const checkPrefix = (inputValue) => {
    if (!inputValue)
      return;
    if (inputValue.trim() !== "") {
      if (!inputValue.startsWith("https://")) {
        inputValue = "https://" + inputValue;
      }
    }
    return inputValue;
  };
  async function handleSave() {
    isSaving = true;
    set_store_value(landingPageSettings, $landingPageSettings.footer.twitter = checkPrefix($landingPageSettings.footer.twitter) || "", $landingPageSettings);
    set_store_value(landingPageSettings, $landingPageSettings.footer.linkedin = checkPrefix($landingPageSettings.footer.linkedin) || "", $landingPageSettings);
    set_store_value(landingPageSettings, $landingPageSettings.footer.facebook = checkPrefix($landingPageSettings.footer.facebook) || "", $landingPageSettings);
    const { error } = await supabase2.from("organization").update({ landingpage: $landingPageSettings }).match({ id: $currentOrg.id });
    if (error) {
      const message = error?.message || "snackbar.lms.error.try_again";
      snackbar.error(`snackbar.lms.error.update ${message}`);
    } else {
      set_store_value(currentOrg, $currentOrg.landingpage = $landingPageSettings, $currentOrg);
      snackbar.success("snackbar.success_update");
    }
    isSaving = false;
  }
  function setDefault(landingpage) {
    if (landingpage && Object.keys(landingpage).length) {
      if (!landingpage?.header?.banner) {
        landingpage.header.banner = $landingPageSettings.header.banner;
      }
      if (!landingpage?.header?.background) {
        landingpage.header.background = $landingPageSettings.header.background;
      }
      set_store_value(landingPageSettings, $landingPageSettings = { ...landingpage }, $landingPageSettings);
    }
  }
  $$result.css.add(css$9);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setDefault($currentOrg?.landingpage);
    }
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
                        return `${escape($t("settings.landing_page.heading"))}`;
                      }
                    })} ${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $landingPageSettings.header.show
                      },
                      {
                        toggled: ($$value) => {
                          $landingPageSettings.header.show = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.show_section"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.hide_section"))}</span>`;
                        }
                      }
                    )}`;
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
                      return `${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.title"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_title"),
                          className: "w-full mb-5",
                          value: $landingPageSettings.header.title
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.header.title = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.title_highlight"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.highlight"),
                          className: "w-full mb-5",
                          value: $landingPageSettings.header.titleHighlight
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.header.titleHighlight = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextArea, "TextArea").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.subtitle"),
                          labelClassName: "font-light",
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_subtitle"),
                          className: "w-full mb-5",
                          isAIEnabled: true,
                          value: $landingPageSettings.header.subtitle
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.header.subtitle = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape($t("settings.landing_page.actions.heading"))}`;
                        }
                      })} ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.actions.label"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.label"),
                          className: "w-full mt-3 mb-5",
                          value: $landingPageSettings.header.action.label
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.header.action.label = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} <div class="gap-2 mb-5">${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.actions.link"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.link"),
                          value: $landingPageSettings.header.action.link
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.header.action.link = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          toggled: $landingPageSettings.header.action.redirect
                        },
                        {
                          toggled: ($$value) => {
                            $landingPageSettings.header.action.redirect = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.actions.redirect"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.actions.no_redirect"))}</span>`;
                          }
                        }
                      )}</div> <div></div> ${validate_component(RadioButtonGroup$1, "RadioButtonGroup").$$render(
                        $$result,
                        {
                          legendText: $t("settings.landing_page.actions.banner_type.heading"),
                          class: "mt-10 mb-5",
                          selected: $landingPageSettings.header.banner.type
                        },
                        {
                          selected: ($$value) => {
                            $landingPageSettings.header.banner.type = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          default: () => {
                            return `${each(banner, (item) => {
                              return `${validate_component(RadioButton$1, "RadioButton").$$render($$result, { value: item.value, labelText: item.label }, {}, {})}`;
                            })}`;
                          }
                        }
                      )} ${$landingPageSettings.header.banner.type === "video" ? `<div class="gap-2 mt-3 mb-5">${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.actions.link"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.video"),
                          value: $landingPageSettings.header.banner.video
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.header.banner.video = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}</div>` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          variant: VARIANTS.OUTLINED,
                          label: $t("settings.landing_page.about.select_image"),
                          className: "mt-3",
                          onClick: () => widgetControl("banner")
                        },
                        {},
                        {}
                      )}`} ${$landingPageSettings.header.banner.image && $landingPageSettings.header.banner.type === "image" ? `<img alt="bannerImage"${add_attribute("src", $landingPageSettings.header.banner.image, 0)} class="mt-2 rounded-md w-full">` : ``} ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          toggled: $landingPageSettings.header.banner.show
                        },
                        {
                          toggled: ($$value) => {
                            $landingPageSettings.header.banner.show = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.actions.show_banner"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.actions.hide_banner"))}</span>`;
                          }
                        }
                      )} ${$handleOpenWidget.open && widgetKey === "banner" ? `${validate_component(UploadWidget, "UploadWidget").$$render(
                        $$result,
                        {
                          imageURL: $landingPageSettings.header.banner.image
                        },
                        {
                          imageURL: ($$value) => {
                            $landingPageSettings.header.banner.image = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}` : ``}  <div class="mt-4"><p class="font-bold mb-4">${escape($t("settings.landing_page.background.title"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          variant: VARIANTS.OUTLINED,
                          label: $t("settings.landing_page.about.select_image"),
                          className: "mt-3",
                          onClick: () => widgetControl("background")
                        },
                        {},
                        {}
                      )} ${$landingPageSettings.header.background?.image ? `<img alt="backgroundImage"${add_attribute("src", $landingPageSettings.header.background.image, 0)} class="mt-2 rounded-md w-full">` : ``} ${validate_component(Toggle$1, "Toggle").$$render(
                        $$result,
                        {
                          size: "sm",
                          toggled: $landingPageSettings.header.background.show
                        },
                        {
                          toggled: ($$value) => {
                            $landingPageSettings.header.background.show = $$value;
                            $$settled = false;
                          }
                        },
                        {
                          labelB: () => {
                            return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.background.show_background"))}</span>`;
                          },
                          labelA: () => {
                            return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.background.hide_background"))}</span>`;
                          }
                        }
                      )} ${$handleOpenWidget.open && widgetKey === "background" ? `${validate_component(UploadWidget, "UploadWidget").$$render(
                        $$result,
                        {
                          imageURL: $landingPageSettings.header.background.image
                        },
                        {
                          imageURL: ($$value) => {
                            $landingPageSettings.header.background.image = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}` : ``}</div>`;
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
                        return `${escape($t("settings.landing_page.about.heading"))}`;
                      }
                    })} ${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $landingPageSettings.aboutUs.show
                      },
                      {
                        toggled: ($$value) => {
                          $landingPageSettings.aboutUs.show = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.show_section"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.hide_section"))}</span>`;
                        }
                      }
                    )}`;
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
                      return `${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.about.title"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_title"),
                          className: "mb-5",
                          value: $landingPageSettings.aboutUs.title
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.aboutUs.title = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextArea, "TextArea").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.about.content"),
                          labelClassName: "font-light",
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.content"),
                          className: "mb-5",
                          isAIEnabled: true,
                          value: $landingPageSettings.aboutUs.content
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.aboutUs.content = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} <div><p class="font-bold">${escape($t("settings.landing_page.about.upload_an_image"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          variant: VARIANTS.OUTLINED,
                          label: $t("settings.landing_page.about.select_image"),
                          className: "mt-3",
                          onClick: () => widgetControl("about-us")
                        },
                        {},
                        {}
                      )} ${$landingPageSettings.aboutUs.imageUrl ? `<img alt="About us"${add_attribute("src", $landingPageSettings.aboutUs.imageUrl, 0)} class="mt-2 rounded-md w-full">` : ``} ${$handleOpenWidget.open && widgetKey === "about-us" ? `${validate_component(UploadWidget, "UploadWidget").$$render(
                        $$result,
                        {
                          imageURL: $landingPageSettings.aboutUs.imageUrl
                        },
                        {
                          imageURL: ($$value) => {
                            $landingPageSettings.aboutUs.imageUrl = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}` : ``}</div>`;
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
                        return `${escape($t("settings.landing_page.courses.heading"))}`;
                      }
                    })} ${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $landingPageSettings.courses.show
                      },
                      {
                        toggled: ($$value) => {
                          $landingPageSettings.courses.show = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.courses.show_section"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.courses.hide_section"))}</span>`;
                        }
                      }
                    )}`;
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
                      return `${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.courses.title"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_title"),
                          value: $landingPageSettings.courses.title
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.courses.title = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.courses.title_highlight"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.highlight"),
                          value: $landingPageSettings.courses.titleHighlight
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.courses.titleHighlight = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextArea, "TextArea").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.courses.subtitle"),
                          labelClassName: "font-light",
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_subtitle"),
                          isAIEnabled: true,
                          value: $landingPageSettings.courses.subtitle
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.courses.subtitle = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
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
                        return `${escape($t("settings.landing_page.faq.heading"))}`;
                      }
                    })} ${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $landingPageSettings.faq.show
                      },
                      {
                        toggled: ($$value) => {
                          $landingPageSettings.faq.show = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.faq.show_section"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.faq.hide_section"))}</span>`;
                        }
                      }
                    )}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.faq.title"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_title"),
                        className: "mb-5",
                        value: $landingPageSettings.faq.title
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.faq.title = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${each($landingPageSettings.faq.questions, (item) => {
                      return `<div class="mb-3">${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.faq.question"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_question_here"),
                          className: "mb-5",
                          value: item.title
                        },
                        {
                          value: ($$value) => {
                            item.title = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextArea, "TextArea").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.faq.answer"),
                          labelClassName: "font-light",
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_answer_here"),
                          className: "mb-5",
                          isAIEnabled: true,
                          value: item.content
                        },
                        {
                          value: ($$value) => {
                            item.content = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(IconButton, "IconButton").$$render($$result, { onClick: () => deleteFaq(item.id) }, {}, {
                        default: () => {
                          return `${validate_component(TrashCan, "TrashCan").$$render($$result, { size: 24, class: "fill-red-700" }, {}, {})} `;
                        }
                      })} </div>`;
                    })} ${creatingNewQuestion ? `${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.faq.question"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_question_here"),
                        className: "mb-5",
                        value: newQuestion.title
                      },
                      {
                        value: ($$value) => {
                          newQuestion.title = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextArea, "TextArea").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.faq.answer"),
                        labelClassName: "font-light",
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_answer_here"),
                        className: "mb-5",
                        isAIEnabled: true,
                        value: newQuestion.content
                      },
                      {
                        value: ($$value) => {
                          newQuestion.content = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} <div class="flex items-center gap-2">${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.OUTLINED,
                        label: $t("settings.landing_page.faq.save"),
                        onClick: saveNewFAQ
                      },
                      {},
                      {}
                    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.OUTLINED,
                        label: $t("settings.landing_page.faq.cancel"),
                        onClick: cancelNewFAQ
                      },
                      {},
                      {}
                    )}</div>` : `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        variant: VARIANTS.OUTLINED,
                        label: $t("settings.landing_page.faq.button"),
                        onClick: createNewFaq
                      },
                      {},
                      {}
                    )}`}`;
                  }
                })}`;
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
                        return `${escape($t("settings.landing_page.contact_us.heading"))}`;
                      }
                    })} ${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $landingPageSettings.contact.show
                      },
                      {
                        toggled: ($$value) => {
                          $landingPageSettings.contact.show = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.contact_us.show_section"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.contact_us.hide_section"))}</span>`;
                        }
                      }
                    )}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.contact_us.title"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_title"),
                        className: "mb-5",
                        value: $landingPageSettings.contact.title
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.contact.title = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.contact_us.title_highlight"),
                        labelClassName: "font-light",
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.highlight"),
                        className: "mb-5",
                        value: $landingPageSettings.contact.titleHighlight
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.contact.titleHighlight = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextArea, "TextArea").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.contact_us.subtitle"),
                        labelClassName: "font-light",
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_subtitle"),
                        className: "mt-3 mb-5",
                        isAIEnabled: true,
                        value: $landingPageSettings.contact.subtitle
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.contact.subtitle = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.contact_us.phone_number"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.number"),
                        className: "mt-3 mb-5",
                        value: $landingPageSettings.contact.phone
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.contact.phone = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.contact_us.email"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.email"),
                        className: "mt-3 mb-5",
                        value: $landingPageSettings.contact.email
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.contact.email = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                })}`;
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
                        return `${escape($t("settings.landing_page.mailing_list.heading"))}`;
                      }
                    })} ${validate_component(Toggle$1, "Toggle").$$render(
                      $$result,
                      {
                        size: "sm",
                        toggled: $landingPageSettings.mailinglist.show
                      },
                      {
                        toggled: ($$value) => {
                          $landingPageSettings.mailinglist.show = $$value;
                          $$settled = false;
                        }
                      },
                      {
                        labelB: () => {
                          return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.mailing_list.show_section"))}</span>`;
                        },
                        labelA: () => {
                          return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.mailing_list.hide_section"))}</span>`;
                        }
                      }
                    )}`;
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
                      return `${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.mailing_list.title"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_title"),
                          className: "mb-5",
                          value: $landingPageSettings.mailinglist.title
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.mailinglist.title = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextArea, "TextArea").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.mailing_list.subtitle"),
                          labelClassName: "font-light",
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.write_your_subtitle"),
                          className: "mb-5",
                          isAIEnabled: true,
                          value: $landingPageSettings.mailinglist.subtitle
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.mailinglist.subtitle = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.landing_page.mailing_list.button_label"),
                          placeholder: $t("course.navItem.lessons.exercises.all_exercises.label"),
                          className: "mb-5",
                          value: $landingPageSettings.mailinglist.buttonLabel
                        },
                        {
                          value: ($$value) => {
                            $landingPageSettings.mailinglist.buttonLabel = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render($$result, { class: "flex lg:flex-row flex-col py-7" }, {}, {
            default: () => {
              return `${validate_component(Column$1, "Column").$$render($$result, { sm: 4, md: 4, lg: 4 }, {}, {
                default: () => {
                  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape($t("settings.landing_page.footer.heading"))}`;
                    }
                  })} ${validate_component(Toggle$1, "Toggle").$$render(
                    $$result,
                    {
                      size: "sm",
                      toggled: $landingPageSettings.footer.show
                    },
                    {
                      toggled: ($$value) => {
                        $landingPageSettings.footer.show = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      labelB: () => {
                        return `<span slot="labelB" style="color: gray">${escape($t("settings.landing_page.footer.show_section"))}</span>`;
                      },
                      labelA: () => {
                        return `<span slot="labelA" style="color: gray">${escape($t("settings.landing_page.footer.hide_section"))}</span>`;
                      }
                    }
                  )}`;
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
                    return `${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.footer.facebook"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.facebook"),
                        className: "mb-5",
                        value: $landingPageSettings.footer.facebook
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.footer.facebook = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}  ${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.footer.twitter"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.twitter"),
                        className: "mb-5",
                        value: $landingPageSettings.footer.twitter
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.footer.twitter = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )} ${validate_component(TextField, "TextField").$$render(
                      $$result,
                      {
                        label: $t("settings.landing_page.footer.linkedin"),
                        placeholder: $t("course.navItem.lessons.exercises.all_exercises.linkedin"),
                        className: "mb-5",
                        value: $landingPageSettings.footer.linkedin
                      },
                      {
                        value: ($$value) => {
                          $landingPageSettings.footer.linkedin = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}`;
                  }
                }
              )}`;
            }
          })} <div class="sticky desktop float-right bottom-12 mr-2 z-[120] svelte-1qqe4ae">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("settings.landing_page.save_changes"),
              isLoading: isSaving,
              isDisabled: isSaving,
              onClick: handleSave
            },
            {},
            {}
          )}</div>`;
        }
      }
    )} <div class="absolute mobile right-6 bottom-8 z-[120] svelte-1qqe4ae"><span>${validate_component(IconButton, "IconButton").$$render($$result, { onClick: handleSave, disabled: isSaving }, {}, {
      default: () => {
        return `${validate_component(Save, "Save").$$render(
          $$result,
          {
            size: 40,
            class: " bg-blue-700 p-1 rounded-full"
          },
          {},
          {}
        )}`;
      }
    })}</span> </div>`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_landingPageSettings();
  $$unsubscribe_handleOpenWidget();
  $$unsubscribe_t();
  return $$rendered;
});
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, t = function(r2) {
  return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
}, n = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
}, e = function(r2, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
}, u = function(r2) {
  return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
}, a = function(r2) {
  return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
}, o = function(r2) {
  return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
}, i = /^#([0-9a-f]{3,8})$/i, s = function(r2) {
  var t2 = r2.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
}, h = function(r2) {
  var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
}, b = function(r2) {
  var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
}, g = function(r2) {
  return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
}, d = function(r2) {
  return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
}, f = function(r2) {
  return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
}, c = function(r2) {
  return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
}, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = { string: [[function(r2) {
  var t2 = i.exec(r2);
  return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r2) {
  var t2 = v.exec(r2) || m.exec(r2);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2)
    return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r2) {
  var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = void 0 === o2 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r2) {
  var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2))
    return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r2) {
  var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2))
    return null;
  var h2 = function(r3) {
    return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
  }({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h2);
}, "hsv"]] }, N = function(r2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r2);
    if (e2)
      return [e2, t2[n2][1]];
  }
  return [null, void 0];
}, x = function(r2) {
  return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
}, M = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
}, H = function(r2) {
  return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
}, $ = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
}, j = function() {
  function r2(r3) {
    this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r2.prototype.isValid = function() {
    return null !== this.parsed;
  }, r2.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r2.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r2.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r2.prototype.toHex = function() {
    return r3 = o(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r3, t2, e2, u2, a2, i2;
  }, r2.prototype.toRgb = function() {
    return o(this.rgba);
  }, r2.prototype.toRgbString = function() {
    return r3 = o(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r2.prototype.toHslString = function() {
    return r3 = d(c(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsv = function() {
    return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
    var r3;
  }, r2.prototype.invert = function() {
    return w({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
    var r3;
  }, r2.prototype.saturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, r3));
  }, r2.prototype.desaturate = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, -r3));
  }, r2.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r2.prototype.lighten = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, r3));
  }, r2.prototype.darken = function(r3) {
    return void 0 === r3 && (r3 = 0.1), w($(this.rgba, -r3));
  }, r2.prototype.rotate = function(r3) {
    return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
  }, r2.prototype.alpha = function(r3) {
    return "number" == typeof r3 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
    var t2;
  }, r2.prototype.hue = function(r3) {
    var t2 = c(this.rgba);
    return "number" == typeof r3 ? w({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r2.prototype.isEqual = function(r3) {
    return this.toHex() === w(r3).toHex();
  }, r2;
}(), w = function(r2) {
  return r2 instanceof j ? r2 : new j(r2);
};
const css$8 = {
  code: ".slider.svelte-w4j1dz.svelte-w4j1dz{---track-width:var(--track-width, unset);---track-height:var(--track-height, 6px);---track-background:var(--track-background, #949494);---track-border:var(--track-border, none);---thumb-size:var(--thumb-size, 16px);---thumb-background:var(--thumb-background, #2d2d2d);---thumb-border:var(--thumb-border, none);---position:var(--position, 0px);---margin-inline-thumb-bigger:max(var(---thumb-size) - var(---track-height), 0px);---margin-inline-thumb-smaller:max(var(---track-height) - var(---thumb-size), 0px);position:relative;margin:auto;user-select:none;-webkit-user-select:none;background-color:transparent}.slider.svelte-w4j1dz.svelte-w4j1dz::before{background-color:transparent}[aria-orientation='horizontal'].svelte-w4j1dz.svelte-w4j1dz{width:var(---track-width);max-width:calc(100% - 2 * var(---margin-inline-thumb-bigger));height:calc(max(var(---track-height), var(---thumb-size)) + 4px);height:max(var(---track-height), var(---thumb-size));margin-inline:var(---margin-inline-thumb-bigger);margin-block:var(--margin-block, 8px)}[aria-orientation='vertical'].svelte-w4j1dz.svelte-w4j1dz{width:calc(max(var(---track-height), var(---thumb-size)) + 4px);width:max(var(---track-height), var(---thumb-size));height:var(---track-width);max-height:calc(100% - 2 * var(---margin-inline-thumb-bigger));margin-block:var(---margin-inline-thumb-bigger);margin-inline:var(--margin-block, 8px)}.track.svelte-w4j1dz.svelte-w4j1dz{position:absolute;pointer-events:none;background:var(---track-background);border:var(---track-border);border-radius:calc(var(---track-height) / 2);box-sizing:border-box}[aria-orientation='horizontal'].svelte-w4j1dz .track.svelte-w4j1dz{height:var(---track-height);top:50%;transform:translateY(-50%);left:0;right:0}[aria-orientation='vertical'].svelte-w4j1dz .track.svelte-w4j1dz{width:var(---track-height);left:50%;transform:translateX(-50%);top:0;bottom:0}.thumb.svelte-w4j1dz.svelte-w4j1dz{pointer-events:none;position:absolute;height:var(---thumb-size);width:var(---thumb-size);border-radius:calc(var(---thumb-size) / 2);background:var(---thumb-background);border:var(---thumb-border);box-sizing:border-box;transform:translate(-50%, -50%);--margin-left:(\n				2 * var(---track-height) - var(---thumb-size) - var(---margin-inline-thumb-smaller)\n			) / 2;--left:calc(var(---position) * (100% - 2 * var(--margin-left)) + var(--margin-left))}[aria-orientation='horizontal'].svelte-w4j1dz:not(.reverse) .thumb.svelte-w4j1dz{top:50%;left:var(--left)}[aria-orientation='vertical'].svelte-w4j1dz:not(.reverse) .thumb.svelte-w4j1dz{left:50%;bottom:calc(var(--left) - var(---thumb-size))}[aria-orientation='horizontal'].reverse.svelte-w4j1dz .thumb.svelte-w4j1dz{top:50%;right:calc(var(--left) - var(---thumb-size))}[aria-orientation='vertical'].reverse.svelte-w4j1dz .thumb.svelte-w4j1dz{left:50%;top:calc(var(--left))}.slider.svelte-w4j1dz.svelte-w4j1dz:focus-visible{outline:none}.slider.svelte-w4j1dz:focus-visible .track.svelte-w4j1dz{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _min;
  let _max;
  let position;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { value = 50 } = $$props;
  let { ariaValueText = (current) => current.toString() } = $$props;
  let { name = void 0 } = $$props;
  let { direction = "horizontal" } = $$props;
  let { reverse = false } = $$props;
  let { keyboardOnly = false } = $$props;
  let { slider = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaLabelledBy = void 0 } = $$props;
  let { ariaControls = void 0 } = $$props;
  let { isDragging = false } = $$props;
  createEventDispatcher();
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.ariaValueText === void 0 && $$bindings.ariaValueText && ariaValueText !== void 0)
    $$bindings.ariaValueText(ariaValueText);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.keyboardOnly === void 0 && $$bindings.keyboardOnly && keyboardOnly !== void 0)
    $$bindings.keyboardOnly(keyboardOnly);
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0)
    $$bindings.slider(slider);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.ariaControls === void 0 && $$bindings.ariaControls && ariaControls !== void 0)
    $$bindings.ariaControls(ariaControls);
  if ($$props.isDragging === void 0 && $$bindings.isDragging && isDragging !== void 0)
    $$bindings.isDragging(isDragging);
  $$result.css.add(css$8);
  _min = typeof min === "string" ? parseFloat(min) : min;
  _max = typeof max === "string" ? parseFloat(max) : max;
  position = ((value - _min) / (_max - _min) * 1).toFixed(4);
  return ` <div class="${["slider svelte-w4j1dz", reverse ? "reverse" : ""].join(" ").trim()}" role="slider"${add_attribute("aria-orientation", direction, 0)}${add_attribute("aria-valuemax", _max, 0)}${add_attribute("aria-valuemin", _min, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("aria-valuetext", ariaValueText(value), 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-labelledby", ariaLabelledBy, 0)}${add_attribute("aria-controls", ariaControls, 0)} tabindex="0"${add_styles({ "--position": position })}${add_attribute("this", slider, 0)}><div class="track svelte-w4j1dz"></div> <div class="thumb svelte-w4j1dz"></div></div> ${name ? `<input type="hidden"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}>` : ``} `;
});
const css$7 = {
  code: ".picker.svelte-1x9tz9y{position:relative;display:inline-block;width:var(--picker-width, 200px);height:var(--picker-height, 200px);background:linear-gradient(#ffffff00, #000000ff), linear-gradient(0.25turn, #ffffffff, #00000000),\n			var(--picker-color-bg);border-radius:var(--picker-radius, 8px);outline:none;user-select:none}.s.svelte-1x9tz9y,.v.svelte-1x9tz9y{position:absolute;--track-background:none;--track-border:none;--thumb-background:none;--thumb-border:none;--thumb-size:2px;--margin-block:0;--track-height:var(--picker-indicator-size, 10px);user-select:none;-webkit-user-select:none}.s.svelte-1x9tz9y{top:calc(var(--pos-y) * (var(--picker-height, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);left:2px;--track-width:calc(var(--picker-width, 200px) - 4px)}.v.svelte-1x9tz9y{top:2px;left:calc(var(--pos-x) * (var(--picker-width, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);--track-width:calc(var(--picker-height, 200px) - 4px)}",
  map: null
};
const Picker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { components } = $$props;
  let { h: h2 } = $$props;
  let { s: s2 } = $$props;
  let { v: v2 } = $$props;
  let { isDark } = $$props;
  let { texts } = $$props;
  let picker;
  let pickerColorBg;
  let pos = { x: 100, y: 0 };
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.h === void 0 && $$bindings.h && h2 !== void 0)
    $$bindings.h(h2);
  if ($$props.s === void 0 && $$bindings.s && s2 !== void 0)
    $$bindings.s(s2);
  if ($$props.v === void 0 && $$bindings.v && v2 !== void 0)
    $$bindings.v(v2);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$7);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (typeof h2 === "number")
        pickerColorBg = w({ h: h2, s: 100, v: 100, a: 1 }).toHex();
    }
    {
      if (typeof s2 === "number" && typeof v2 === "number" && picker)
        pos = { x: s2, y: 100 - v2 };
    }
    {
      dispatch("input", { s: s2, v: v2 });
    }
    $$rendered = `  <div class="picker svelte-1x9tz9y"${add_styles({ "--picker-color-bg": pickerColorBg })}${add_attribute("this", picker, 0)}>${validate_component(components.pickerIndicator || missing_component, "svelte:component").$$render($$result, { pos, isDark }, {}, {})} <div class="s svelte-1x9tz9y"${add_styles({ "--pos-y": pos.y })}>${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        keyboardOnly: true,
        ariaValueText: (value) => `${value}%`,
        ariaLabel: texts.label.s,
        value: s2
      },
      {
        value: ($$value) => {
          s2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="v svelte-1x9tz9y"${add_styles({ "--pos-x": pos.x })}>${validate_component(Slider, "Slider").$$render(
      $$result,
      {
        keyboardOnly: true,
        ariaValueText: (value) => `${value}%`,
        direction: "vertical",
        ariaLabel: texts.label.v,
        value: v2
      },
      {
        value: ($$value) => {
          v2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div> `;
  } while (!$$settled);
  return $$rendered;
});
const css$6 = {
  code: "div.svelte-i5mg2p{position:absolute;left:calc(var(--pos-x) * (var(--picker-width, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);top:calc(var(--pos-y) * (var(--picker-height, 200px) - var(--picker-indicator-size, 10px) - 4px) / 100 + 2px);width:var(--picker-indicator-size, 10px);height:var(--picker-indicator-size, 10px);background-color:white;box-shadow:0 0 4px black;border-radius:50%;pointer-events:none;z-index:1;transition:box-shadow 0.2s}.is-dark.svelte-i5mg2p{box-shadow:0 0 4px white}",
  map: null
};
const PickerIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pos } = $$props;
  let { isDark } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  $$result.css.add(css$6);
  return `<div class="${["picker-indicator svelte-i5mg2p", isDark ? "is-dark" : ""].join(" ").trim()}"${add_styles({ "--pos-x": pos.x, "--pos-y": pos.y })}></div>`;
});
const css$5 = {
  code: ".text-input.svelte-qtukzs.svelte-qtukzs{margin:var(--text-input-margin, 5px 0 0)}.input-container.svelte-qtukzs.svelte-qtukzs{display:flex;flex:1;gap:10px}input.svelte-qtukzs.svelte-qtukzs,button.svelte-qtukzs.svelte-qtukzs,.button-like.svelte-qtukzs.svelte-qtukzs{flex:1;border:none;background-color:var(--cp-input-color, #eee);color:var(--cp-text-color, var(--cp-border-color));padding:0;border-radius:5px;height:30px;line-height:30px;text-align:center}input.svelte-qtukzs.svelte-qtukzs{width:5px;font-family:inherit}button.svelte-qtukzs.svelte-qtukzs,.button-like.svelte-qtukzs.svelte-qtukzs{position:relative;flex:1;margin:8px 0 0;height:30px;width:100%;transition:background-color 0.2s;cursor:pointer;font-family:inherit}.button-like.svelte-qtukzs.svelte-qtukzs{cursor:default}.appear.svelte-qtukzs.svelte-qtukzs,.disappear.svelte-qtukzs.svelte-qtukzs{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:100%;transition:all 0.5s}button.svelte-qtukzs:hover .disappear.svelte-qtukzs,.appear.svelte-qtukzs.svelte-qtukzs{opacity:0}.disappear.svelte-qtukzs.svelte-qtukzs,button.svelte-qtukzs:hover .appear.svelte-qtukzs{opacity:1}button.svelte-qtukzs.svelte-qtukzs:hover{background-color:var(--cp-button-hover-color, #ccc)}input.svelte-qtukzs.svelte-qtukzs:focus,button.svelte-qtukzs.svelte-qtukzs:focus{outline:none}input.svelte-qtukzs.svelte-qtukzs:focus-visible,button.svelte-qtukzs.svelte-qtukzs:focus-visible{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nextMode;
  let h2;
  let s2;
  let v2;
  let a2;
  createEventDispatcher();
  let { isAlpha } = $$props;
  let { rgb } = $$props;
  let { hsv } = $$props;
  let { hex } = $$props;
  let { textInputModes } = $$props;
  let { texts } = $$props;
  let mode = textInputModes[0] || "hex";
  if ($$props.isAlpha === void 0 && $$bindings.isAlpha && isAlpha !== void 0)
    $$bindings.isAlpha(isAlpha);
  if ($$props.rgb === void 0 && $$bindings.rgb && rgb !== void 0)
    $$bindings.rgb(rgb);
  if ($$props.hsv === void 0 && $$bindings.hsv && hsv !== void 0)
    $$bindings.hsv(hsv);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.textInputModes === void 0 && $$bindings.textInputModes && textInputModes !== void 0)
    $$bindings.textInputModes(textInputModes);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$5);
  nextMode = textInputModes[(textInputModes.indexOf(mode) + 1) % textInputModes.length];
  h2 = Math.round(hsv.h);
  s2 = Math.round(hsv.s);
  v2 = Math.round(hsv.v);
  a2 = hsv.a === void 0 ? 1 : Math.round(hsv.a * 100) / 100;
  return `<div class="text-input svelte-qtukzs"><div class="input-container svelte-qtukzs">${mode === "hex" ? `<input${add_attribute("aria-label", texts.label.hex, 0)}${add_attribute("value", hex, 0)} class="svelte-qtukzs"${add_styles({ "flex": 3 })}>` : `${mode === "rgb" ? `<input${add_attribute("aria-label", texts.label.r, 0)}${add_attribute("value", rgb.r, 0)} type="number" min="0" max="255" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.g, 0)}${add_attribute("value", rgb.g, 0)} type="number" min="0" max="255" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.b, 0)}${add_attribute("value", rgb.b, 0)} type="number" min="0" max="255" class="svelte-qtukzs">` : `<input${add_attribute("aria-label", texts.label.h, 0)}${add_attribute("value", h2, 0)} type="number" min="0" max="360" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.s, 0)}${add_attribute("value", s2, 0)} type="number" min="0" max="100" class="svelte-qtukzs"> <input${add_attribute("aria-label", texts.label.v, 0)}${add_attribute("value", v2, 0)} type="number" min="0" max="100" class="svelte-qtukzs">`}`} ${isAlpha ? `<input${add_attribute("aria-label", texts.label.a, 0)}${add_attribute("value", a2, 0)} type="number" min="0" max="1" step="0.01" class="svelte-qtukzs">` : ``}</div> ${textInputModes.length > 1 ? `<button type="button" class="svelte-qtukzs"><span class="disappear svelte-qtukzs" aria-hidden="true">${escape(texts.color[mode])}</span> <span class="appear svelte-qtukzs">${escape(texts.changeTo)} ${escape(nextMode)}</span></button>` : `<div class="button-like svelte-qtukzs">${escape(texts.color[mode])}</div>`}</div> `;
});
const css$4 = {
  code: "label.svelte-lemcb1.svelte-lemcb1{display:inline-flex;align-items:center;gap:8px;cursor:pointer;border-radius:3px;margin:4px;height:var(--input-size, 25px);user-select:none}.container.svelte-lemcb1.svelte-lemcb1{position:relative;display:block;display:flex;align-items:center;justify-content:center;width:var(--input-size, 25px)}input.svelte-lemcb1.svelte-lemcb1{margin:0;padding:0;border:none;width:1px;height:1px;flex-shrink:0;opacity:0}.alpha.svelte-lemcb1.svelte-lemcb1{clip-path:circle(50%);background:var(--alpha-grid-bg)}.alpha.svelte-lemcb1.svelte-lemcb1,.color.svelte-lemcb1.svelte-lemcb1{position:absolute;width:var(--input-size, 25px);height:var(--input-size, 25px);border-radius:50%;user-select:none}input.svelte-lemcb1:focus-visible~.color.svelte-lemcb1{outline:2px solid var(--focus-color, red);outline-offset:2px}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { labelElement } = $$props;
  let { hex } = $$props;
  let { label } = $$props;
  let { name = void 0 } = $$props;
  let { isOpen } = $$props;
  if ($$props.labelElement === void 0 && $$bindings.labelElement && labelElement !== void 0)
    $$bindings.labelElement(labelElement);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css$4);
  return ` <label class="svelte-lemcb1"${add_attribute("this", labelElement, 0)}><div class="container svelte-lemcb1"><input type="color"${add_attribute("name", name, 0)}${add_attribute("value", hex, 0)} aria-haspopup="dialog" class="svelte-lemcb1"> <div class="alpha svelte-lemcb1"></div> <div class="color svelte-lemcb1"${add_styles({ "background": hex })}></div></div> ${escape(label)}</label> `;
});
const css$3 = {
  code: "div.svelte-h9ar9{padding:8px;background-color:var(--cp-bg-color, white);margin:0 10px 10px;border:1px solid var(--cp-border-color, black);border-radius:12px;display:none;width:max-content}.is-open.svelte-h9ar9{display:inline-block}[role='dialog'].svelte-h9ar9{position:absolute;top:calc(var(--input-size, 25px) + 12px);left:0;z-index:var(--picker-z-index, 2)}",
  map: null
};
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { wrapper } = $$props;
  let { isOpen } = $$props;
  let { isDialog } = $$props;
  if ($$props.wrapper === void 0 && $$bindings.wrapper && wrapper !== void 0)
    $$bindings.wrapper(wrapper);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.isDialog === void 0 && $$bindings.isDialog && isDialog !== void 0)
    $$bindings.isDialog(isDialog);
  $$result.css.add(css$3);
  return `<div class="${["wrapper svelte-h9ar9", isOpen ? "is-open" : ""].join(" ").trim()}"${add_attribute("role", isDialog ? "dialog" : void 0, 0)} aria-label="color picker"${add_attribute("this", wrapper, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const defaultTexts = {
  label: {
    h: "hue channel",
    s: "saturation channel",
    v: "brightness channel",
    r: "red channel",
    g: "green channel",
    b: "blue channel",
    a: "alpha channel",
    hex: "hex color",
    withoutColor: "without color"
  },
  color: {
    rgb: "rgb",
    hsv: "hsv",
    hex: "hex"
  },
  changeTo: "change to "
};
const css$2 = {
  code: "label.svelte-oskb5b.svelte-oskb5b{display:flex;justify-content:center;margin-bottom:4px;grid-area:nullable;user-select:none}input.svelte-oskb5b.svelte-oskb5b{margin:0}input.svelte-oskb5b.svelte-oskb5b:focus-visible{outline:none}input.svelte-oskb5b:focus-visible+span.svelte-oskb5b{width:14px;height:14px;border-radius:2px;outline:2px solid var(--focus-color, red);outline-offset:2px}div.svelte-oskb5b.svelte-oskb5b{width:32px;aspect-ratio:2;position:relative}div.svelte-oskb5b .svelte-oskb5b{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
const NullabilityCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isUndefined } = $$props;
  let { texts } = $$props;
  if ($$props.isUndefined === void 0 && $$bindings.isUndefined && isUndefined !== void 0)
    $$bindings.isUndefined(isUndefined);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  $$result.css.add(css$2);
  return `<label class="nullability-checkbox svelte-oskb5b"><div class="svelte-oskb5b"><input type="checkbox" class="svelte-oskb5b"${add_attribute("checked", isUndefined, 1)}> <span class="svelte-oskb5b"></span></div> ${escape(texts.label.withoutColor)} </label>`;
});
const css$1 = {
  code: "span.svelte-tsvobk.svelte-tsvobk{position:relative;color:var(--cp-text-color, var(--cp-border-color));--alpha-grid-bg:linear-gradient(45deg, #eee 25%, #0000 25%, #0000 75%, #eee 75%) 0 0 / 10px 10px,\n			linear-gradient(45deg, #eee 25%, #0000 25%, #0000 75%, #eee 75%) 5px 5px / 10px 10px}.h.svelte-tsvobk.svelte-tsvobk,.a.svelte-tsvobk.svelte-tsvobk{display:inline-flex;justify-content:center;--track-height:var(--slider-width, 10px);--track-width:var(--picker-height, 200px);--track-border:none;--thumb-size:calc(var(--slider-width, 10px) - 3px);--thumb-background:white;--thumb-border:1px solid black;--margin-block:0;--gradient-direction:0.5turn}.horizontal.svelte-tsvobk .h.svelte-tsvobk,.horizontal.svelte-tsvobk .a.svelte-tsvobk{--track-width:calc(var(--picker-width, 200px) - 12px);--gradient-direction:0.25turn;margin:4px 6px}.horizontal.svelte-tsvobk .h.svelte-tsvobk{margin-top:8px}.vertical.svelte-tsvobk .h.svelte-tsvobk,.vertical.svelte-tsvobk .a.svelte-tsvobk{margin-left:3px}.h.svelte-tsvobk.svelte-tsvobk{grid-area:hue;--gradient-hue:#ff1500fb, #ffff00 17.2%, #ffff00 18.2%, #00ff00 33.3%, #00ffff 49.5%, #00ffff 51.5%, #0000ff 67.7%,\n			#ff00ff 83.3%, #ff0000;--track-background:linear-gradient(var(--gradient-direction), var(--gradient-hue))}.a.svelte-tsvobk.svelte-tsvobk{grid-area:alpha;margin-top:2px;--track-background:linear-gradient(var(--gradient-direction), rgba(0, 0, 0, 0), var(--alphaless-color)),\n			var(--alpha-grid-bg)}span.svelte-tsvobk .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}",
  map: null
};
const wrapperPadding = 12;
const ColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { components = {} } = $$props;
  let { label = "Choose a color" } = $$props;
  let { name = void 0 } = $$props;
  let { nullable = false } = $$props;
  let { rgb = nullable ? void 0 : { r: 255, g: 0, b: 0, a: 1 } } = $$props;
  let { hsv = nullable ? void 0 : { h: 0, s: 100, v: 100, a: 1 } } = $$props;
  let { hex = nullable ? void 0 : "#ff0000" } = $$props;
  let { color = void 0 } = $$props;
  let { isDark = false } = $$props;
  let { isAlpha = true } = $$props;
  let { isDialog = true } = $$props;
  let { isOpen = !isDialog } = $$props;
  let { position = "fixed" } = $$props;
  let { isTextInput = true } = $$props;
  let { textInputModes = ["hex", "rgb", "hsv"] } = $$props;
  let { sliderDirection = "vertical" } = $$props;
  let { disableCloseClickOutside = false } = $$props;
  let { a11yColors = [{ bgHex: "#ffffff" }] } = $$props;
  let { a11yLevel = "AA" } = $$props;
  let { texts = void 0 } = $$props;
  let { a11yTexts = void 0 } = $$props;
  let _rgb = { r: 255, g: 0, b: 0, a: 1 };
  let _hsv = { h: 0, s: 100, v: 100, a: 1 };
  let _hex = "#ff0000";
  let isUndefined = false;
  let _isUndefined = isUndefined;
  let spanElement;
  let labelElement;
  let wrapper;
  let innerWidth;
  let innerHeight;
  const default_components = {
    pickerIndicator: PickerIndicator,
    textInput: TextInput,
    input: Input,
    nullabilityCheckbox: NullabilityCheckbox,
    wrapper: Wrapper
  };
  function getComponents() {
    return { ...default_components, ...components };
  }
  function getTexts() {
    return {
      label: { ...defaultTexts.label, ...texts?.label },
      color: { ...defaultTexts.color, ...texts?.color },
      changeTo: texts?.changeTo ?? defaultTexts.changeTo
    };
  }
  function updateColor() {
    if (isUndefined && !_isUndefined) {
      _isUndefined = true;
      hsv = rgb = hex = void 0;
      dispatch("input", { color, hsv, rgb, hex });
      return;
    } else if (_isUndefined && !isUndefined) {
      _isUndefined = false;
      hsv = _hsv;
      rgb = _rgb;
      hex = _hex;
      dispatch("input", { color, hsv, rgb, hex });
      return;
    }
    if (!hsv && !rgb && !hex) {
      isUndefined = true;
      _isUndefined = true;
      dispatch("input", { color: void 0, hsv, rgb, hex });
      return;
    }
    if (hsv && rgb && hsv.h === _hsv.h && hsv.s === _hsv.s && hsv.v === _hsv.v && hsv.a === _hsv.a && rgb.r === _rgb.r && rgb.g === _rgb.g && rgb.b === _rgb.b && rgb.a === _rgb.a && hex === _hex) {
      return;
    }
    isUndefined = false;
    if (hsv && hsv.a === void 0)
      hsv.a = 1;
    if (_hsv.a === void 0)
      _hsv.a = 1;
    if (rgb && rgb.a === void 0)
      rgb.a = 1;
    if (_rgb.a === void 0)
      _rgb.a = 1;
    if (hex?.substring(7) === "ff")
      hex = hex.substring(0, 7);
    if (hex?.substring(7) === "ff")
      hex = hex.substring(0, 7);
    if (hsv && (hsv.h !== _hsv.h || hsv.s !== _hsv.s || hsv.v !== _hsv.v || hsv.a !== _hsv.a || !rgb && !hex)) {
      color = w(hsv);
      rgb = color.toRgb();
      hex = color.toHex();
    } else if (rgb && (rgb.r !== _rgb.r || rgb.g !== _rgb.g || rgb.b !== _rgb.b || rgb.a !== _rgb.a || !hsv && !hex)) {
      color = w(rgb);
      hex = color.toHex();
      hsv = color.toHsv();
    } else if (hex && (hex !== _hex || !hsv && !rgb)) {
      color = w(hex);
      rgb = color.toRgb();
      hsv = color.toHsv();
    }
    if (color) {
      isDark = color.isDark();
    }
    if (!hex)
      return;
    _hsv = Object.assign({}, hsv);
    _rgb = Object.assign({}, rgb);
    _hex = hex;
    _isUndefined = isUndefined;
    dispatch("input", { color, hsv, rgb, hex });
  }
  async function wrapperBoundaryCheck() {
    await tick();
    if (position !== "fixed" && isOpen && isDialog && labelElement && wrapper) {
      const rect = wrapper.getBoundingClientRect();
      const labelRect = labelElement.getBoundingClientRect();
      if (position === "responsive" || position === "responsive-y") {
        if (labelRect.top + rect.height + wrapperPadding > innerHeight) {
          wrapper.style.top = `-${rect.height + wrapperPadding}px`;
        } else {
          wrapper.style.top = `${labelRect.height + wrapperPadding}px`;
        }
      }
      if (position === "responsive" || position === "responsive-x") {
        if (labelRect.left + rect.width + wrapperPadding > innerWidth) {
          wrapper.style.left = `-${rect.width - labelRect.width + wrapperPadding}px`;
        } else {
          wrapper.style.left = `${wrapperPadding}px`;
        }
      }
    }
  }
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.nullable === void 0 && $$bindings.nullable && nullable !== void 0)
    $$bindings.nullable(nullable);
  if ($$props.rgb === void 0 && $$bindings.rgb && rgb !== void 0)
    $$bindings.rgb(rgb);
  if ($$props.hsv === void 0 && $$bindings.hsv && hsv !== void 0)
    $$bindings.hsv(hsv);
  if ($$props.hex === void 0 && $$bindings.hex && hex !== void 0)
    $$bindings.hex(hex);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.isDark === void 0 && $$bindings.isDark && isDark !== void 0)
    $$bindings.isDark(isDark);
  if ($$props.isAlpha === void 0 && $$bindings.isAlpha && isAlpha !== void 0)
    $$bindings.isAlpha(isAlpha);
  if ($$props.isDialog === void 0 && $$bindings.isDialog && isDialog !== void 0)
    $$bindings.isDialog(isDialog);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.isTextInput === void 0 && $$bindings.isTextInput && isTextInput !== void 0)
    $$bindings.isTextInput(isTextInput);
  if ($$props.textInputModes === void 0 && $$bindings.textInputModes && textInputModes !== void 0)
    $$bindings.textInputModes(textInputModes);
  if ($$props.sliderDirection === void 0 && $$bindings.sliderDirection && sliderDirection !== void 0)
    $$bindings.sliderDirection(sliderDirection);
  if ($$props.disableCloseClickOutside === void 0 && $$bindings.disableCloseClickOutside && disableCloseClickOutside !== void 0)
    $$bindings.disableCloseClickOutside(disableCloseClickOutside);
  if ($$props.a11yColors === void 0 && $$bindings.a11yColors && a11yColors !== void 0)
    $$bindings.a11yColors(a11yColors);
  if ($$props.a11yLevel === void 0 && $$bindings.a11yLevel && a11yLevel !== void 0)
    $$bindings.a11yLevel(a11yLevel);
  if ($$props.texts === void 0 && $$bindings.texts && texts !== void 0)
    $$bindings.texts(texts);
  if ($$props.a11yTexts === void 0 && $$bindings.a11yTexts && a11yTexts !== void 0)
    $$bindings.a11yTexts(a11yTexts);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (hsv || rgb || hex) {
        updateColor();
      }
    }
    {
      updateColor();
    }
    {
      wrapperBoundaryCheck();
    }
    $$rendered = ` <span class="${"color-picker " + escape(sliderDirection, true) + " svelte-tsvobk"}"${add_attribute("this", spanElement, 0)}>${isDialog ? `${validate_component(getComponents().input || missing_component, "svelte:component").$$render(
      $$result,
      {
        isOpen: true,
        hex,
        label,
        name,
        labelElement
      },
      {
        labelElement: ($$value) => {
          labelElement = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${name ? `<input type="hidden"${add_attribute("value", hex, 0)}${add_attribute("name", name, 0)}>` : ``}`} ${validate_component(getComponents().wrapper || missing_component, "svelte:component").$$render(
      $$result,
      { isOpen, isDialog, wrapper },
      {
        wrapper: ($$value) => {
          wrapper = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${nullable ? `${validate_component(getComponents().nullabilityCheckbox || missing_component, "svelte:component").$$render(
            $$result,
            { texts: getTexts(), isUndefined },
            {
              isUndefined: ($$value) => {
                isUndefined = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``} ${validate_component(Picker, "Picker").$$render(
            $$result,
            {
              components: getComponents(),
              h: hsv?.h ?? _hsv.h,
              s: hsv?.s ?? _hsv.s,
              v: hsv?.v ?? _hsv.v,
              isDark,
              texts: getTexts()
            },
            {},
            {}
          )} <div class="h svelte-tsvobk">${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              min: 0,
              max: 360,
              step: 1,
              value: hsv?.h ?? _hsv.h,
              direction: sliderDirection,
              reverse: sliderDirection === "vertical",
              ariaLabel: getTexts().label.h
            },
            {},
            {}
          )}</div> ${isAlpha ? `<div class="a svelte-tsvobk"${add_styles({
            "--alphaless-color": (hex ? hex : _hex).substring(0, 7)
          })}>${validate_component(Slider, "Slider").$$render(
            $$result,
            {
              min: 0,
              max: 1,
              step: 0.01,
              value: hsv?.a ?? _hsv.a,
              direction: sliderDirection,
              reverse: sliderDirection === "vertical",
              ariaLabel: getTexts().label.a
            },
            {},
            {}
          )}</div>` : ``} ${isTextInput ? `${validate_component(getComponents().textInput || missing_component, "svelte:component").$$render(
            $$result,
            {
              hex: hex ?? _hex,
              rgb: rgb ?? _rgb,
              hsv: hsv ?? _hsv,
              isAlpha,
              textInputModes,
              texts: getTexts()
            },
            {},
            {}
          )}` : ``} ${getComponents().a11yNotice ? `${validate_component(getComponents().a11yNotice || missing_component, "svelte:component").$$render(
            $$result,
            {
              components: getComponents(),
              a11yColors,
              hex: hex || "#00000000",
              a11yTexts,
              a11yLevel
            },
            {},
            {}
          )}` : ``}`;
        }
      }
    )}</span> `;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: ".dark{--cp-text-color:#fff;--cp-border-color:white;--cp-text-color:white;--cp-input-color:#555;--cp-button-hover-color:#777}.dark .alpha{background:#333 !important}",
  map: null
};
const OrgSettings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isCustomTheme;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $t, $$unsubscribe_t;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let avatar;
  let errors = { orgName: "" };
  let loading = false;
  let hex = "";
  const themes = {
    rose: "theme-rose",
    green: "theme-green",
    orange: "theme-orange",
    violet: "theme-violet",
    default: ""
  };
  debounce(
    async (theme) => {
      const { error, data } = await supabase.from("organization").update({ theme }).match({ id: $currentOrg.id });
      console.log("Debounced update theme", data);
      if (error) {
        snackbar.error("Failed to update theme: " + error.message);
      }
    },
    700
  );
  async function handleUpdate() {
    errors = updateOrgNameValidation($currentOrg.name);
    if (Object.values(errors).length) {
      loading = false;
      return;
    }
    try {
      loading = true;
      const updates = { name: $currentOrg.name };
      if (avatar) {
        const filename = `user/${$currentOrg.name + Date.now()}.webp`;
        const { data } = await supabase.storage.from("avatars").upload(filename, avatar, { cacheControl: "3600", upsert: false });
        if (data) {
          const { data: response } = supabase.storage.from("avatars").getPublicUrl(filename);
          updates.avatar_url = response.publicUrl;
          set_store_value(currentOrg, $currentOrg.avatar_url = response.publicUrl, $currentOrg);
        }
        avatar = void 0;
      }
      let { error } = await supabase.from("organization").update(updates).match({ id: $currentOrg.id });
      currentOrg.update((_currentOrg) => ({ ..._currentOrg, ...updates }));
      snackbar.success("snackbar.course_settings.success.update_successful");
      if (error)
        throw error;
    } catch (error) {
      let message = error;
      if (message.includes("profile_username_key")) {
        message = $t("snackbar.lms.error.username_exists");
      }
      snackbar.error(`${$t("snackbar.lms.error.update")} ${message}`);
      loading = false;
    } finally {
      loading = false;
    }
  }
  function gotoSettings(pathname) {
    goto(`${$currentOrgPath}/settings${pathname}`);
  }
  function setHex(theme) {
    if (hex || theme.includes("theme-"))
      return;
    hex = theme;
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setHex($currentOrg.theme);
    }
    isCustomTheme = hex && !hex.includes("theme-");
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border-c rounded border-gray-200 dark:border-neutral-600 w-full mt-5"
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
                        return `${escape($t("settings.organization.organization_profile.heading"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render(
                  $$result,
                  {
                    sm: 8,
                    md: 8,
                    lg: 8,
                    class: "mt-2 lg:mt-0 flex flex-col items-center lg:items-start"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(TextField, "TextField").$$render(
                        $$result,
                        {
                          label: $t("settings.organization.organization_profile.organization_name"),
                          className: "w-full lg:w-60 mb-5",
                          errorMessage: errors.orgName,
                          value: $currentOrg.name
                        },
                        {
                          value: ($$value) => {
                            $currentOrg.name = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(UploadImage, "UploadImage").$$render(
                        $$result,
                        {
                          src: $currentOrg.avatar_url,
                          shape: "rounded-md",
                          widthHeight: "w-24 h-24",
                          avatar
                        },
                        {
                          avatar: ($$value) => {
                            avatar = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                        $$result,
                        {
                          label: $t("settings.organization.organization_profile.update_organization"),
                          className: "px-6 py-3 lg:mr-5 mt-5",
                          isLoading: loading,
                          isDisabled: loading,
                          onClick: handleUpdate
                        },
                        {},
                        {}
                      )}`;
                    }
                  }
                )}`;
              }
            }
          )} ${validate_component(Row$1, "Row").$$render(
            $$result,
            {
              class: "flex lg:flex-row flex-col py-7 border-bottom-c relative"
            },
            {},
            {
              default: () => {
                return `${validate_component(Column$1, "Column").$$render($$result, { sm: 4, md: 4, lg: 4 }, {}, {
                  default: () => {
                    return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape($t("settings.organization.organization_profile.theme.heading"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `<h4 class="dark:text-white lg:mt-0">${escape($t("settings.organization.organization_profile.theme.sub_heading"))}</h4> <div class="flex items-center gap-5"><button class="${"rounded-full border-2 " + escape($currentOrg.theme === themes.default && "border-[#1d4ee2]", true) + " flex items-center justify-center h-fit"}"><div class="w-6 h-6 md:w-6 md:h-6 bg-[#1d4ee2] rounded-full m-1"></div></button> <button class="${"rounded-full border-2 " + escape($currentOrg.theme === themes.rose && "border-[#be1241]", true) + " flex items-center justify-center h-fit"}"><div class="w-6 h-6 md:w-6 md:h-6 bg-[#be1241] rounded-full m-1"></div></button> <button class="${"rounded-full border-2 " + escape($currentOrg.theme === themes.green && "border-[#0c891b]", true) + " flex items-center justify-center h-fit"}"><div class="w-6 h-6 md:w-6 md:h-6 bg-[#0c891b] rounded-full m-1"></div></button> <button class="${"rounded-full border-2 " + escape($currentOrg.theme === themes.orange && "border-[#cc4902]", true) + " flex items-center justify-center h-fit"}"><div class="w-6 h-6 md:w-6 md:h-6 bg-[#cc4902] rounded-full m-1"></div></button> <button class="${"rounded-full border-2 " + escape($currentOrg.theme === themes.violet && "border-[#cf00ce]", true) + " flex items-center justify-center h-fit"}"><div class="w-6 h-6 md:w-6 md:h-6 bg-[#cf00ce] rounded-full m-1"></div></button> <div class="${"w-fit h-auto border-2 " + escape(
                      isCustomTheme ? "border-primary-700" : "dark:border-neutral-700",
                      true
                    ) + " rounded-full relative group"}"> <div class="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200"><svg class="${"w-6 h-6 text-" + escape(isCustomTheme ? "white" : "black", true) + " dark:text-white z-10 opacity-100"}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg></div> ${validate_component(ColorPicker, "ColorPicker").$$render(
                      $$result,
                      { position: "responsive", label: "", hex },
                      {
                        hex: ($$value) => {
                          hex = $$value;
                          $$settled = false;
                        }
                      },
                      {}
                    )}</div></div>`;
                  }
                })}`;
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
                        return `${escape($t("settings.organization.organization_profile.customize_lms.heading"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `<h4 class="dark:text-white lg:mt-0">${escape($t("settings.organization.organization_profile.customize_lms.sub_heading"))}</h4> <p class="text-sm text-gray-500 dark:text-white">${escape($t("settings.organization.organization_profile.customize_lms.body"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        className: "my-7 py-5 px-10 flex items-center gap-2 justify-center",
                        variant: VARIANTS.OUTLINED,
                        onClick: () => gotoSettings("/customize-lms")
                      },
                      {},
                      {
                        default: () => {
                          return `${escape($t("settings.organization.organization_profile.customize_lms.button"))}`;
                        }
                      }
                    )}`;
                  }
                })}`;
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
                        return `${escape($t("settings.organization.organization_profile.custom_domain.heading"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `<h4 class="dark:text-white lg:mt-0">${escape($t("settings.organization.organization_profile.custom_domain.sub_heading"))}</h4> <p class="text-sm text-gray-500 dark:text-white">${escape($t("settings.organization.organization_profile.custom_domain.body"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        className: "my-7 py-5 px-10 flex items-center gap-2 justify-center",
                        variant: VARIANTS.OUTLINED,
                        onClick: () => gotoSettings("/domains")
                      },
                      {},
                      {
                        default: () => {
                          return `${$isFreePlan ? `${validate_component(FlashFilled, "FlashFilled").$$render($$result, { size: 16, class: "text-blue-700" }, {}, {})}` : ``} ${escape($t("settings.organization.organization_profile.custom_domain.button"))}`;
                        }
                      }
                    )}`;
                  }
                })}`;
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
                        return `${escape($t("settings.organization.organization_profile.team.heading"))}`;
                      }
                    })}`;
                  }
                })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                  default: () => {
                    return `<h4 class="dark:text-white lg:mt-0">${escape($t("settings.organization.organization_profile.team.sub_heading"))}</h4> <p class="text-sm text-gray-500 dark:text-white">${escape($t("settings.organization.organization_profile.team.body"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        className: "my-7 py-5 px-10 flex items-center gap-2 justify-center",
                        variant: VARIANTS.OUTLINED,
                        onClick: () => gotoSettings("/teams")
                      },
                      {},
                      {
                        default: () => {
                          return `${$isFreePlan ? `${validate_component(FlashFilled, "FlashFilled").$$render($$result, { size: 16, class: "text-blue-700" }, {}, {})}` : ``} ${escape($t("settings.organization.organization_profile.team.button"))}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_t();
  $$unsubscribe_isFreePlan();
  return $$rendered;
});
const Billing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPlan, $$unsubscribe_currentOrgPlan;
  let $t, $$unsubscribe_t;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_currentOrgPlan = subscribe(currentOrgPlan, (value) => $currentOrgPlan = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let isRedirecting = false;
  async function onOpenBilling() {
    console.log({ plan: $currentOrgPlan });
    if ($currentOrgPlan?.subscriptionId) {
      isRedirecting = true;
      fetch("/api/lmz/subscriptions?subscriptionId=" + $currentOrgPlan?.subscriptionId).then((response) => response.json()).then((res) => {
        isRedirecting = false;
        window.open(res.customerPortal, "_blank");
      });
    }
  }
  $$unsubscribe_currentOrgPlan();
  $$unsubscribe_t();
  $$unsubscribe_isFreePlan();
  return `${validate_component(Grid$1, "Grid").$$render(
    $$result,
    {
      class: "border-c rounded border-gray-200 dark:border-neutral-600 w-full mt-5"
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
                      return `${escape($t("settings.billing.sub_title"))}`;
                    }
                  })}`;
                }
              })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 8, md: 8, lg: 8 }, {}, {
                default: () => {
                  return `<h4 class="dark:text-white lg:mt-0">${escape($t("settings.billing.manage"))}</h4> ${$isFreePlan ? `${escape($t("settings.billing.active"))}` : `<p class="mb-3">${escape($t("settings.billing.lemonsqueezy"))}</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      label: $t("settings.billing.open_billing"),
                      variant: VARIANTS.CONTAINED_DARK,
                      onClick: onOpenBilling,
                      isLoading: isRedirecting
                    },
                    {},
                    {}
                  )}`}`;
                }
              })}`;
            }
          }
        )}`;
      }
    }
  )}`;
});
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  let selected = 0;
  let query = new URLSearchParams($page.url.search);
  query.get("tab") || "";
  let tabs = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        tabs = [
          {
            key: 0,
            label: $t("settings.tabs.profile_tab"),
            tabKey: "",
            href: $page.url.pathname,
            disabled: false
          },
          {
            key: 1,
            label: $t("settings.tabs.organization_tab"),
            tabKey: "org",
            href: `${$page.url.pathname}?tab=org`,
            disabled: !$isOrgAdmin
          },
          {
            key: 2,
            label: $t("settings.tabs.landing_page_tab"),
            tabKey: "landingpage",
            href: `${$page.url.pathname}?tab=landingpage`,
            disabled: !$isOrgAdmin
          },
          {
            key: 3,
            label: $t("settings.tabs.billing_tab"),
            tabKey: "billing",
            href: `${$page.url.pathname}?tab=billing`,
            disabled: !$isOrgAdmin
          },
          {
            key: 4,
            label: $t("settings.tabs.integrations_tab"),
            tabKey: "integrations",
            href: `${$page.url.pathname}?tab=integrations`,
            disabled: false
          }
        ];
      }
    }
    $$rendered = `${validate_component(Tabs$1, "Tabs").$$render(
      $$result,
      { autoWidth: true, selected },
      {
        selected: ($$value) => {
          selected = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return ` ${validate_component(TabContent$1, "TabContent").$$render($$result, { class: "w-full p-0" }, {}, {
            default: () => {
              return `${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}`;
            }
          })}  ${validate_component(TabContent$1, "TabContent").$$render($$result, { class: "w-full p-0" }, {}, {
            default: () => {
              return `${validate_component(OrgSettings, "OrgSettings").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(TabContent$1, "TabContent").$$render($$result, { class: "w-full p-0" }, {}, {
            default: () => {
              return `${validate_component(LandingpageSettings, "LandingpageSettings").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(TabContent$1, "TabContent").$$render($$result, { class: "w-full p-0" }, {}, {
            default: () => {
              return `${validate_component(Billing, "Billing").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(TabContent$1, "TabContent").$$render($$result, { class: "w-full p-0" }, {}, {
            default: () => {
              return `${validate_component(Integrations, "Integrations").$$render($$result, {}, {}, {})}`;
            }
          })} `;
        },
        default: () => {
          return `${each(tabs, (tab) => {
            return `${validate_component(Tab$1, "Tab").$$render(
              $$result,
              {
                label: tab.label,
                href: tab.href,
                disabled: tab.disabled
              },
              {},
              {}
            )}`;
          })} `;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_isOrgAdmin();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-wfrydy_START -->${$$result.title = `<title>Settings - KinetsHub</title>`, ""}<!-- HEAD_svelte-wfrydy_END -->`, ""} <section class="w-full md:max-w-4xl mx-auto"><div class="py-10 px-5"><div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-3xl font-bold">${escape($t("settings.heading"))}</h1> ${validate_component(VisitOrgSite, "ViewSiteBtn").$$render($$result, {}, {}, {})}</div> ${validate_component(Settings, "OrgSettings").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0b931a75.js.map
