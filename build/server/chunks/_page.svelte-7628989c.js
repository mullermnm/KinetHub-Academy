import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, b as each } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { U as UploadImage } from './index27-5501584c.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { p as profile } from './user-e923b6d4.js';
import { b as snackbar } from './store2-dc811f17.js';
import { T as Tabs$1, a as TabContent$1, I as Integrations, b as Tab$1, L as LanguagePicker, g as generateUUID } from './Integrations-48d75cd8.js';
import { t as t2, h as handleLocaleChange } from './translations-90190f83.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';
import './index9-eea8802c.js';
import './_sentry-release-injection-file-6be6a010.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import './scheduler-aae59940.js';
import './ChevronDown-d5b93e8c.js';
import './translation-fd577170.js';
import './Dropdown-08db662d.js';
import './WarningAltFilled-13a554ec.js';
import './ListBoxMenuItem-e6ef2add.js';
import './CheckmarkFilled-36899326.js';
import './SectionTitle-d97525be.js';
import './ArrowTopRight-dc8d0443.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0dd54ddd-bb8e-4bf0-9941-eb16f4491ee2", e._sentryDebugIdIdentifier = "sentry-dbid-0dd54ddd-bb8e-4bf0-9941-eb16f4491ee2");
  } catch (e2) {
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
  async function handleUpdate() {
    try {
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
      snackbar.success();
      if (hasLangChanged) {
        handleLocaleChange(locale);
      }
      if (error)
        throw error;
    } catch (error) {
      let message = error.message;
      if (message.includes("profile_username_key")) {
        message = $t("username already exists");
      }
      snackbar.error(`snackbar.lms.error.update: ${message}`);
      loading = false;
    } finally {
      loading = false;
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    locale = $profile.locale;
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
                      return `<p class="dark:text-white font-bold">${escape($t("settings.profile.profile_picture.heading"))}</p>`;
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
                    return `<p class="dark:text-white font-bold">${escape($t("settings.profile.personal_information.heading"))}</p>`;
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
                          value: $profile.locale
                        },
                        {
                          hasLangChanged: ($$value) => {
                            hasLangChanged = $$value;
                            $$settled = false;
                          },
                          value: ($$value) => {
                            $profile.locale = $$value;
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let selected = 0;
  let tabs = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    tabs = [
      {
        key: 0,
        label: $t("settings.tabs.profile_tab"),
        tabKey: "",
        href: $page.url.pathname
      },
      {
        key: 1,
        label: $t("settings.tabs.integrations_tab"),
        tabKey: "integrations",
        href: `${$page.url.pathname}?tab=integrations`,
        disabled: false
      }
    ];
    $$rendered = `<section class="w-full max-w-6xl mx-auto"><div class="py-10 px-5"><div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-3xl font-bold">${escape($t("settings.heading"))}</h1></div> <div class="">${validate_component(Tabs$1, "Tabs").$$render(
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
          return `${validate_component(TabContent$1, "TabContent").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(TabContent$1, "TabContent").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Integrations, "Integrations").$$render($$result, {}, {}, {})}`;
            }
          })} `;
        },
        default: () => {
          return `${each(tabs, (tab) => {
            return `${validate_component(Tab$1, "Tab").$$render($$result, { label: tab.label, href: tab.href }, {}, {})}`;
          })}`;
        }
      }
    )}</div></div></section>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_t();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7628989c.js.map
