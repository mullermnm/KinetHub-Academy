import { s as subscribe, c as null_to_empty, d as compute_rest_props, e as set_store_value } from './utils-26d532f8.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape, b as each, d as spread, f as escape_object, o as onDestroy, g as createEventDispatcher, h as escape_attribute_value, i as add_classes, m as missing_component } from './ssr-10c5b872.js';
import { d as derived, w as writable } from './index2-aea858a5.js';
import { n as navigating, p as page } from './stores-793c1e19.js';
import 'lodash/isEmpty.js';
import merge from 'lodash/merge.js';
import { L as LandingPage, N as Navigation } from './index7-7ca5be32.js';
import { g as goto } from './navigation-cd282f65.js';
import { C as Close$1, M as Modal, a as Close } from './index8-59a07edf.js';
import { A as ArrowLeft } from './ArrowLeft-b60a107c.js';
import { I as IconButton } from './index9-eea8802c.js';
import { g as globalStore } from './app-d638cf5d.js';
import { e as currentOrgDomain, c as currentOrg, f as currentOrgPath, q as quizStore, p as playQuizStore } from './org-8fc26a61.js';
import { i as isOrgPage, a as isCoursesPage, b as isLMSPage, t as toggleBodyByMode } from './app2-29b60895.js';
import { s as sideBar } from './store-37f0dea3.js';
import { t as t2 } from './translations-90190f83.js';
import { A as Avatar$1 } from './index10-b2b97ef7.js';
import { T as Text } from './Text-e3f4b18b.js';
import './_sentry-release-injection-file-6be6a010.js';
import { s as snackbarStore, S as SNACKBAR_SEVERITY, a as snackbarStoreInitialState, b as snackbar } from './store2-dc811f17.js';
import { E as ErrorFilled$1, C as CheckmarkFilled$1 } from './ErrorFilled-1371f254.js';
import { W as WarningFilled$1, a as WarningAltFilled$1 } from './WarningAltFilled-13a554ec.js';
import { C as Close$1$1 } from './Close-73e0af44.js';
import { L as Loading$1, P as PrimaryButton, V as VARIANTS } from './index11-4ef8d5a0.js';
import { L as Locked } from './Locked-3612b17f.js';
import { B as Backdrop, P as PageNav } from './index.svelte_svelte_type_style_lang-3a07a684.js';
import { S as SendAlt, D as DateTime } from './DateTime-aa1ef45b.js';
import { S as Settings } from './Settings-0a14f57d.js';
import { a as apps } from './store3-2785033c.js';
import { C as Chip } from './index12-9c021b5e.js';
import { C as CheckmarkOutline } from './CheckmarkOutline-377cf09c.js';
import { V as Vote } from './index13-ea3bca06.js';
import { T as TextField } from './TextField-86164973.js';
import { g as getSupabase } from './supabase-cbc58bc2.js';
import { c as course, l as lesson, g as group } from './store4-ef39175f.js';
import { u as user, p as profile } from './user-e923b6d4.js';
import { c as calDateDiff } from './date-30c46a0e.js';
import { A as Add } from './Add-78ef4d23.js';
import { T as TrashCan } from './TrashCan-54bce261.js';
import { R as RoleBasedSecurity } from './index14-890f60bc.js';
import { R as ROUTES_TO_HIDE_NAV } from './routes-a5d469f3.js';
import 'posthog-js';
import './config-8c22ba68.js';
import 'canvas-confetti';
import { g as globals } from './globals-84b16929.js';
import { T as Toggle$1 } from './Toggle-e0c8f3da.js';
import { S as Select$1, a as SelectItem$1 } from './SelectItem-00c29785.js';
import 'lodash/get.js';
import './Rocket-f94fd084.js';
import './index16-68b7dc8d.js';
import './SkeletonPlaceholder-be3b5db2.js';
import './SkeletonText-d2851876.js';
import './getCurrencyFormatter-56d8d145.js';
import './index15-c5761f1e.js';
import './RadioButtonChecked-49b8cfed.js';
import './course-a9172902.js';
import './CaretRight-a9e49169.js';
import './ImageLoader-d6ed26af.js';
import './Tag-37c50bfd.js';
import './validator-27ec1d5c.js';
import 'lodash/isNumber.js';
import 'zod';
import './index17-3166eaf0.js';
import './CoursesEmptyIcon-3e8d3605.js';
import './store5-4ab63ff0.js';
import './index6-4a1599e3.js';
import './TextArea-9e2a2a4d.js';
import './Popover-a92462a3.js';
import './store6-6153cb6b.js';
import './PoweredBy-58475ea5.js';
import './ChevronRight-920dc215.js';
import './Column-ce23f72d.js';
import './shared-server-e0f2abd3.js';
import 'lodash/cloneDeep.js';
import '@supabase/supabase-js';
import './index18-b03e5e10.js';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import './ChevronDown-d5b93e8c.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "664d129a-4b09-4edb-8ad0-783be7c6dfbf", e._sentryDebugIdIdentifier = "sentry-dbid-664d129a-4b09-4edb-8ad0-783be7c6dfbf");
  } catch (e2) {
  }
}();
const MetaTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let updatedTitle;
  let { title = "" } = $$props;
  let { titleTemplate = "" } = $$props;
  let { robots = "index,follow" } = $$props;
  let { additionalRobotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (additionalRobotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = additionalRobotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTemplate === void 0 && $$bindings.titleTemplate && titleTemplate !== void 0)
    $$bindings.titleTemplate(titleTemplate);
  if ($$props.robots === void 0 && $$bindings.robots && robots !== void 0)
    $$bindings.robots(robots);
  if ($$props.additionalRobotsProps === void 0 && $$bindings.additionalRobotsProps && additionalRobotsProps !== void 0)
    $$bindings.additionalRobotsProps(additionalRobotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  updatedTitle = titleTemplate ? title ? titleTemplate.replace(/%s/g, title) : title : title;
  {
    if (!robots && additionalRobotsProps) {
      console.warn("additionalRobotsProps cannot be used when robots is set to false");
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-18pzfb8_START -->${updatedTitle ? `${$$result.title = `<title>${escape(updatedTitle)}</title>`, ""}` : ``}${robots !== false ? `<meta name="robots" content="${escape(robots, true) + escape(robotsParams, true)}">` : ``}${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${keywords?.length ? `<meta name="keywords"${add_attribute("content", keywords.join(", "), 0)}>` : ``}${mobileAlternate ? `<link rel="alternate"${add_attribute("media", mobileAlternate.media, 0)}${add_attribute("href", mobileAlternate.href, 0)}>` : ``}${languageAlternates && languageAlternates.length > 0 ? `${each(languageAlternates, (languageAlternate) => {
    return `<link rel="alternate"${add_attribute("hreflang", languageAlternate.hrefLang, 0)}${add_attribute("href", languageAlternate.href, 0)}>`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="twitter:card"${add_attribute("content", twitter.cardType, 0)}>` : ``} ${twitter.site ? `<meta name="twitter:site"${add_attribute("content", twitter.site, 0)}>` : ``} ${twitter.handle ? `<meta name="twitter:creator"${add_attribute("content", twitter.handle, 0)}>` : ``} ${twitter.title ? `<meta name="twitter:title"${add_attribute("content", twitter.title, 0)}>` : ``} ${twitter.description ? `<meta name="twitter:description"${add_attribute("content", twitter.description, 0)}>` : ``} ${twitter.image ? `<meta name="twitter:image"${add_attribute("content", twitter.image, 0)}>` : ``} ${twitter.imageAlt ? `<meta name="twitter:image:alt"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}` : ``}${facebook ? `<meta property="fb:app_id"${add_attribute("content", facebook.appId, 0)}>` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="og:url"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``} ${openGraph.type ? `<meta property="og:type"${add_attribute("content", openGraph.type.toLowerCase(), 0)}> ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="profile:first_name"${add_attribute("content", openGraph.profile.firstName, 0)}>` : ``} ${openGraph.profile.lastName ? `<meta property="profile:last_name"${add_attribute("content", openGraph.profile.lastName, 0)}>` : ``} ${openGraph.profile.username ? `<meta property="profile:username"${add_attribute("content", openGraph.profile.username, 0)}>` : ``} ${openGraph.profile.gender ? `<meta property="profile:gender"${add_attribute("content", openGraph.profile.gender, 0)}>` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${each(openGraph.book.authors, (author) => {
    return `<meta property="book:author"${add_attribute("content", author, 0)}>`;
  })}` : ``} ${openGraph.book.isbn ? `<meta property="book:isbn"${add_attribute("content", openGraph.book.isbn, 0)}>` : ``} ${openGraph.book.releaseDate ? `<meta property="book:release_date"${add_attribute("content", openGraph.book.releaseDate, 0)}>` : ``} ${openGraph.book.tags && openGraph.book.tags.length ? `${each(openGraph.book.tags, (tag) => {
    return `<meta property="book:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="article:published_time"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``} ${openGraph.article.modifiedTime ? `<meta property="article:modified_time"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``} ${openGraph.article.expirationTime ? `<meta property="article:expiration_time"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``} ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="article:author"${add_attribute("content", author, 0)}>`;
  })}` : ``} ${openGraph.article.section ? `<meta property="article:section"${add_attribute("content", openGraph.article.section, 0)}>` : ``} ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="article:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video?.actors && openGraph.video.actors.length ? `${each(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="video:actor"${add_attribute("content", actor.profile, 0)}>` : ``} ${actor.role ? `<meta property="video:actor:role"${add_attribute("content", actor.role, 0)}>` : ``}`;
  })}` : ``} ${openGraph.video?.directors && openGraph.video.directors.length ? `${each(openGraph.video.directors, (director) => {
    return `<meta property="video:director"${add_attribute("content", director, 0)}>`;
  })}` : ``} ${openGraph.video?.writers && openGraph.video.writers.length ? `${each(openGraph.video.writers, (writer) => {
    return `<meta property="video:writer"${add_attribute("content", writer, 0)}>`;
  })}` : ``} ${openGraph.video?.duration ? `<meta property="video:duration"${add_attribute("content", openGraph.video.duration.toString(), 0)}>` : ``} ${openGraph.video?.releaseDate ? `<meta property="video:release_date"${add_attribute("content", openGraph.video.releaseDate, 0)}>` : ``} ${openGraph.video?.tags && openGraph.video.tags.length ? `${each(openGraph.video.tags, (tag) => {
    return `<meta property="video:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``} ${openGraph.video?.series ? `<meta property="video:series"${add_attribute("content", openGraph.video.series, 0)}>` : ``}` : ``}`}`}`}` : ``} ${openGraph.title || updatedTitle ? `<meta property="og:title"${add_attribute("content", openGraph.title || updatedTitle, 0)}>` : ``} ${openGraph.description || description ? `<meta property="og:description"${add_attribute("content", openGraph.description || description, 0)}>` : ``} ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="og:image"${add_attribute("content", image.url, 0)}> ${image.alt ? `<meta property="og:image:alt"${add_attribute("content", image.alt, 0)}>` : ``} ${image.width ? `<meta property="og:image:width"${add_attribute("content", image.width.toString(), 0)}>` : ``} ${image.height ? `<meta property="og:image:height"${add_attribute("content", image.height.toString(), 0)}>` : ``} ${image.secureUrl ? `<meta property="og:image:secure_url"${add_attribute("content", image.secureUrl.toString(), 0)}>` : ``} ${image.type ? `<meta property="og:image:type"${add_attribute("content", image.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.videos && openGraph.videos.length ? `${each(openGraph.videos, (video) => {
    return `<meta property="og:video"${add_attribute("content", video.url, 0)}> ${video.width ? `<meta property="og:video:width"${add_attribute("content", video.width.toString(), 0)}>` : ``} ${video.height ? `<meta property="og:video:height"${add_attribute("content", video.height.toString(), 0)}>` : ``} ${video.secureUrl ? `<meta property="og:video:secure_url"${add_attribute("content", video.secureUrl.toString(), 0)}>` : ``} ${video.type ? `<meta property="og:video:type"${add_attribute("content", video.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.audio && openGraph.audio.length ? `${each(openGraph.audio, (audio) => {
    return `<meta property="og:audio"${add_attribute("content", audio.url, 0)}> ${audio.secureUrl ? `<meta property="og:audio:secure_url"${add_attribute("content", audio.secureUrl.toString(), 0)}>` : ``} ${audio.type ? `<meta property="og:audio:type"${add_attribute("content", audio.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.locale ? `<meta property="og:locale"${add_attribute("content", openGraph.locale, 0)}>` : ``} ${openGraph.siteName ? `<meta property="og:site_name"${add_attribute("content", openGraph.siteName, 0)}>` : ``}` : ``}${additionalMetaTags && Array.isArray(additionalMetaTags) ? `${each(additionalMetaTags, (tag) => {
    return `<meta${spread([escape_object(tag)], {})}>`;
  })}` : ``}${additionalLinkTags?.length ? `${each(additionalLinkTags, (tag) => {
    return `<link${spread([escape_object(tag)], {})}>`;
  })}` : ``}<!-- HEAD_svelte-18pzfb8_END -->`, ""}`;
});
function clearAll() {
  localStorage.clear();
}
const LocalStorage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key = "local-storage-key" } = $$props;
  let { value = "" } = $$props;
  function clearItem() {
    localStorage.removeItem(key);
  }
  createEventDispatcher();
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.clearItem === void 0 && $$bindings.clearItem && clearItem !== void 0)
    $$bindings.clearItem(clearItem);
  if ($$props.clearAll === void 0 && $$bindings.clearAll && clearAll !== void 0)
    $$bindings.clearAll(clearAll);
  return ``;
});
const LocalStorage$1 = LocalStorage;
const NotificationButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["notificationType", "icon", "title", "iconDescription"]);
  let { notificationType = "toast" } = $$props;
  let { icon = Close$1$1 } = $$props;
  let { title = void 0 } = $$props;
  let { iconDescription = "Close icon" } = $$props;
  if ($$props.notificationType === void 0 && $$bindings.notificationType && notificationType !== void 0)
    $$bindings.notificationType(notificationType);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return ` <button${spread(
    [
      { type: "button" },
      {
        "aria-label": escape_attribute_value(iconDescription)
      },
      {
        title: escape_attribute_value(iconDescription)
      },
      escape_object($$restProps)
    ],
    {
      classes: (notificationType === "toast" ? "bx--toast-notification__close-button" : "") + " " + (notificationType === "inline" ? "bx--inline-notification__close-button" : "")
    }
  )}>${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: 20,
      title,
      class: (notificationType === "toast" && "bx--toast-notification__close-icon") + " " + (notificationType === "inline" && "bx--inline-notification__close-icon")
    },
    {},
    {}
  )}</button>`;
});
const NotificationButton$1 = NotificationButton;
const InformationFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z" data-icon-path="inner-path"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path></svg>`;
});
const InformationFilled$1 = InformationFilled;
const InformationSquareFilled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path fill="none" d="M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z" data-icon-path="inner-path"></path><path d="M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path></svg>`;
});
const InformationSquareFilled$1 = InformationSquareFilled;
const NotificationIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { kind = "error" } = $$props;
  let { notificationType = "toast" } = $$props;
  let { iconDescription } = $$props;
  const icons = {
    error: ErrorFilled$1,
    "info-square": InformationSquareFilled$1,
    info: InformationFilled$1,
    success: CheckmarkFilled$1,
    warning: WarningFilled$1,
    "warning-alt": WarningAltFilled$1
  };
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.notificationType === void 0 && $$bindings.notificationType && notificationType !== void 0)
    $$bindings.notificationType(notificationType);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  return `${validate_component(icons[kind] || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: 20,
      title: iconDescription,
      class: (notificationType === "toast" && "bx--toast-notification__icon") + " " + (notificationType === "inline" && "bx--inline-notification__icon")
    },
    {},
    {}
  )}`;
});
const NotificationIcon$1 = NotificationIcon;
const ToastNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "lowContrast",
    "timeout",
    "role",
    "title",
    "subtitle",
    "caption",
    "statusIconDescription",
    "closeButtonDescription",
    "hideCloseButton",
    "fullWidth"
  ]);
  let { kind = "error" } = $$props;
  let { lowContrast = false } = $$props;
  let { timeout = 0 } = $$props;
  let { role = "alert" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { caption = "" } = $$props;
  let { statusIconDescription = kind + " icon" } = $$props;
  let { closeButtonDescription = "Close notification" } = $$props;
  let { hideCloseButton = false } = $$props;
  let { fullWidth = false } = $$props;
  createEventDispatcher();
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.lowContrast === void 0 && $$bindings.lowContrast && lowContrast !== void 0)
    $$bindings.lowContrast(lowContrast);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.statusIconDescription === void 0 && $$bindings.statusIconDescription && statusIconDescription !== void 0)
    $$bindings.statusIconDescription(statusIconDescription);
  if ($$props.closeButtonDescription === void 0 && $$bindings.closeButtonDescription && closeButtonDescription !== void 0)
    $$bindings.closeButtonDescription(closeButtonDescription);
  if ($$props.hideCloseButton === void 0 && $$bindings.hideCloseButton && hideCloseButton !== void 0)
    $$bindings.hideCloseButton(hideCloseButton);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  return ` ${`<div${spread(
    [
      { role: escape_attribute_value(role) },
      { kind: escape_attribute_value(kind) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--toast-notification " + (lowContrast ? "bx--toast-notification--low-contrast" : "") + " " + (kind === "error" ? "bx--toast-notification--error" : "") + " " + (kind === "info" ? "bx--toast-notification--info" : "") + " " + (kind === "info-square" ? "bx--toast-notification--info-square" : "") + " " + (kind === "success" ? "bx--toast-notification--success" : "") + " " + (kind === "warning" ? "bx--toast-notification--warning" : "") + " " + (kind === "warning-alt" ? "bx--toast-notification--warning-alt" : ""),
      styles: { "width": fullWidth ? "100%" : void 0 }
    }
  )}>${validate_component(NotificationIcon$1, "NotificationIcon").$$render(
    $$result,
    {
      kind,
      iconDescription: statusIconDescription
    },
    {},
    {}
  )} <div${add_classes("bx--toast-notification__details".trim())}><h3${add_classes("bx--toast-notification__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h3> <div${add_classes("bx--toast-notification__subtitle".trim())}>${slots.subtitle ? slots.subtitle({}) : `${escape(subtitle)}`}</div> <div${add_classes("bx--toast-notification__caption".trim())}>${slots.caption ? slots.caption({}) : `${escape(caption)}`}</div> ${slots.default ? slots.default({}) : ``}</div> ${!hideCloseButton ? `${validate_component(NotificationButton$1, "NotificationButton").$$render($$result, { iconDescription: closeButtonDescription }, {}, {})}` : ``}</div>`}`;
});
const ToastNotification$1 = ToastNotification;
const InlineNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "lowContrast",
    "timeout",
    "role",
    "title",
    "subtitle",
    "hideCloseButton",
    "statusIconDescription",
    "closeButtonDescription"
  ]);
  let { kind = "error" } = $$props;
  let { lowContrast = false } = $$props;
  let { timeout = 0 } = $$props;
  let { role = "alert" } = $$props;
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { hideCloseButton = false } = $$props;
  let { statusIconDescription = kind + " icon" } = $$props;
  let { closeButtonDescription = "Close notification" } = $$props;
  createEventDispatcher();
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.lowContrast === void 0 && $$bindings.lowContrast && lowContrast !== void 0)
    $$bindings.lowContrast(lowContrast);
  if ($$props.timeout === void 0 && $$bindings.timeout && timeout !== void 0)
    $$bindings.timeout(timeout);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.hideCloseButton === void 0 && $$bindings.hideCloseButton && hideCloseButton !== void 0)
    $$bindings.hideCloseButton(hideCloseButton);
  if ($$props.statusIconDescription === void 0 && $$bindings.statusIconDescription && statusIconDescription !== void 0)
    $$bindings.statusIconDescription(statusIconDescription);
  if ($$props.closeButtonDescription === void 0 && $$bindings.closeButtonDescription && closeButtonDescription !== void 0)
    $$bindings.closeButtonDescription(closeButtonDescription);
  return ` ${`<div${spread(
    [
      { role: escape_attribute_value(role) },
      { kind: escape_attribute_value(kind) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--inline-notification " + (lowContrast ? "bx--inline-notification--low-contrast" : "") + " " + (hideCloseButton ? "bx--inline-notification--hide-close-button" : "") + " " + (kind === "error" ? "bx--inline-notification--error" : "") + " " + (kind === "info" ? "bx--inline-notification--info" : "") + " " + (kind === "info-square" ? "bx--inline-notification--info-square" : "") + " " + (kind === "success" ? "bx--inline-notification--success" : "") + " " + (kind === "warning" ? "bx--inline-notification--warning" : "") + " " + (kind === "warning-alt" ? "bx--inline-notification--warning-alt" : "")
    }
  )}><div${add_classes("bx--inline-notification__details".trim())}>${validate_component(NotificationIcon$1, "NotificationIcon").$$render(
    $$result,
    {
      notificationType: "inline",
      kind,
      iconDescription: statusIconDescription
    },
    {},
    {}
  )} <div${add_classes("bx--inline-notification__text-wrapper".trim())}><p${add_classes("bx--inline-notification__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</p> <div${add_classes("bx--inline-notification__subtitle".trim())}>${slots.subtitle ? slots.subtitle({}) : `${escape(subtitle)}`}</div> ${slots.default ? slots.default({}) : ``}</div></div> ${slots.actions ? slots.actions({}) : ``} ${!hideCloseButton ? `${validate_component(NotificationButton$1, "NotificationButton").$$render(
    $$result,
    {
      iconDescription: closeButtonDescription,
      notificationType: "inline"
    },
    {},
    {}
  )}` : ``}</div>`}`;
});
const InlineNotification$1 = InlineNotification;
const { Object: Object_1 } = globals;
const Theme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme = "white" } = $$props;
  let { tokens = {} } = $$props;
  let { persist = false } = $$props;
  let { persistKey = "theme" } = $$props;
  let { render = void 0 } = $$props;
  let { toggle = {
    themes: ["white", "g100"],
    labelA: "",
    labelB: "",
    labelText: "Dark mode",
    hideLabel: false
  } } = $$props;
  const themes = {
    white: "White",
    g10: "Gray 10",
    g80: "Gray 80",
    g90: "Gray 90",
    g100: "Gray 100"
  };
  const themeKeys = Object.keys(themes);
  let { select = {
    themes: themeKeys,
    labelText: "Themes",
    hideLabel: false
  } } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
    $$bindings.tokens(tokens);
  if ($$props.persist === void 0 && $$bindings.persist && persist !== void 0)
    $$bindings.persist(persist);
  if ($$props.persistKey === void 0 && $$bindings.persistKey && persistKey !== void 0)
    $$bindings.persistKey(persistKey);
  if ($$props.render === void 0 && $$bindings.render && render !== void 0)
    $$bindings.render(render);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.select === void 0 && $$bindings.select && select !== void 0)
    $$bindings.select(select);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (typeof window !== "undefined") {
        Object.entries(tokens).forEach(([token, value]) => {
          document.documentElement.style.setProperty(`--cds-${token}`, value);
        });
        if (theme in themes) {
          document.documentElement.setAttribute("theme", theme);
          dispatch("update", { theme });
        } else {
          console.warn(`[Theme.svelte] invalid theme "${theme}". Value must be one of: ${JSON.stringify(Object.keys(themes))}`);
        }
      }
    }
    $$rendered = `${persist ? `${validate_component(LocalStorage$1, "LocalStorage").$$render(
      $$result,
      { key: persistKey, value: theme },
      {
        value: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${render === "toggle" ? `${validate_component(Toggle$1, "Toggle").$$render($$result, Object_1.assign({}, toggle, { toggled: theme === toggle.themes[1] }), {}, {})}` : `${render === "select" ? `${validate_component(Select$1, "Select").$$render(
      $$result,
      Object_1.assign({}, select, { selected: theme }),
      {
        selected: ($$value) => {
          theme = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(select.themes, (theme2) => {
            return `${validate_component(SelectItem$1, "SelectItem").$$render($$result, { value: theme2, text: themes[theme2] }, {}, {})}`;
          })}`;
        }
      }
    )}` : ``}`} ${slots.default ? slots.default({ theme }) : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Theme$1 = Theme;
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28.7071,19.293,26,16.5859V13a10.0136,10.0136,0,0,0-9-9.9492V1H15V3.0508A10.0136,10.0136,0,0,0,6,13v3.5859L3.2929,19.293A1,1,0,0,0,3,20v3a1,1,0,0,0,1,1h7v.7768a5.152,5.152,0,0,0,4.5,5.1987A5.0057,5.0057,0,0,0,21,25V24h7a1,1,0,0,0,1-1V20A1,1,0,0,0,28.7071,19.293ZM19,25a3,3,0,0,1-6,0V24h6Zm8-3H5V20.4141L7.707,17.707A1,1,0,0,0,8,17V13a8,8,0,0,1,16,0v4a1,1,0,0,0,.293.707L27,20.4141Z"></path></svg>`;
});
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M13.5025,5.4136A15.0755,15.0755,0,0,0,25.096,23.6082a11.1134,11.1134,0,0,1-7.9749,3.3893c-.1385,0-.2782.0051-.4178,0A11.0944,11.0944,0,0,1,13.5025,5.4136M14.98,3a1.0024,1.0024,0,0,0-.1746.0156A13.0959,13.0959,0,0,0,16.63,28.9973c.1641.006.3282,0,.4909,0a13.0724,13.0724,0,0,0,10.702-5.5556,1.0094,1.0094,0,0,0-.7833-1.5644A13.08,13.08,0,0,1,15.8892,4.38,1.0149,1.0149,0,0,0,14.98,3Z"></path></svg>`;
});
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z" transform="translate(0 .005)"></path><path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.86 7.856)"></path><path d="M2 15.005H7V17.005000000000003H2z"></path><path d="M5.375 23.147H10.333V25.147H5.375z" transform="rotate(-45 7.86 24.149)"></path><path d="M15 25.005H17V30.005H15z"></path><path d="M23.147 21.668H25.147V26.625999999999998H23.147z" transform="rotate(-45 24.152 24.149)"></path><path d="M25 15.005H30V17.005000000000003H25z"></path><path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.152 7.856)"></path><path d="M15 2.005H17V7.005H15z"></path></svg>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M4 6H28V8H4zM4 24H28V26H4zM4 12H28V14H4zM4 18H28V20H4z"></path></svg>`;
});
const css$8 = {
  code: "ul.svelte-68n2h0{padding:0}ul.svelte-68n2h0::after{content:'';display:block;clear:both}a.svelte-68n2h0{text-decoration:none;color:#fff;font-weight:700}@media only screen and (max-width: 1002px){nav.hide.svelte-68n2h0{display:none}ul.svelte-68n2h0{align-items:center}a.svelte-68n2h0{padding:0 0.5em}}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let coursesPath;
  let $currentOrgPath, $$unsubscribe_currentOrgPath;
  let $globalStore, $$unsubscribe_globalStore;
  let $sideBar, $$unsubscribe_sideBar;
  let $t, $$unsubscribe_t;
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => $currentOrgPath = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_sideBar = subscribe(sideBar, (value) => $sideBar = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { title = "" } = $$props;
  let { navClass = "" } = $$props;
  let { isCoursePage = false } = $$props;
  const toggleSidebar = () => {
    set_store_value(sideBar, $sideBar.hidden = !$sideBar.hidden, $sideBar);
  };
  function toggleDarkMode() {
    set_store_value(globalStore, $globalStore.isDark = !$globalStore.isDark, $globalStore);
    toggleBodyByMode($globalStore.isDark);
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.isCoursePage === void 0 && $$bindings.isCoursePage && isCoursePage !== void 0)
    $$bindings.isCoursePage(isCoursePage);
  $$result.css.add(css$8);
  coursesPath = $globalStore.isOrgSite ? "/lms/mylearning" : isCoursePage ? `${$currentOrgPath}/courses` : $currentOrgPath;
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_globalStore();
  $$unsubscribe_sideBar();
  $$unsubscribe_t();
  return `<nav class="${escape(navClass, true) + " flex w-full p-1 md:px-6 bg-primary-700 transition delay-150 duration-300 ease-in-out h-[48px] svelte-68n2h0"}"><ul class="flex w-full items-center svelte-68n2h0"><div class="flex items-center text-white"><li class="md:hidden">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      onClick: () => {
        toggleSidebar();
      }
    },
    {},
    {
      default: () => {
        return `${$sideBar.hidden ? `${validate_component(Menu, "Menu").$$render($$result, { size: 16, class: " text-white" }, {}, {})}` : `${validate_component(Close$1, "Close").$$render($$result, { size: 16, class: " text-white" }, {}, {})}`}`;
      }
    }
  )}</li> ${isCoursePage ? `<li class="hidden md:block">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      onClick: () => {
        toggleSidebar();
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Menu, "Menu").$$render($$result, { size: 16, class: " text-white" }, {}, {})}`;
      }
    }
  )}</li> <li class="hidden md:block">${validate_component(IconButton, "IconButton").$$render($$result, { onClick: () => goto(coursesPath) }, {}, {
    default: () => {
      return `${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, { size: 16, class: "text-white" }, {}, {})}`;
    }
  })}</li>` : ``} <a${add_attribute("href", coursesPath, 0)} title="${escape($t("navigation.goto"), true) + " " + escape(
    isCoursePage ? $t("navigation.courses") : $t("navigation.classroomio_home"),
    true
  )}" id="logo" class="text-lg line-clamp-1 svelte-68n2h0">${escape(isCoursePage ? title : "KinetsHub")}</a></div> <span class="flex-grow"></span> <li>${validate_component(Notification, "NotificationIcon").$$render($$result, { size: 20, class: "text-white mr-2" }, {}, {})}</li> <li>${validate_component(IconButton, "IconButton").$$render($$result, { size: "small", onClick: toggleDarkMode }, {}, {
    default: () => {
      return `${$globalStore.isDark ? `${validate_component(Sun, "Sun").$$render($$result, { size: 16, class: "text-white" }, {}, {})}` : `${validate_component(Moon, "Moon").$$render($$result, { size: 16, class: "text-white" }, {}, {})}`}`;
    }
  })}</li> <li></li></ul> </nav>`;
});
const ChartPie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM26,15H17V6.05A10,10,0,0,1,26,15ZM15.42,26A10,10,0,0,1,15,6.05v9a2,2,0,0,0,2,2h9A10,10,0,0,1,15.42,26Z"></path></svg>`;
});
const Checkmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>`;
});
const css$7 = {
  code: "ul.svelte-3q2jrw{padding:0}ul.svelte-3q2jrw::after{content:'';display:block;clear:both}a.svelte-3q2jrw{text-decoration:none;color:#fff;font-weight:700}@media only screen and (max-width: 1002px){nav.hide.svelte-3q2jrw{display:none}ul.svelte-3q2jrw{align-items:center}a.svelte-3q2jrw{padding:0 0.5em}}",
  map: null
};
function shortenName(name) {
  return name?.substring(0, 2)?.toUpperCase() || "";
}
const Lms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $sideBar, $$unsubscribe_sideBar;
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $currentOrg, $$unsubscribe_currentOrg;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_sideBar = subscribe(sideBar, (value) => $sideBar = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  let { navClass = "" } = $$props;
  const toggleSidebar = () => {
    set_store_value(sideBar, $sideBar.hidden = !$sideBar.hidden, $sideBar);
  };
  function toggleDarkMode() {
    set_store_value(globalStore, $globalStore.isDark = !$globalStore.isDark, $globalStore);
    toggleBodyByMode($globalStore.isDark);
  }
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  $$result.css.add(css$7);
  $$unsubscribe_globalStore();
  $$unsubscribe_sideBar();
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_currentOrg();
  return `<nav class="${escape(navClass, true) + " flex w-full p-2 md:px-6 bg-primary-700 h-[48px] svelte-3q2jrw"}"><ul class="flex w-full items-center svelte-3q2jrw"><li class="md:hidden">${validate_component(IconButton, "IconButton").$$render($$result, { onClick: toggleSidebar }, {}, {
    default: () => {
      return `${$sideBar.hidden ? `${validate_component(Menu, "Menu").$$render($$result, { size: 16, class: " text-white" }, {}, {})}` : `${validate_component(Close$1, "Close").$$render($$result, { size: 16, class: " text-white" }, {}, {})}`}`;
    }
  })}</li> <div class=""><a${add_attribute("href", $page.url.pathname, 0)}${add_attribute("title", $t("navigation.goto_home"), 0)} id="logo" class="text-lg flex items-center svelte-3q2jrw">${$currentOrg.avatar_url ? `${validate_component(Avatar$1, "Avatar").$$render(
    $$result,
    {
      src: $currentOrg.avatar_url,
      name: $currentOrg.name,
      shape: "rounded-md",
      width: "w-7",
      height: "h-7",
      className: "mr-2"
    },
    {},
    {}
  )}` : `${validate_component(Text, "TextChip").$$render(
    $$result,
    {
      value: shortenName($currentOrg.name),
      className: "bg-primary-200 font-bold mr-2 dark:text-black"
    },
    {},
    {}
  )}`} <span class="line-clamp-1">${escape($currentOrg.name)}</span></a></div> <span class="flex-grow"></span> <li>${validate_component(Notification, "NotificationIcon").$$render($$result, { size: 20, class: "text-white mr-2" }, {}, {})}</li> <li>${validate_component(IconButton, "IconButton").$$render($$result, { size: "small", onClick: toggleDarkMode }, {}, {
    default: () => {
      return `${$globalStore.isDark ? `${validate_component(Sun, "SunIcon").$$render($$result, { size: 16, class: "text-white" }, {}, {})}` : `${validate_component(Moon, "MoonIcon").$$render($$result, { size: 16, class: "text-white" }, {}, {})}`}`;
    }
  })}</li> <li></li></ul> </nav>`;
});
function capitalizeFirstLetter(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}
const css$6 = {
  code: ".root.svelte-146onyu{right:5%;left:auto;top:24px;transform:translateX(-5%);min-width:288px;z-index:51}",
  map: null
};
const Snackbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $snackbarStore, $$unsubscribe_snackbarStore;
  let $t, $$unsubscribe_t;
  $$unsubscribe_snackbarStore = subscribe(snackbarStore, (value) => $snackbarStore = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let timeoutId;
  let kind = "info";
  function handleClose() {
    if (typeof $snackbarStore.handleClose === "function") {
      $snackbarStore.handleClose();
    }
    snackbarStore.update((_s) => ({ ..._s, ...snackbarStoreInitialState }));
    clearTimeout(timeoutId);
    timeoutId = void 0;
  }
  function handleOpen(open) {
    if (!open) {
      return;
    }
    const { autoHideDuration } = $snackbarStore;
    if (typeof autoHideDuration === "number" && !timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleClose, autoHideDuration);
    }
  }
  $$result.css.add(css$6);
  {
    handleOpen($snackbarStore.open);
  }
  kind = $snackbarStore.severity === SNACKBAR_SEVERITY.SUCCESS ? "success" : $snackbarStore.severity === SNACKBAR_SEVERITY.ERROR ? "error" : "info";
  $$unsubscribe_snackbarStore();
  $$unsubscribe_t();
  return `${$snackbarStore.open ? `<div class="root absolute svelte-146onyu">${validate_component(InlineNotification$1, "InlineNotification").$$render(
    $$result,
    {
      kind,
      title: capitalizeFirstLetter(kind || ""),
      subtitle: $t($snackbarStore.message)
    },
    {},
    {}
  )}</div>` : ``}`;
});
const css$5 = {
  code: ".root.svelte-muzyqa{height:calc(100vh - 45px)}",
  map: null
};
const Restricted = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function handleClick() {
    return goto("https://KinetsHub.com");
  }
  $$result.css.add(css$5);
  return `<div class="root flex items-center justify-center flex-col w-screen svelte-muzyqa">${validate_component(Locked, "Locked").$$render($$result, { size: 32 }, {}, {})} <div class="flex flex-col items-center justify-center dark:text-white gap-3 w-4/5 lg:w-2/5"><p class="text-4xl dark:text-white font-semibold mt-5" data-svelte-h="svelte-63gb6m">Restricted Page</p> <p class="text-gray-700 text-lg text-center dark:text-white mb-5" data-svelte-h="svelte-11l2ogu">This organization is restricted. In the mean time, you can checkout our features.</p> ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      variant: VARIANTS.CONTAINED_DARK,
      label: "Go to Home",
      className: "text-lg",
      onClick: handleClick
    },
    {},
    {}
  )}</div> </div>`;
});
const css$4 = {
  code: ".body.svelte-1f57ryl.svelte-1f57ryl{overflow:auto;height:80%}.body.svelte-1f57ryl button.svelte-1f57ryl{display:none}.body.svelte-1f57ryl div:hover button.svelte-1f57ryl,.body.svelte-1f57ryl button.active.svelte-1f57ryl{display:block}.footer.svelte-1f57ryl.svelte-1f57ryl{position:absolute;bottom:0px;width:100%}",
  map: null
};
const QandA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleClose } = $$props;
  let bodyRef;
  let question;
  let questions = [
    {
      id: 1,
      name: "Evgeniy",
      question: "I'am looking at this and it looks great",
      vote: 1,
      answered: false
    },
    {
      id: 2,
      name: "Sergey Semko",
      question: "Thanks for the feedback, what do you think about my website. https://rotimibest.com",
      vote: 4,
      answered: false
    },
    {
      id: 3,
      name: "Vitalii Marushko",
      question: "Всем привет",
      vote: 20,
      answered: false
    },
    {
      id: 4,
      name: "Natasha",
      question: "Привет Виталий",
      vote: 0,
      answered: false
    }
  ];
  function handleSend() {
    if (!question) {
      return;
    }
    questions = [
      ...questions,
      {
        id: questions.length,
        name: "You",
        question,
        vote: 0,
        answered: false
      }
    ];
    question = null;
    setTimeout(
      () => {
        bodyRef.scrollTo({ top: bodyRef.scrollHeight });
      },
      100
    );
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }
  if ($$props.handleClose === void 0 && $$bindings.handleClose && handleClose !== void 0)
    $$bindings.handleClose(handleClose);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(PageNav, "PageNav").$$render(
      $$result,
      {
        title: "Q/A",
        overidableStyle: "padding: 0 10px"
      },
      {},
      {
        widget: () => {
          return `<div slot="widget">${validate_component(Close, "CloseButton").$$render($$result, { onClick: handleClose }, {}, {})}</div>`;
        }
      }
    )} <div class="body svelte-1f57ryl"${add_attribute("this", bodyRef, 0)}>${each(questions, (question2) => {
      return `<div class="flex items-start ml-2 mb-2 mt-2">${validate_component(Vote, "Vote").$$render(
        $$result,
        { value: question2.vote },
        {
          value: ($$value) => {
            question2.vote = $$value;
            $$settled = false;
          }
        },
        {}
      )} <div class="ml-2 flex-grow"><p class="dark:text-white text-sm font-bold">${escape(question2.name)}</p> <article class="prose prose-sm sm:prose">${escape(question2.question)} </article></div> <button class="${escape(null_to_empty(`${question2.answered && "active"}`), true) + " svelte-1f57ryl"}">${validate_component(CheckmarkOutline, "CheckmarkOutline").$$render(
        $$result,
        {
          size: 20,
          class: "carbon-icon dark:text-white"
        },
        {},
        {}
      )}</button> </div>`;
    })}</div> <div class="footer svelte-1f57ryl">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: "Say something",
        onKeyDown: handleKeyDown,
        value: question
      },
      {
        value: ($$value) => {
          question = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$3 = {
  code: ".footer.svelte-1fjaaec{position:absolute;bottom:0px;width:100%}",
  map: null
};
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lesson, $$unsubscribe_lesson;
  let $group, $$unsubscribe_group;
  let $t, $$unsubscribe_t;
  let $profile, $$unsubscribe_profile;
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  let { handleClose = () => {
  } } = $$props;
  const supabase2 = getSupabase();
  let comment = "";
  let bodyRef;
  let lessonCommentChannel;
  let comments = [];
  let groupmember;
  let isSaving = false;
  let isFetched = false;
  async function handleSend() {
    console.log("groupmember", groupmember);
    if (!comment || !groupmember) {
      return;
    }
    comments = [
      ...comments,
      {
        comment,
        name: $t("course.navItem.lessons.comments.you"),
        avatar: $profile.avatar_url,
        commentAt: /* @__PURE__ */ new Date()
      }
    ];
    set_store_value(lesson, $lesson.totalComments = comments.length, $lesson);
    scrollToBottom();
    isSaving = true;
    supabase2.from("lesson_comment").insert({
      lesson_id: $lesson.id,
      groupmember_id: groupmember.id,
      comment
    }).then(() => {
      isSaving = false;
      comment = "";
    });
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }
  function scrollToBottom() {
    setTimeout(
      () => {
        bodyRef.scrollTo({ top: bodyRef.scrollHeight });
      },
      100
    );
  }
  async function fetchComments(people, lessonId) {
    groupmember = people.find((person) => person.profile_id === $profile.id);
    if (!groupmember || !lessonId)
      return;
    const { data, error } = await supabase2.from("lesson_comment").select(`
          groupmember_id,
          created_at,
          comment,
          groupmember:groupmember_id(
            id,
            profile:profile_id(fullname, avatar_url)
          )
        `).match({ lesson_id: lessonId }).returns();
    if (error || !data) {
      console.error("error");
      return;
    }
    console.log("fetch comments", data);
    comments = data.map((lessonComment) => {
      return {
        comment: lessonComment.comment,
        avatar: lessonComment.groupmember.profile.avatar_url,
        commentAt: lessonComment.created_at,
        name: lessonComment.groupmember.id === groupmember?.id ? $t("course.navItem.lessons.comments.you") : lessonComment.groupmember.profile.fullname
      };
    });
    isFetched = true;
    scrollToBottom();
  }
  onDestroy(() => {
    supabase2.removeChannel(lessonCommentChannel);
  });
  if ($$props.handleClose === void 0 && $$bindings.handleClose && handleClose !== void 0)
    $$bindings.handleClose(handleClose);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    !isFetched && fetchComments($group.people, $lesson.id);
    $$rendered = `${validate_component(PageNav, "PageNav").$$render(
      $$result,
      {
        title: $t("course.navItem.lessons.comments.title"),
        overidableStyle: "padding: 0 10px"
      },
      {},
      {
        widget: () => {
          return `<div slot="widget">${validate_component(Close, "CloseButton").$$render($$result, { onClick: handleClose }, {}, {})}</div>`;
        }
      }
    )} <div class="overflow-y-auto h-[87%] pb-10 px-2 md:min-w-[350px] w-full"${add_attribute("this", bodyRef, 0)}>${each(comments, (comment2) => {
      return `<div class="pb-2 mt-2"><div class="flex items-start"><img alt="Placeholder" class="block rounded-full" width="24" height="20"${add_attribute("src", comment2.avatar, 0)}> <div class="ml-2"><p class="dark:text-white text-sm font-bold">${escape(comment2.name)}</p> <p class="dark:text-white text-xs font-normal text-gray-800">${escape(calDateDiff(comment2.commentAt))}</p> </div></div> <article class="prose prose-sm sm:prose ml-8 max-w-[300px] dark:text-white">${escape(comment2.comment)}</article> </div>`;
    })}</div> <div class="footer svelte-1fjaaec">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        placeholder: $t("course.navItem.lessons.comments.placeholder"),
        onKeyDown: handleKeyDown,
        isDisabled: isSaving,
        value: comment
      },
      {
        value: ($$value) => {
          comment = $$value;
          $$settled = false;
        }
      },
      {}
    )} </div>`;
  } while (!$$settled);
  $$unsubscribe_lesson();
  $$unsubscribe_group();
  $$unsubscribe_t();
  $$unsubscribe_profile();
  return $$rendered;
});
const Notes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleClose } = $$props;
  if ($$props.handleClose === void 0 && $$bindings.handleClose && handleClose !== void 0)
    $$bindings.handleClose(handleClose);
  return `${validate_component(PageNav, "PageNav").$$render(
    $$result,
    {
      title: "Note",
      overidableStyle: "padding: 0 10px"
    },
    {},
    {
      widget: () => {
        return `<div slot="widget">${validate_component(Close, "CloseButton").$$render($$result, { onClick: handleClose }, {}, {})}</div>`;
      }
    }
  )}`;
});
const CreatePollForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $profile, $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  let $course, $$unsubscribe_course;
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { title = "Poll" } = $$props;
  let { isSaving = false } = $$props;
  let { onSubmit = (p) => {
  } } = $$props;
  let { onCancel = () => {
  } } = $$props;
  let poll = {
    id: /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime().toString(),
    courseId: $course.id || "",
    question: "",
    expiration: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toDateString(),
    isPublic: false,
    status: $t("course.navItem.lessons.poll.draft"),
    author: {
      id: $profile.id || "",
      username: $profile.username || "",
      fullname: $profile.fullname || "",
      avatarUrl: $profile.avatar_url || ""
    },
    options: [{ id: "", label: "", selectedBy: [] }]
  };
  let isCreateDisabled = false;
  function handleAddOptions() {
    poll = {
      ...poll,
      options: [...poll.options, { id: "", label: "", selectedBy: [] }]
    };
  }
  function handleRemoveOptions(index) {
    return () => {
      poll.options = poll.options.filter((_, i) => i !== index);
    };
  }
  function finishPoll() {
    onSubmit(poll);
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.isSaving === void 0 && $$bindings.isSaving && isSaving !== void 0)
    $$bindings.isSaving(isSaving);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  if ($$props.onCancel === void 0 && $$bindings.onCancel && onCancel !== void 0)
    $$bindings.onCancel(onCancel);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isCreateDisabled = poll.question === "" || poll.options.length < 2;
    $$rendered = `<div class="border rounded-md"><div class="border-b-2 p-4 text-center">${escape(title)}</div> <div class="p-3">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: $t("course.navItem.lessons.poll.question"),
        className: "w-full mb-3",
        placeholder: $t("course.navItem.lessons.poll.poll_question"),
        isRequired: true,
        value: poll.question
      },
      {
        value: ($$value) => {
          poll.question = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(DateTime, "DateTime").$$render(
      $$result,
      {
        label: $t("course.navItem.lessons.poll.expiration"),
        className: "w-full mb-3",
        isRequired: true,
        value: poll.expiration
      },
      {
        value: ($$value) => {
          poll.expiration = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div><p class="dark:text-white p-0 m-0 mb-1 text-md flex items-center gap-2">${escape($t("course.navItem.lessons.poll.options"))} ${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        onClick: handleAddOptions,
        contained: true,
        size: "small"
      },
      {},
      {
        default: () => {
          return `${validate_component(Add, "Add").$$render($$result, { size: 16 }, {}, {})}`;
        }
      }
    )}</p></div> ${each(poll.options, (option, index) => {
      return `<div class="flex items-center gap-2 mb-3">${validate_component(TextField, "TextField").$$render(
        $$result,
        {
          label: "",
          className: "w-full",
          placeholder: $t("course.navItem.lessons.poll.option_label"),
          isRequired: true,
          value: option.label
        },
        {
          value: ($$value) => {
            option.label = $$value;
            $$settled = false;
          }
        },
        {}
      )} ${validate_component(IconButton, "IconButton").$$render(
        $$result,
        {
          onClick: handleRemoveOptions(index),
          contained: true,
          size: "small"
        },
        {},
        {
          default: () => {
            return `${validate_component(TrashCan, "TrashCan").$$render($$result, { size: 16 }, {}, {})} `;
          }
        }
      )} </div>`;
    })}</div> <div class="w-full flex justify-center gap-2 mb-3">${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.lessons.poll.create_poll"),
        onClick: finishPoll,
        isLoading: isSaving,
        isDisabled: isCreateDisabled
      },
      {},
      {}
    )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
      $$result,
      {
        label: $t("course.navItem.lessons.poll.cancel"),
        variant: VARIANTS.OUTLINED,
        onClick: onCancel
      },
      {},
      {}
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_profile();
  $$unsubscribe_t();
  $$unsubscribe_course();
  return $$rendered;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="dark:text-white p-0 m-0 mb-1 uppercase text-sm font-bold text-gray-600">${slots.default ? slots.default({}) : ``}</p>`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { src } = $$props;
  let { className } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<img${add_attribute("alt", name, 0)}${add_attribute("src", src, 0)} class="${"w-10 max-h-10 rounded-full bg-primary-100 " + escape(className, true)}">`;
});
const polls = writable([]);
const supabase = getSupabase();
const updatePollStatus = async (pollId, status) => {
  const { error } = await supabase.from("apps_poll").update({ status }).match({ id: pollId });
  if (error) {
    console.log(error);
    snackbar.error("snackbar.poll.error.updating_poll");
    return;
  }
};
const togglePollSubmission = async (pollId, pollOptionId, groupmemberId, add) => {
  if (add) {
    const { error } = await supabase.from("apps_poll_submission").insert({
      poll_id: pollId,
      poll_option_id: pollOptionId,
      selected_by_id: groupmemberId
    });
    if (error) {
      console.log(error);
      snackbar.error("snackbar.poll.error.submitting_poll");
      return;
    }
  } else {
    const { error } = await supabase.from("apps_poll_submission").delete().match({
      poll_id: pollId,
      poll_option_id: pollOptionId,
      selected_by_id: groupmemberId
    });
    if (error) {
      console.log(error);
      snackbar.error("snackbar.poll.error.submitting_poll");
      return;
    }
  }
};
function isOptionSelectedByCurrentUser(option, groupmemberId) {
  return option.selectedBy.some((gmember) => gmember.id === groupmemberId);
}
function handleVote(pollId, groupmemberId, author) {
  return (optionId) => {
    polls.update((_polls) => {
      return [
        ..._polls.map((poll) => {
          if (poll.expiration && new Date(poll.expiration) < /* @__PURE__ */ new Date())
            return poll;
          if (poll.id === pollId) {
            if (poll.status !== "published") {
              snackbar.info("snackbar.poll.info.not_published");
              return poll;
            }
            if (poll.options.some((option) => isOptionSelectedByCurrentUser(option, groupmemberId))) {
              snackbar.info("snackbar.poll.info.vote_once");
              return poll;
            }
            poll.options = poll.options.map((option) => {
              const isSelected = isOptionSelectedByCurrentUser(option, groupmemberId);
              if (option.id === optionId && !isSelected) {
                option.selectedBy = [...option.selectedBy, author];
                togglePollSubmission(pollId, optionId, groupmemberId, true);
              }
              return option;
            });
          }
          return poll;
        })
      ];
    });
  };
}
const css$2 = {
  code: ".progress.svelte-160aa9b{transition:width 0.5s linear}",
  map: null
};
function getTotalVotes(options) {
  return options.reduce((acc, cur) => acc + cur.selectedBy.length, 0);
}
function calculatePercent(options, currentOption) {
  const totalVoteOfAllOptions = getTotalVotes(options);
  const totalVotesOfCurrentOption = currentOption.selectedBy.length;
  return Math.round(totalVotesOfCurrentOption / totalVoteOfAllOptions * 100) || 0;
}
function didUserSelect(option, userId) {
  return option.selectedBy.find((user2) => user2.id === userId);
}
const Poll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let { poll } = $$props;
  let { onSelect } = $$props;
  let { handlePollDelete = () => {
  } } = $$props;
  let { currentUserId } = $$props;
  let viewResult = false;
  let isAuthor = false;
  let totalVotes = 0;
  let isThereAnyVote = false;
  let prevStatus = poll.status;
  function onStatusChange(status) {
    if (status === prevStatus || !status)
      return;
    updatePollStatus(poll.id, status);
    prevStatus = status;
  }
  if ($$props.poll === void 0 && $$bindings.poll && poll !== void 0)
    $$bindings.poll(poll);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0)
    $$bindings.onSelect(onSelect);
  if ($$props.handlePollDelete === void 0 && $$bindings.handlePollDelete && handlePollDelete !== void 0)
    $$bindings.handlePollDelete(handlePollDelete);
  if ($$props.currentUserId === void 0 && $$bindings.currentUserId && currentUserId !== void 0)
    $$bindings.currentUserId(currentUserId);
  $$result.css.add(css$2);
  {
    onStatusChange(poll.status);
  }
  isAuthor = currentUserId === poll.author.id;
  totalVotes = getTotalVotes(poll.options);
  {
    {
      isThereAnyVote = poll?.options?.some((option) => option.selectedBy.length) || false;
    }
  }
  $$unsubscribe_t();
  return `<div class="p-4 flex-wrap bg-white dark:bg-black border-2 rounded-md mb-3 w-full">${`<div class="flex flex-wrap gap-2 mb-3 justify-between"><div><h3 class="dark:text-white font-bold">${escape(poll.question)}</h3> <p class="dark:text-white text-sm italic">${escape($t("course.navItem.lessons.poll.created_by"))} <span class="text-primary-500">@${escape(poll.author.username)}</span></p></div> ${isAuthor ? `<div class="flex mb-3 justify-end items-center"><label class="mr-2 font-bold" for="user-select">${escape($t("course.navItem.lessons.poll.status"))}:</label> <select name="users" id="user-select" class="dark:text-white dark:bg-black"><option value="draft">${escape($t("course.navItem.lessons.poll.draft"))}</option><option value="published">${escape($t("course.navItem.lessons.poll.publish"))}</option></select></div>` : ``}</div> ${viewResult ? `<div class="flex items-center justify-between"><div class="mr-5">${validate_component(Label, "Label").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($t("course.navItem.lessons.poll.expiration"))}`;
    }
  })} <p class="dark:text-white text-sm text-gray-600 mb-4">${escape(poll.expiration || $t("dashboard.today"))}</p></div> <div class="flex flex-col items-center">${validate_component(Label, "Label").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($t("course.navItem.lessons.poll.total_voted"))}`;
    }
  })} <p class="dark:text-white text-sm text-gray-600 mb-4">${escape(totalVotes)}</p></div></div> ${validate_component(Label, "Label").$$render($$result, {}, {}, {
    default: () => {
      return `${escape($t("course.navItem.lessons.poll.responses"))}`;
    }
  })} ${each(poll.options, (option) => {
    return `<div class="border-b p-5"><p class="dark:text-white">${escape(option.label)}</p> <div class="flex items-center"><div class="w-4/5 h-2 bg-gray-200 relative"><span class="absolute top-0 left-0 bg-primary-700 h-full" style="${"width: " + escape(calculatePercent(poll.options, option), true) + "%;"}"></span></div> ${option.selectedBy.length ? `<button class="text-xl px-3 ml-5" data-svelte-h="svelte-1dp1ozd">&gt;
              </button>` : ``}</div> <div class="flex items-center">${each(option.selectedBy.slice(0, 3), (user2) => {
      return `${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          src: user2.avatarUrl,
          name: user2.username,
          className: "mr-2"
        },
        {},
        {}
      )}`;
    })}</div> </div>`;
  })}` : `${each(poll.options, (option, index) => {
    return `<button class="${"bg-white dark:bg-black rounded-md border-2 border-gray-100 dark:border-neutral-600 h-[50px] " + escape(didUserSelect(option, currentUserId) && "focus:border-primary-700 border-primary-700", true) + " text-black dark:text-white p-2 w-full mb-3 text-left relative svelte-160aa9b"}">${isThereAnyVote ? `<span class="${"progress absolute top-0 text-black left-0 " + escape(
      didUserSelect(option, currentUserId) ? "bg-primary-700" : "bg-gray-300",
      true
    ) + " h-full bg-opacity-25 svelte-160aa9b"}" style="${"width: " + escape(calculatePercent(poll.options, option), true) + "%;"}"></span>` : ``} <p class="${"absolute top-3 " + escape(
      didUserSelect(option, currentUserId) ? "text-white" : "dark:text-white text-black",
      true
    ) + " left-2"}">${escape(option.label)}
            (${escape(calculatePercent(poll.options, option))}%)</p> </button>`;
  })} <div class="flex items-center"><p class="dark:text-white text-sm text-gray-600">${escape($t("course.navItem.lessons.poll.expires"))}: ${escape(poll.expiration || $t("dashboard.today"))}</p> <span class="mx-2" data-svelte-h="svelte-1hxruir">|</span> <p class="dark:text-white text-sm text-gray-600">${escape($t("course.navItem.lessons.poll.voted"))}: ${escape(totalVotes)}</p></div>`} ${isAuthor ? `<div class="w-full flex items-center mt-3">${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: viewResult ? $t("course.navItem.lessons.poll.back") : $t("course.navItem.lessons.poll.result"),
      onClick: () => viewResult = !viewResult
    },
    {},
    {}
  )} ${validate_component(PrimaryButton, "PrimaryButton").$$render(
    $$result,
    {
      label: $t("course.navItem.lessons.poll.delete"),
      variant: VARIANTS.TEXT_DANGER,
      onClick: handlePollDelete
    },
    {},
    {}
  )}</div>` : ``}`} </div>`;
});
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onCreate } = $$props;
  let { tabs = [] } = $$props;
  let { selectedTab } = $$props;
  if ($$props.onCreate === void 0 && $$bindings.onCreate && onCreate !== void 0)
    $$bindings.onCreate(onCreate);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.selectedTab === void 0 && $$bindings.selectedTab && selectedTab !== void 0)
    $$bindings.selectedTab(selectedTab);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="mb-3 flex items-center justify-between"><div>${each(tabs, (tab) => {
      return `<button class="${"mr-3 pb-2 border-t-0 border-l-0 border-r-0 " + escape(
        selectedTab === tab.value ? "border-b-4 border-primary-600 focus:border-primary-600" : "border-b-0",
        true
      )}">${escape(tab.label)} ${validate_component(Chip, "Chip").$$render(
        $$result,
        { value: tab.number },
        {
          value: ($$value) => {
            tab.number = $$value;
            $$settled = false;
          }
        },
        {}
      )} </button>`;
    })}</div> ${validate_component(RoleBasedSecurity, "RoleBaseSecurity").$$render($$result, { allowedRoles: [1, 2] }, {}, {
      default: () => {
        return `${validate_component(IconButton, "IconButton").$$render(
          $$result,
          {
            onClick: onCreate,
            contained: true,
            size: "large"
          },
          {},
          {
            default: () => {
              return `${validate_component(Add, "Add").$$render($$result, { size: 16 }, {}, {})}`;
            }
          }
        )}`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const Poll_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $polls, $$unsubscribe_polls;
  let $profile, $$unsubscribe_profile;
  let $group, $$unsubscribe_group;
  let $$unsubscribe_globalStore;
  let $course, $$unsubscribe_course;
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_polls = subscribe(polls, (value) => $polls = value);
  $$unsubscribe_profile = subscribe(profile, (value) => $profile = value);
  $$unsubscribe_group = subscribe(group, (value) => $group = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { handleClose = () => {
  } } = $$props;
  const supabase2 = getSupabase();
  let selectedTab = 0;
  let currentGroupMember;
  let openCreatePollForm = false;
  let isCreating = false;
  let author = {
    id: "",
    username: "",
    fullname: "",
    avatarUrl: ""
  };
  let pollSubmissionsChannel;
  let tabs = [];
  let activePolls = [];
  let expiredPolls = [];
  function setCoursePolls() {
    set_store_value(course, $course.polls = $polls.map((p) => ({ status: p.status })), $course);
  }
  async function createPoll(poll) {
    if (!currentGroupMember || !$course.id)
      return;
    const { data, error } = await supabase2.from("apps_poll").insert({
      question: poll.question,
      authorId: currentGroupMember.id,
      status: poll.status,
      expiration: poll.expiration,
      courseId: $course.id
    }).select("id");
    if (error || !data) {
      console.log(error);
      snackbar.error("snackbar.poll.error.creating_poll");
      return;
    }
    const pollId = data[0].id;
    const appsPollOptions = poll.options.map((option) => ({ poll_id: pollId, label: option.label }));
    const { data: appsPollOptionsData, error: appsPollOptionsError } = await supabase2.from("apps_poll_option").insert(appsPollOptions).select();
    if (appsPollOptionsError || !appsPollOptionsData) {
      console.log({ appsPollOptionsError });
      snackbar.error("snackbar.poll.error.creating_poll");
      return;
    }
    set_store_value(
      polls,
      $polls = [
        {
          ...poll,
          id: pollId,
          courseId: $course.id,
          author,
          options: appsPollOptionsData.map((option) => ({ ...option, id: option.id, selectedBy: [] }))
        },
        ...$polls
      ],
      $polls
    );
    setCoursePolls();
  }
  async function handlePollCreate(poll) {
    if (!currentGroupMember)
      return;
    isCreating = true;
    await createPoll(poll);
    isCreating = false;
    openCreatePollForm = false;
  }
  function handlePollDelete(pollId) {
    return async () => {
      await supabase2.from("apps_poll_submission").delete().match({ poll_id: pollId });
      await supabase2.from("apps_poll_option").delete().match({ poll_id: pollId });
      await supabase2.from("apps_poll").delete().match({ id: pollId });
      set_store_value(polls, $polls = [...$polls.filter((p, i) => p.id !== pollId)], $polls);
      setCoursePolls();
    };
  }
  onDestroy(() => {
    supabase2.removeChannel(pollSubmissionsChannel);
  });
  if ($$props.handleClose === void 0 && $$bindings.handleClose && handleClose !== void 0)
    $$bindings.handleClose(handleClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    currentGroupMember = $group.people.find((person) => person.profile_id === $profile.id);
    author = {
      id: currentGroupMember?.id || "",
      username: $profile.username || "",
      fullname: $profile.fullname || "",
      avatarUrl: $profile.avatar_url || ""
    };
    {
      {
        activePolls = $polls.filter((poll) => new Date(poll.expiration).getTime() >= ( new Date()).getTime());
        expiredPolls = $polls.filter((poll) => new Date(poll.expiration).getTime() <= ( new Date()).getTime());
        tabs = [
          {
            label: $t("course.navItem.lessons.polls.active_polls"),
            value: 0,
            number: activePolls.length
          },
          {
            label: $t("course.navItem.lessons.polls.expired_polls"),
            value: 1,
            number: expiredPolls.length
          }
        ];
      }
    }
    $$rendered = `${validate_component(PageNav, "PageNav").$$render(
      $$result,
      {
        title: $t("course.navItem.lessons.polls.title"),
        overidableStyle: "padding: 0 10px",
        paddingClass: "w-full"
      },
      {},
      {
        widget: () => {
          return `<div slot="widget">${validate_component(Close, "CloseButton").$$render($$result, { onClick: handleClose }, {}, {})}</div>`;
        }
      }
    )} <div class="p-2 overlow-y-auto md:max-w-[350px] md:min-w-[340px] w-full">${openCreatePollForm ? `${validate_component(CreatePollForm, "CreatePollForm").$$render(
      $$result,
      {
        onSubmit: handlePollCreate,
        onCancel: () => openCreatePollForm = !openCreatePollForm,
        isSaving: isCreating
      },
      {
        isSaving: ($$value) => {
          isCreating = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${currentGroupMember ? `<div>${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        tabs,
        onCreate: () => openCreatePollForm = !openCreatePollForm,
        selectedTab
      },
      {
        selectedTab: ($$value) => {
          selectedTab = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${`${(selectedTab === tabs[0].value ? activePolls : expiredPolls).length ? each(
      selectedTab === tabs[0].value ? activePolls : expiredPolls,
      (poll) => {
        return `${validate_component(Poll, "Poll").$$render(
          $$result,
          {
            onSelect: handleVote(poll.id, currentGroupMember?.id || "", author),
            handlePollDelete: handlePollDelete(poll.id),
            poll,
            currentUserId: currentGroupMember.id
          },
          {
            poll: ($$value) => {
              poll = $$value;
              $$settled = false;
            },
            currentUserId: ($$value) => {
              currentGroupMember.id = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    ) : `<div class="bg-gray-100 dark:bg-neutral-800 border rounded-md h-60 flex items-center justify-center"><h2 class="text-xl font-bold">${escape($t("course.navItem.lessons.polls.no_polls"))}</h2> </div>`}`}</div>` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_t();
  $$unsubscribe_polls();
  $$unsubscribe_profile();
  $$unsubscribe_group();
  $$unsubscribe_globalStore();
  $$unsubscribe_course();
  return $$rendered;
});
const APPS_CONSTANTS = {
  APPS: {
    QANDA: "QANDA",
    NOTES: "NOTES",
    COMMENTS: "COMMENTS",
    POLL: "POLL"
  }
};
const css$1 = {
  code: ".root.svelte-1i4rjfx.svelte-1i4rjfx{height:calc(100vh - 48px);position:sticky;top:0;border-left:1px solid var(--border-color);display:flex;flex-direction:row;z-index:1}.root.svelte-1i4rjfx .apps.svelte-1i4rjfx{padding-top:20px;display:flex;flex-direction:column;align-items:center;width:60px;border-right:1px solid var(--border-color);height:100%}.root.svelte-1i4rjfx .app.svelte-1i4rjfx{width:100%;position:relative;overflow:auto}@media screen and (min-width: 768px) and (max-width: 1023px){.app.svelte-1i4rjfx.svelte-1i4rjfx{width:50vw;position:relative;overflow:auto}}@media screen and (max-width: 767px){.app.svelte-1i4rjfx.svelte-1i4rjfx{width:100vw;min-width:calc(100vw - 60px);position:relative;overflow:auto}}@media screen and (max-width: 1023px){.root.svelte-1i4rjfx.svelte-1i4rjfx{position:absolute;height:calc(100vh - var(--top-padding));top:var(--top-padding);right:0;z-index:999}.open.svelte-1i4rjfx.svelte-1i4rjfx{position:absolute;transform:translateX(0);transition:all 0.2s ease-in-out}.close.svelte-1i4rjfx.svelte-1i4rjfx{position:absolute;transform:translateX(100%);display:none;transition:all 0.2s ease-in-out}}@media screen and (min-width: 1024px){.root.svelte-1i4rjfx.svelte-1i4rjfx{height:calc(100vh - 48px);position:sticky;top:0;border-left:1px solid var(--border-color);display:flex;flex-direction:row;z-index:1}.root.svelte-1i4rjfx .apps.svelte-1i4rjfx{padding-top:20px;display:flex;flex-direction:column;align-items:center;width:60px;border-right:1px solid var(--border-color);height:100%}.root.svelte-1i4rjfx .app.svelte-1i4rjfx{width:100%;position:relative;overflow:auto}}",
  map: null
};
function getAppClass(appName, selected) {
  return `transition duration-500 delay-150 ease-in-out border-t-0 border-b-0 border-r-0 ${appName === selected ? "border-l-4 border-primary-600 focus:border-primary-600" : "border-l-0"}`;
}
const Apps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $globalStore, $$unsubscribe_globalStore;
  let $apps, $$unsubscribe_apps;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $t, $$unsubscribe_t;
  let $lesson, $$unsubscribe_lesson;
  let $course, $$unsubscribe_course;
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_apps = subscribe(apps, (value) => $apps = value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  $$unsubscribe_lesson = subscribe(lesson, (value) => $lesson = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let appBarRef;
  let appContentRef;
  let topPadding = $globalStore.isStudent ? "48px" : "109px";
  function handleClose() {
    set_store_value(apps, $apps.selectedApp = void 0, $apps);
    if ($globalStore.isStudent) {
      set_store_value(apps, $apps.open = false, $apps);
    }
  }
  function handleAppClick(appName) {
    if (appName === $apps.selectedApp) {
      handleClose();
    } else {
      set_store_value(apps, $apps.selectedApp = appName, $apps);
    }
    set_store_value(apps, $apps.dropdown = !$apps.dropdown, $apps);
  }
  function updateTopPadding(isStudent) {
    topPadding = isStudent ? "48px" : "109px";
  }
  $$result.css.add(css$1);
  {
    updateTopPadding($globalStore.isStudent);
  }
  $$unsubscribe_globalStore();
  $$unsubscribe_apps();
  $$unsubscribe_currentOrg();
  $$unsubscribe_t();
  $$unsubscribe_lesson();
  $$unsubscribe_course();
  return `<div${add_attribute("style", `--top-padding:${topPadding}`, 0)} class="${escape(null_to_empty(`${$apps.open ? "open " : "close"} root bg-white dark:bg-black`), true) + " svelte-1i4rjfx"}"${add_attribute("this", appBarRef, 0)}><div class="apps svelte-1i4rjfx"><div class="lg:hidden mb-2">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      buttonClassName: "lg:hidden",
      toolTipProps: { title: "Settings", hotkeys: [] },
      onClick: handleAppClick
    },
    {},
    {
      default: () => {
        return `${validate_component(Settings, "Settings").$$render(
          $$result,
          {
            size: 24,
            class: "carbon-icon dark:text-white lg:hidden"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> <div class="${"mb-2 relative " + escape(getAppClass(APPS_CONSTANTS.APPS.COMMENTS, $apps.selectedApp), true) + " svelte-1i4rjfx"}">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      toolTipProps: {
        title: `${$globalStore.isOrgSite && !$currentOrg.customization.apps.comments ? $t("course.navItem.lessons.disabled") : $t("course.navItem.lessons.comments.title")}`,
        hotkeys: ["Ctrl/Command", "1"]
      },
      value: APPS_CONSTANTS.APPS.COMMENTS,
      onClick: handleAppClick,
      buttonClassName: "relative",
      disabled: $globalStore.isOrgSite && !$currentOrg.customization.apps.comments
    },
    {},
    {
      default: () => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            value: $lesson.totalComments,
            className: "absolute -top-1 right-0 bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-white"
          },
          {},
          {}
        )} ${validate_component(SendAlt, "SendAlt").$$render(
          $$result,
          {
            size: 24,
            class: "carbon-icon dark:text-white"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> <div class="${"mb-2 " + escape(getAppClass(APPS_CONSTANTS.APPS.POLL, $apps.selectedApp), true) + " svelte-1i4rjfx"}">${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      toolTipProps: {
        title: `${$globalStore.isOrgSite && !$currentOrg.customization.apps.poll ? $t("course.navItem.lessons.disabled") : $t("course.navItem.lessons.polls.title")} `,
        hotkeys: ["Ctrl/Command", "2"]
      },
      value: APPS_CONSTANTS.APPS.POLL,
      onClick: handleAppClick,
      disabled: $globalStore.isOrgSite && !$currentOrg.customization.apps.poll
    },
    {},
    {
      default: () => {
        return `${validate_component(Chip, "Chip").$$render(
          $$result,
          {
            value: $course.polls.length,
            className: "absolute -top-1 right-0 bg-gray-100 text-gray-600 dark:bg-neutral-700 dark:text-white"
          },
          {},
          {}
        )} ${validate_component(ChartPie, "ChartPie").$$render(
          $$result,
          {
            size: 24,
            class: "carbon-icon dark:text-white"
          },
          {},
          {}
        )}`;
      }
    }
  )}</div> </div> ${!!$apps.selectedApp ? `<div class="app max-w-[350px] transition ease-in-out delay-150 duration-100 svelte-1i4rjfx"${add_attribute("this", appContentRef, 0)}><div class="h-full w-full">${$apps.selectedApp === APPS_CONSTANTS.APPS.QANDA ? `${validate_component(QandA, "QandA").$$render($$result, { handleClose }, {}, {})}` : `${$apps.selectedApp === APPS_CONSTANTS.APPS.COMMENTS ? `${validate_component(Comments, "Comments").$$render($$result, { handleClose }, {}, {})}` : `${$apps.selectedApp === APPS_CONSTANTS.APPS.POLL ? `${validate_component(Poll_1, "Poll").$$render($$result, { handleClose }, {}, {})}` : `${$apps.selectedApp === APPS_CONSTANTS.APPS.NOTES ? `${validate_component(Notes, "Notes").$$render($$result, { handleClose }, {}, {})}` : ``}`}`}`}</div></div>` : ``} </div>`;
});
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_quizStore;
  let $$unsubscribe_playQuizStore;
  $$unsubscribe_quizStore = subscribe(quizStore, (value) => value);
  $$unsubscribe_playQuizStore = subscribe(playQuizStore, (value) => value);
  $$unsubscribe_quizStore();
  $$unsubscribe_playQuizStore();
  return `${``}`;
});
function showAppsSideBar(path) {
  return path?.includes("/lessons/") && !path?.includes("landingpage");
}
const hideNavByRoute = (route) => {
  return ROUTES_TO_HIDE_NAV.some((publicRoute) => {
    const regex = new RegExp(publicRoute, "g");
    return regex.test(route);
  });
};
const BASIC = {
  NAME: "Basic",
  DESCRIPTION: "Free tier plan for personal use, no credit card required.",
  PRICE: {
    CURRENCY: "$",
    MONTHLY: "0",
    YEARLY: "0",
    IS_PREMIUM: false
  },
  FEATURES: [
    "Unlimited Courses",
    "Unlimited Q/A",
    "20 Students",
    "AI Course Builder (no video upload)",
    "KinetsHub branding"
  ],
  CTA: {
    LABEL: "Signup Now",
    LINK: "/signup?plan=free",
    DASHBOARD_LABEL: "Downgrade",
    DASHBOARD_LINK: "#disabled",
    IS_DISABLED: true
  }
};
const EARLY_ADOPTER = {
  NAME: "Early Adopters",
  DESCRIPTION: "For fast growing teaching businesses that aim to scale.",
  PRICE: {
    CURRENCY: "$",
    MONTHLY: "35",
    YEARLY: "350",
    IS_PREMIUM: false
  },
  FEATURES: [
    "Everything in Basic",
    "Unlimted Teachers",
    "10K Students",
    "Advanced AI Course Builder (Video upload & Certificate)",
    "Custom Branding",
    "Slack Invite",
    "Includes all Upcoming Features"
  ],
  CTA: {
    LABEL: "I want in 😍",
    LINK: "/signup?plan=early-adopter",
    DASHBOARD_LABEL: "Support us 😍",
    DASHBOARD_LINK: "",
    IS_DISABLED: false,
    PRODUCT_ID: "331121",
    PRODUCT_ID_YEARLY: "331122"
  }
};
const ENTERPRISE = {
  NAME: "Enterprise",
  DESCRIPTION: "Best suited for larger businesses that need more control",
  PRICE: {
    CURRENCY: "",
    MONTHLY: "Request Pricing",
    YEARLY: "Request Pricing",
    IS_PREMIUM: true
  },
  FEATURES: [
    "Everything in Early Adopters plus:",
    "Unlimited students",
    "Custom Domain",
    "24/7 Support"
  ],
  CTA: {
    LABEL: "Contact Us",
    LINK: "https://cal.com/classroomio/enterprise",
    DASHBOARD_LABEL: "Contact Us",
    DASHBOARD_LINK: "https://cal.com/classroomio/enterprise",
    IS_DISABLED: false
  }
};
const PLANS = {
  BASIC,
  EARLY_ADOPTER,
  ENTERPRISE
};
const disabledClass = "bg-gray-300 text-gray-400 hover:cursor-not-allowed";
const Modal_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let planNames;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_currentOrgPath;
  let $$unsubscribe_currentOrg;
  let $$unsubscribe_profile;
  let $t, $$unsubscribe_t;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_currentOrgPath = subscribe(currentOrgPath, (value) => value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_t = subscribe(t2, (value) => $t = value);
  let isLoadingPlan = null;
  let open = false;
  function onClose() {
    {
      goto($page.url.pathname);
    }
  }
  onDestroy(() => {
  });
  {
    {
      const query = new URLSearchParams($page.url.search);
      open = (query.get("upgrade") || "") === "true";
    }
  }
  planNames = Object.keys(PLANS);
  $$unsubscribe_page();
  $$unsubscribe_currentOrgPath();
  $$unsubscribe_currentOrg();
  $$unsubscribe_profile();
  $$unsubscribe_t();
  return `${``} ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      onClose,
      open,
      width: "w-4/5",
      maxWidth: void 0,
      modalHeading: $t("pricing.modal.heading"),
      containerClass: "pt-4"
    },
    {},
    {
      default: () => {
        return `${`<div class="flex flex-col items-center justify-center"><div class="relative mb-2 flex items-center rounded-[30px] border-[2px] p-[2px] lg:scale-100"><button style="${"background-color: " + escape("#1D4EE2", true) + "; color: " + escape("#fff", true)}" class="rounded-[30px] bg-blue-700 px-3 py-1 text-xs text-white lg:px-4 lg:py-2 transition-all duration-500 ease-in-out">${escape($t("pricing.modal.monthly"))}</button> <button style="${"background-color: " + escape("", true) + "; color: " + escape("#5e636b", true)}" class="relative rounded-[30px] px-3 py-1 text-xs text-white lg:px-4 lg:py-2 transition-all duration-500 ease-in-out">${escape($t("pricing.modal.annually"))} <div class="absolute right-[-40%] -top-4 scale-[90%] rounded-full bg-[#006600] px-1.5 py-1 text-[0.7rem] text-white">${escape($t("pricing.modal.save"))}</div></button></div> <div class="isolate grid grid-cols-1 gap-3 lg:grid-cols-3">${each(planNames, (planName) => {
          return `<div class="${"max-w-xl rounded-xl " + escape(planName === "EARLY_ADOPTER" && "cio-bg-blue", true) + " p-4 ring-1 ring-gray-200 lg:max-w-sm"}"><p class="${"mb-2 text-lg font-semibold leading-8 " + escape(
            planName === "EARLY_ADOPTER" ? "text-white" : "text-gray-900",
            true
          ) + " dark:text-white lg:text-xl"}">${escape(PLANS[planName].NAME)}</p> <p class="${"text-baseline flex items-baseline gap-x-1 font-medium " + escape(
            planName === "EARLY_ADOPTER" ? "text-white" : "text-black",
            true
          ) + " dark:text-gray-300"}">${escape(PLANS[planName].PRICE.CURRENCY)} ${escape(PLANS[planName].PRICE.MONTHLY)}</p> <p class="${"mt-4 text-sm font-light leading-6 " + escape(
            planName === "EARLY_ADOPTER" ? "text-white" : "text-black",
            true
          ) + " dark:text-gray-300 lg:leading-6"}">${escape(PLANS[planName].DESCRIPTION)}</p> <button class="${"text-md mt-4 block w-full rounded-md " + escape(isLoadingPlan === planName && disabledClass, true) + " " + escape(
            planName === "EARLY_ADOPTER" ? "bg-white text-slate-900 hover:bg-indigo-50" : PLANS[planName].CTA.IS_DISABLED ? disabledClass : "bg-primary-900 hover:bg-primary-700 text-white",
            true
          ) + " py-3 text-center font-medium hover:no-underline lg:rounded-md lg:py-3 lg:text-lg lg:font-semibold flex items-center justify-center"}">${isLoadingPlan === planName ? `${validate_component(Loading$1, "Loading").$$render($$result, { withOverlay: false, small: true }, {}, {})}` : `${escape(PLANS[planName].CTA.DASHBOARD_LABEL)}`}</button> <ul class="${"mt-4 space-y-2 text-sm " + escape(
            planName === "EARLY_ADOPTER" ? "text-white" : "text-black",
            true
          ) + " dark:text-gray-300"}">${each(PLANS[planName].FEATURES, (features) => {
            return `<li class="flex items-center"><div>${validate_component(Checkmark, "Checkmark").$$render(
              $$result,
              {
                size: 16,
                fill: planName === "EARLY_ADOPTER" ? "#fff" : "#1D4EE2",
                class: "mr-2 lg:mr-3"
              },
              {},
              {}
            )}</div> <p class="text-sm">${escape(features)}</p> </li>`;
          })}</ul> </div>`;
        })}</div></div>`}`;
      }
    }
  )}`;
});
const css = {
  code: "main.svelte-1gwv3df{background-color:white;box-sizing:border-box}a:hover{text-decoration:underline}:root{--main-primary-color:rgba(29, 78, 216, 1);--border-color:#eaecef;--app-background-color:#fafbfc;--app-background:radial-gradient(\n      circle at 10% 20%,\n      rgb(239, 246, 249) 0%,\n      rgb(206, 239, 253) 90%\n    );--dark-app-background:radial-gradient(circle at 10% 20%, rgb(0 0 0) 0%, rgb(27 60 74) 90%)}.app-background{background:var(--app-background)}.dark .app-background{background:var(--dark-app-background)}.bx--data-table-container{width:100%}.dark svg.dark{fill:#fff}.border-c{border:1px solid var(--border-color)}.border-bottom-c{border-bottom:1px solid var(--border-color)}.bx--search-close > svg{fill:black}.dark .bx--search-close:hover > svg{fill:#fff}.plyr__controls{background:url(/logo-192.png) 99% 70% no-repeat,\n      linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) !important;background-size:50px auto,\n      auto !important}.cards-container{width:90%;margin:0 auto;padding:0;display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));column-gap:12px;row-gap:12px}@media screen and (max-width: 768px){.cards-container{width:95%;margin:0 auto;padding:0;display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));column-gap:12px;row-gap:12px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metaTags;
  let $page, $$unsubscribe_page;
  let $globalStore, $$unsubscribe_globalStore;
  let $$unsubscribe_user;
  let $$unsubscribe_currentOrgDomain;
  let $$unsubscribe_profile;
  let $currentOrg, $$unsubscribe_currentOrg;
  let $navigating, $$unsubscribe_navigating;
  let $delayedPreloading, $$unsubscribe_delayedPreloading;
  let $course, $$unsubscribe_course;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_globalStore = subscribe(globalStore, (value) => $globalStore = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_currentOrgDomain = subscribe(currentOrgDomain, (value) => value);
  $$unsubscribe_profile = subscribe(profile, (value) => value);
  $$unsubscribe_currentOrg = subscribe(currentOrg, (value) => $currentOrg = value);
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_course = subscribe(course, (value) => $course = value);
  let { data } = $$props;
  getSupabase();
  let path = $page.url?.pathname?.replace("/", "");
  $page.url?.search;
  let carbonTheme = "white";
  const delayedPreloading = derived(navigating, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });
  $$unsubscribe_delayedPreloading = subscribe(delayedPreloading, (value) => $delayedPreloading = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    path = $page.url?.pathname?.replace("/", "");
    carbonTheme = $globalStore.isDark ? "g100" : "white";
    metaTags = merge(data.baseMetaTags, $page.data.pageMetaTags);
    $$rendered = ` ${validate_component(MetaTags, "MetaTags").$$render($$result, Object.assign({}, metaTags), {}, {})} ${validate_component(Theme$1, "Theme").$$render(
      $$result,
      { theme: carbonTheme },
      {
        theme: ($$value) => {
          carbonTheme = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Modal_1, "UpgradeModal").$$render($$result, {}, {}, {})} ${validate_component(Snackbar, "Snackbar").$$render($$result, {}, {}, {})} ${data.org?.is_restricted || $currentOrg.is_restricted ? `${validate_component(Restricted, "Restricted").$$render($$result, {}, {}, {})}` : `${data.skipAuth ? `${validate_component(Play, "PlayQuiz").$$render($$result, {}, {}, {})}` : `${data.isOrgSite && !path ? `${validate_component(LandingPage, "OrgLandingPage").$$render(
      $$result,
      {
        orgSiteName: data.orgSiteName,
        org: data.org
      },
      {},
      {}
    )}` : `<main class="dark:bg-black svelte-1gwv3df">${$navigating && $delayedPreloading ? `${validate_component(Backdrop, "Backdrop").$$render(
      $$result,
      {
        disableCenteredContent: true,
        className: ""
      },
      {},
      {
        default: () => {
          return `<div class="h-full w-full relative">${validate_component(ToastNotification$1, "ToastNotification").$$render(
            $$result,
            {
              kind: "info-square",
              class: "absolute bottom-5 left-5"
            },
            {},
            {
              caption: () => {
                return `<span slot="caption" data-svelte-h="svelte-39jd01">Taking you to the next page, please wait.</span>`;
              },
              title: () => {
                return `<span slot="title" class="flex items-center"><span class="mr-2" data-svelte-h="svelte-1lned7p">Redirecting</span> ${validate_component(Loading$1, "Loading").$$render($$result, { withOverlay: false, small: true }, {}, {})}</span>`;
              }
            }
          )}</div>`;
        }
      }
    )}` : ``} ${!hideNavByRoute($page.url?.pathname) ? `${isOrgPage($page.url?.pathname) || $page.url?.pathname.includes("profile") || isCoursesPage(path) ? `${validate_component(App, "OrgNavigation").$$render(
      $$result,
      {
        isCoursePage: isCoursesPage(path),
        title: $course.title
      },
      {
        title: ($$value) => {
          $course.title = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${isLMSPage($page.url?.pathname) ? `${validate_component(Lms, "LMSNavigation").$$render($$result, {}, {}, {})}` : `${validate_component(Navigation, "LandingNavigation").$$render(
      $$result,
      {
        isOrgSite: data.isOrgSite,
        logo: data.isOrgSite ? $currentOrg.avatar_url : void 0,
        orgName: data.isOrgSite ? $currentOrg.name : void 0,
        disableSignup: false
      },
      {},
      {}
    )}`}`}` : ``} <div${add_attribute("class", path.includes("home") ? "" : "flex justify-between", 0)}>${slots.default ? slots.default({}) : ``} ${showAppsSideBar(path) ? `${validate_component(Apps, "Apps").$$render($$result, {}, {}, {})}` : ``}</div></main>`}`}`}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_globalStore();
  $$unsubscribe_user();
  $$unsubscribe_currentOrgDomain();
  $$unsubscribe_profile();
  $$unsubscribe_currentOrg();
  $$unsubscribe_navigating();
  $$unsubscribe_delayedPreloading();
  $$unsubscribe_course();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-291694ad.js.map
