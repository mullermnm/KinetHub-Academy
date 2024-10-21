import { s as subscribe, e as set_store_value, d as compute_rest_props } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, e as escape, b as each, d as spread, h as escape_attribute_value, f as escape_object, a as add_attribute } from './ssr-10c5b872.js';
import { p as page } from './stores-793c1e19.js';
import { P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { C as CourseContainer, P as PageBody } from './index25-9c55d031.js';
import { g as group } from './store4-ef39175f.js';
import { p as profile } from './user-e923b6d4.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { w as writable } from './index2-aea858a5.js';
import './_sentry-release-injection-file-6be6a010.js';
import { C as Chip } from './index12-9c021b5e.js';
import { c as calDateDiff } from './date-30c46a0e.js';
import { M as Modal } from './index8-59a07edf.js';
import { H as HTMLRender } from './HTMLRender-9a6e04f8.js';
import { c as currentOrg, i as isOrgAdmin } from './org-8fc26a61.js';
import { i as isHtmlValueEmpty, g as getTextFromHTML } from './toHtml-f85ea04f.js';
import pluralize from 'pluralize';
import { c as createNewsfeedValidation } from './validator-27ec1d5c.js';
import { O as OverflowMenu$1, a as OverflowMenuItem$1 } from './OverflowMenuItem-10e1618e.js';
import { T as TextEditor } from './index26-5db2dde8.js';
import { h as handleEditFeed, f as fetchNewsFeeds, d as deleteNewsFeedComment, a as fetchNewsFeedReaction, c as createComment, t as toggleFeedIsPinned, b as deleteNewsFeed, e as createNewFeed } from './index4-4ad3d696.js';
import { b as snackbar } from './store2-dc811f17.js';
import './config-8c22ba68.js';
import { t as t2 } from './translations-90190f83.js';
import { B as Box } from './index17-3166eaf0.js';
import { s as supabase } from './supabase-cbc58bc2.js';
import { S as SkeletonPlaceholder$1 } from './SkeletonPlaceholder-be3b5db2.js';
import { S as SkeletonText$1 } from './SkeletonText-d2851876.js';
import { g as goto } from './navigation-cd282f65.js';
import './index9-eea8802c.js';
import './Moon-632bccb1.js';
import './environment-b7cb3169.js';
import './prod-ssr-f02d8713.js';
import './Text-e3f4b18b.js';
import './Locked-3612b17f.js';
import './CheckmarkFilled-36899326.js';
import './Add-78ef4d23.js';
import './function-efda068b.js';
import './FlashFilled-4a89bd75.js';
import './reusableClass-512f4804.js';
import './Settings-0a14f57d.js';
import './index15-c5761f1e.js';
import './useMobile-47eebf4e.js';
import './store-37f0dea3.js';
import 'canvas-confetti';
import './index18-b03e5e10.js';
import './app-d638cf5d.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import 'lodash/isNumber.js';
import 'zod';
import '@supabase/supabase-js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4e859e64-ed57-458d-acab-4c75d0680b0e", e._sentryDebugIdIdentifier = "sentry-dbid-4e859e64-ed57-458d-acab-4c75d0680b0e");
  } catch (e2) {
  }
}();
const PinFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28.5858,13.3137,30,11.9,20,2,18.6858,3.415l1.1858,1.1857L8.38,14.3225,6.6641,12.6067,5.25,14l5.6572,5.6773L2,28.5831,3.41,30l8.9111-8.9087L18,26.7482l1.3929-1.414L17.6765,23.618l9.724-11.4895Z"></path></svg>`;
});
const Send = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M27.45,15.11l-22-11a1,1,0,0,0-1.08.12,1,1,0,0,0-.33,1L7,16,4,26.74A1,1,0,0,0,5,28a1,1,0,0,0,.45-.11l22-11a1,1,0,0,0,0-1.78Zm-20.9,10L8.76,17H18V15H8.76L6.55,6.89,24.76,16Z"></path></svg>`;
});
const UserMultiple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M30 30H28V25a5.0057 5.0057 0 00-5-5V18a7.0078 7.0078 0 017 7zM22 30H20V25a5.0059 5.0059 0 00-5-5H9a5.0059 5.0059 0 00-5 5v5H2V25a7.0082 7.0082 0 017-7h6a7.0082 7.0082 0 017 7zM20 2V4a5 5 0 010 10v2A7 7 0 0020 2zM12 4A5 5 0 117 9a5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0012 2z"></path></svg>`;
});
const isNewFeedModal = writable({
  open: false
});
const newsFeed = writable([]);
const DeleteFeedConfirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openDeleteModal = false } = $$props;
  let { deleteFeed = () => {
  } } = $$props;
  async function handleDelete() {
    deleteFeed();
    openDeleteModal = false;
  }
  if ($$props.openDeleteModal === void 0 && $$bindings.openDeleteModal && openDeleteModal !== void 0)
    $$bindings.openDeleteModal(openDeleteModal);
  if ($$props.deleteFeed === void 0 && $$bindings.deleteFeed && deleteFeed !== void 0)
    $$bindings.deleteFeed(deleteFeed);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: () => openDeleteModal = false,
        width: "w-96",
        modalHeading: "Delete Feed",
        open: openDeleteModal
      },
      {
        open: ($$value) => {
          openDeleteModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div><h1 class="dark:text-white text-lg" data-svelte-h="svelte-z8g13n">Are you sure you want to delete this feed?</h1> <div class="mt-5 flex items-center justify-between">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: "No",
              onClick: () => openDeleteModal = false
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              className: "px-6 py-3",
              variant: VARIANTS.OUTLINED,
              label: "Yes",
              onClick: handleDelete
            },
            {},
            {}
          )}</div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const NewsFeedCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isNewFeedModal;
  let $profile, $$unsubscribe_profile;
  let $isOrgAdmin, $$unsubscribe_isOrgAdmin;
  $$unsubscribe_isNewFeedModal = subscribe(isNewFeedModal, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_isOrgAdmin = subscribe(isOrgAdmin, (value) => $isOrgAdmin = value);
  let { feed } = $$props;
  let { editFeed } = $$props;
  let { author } = $$props;
  let { edit = false } = $$props;
  let { deleteFeed = (arg) => {
  } } = $$props;
  let { deleteComment = (arg) => {
  } } = $$props;
  let { addNewComment = (arg1, arg2, arg3) => {
  } } = $$props;
  let { addNewReaction = (arg1, arg2, arg3) => {
  } } = $$props;
  let { onPin = (feedId, isPinned) => {
  } } = $$props;
  let { isActive = false } = $$props;
  let comment = "";
  let isDeleteFeedModal = false;
  let reactions = {
    smile: "😀",
    thumbsup: "👍",
    thumbsdown: "👎",
    clap: "👏"
  };
  const handleDeleteFeed = () => {
    deleteFeed(feed.id);
  };
  const getClassIfSelectedByAuthor = (reactionType) => {
    const usersReacted = feed.reaction[reactionType] || [];
    return usersReacted.includes(author.id) ? "bg-primary-200 border-primary-600 pl-2" : "bg-gray-200 border-gray-600 pl-2";
  };
  if ($$props.feed === void 0 && $$bindings.feed && feed !== void 0)
    $$bindings.feed(feed);
  if ($$props.editFeed === void 0 && $$bindings.editFeed && editFeed !== void 0)
    $$bindings.editFeed(editFeed);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0)
    $$bindings.edit(edit);
  if ($$props.deleteFeed === void 0 && $$bindings.deleteFeed && deleteFeed !== void 0)
    $$bindings.deleteFeed(deleteFeed);
  if ($$props.deleteComment === void 0 && $$bindings.deleteComment && deleteComment !== void 0)
    $$bindings.deleteComment(deleteComment);
  if ($$props.addNewComment === void 0 && $$bindings.addNewComment && addNewComment !== void 0)
    $$bindings.addNewComment(addNewComment);
  if ($$props.addNewReaction === void 0 && $$bindings.addNewReaction && addNewReaction !== void 0)
    $$bindings.addNewReaction(addNewReaction);
  if ($$props.onPin === void 0 && $$bindings.onPin && onPin !== void 0)
    $$bindings.onPin(onPin);
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div${add_attribute("id", feed.id, 0)} class="${"flex flex-col gap-5 " + escape(
      isActive ? "border-2 border-primary-700" : "border border-gray-200 dark:border-neutral-600",
      true
    ) + " rounded-md mb-7 max-w-3xl"}"><section><div class="p-3 pb-0"><div class="flex justify-between mb-2"><span class="flex items-center gap-3"><div class="w-9 h-9"><img${add_attribute("src", feed.author?.profile?.avatar_url, 0)} alt="users banner" class="w-full h-full rounded-full object-cover"></div> <span><p class="text-base font-semibold capitalize">${escape(feed.author?.profile?.fullname)}</p> <p class="text-sm font-medium text-gray-600">${escape(calDateDiff(feed.created_at))}</p></span></span> ${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
      default: () => {
        return `${validate_component(OverflowMenu$1, "OverflowMenu").$$render($$result, { flipped: true }, {}, {
          default: () => {
            return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render($$result, { text: feed.isPinned ? "Unpin" : "Pin" }, {}, {})} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render($$result, { text: "Edit" }, {}, {})} ${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render($$result, { danger: true, text: "Delete" }, {}, {})}`;
          }
        })}`;
      }
    })}</div> ${!isHtmlValueEmpty(feed.content) ? `${validate_component(HTMLRender, "HtmlRender").$$render(
      $$result,
      {
        className: "text-sm font-medium w-[80%] mb-4"
      },
      {},
      {
        content: () => {
          return `<div><!-- HTML_TAG_START -->${feed.content}<!-- HTML_TAG_END --></div>`;
        }
      }
    )}` : ``}</div> <div class="flex items-center gap-4 px-3"><div class="flex items-center gap-4 px-3">${each(Object.keys(feed.reaction), (reactionType) => {
      return `${reactions[reactionType] ? `<button${add_attribute("class", `flex items-center transition ${feed.reaction[reactionType].length >= 1 && `${getClassIfSelectedByAuthor(reactionType)} dark:text-black border rounded-full`}`, 0)}><div class="text-[15px]">${escape(reactions[reactionType])}</div> ${feed.reaction[reactionType].length >= 1 ? `${validate_component(Chip, "Chip").$$render(
        $$result,
        {
          value: feed.reaction[reactionType].length,
          className: "bg-transparent"
        },
        {},
        {}
      )}` : ``} </button>` : ``}`;
    })}</div></div></section> <section class="border-t border-gray-200 dark:border-neutral-600 p-3">${feed.comment.length > 0 ? `<button class="flex flex-row items-center gap-1 -mx-2 px-2 rounded-md">${validate_component(UserMultiple, "UserMultiple").$$render($$result, { size: 16 }, {}, {})} <p class="text-sm py-2">${escape(pluralize("comment", feed.comment.length, true))}</p></button>` : ``} <div>${each(feed.comment, (comment2, index) => {
      return `${comment2.content && index === feed.comment.length - 1 ? `<div class="group flex justify-between items-center py-2"><span class="flex items-center gap-3"><div class="w-9 h-9"><img${add_attribute("src", comment2.author?.profile?.avatar_url, 0)} alt="users banner" class="w-full h-full rounded-full object-cover"></div> <span><div class="flex items-center gap-2"><p class="text-sm font-medium capitalize">${escape(comment2.author?.profile?.fullname)}</p> <p class="text-xs font-medium text-gray-600">${escape(calDateDiff(comment2.created_at))}</p></div> <p>${escape(comment2.content)}</p> </span></span> ${comment2.author?.profile?.id === $profile.id || $isOrgAdmin ? `${validate_component(OverflowMenu$1, "OverflowMenu").$$render(
        $$result,
        {
          flipped: true,
          class: "hidden group-hover:flex"
        },
        {},
        {
          default: () => {
            return `${validate_component(OverflowMenuItem$1, "OverflowMenuItem").$$render($$result, { danger: true, text: "Delete" }, {}, {})} `;
          }
        }
      )}` : ``} </div>` : ``}`;
    })}</div> <div class="flex items-center justify-between gap-2"><div class="w-7 h-7"><img${add_attribute("src", author.avatar_url, 0)} alt="users banner" class="w-full h-full rounded-full object-cover"></div> <div class="flex-1"><input type="text" placeholder="Add class comment" class="w-full bg-transparent border border-gray-200 dark:border-neutral-600 rounded-3xl" required${add_attribute("value", comment, 0)}></div> <button>${validate_component(Send, "Send").$$render($$result, { size: 24 }, {}, {})}</button></div> ${``}</section> ${validate_component(DeleteFeedConfirmation, "DeleteFeedConfirmation").$$render(
      $$result,
      {
        deleteFeed: handleDeleteFeed,
        openDeleteModal: isDeleteFeedModal
      },
      {
        openDeleteModal: ($$value) => {
          isDeleteFeedModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_isNewFeedModal();
  $$unsubscribe_profile();
  $$unsubscribe_isOrgAdmin();
  return $$rendered;
});
const NewFeedModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isNewFeedModal, $$unsubscribe_isNewFeedModal;
  let $t, $$unsubscribe_t;
  $$unsubscribe_isNewFeedModal = subscribe(isNewFeedModal, (value) => $isNewFeedModal = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { author = {} } = $$props;
  let { courseId = "" } = $$props;
  let { onSave = (feed) => {
  } } = $$props;
  let { onEdit = (id, content) => {
  } } = $$props;
  let { edit = false } = $$props;
  let { editFeed } = $$props;
  let newPost = "";
  let isLoading = false;
  let createdFeed;
  let errors = {};
  const onPost = async () => {
    errors = createNewsfeedValidation(getTextFromHTML(newPost));
    if (Object.keys(errors).length) {
      return;
    }
    isLoading = true;
    try {
      if (edit) {
        onEdit(editFeed.id, newPost);
        snackbar.success("snackbar.newsfeed.success.edit");
        edit = false;
        newPost = "";
        set_store_value(isNewFeedModal, $isNewFeedModal.open = false, $isNewFeedModal);
      } else {
        const { response: { data } } = await createNewFeed({
          content: newPost,
          author_id: author.id,
          course_id: courseId,
          reaction: {
            smile: [],
            thumbsup: [],
            thumbsdown: [],
            clap: []
          }
        });
        if (!data)
          return;
        createdFeed = data[0];
        if (!createdFeed)
          return;
        onSave({
          id: createdFeed.id,
          content: newPost,
          author: { profile: { ...author } },
          created_at: createdFeed.created_at,
          comment: [],
          reaction: createdFeed.reaction,
          isPinned: false
        });
        snackbar.success("snackbar.newsfeed.success.add");
        resetEditor();
      }
    } catch (error) {
      snackbar.error("snackbar.newsfeed.error.error " + (edit ? "snackbar.newsfeed.error.editing" : "snackbar.newsfeed.error.creating"));
    } finally {
      isLoading = false;
    }
  };
  const resetEditor = () => {
    newPost = "";
    edit = false;
    set_store_value(isNewFeedModal, $isNewFeedModal.open = false, $isNewFeedModal);
  };
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.courseId === void 0 && $$bindings.courseId && courseId !== void 0)
    $$bindings.courseId(courseId);
  if ($$props.onSave === void 0 && $$bindings.onSave && onSave !== void 0)
    $$bindings.onSave(onSave);
  if ($$props.onEdit === void 0 && $$bindings.onEdit && onEdit !== void 0)
    $$bindings.onEdit(onEdit);
  if ($$props.edit === void 0 && $$bindings.edit && edit !== void 0)
    $$bindings.edit(edit);
  if ($$props.editFeed === void 0 && $$bindings.editFeed && editFeed !== void 0)
    $$bindings.editFeed(editFeed);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    newPost = edit === true ? editFeed?.content : "";
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        onClose: resetEditor,
        width: "w-4/5",
        maxWidth: "max-w-lg",
        modalHeading: edit === true ? $t("course.navItem.news_feed.heading_button.edit_post") : $t("course.navItem.news_feed.heading_button.make_a_post"),
        open: $isNewFeedModal.open
      },
      {
        open: ($$value) => {
          $isNewFeedModal.open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<section class="flex flex-col rounded-xl pb-3 h-full w-2/">${validate_component(TextEditor, "TextEditor").$$render(
            $$result,
            {
              value: newPost,
              onChange: (text) => {
                newPost = text;
              },
              placeholder: $t("course.navItem.news_feed.heading_button.placeholder"),
              maxHeight: 400
            },
            {},
            {}
          )} ${errors.newPost ? `<p class="text-sm text-red-500">${escape(errors.newPost)}</p>` : ``} <div class="flex items-center justify-end py-2"><div class="flex gap-2">${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              label: $t("course.navItem.news_feed.heading_button.cancel"),
              variant: VARIANTS.OUTLINED,
              onClick: resetEditor
            },
            {},
            {}
          )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
            $$result,
            {
              isLoading,
              label: $t("course.navItem.news_feed.heading_button.post"),
              onClick: onPost
            },
            {},
            {}
          )}</div></div></section>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_isNewFeedModal();
  $$unsubscribe_t();
  return $$rendered;
});
const NewsFeedLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col gap-5 border border-gray-300 p-4 rounded-md mb-7 max-w-3xl"><div class="flex items-center gap-2">${validate_component(SkeletonPlaceholder$1, "SkeletonPlaceholder").$$render(
    $$result,
    {
      style: "height: 2rem; width: 2rem;",
      class: "rounded-full overflow-hidden"
    },
    {},
    {}
  )} ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { width: "30%" }, {}, {})}</div> ${validate_component(SkeletonText$1, "SkeletonText").$$render($$result, { paragraph: true, lines: 3 }, {}, {})}</div>`;
});
function getPageRoles(org) {
  const roles = [1, 2];
  if (org.customization.course.newsfeed) {
    roles.push(3);
  }
  return roles;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $newsFeed, $$unsubscribe_newsFeed;
  let $profile, $$unsubscribe_profile;
  let $group, $$unsubscribe_group;
  let $page, $$unsubscribe_page;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  let $isNewFeedModal, $$unsubscribe_isNewFeedModal;
  $$unsubscribe_newsFeed = subscribe(newsFeed, (value) => $newsFeed = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_isNewFeedModal = subscribe(isNewFeedModal, (value) => $isNewFeedModal = value);
  let { data } = $$props;
  let createdComment;
  let edit = false;
  let isLoading = false;
  let editFeed;
  let author = {
    id: "",
    username: "",
    fullname: "",
    avatar_url: ""
  };
  let query = new URLSearchParams($page.url.search);
  let feedId = query.get("feedId") || "";
  const onEdit = (id, content) => {
    handleEditFeed(id, content);
    set_store_value(
      newsFeed,
      $newsFeed = $newsFeed.map((feed) => {
        if (feed.id === id) {
          return { ...feed, content };
        }
        return feed;
      }),
      $newsFeed
    );
  };
  const deleteComment = (id) => {
    deleteNewsFeedComment(id);
    set_store_value(
      newsFeed,
      $newsFeed = $newsFeed.flatMap((feed) => ({
        ...feed,
        comment: feed.comment.filter((comment) => comment.id !== id)
      })),
      $newsFeed
    );
    return snackbar.success("snackbar.course.success.comment_deleted");
  };
  const addNewReaction = async (reactionType, feedId2, authorId) => {
    const { data: data2 } = await fetchNewsFeedReaction(feedId2);
    if (!data2)
      return;
    const reactedFeed = data2 || $newsFeed.find((feed) => feed.id === feedId2);
    let reactedAuthorIds = reactedFeed.reaction[reactionType];
    if (reactedAuthorIds.includes(authorId)) {
      reactedAuthorIds = reactedAuthorIds.filter((reactionAuthorId) => reactionAuthorId !== authorId);
    } else {
      reactedAuthorIds = [...reactedAuthorIds, authorId];
    }
    reactedFeed.reaction = {
      ...reactedFeed.reaction,
      [reactionType]: reactedAuthorIds
    };
    const response = await supabase.from("course_newsfeed").update({ reaction: reactedFeed.reaction }).eq("id", feedId2);
    if (response.error) {
      return snackbar.error("snackbar.course.error.reaction_error");
    }
    set_store_value(
      newsFeed,
      $newsFeed = $newsFeed.map((feed) => {
        if (feed.id === feedId2) {
          feed.reaction = reactedFeed.reaction;
        }
        return feed;
      }),
      $newsFeed
    );
  };
  const addNewComment = async (comment, feedId2, authorId) => {
    const { response } = await createComment({
      content: comment,
      author_id: authorId,
      course_newsfeed_id: feedId2
    });
    if (response.error) {
      return snackbar.error("snackbar.course.error.commenting_error");
    }
    if (!response.data)
      return;
    createdComment = response?.data[0];
    set_store_value(
      newsFeed,
      $newsFeed = $newsFeed.map((feed) => {
        if (feed.id === feedId2) {
          const newComment = {
            id: createdComment.id,
            author: { profile: { ...author } },
            created_at: createdComment.created_at,
            content: comment
          };
          snackbar.success("snackbar.course.success.comment_added");
          return {
            ...feed,
            comment: [...feed.comment, { ...newComment }]
          };
        }
        return feed;
      }),
      $newsFeed
    );
  };
  const onPin = async (feedId2, isPinned) => {
    const newIsPinned = !isPinned;
    const { response } = await toggleFeedIsPinned(feedId2, newIsPinned);
    if (response.error) {
      return snackbar.error("snackbar.course.error.toggle_error");
    }
    set_store_value(
      newsFeed,
      $newsFeed = $newsFeed.map((feed) => {
        if (feed.id === feedId2) {
          snackbar.success(`${newIsPinned ? "snackbar.course.success.pinned" : "snackbar.course.success.unpinned"} snackbar.course.success.successfully`);
          feed.isPinned = newIsPinned;
          return feed;
        }
        return feed;
      }),
      $newsFeed
    );
  };
  const deleteFeed = (id) => {
    deleteNewsFeed(id);
    const deletedFeed = $newsFeed.filter((feed) => feed.id !== id);
    snackbar.success("snackbar.course.success.feed_delete_success");
    set_store_value(newsFeed, $newsFeed = deletedFeed, $newsFeed);
  };
  const initNewsFeed = async (courseId) => {
    if (!courseId)
      return;
    try {
      isLoading = true;
      const { data: data2, error } = await fetchNewsFeeds(courseId);
      if (error) {
        snackbar.error("snackbar.course.error.news_feed_fail");
      }
      if (data2) {
        set_store_value(
          newsFeed,
          $newsFeed = data2.map((feedItem) => ({
            ...feedItem,
            isPinned: feedItem.is_pinned
          })),
          $newsFeed
        );
      }
    } catch (error) {
      snackbar.error("snackbar.course.error.feed_fetch_error");
    } finally {
      isLoading = false;
    }
  };
  function setAuthor(groups, profileId) {
    const currentGroupMember = groups.people.find((person) => person.profile_id === profileId);
    author = {
      id: currentGroupMember?.id || "",
      username: $profile.username || "",
      fullname: $profile.fullname || "",
      avatar_url: $profile.avatar_url || ""
    };
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      initNewsFeed(data.courseId);
    }
    {
      setAuthor($group, $profile.id);
    }
    set_store_value(newsFeed, $newsFeed = $newsFeed.sort((a, b) => Number(b.isPinned) - Number(a.isPinned)), $newsFeed);
    $$rendered = `${validate_component(CourseContainer, "CourseContainer").$$render(
      $$result,
      { courseId: data.courseId },
      {
        courseId: ($$value) => {
          data.courseId = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render(
            $$result,
            {
              allowedRoles: getPageRoles($currentOrg),
              onDenied: () => {
                goto(`/courses/${data.courseId}/lessons?next=true`);
              }
            },
            {},
            {
              default: () => {
                return `${validate_component(PageNav, "PageNav").$$render(
                  $$result,
                  {
                    title: $t("course.navItem.news_feed.heading"),
                    disableSticky: true
                  },
                  {},
                  {
                    widget: () => {
                      return `<slot:fragment slot="widget">${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                        default: () => {
                          return `${validate_component(PrimaryButton, "PrimaryButton").$$render(
                            $$result,
                            {
                              className: "mr-2",
                              label: $t("course.navItem.news_feed.heading_button.title"),
                              onClick: () => $isNewFeedModal.open = true
                            },
                            {},
                            {}
                          )}`;
                        }
                      })}</slot:fragment>`;
                    }
                  }
                )} ${validate_component(PageBody, "PageBody").$$render($$result, { width: "max-w-4xl px-3" }, {}, {
                  default: () => {
                    return `${validate_component(RoleBasedSecurity, "RoleBasedSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
                      default: () => {
                        return `${validate_component(NewFeedModal, "NewFeedModal").$$render(
                          $$result,
                          {
                            courseId: data.courseId,
                            author,
                            onSave: (newFeed) => {
                              $newsFeed = [newFeed, ...$newsFeed];
                            },
                            onEdit,
                            edit,
                            editFeed
                          },
                          {
                            edit: ($$value) => {
                              edit = $$value;
                              $$settled = false;
                            },
                            editFeed: ($$value) => {
                              editFeed = $$value;
                              $$settled = false;
                            }
                          },
                          {}
                        )}`;
                      }
                    })} ${isLoading ? `<div>${validate_component(NewsFeedLoader, "NewsFeedLoader").$$render($$result, {}, {}, {})} ${validate_component(NewsFeedLoader, "NewsFeedLoader").$$render($$result, {}, {}, {})} ${validate_component(NewsFeedLoader, "NewsFeedLoader").$$render($$result, {}, {}, {})}</div>` : `${!$newsFeed.length ? `${validate_component(Box, "Box").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex justify-between flex-col items-center w-[90%] md:w-96"><img src="/images/empty-lesson-icon.svg" alt="Lesson" class="my-2.5 mx-auto"> <h2 class="text-xl my-1.5 font-normal">${escape($t("course.navItem.news_feed.body_header"))}</h2> <p class="text-sm text-center text-slate-500">${escape($t("course.navItem.news_feed.body_content"))}</p></div>`;
                      }
                    })}` : `${each($newsFeed, (feed) => {
                      return `${feed.isPinned ? `<div class="flex items-center gap-2 mb-3">${validate_component(PinFilled, "PinFilled").$$render($$result, { size: 16 }, {}, {})} <p class="text-sm">${escape($t("course.navItem.news_feed.pinned"))}</p> </div>` : ``} ${validate_component(NewsFeedCard, "NewsFeedCard").$$render(
                        $$result,
                        {
                          feed,
                          deleteFeed,
                          addNewComment,
                          deleteComment,
                          addNewReaction,
                          onPin,
                          author,
                          isActive: feedId === feed.id,
                          edit,
                          editFeed
                        },
                        {
                          edit: ($$value) => {
                            edit = $$value;
                            $$settled = false;
                          },
                          editFeed: ($$value) => {
                            editFeed = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )}`;
                    })}`}`}`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_newsFeed();
  $$unsubscribe_profile();
  $$unsubscribe_group();
  $$unsubscribe_page();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  $$unsubscribe_isNewFeedModal();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-572b2bad.js.map
