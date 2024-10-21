!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9771435d-735d-456b-8345-9ee43f8879d8", e._sentryDebugIdIdentifier = "sentry-dbid-9771435d-735d-456b-8345-9ee43f8879d8");
  } catch (e2) {
  }
}();
const verify_email_modal = {
  heading: "Verify your Email",
  sent_verification: "We've sent a verification email to",
  to_confirm: "to confirm the validity of the email provided.",
  loading: "Loading...",
  resend: "Resend Verification Code",
  resend_in: "Resend verification in",
  seconds: "seconds",
  snackbar_error: "error while sending code"
};
const delete_modal = {
  label: "Delete",
  content: "Are you sure?",
  no: "No",
  yes: "Yes"
};
const onboarding = {
  phone: "Phone",
  sell: "Sell courses online",
  teach: "Teach my current students online",
  expanding: "On another platform, expanding here",
  employees: "Train my employees",
  customers: "Create courses for my customers",
  explore: "Just here to explore",
  articles: "Articles",
  search: "Search engine",
  social: "Social media",
  friends: "Friends and family",
  fullname: "Full Name",
  name: "Name of Organization",
  organisation_sitename: "Organisation Site name",
  what_brings: "What brings you to",
  how: "How did you hear about us?",
  back: "Back",
  "continue": "Continue"
};
const welcome_modal = {
  we_at: "We at",
  small_team: "are a small team with a large mission to empower educators with great software to help them make an impact in people's lives. Education is the most powerful gift you can give anyone, and it makes perfect sense to provide you with all the tools you need to give this GIFT to more people.",
  thank_you: "Thank you for choosing us",
  deeply_appreciate: "we deeply appreciate it and are at your service."
};
const login = {
  welcome: "Welcome back",
  email: "Your email",
  password: "Your password",
  forgot: "Forgot password?",
  login: "Log In"
};
const profileMenu = {
  profile: "PROFILE",
  current_org: "CURRENT ORGANIZATION",
  free_tools: "FREE TOOLS",
  progress: "Progress report",
  timer: "Activity timer",
  tic_tac: "Tictac toe",
  see_more: "See more",
  whats_new: "What's new",
  launch_week: "Launch week"
};
const settings = {
  heading: "Settings",
  subheadings: {
    view_site: "View site"
  },
  tabs: {
    profile_tab: "Profile",
    organization_tab: "Organization",
    landing_page_tab: "Landing Page",
    billing_tab: "Billing",
    integrations_tab: "Integrations",
    language_tab: "Language"
  },
  profile: {
    profile_picture: {
      heading: "Profile Picture",
      upload_image: "Upload Image",
      file_size: "Max file size:",
      accepted: "Accepted:",
      validation_error: "File size exceeds the maximum limit:"
    },
    personal_information: {
      heading: "Personal Information",
      full_name: "Full Name",
      username: "Username",
      email: "Email"
    },
    update_profile: "Update Profile",
    logout: "Log out"
  },
  organization: {
    organization_profile: {
      heading: "Organization Profile",
      organization_name: "Organization Name",
      upload_image: "Upload Image",
      update_organization: "Update Organization",
      theme: {
        heading: "Theme",
        sub_heading: "Set your brand color",
        custom_theme: "Custom Theme",
        add_theme: "Add Theme"
      },
      customize_lms: {
        heading: "Customize LMS",
        sub_heading: "Personalize Your Organization LMS",
        body: "Control your students learning experience. You can enable or disable tabs and pages, update LMS banner and in-app comments to your organization requirements",
        button: "Customize LMS"
      },
      custom_domain: {
        heading: "Custom Domain",
        sub_heading: "Customise your Domain",
        body: "Create a custom URL so your audience can get to your organization easily",
        button: "Edit domain"
      },
      team: {
        heading: "Team",
        sub_heading: "Set up your team",
        body: "Add team mates to your organization so you can both collaborate on projects.",
        button: "Manage Team"
      }
    }
  },
  landing_page: {
    heading: "Landing Page",
    show_section: "Show Section",
    hide_section: "Hide Section",
    title: "Title",
    title_highlight: "Title-Highlight",
    subtitle: "Subtitle",
    background: {
      title: "Background Image",
      show_background: "Show background",
      hide_background: "Hide background"
    },
    actions: {
      heading: "Actions",
      label: "Label",
      link: "Link",
      no_redirect: "No redirect",
      redirect: "Redirect",
      banner_type: {
        heading: "Banner Type",
        video: "Video",
        image: "Image"
      },
      show_banner: "Show banner",
      hide_banner: "Hide banner"
    },
    about: {
      heading: "About",
      title: "Title",
      content: "Content",
      upload_an_image: "Upload an image",
      select_image: "Select Image"
    },
    courses: {
      heading: "Courses",
      show_section: "Show Section",
      hide_section: "Hide Section",
      title: "Title",
      title_highlight: "Title-Highlight",
      subtitle: "Subtitle"
    },
    faq: {
      heading: "Frequently Asked Questions",
      show_section: "Show Section",
      hide_section: "Hide Section",
      title: "Title",
      question: "Question",
      answer: "Answer",
      button: "Add New Faq",
      save: "Save",
      cancel: "Cancel"
    },
    contact_us: {
      heading: "Contact us",
      show_section: "Show Section",
      hide_section: "Hide Section",
      title: "Title",
      title_highlight: "Title-Highlight",
      subtitle: "Subtitle",
      phone_number: "Phone Number",
      email: "Email"
    },
    mailing_list: {
      heading: "Mailing List",
      show_section: "Show Section",
      hide_section: "Hide Section",
      title: "Title",
      subtitle: "Subtitle",
      button_label: "Button-label"
    },
    footer: {
      heading: "Footer",
      show_section: "Show Section",
      hide_section: "Hide Section",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn"
    },
    save_changes: "Save Changes"
  },
  integrations: {
    heading: "Telegram",
    sub_heading: "Connect your account to telegram to get notified of any change within the application.",
    step_authenticate: "Step 1: Authenticate your account via the KinetsHub bot.",
    open_bot_button: "Open Bot",
    step_chatId: "Step 2: Enter the Chat ID given to you by the bot.",
    connect_button: "Connect",
    success_message: "Integration Successful",
    disconnect: "Disconnect"
  },
  billing: {
    sub_title: "Billing details",
    manage: "Manage your billing",
    active: "You don't have any active billing",
    lemonsqueezy: "We use Lemonsqueezy to help manage your billing",
    open_billing: "Open billing"
  }
};
const org_navigation = {
  dashboard: "Dashboard",
  courses: "Courses",
  community: "Community",
  audience: "Audience",
  setup: "Setup",
  help: "Help",
  settings: "Settings",
  early_adopter: "Become an Early Adopter",
  unlock: "Unlock unlimited features and invest in our future",
  upgrade: "Upgrade Now"
};
const pricing = {
  plan_names: {
    free: "Free",
    early: "Early Adopter",
    enterprise: "Enterprise"
  },
  modal: {
    heading: "Upgrade Plan",
    thanks: "Thank you for your support",
    plan: "Your plan comes with cool perks and benefits including access to all future features we release.",
    save: "Save 2 months",
    close: "Close",
    learn: "Learn more",
    month: "month",
    monthly: "Monthly",
    annually: "Annually"
  }
};
const setup = {
  get_started: "Get Started",
  personal_profile: {
    title: "Upload a profile picture and update username",
    desc: "Personalize and add a human touch making interactions more personal and memorable",
    button_label: "Update Profile"
  },
  organization_profile: {
    title: "Update organisation profile picture",
    desc: "Establish a professional and recognizable identity for your organization",
    button_label: "Update Org Profile"
  },
  course: {
    title: "Create Course",
    desc: "Create a course that you will share with your students",
    button_label: "Create Course"
  },
  lesson: {
    title: "Create a lesson",
    desc: "Break your course into lesson that your students can easily understand",
    button_label: "Create Lesson"
  },
  exercise: {
    title: "Create an exercise",
    desc: "Test your students allow them to demonstarte their understanding of the subject matter",
    button_label: "Create Assignment"
  },
  publish_course: {
    title: "Publish a course",
    desc: "Make your course public and purchaseable",
    button_label: "Publish Course"
  }
};
const add_org = {
  create_org: "Create Organization",
  name: "Name of Organization",
  org_sitename: "Organisation Site name",
  create: "Create",
  sitename: "Sitename already exists",
  error_organization: "Something went wrong while creating this organization. Please reload and try again"
};
const navigation = {
  goto: "Go to",
  courses: "Courses",
  home: "Home",
  classroomio_home: "KinetsHub Home",
  dashboard: "Dashboard",
  discussion: "Discussion",
  people: "People",
  goto_lms: "Go to LMS",
  goto_home: "Go to KinetsHub Home",
  login: "Login",
  signup: "Sign Up",
  redirecting: "Redirecting",
  loading_state: "Taking you to the next page, please wait.",
  org_loading_state: "Taking you to your organization...",
  add_organization: "+ Add Organization"
};
const markdown_editor = {
  write: "Write",
  preview: "Preview"
};
const components = {
  quiz: {
    title: "Quizzes",
    second: "Second(s)",
    answer: "Answer(s)",
    question_delete: "Delete Question",
    add_more: "+ Add more answers",
    remove_last: "- Remove last answer",
    quiz_delete: "Delete Quiz",
    delete_question: "Are you sure you want to delete this question?",
    delete_quiz: "Are you sure you want to delete this quiz?",
    lose_content: "You will lose your content and this action can’t be undone.",
    "delete": "Delete",
    update: "Update",
    create: "Create",
    a_quiz: "a Quiz",
    quiz_title: "Quiz Title",
    placeholder: "Your quiz title",
    save: "Save Change",
    "continue": "Continue",
    rename: "Rename",
    updated: "Updated",
    start: "Start Quiz",
    start_typing: "Start typing your question",
    required_field: "This field is required",
    type_answer: "Type answer",
    label: "Please enter a label",
    no_quizz: "No Quiz Created",
    interactive: "Create interactive quizzes with scoreboard for your students."
  },
  settings: {
    domains: {
      title: "Custom domain",
      add: "Add",
      url: "URL",
      update: "Update Domain",
      custom: "Custom domain",
      domain: "Add your own domain name",
      save: "Save",
      your_domain: "Your Domain",
      custom_domain_error: "You can't add a top level domain as custom domain. Instead, use a subdomain like 'courses.[yourwebsite].com' or 'www.[yourwebsite].com'.",
      custom_domain_success: "Custom domain added successfully",
      dns_description: "Set the following record on your DNS provider to continue:",
      dns_type: "Type",
      dns_value: "Value",
      dns_name: "Name",
      refresh: "Refresh",
      remove: "Remove",
      custom_favicon: "Custom favicon",
      custom_code: "Custom code"
    },
    customize_lms: {
      title: "Customize LMS",
      disabled: "Disabled",
      enabled: "Enabled",
      save: "Save Changes",
      dashboard: {
        title: "Dashboard",
        community: "Community",
        exercises: "Exercises",
        banner_image: "Banner Image",
        banner_image_btn: "Update banner image",
        banner_text: "Banner Text",
        banner_text_label: "Update banner text",
        banner_text_placeholder: "Write the text here"
      },
      course: {
        title: "Course",
        newsfeed: "Newsfeed",
        grading: "Grading"
      },
      apps: {
        title: "Apps",
        poll: "Poll",
        live_comment: "Live comments"
      }
    }
  }
};
const schedule = {
  title: "Your Schedule",
  essence: "The essence of design collaboration",
  figma: "Figma Introduction",
  join: "Join Call",
  no: "No Lesson on this day"
};
const dashboard = {
  morning_heading: "Good Morning",
  afternoon_heading: "Good Afternoon",
  evening_heading: "Good Evening",
  create_course: "Create Course",
  view_site: "View Site",
  visit_site: "Visit Website",
  hero_content: "Thank you for what you do ❤️. You are changing lives one classroom at a time and thanks to you, the world is a better place. 😊",
  hero_button: "Keep Building 🚀",
  your_schedule: "Your Schedule",
  today: "Today",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  no_schedule: "No lesson on this day",
  join_call: "Join call",
  click_to_join: "Click to join the call",
  no_call_link: "No call link was added for this lesson. Ask your trainer",
  current_lesson: "Currently Learning",
  your_progress: "Your Progress",
  "continue": "Continue",
  no_courses: "No courses in progress yet",
  start_course: "Once you start a course, your progress will reflect here",
  lms_dashboard_hero: "Today is another day to bring you closer to your learning goals. Don’t give up, the more you learn the better you get.",
  dont: "Don't give up",
  lessons_completed: "Lessons completed",
  No_courses_started: "No courses started"
};
const ai = {
  help_me: "Help me write",
  placeholder: "Help me write a short description",
  text: "Start typing...",
  reset: "Reset",
  rephrase: "Rephrase",
  insert: "Insert",
  can_you: "Can you please rephrase this"
};
const courses = {
  heading: "Courses",
  heading_button: "Create Course",
  search_placeholder: "Find Course",
  course_filter: {
    date_created: "Date Created",
    published: "Published",
    lessons: "Lessons"
  },
  course_card: {
    empty_title: "No Courses Created",
    empty_description: "Share your knowledge with the world by creating engaging courses for your students.",
    context_menu: {
      clone: "Clone",
      share: "Share",
      invite: "Invite",
      "delete": "Delete"
    },
    error_message: "An error occurred.",
    lessons_number: "lessons",
    students: "students",
    published: "Published",
    unpublished: "Unpublished",
    continue_course: "Continue Course",
    learn_more: "Learn more",
    list_view: {
      title: "Title",
      description: "Description",
      lessons: "Lessons",
      students: "Students",
      published: "Published",
      type: "Type"
    }
  },
  new_course_modal: {
    heading: "Create a Course",
    course_name: "Course name",
    type: "Course type",
    course_name_placeholder: "Your course name",
    short_description: "Short Description",
    short_description_placeholder: "A little description about this course",
    type_selector_title: "What type of course are you looking at?",
    button: "Finish",
    back: "Back",
    next: "Next"
  }
};
const course = {
  navItems: {
    nav_news_feed: "News Feed",
    nav_content: "Content",
    nav_attendance: "Attendance",
    nav_submissions: "Submissions",
    nav_marks: "Marks",
    nav_people: "People",
    nav_certificates: "Certificates",
    nav_landing_page: "Landing Page",
    nav_settings: "Settings"
  },
  navItem: {
    news_feed: {
      heading: "News Feed",
      heading_button: {
        title: "Add",
        edit_post: "Edit Post",
        make_a_post: "Make a Post",
        placeholder: "Share an update with your students",
        cancel: "Cancel",
        post: "Post"
      },
      body_header: "No post yet",
      body_content: "Make a post to your class. Start by clicking on the Add button.",
      pinned: "Pinned",
      snackbar: {
        comment_deleted: "Comment Deleted",
        reaction_error: "An error occurred while reacting to news feed",
        comment_creation_error: "An error occurred while creating comment",
        add_comment_success: "Comment added",
        toggle_pin_error: "Failed to toggle pinned feed",
        unpinned: "Unpinned",
        successfully: "Successfully",
        feed_delete_success: "Feed deleted successfully",
        fetch_feed_fail: "Failed to fetch news feeds",
        fetching_error: "An error occured while fetching feed"
      }
    },
    lessons: {
      heading: "Lessons",
      heading_v2: "Content",
      drag: "drag a card to reorder",
      no_lesson: "No lessons yet",
      share_your_knowledge: "Share your knowledge with the world by creating engaging lessons. Start by clicking on the Add button.",
      section_prompt: {
        cta: "Enable Sections",
        header: "Enable Sections",
        title: "We Launched Course Sections",
        description: "You can now group lessons into sections to organize your content and make learning smoother for your students.",
        activate: "Activate",
        cancel: "Cancel"
      },
      add_lesson: {
        button_title: "Add",
        start_reorder: "Reorder",
        end_reorder: "End Reorder",
        modal_heading: "Add New Lesson",
        modal_heading_section: "Add New Section",
        lesson_title: "Lesson Title",
        lesson_section_title: "Section Title",
        click_to: "Click to",
        lock: "Lock",
        unlock: "Unlock",
        fullname: "fullname",
        save: "Save",
        edit: "Edit",
        "delete": "Delete",
        cancel: "Cancel"
      },
      join_lesson: "Join lesson",
      no_link: "No link",
      no_tutor: "No tutor added",
      body_header: "No lessons yet",
      body_content: "Share your knowledge with the world by creating engaging lessons. Start by clicking on the Add button.",
      lesson_nav: {
        materials: "Materials",
        exercises: "Exercises"
      },
      download_pdf: "Download PDF",
      autosaving: "Autosaving...",
      done: "Done",
      edit: "Edit",
      mark_as: "Mark as",
      incomplete: "Incomplete",
      complete: "Complete",
      next: "Next",
      prev: "Prev",
      materials: {
        body_heading: "No note, video or slide added for this lesson yet",
        body_content: "Share your knowledge with your students by creating engaging content. Start by clicking on",
        get_started: "Get Started",
        no_translation: "No translation for the selected language",
        button: "button",
        tabs: {
          note: {
            title: "Note",
            placeholder: "Write your lesson note here",
            ai: {
              outline: "Generate Lesson Outline",
              note: "Generate Lesson Note",
              activities: "Generate Lesson Activities"
            }
          },
          slide: {
            title: "Slide",
            slide_link: "Slide Link",
            helper_message: "You can embed Google Slides or Canva Presentation"
          },
          video: {
            title: "Video",
            embed_link: "Embed Link",
            upload: "Upload",
            button: "Add/Edit Video(s)",
            add_video: {
              title: "Add a Video",
              add_by: "Add By",
              youtube_link: "Youtube Link",
              videos_added: "Videos Added",
              add_video: "Add Video",
              upload_video: "Upload Video",
              select_file: "Select file( Mp4, MOV, AVI) to upload to your lesson.",
              size: "(Max 500 MB)",
              oops: "Oops `😬, couldn’t upload video",
              big_file: "Sorry we video wasn’t uploaded. The file size is too big,",
              maximum_size: "maximum size is 30 MB. Try again!",
              button: "Try another file",
              try_again: "Please try again",
              unsupported_format: "Sorry we video wasn’t uploaded, the file format isn’t supported or something went wrong on the server.",
              format: "Upload MP4, MOV and AVI files.",
              upgrade: "Upgrade your plan to upload vidoes",
              uploading: "Uploading...",
              invalid_youtube: "Invalid YouTube link(s)",
              invalid_link: "Invalid link(s)"
            }
          }
        },
        button_done: "Done"
      },
      exercises: {
        heading: "All Exercises",
        add_button: "Add",
        no_exercises: "No exercises added for this lesson",
        no_assigned_exercises: "Your tutor hasn't assigned any exercise to this lesson. For the main time, you can",
        chill: "chill with the big boys",
        add_exercise: "Share your knowledge with the world by creating engaging exercises. Add an exercise now.",
        new_exercise_modal: {
          heading: "New Exercise",
          options: {
            from_scratch: "From Scratch",
            from_scratch_subtitle: "Create your exercise from scratch if you have your questions already prepared",
            use_template: "Use a Template",
            use_template_subtitle: "Select from 100+ templates of predefined exercise to help you get started",
            use_ai: "Use AI",
            use_ai_subtitle: "You can generate an exercise with AI from your notes"
          },
          how: "How do you want to create your exercise",
          coming_soon: "Coming soon",
          next: "Next",
          title: "Give your exercise a title",
          title_placeholder: "Exercise name",
          finish: "Finish",
          select_template: "Select a template",
          questions: "Questions",
          points: "Points",
          back: "Back",
          create_exercises: "Create exercises from Notes with AI",
          choose_questions: "Choose how many questions and options you want and AI will help you create an exercise out of your note. Let's go.",
          how_many_questions: "How many questions do you want to create?",
          how_many_options: "How many options per questions do you want?",
          add_note: "Please add a note to use this feature",
          generate: "Generate",
          completion: "AI Generation Complete",
          click_generate: "Click 'Generate' for some magic"
        },
        all_exercises: {
          heading: "All Exercise",
          questions: "Questions",
          submissions: "Submissions",
          save: "Save",
          preview: "Preview",
          reorder: "Reorder Questions",
          delete_exercise: "Delete Exercise",
          order_questions: "Order questions",
          write_your_answer: "Write your answer",
          write_your_answer_here: "Write your answer here",
          no_answer: "No answer was provided",
          write_your_question_here: "Write your question here",
          write_your_title: "Write your title here",
          write_your_subtitle: "Write your subtitle here",
          highlight: "Write your title highlight here",
          content: "Write your Content here",
          video: "Write your video link here",
          link: "Write your link here",
          label: "Write your label here",
          email: "Write your email here",
          facebook: "Write your Facebook link here",
          twitter: "Write your Twitter link here",
          linkedin: "Write your LinkedIn link here",
          number: "Write your phone number here",
          previous: "Previous",
          finish: "Finish",
          next: "Next",
          check: "Check",
          description: {
            title: "Title",
            heading: "Description",
            describe: "Describe the exercise to your student",
            no: "No description"
          },
          delete_confirmation: {
            title: "Delete question",
            sure: "Are you sure you want to delete this question",
            no: "No, please don't",
            yes: "Yes, delete"
          },
          edit_mode: {
            delete_modal: "Delete Exercise",
            sure: "Are you sure you want to delete this exercise?",
            no: "No, cancel",
            yes: "Yes, delete",
            deleting: "Deleting...",
            error: "You have some errors",
            question: "Question",
            write: "Write your code",
            option: "Add option",
            question_types: {
              single: "Single answer",
              multiple: "Multiple answers",
              paragraph: "Paragraph"
            }
          },
          view_mode: {
            no_question: "No question added for this exercise",
            edit: "Edit",
            button: "button to add",
            questions: "questions",
            points: "points",
            all: "All required",
            due: "Due by",
            no_description: "No description",
            start: "Start",
            graded: "Graded",
            pending: "Pending",
            submitted: "Submitted",
            status_pending: "Status: Pending Review",
            status_graded: "Status: Review Completed",
            status_submitted: "Status: Submitted"
          },
          analytics: {
            summary: {
              heading: "Summary",
              question_chart: "Question Charts"
            },
            individual: {
              heading: "Individual",
              answers: "Individual Answers",
              no: "No answer was provided"
            },
            submissions: "Submissions"
          }
        }
      },
      disabled: "Feature is disabled",
      comments: {
        title: "Comments",
        you: "You",
        placeholder: "Say something"
      },
      polls: {
        title: "Poll",
        active_polls: "Active Polls",
        expired_polls: "Expired Polls",
        loading: "Loading...",
        no_polls: "No polls to display"
      },
      poll: {
        voted: "Voted",
        created_by: "Created by",
        status: "Status",
        draft: "Draft",
        publish: "Publish",
        expiration: "Expiration",
        total_voted: "Total Votes",
        responses: "Responses",
        expires: "Expires",
        today: "Today",
        back: "Back",
        result: "Result",
        "delete": "Delete",
        create_poll: "Create poll",
        question: "Question",
        options: "Options",
        option_label: "Option Label",
        cancel: "Cancel",
        poll_question: "Poll Question"
      },
      version_history: {
        title: "Version history",
        fetch_more_versions: "Fetch more versions",
        current_version: "Current version",
        restore_version: "Restore this version"
      }
    },
    attendance: {
      title: "Attendance",
      present: "Present",
      absent: "Absent",
      search_students: "Search Students",
      student: "Student",
      lesson: "Lesson",
      no_student: "No Student Added"
    },
    submissions: {
      title: "Submitted Exercises",
      submission_status: {
        submitted: "Submitted",
        in_progress: "In Progress",
        graded: "Graded"
      },
      grading_modal: {
        details: "Details",
        early: "Early",
        late: "Late",
        total_grade: "Total grade",
        student: "Student",
        status: "Status",
        add_comment: "Add comment",
        add_comment_placeholder: "Leave a comment",
        grade_with_ai: "Grade with AI",
        submit_grades: "Submit Grades",
        accept_grade: "Accept",
        reject_grade: "Reject",
        questions_tried: "Allocated this score because of total tries:",
        delete_prompt: "Delete",
        delete_error: "Failed to delete submission",
        delete_success: "Successfully deleted submission"
      }
    },
    marks: {
      title: "Marks",
      student: "Student",
      total: "Total",
      "export": {
        csv: "Export as CSV",
        pdf: "Export as PDF"
      },
      no_student: "No Student Added"
    },
    people: {
      title: "People",
      add: "Add",
      search: "Search people",
      you: "You",
      pending: "Pending",
      name: "Name",
      role: "Role",
      action: "Action",
      feedback: "Copied Email to clipboard",
      invite_modal: {
        title: "Invite people",
        invite: "Invite Tutors",
        select: "Select tutors in organization...",
        to_add: "To add tutor to your organization,",
        go_to: "go to organization settings",
        invite_students: "Invite Students",
        via_link: "You can invite students via an invite link",
        via_qr: "You can invite students via QR",
        download_qr: "Download QR code",
        qr_downloading_snackbar: "QR code generated successfully, please wait while it downloads",
        copy_link: "Copy link",
        success: "Copied Successfully",
        finish: "Finish"
      },
      delete_confirmation: {
        title: "Delete",
        sure: "Are you sure you want to delete",
        no: "No",
        yes: "Yes"
      },
      roles: {
        admin: "Admin",
        tutor: "Tutor",
        student: "Student",
        filter: "Filter"
      },
      teams: {
        add: "Add",
        add_team: "Add your team mates or collaborators to your organization. Start working together",
        invite: "Invite",
        placeholder: "email comma separated",
        role: "Role",
        send_invite: "Send Invite",
        members: "Members",
        invite_sent: "Invite Sent",
        you: "You",
        remove: "Remove"
      }
    },
    certificates: {
      title: "Certificates",
      certificate_settings: "Certificate Settings",
      theme: "Choose a theme",
      logo: "Brand Logo",
      to_update: "To update your brand image, go to",
      settings: "Settings > Organisation settings",
      and_upload: "and upload your brand logo",
      goto_settings: "Go to Settings",
      description: "Course Description",
      placeholder: "a little description about the course",
      allow: "Allow students download certificate",
      locked: "Locked",
      unlocked: "Unlocked",
      save: "Save Changes",
      unlocked_certificate: "Congrats! 🎉 your certificate is ready",
      unlocked_certificate_subtitle: "You have completed this course, and your dedication is evident. Download certificate and share with your network as a prove of your newly acquired skill",
      locked_certificate: "Certificates not available",
      instructor_unlock: "Your instructor needs to unlock your certificate.",
      contact_instructor: "If you need your certificate, please contact your instructor.",
      download_certificate: "Download Certificate",
      complete_to_download_title: "Course not complete 😔",
      complete_to_download_subtitle: "Your certificate will be available once you complete all lesson and exercises in this course",
      description_error: "Description cannot exceed 200 characters",
      characters: "characters",
      unexpected_error: "An unexpected error occurred"
    },
    landing_page: {
      editor: {
        title: {
          header: "Header",
          requirement: "Requirement",
          description: "Description",
          goals: "Goals",
          reviews: "Reviews",
          instructor: "Instructor",
          pricing: "Pricing",
          certificate: "Certificate"
        },
        save: "Save",
        page_builder: "Page Builder",
        section: "section",
        display_section: "Display section",
        header_form: {
          title: "Title",
          description: "Description",
          short_video: "Short Video",
          replace_cover: "Replace cover image",
          replace: "Replace",
          helper: "Enter a link to a youtube video"
        },
        reviews_form: {
          add_reviews: "Add Reviews",
          fullname: "Full Name",
          description: "Description",
          rating: "Rating",
          hide: "Hide Review",
          validations: {
            invalid_type_error: "Must not be empty",
            name: {
              min_char: "Name is too short, min of 5 character"
            },
            avatar_url: {
              message: "Upload an image"
            },
            rating: {
              message: "Rating must be from 1-5"
            },
            description: {
              min_char: "'Description is too short, min of 5 characters"
            }
          }
        },
        certificate_form: {
          upload_template: "Certificate template"
        },
        instructor_form: {
          upload: "Instructor Logo",
          name: "Instructor name",
          name_placeholder: "Your company name",
          role: "Instructor Role",
          about: "About Instructor",
          about_placeholder: "A short background about the instructure",
          total: "Total number of courses"
        },
        pricing_form: {
          currency: "Currency",
          cost: "Cost",
          payment: "Payment Link",
          discount: "Discount",
          no: "No",
          yes: "Yes",
          percent: "Discount Percent",
          gift: "About Gift"
        }
      },
      upload_widget: {
        title: "Banner Widget",
        width: "Images wider than 1500 pixels work best.",
        size: "The maximum size per file is 500kb.",
        submit: "Submit",
        no_images: "No images available."
      },
      pricing_section: {
        free: "Free",
        not_accepting: "This course is currently not accepting new students.",
        discount: "Discount",
        enroll: "Enroll Now",
        buy: "Buy Now",
        bird: "Early bird offer. Buy ASAP"
      },
      course_content: "Course content",
      modules: "modules",
      lessons: "lessons",
      exercises: "exercises",
      start_course: "Start Course",
      requirement: "Requirement",
      description: "Course Description",
      learn: "What you'll learn",
      certificate: "Certificate",
      certificate_text: "When you complete all of the courses in the program, you'll earn a Certificate to share with your professional network.",
      content: "Course Content",
      slide: "1 slide",
      note: "note",
      video: "video",
      reviews: "Reviews",
      see_all: "See All",
      header_video: "Header video",
      no_course_published: "No Course Published",
      coming_your_way: "We've got great courses coming your way, stay tuned!!!",
      view_less: "View Less",
      view_all: "View All",
      thank_you: "Thank you for dropping a message, we will get back to you shortly",
      name: "Your Name",
      email: "Your Email",
      phone: "Your Phone",
      message: "Your Message",
      your_message: "Your message here",
      submit: "Submit",
      successful_sub: "You have been added successfully. Thanks for subscribing.",
      enter: "Enter your email...",
      powered_by: "Powered by",
      landing_page: "Landing Page",
      explore: "Explore courses",
      find: "Find courses you will love from best teachers all over the world",
      find_course: "Find a course...",
      reviews_modal: {
        title: "Reviews",
        rating: "Rating",
        ratings: "Ratings"
      },
      instructor: "Instructor",
      courses: "courses"
    },
    settings: {
      heading: "Settings",
      cover_image: "Cover Image",
      optional_image: "This optional image will show up on your welcome page. If you include one, it should be at least 280 x 200",
      replace: "Replace",
      del: "Delete",
      course_details: "Course Details",
      course_title: "Course title",
      course_description: "Course Description",
      placeholder: "Write your course description here",
      link: "Course Link",
      grading: "Grading",
      reports: "Make grading reports available for lessons",
      disabled: "Disabled",
      enabled: "Enabled",
      order: "Order Lessons Tab",
      drag: "Drag and drop the labels to re-order your material tabs",
      lesson_download: "Lessons DownLoad",
      available: "Make the Lesson available for Download in pdf for registered students",
      course_download: "Course Downlaod",
      course_avail: "Make the Course available for Download for registered students",
      download: "Download",
      allow: "Allow New Students",
      access: "Allow new students to access this course",
      publish: "Publish Course",
      determines: "This determines if your course displays on your landing page",
      published: "Published",
      unpublished: "Unpublished",
      type: "Course type",
      course_type_desc: "Update the course type for a more personalized experience",
      live_class: "Live class",
      self_paced: "Self paced",
      "delete": "Delete Course",
      delete_text: "Delete this course,this action cannot be undone",
      save: "Save Changes"
    }
  },
  not_permitted: {
    header: "No Permission",
    body: "Unfortunately you don't have access to this course.",
    button: "Go home"
  }
};
const community = {
  title: "Community",
  ask_button: "Ask Community",
  ask: {
    go_back: "Go Back",
    ask_the: "Ask the community",
    publish: "Publish",
    title: "Title",
    select_course: "Select Course",
    ask_community: "Ask the community any question you might have",
    question: "Question",
    save: "Save",
    edit: "Edit",
    cancel: "Cancel",
    give: "Give an answer",
    comment: "Comment"
  },
  find_question: "Find Question",
  asked: "asked",
  answers: "answers",
  no_question: "No Questions asked",
  ask_a_question: "Ask a question to the community",
  "delete": {
    title: "Delete",
    question: "question",
    comment: "comment",
    sure: "Are you sure you want to delete this",
    no: "No, keep it",
    yes: "Yes, delete"
  },
  all: "All"
};
const audience = {
  title: "Audience",
  "export": "Export",
  no_audience: "No audience to manage",
  manage: "Manage all your students here and stay connected with them",
  name: "Name",
  email: "Email",
  date_joined: "Date Joined",
  upgrade: "Upgrade your plan to invite more students"
};
const upgrade = {
  certificate: "Upgrade your plan to generate certificates",
  team: "Upgrade your plan to add team members",
  domain: "Upgrade your plan to add custom domains",
  team_members: "Team members",
  back: "Back to Settings",
  download_lessons: "Upgrade to download lessons",
  download_course: "Upgrade to download course"
};
const lms_navigation = {
  home: "Home",
  my_learning: "My Learning",
  exercise: "Exercise",
  community: "Community",
  explore: "Explore",
  help: "Help",
  settings: "Settings"
};
const my_learning = {
  heading: "My Learning",
  progress: "In progress",
  complete: "Complete",
  search: "Search courses",
  not_in_progress: "No Course In progress",
  any_progress: "Any course that you start will be displayed here",
  not_completed: "No Course Completed",
  any_course: "Any course that you complete will be displayed here"
};
const exercises = {
  heading: "Exercises",
  not_submitted: "Not Submitted",
  submitted: "Submitted",
  in_progress: "Grading In Progress",
  graded: "Graded",
  lesson: "Lesson"
};
const explore = {
  heading: "Explore our courses",
  empty_heading: "No course available",
  empty_description: "There are currently no published course available"
};
const snackbar = {
  success: "Success",
  success_update: "Updated successfully",
  something: "Something went wrong - Please try later",
  update: "Update",
  poll: {
    error: {
      creating_poll: "An error occurred while creating poll",
      updating_poll: "An error occurred while updating poll status",
      submitting_poll: "An error occurred while submitting poll"
    },
    info: {
      not_published: "Poll is not published yet",
      vote_once: "You can only vote once"
    }
  },
  exercise: {
    success: "Saved Successfully",
    submission_updated: "Submission updated to",
    error_fetching: "Fetching exercises failed, please reload the page"
  },
  materials: {
    apology: "We apologise, there was an error saving your lesson.",
    update_translations: "Updating translations failed",
    creating_new: "Creating new translations failed"
  },
  newsfeed: {
    success: {
      edit: "Feed edited successfully",
      add: "New feed added successfully"
    },
    error: {
      error: "An error occurred while",
      editing: "editing feed",
      creating: "creating feed"
    }
  },
  people: {
    error: {
      missing_data: "Org data missing, please reload the page",
      no: "No current org domain"
    },
    success: {
      copied: "Copied to clipboard"
    }
  },
  course_settings: {
    success: {
      download: "Download Complete",
      saved: "Saved successfully",
      successful_integration: "Integration successful",
      successful_deletion: "Integration deleted",
      update_successful: "Update successful"
    },
    error: {
      not_right: "Something's not right - Please try later",
      went_wrong: "Something went wrong - Please try later",
      title: "title cannot be empty",
      description: "description cannot be empty",
      failed_integration: "Integration Failed, please try again later",
      failed_deletion: "Deletion Failed, please try again later"
    }
  },
  lms: {
    error: {
      username_exists: "username already exists",
      update: "Update failed:",
      try_again: "Please try again"
    }
  },
  team_members: {
    invite_sent: "Invite Sent!",
    user_exists: "User Already Exists",
    invite_fail: "Failed to send invite, please try again",
    remove_fail: "Failed to remove user, please try again"
  },
  landing_page_settings: {
    error: {
      file_size: "File Size must not be greater than 500kb",
      try_again: "Try Again",
      label: "Upload Image",
      fetch_error: "Error fetching images from Unsplash"
    },
    success: {
      complete: "Complete :)"
    }
  },
  course: {
    success: {
      comment_deleted: "Comment Deleted",
      comment_added: "Comment added",
      pinned: "Pinned",
      unpinned: "Unpinned",
      successfully: "Successfully",
      feed_delete_success: "Feed deleted successfully"
    },
    error: {
      reaction_error: "An error occurred while reacting to news feed",
      commenting_error: "An error occurred while creating comment",
      toggle_error: "Failed to toggle pinned feed",
      news_feed_fail: "Failed to fetch news feeds",
      feed_fetch_error: "An error occured while fetching feed"
    }
  },
  attendance: {
    error: {
      reload: "Something isn't right.  Please reload and take attendance again"
    }
  },
  lessons: {
    success: {
      complete_marked: "Marked as complete",
      complete_download: "Download Complete",
      version_restored: "Version restored sucessfully"
    },
    error: {
      try_later: "Something's not right - Please try later"
    }
  },
  marks: {
    error: "Error fetching marks"
  },
  submissions: {
    success: {
      grading: "Grading saved and student notified"
    }
  },
  invite: {
    failed_join: "Joining failed, please contact your admin"
  },
  community: {
    error: {
      try_again: "Error - Please try again later",
      deleting_comments: "Error deleting comments",
      deleting_question: "Error deleting question"
    },
    success: {
      comment_submitted: "Comment Submitted!",
      success_delete: "Deleted successfully",
      question_submitted: "Question Submitted!"
    }
  },
  signup: {
    disposable: "The email you provided is disposable"
  },
  upgrade: {
    generate_fail: "Failed to generate success",
    failed: "Failed, please try again later"
  },
  setup: {
    info_lesson: "You Need to Create a lesson",
    info_course: "You need to create a course"
  },
  generic: {
    success_delete: "Deleted successfully",
    try_again: "Error - Please try again later"
  }
};
const specialization = {
  course_tag: "Specialization"
};
const content = {
  heading: "Internationalization in SvelteKit",
  toggle_label: "Select Preferred Language"
};
const generic = {
  locked: "Locked",
  unlocked: "Unlocked"
};
const validations = {
  user_profile: {
    email: "Invalid email address",
    username: "Username cannot be empty",
    fullname: "Name should be minimum of 5 characters"
  },
  organization_name: {
    min_char: "Organization must contain 5 or more characters",
    hyphen_rule: "Organization name cannot start or end with a hyphen"
  },
  site_name: {
    min_char: "Site name must contain 5 or more characters",
    hyphen_rule: "Site name cannot start or end with a hyphen"
  },
  news_feed: {
    min_char: "Field must contain 5 or more characters"
  },
  lesson_schema: {
    empty_title: "Title cannot be empty"
  },
  create_quiz: {
    min_char: "Must be 6 or more characters long"
  },
  ask_community: {
    title: {
      min_char: "Must be 6 or more characters long"
    },
    body: {
      min_char: "Must be 10 or more characters long"
    },
    course_id: {
      select_course: "Select a Course"
    }
  },
  comment_in_community: {
    min_char: "Must be 6 or more characters long"
  },
  org_landing_page: {
    name: {
      min_char: "Must be 6 or more characters long"
    },
    email: {
      invalid_email: "Invalid email address"
    },
    phone: {
      min_char: "Must be 6 or more characters long"
    },
    message: {
      min_char: "Must be 10 or more characters long"
    }
  },
  forgot: {
    invalid_email: "Invalid email address"
  },
  auth: {
    email: {
      invalid_email: "Invalid email address"
    },
    password: {
      min_char: "Must be 6 or more characters long"
    }
  },
  reset: {
    password: {
      min_char: "Must be 6 or more characters long"
    }
  },
  onboarding: {
    step_one: {
      full_name: {
        min_char: "Fullname must contain 5 or more characters"
      }
    },
    step_two: {
      goal: {
        required: "Select an option"
      },
      source: {
        required: "Select an option"
      }
    }
  },
  confirm_password: {
    not_match: "Does not match password"
  },
  course_payment: {
    full_name: {
      min_char: "Must be 6 or more characters long"
    },
    email: {
      invalid_email: "Invalid email address"
    }
  },
  email: {
    not_valid: "Not valid email"
  },
  invalid_type_error: "Must not be empty"
};
const en = {
  verify_email_modal,
  delete_modal,
  onboarding,
  welcome_modal,
  login,
  profileMenu,
  settings,
  org_navigation,
  pricing,
  setup,
  add_org,
  navigation,
  markdown_editor,
  components,
  schedule,
  dashboard,
  ai,
  courses,
  course,
  community,
  audience,
  upgrade,
  lms_navigation,
  my_learning,
  exercises,
  explore,
  snackbar,
  specialization,
  content,
  generic,
  validations
};

export { add_org, ai, audience, community, components, content, course, courses, dashboard, en as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=en-c20ae70c.js.map
