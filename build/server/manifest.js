const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ai.svg","classroomio-opengraph-image.png","comment.svg","course-video.png","delete-video.svg","digital.png","digital.svg","favicon.ico","global.css","images/blue-badge-pattern-background.svg","images/blue-badge-pattern-badge.svg","images/blue-professional-badge.svg","images/certificate-template.png","images/certificate-template.svg","images/certificate_theme_blueBadgePattern.png","images/certificate_theme_blueProfessionalBadge.png","images/certificate_theme_plain.png","images/certificate_theme_professional.png","images/certificate_theme_purpleBadgePattern.png","images/certificate_theme_purpleProfessionalBadge.png","images/classroomio-course-img-template.jpg","images/course-banner-image.png","images/course-gift.png","images/empty-exercise-icon.svg","images/empty-lesson-icon.svg","images/empty-note-icon.svg","images/empty-slide-icon.svg","images/empty-video-icon.svg","images/org-header-banner.jpg","images/org-landingpage-banner.jpeg","images/org-landingpage-our-story.jpeg","images/play_video.png","images/purple-badge-pattern-background.svg","images/purple-badge-pattern-badge.svg","images/purple-professional-badge.svg","images/rating-1.svg","images/rating-2.svg","images/rating-3.svg","images/rating-4.svg","images/rating-5.svg","images/student-certificate-preview.png","images/student-learning.svg","images/target.svg","images/user.png","images/welcome-img.svg","images/welcome-modal-banner.svg","js/tinymce/icons/default/icons.min.js","js/tinymce/langs/README.md","js/tinymce/license.md","js/tinymce/models/dom/model.min.js","js/tinymce/plugins/accordion/plugin.min.js","js/tinymce/plugins/advlist/plugin.min.js","js/tinymce/plugins/anchor/plugin.min.js","js/tinymce/plugins/autolink/plugin.min.js","js/tinymce/plugins/autoresize/plugin.min.js","js/tinymce/plugins/autosave/plugin.min.js","js/tinymce/plugins/charmap/plugin.min.js","js/tinymce/plugins/code/plugin.min.js","js/tinymce/plugins/codesample/plugin.min.js","js/tinymce/plugins/directionality/plugin.min.js","js/tinymce/plugins/emoticons/js/emojiimages.js","js/tinymce/plugins/emoticons/js/emojiimages.min.js","js/tinymce/plugins/emoticons/js/emojis.js","js/tinymce/plugins/emoticons/js/emojis.min.js","js/tinymce/plugins/emoticons/plugin.min.js","js/tinymce/plugins/fullscreen/plugin.min.js","js/tinymce/plugins/help/js/i18n/keynav/ar.js","js/tinymce/plugins/help/js/i18n/keynav/bg_BG.js","js/tinymce/plugins/help/js/i18n/keynav/ca.js","js/tinymce/plugins/help/js/i18n/keynav/cs.js","js/tinymce/plugins/help/js/i18n/keynav/da.js","js/tinymce/plugins/help/js/i18n/keynav/de.js","js/tinymce/plugins/help/js/i18n/keynav/el.js","js/tinymce/plugins/help/js/i18n/keynav/en.js","js/tinymce/plugins/help/js/i18n/keynav/es.js","js/tinymce/plugins/help/js/i18n/keynav/eu.js","js/tinymce/plugins/help/js/i18n/keynav/fa.js","js/tinymce/plugins/help/js/i18n/keynav/fi.js","js/tinymce/plugins/help/js/i18n/keynav/fr_FR.js","js/tinymce/plugins/help/js/i18n/keynav/he_IL.js","js/tinymce/plugins/help/js/i18n/keynav/hi.js","js/tinymce/plugins/help/js/i18n/keynav/hr.js","js/tinymce/plugins/help/js/i18n/keynav/hu_HU.js","js/tinymce/plugins/help/js/i18n/keynav/id.js","js/tinymce/plugins/help/js/i18n/keynav/it.js","js/tinymce/plugins/help/js/i18n/keynav/ja.js","js/tinymce/plugins/help/js/i18n/keynav/kk.js","js/tinymce/plugins/help/js/i18n/keynav/ko_KR.js","js/tinymce/plugins/help/js/i18n/keynav/ms.js","js/tinymce/plugins/help/js/i18n/keynav/nb_NO.js","js/tinymce/plugins/help/js/i18n/keynav/nl.js","js/tinymce/plugins/help/js/i18n/keynav/pl.js","js/tinymce/plugins/help/js/i18n/keynav/pt_BR.js","js/tinymce/plugins/help/js/i18n/keynav/pt_PT.js","js/tinymce/plugins/help/js/i18n/keynav/ro.js","js/tinymce/plugins/help/js/i18n/keynav/ru.js","js/tinymce/plugins/help/js/i18n/keynav/sk.js","js/tinymce/plugins/help/js/i18n/keynav/sl_SI.js","js/tinymce/plugins/help/js/i18n/keynav/sv_SE.js","js/tinymce/plugins/help/js/i18n/keynav/th_TH.js","js/tinymce/plugins/help/js/i18n/keynav/tr.js","js/tinymce/plugins/help/js/i18n/keynav/uk.js","js/tinymce/plugins/help/js/i18n/keynav/vi.js","js/tinymce/plugins/help/js/i18n/keynav/zh_CN.js","js/tinymce/plugins/help/js/i18n/keynav/zh_TW.js","js/tinymce/plugins/help/plugin.min.js","js/tinymce/plugins/image/plugin.min.js","js/tinymce/plugins/importcss/plugin.min.js","js/tinymce/plugins/insertdatetime/plugin.min.js","js/tinymce/plugins/link/plugin.min.js","js/tinymce/plugins/lists/plugin.min.js","js/tinymce/plugins/media/plugin.min.js","js/tinymce/plugins/nonbreaking/plugin.min.js","js/tinymce/plugins/pagebreak/plugin.min.js","js/tinymce/plugins/preview/plugin.min.js","js/tinymce/plugins/quickbars/plugin.min.js","js/tinymce/plugins/save/plugin.min.js","js/tinymce/plugins/searchreplace/plugin.min.js","js/tinymce/plugins/table/plugin.min.js","js/tinymce/plugins/visualblocks/plugin.min.js","js/tinymce/plugins/visualchars/plugin.min.js","js/tinymce/plugins/wordcount/plugin.min.js","js/tinymce/skins/content/dark/content.js","js/tinymce/skins/content/dark/content.min.css","js/tinymce/skins/content/default/content.js","js/tinymce/skins/content/default/content.min.css","js/tinymce/skins/content/document/content.js","js/tinymce/skins/content/document/content.min.css","js/tinymce/skins/content/light/content.js","js/tinymce/skins/content/light/content.min.css","js/tinymce/skins/content/tinymce-5/content.js","js/tinymce/skins/content/tinymce-5/content.min.css","js/tinymce/skins/content/tinymce-5-dark/content.js","js/tinymce/skins/content/tinymce-5-dark/content.min.css","js/tinymce/skins/content/writer/content.js","js/tinymce/skins/content/writer/content.min.css","js/tinymce/skins/ui/oxide/content.inline.js","js/tinymce/skins/ui/oxide/content.inline.min.css","js/tinymce/skins/ui/oxide/content.js","js/tinymce/skins/ui/oxide/content.min.css","js/tinymce/skins/ui/oxide/skin.js","js/tinymce/skins/ui/oxide/skin.min.css","js/tinymce/skins/ui/oxide/skin.shadowdom.js","js/tinymce/skins/ui/oxide/skin.shadowdom.min.css","js/tinymce/skins/ui/oxide-dark/content.inline.js","js/tinymce/skins/ui/oxide-dark/content.inline.min.css","js/tinymce/skins/ui/oxide-dark/content.js","js/tinymce/skins/ui/oxide-dark/content.min.css","js/tinymce/skins/ui/oxide-dark/skin.js","js/tinymce/skins/ui/oxide-dark/skin.min.css","js/tinymce/skins/ui/oxide-dark/skin.shadowdom.js","js/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css","js/tinymce/skins/ui/tinymce-5/content.inline.js","js/tinymce/skins/ui/tinymce-5/content.inline.min.css","js/tinymce/skins/ui/tinymce-5/content.js","js/tinymce/skins/ui/tinymce-5/content.min.css","js/tinymce/skins/ui/tinymce-5/skin.js","js/tinymce/skins/ui/tinymce-5/skin.min.css","js/tinymce/skins/ui/tinymce-5/skin.shadowdom.js","js/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css","js/tinymce/skins/ui/tinymce-5-dark/content.inline.js","js/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css","js/tinymce/skins/ui/tinymce-5-dark/content.js","js/tinymce/skins/ui/tinymce-5-dark/content.min.css","js/tinymce/skins/ui/tinymce-5-dark/skin.js","js/tinymce/skins/ui/tinymce-5-dark/skin.min.css","js/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.js","js/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css","js/tinymce/themes/silver/theme.min.js","js/tinymce/tinymce.d.ts","js/tinymce/tinymce.min.js","logo-16.png","logo-192.png","logo-32.png","logo-512.png","logo.svg","manifest.json","no-video.svg","notfound.webp","notfound2.gif","painting.png","painting.svg","plain.png","professional.png","progress.svg","robots.txt","telegram-svg.svg","tictac.svg","timer.svg","unauthorized.svg","upgrade.png","upload-video.svg","verify-email.svg","video-upload-error.svg","zohoverify/verifyforzoho.html"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".jpg":"image/jpeg",".jpeg":"image/jpeg",".js":"application/javascript",".md":"text/markdown",".ts":"video/mp2t",".json":"application/json",".webp":"image/webp",".gif":"image/gif",".txt":"text/plain",".html":"text/html"},
	_: {
		client: {"start":"_app/immutable/entry/start.c8ba0b98.js","app":"_app/immutable/entry/app.144928f0.js","imports":["_app/immutable/entry/start.c8ba0b98.js","_app/immutable/chunks/scheduler.ee52cacd.js","_app/immutable/chunks/singletons.333ce4a3.js","_app/immutable/chunks/index.45ef5fca.js","_app/immutable/entry/app.144928f0.js","_app/immutable/chunks/preload-helper.0639fc73.js","_app/immutable/chunks/index.a2391391.js","_app/immutable/chunks/scheduler.ee52cacd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-a3da6306.js')),
			__memo(() => import('./chunks/1-9e013964.js')),
			__memo(() => import('./chunks/2-7a6ee6a3.js')),
			__memo(() => import('./chunks/3-190a4784.js')),
			__memo(() => import('./chunks/4-1904ff9e.js')),
			__memo(() => import('./chunks/5-97a74033.js')),
			__memo(() => import('./chunks/6-ec535620.js')),
			__memo(() => import('./chunks/7-a7970d10.js')),
			__memo(() => import('./chunks/8-3e855038.js')),
			__memo(() => import('./chunks/9-59a58dbc.js')),
			__memo(() => import('./chunks/10-891909fe.js')),
			__memo(() => import('./chunks/11-69bd1a14.js')),
			__memo(() => import('./chunks/12-b51a8350.js')),
			__memo(() => import('./chunks/13-69334e85.js')),
			__memo(() => import('./chunks/14-5adc3811.js')),
			__memo(() => import('./chunks/15-5d0eded4.js')),
			__memo(() => import('./chunks/16-98ec272e.js')),
			__memo(() => import('./chunks/17-655bbcf8.js')),
			__memo(() => import('./chunks/18-360fdabc.js')),
			__memo(() => import('./chunks/19-2a5cc9e1.js')),
			__memo(() => import('./chunks/20-8fb2d374.js')),
			__memo(() => import('./chunks/21-492444eb.js')),
			__memo(() => import('./chunks/22-61157a4f.js')),
			__memo(() => import('./chunks/23-0f668304.js')),
			__memo(() => import('./chunks/24-bd3d42f5.js')),
			__memo(() => import('./chunks/25-3a0564fb.js')),
			__memo(() => import('./chunks/26-90f1e3ff.js')),
			__memo(() => import('./chunks/27-26ab7abe.js')),
			__memo(() => import('./chunks/28-58b89526.js')),
			__memo(() => import('./chunks/29-af80cb7b.js')),
			__memo(() => import('./chunks/30-6af62190.js')),
			__memo(() => import('./chunks/31-591e63f3.js')),
			__memo(() => import('./chunks/32-99dc9e92.js')),
			__memo(() => import('./chunks/33-71b4dade.js')),
			__memo(() => import('./chunks/34-394bf4a2.js')),
			__memo(() => import('./chunks/35-d9c46464.js')),
			__memo(() => import('./chunks/36-04473f99.js')),
			__memo(() => import('./chunks/37-4a08ff70.js')),
			__memo(() => import('./chunks/38-679a6698.js')),
			__memo(() => import('./chunks/39-05ef2e85.js')),
			__memo(() => import('./chunks/40-1d660191.js')),
			__memo(() => import('./chunks/41-162bbc4a.js')),
			__memo(() => import('./chunks/42-c2d4c075.js')),
			__memo(() => import('./chunks/43-93c37833.js')),
			__memo(() => import('./chunks/44-ad927ff4.js')),
			__memo(() => import('./chunks/45-ff997d1e.js')),
			__memo(() => import('./chunks/46-f680c67f.js')),
			__memo(() => import('./chunks/47-64be3a03.js')),
			__memo(() => import('./chunks/48-862590e4.js')),
			__memo(() => import('./chunks/49-2d8e6351.js')),
			__memo(() => import('./chunks/50-2dceb0e9.js')),
			__memo(() => import('./chunks/51-f4a2ab86.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/api/completion",
				pattern: /^\/api\/completion\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-90789333.js'))
			},
			{
				id: "/api/completion/customprompt",
				pattern: /^\/api\/completion\/customprompt\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-493cb29a.js'))
			},
			{
				id: "/api/completion/exerciseprompt",
				pattern: /^\/api\/completion\/exerciseprompt\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-a87a3740.js'))
			},
			{
				id: "/api/completion/gradingprompt",
				pattern: /^\/api\/completion\/gradingprompt\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-75a1db90.js'))
			},
			{
				id: "/api/domain",
				pattern: /^\/api\/domain\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-bd2a36ba.js'))
			},
			{
				id: "/api/email/course/exercise_submission_update",
				pattern: /^\/api\/email\/course\/exercise_submission_update\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-5bbb6c4d.js'))
			},
			{
				id: "/api/email/course/newsfeed",
				pattern: /^\/api\/email\/course\/newsfeed\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-3c3b54f6.js'))
			},
			{
				id: "/api/email/course/student_prove_payment",
				pattern: /^\/api\/email\/course\/student_prove_payment\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9440aad3.js'))
			},
			{
				id: "/api/email/course/student_welcome",
				pattern: /^\/api\/email\/course\/student_welcome\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-a9a0d6a2.js'))
			},
			{
				id: "/api/email/course/submission_update",
				pattern: /^\/api\/email\/course\/submission_update\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-70c427f9.js'))
			},
			{
				id: "/api/email/course/teacher_student_buycourse",
				pattern: /^\/api\/email\/course\/teacher_student_buycourse\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-ecc7a9b5.js'))
			},
			{
				id: "/api/email/course/teacher_student_joined",
				pattern: /^\/api\/email\/course\/teacher_student_joined\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f4b904eb.js'))
			},
			{
				id: "/api/email/course/teacher_welcome",
				pattern: /^\/api\/email\/course\/teacher_welcome\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-e0af77d3.js'))
			},
			{
				id: "/api/email/invite",
				pattern: /^\/api\/email\/invite\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-894536f7.js'))
			},
			{
				id: "/api/email/verify_email",
				pattern: /^\/api\/email\/verify_email\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-45f0dd27.js'))
			},
			{
				id: "/api/email/welcome",
				pattern: /^\/api\/email\/welcome\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-47e43bf4.js'))
			},
			{
				id: "/api/i18n",
				pattern: /^\/api\/i18n\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-82169c3c.js'))
			},
			{
				id: "/api/lmz/subscribe",
				pattern: /^\/api\/lmz\/subscribe\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-6ff6f2e8.js'))
			},
			{
				id: "/api/lmz/subscriptions",
				pattern: /^\/api\/lmz\/subscriptions\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f39ed2b5.js'))
			},
			{
				id: "/api/lmz/webhook",
				pattern: /^\/api\/lmz\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f2809699.js'))
			},
			{
				id: "/api/muse/transcript",
				pattern: /^\/api\/muse\/transcript\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-f7f23a71.js'))
			},
			{
				id: "/api/stripe/webhook",
				pattern: /^\/api\/stripe\/webhook\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-60bb0824.js'))
			},
			{
				id: "/api/unsplash",
				pattern: /^\/api\/unsplash\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-837cfb68.js'))
			},
			{
				id: "/api/verify",
				pattern: /^\/api\/verify\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-6f8bbd6e.js'))
			},
			{
				id: "/courses/[id]",
				pattern: /^\/courses\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/courses/[id]/attendance",
				pattern: /^\/courses\/([^/]+?)\/attendance\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/courses/[id]/certificates",
				pattern: /^\/courses\/([^/]+?)\/certificates\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/courses/[id]/landingpage",
				pattern: /^\/courses\/([^/]+?)\/landingpage\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/courses/[id]/lessons",
				pattern: /^\/courses\/([^/]+?)\/lessons\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/courses/[id]/lessons/[...lessonParams]",
				pattern: /^\/courses\/([^/]+?)\/lessons(?:\/(.*))?\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"lessonParams","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/courses/[id]/marks",
				pattern: /^\/courses\/([^/]+?)\/marks\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/courses/[id]/people",
				pattern: /^\/courses\/([^/]+?)\/people\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/courses/[id]/settings",
				pattern: /^\/courses\/([^/]+?)\/settings\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/courses/[id]/submissions",
				pattern: /^\/courses\/([^/]+?)\/submissions\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/course/[slug]",
				pattern: /^\/course\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/forgot",
				pattern: /^\/forgot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/invite/s/[hash]",
				pattern: /^\/invite\/s\/([^/]+?)\/?$/,
				params: [{"name":"hash","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/invite/t/[hash]",
				pattern: /^\/invite\/t\/([^/]+?)\/?$/,
				params: [{"name":"hash","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/lms",
				pattern: /^\/lms\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/lms/community",
				pattern: /^\/lms\/community\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/lms/community/ask",
				pattern: /^\/lms\/community\/ask\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/lms/community/[slug]",
				pattern: /^\/lms\/community\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/lms/exercises",
				pattern: /^\/lms\/exercises\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/lms/explore",
				pattern: /^\/lms\/explore\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/lms/mylearning",
				pattern: /^\/lms\/mylearning\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/lms/settings",
				pattern: /^\/lms\/settings\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/onboarding",
				pattern: /^\/onboarding\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/org/[slug]",
				pattern: /^\/org\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/org/[slug]/audience",
				pattern: /^\/org\/([^/]+?)\/audience\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/org/[slug]/community",
				pattern: /^\/org\/([^/]+?)\/community\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/org/[slug]/community/ask",
				pattern: /^\/org\/([^/]+?)\/community\/ask\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/org/[slug]/community/[slug]",
				pattern: /^\/org\/([^/]+?)\/community\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/org/[slug]/courses",
				pattern: /^\/org\/([^/]+?)\/courses\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/org/[slug]/quiz",
				pattern: /^\/org\/([^/]+?)\/quiz\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/org/[slug]/quiz/[slug]",
				pattern: /^\/org\/([^/]+?)\/quiz\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/org/[slug]/settings",
				pattern: /^\/org\/([^/]+?)\/settings\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/org/[slug]/settings/customize-lms",
				pattern: /^\/org\/([^/]+?)\/settings\/customize-lms\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/org/[slug]/settings/domains",
				pattern: /^\/org\/([^/]+?)\/settings\/domains\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/org/[slug]/settings/teams",
				pattern: /^\/org\/([^/]+?)\/settings\/teams\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/org/[slug]/setup",
				pattern: /^\/org\/([^/]+?)\/setup\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/profile/[id]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/reset",
				pattern: /^\/reset\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/upgrade",
				pattern: /^\/upgrade\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
