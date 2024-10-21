import { s as subscribe, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, e as escape, v as validate_component, d as spread, h as escape_attribute_value, f as escape_object } from './ssr-10c5b872.js';
import { T as TextField } from './TextField-86164973.js';
import { P as PrimaryButton } from './index11-4ef8d5a0.js';
import { U as UploadImage } from './index27-5501584c.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { p as profile, u as user } from './user-e923b6d4.js';
import './index9-eea8802c.js';
import './_sentry-release-injection-file-6be6a010.js';
import './translations-90190f83.js';
import './index2-aea858a5.js';
import './index15-c5761f1e.js';
import '@supabase/supabase-js';
import './config-8c22ba68.js';
import './shared-server-e0f2abd3.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5c2189d0-e48a-4476-ac7d-fbe42fd99a6a", e._sentryDebugIdIdentifier = "sentry-dbid-5c2189d0-e48a-4476-ac7d-fbe42fd99a6a");
  } catch (e2) {
  }
}();
const Book = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M19 10H26V12H19zM19 15H26V17H19zM19 20H26V22H19zM6 10H13V12H6zM6 15H13V17H6zM6 20H13V22H6z"></path><path d="M28,5H4A2.002,2.002,0,0,0,2,7V25a2.002,2.002,0,0,0,2,2H28a2.002,2.002,0,0,0,2-2V7A2.002,2.002,0,0,0,28,5ZM4,7H15V25H4ZM17,25V7H28V25Z"></path></svg>`;
});
const UserAvatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Zm0,8a3,3,0,1,1,3-3A3.0034,3.0034,0,0,1,16,16Z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM10,26.3765V25a3.0033,3.0033,0,0,1,3-3h6a3.0033,3.0033,0,0,1,3,3v1.3765a11.8989,11.8989,0,0,1-12,0Zm13.9925-1.4507A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"></path></svg>`;
});
const css = {
  code: ".root.svelte-9z54ny{max-width:1204px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDirty;
  let $profile, $$unsubscribe_profile;
  let $user, $$unsubscribe_user;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  const { profileId } = data;
  let avatar;
  let loading = false;
  let currentProfile = {};
  let isOwner = false;
  let initialValueOfUserName, initialValueOfFullName;
  async function getProfile(profileId2) {
    loading = true;
    let { data: profileData, error, status } = await supabase.from("profile").select(`*`).eq("id", profileId2).single();
    if (error && !profileData && status === 406 && $user.currentSession)
      ;
    else if (profileData) {
      currentProfile = profileData;
      initialValueOfUserName = currentProfile.username;
      initialValueOfFullName = currentProfile.fullname;
    }
    loading = false;
  }
  async function updateProfile() {
    try {
      loading = true;
      const updates = {
        fullname: currentProfile.fullname,
        username: currentProfile.username
      };
      if (avatar) {
        const filename = `user/${currentProfile.username + Date.now()}.webp`;
        const { data: data2 } = await supabase.storage.from("avatars").upload(filename, avatar, { cacheControl: "3600", upsert: false });
        if (data2) {
          const { data: response } = supabase.storage.from("avatars").getPublicUrl(filename);
          updates.avatar_url = response.publicUrl;
          currentProfile.avatar_url = response.publicUrl;
        }
        avatar = void 0;
      }
      let { error } = await supabase.from("profile").update(updates).match({ id: profileId });
      if (isOwner) {
        profile.update((_profile) => ({ ..._profile, ...updates }));
      }
      if (error)
        throw error;
    } catch (error) {
      alert(error.message);
      loading = false;
    } finally {
      loading = false;
      initialValueOfUserName = currentProfile.username;
      initialValueOfFullName = currentProfile.fullname;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isDirty = avatar || initialValueOfUserName !== currentProfile.username || initialValueOfFullName !== currentProfile.fullname;
    isOwner = $profile.id === profileId;
    {
      getProfile(profileId);
    }
    {
      if (avatar) {
        updateProfile();
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1ra7te9_START -->${$$result.title = `<title>Profile of ${escape(currentProfile.username)}</title>`, ""}<!-- HEAD_svelte-1ra7te9_END -->`, ""} <section class="root w-11/12 mt-3 m-auto flex items-start justify-between flex-col lg:flex-row svelte-9z54ny">${currentProfile.id ? `<div class="w-full lg:w-1/4 flex items-center flex-col"> ${validate_component(UploadImage, "UploadImage").$$render(
      $$result,
      {
        src: currentProfile.avatar_url,
        widthHeight: "w-60 h-60",
        avatar
      },
      {
        avatar: ($$value) => {
          avatar = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${isOwner ? `${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "Full name",
        className: "w-60 mb-4",
        inputClassName: "rounded-md",
        value: currentProfile.fullname
      },
      {
        value: ($$value) => {
          currentProfile.fullname = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "Username",
        className: "w-60 mb-4",
        inputClassName: "rounded-md",
        value: currentProfile.username
      },
      {
        value: ($$value) => {
          currentProfile.username = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "Email",
        className: "w-60 mb-4",
        inputClassName: "rounded-md",
        isDisabled: true,
        value: currentProfile.email
      },
      {
        value: ($$value) => {
          currentProfile.email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${isDirty ? `${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: loading ? "Updating..." : "Update profile",
        onClick: updateProfile,
        isDisabled: loading
      },
      {},
      {}
    )}` : ``}` : `<h3 class="dark:text-white text-xl">${escape(currentProfile.username)}</h3>`}</div> <div class="flex-grow"></div> <div class="flex-grow flex flex-wrap mx-3 w-3/5"><div class="mb-3 w-full"><h3 class="dark:text-white font-bold text-md m-0" data-svelte-h="svelte-163y9py">Organizations</h3> <p class="dark:text-white text-gray-500 text-sm" data-svelte-h="svelte-1rrpmqp">This are the organizations you work at</p> <div class="hidden my-3 py-3 px-4 border shadow-sm rounded-md"><h4 class="dark:text-white m-0 font-normal" data-svelte-h="svelte-5s7ke"><a class="text-primary-700 font-bold" href="/courses">CitiBim</a></h4> <p class="dark:text-white text-gray-500" data-svelte-h="svelte-18ktm0j">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam tenetur magnam.
            Alias cumque quaerat expedita dolores placeat laboriosam culpa, suscipit veritatis
            adipisci eius magni obcaecati. Sequi doloremque blanditiis earum.</p> <div class="mt-2 flex items-center"><span class="flex mr-2 items-center">${validate_component(UserAvatar, "UserAvatarIcon").$$render($$result, { size: 16, class: "mr-2" }, {}, {})} 5</span> <span class="flex mr-2 items-center">${validate_component(Book, "BookIcon").$$render($$result, { size: 16, class: "mr-2" }, {}, {})} 5</span></div></div> <div class="hidden my-2 py-3 px-4 border shadow-sm rounded-md"><h4 class="dark:text-white m-0 font-normal" data-svelte-h="svelte-sm67vz"><a class="text-primary-700 font-bold" href="/courses">Climate Change Group</a></h4> <p class="dark:text-white text-gray-500" data-svelte-h="svelte-d8u5v9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo quasi autem quo possimus
            illum consequuntur repudiandae nobis error, porro</p> <div class="mt-2 flex items-center"><span class="flex mr-2 items-center">${validate_component(UserAvatar, "UserAvatarIcon").$$render($$result, { size: 16, class: "mr-2" }, {}, {})} 30</span> <span class="flex mr-2 items-center">${validate_component(Book, "BookIcon").$$render($$result, { size: 16, class: "mr-2" }, {}, {})} 3</span></div></div></div></div> ` : ``} </section>`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_user();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f070ff42.js.map
