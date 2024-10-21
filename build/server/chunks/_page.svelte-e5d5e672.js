import { s as subscribe } from './utils-26d532f8.js';
import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from './ssr-10c5b872.js';
import { M as Moon } from './Moon-632bccb1.js';
import { T as TextField } from './TextField-86164973.js';
import { T as Text } from './Text-e3f4b18b.js';
import { C as ComingSoon } from './index20-d8ae68df.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { v as validateEmailInString } from './validator-27ec1d5c.js';
import { f as currentOrgPath, c as currentOrg, b as orgTeam, g as isFreePlan, R as ROLE, a as ROLE_LABEL } from './org-8fc26a61.js';
import { b as snackbar } from './store2-dc811f17.js';
import { d as getOrgTeam } from './index6-4a1599e3.js';
import { p as profile } from './user-e923b6d4.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { S as SectionTitle } from './SectionTitle-d97525be.js';
import './_sentry-release-injection-file-6be6a010.js';
import { t as t2 } from './translations-90190f83.js';
import { G as Grid$1, R as Row$1, C as Column$1 } from './Column-ce23f72d.js';
import { S as Select$1, a as SelectItem$1 } from './SelectItem-00c29785.js';
import { B as Banner } from './Banner-bd19e4d5.js';
import './index9-eea8802c.js';
import 'lodash/isNumber.js';
import 'zod';
import './index2-aea858a5.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import './navigation-cd282f65.js';
import './index15-c5761f1e.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './ChevronDown-d5b93e8c.js';
import './WarningAltFilled-13a554ec.js';
import './FlashFilled-4a89bd75.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "00f0e613-1379-46d8-b591-3a4fd30b8674", e._sentryDebugIdIdentifier = "sentry-dbid-00f0e613-1379-46d8-b591-3a4fd30b8674");
  } catch (e2) {
  }
}();
const TeamMembers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrg, $$unsubscribe_currentOrg;
  let $orgTeam, $$unsubscribe_orgTeam;
  let $t, $$unsubscribe_t;
  let $isFreePlan, $$unsubscribe_isFreePlan;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_orgTeam = subscribe(orgTeam, (value) => $orgTeam = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isFreePlan = subscribe(isFreePlan, (value) => $isFreePlan = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  let emailsStr = "";
  let errorMessage = "";
  let role = ROLE.TUTOR;
  let isFetching = false;
  let isLoading = false;
  let isRemoving = null;
  async function onSendInvite() {
    const { hasError, error: _error, emails } = validateEmailInString(emailsStr);
    if (hasError) {
      errorMessage = _error;
      return;
    }
    isLoading = true;
    let apiError = "";
    emails.forEach(async (email, index) => {
      if (apiError)
        return;
      const doesEmailExist = $orgTeam.some((teamMember) => teamMember.email.toLowerCase() === email.toLowerCase());
      if (doesEmailExist) {
        snackbar.error("snackbar.team_members.user_exists");
        isLoading = false;
        return;
      }
      const { data, error } = await supabase.from("organizationmember").insert({
        organization_id: $currentOrg.id,
        email,
        role_id: role,
        verified: false
      }).select();
      console.log("data", data);
      if (error) {
        apiError = `${error}`;
        console.error("onSendInvite:", error);
        snackbar.error(`snackbar.team_members.invite_fail`);
        isLoading = false;
        return;
      }
      const [newMember] = data || [];
      if (newMember) {
        orgTeam.update((team) => [
          {
            id: newMember.id,
            email: newMember?.email,
            fullname: newMember?.fullname || "",
            verified: newMember?.verified,
            role: ROLE_LABEL[newMember?.role_id] || "",
            isAdmin: newMember?.role_id === ROLE.ADMIN
          },
          ...team
        ]);
      }
      const isLast = index === emails.length - 1;
      if (isLast) {
        snackbar.success("snackbar.team_members.invite_sent");
        emailsStr = "";
        isLoading = false;
      }
    });
  }
  async function onRemove(id) {
    console.log("onRemove called");
    isRemoving = id;
    const { error } = await supabase.from("organizationmember").delete().match({ id });
    if (error) {
      console.error("onRemove:", error);
      snackbar.error("snackbar.team_members.remove_fail");
    } else {
      orgTeam.update((team) => [...team.filter((member) => member.id !== id)]);
    }
    isRemoving = null;
  }
  const fetchTeam = async (id) => {
    if (!id)
      return;
    isFetching = true;
    await getOrgTeam(id);
    isFetching = false;
  };
  const isTeamMemberAdmin = (members, profileId) => {
    return members.some((member) => member.profileId === profileId && member.isAdmin);
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      fetchTeam($currentOrg.id);
    }
    $$rendered = `${validate_component(Grid$1, "Grid").$$render(
      $$result,
      {
        class: "border rounded border-gray-200 dark:border-neutral-600 w-full mt-5 relative"
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
                      return `${escape($t("course.navItem.people.teams.add"))}`;
                    }
                  })}`;
                }
              })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 6, lg: 8 }, {}, {
                default: () => {
                  return `<p class="text-md text-gray-500 dark:text-white mb-5">${escape($t("course.navItem.people.teams.add_team"))}</p> <div class="">${validate_component(TextField, "TextField").$$render(
                    $$result,
                    {
                      label: $t("course.navItem.people.teams.invite"),
                      placeholder: $t("course.navItem.people.teams.placeholder"),
                      className: "mb-3",
                      isDisabled: $isFreePlan,
                      errorMessage,
                      value: emailsStr
                    },
                    {
                      value: ($$value) => {
                        emailsStr = $$value;
                        $$settled = false;
                      }
                    },
                    {}
                  )} ${validate_component(Select$1, "Select").$$render(
                    $$result,
                    {
                      labelText: $t("course.navItem.people.teams.role"),
                      class: "mb-5 w-40",
                      disabled: $isFreePlan,
                      selected: role
                    },
                    {
                      selected: ($$value) => {
                        role = $$value;
                        $$settled = false;
                      }
                    },
                    {
                      default: () => {
                        return `${validate_component(SelectItem$1, "SelectItem").$$render(
                          $$result,
                          {
                            value: ROLE.ADMIN,
                            text: $t(ROLE_LABEL[ROLE.ADMIN])
                          },
                          {},
                          {}
                        )} ${validate_component(SelectItem$1, "SelectItem").$$render(
                          $$result,
                          {
                            value: ROLE.TUTOR,
                            text: $t(ROLE_LABEL[ROLE.TUTOR])
                          },
                          {},
                          {}
                        )}`;
                      }
                    }
                  )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
                    $$result,
                    {
                      label: $t("course.navItem.people.teams.send_invite"),
                      onClick: onSendInvite,
                      isLoading,
                      isDisabled: isLoading || $isFreePlan
                    },
                    {},
                    {}
                  )}</div>`;
                }
              })}`;
            }
          })} ${validate_component(Row$1, "Row").$$render($$result, { class: "py-7 border-bottom-c" }, {}, {
            default: () => {
              return `${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 2, lg: 4, class: "text-lg" }, {}, {
                default: () => {
                  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape($t("course.navItem.people.teams.members"))}`;
                    }
                  })}`;
                }
              })} ${validate_component(Column$1, "Column").$$render($$result, { sm: 2, md: 6, lg: 8 }, {}, {
                default: () => {
                  return `${isFetching ? `${validate_component(Moon, "Moon").$$render($$result, {}, {}, {})}` : `${each($orgTeam, (teamMember) => {
                    return `<div class="flex justify-between items-center mb-5"><div class="flex"><p class="text-sm text-gray-500 dark:text-white mr-3">${escape(teamMember.email)}</p> ${validate_component(Text, "TextChip").$$render(
                      $$result,
                      {
                        value: $t(teamMember.role),
                        className: "text-xs mr-3",
                        size: "sm"
                      },
                      {},
                      {}
                    )} ${!teamMember.verified ? `${validate_component(Text, "TextChip").$$render(
                      $$result,
                      {
                        value: $t("course.navItem.people.teams.invite_sent"),
                        className: "text-xs bg-yellow-200 text-yellow-700",
                        size: "sm"
                      },
                      {},
                      {}
                    )}` : `${teamMember.profileId === $profile.id ? `${validate_component(ComingSoon, "ComingSoon").$$render(
                      $$result,
                      {
                        label: $t("course.navItem.people.teams.you")
                      },
                      {},
                      {}
                    )}` : ``}`}</div> ${teamMember.profileId !== $profile.id && isTeamMemberAdmin($orgTeam, $profile.id) ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                      $$result,
                      {
                        label: $t("course.navItem.people.teams.remove"),
                        variant: VARIANTS.TEXT_DANGER,
                        onClick: () => onRemove(teamMember.id),
                        isLoading: isRemoving === teamMember.id,
                        isDisabled: isRemoving === teamMember.id
                      },
                      {},
                      {}
                    )}` : ``} </div>`;
                  })}`}`;
                }
              })}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_currentOrg();
  $$unsubscribe_orgTeam();
  $$unsubscribe_t();
  $$unsubscribe_isFreePlan();
  $$unsubscribe_profile();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1vd93wf_START -->${$$result.title = `<title>Teams - KinetsHub</title>`, ""}<!-- HEAD_svelte-1vd93wf_END -->`, ""} <section class="w-full md:max-w-4xl mx-auto"><div class="py-10 px-3 md:px-5"><a class="text-gray-500 dark:text-white text-md"${add_attribute("href", `${$currentOrgPath}/settings?tab=org`, 0)}>${escape($t("upgrade.back"))}</a> <div class="flex items-center justify-between mb-10"><h1 class="dark:text-white text-3xl font-bold">${escape($t("upgrade.team_members"))}</h1></div> ${validate_component(Banner, "UpgradeBanner").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($t("upgrade.team"))}`;
    }
  })} ${validate_component(TeamMembers, "TeamMembers").$$render($$result, {}, {}, {})}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e5d5e672.js.map
