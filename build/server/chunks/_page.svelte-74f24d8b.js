import { s as subscribe, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from './ssr-10c5b872.js';
import { g as goto } from './navigation-cd282f65.js';
import isValidDomain from 'is-valid-domain';
import { parse } from 'tldts';
import { R as Restart } from './Restart-b417cb0d.js';
import { T as TrashCan } from './TrashCan-54bce261.js';
import { A as ArrowUpRight } from './ArrowUpRight-85da17be.js';
import { T as TextField } from './TextField-86164973.js';
import { T as Text } from './Text-e3f4b18b.js';
import { C as ComingSoon } from './index20-d8ae68df.js';
import { U as UploadImage } from './index27-5501584c.js';
import { T as TextArea } from './TextArea-9e2a2a4d.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { f as currentOrgPath, c as currentOrg, g as isFreePlan } from './org-8fc26a61.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';
import { b as snackbar } from './store2-dc811f17.js';
import { S as SectionTitle } from './SectionTitle-d97525be.js';
import { V as VisitOrgSite } from './VisitOrgSite-0191bbde.js';
import { B as Banner } from './Banner-bd19e4d5.js';
import { I as IconButton } from './index9-eea8802c.js';
import { h as updateOrgSiteNameValidation } from './validator-27ec1d5c.js';
import { t as t2 } from './translations-90190f83.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';
import { C as CopyButton$1 } from './CopyButton-ab4baaa4.js';
import './index2-aea858a5.js';
import './Popover-a92462a3.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './ArrowTopRight-dc8d0443.js';
import './useMobile-47eebf4e.js';
import './user-e923b6d4.js';
import './index15-c5761f1e.js';
import './FlashFilled-4a89bd75.js';
import 'lodash/isNumber.js';
import 'zod';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ce929f9a-cf17-400e-8807-b93f59859f8b", e._sentryDebugIdIdentifier = "sentry-dbid-ce929f9a-cf17-400e-8807-b93f59859f8b");
  } catch (e2) {
  }
}();
const blockedSubdomain = [
  "app",
  "apps",
  "play",
  "support",
  "demo",
  "help",
  "teachers",
  "church",
  "tech",
  "build",
  "community",
  "conference",
  "campaign",
  "blog",
  "forum",
  "mobile",
  "dev",
  "stage",
  "prod",
  "group",
  "groups",
  "academy",
  "schools",
  "training",
  "cloud",
  "launchweek"
];
async function sendDomainRequest(key, domain) {
  const { data } = await supabase.auth.getSession();
  const accessToken = data.session?.access_token || "";
  return fetch("/api/domain", {
    method: "POST",
    body: JSON.stringify({ params: { key, domain } }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`
    }
  });
}
const Domains = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  let siteName = "";
  let customDomain = "";
  let customCode = "";
  let favicon = "";
  let isDomainValid = false;
  let isLoading = false;
  let isCustomDomainLoading = false;
  let isRefreshing = false;
  let errors = { siteName: "", customDomain: "" };
  async function handleSaveSiteName() {
    errors = updateOrgSiteNameValidation(siteName);
    if (Object.values(errors).length) {
      isLoading = false;
      return;
    }
    if (blockedSubdomain.includes(siteName || "")) {
      errors.siteName = "Sitename already exists.";
      return;
    }
    isLoading = true;
    const { data: org, error } = await supabase.from("organization").update({ siteName }).match({ id: $currentOrg.id });
    console.log("Updating organisation", org);
    if (error) {
      console.log("Error: create organisation", error);
      errors.siteName = $t("add_org.sitename");
    } else {
      snackbar.success();
      set_store_value(currentOrg, $currentOrg.siteName = siteName, $currentOrg);
      goto(`/org/${$currentOrg.siteName}/settings/domains`);
    }
    isLoading = false;
  }
  async function handleSaveCustomDomain() {
    if (!isDomainValid)
      return;
    const details = parse(customDomain);
    if (!details.subdomain) {
      errors.customDomain = $t("components.settings.domains.custom_domain_error");
      return;
    }
    isCustomDomainLoading = true;
    const { error } = await supabase.from("organization").update({ customDomain }).match({ id: $currentOrg.id });
    if (error) {
      console.log("Error: create organisation", error);
      errors.customDomain = error.message;
      isCustomDomainLoading = false;
      return;
    }
    try {
      const response = await sendDomainRequest("add_domain", customDomain);
      const data = await response.json();
      console.log("added domain to vercel", data);
    } catch (error2) {
      console.log("Error: adding domain to vercel", error2);
      snackbar.error(error2);
      isCustomDomainLoading = false;
      return;
    }
    snackbar.success("components.settings.domains.custom_domain_success");
    set_store_value(currentOrg, $currentOrg.customDomain = customDomain, $currentOrg);
    isCustomDomainLoading = false;
  }
  async function handleRemoveCustomDomain() {
    if (!$currentOrg.customDomain)
      return;
    isCustomDomainLoading = true;
    const { error } = await supabase.from("organization").update({
      customDomain: null,
      isCustomDomainVerified: false
    }).match({ id: $currentOrg.id });
    if (error) {
      console.log("Error: updating organisation", error);
      snackbar.error(error.message);
      isCustomDomainLoading = false;
      return;
    }
    try {
      const response = await sendDomainRequest("remove_domain", $currentOrg.customDomain);
      const data = await response.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      console.log("removed domain from vercel", data);
    } catch (error2) {
      console.log("Error: removing domain from vercel", error2);
      snackbar.error(error2);
      isCustomDomainLoading = false;
      return;
    }
    snackbar.success();
    set_store_value(currentOrg, $currentOrg.customDomain = void 0, $currentOrg);
    set_store_value(currentOrg, $currentOrg.isCustomDomainVerified = false, $currentOrg);
    isCustomDomainLoading = false;
  }
  async function handleRefreshCustomDomain() {
    isRefreshing = true;
    try {
      const response = await sendDomainRequest("verify_domain", $currentOrg.customDomain || "");
      const data = await response.json();
      console.log("data", data);
      if (data.verified && !$currentOrg.isCustomDomainVerified) {
        set_store_value(currentOrg, $currentOrg.isCustomDomainVerified = true, $currentOrg);
        await supabase.from("organization").update({ isCustomDomainVerified: true }).match({ id: $currentOrg.id });
      }
    } catch (error) {
      console.log("Error: refreshing domain", error);
      snackbar.error(error);
    }
    isRefreshing = false;
  }
  function resetErrors(_siteName, _customDomain) {
    if (errors.siteName) {
      errors.siteName = "";
    }
    if (errors.customDomain) {
      errors.customDomain = "";
    }
  }
  function setDefaults(org) {
    if (!siteName) {
      siteName = org.siteName;
    }
  }
  function getSubdomain() {
    const details = parse($currentOrg.customDomain || "");
    return details.subdomain;
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      setDefaults($currentOrg);
    }
    {
      resetErrors();
    }
    isDomainValid = isValidDomain(customDomain, { subdomain: true });
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border rounded border-gray-200 dark:border-neutral-600 w-full mt-5"
      },
      {},
      {
        default: () => {
          return `${validate_component(Row$1, "Row").$$render($$result, { class: "py-7 border-bottom-c" }, {}, {
            default: () => {
              return `${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 2, lg: 4, class: "text-lg" }, {}, {
                default: () => {
                  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape($t("components.settings.domains.add"))}`;
                    }
                  })}`;
                }
              })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 6, lg: 8 }, {}, {
                default: () => {
                  return `<p class="text-md text-gray-500 dark:text-white mb-5">${escape($t("settings.organization.organization_profile.custom_domain.body"))}</p> <div> ${validate_component(TextField, "TextField").$$render(
                    $$result,
                    {
                      label: "URL",
                      helperMessage: `https://${siteName || ""}.KinetsHub.com`,
                      type: "text",
                      placeholder: "e.g traversymedia",
                      className: "mb-5 w-full",
                      labelClassName: "",
                      errorMessage: errors.siteName,
                      value: siteName
                    },
                    {
                      value: ($$value) => {
                        siteName = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} <div class="flex items-center mb-6">${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      label: $t("components.settings.domains.update"),
                      className: "py-4",
                      variant: VARIANTS.OUTLINED,
                      onClick: handleSaveSiteName,
                      isDisabled: isLoading
                    },
                    {},
                    {}
                  )} ${validate_component(VisitOrgSite, "VisitOrgSiteButton").$$render($$result, {}, {}, {})}</div></div>`;
                }
              })}`;
            }
          })} ${validate_component(Row$1, "Row").$$render($$result, { class: "py-7" }, {}, {
            default: () => {
              return `${validate_component(Banner, "UpgradeBanner").$$render($$result, { className: "mb-5" }, {}, {
                default: () => {
                  return `${escape($t("upgrade.domain"))}`;
                }
              })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 2, lg: 4, class: "text-lg" }, {}, {
                default: () => {
                  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape($t("components.settings.domains.custom"))}`;
                    }
                  })}`;
                }
              })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 6, lg: 10 }, {}, {
                default: () => {
                  return `<div class="pb-10 border-bottom-c"> ${$currentOrg.customDomain ? `<div class="flex items-center justify-between mb-4"><div class="flex items-center gap-2"><p class="font-medium text-md flex items-center gap-2">${escape($currentOrg.customDomain)} ${validate_component(IconButton, "IconButton").$$render(
                    $$result,
                    {
                      contained: true,
                      size: "small",
                      onClick: () => goto(`https://${$currentOrg.customDomain}`)
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(ArrowUpRight, "ArrowUpRight").$$render($$result, { size: 16 }, {}, {})}`;
                      }
                    }
                  )}</p> <div class="${"mt-1 h-2 w-2 rounded-full bg-" + escape($currentOrg.isCustomDomainVerified ? "green" : "yellow", true) + "-400"}"></div></div> ${$currentOrg.isCustomDomainVerified ? `${validate_component(Text, "TextChip").$$render(
                    $$result,
                    {
                      value: "Verified",
                      className: "bg-green-500 text-white text-xs px-3",
                      size: "sm"
                    },
                    {},
                    {}
                  )}` : `${validate_component(Text, "TextChip").$$render(
                    $$result,
                    {
                      value: "Pending verification",
                      className: "bg-yellow-500 text-white text-xs px-3",
                      size: "sm"
                    },
                    {},
                    {}
                  )}`}</div> <div class="text-sm text-gray-500 mb-4">${escape($t("components.settings.domains.dns_description"))}</div> <div class="flex items-center gap-10 mb-4 border rounded-md py-2 px-4"><div class="h-[72px] justify-evenly flex flex-col"><p class="font-light text-sm">${escape($t("components.settings.domains.dns_type"))}</p> <p class="h-[40px] flex items-center" data-svelte-h="svelte-trr64b">CNAME</p></div> <div class="h-[72px] justify-evenly flex flex-col"><p class="font-light text-sm">${escape($t("components.settings.domains.dns_name"))}</p> <p class="h-[40px] flex items-center">${escape(getSubdomain())}</p></div> <div class="h-[72px] justify-evenly flex flex-col"><p class="font-light text-sm">${escape($t("components.settings.domains.dns_value"))}</p> <p class="flex items-center gap-1">cname.vercel-dns.com
                ${validate_component(CopyButton$1, "CopyButton").$$render($$result, { text: "cname.vercel-dns.com" }, {}, {})}</p></div></div> <div class="flex items-center justify-between mt-5">${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      className: "py-4 flex items-center gap-2",
                      onClick: handleRefreshCustomDomain,
                      isLoading: isRefreshing,
                      variant: VARIANTS.OUTLINED
                    },
                    {},
                    {
                      default: () => {
                        return `${!isRefreshing ? `${validate_component(Restart, "Restart").$$render($$result, { size: 16 }, {}, {})}` : ``} ${escape($t("components.settings.domains.refresh"))}`;
                      }
                    }
                  )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      className: "py-4 flex items-center gap-2",
                      onClick: handleRemoveCustomDomain,
                      isLoading: isCustomDomainLoading,
                      variant: VARIANTS.CONTAINED_DANGER
                    },
                    {},
                    {
                      default: () => {
                        return `${!isCustomDomainLoading ? `${validate_component(TrashCan, "TrashCan").$$render($$result, { size: 16 }, {}, {})}` : ``} ${escape($t("components.settings.domains.remove"))}`;
                      }
                    }
                  )}</div>` : ` <div class="flex items-center gap-5 mb-4"><p class="font-bold">${escape($t("components.settings.domains.your_domain"))}</p></div> ${validate_component(TextField, "TextField").$$render(
                    $$result,
                    {
                      type: "text",
                      placeholder: "courses.yourwebsite.com",
                      helperMessage: "https://" + (customDomain || "course.yourwebsite.com"),
                      errorMessage: errors.customDomain,
                      className: "w-4/5",
                      isDisabled: $isFreePlan,
                      value: customDomain
                    },
                    {
                      value: ($$value) => {
                        customDomain = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} <div class="flex items-center mt-5">${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      label: $t("components.settings.domains.save"),
                      className: "py-4",
                      onClick: handleSaveCustomDomain,
                      isLoading: isCustomDomainLoading,
                      isDisabled: isLoading || !isDomainValid
                    },
                    {},
                    {}
                  )}</div>`}</div> <div class="py-10 border-bottom-c"><div class="flex items-center gap-5 mb-4"><p class="font-bold">${escape($t("components.settings.domains.custom_favicon"))}</p> ${validate_component(ComingSoon, "ComingSoon").$$render($$result, {}, {}, {})}</div> <div class="flex items-center">${validate_component(UploadImage, "UploadImage").$$render(
                    $$result,
                    {
                      shape: "rounded-md",
                      src: $currentOrg.favicon ?? "/logo-512.png",
                      widthHeight: "w-16 h-16 lg:w-24 lg:h-24",
                      flexDirection: "flex-row",
                      isDisabled: true,
                      avatar: favicon
                    },
                    {
                      avatar: ($$value) => {
                        favicon = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div></div> <div class="py-10"><div class="flex items-center gap-5 mb-4"><p class="font-bold">${escape($t("components.settings.domains.custom_code"))}</p> ${validate_component(ComingSoon, "ComingSoon").$$render($$result, {}, {}, {})}</div> ${validate_component(TextArea, "TextArea").$$render(
                    $$result,
                    {
                      placeholder: "e.g <link rel='stylesheet' href='https://example.com/style.css' />",
                      className: "w-4/5",
                      rows: 7,
                      disabled: true,
                      value: customCode
                    },
                    {
                      value: ($$value) => {
                        customCode = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )}</div> `;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  $$unsubscribe_isFreePlan();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-17tjuys_START -->${$$result.title = `<title>Custom domain - KinetsHub</title>`, ""}<!-- HEAD_svelte-17tjuys_END -->`, ""} <section class="w-full md:max-w-4xl mx-auto"><div class="py-10 px-3 md:px-5"><a class="text-gray-500 dark:text-white text-md"${add_attribute("href", `${$currentOrgPath}/settings?tab=org`, 0)}>${escape($t("upgrade.back"))}</a> <div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-3xl font-bold">${escape($t("components.settings.domains.title"))}</h1></div> ${validate_component(Domains, "Domains").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-74f24d8b.js.map
