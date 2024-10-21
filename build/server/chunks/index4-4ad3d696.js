import { s as supabase } from './supabase-cbc58bc2.js';
import './_sentry-release-injection-file-6be6a010.js';

!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "52167427-7c6f-4f2d-a15c-00aadaa9f94c", e._sentryDebugIdIdentifier = "sentry-dbid-52167427-7c6f-4f2d-a15c-00aadaa9f94c");
  } catch (e2) {
  }
}();
async function fetchNewsFeedReaction(feedId) {
  return supabase.from("course_newsfeed").select(`reaction`).eq("id", feedId).single();
}
async function fetchNewsFeeds(courseId) {
  const response = await supabase.from("course_newsfeed").select(
    `
    id,
    created_at,
    content,
    course_id,
    author:groupmember(
      profile(
        id,
        fullname,
        avatar_url
      )
    ),
    reaction,
    is_pinned,
    comment:course_newsfeed_comment(
        id,
        created_at,
        author:groupmember( profile(id, fullname, avatar_url) ),
        content,
        course_newsfeed_id)
    `
  ).match({ course_id: courseId }).order("created_at", { ascending: false }).returns();
  const { data, error } = response;
  return { data, error };
}
async function createNewFeed(post) {
  const response = await supabase.from("course_newsfeed").insert({
    content: post.content,
    author_id: post.author_id,
    course_id: post.course_id,
    reaction: post.reaction
  }).select();
  return { response };
}
async function handleEditFeed(feedId, content) {
  const response = await supabase.from("course_newsfeed").update({ content }).match({ id: feedId }).select();
  return response;
}
async function createComment(comment) {
  const response = await supabase.from("course_newsfeed_comment").insert({
    content: comment.content,
    author_id: comment.author_id,
    course_newsfeed_id: comment.course_newsfeed_id
  }).select();
  return { response };
}
async function toggleFeedIsPinned(feedId, isPinned) {
  const response = await supabase.from("course_newsfeed").update({
    is_pinned: isPinned
  }).match({ id: feedId });
  return { response };
}
async function deleteNewsFeedComment(commentId) {
  const response = await supabase.from("course_newsfeed_comment").delete().match({ id: commentId });
  return response;
}
async function deleteNewsFeed(feedId) {
  await supabase.from("course_newsfeed_comment").delete().match({ course_newsfeed_id: feedId });
  const response = await supabase.from("course_newsfeed").delete().match({ id: feedId });
  return response;
}
async function getFeedForNotification(params) {
  const { data, error } = await params.supabase.from("course_newsfeed").select(
    `
    content,
    author:groupmember(profile(fullname, email)),
    course(
      id,
      title,
      group(
        organization(siteName, name),
        members:groupmember(id, profile(email, fullname))
      )
    )
  `
  ).eq("id", params.feedId).limit(1).returns();
  if (error) {
    console.error("Failed to get feed", error);
    return null;
  }
  console.log({
    data
  });
  const [feed] = data || [];
  if (!feed)
    return;
  return {
    id: params.feedId,
    courseId: feed.course.id,
    courseTitle: feed.course.title,
    teacherName: feed.author?.profile?.fullname,
    teacherEmail: feed.author?.profile?.email,
    content: feed.content,
    org: feed.course.group?.organization,
    courseMembers: feed.course?.group?.members?.filter((member) => member.id !== params.authorId)?.map((member) => {
      return member.profile;
    })
  };
}

export { fetchNewsFeedReaction as a, deleteNewsFeed as b, createComment as c, deleteNewsFeedComment as d, createNewFeed as e, fetchNewsFeeds as f, getFeedForNotification as g, handleEditFeed as h, toggleFeedIsPinned as t };
//# sourceMappingURL=index4-4ad3d696.js.map
