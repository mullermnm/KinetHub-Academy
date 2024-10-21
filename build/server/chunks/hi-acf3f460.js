!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e864862b-6ffd-4e11-809f-d4087687ca08", e._sentryDebugIdIdentifier = "sentry-dbid-e864862b-6ffd-4e11-809f-d4087687ca08");
  } catch (e2) {
  }
}();
const content = {
  heading: "SvelteKit में अंतर्राष्ट्रीयकरण",
  toggle_label: "पसंदीदा भाषा चुनें"
};
const snackbar = {
  success: "सफलता",
  something: "कुछ गलत हो गया - कृपया बाद में प्रयास करें",
  update: "अद्यतन",
  setup: {
    info_lesson: "आपको एक पाठ बनाने की आवश्यकता है",
    info_course: "आपको एक कोर्स बनाना होगा"
  },
  upgrade: {
    generate_fail: "सफलता उत्पन्न करने में विफल",
    failed: "विफल, कृपया बाद में पुनः प्रयास करें"
  },
  signup: {
    disposable: "आपके द्वारा प्रदान किया गया ईमेल डिस्पोजेबल है"
  },
  community: {
    success: {
      comment_submitted: "टिप्पणी सबमिट की गई!",
      success_delete: "सफलतापूर्वक मिटाया गया",
      question_submitted: "प्रश्न सबमिट किया गया!"
    },
    error: {
      try_again: "त्रुटि - कृपया बाद में पुनः प्रयास करें",
      deleting_comments: "टिप्पणियाँ हटाने में त्रुटि",
      deleting_question: "प्रश्न हटाने में त्रुटि"
    }
  },
  invite: {
    failed_join: "शामिल होना विफल रहा, कृपया अपने व्यवस्थापक से संपर्क करें"
  },
  submissions: {
    success: {
      grading: "ग्रेडिंग सहेजी गई और छात्र को सूचित किया गया"
    }
  },
  marks: {
    error: "अंक लाने में त्रुटि"
  },
  lessons: {
    error: {
      try_later: "कुछ ठीक नहीं है - कृपया बाद में प्रयास करें"
    },
    success: {
      complete_marked: "पूर्ण के रूप में चिह्नित",
      complete_download: "डाउनलोड पूर्ण",
      version_restored: "संस्करण सफलतापूर्वक पुनर्स्थापित किया गया"
    }
  },
  attendance: {
    error: {
      reload: "कुछ ठीक नहीं है. कृपया पुनः लोड करें और फिर से उपस्थिति लें"
    }
  },
  course: {
    error: {
      reaction_error: "समाचार फ़ीड पर प्रतिक्रिया करते समय एक त्रुटि उत्पन्न हुई",
      commenting_error: "टिप्पणी बनाते समय एक त्रुटि उत्पन्न हुई",
      toggle_error: "पिन किए गए फ़ीड को टॉगल करने में विफल",
      news_feed_fail: "समाचार फ़ीड लाने में विफल",
      feed_fetch_error: "फ़ीड लाते समय एक त्रुटि उत्पन्न हुई"
    },
    success: {
      comment_deleted: "टिप्पणी हटा दी गई",
      comment_added: "टिप्पणी जोड़ी गई",
      pinned: "पिन की गई",
      unpinned: "अनपिन किया गया",
      successfully: "सफलतापूर्वक",
      feed_delete_success: "फ़ीड सफलतापूर्वक हटा दी गई"
    }
  },
  landing_page_settings: {
    success: {
      complete: "पूरा :)"
    },
    error: {
      file_size: "फ़ाइल का आकार 500kb से अधिक नहीं होना चाहिए",
      try_again: "पुनः प्रयास करें",
      label: "तस्विर अपलोड करना",
      fetch_error: "अनस्प्लैश से छवियाँ लाने में त्रुटि"
    }
  },
  team_members: {
    invite_sent: "आमंत्रण भेज दिया!",
    user_exists: "उपयोगकर्ता पहले से मौजूद है",
    invite_fail: "आमंत्रण भेजने में विफल, कृपया पुनः प्रयास करें",
    remove_fail: "उपयोगकर्ता को हटाने में विफल, कृपया पुनः प्रयास करें"
  },
  lms: {
    error: {
      username_exists: "उपयोगकर्ता का नाम पहले से मौजूद है",
      update: "भार बढ़ाना विफल हुवा:",
      try_again: "कृपया पुन: प्रयास करें"
    }
  },
  course_settings: {
    error: {
      not_right: "कुछ ठीक नहीं है - कृपया बाद में प्रयास करें",
      went_wrong: "कुछ गलत हो गया - कृपया बाद में प्रयास करें",
      title: "शीर्षक खाली नहीं हो सकता",
      description: "विवरण खाली नहीं हो सकता",
      failed_integration: "एकीकरण विफल, कृपया बाद में पुनः प्रयास करें",
      failed_deletion: "हटाना विफल, कृपया बाद में पुनः प्रयास करें"
    },
    success: {
      download: "डाउनलोड पूर्ण",
      saved: "सफलतापूर्वक बचाया",
      successful_integration: "एकीकरण सफल",
      successful_deletion: "एकीकरण हटा दिया गया",
      update_successful: "सफलतापूर्वक नवीनीकरण"
    }
  },
  people: {
    success: {
      copied: "क्लिपबोर्ड पर नकल"
    },
    error: {
      missing_data: "संगठन डेटा अनुपलब्ध है, कृपया पृष्ठ पुनः लोड करें",
      no: "कोई वर्तमान संगठन डोमेन नहीं"
    }
  },
  newsfeed: {
    error: {
      error: "के दौरान कोई त्रुटि उत्पन्न हुई",
      editing: "संपादन फ़ीड",
      creating: "फ़ीड बनाना"
    },
    success: {
      edit: "फ़ीड सफलतापूर्वक संपादित की गई",
      add: "नया फ़ीड सफलतापूर्वक जोड़ा गया"
    }
  },
  materials: {
    apology: "हम क्षमा चाहते हैं, आपका पाठ सहेजने में त्रुटि हुई।",
    update_translations: "अनुवाद अपडेट करना विफल रहा",
    creating_new: "नए अनुवाद बनाना विफल रहा"
  },
  exercise: {
    success: "सफलतापूर्वक बचाया",
    submission_updated: "सबमिशन को अद्यतन किया गया",
    error_fetching: "फ़ेचिंग अभ्यास विफल रहा, कृपया पृष्ठ पुनः लोड करें"
  },
  poll: {
    info: {
      not_published: "पोल अभी तक प्रकाशित नहीं हुआ है",
      vote_once: "आप केवल एक बार वोट कर सकते हैं"
    },
    error: {
      creating_poll: "पोल बनाते समय एक त्रुटि उत्पन्न हुई",
      updating_poll: "मतदान स्थिति अद्यतन करते समय एक त्रुटि उत्पन्न हुई",
      submitting_poll: "मतदान सबमिट करते समय एक त्रुटि उत्पन्न हुई"
    }
  },
  success_update: "सफलतापूर्वक अपडेट किया गया",
  generic: {
    success_delete: "सफलतापूर्वक मिटाया गया",
    try_again: "त्रुटि - कृपया बाद में पुनः प्रयास करें"
  }
};
const exercises = {
  heading: "अभ्यास",
  not_submitted: "प्रस्तुत नही किया है",
  submitted: "प्रस्तुत",
  in_progress: "ग्रेडिंग प्रगति पर है",
  graded: "ग्रेड दिया गया",
  lesson: "पाठ"
};
const my_learning = {
  heading: "मेरी सीख",
  progress: "प्रगति पर है",
  complete: "पूरा",
  search: "खोज कोर्स",
  not_in_progress: "कोई पाठ्यक्रम प्रगति पर नहीं है",
  any_progress: "आपके द्वारा शुरू किया गया कोई भी कोर्स यहां प्रदर्शित किया जाएगा",
  not_completed: "कोई कोर्स पूरा नहीं हुआ",
  any_course: "आपके द्वारा पूरा किया गया कोई भी पाठ्यक्रम यहां प्रदर्शित किया जाएगा"
};
const lms_navigation = {
  home: "घर",
  my_learning: "मेरी सीख",
  exercise: "व्यायाम",
  community: "समुदाय",
  help: "मदद",
  settings: "समायोजन",
  explore: "अन्वेषण करना"
};
const upgrade = {
  certificate: "प्रमाणपत्र बनाने की अपनी योजना को अपग्रेड करें",
  team: "टीम के सदस्यों को जोड़ने के लिए अपनी योजना को अपग्रेड करें",
  team_members: "टीम के सदस्य",
  back: "सेटिंग्स पर वापस जाएँ",
  download_lessons: "पाठ डाउनलोड करने के लिए अपग्रेड करें",
  download_course: "पाठ्यक्रम डाउनलोड करने के लिए अपग्रेड करें",
  domain: "कस्टम डोमेन जोड़ने के लिए अपनी योजना को अपग्रेड करें"
};
const audience = {
  title: "श्रोता",
  "export": "निर्यात",
  no_audience: "प्रबंधन के लिए कोई श्रोता नहीं",
  manage: "यहां अपने सभी छात्रों को प्रबंधित करें और उनके साथ जुड़े रहें",
  name: "नाम",
  email: "ईमेल",
  date_joined: "शामिल होने का दिनांक",
  upgrade: "अधिक छात्रों को आमंत्रित करने के लिए अपनी योजना को अपग्रेड करें"
};
const community = {
  title: "समुदाय",
  ask_button: "समुदाय से पूछें",
  find_question: "प्रश्न खोजें",
  asked: "पूछा",
  answers: "जवाब",
  no_question: "कोई सवाल नहीं पूछा",
  ask_a_question: "समुदाय से एक प्रश्न पूछें",
  "delete": {
    title: "मिटाना",
    question: "सवाल",
    comment: "टिप्पणी",
    sure: "क्या आप वाकई इसे हटाना चाहते हैं",
    no: "नहीं, इसे रखो",
    yes: "हाँ, हटाएँ"
  },
  ask: {
    go_back: "वापस जाओ",
    ask_the: "समुदाय से पूछें",
    publish: "प्रकाशित करना",
    title: "शीर्षक",
    select_course: "पाठ्यक्रम का चयन करें",
    ask_community: "समुदाय से कोई भी प्रश्न पूछें जो आपके पास हो",
    question: "सवाल",
    save: "बचाना",
    edit: "संपादन करना",
    cancel: "रद्द करना",
    give: "एक उत्तर दें",
    comment: "टिप्पणी"
  },
  all: "सभी"
};
const course = {
  navItem: {
    settings: {
      heading: "समायोजन",
      cover_image: "कवर छवि",
      optional_image: "यह वैकल्पिक छवि आपके स्वागत पृष्ठ पर दिखाई देगी। यदि आप एक को शामिल करते हैं, तो यह कम से कम 280 x 200 होना चाहिए",
      replace: "प्रतिस्थापित करें",
      del: "मिटाना",
      course_details: "पाठ्यक्रम विवरण",
      course_title: "पाठ्यक्रम शीर्षक",
      course_description: "पाठ्यक्रम विवरण",
      placeholder: "अपना पाठ्यक्रम विवरण यहां लिखें",
      link: "कोर्स लिंक",
      grading: "ग्रेडिंग",
      reports: "पाठों के लिए ग्रेडिंग रिपोर्ट उपलब्ध कराएं",
      disabled: "अक्षम",
      enabled: "सक्रिय",
      order: "आदेश पाठ टैब",
      drag: "अपने सामग्री टैब को पुनः क्रमित करने के लिए लेबल खींचें और छोड़ें",
      lesson_download: "पाठ डाउनलोड करें",
      available: "पंजीकृत छात्रों के लिए पाठ को पीडीएफ में डाउनलोड के लिए उपलब्ध कराएं",
      course_download: "कोर्स डाउनलोड करें",
      course_avail: "पंजीकृत छात्रों के लिए पाठ्यक्रम को डाउनलोड के लिए उपलब्ध कराएं",
      download: "डाउनलोड करें",
      allow: "नए छात्रों को अनुमति दें",
      access: "नए छात्रों को इस पाठ्यक्रम तक पहुंचने की अनुमति दें",
      publish: "पाठ्यक्रम प्रकाशित करें",
      determines: "यह निर्धारित करता है कि आपका पाठ्यक्रम आपके लैंडिंग पृष्ठ पर प्रदर्शित होता है या नहीं",
      published: "प्रकाशित",
      unpublished: "अप्रकाशित",
      "delete": "पाठ्यक्रम हटाएँ",
      delete_text: "इस कोर्स को हटा दें, इस कार्रवाई को पूर्ववत नहीं किया जा सकता",
      save: "परिवर्तनों को सुरक्षित करें",
      type: "कोर्स का प्रकार",
      course_type_desc: "अधिक वैयक्तिकृत अनुभव के लिए पाठ्यक्रम प्रकार को अपडेट करें",
      live_class: "लाइव क्लास",
      self_paced: "स्वयं गति"
    },
    landing_page: {
      start_course: "कोर्स प्रारंभ करें",
      requirement: "मांग",
      description: "पाठ्यक्रम विवरण",
      learn: "आप क्या सीखेंगे",
      certificate: "प्रमाणपत्र",
      certificate_text: "जब आप कार्यक्रम के सभी पाठ्यक्रम पूरे कर लेंगे, तो आप अपने पेशेवर नेटवर्क के साथ साझा करने के लिए एक प्रमाणपत्र अर्जित करेंगे।",
      content: "पाठ्यक्रम सामग्री",
      slide: "1 स्लाइड",
      note: "टिप्पणी",
      video: "वीडियो",
      reviews: "समीक्षा",
      see_all: "सभी देखें",
      header_video: "हेडर वीडियो",
      no_course_published: "कोई पाठ्यक्रम प्रकाशित नहीं",
      coming_your_way: "हमारे पास आपके लिए बेहतरीन पाठ्यक्रम उपलब्ध हैं, बने रहें!!!",
      view_less: "कम देखें",
      view_all: "सभी को देखें",
      thank_you: "संदेश छोड़ने के लिए धन्यवाद, हम शीघ्र ही आपसे संपर्क करेंगे",
      name: "आपका नाम",
      email: "आपका ईमेल",
      phone: "अपने फोन को",
      message: "आपका संदेश",
      your_message: "आपका सन्देश यहां",
      submit: "जमा करना",
      successful_sub: "आपको सफलतापूर्वक जोड़ दिया गया है. सब्सक्राइब करने के लिए धन्यवाद।",
      enter: "अपना ईमेल दर्ज करें...",
      powered_by: "द्वारा संचालित",
      landing_page: "लैंडिंग पृष्ठ",
      explore: "पाठ्यक्रमों का अन्वेषण करें",
      find: "दुनिया भर के सर्वश्रेष्ठ शिक्षकों से ऐसे पाठ्यक्रम ढूंढें जो आपको पसंद आएंगे",
      find_course: "एक कोर्स खोजें...",
      instructor: "प्रशिक्षक",
      courses: "पाठ्यक्रम",
      reviews_modal: {
        title: "समीक्षा",
        rating: "रेटिंग",
        ratings: "रेटिंग"
      },
      pricing_section: {
        free: "मुक्त",
        not_accepting: "यह पाठ्यक्रम वर्तमान में नए छात्रों को स्वीकार नहीं कर रहा है।",
        discount: "छूट",
        enroll: "अभी दाखिला लें",
        buy: "अभी खरीदें",
        bird: "प्रारंभिक पक्षी प्रस्ताव. यथाशीघ्र खरीदें"
      },
      upload_widget: {
        title: "बैनर विजेट",
        width: "1500 पिक्सेल से अधिक चौड़ी छवियाँ सबसे अच्छा काम करती हैं।",
        size: "प्रति फ़ाइल अधिकतम आकार 500kb है.",
        submit: "जमा करना",
        no_images: "कोई चित्र उपलब्ध नहीं."
      },
      editor: {
        save: "बचाना",
        page_builder: "पेज बिल्डर",
        section: "अनुभाग",
        pricing_form: {
          currency: "मुद्रा",
          cost: "लागत",
          payment: "भुगतान लिंक",
          discount: "छूट",
          no: "नहीं",
          yes: "हाँ",
          percent: "छूट प्रतिशत",
          gift: "उपहार के बारे में"
        },
        instructor_form: {
          upload: "प्रशिक्षक लोगो",
          name: "प्रशिक्षक का नाम",
          name_placeholder: "आपके संगठन का नाम",
          role: "प्रशिक्षक की भूमिका",
          about: "प्रशिक्षक के बारे में",
          about_placeholder: "संरचना के बारे में एक संक्षिप्त पृष्ठभूमि",
          total: "पाठ्यक्रमों की कुल संख्या"
        },
        reviews_form: {
          add_reviews: "समीक्षाएँ जोड़ें",
          fullname: "पूरा नाम",
          description: "विवरण",
          rating: "रेटिंग",
          hide: "समीक्षा छिपाएँ",
          validations: {
            invalid_type_error: "खाली नहीं होना चाहिए",
            description: {
              min_char: "'विवरण बहुत छोटा है, न्यूनतम 5 अक्षर"
            },
            rating: {
              message: "रेटिंग 1-5 तक होनी चाहिए"
            },
            avatar_url: {
              message: "एक छवि अपलोड करें"
            },
            name: {
              min_char: "नाम बहुत छोटा है, न्यूनतम 5 अक्षर है"
            }
          }
        },
        header_form: {
          title: "शीर्षक",
          description: "विवरण",
          short_video: "लघु वीडियो",
          replace_cover: "कवर छवि बदलें",
          replace: "प्रतिस्थापित करें",
          helper: "यूट्यूब वीडियो का लिंक दर्ज करें"
        },
        title: {
          header: "हैडर",
          requirement: "मांग",
          description: "विवरण",
          goals: "लक्ष्य",
          reviews: "समीक्षा",
          instructor: "प्रशिक्षक",
          pricing: "मूल्य निर्धारण",
          certificate: "प्रमाणपत्र"
        },
        display_section: "प्रदर्शन अनुभाग",
        certificate_form: {
          upload_template: "प्रमाणपत्र टेम्पलेट"
        }
      },
      course_content: "पाठ्यक्रम सामग्री",
      modules: "मॉड्यूल",
      lessons: "पाठ",
      exercises: "अभ्यास"
    },
    certificates: {
      title: "प्रमाण पत्र",
      certificate_settings: "प्रमाणपत्र सेटिंग्स",
      theme: "एक थीम चुनें",
      logo: "ब्रांड लोगो",
      to_update: "अपनी ब्रांड छवि को अद्यतन करने के लिए, पर जाएँ",
      settings: "सेटिंग्स > संगठन सेटिंग्स",
      and_upload: "और अपना ब्रांड लोगो अपलोड करें",
      goto_settings: "सेटिंग्स में जाओ",
      description: "पाठ्यक्रम विवरण",
      placeholder: "पाठ्यक्रम के बारे में थोड़ा विवरण",
      allow: "छात्रों को प्रमाणपत्र डाउनलोड करने की अनुमति दें",
      locked: "बंद",
      unlocked: "अनलॉक किया",
      save: "परिवर्तनों को सुरक्षित करें",
      locked_certificate: "प्रमाणपत्र उपलब्ध नहीं हैं",
      instructor_unlock: "आपके प्रशिक्षक को आपका प्रमाणपत्र अनलॉक करना होगा.",
      contact_instructor: "यदि आपको अपने प्रमाणपत्र की आवश्यकता है, तो कृपया अपने प्रशिक्षक से संपर्क करें।",
      download_certificate: "प्रमाणपत्र डाउनलोड करें",
      unlocked_certificate_subtitle: "आपने यह पाठ्यक्रम पूरा कर लिया है, और आपका समर्पण स्पष्ट है। प्रमाणपत्र डाउनलोड करें और अपने नए अर्जित कौशल के प्रमाण के रूप में अपने नेटवर्क के साथ साझा करें",
      unlocked_certificate: "बधाई! 🎉आपका सर्टिफिकेट तैयार है",
      complete_to_download_subtitle: "इस पाठ्यक्रम के सभी पाठ और अभ्यास पूरा करने के बाद आपका प्रमाणपत्र उपलब्ध हो जाएगा",
      complete_to_download_title: "कोर्स पूरा नहीं हुआ 😔",
      description_error: "विवरण 200 वर्णों से अधिक नहीं हो सकता",
      characters: "पात्र",
      unexpected_error: "एक अप्रत्याशित त्रुटि हुई"
    },
    people: {
      title: "लोग",
      add: "जोड़ना",
      search: "लोगों को खोजें",
      you: "आप",
      pending: "लंबित",
      name: "नाम",
      role: "भूमिका",
      action: "कार्रवाई",
      feedback: "ईमेल को क्लिपबोर्ड पर कॉपी किया गया",
      roles: {
        admin: "व्यवस्थापक",
        tutor: "कोई विषय पढ़ाना",
        student: "विद्यार्थी",
        filter: "फ़िल्टर"
      },
      delete_confirmation: {
        title: "मिटाना",
        sure: "क्या आप आश्वस्त है कि आपको डिलीट करना है",
        no: "नहीं",
        yes: "हाँ"
      },
      invite_modal: {
        title: "लोगो को निमंत्रण भेजो",
        invite: "शिक्षकों को आमंत्रित करें",
        select: "संगठन में शिक्षकों का चयन करें...",
        to_add: "अपने संगठन में ट्यूटर जोड़ने के लिए,",
        go_to: "संगठन सेटिंग पर जाएं",
        invite_students: "छात्रों को आमंत्रित करें",
        via_link: "आप आमंत्रण लिंक के माध्यम से छात्रों को आमंत्रित कर सकते हैं",
        copy_link: "लिंक की प्रतिलिपि करें",
        success: "सफलतापूर्वक कॉपी किया गया",
        finish: "खत्म करना",
        via_qr: "आप क्यूआर के माध्यम से छात्रों को आमंत्रित कर सकते हैं",
        download_qr: "क्यूआर कोड डाउनलोड करें",
        qr_downloading_snackbar: "क्यूआर कोड सफलतापूर्वक जनरेट हुआ, कृपया इसके डाउनलोड होने तक प्रतीक्षा करें"
      },
      teams: {
        add: "जोड़ना",
        add_team: "अपने टीम के साथियों या सहयोगियों को अपने संगठन में जोड़ें। एक साथ काम करना शुरू करें",
        invite: "आमंत्रित करना",
        placeholder: "ईमेल अल्पविराम से अलग किया गया",
        role: "भूमिका",
        send_invite: "आमंत्रण भेजो",
        members: "सदस्यों",
        invite_sent: "आमंत्रण भेज दिया",
        you: "आप",
        remove: "निकालना"
      }
    },
    marks: {
      title: "निशान",
      student: "विद्यार्थी",
      total: "कुल",
      no_student: "कोई छात्र नहीं जोड़ा गया",
      "export": {
        csv: "सीएसवी के रूप में निर्यात करें",
        pdf: "पीडीएफ के रूप में निर्यात करें"
      }
    },
    submissions: {
      title: "प्रस्तुत अभ्यास",
      submission_status: {
        submitted: "प्रस्तुत",
        in_progress: "प्रगति पर है",
        graded: "ग्रेड दिया गया"
      },
      grading_modal: {
        details: "विवरण",
        early: "जल्दी",
        late: "देर",
        total_grade: "कुल ग्रेड",
        student: "विद्यार्थी",
        status: "स्थिति",
        add_comment: "टिप्पणी जोड़ना",
        grade_with_ai: "एआई के साथ ग्रेड",
        submit_grades: "ग्रेड जमा करें",
        accept_grade: "स्वीकार करना",
        reject_grade: "अस्वीकार करना",
        add_comment_placeholder: "एक टिप्पणी छोड़ें",
        questions_tried: "कुल प्रयासों के कारण यह स्कोर आवंटित किया गया:",
        delete_prompt: "मिटाना",
        delete_error: "सबमिशन हटाने में विफल",
        delete_success: "सबमिशन सफलतापूर्वक हटा दिया गया"
      }
    },
    attendance: {
      title: "उपस्थिति",
      present: "उपस्थित",
      absent: "अनुपस्थित",
      search_students: "छात्र खोजें",
      student: "विद्यार्थी",
      lesson: "पाठ",
      no_student: "कोई छात्र नहीं जोड़ा गया"
    },
    lessons: {
      heading: "पाठ",
      join_lesson: "पाठ से जुड़ें",
      no_link: "कोई मेल नहीं",
      no_tutor: "कोई शिक्षक नहीं जोड़ा गया",
      body_header: "अभी तक कोई सबक नहीं",
      body_content: "आकर्षक पाठ बनाकर अपना ज्ञान दुनिया के साथ साझा करें। ऐड बटन पर क्लिक करके प्रारंभ करें।",
      download_pdf: "डाउनलोड पीडीऍफ़",
      autosaving: "स्वतः सहेजना...",
      done: "हो गया",
      edit: "संपादन करना",
      mark_as: "के रूप में मार्क करो",
      incomplete: "अधूरा",
      complete: "पूरा",
      poll: {
        voted: "मतदान किया",
        created_by: "के द्वारा बनाई गई",
        status: "स्थिति",
        draft: "मसौदा",
        publish: "प्रकाशित करना",
        expiration: "समय सीमा समाप्ति",
        total_voted: "कुल वोट",
        responses: "जवाब",
        expires: "समय-सीमा समाप्त",
        today: "आज",
        back: "पीछे",
        result: "परिणाम",
        "delete": "मिटाना",
        create_poll: "पोल बनाएं",
        question: "सवाल",
        options: "विकल्प",
        option_label: "विकल्प लेबल",
        cancel: "रद्द करना",
        poll_question: "मतदान प्रश्न"
      },
      polls: {
        title: "मतदान",
        active_polls: "सक्रिय मतदान",
        expired_polls: "समाप्त हो चुके मतदान",
        loading: "लोड हो रहा है...",
        no_polls: "प्रदर्शित करने के लिए कोई मतदान नहीं"
      },
      comments: {
        title: "टिप्पणियाँ",
        you: "आप",
        placeholder: "कुछ कहो"
      },
      exercises: {
        heading: "सभी व्यायाम",
        add_button: "जोड़ना",
        no_exercises: "इस पाठ के लिए कोई अभ्यास नहीं जोड़ा गया",
        no_assigned_exercises: "आपके शिक्षक ने इस पाठ के लिए कोई अभ्यास नहीं सौंपा है। मुख्य समय के लिए, आप कर सकते हैं",
        chill: "बड़े लड़कों के साथ आराम करो",
        add_exercise: "आकर्षक अभ्यास बनाकर अपना ज्ञान दुनिया के साथ साझा करें। अब एक व्यायाम जोड़ें.",
        all_exercises: {
          heading: "सभी व्यायाम",
          questions: "प्रशन",
          submissions: "प्रविष्टियों",
          save: "बचाना",
          preview: "पूर्व दर्शन",
          reorder: "प्रश्नों को पुनः व्यवस्थित करें",
          delete_exercise: "व्यायाम हटाएँ",
          order_questions: "प्रश्न क्रम करें",
          write_your_answer: "अपना जबाब लिखें",
          write_your_answer_here: "अपना उत्तर यहां लिखें",
          write_your_question_here: "अपना प्रश्न यहां लिखें",
          write_your_title: "अपना शीर्षक यहां लिखें",
          write_your_subtitle: "अपना उपशीर्षक यहां लिखें",
          highlight: "अपना शीर्षक हाइलाइट यहां लिखें",
          content: "अपना कंटेंट यहां लिखें",
          video: "अपना वीडियो लिंक यहां लिखें",
          link: "अपना लिंक यहां लिखें",
          label: "अपना लेबल यहां लिखें",
          email: "अपना ईमेल यहां लिखें",
          facebook: "अपना फेसबुक लिंक यहां लिखें",
          twitter: "अपना ट्विटर लिंक यहां लिखें",
          linkedin: "अपना लिंक्डइन लिंक यहां लिखें",
          number: "अपना फ़ोन नंबर यहाँ लिखें",
          previous: "पहले का",
          finish: "खत्म करना",
          next: "अगला",
          analytics: {
            submissions: "प्रविष्टियों",
            individual: {
              heading: "व्यक्ति",
              answers: "व्यक्तिगत उत्तर",
              no: "कोई उत्तर नहीं दिया गया"
            },
            summary: {
              heading: "सारांश",
              question_chart: "प्रश्न चार्ट"
            }
          },
          view_mode: {
            no_question: "इस अभ्यास के लिए कोई प्रश्न नहीं जोड़ा गया",
            edit: "संपादन करना",
            button: "जोड़ने के लिए बटन",
            questions: "प्रशन",
            points: "अंक",
            all: "सभी आवश्यक",
            due: "तक देय",
            no_description: "कोई विवरण नहीं",
            start: "शुरू",
            graded: "ग्रेड दिया गया",
            pending: "लंबित",
            submitted: "प्रस्तुत",
            status_pending: "स्थिति: समीक्षा लंबित",
            status_graded: "स्थिति: समीक्षा पूरी हुई",
            status_submitted: "स्थिति: सबमिट किया गया"
          },
          edit_mode: {
            delete_modal: "मोडल हटाएँ",
            sure: "क्या आप वाकई इस अभ्यास को हटाना चाहते हैं?",
            no: "नहीं, रद्द करें",
            yes: "हाँ, हटाएँ",
            deleting: "हटाया जा रहा है...",
            error: "आपकी कुछ त्रुटियाँ हैं",
            question: "सवाल",
            write: "अपना कोड लिखें",
            option: "विकल्प जोड़ें",
            question_types: {
              single: "एकल उत्तर",
              multiple: "एकाधिक उत्तर",
              paragraph: "अनुच्छेद"
            }
          },
          delete_confirmation: {
            title: "प्रश्न हटाएँ",
            sure: "क्या आप वाकई इस प्रश्न को हटाना चाहते हैं?",
            no: "नहीं, कृपया ऐसा न करें",
            yes: "हाँ, हटाएँ"
          },
          description: {
            title: "शीर्षक",
            heading: "विवरण",
            describe: "अपने विद्यार्थी को व्यायाम का वर्णन करें",
            no: "कोई विवरण नहीं"
          },
          no_answer: "कोई उत्तर नहीं दिया गया",
          check: "जाँच करना"
        },
        new_exercise_modal: {
          heading: "नया व्यायाम",
          how: "आप अपना व्यायाम कैसे बनाना चाहते हैं?",
          coming_soon: "जल्द आ रहा है",
          next: "अगला",
          title: "अपने व्यायाम को एक शीर्षक दें",
          title_placeholder: "व्यायाम का नाम",
          finish: "खत्म करना",
          select_template: "एक टेम्पलेट चुनें",
          questions: "प्रशन",
          points: "अंक",
          back: "पीछे",
          create_exercises: "AI के साथ नोट्स से अभ्यास बनाएं",
          choose_questions: "चुनें कि आप कितने प्रश्न और विकल्प चाहते हैं और एआई आपके नोट से एक अभ्यास बनाने में आपकी मदद करेगा। चल दर।",
          how_many_questions: "आप कितने प्रश्न बनाना चाहते हैं?",
          how_many_options: "आप प्रति प्रश्न कितने विकल्प चाहते हैं?",
          add_note: "कृपया इस सुविधा का उपयोग करने के लिए एक नोट जोड़ें",
          generate: "उत्पन्न",
          completion: "एआई जनरेशन पूर्ण",
          click_generate: "कुछ जादू के लिए 'जेनरेट' पर क्लिक करें",
          options: {
            from_scratch: "शुरूुआत से",
            from_scratch_subtitle: "यदि आपके पास पहले से ही प्रश्न तैयार हैं तो अपना अभ्यास बिल्कुल नए सिरे से बनाएं",
            use_template: "एक टेम्पलेट का प्रयोग करें",
            use_template_subtitle: "आरंभ करने में आपकी सहायता के लिए पूर्वनिर्धारित अभ्यास के 100+ टेम्पलेट्स में से चुनें",
            use_ai: "एआई का प्रयोग करें",
            use_ai_subtitle: "आप अपने नोट्स से AI के साथ एक अभ्यास तैयार कर सकते हैं"
          }
        }
      },
      materials: {
        body_heading: "इस पाठ के लिए अभी तक कोई नोट, वीडियो या स्लाइड नहीं जोड़ा गया है",
        body_content: "आकर्षक सामग्री बनाकर अपने छात्रों के साथ अपना ज्ञान साझा करें। पर क्लिक करके प्रारंभ करें",
        get_started: "शुरू हो जाओ",
        no_translation: "चयनित भाषा के लिए कोई अनुवाद नहीं",
        button: "बटन",
        button_done: "हो गया",
        tabs: {
          video: {
            title: "वीडियो",
            embed_link: "लिंक एम्बेड करें",
            upload: "डालना",
            button: "वीडियो जोड़ें/संपादित करें",
            add_video: {
              title: "एक वीडियो जोड़ें",
              add_by: "द्वारा जोड़ें",
              youtube_link: "यूट्यूब लिंक",
              videos_added: "वीडियो जोड़े गए",
              add_video: "वीडियो जोड़ें",
              upload_video: "विडियो को अॅॅपलोड करें",
              select_file: "अपने पाठ पर अपलोड करने के लिए फ़ाइल (Mp4, MOV, AVI) चुनें।",
              size: "(अधिकतम 500 एमबी)",
              oops: "उफ़ `😬, वीडियो अपलोड नहीं किया जा सका",
              big_file: "क्षमा करें हमारा वीडियो अपलोड नहीं किया गया। फ़ाइल का आकार बहुत बड़ा है,",
              maximum_size: "अधिकतम आकार 30 एमबी है. पुनः प्रयास करें!",
              button: "कोई अन्य फ़ाइल आज़माएँ",
              try_again: "कृपया पुन: प्रयास करें",
              unsupported_format: "क्षमा करें, वीडियो अपलोड नहीं किया गया, फ़ाइल प्रारूप समर्थित नहीं है या सर्वर पर कुछ गलत हो गया।",
              format: "MP4, MOV और AVI फ़ाइलें अपलोड करें।",
              upgrade: "वीडियो अपलोड करने की अपनी योजना को अपग्रेड करें",
              uploading: "अपलोड हो रहा है...",
              invalid_youtube: "अमान्य यूट्यूब लिंक",
              invalid_link: "अमान्य लिंक"
            }
          },
          slide: {
            title: "फिसलना",
            slide_link: "स्लाइड लिंक",
            helper_message: "आप Google Slides या Canva प्रेजेंटेशन को एम्बेड कर सकते हैं"
          },
          note: {
            title: "टिप्पणी",
            placeholder: "अपना पाठ नोट यहां लिखें",
            ai: {
              outline: "पाठ की रूपरेखा तैयार करें",
              note: "पाठ नोट जनरेट करें",
              activities: "पाठ गतिविधियाँ उत्पन्न करें"
            }
          }
        }
      },
      lesson_nav: {
        materials: "सामग्री",
        exercises: "अभ्यास"
      },
      add_lesson: {
        button_title: "जोड़ना",
        modal_heading: "नया पाठ जोड़ें",
        lesson_title: "पाठ का शीर्षक",
        click_to: "के लिए क्लिक करें",
        fullname: "पूरा नाम",
        save: "बचाना",
        edit: "संपादन करना",
        "delete": "मिटाना",
        lock: "ताला",
        unlock: "अनलॉक",
        start_reorder: "पुन: व्यवस्थित करें",
        end_reorder: "पुनः क्रम समाप्त करें",
        modal_heading_section: "नया अनुभाग जोड़ें",
        lesson_section_title: "अनुभाग शीर्षक",
        cancel: "रद्द करना"
      },
      disabled: "सुविधा अक्षम है",
      next: "अगला",
      prev: "पिछला",
      version_history: {
        title: "संस्करण इतिहास",
        fetch_more_versions: "अधिक संस्करण प्राप्त करें",
        current_version: "वर्तमान संस्करण",
        restore_version: "इस संस्करण को पुनर्स्थापित करें"
      },
      drag: "पुनः व्यवस्थित करने के लिए कार्ड खींचें",
      no_lesson: "अभी तक कोई सबक नहीं",
      share_your_knowledge: "आकर्षक पाठ बनाकर अपना ज्ञान दुनिया के साथ साझा करें। ऐड बटन पर क्लिक करके प्रारंभ करें।",
      heading_v2: "सामग्री",
      section_prompt: {
        cta: "अनुभाग सक्षम करें",
        header: "अनुभाग सक्षम करें",
        title: "हमने पाठ्यक्रम अनुभाग लॉन्च किए",
        description: "अब आप अपनी सामग्री को व्यवस्थित करने और अपने छात्रों के लिए सीखने को आसान बनाने के लिए पाठों को अनुभागों में समूहित कर सकते हैं।",
        activate: "सक्रिय करें",
        cancel: "रद्द करना"
      }
    },
    news_feed: {
      heading: "समाचार फ़ीड",
      body_header: "अभी तक कोई पोस्ट नहीं",
      body_content: "अपनी कक्षा के लिए एक पोस्ट बनाएं. ऐड बटन पर क्लिक करके प्रारंभ करें।",
      pinned: "पिन की गई",
      snackbar: {
        comment_deleted: "टिप्पणी हटा दी गई",
        reaction_error: "समाचार फ़ीड पर प्रतिक्रिया करते समय एक त्रुटि उत्पन्न हुई",
        comment_creation_error: "टिप्पणी बनाते समय एक त्रुटि उत्पन्न हुई",
        add_comment_success: "टिप्पणी जोड़ी गई",
        toggle_pin_error: "पिन किए गए फ़ीड को टॉगल करने में विफल",
        unpinned: "अनपिन किया गया",
        successfully: "सफलतापूर्वक",
        feed_delete_success: "फ़ीड सफलतापूर्वक हटा दी गई",
        fetch_feed_fail: "समाचार फ़ीड लाने में विफल",
        fetching_error: "फ़ीड लाते समय एक त्रुटि उत्पन्न हुई"
      },
      heading_button: {
        title: "जोड़ना",
        edit_post: "संपादित पोस्ट",
        make_a_post: "एक पोस्ट बनाएं",
        placeholder: "अपने छात्रों के साथ एक अपडेट साझा करें",
        cancel: "रद्द करना",
        post: "डाक"
      }
    }
  },
  navItems: {
    nav_news_feed: "समाचार फ़ीड",
    nav_attendance: "उपस्थिति",
    nav_submissions: "प्रविष्टियों",
    nav_marks: "निशान",
    nav_people: "लोग",
    nav_certificates: "प्रमाण पत्र",
    nav_landing_page: "लैंडिंग पृष्ठ",
    nav_settings: "समायोजन",
    nav_content: "सामग्री"
  },
  not_permitted: {
    header: "अनुमति नहीं",
    body: "दुर्भाग्य से आपके पास इस पाठ्यक्रम तक पहुंच नहीं है।",
    button: "घर जाओ"
  }
};
const courses = {
  heading: "पाठ्यक्रम",
  heading_button: "पाठ्यक्रम बनाएं",
  search_placeholder: "पाठ्यक्रम खोजें",
  new_course_modal: {
    heading: "एक कोर्स बनाएं",
    course_name: "कोर्स का नाम",
    course_name_placeholder: "आपके पाठ्यक्रम का नाम",
    short_description: "संक्षिप्त वर्णन",
    short_description_placeholder: "इस कोर्स के बारे में थोड़ा विवरण",
    button: "खत्म करना",
    type: "कोर्स का प्रकार",
    type_selector_title: "आप किस प्रकार का कोर्स देख रहे हैं?",
    back: "पीछे",
    next: "अगला"
  },
  course_card: {
    empty_title: "कोई पाठ्यक्रम नहीं बनाया गया",
    empty_description: "अपने छात्रों के लिए आकर्षक पाठ्यक्रम बनाकर अपना ज्ञान दुनिया के साथ साझा करें।",
    error_message: "एक त्रुटि पाई गई।",
    lessons_number: "पाठ",
    students: "छात्र",
    published: "प्रकाशित",
    unpublished: "अप्रकाशित",
    continue_course: "पाठ्यक्रम जारी रखें",
    list_view: {
      title: "शीर्षक",
      description: "विवरण",
      lessons: "पाठ",
      students: "छात्र",
      published: "प्रकाशित",
      type: "प्रकार"
    },
    context_menu: {
      clone: "क्लोन",
      share: "शेयर करना",
      invite: "आमंत्रित करना",
      "delete": "मिटाना"
    },
    get_course: "पाठ्यक्रम प्राप्त करें",
    learn_more: "और अधिक जानें"
  },
  course_filter: {
    date_created: "बनाया गया दिनांक",
    published: "प्रकाशित",
    lessons: "पाठ"
  }
};
const ai = {
  help_me: "मुझे लिखने में मदद करें",
  placeholder: "एक संक्षिप्त विवरण लिखने में मेरी सहायता करें",
  text: "टाइप करना शुरू करें...",
  reset: "रीसेट",
  rephrase: "इस प्रकार संशोधित",
  insert: "डालना",
  can_you: "क्या आप कृपया इसे दोबारा लिख ​​सकते हैं?",
  requirements: "कृपया इस पाठ्यक्रम को लेने के लिए आवश्यक कुछ आवश्यकताएँ लिखें:",
  description: "कृपया इस पाठ्यक्रम के लिए विस्तृत पाठ्यक्रम विवरण लिखें:",
  expectation: "एक छात्र को इस पाठ्यक्रम से क्या सीखने की उम्मीद करनी चाहिए:"
};
const dashboard = {
  morning_heading: "शुभ प्रभात",
  afternoon_heading: "शुभ दोपहर",
  evening_heading: "शुभ संध्या",
  create_course: "पाठ्यक्रम बनाएं",
  view_site: "साइट देखें",
  visit_site: "बेवसाइट देखना",
  hero_content: "आप जो करते हैं उसके लिए धन्यवाद ❤️। आप एक समय में एक कक्षा में जीवन बदल रहे हैं और आपके लिए धन्यवाद, दुनिया एक बेहतर जगह है। 😊",
  hero_button: "निर्माण करते रहें 🚀",
  your_schedule: "आपका समय - सारणी",
  today: "आज",
  yesterday: "कल",
  tomorrow: "कल",
  no_schedule: "इस दिन कोई पाठ नहीं",
  join_call: "कॉल में शामिल हों",
  click_to_join: "कॉल में शामिल होने के लिए क्लिक करें",
  no_call_link: "इस पाठ के लिए कोई कॉल लिंक नहीं जोड़ा गया था. अपने प्रशिक्षक से पूछें",
  current_lesson: "वर्तमान में सीख रहा हूँ",
  your_progress: "आपकी प्रगति",
  "continue": "जारी रखना",
  no_courses: "अभी तक कोई पाठ्यक्रम प्रगति पर नहीं है",
  start_course: "एक बार जब आप कोई कोर्स शुरू कर देंगे, तो आपकी प्रगति यहां दिखाई देगी",
  lms_dashboard_hero: "आज का दिन आपको आपके सीखने के लक्ष्यों के करीब लाने का एक और दिन है। हार मत मानो, जितना अधिक सीखोगे उतना बेहतर हो जाओगे।",
  dont: "हिम्मत मत हारो",
  lessons_completed: "पाठ पूरा हुआ",
  No_courses_started: "कोई पाठ्यक्रम शुरू नहीं हुआ"
};
const schedule = {
  title: "आपका समय - सारणी",
  essence: "डिज़ाइन सहयोग का सार",
  figma: "फिग्मा परिचय",
  join: "कॉल में शामिल हों",
  no: "इस दिन कोई पाठ नहीं"
};
const components = {
  settings: {
    domains: {
      add: "जोड़ना",
      url: "यूआरएल",
      update: "डोमेन अद्यतन करें",
      custom: "कस्टम डोमेन",
      domain: "अपना स्वयं का डोमेन नाम जोड़ें",
      title: "कस्टम डोमेन",
      save: "बचाना",
      your_domain: "आपका डोमेन",
      custom_domain_error: "आप किसी शीर्ष स्तरीय डोमेन को कस्टम डोमेन के रूप में नहीं जोड़ सकते. इसके बजाय, 'courses.[yourwebsite].com' या 'www.[yourwebsite].com' जैसे उपडोमेन का उपयोग करें।",
      custom_domain_success: "कस्टम डोमेन सफलतापूर्वक जोड़ा गया",
      dns_description: "जारी रखने के लिए अपने DNS प्रदाता पर निम्नलिखित रिकॉर्ड सेट करें:",
      dns_type: "प्रकार",
      dns_value: "कीमत",
      dns_name: "नाम",
      refresh: "ताज़ा करना",
      remove: "निकालना",
      custom_favicon: "कस्टम फ़ेविकॉन",
      custom_code: "कस्टम कोड"
    },
    "customize-lms": {
      title: "एलएमएस को अनुकूलित करें",
      disabled: "अक्षम",
      enabled: "सक्रिय",
      save: "परिवर्तनों को सुरक्षित करें",
      apps: {
        title: "ऐप्स",
        poll: "मतदान",
        live_comment: "लाइव टिप्पणियाँ"
      },
      course: {
        title: "अवधि",
        newsfeed: "समाचार फ़ीड",
        grading: "ग्रेडिंग"
      },
      dashboard: {
        title: "डैशबोर्ड",
        community: "समुदाय",
        exercises: "अभ्यास",
        banner_image: "बैनर छवि",
        banner_image_btn: "बैनर छवि अपडेट करें",
        banner_text: "बैनर पाठ",
        banner_text_label: "बैनर टेक्स्ट अपडेट करें",
        banner_text_placeholder: "यहां पाठ लिखें"
      }
    },
    customize_lms: {
      title: "एलएमएस को अनुकूलित करें",
      enabled: "सक्रिय",
      save: "परिवर्तनों को सुरक्षित करें",
      apps: {
        title: "ऐप्स",
        poll: "मतदान",
        live_comment: "लाइव टिप्पणियाँ"
      },
      course: {
        title: "अवधि",
        newsfeed: "समाचार फ़ीड",
        grading: "ग्रेडिंग"
      },
      dashboard: {
        title: "डैशबोर्ड",
        community: "समुदाय",
        exercises: "अभ्यास",
        banner_image: "बैनर छवि",
        banner_image_btn: "बैनर छवि अपडेट करें",
        banner_text: "बैनर पाठ",
        banner_text_label: "बैनर टेक्स्ट अपडेट करें",
        banner_text_placeholder: "यहां पाठ लिखें"
      },
      disabled: "अक्षम"
    }
  },
  quiz: {
    title: "प्रश्नोत्तरी",
    second: "दूसरा",
    answer: "उत्तर",
    question_delete: "प्रश्न हटाएँ",
    add_more: "+ अधिक उत्तर जोड़ें",
    remove_last: "- अंतिम उत्तर हटाएँ",
    quiz_delete: "प्रश्नोत्तरी हटाएँ",
    delete_question: "क्या आप वाकई यह प्रश्न हटाना चाहते हैं?",
    delete_quiz: "क्या आप वाकई इस प्रश्नोत्तरी को हटाना चाहते हैं?",
    lose_content: "आप अपनी सामग्री खो देंगे और यह कार्रवाई पूर्ववत नहीं की जा सकेगी.",
    "delete": "मिटाना",
    update: "अद्यतन",
    create: "बनाएं",
    a_quiz: "प्रश्न पूछने का खेल",
    quiz_title: "प्रश्नोत्तरी का शीर्षक",
    placeholder: "आपका प्रश्नोत्तरी शीर्षक",
    save: "परिवर्तन को संग्रहित करें",
    "continue": "जारी रखना",
    rename: "नाम बदलें",
    updated: "अद्यतन",
    start: "प्रश्नोत्तरी प्रारंभ करें",
    start_typing: "अपना प्रश्न टाइप करना प्रारंभ करें",
    required_field: "यह फ़ील्ड आवश्यक है",
    type_answer: "जवाब टाइप करें",
    label: "कृपया एक लेबल दर्ज करें",
    no_quizz: "कोई प्रश्नोत्तरी नहीं बनाई गई",
    interactive: "अपने छात्रों के लिए स्कोरबोर्ड के साथ इंटरैक्टिव क्विज़ बनाएं।"
  }
};
const markdown_editor = {
  write: "लिखना",
  preview: "पूर्व दर्शन"
};
const navigation = {
  goto: "जाओ",
  courses: "पाठ्यक्रम",
  home: "घर",
  classroomio_home: "क्लासरूमआईओ होम",
  dashboard: "डैशबोर्ड",
  discussion: "बहस",
  people: "लोग",
  goto_lms: "एलएमएस पर जाएं",
  goto_home: "क्लासरूमआईओ होम पर जाएं",
  login: "लॉग इन करें",
  signup: "साइन अप करें",
  redirecting: "पुन: निर्देशित",
  loading_state: "आपको अगले पृष्ठ पर ले जा रहा हूँ, कृपया प्रतीक्षा करें।",
  org_loading_state: "आपको आपके संगठन में ले जा रहा हूँ...",
  add_organization: "+ संगठन जोड़ें"
};
const add_org = {
  create_org: "संगठन बनाएं",
  name: "संगठन का नाम",
  org_sitename: "संगठन साइट का नाम",
  create: "बनाएं",
  sitename: "साइटनाम पहले से मौजूद है",
  error_organization: "इस संगठन को बनाते समय कुछ गलत हो गया. कृपया पुनः लोड करें और पुनः प्रयास करें"
};
const setup = {
  get_started: "शुरू हो जाओ",
  publish_course: {
    title: "एक पाठ्यक्रम प्रकाशित करें",
    desc: "अपने पाठ्यक्रम को सार्वजनिक और क्रय योग्य बनाएं",
    button_label: "पाठ्यक्रम प्रकाशित करें"
  },
  exercise: {
    title: "एक व्यायाम बनाएँ",
    desc: "अपने विद्यार्थियों का परीक्षण करें, जिससे उन्हें विषय वस्तु के बारे में अपनी समझ प्रदर्शित करने का अवसर मिले",
    button_label: "असाइनमेंट बनाएं"
  },
  lesson: {
    title: "एक पाठ बनाएँ",
    desc: "अपने पाठ्यक्रम को ऐसे पाठों में विभाजित करें जिन्हें आपके छात्र आसानी से समझ सकें",
    button_label: "पाठ बनाएँ"
  },
  course: {
    title: "पाठ्यक्रम बनाएं",
    desc: "एक पाठ्यक्रम बनाएं जिसे आप अपने छात्रों के साथ साझा करेंगे",
    button_label: "पाठ्यक्रम बनाएं"
  },
  organization_profile: {
    title: "संगठन प्रोफ़ाइल चित्र अपडेट करें",
    desc: "अपने संगठन के लिए एक पेशेवर और पहचानने योग्य पहचान स्थापित करें",
    button_label: "संगठन प्रोफ़ाइल अपडेट करें"
  },
  personal_profile: {
    title: "प्रोफ़ाइल चित्र अपलोड करें और उपयोगकर्ता नाम अपडेट करें",
    desc: "वैयक्तिकृत और मानवीय स्पर्श बातचीत को अधिक व्यक्तिगत और यादगार बनाता है",
    button_label: "प्रोफ़ाइल अपडेट करें"
  }
};
const pricing = {
  modal: {
    heading: "उन्नयन योजना",
    thanks: "आपके समर्थन के लिए धन्यवाद",
    plan: "आपकी योजना हमारे द्वारा जारी की जाने वाली सभी भविष्य की सुविधाओं तक पहुंच सहित शानदार सुविधाओं और लाभों के साथ आती है।",
    close: "बंद करना",
    learn: "और अधिक जानें",
    month: "महीना",
    monthly: "महीने के",
    annually: "हर साल",
    save: "2 महीने बचाएं"
  },
  plan_names: {
    free: "मुक्त",
    early: "प्रारम्भिक अनुकूलक",
    enterprise: "उद्यम"
  }
};
const org_navigation = {
  dashboard: "डैशबोर्ड",
  courses: "पाठ्यक्रम",
  community: "समुदाय",
  audience: "श्रोता",
  setup: "स्थापित करना",
  help: "मदद",
  settings: "समायोजन",
  early_adopter: "प्रारंभिक दत्तक ग्रहणकर्ता बनें",
  unlock: "असीमित सुविधाएँ अनलॉक करें और हमारे भविष्य में निवेश करें",
  upgrade: "अभी अपग्रेड करें"
};
const settings = {
  heading: "समायोजन",
  billing: {
    sub_title: "बिलिंग विवरण",
    manage: "अपनी बिलिंग प्रबंधित करें",
    active: "आपके पास कोई सक्रिय बिलिंग नहीं है",
    lemonsqueezy: "हम आपकी बिलिंग प्रबंधित करने में सहायता के लिए लेमनस्क्वीज़ी का उपयोग करते हैं",
    open_billing: "बिलिंग खोलें"
  },
  integrations: {
    heading: "तार",
    sub_heading: "एप्लिकेशन में किसी भी बदलाव की सूचना पाने के लिए अपने खाते को टेलीग्राम से कनेक्ट करें।",
    step_authenticate: "चरण 1: ClassroomIO बॉट के माध्यम से अपने खाते को प्रमाणित करें।",
    open_bot_button: "बॉट खोलें",
    step_chatId: "चरण 2: बॉट द्वारा आपको दी गई चैट आईडी दर्ज करें।",
    connect_button: "जोड़ना",
    success_message: "एकीकरण सफल",
    disconnect: "डिस्कनेक्ट"
  },
  landing_page: {
    heading: "लैंडिंग पृष्ठ",
    show_section: "अनुभाग दिखाएँ",
    hide_section: "अनुभाग छिपाएँ",
    title: "शीर्षक",
    title_highlight: "शीर्षक-हाइलाइट",
    subtitle: "उपशीर्षक",
    save_changes: "परिवर्तनों को सुरक्षित करें",
    footer: {
      heading: "फ़ुटबाल",
      show_section: "अनुभाग दिखाएँ",
      hide_section: "अनुभाग छिपाएँ",
      facebook: "फेसबुक",
      twitter: "ट्विटर",
      linkedin: "Linkedin"
    },
    mailing_list: {
      heading: "मेलिंग सूची",
      show_section: "अनुभाग दिखाएँ",
      hide_section: "अनुभाग छिपाएँ",
      title: "शीर्षक",
      subtitle: "उपशीर्षक",
      button_label: "बटन-लेबल"
    },
    contact_us: {
      heading: "संपर्क करें",
      show_section: "अनुभाग दिखाएँ",
      hide_section: "अनुभाग छिपाएँ",
      title: "शीर्षक",
      title_highlight: "शीर्षक-हाइलाइट",
      subtitle: "उपशीर्षक",
      phone_number: "फ़ोन नंबर",
      email: "ईमेल"
    },
    faq: {
      heading: "अक्सर पूछे जाने वाले प्रश्नों",
      show_section: "अनुभाग दिखाएँ",
      hide_section: "अनुभाग छिपाएँ",
      title: "शीर्षक",
      question: "सवाल",
      answer: "उत्तर",
      button: "नया FAQ जोड़ें",
      save: "बचाना",
      cancel: "रद्द करना"
    },
    courses: {
      heading: "पाठ्यक्रम",
      show_section: "अनुभाग दिखाएँ",
      hide_section: "अनुभाग छिपाएँ",
      title: "शीर्षक",
      title_highlight: "शीर्षक-हाइलाइट",
      subtitle: "उपशीर्षक"
    },
    about: {
      heading: "के बारे में",
      title: "शीर्षक",
      content: "सामग्री",
      upload_an_image: "एक छवि अपलोड करें",
      select_image: "छवि चुने"
    },
    actions: {
      heading: "कार्रवाई",
      label: "लेबल",
      link: "जोड़ना",
      no_redirect: "कोई रीडायरेक्ट नहीं",
      redirect: "पुनर्निर्देशन",
      show_banner: "बैनर दिखाओ",
      hide_banner: "बैनर छिपाएँ",
      banner_type: {
        heading: "बैनर प्रकार",
        video: "वीडियो",
        image: "छवि"
      }
    },
    background: {
      title: "पृष्ठभूमि छवि",
      show_background: "पृष्ठभूमि दिखाएँ",
      hide_background: "पृष्ठभूमि छिपाएँ"
    }
  },
  organization: {
    organization_profile: {
      heading: "संगठन प्रोफ़ाइल",
      organization_name: "संगठन का नाम",
      upload_image: "तस्विर अपलोड करना",
      update_organization: "संगठन अद्यतन करें",
      team: {
        heading: "टीम",
        body: "अपने संगठन में टीम के साथियों को जोड़ें ताकि आप दोनों परियोजनाओं पर सहयोग कर सकें।",
        button: "टीम का प्रबंधन करें",
        sub_heading: "अपनी टीम स्थापित करें"
      },
      custom_domain: {
        heading: "कस्टम डोमेन",
        sub_heading: "अपने डोमेन को अनुकूलित करें",
        body: "एक कस्टम यूआरएल बनाएं ताकि आपके दर्शक आसानी से आपके संगठन तक पहुंच सकें",
        button: "डोमेन संपादित करें"
      },
      theme: {
        heading: "विषय",
        sub_heading: "अपना ब्रांड रंग सेट करें",
        custom_theme: "कस्टम थीम",
        add_theme: "थीम जोड़ें"
      },
      customize_lms: {
        heading: "एलएमएस को अनुकूलित करें",
        sub_heading: "अपने संगठन एलएमएस को वैयक्तिकृत करें",
        button: "एलएमएस को अनुकूलित करें",
        body: "अपने विद्यार्थियों के सीखने के अनुभव को नियंत्रित करें। आप टैब और पेजों को सक्षम या अक्षम कर सकते हैं, एलएमएस बैनर और इन-ऐप टिप्पणियों को अपने संगठन की आवश्यकताओं के अनुसार अपडेट कर सकते हैं"
      }
    }
  },
  profile: {
    update_profile: "प्रोफ़ाइल अपडेट करें",
    logout: "लॉग आउट",
    personal_information: {
      heading: "व्यक्तिगत जानकारी",
      full_name: "पूरा नाम",
      username: "उपयोगकर्ता नाम",
      email: "ईमेल"
    },
    profile_picture: {
      heading: "प्रोफ़ाइल फोटो",
      upload_image: "तस्विर अपलोड करना",
      file_size: "अधिकतम फ़ाइल आकार:",
      accepted: "स्वीकृत:",
      validation_error: "फ़ाइल का आकार अधिकतम सीमा से अधिक है:"
    }
  },
  tabs: {
    profile_tab: "प्रोफ़ाइल",
    organization_tab: "संगठन",
    landing_page_tab: "लैंडिंग पृष्ठ",
    billing_tab: "बिलिंग",
    integrations_tab: "एकीकरण",
    language_tab: "भाषा"
  },
  subheadings: {
    view_site: "साइट देखें"
  }
};
const login = {
  welcome: "वापसी पर स्वागत है",
  email: "आपका ईमेल",
  password: "आपका पासवर्ड",
  forgot: "पासवर्ड भूल गए?",
  login: "लॉग इन करें"
};
const welcome_modal = {
  we_at: "हम पर",
  small_team: "भावी पीढ़ी को प्रशिक्षित करने में मदद करने के लिए शिक्षकों को बेहतरीन तकनीक से सशक्त बनाने के बड़े मिशन वाली एक छोटी सी टीम है। शिक्षा सबसे शक्तिशाली उपहार है जो आप किसी को भी दे सकते हैं, और अधिक लोगों को यह उपहार देने के लिए आपको आवश्यक सभी उपकरण देना बहुत मायने रखता है।",
  thank_you: "हमें चुनने के लिए धन्यवाद",
  deeply_appreciate: "हम इसकी गहराई से सराहना करते हैं और आपकी सेवा में हैं।"
};
const onboarding = {
  sell: "पाठ्यक्रम ऑनलाइन बेचें",
  teach: "मेरे वर्तमान छात्रों को ऑनलाइन पढ़ाएं",
  expanding: "दूसरे मंच पर, यहां विस्तार कर रहा हूं",
  explore: "बस यहाँ अन्वेषण करने के लिए",
  articles: "सामग्री",
  search: "खोज इंजन",
  social: "सामाजिक मीडिया",
  friends: "मित्रों और परिवार",
  fullname: "पूरा नाम",
  name: "संगठन का नाम",
  organisation_sitename: "संगठन साइट का नाम",
  what_brings: "आपको क्या लाता है",
  how: "आपको हमारे बारे में कैसे पता चला?",
  back: "पीछे",
  "continue": "जारी रखना",
  employees: "मेरे कर्मचारियों को प्रशिक्षित करें",
  customers: "मेरे ग्राहकों के लिए पाठ्यक्रम बनाएं"
};
const verify_email_modal = {
  heading: "अपना ईमेल सत्यापित करें",
  sent_verification: "हमने एक सत्यापन ईमेल भेजा है",
  to_confirm: "प्रदान की गई ईमेल की वैधता की पुष्टि करने के लिए।",
  loading: "लोड हो रहा है...",
  resend: "सत्यापन कोड पुनः भेजें",
  resend_in: "सत्यापन पुनः भेजें",
  seconds: "सेकंड",
  snackbar_error: "कोड भेजते समय त्रुटि"
};
const generic = {
  locked: "बंद",
  unlocked: "अनलॉक किया"
};
const specialization = {
  course_tag: "विशेषज्ञता"
};
const profileMenu = {
  profile: "प्रोफ़ाइल",
  current_org: "वर्तमान संघ",
  free_tools: "मुफ़्त उपकरण",
  progress: "प्रगति रिपोर्ट",
  timer: "गतिविधि टाइमर",
  tic_tac: "टिक टीएसी को पैर की अंगुली",
  see_more: "और देखें",
  whats_new: "नया क्या है",
  launch_week: "लॉन्च सप्ताह"
};
const validations = {
  invalid_type_error: "खाली नहीं होना चाहिए",
  email: {
    not_valid: "वैध ईमेल नहीं"
  },
  course_payment: {
    email: {
      invalid_email: "अमान्य ईमेल पता"
    },
    full_name: {
      min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
    }
  },
  confirm_password: {
    not_match: "पासवर्ड से मेल नहीं खाता"
  },
  onboarding: {
    step_two: {
      source: {
        required: "कोई विकल्प चुनें"
      },
      goal: {
        required: "कोई विकल्प चुनें"
      }
    },
    step_one: {
      full_name: {
        min_char: "पूरे नाम में 5 या अधिक अक्षर होने चाहिए"
      }
    }
  },
  reset: {
    password: {
      min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
    }
  },
  auth: {
    password: {
      min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
    },
    email: {
      invalid_email: "अमान्य ईमेल पता"
    }
  },
  forgot: {
    invalid_email: "अमान्य ईमेल पता"
  },
  org_landing_page: {
    message: {
      min_char: "10 या अधिक अक्षर लंबा होना चाहिए"
    },
    phone: {
      min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
    },
    email: {
      invalid_email: "अमान्य ईमेल पता"
    },
    name: {
      min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
    }
  },
  comment_in_community: {
    min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
  },
  ask_community: {
    course_id: {
      select_course: "एक कोर्स चुनें"
    },
    body: {
      min_char: "10 या अधिक अक्षर लंबा होना चाहिए"
    },
    title: {
      min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
    }
  },
  create_quiz: {
    min_char: "6 या अधिक अक्षर लंबा होना चाहिए"
  },
  lesson_schema: {
    empty_title: "शीर्षक खाली नहीं हो सकता"
  },
  news_feed: {
    min_char: "फ़ील्ड में 5 या अधिक वर्ण होने चाहिए"
  },
  site_name: {
    min_char: "साइट नाम में 5 या अधिक अक्षर होने चाहिए",
    hyphen_rule: "साइट का नाम किसी हाइफ़न से प्रारंभ या समाप्त नहीं हो सकता"
  },
  organization_name: {
    min_char: "संगठन में 5 या अधिक वर्ण होने चाहिए",
    hyphen_rule: "संगठन का नाम हाइफ़न से प्रारंभ या समाप्त नहीं हो सकता"
  },
  user_profile: {
    email: "अमान्य ईमेल पता",
    username: "उपयोक्तानाम खाली नहीं हो सकता",
    fullname: "नाम कम से कम 5 अक्षर का होना चाहिए"
  }
};
const explore = {
  empty_heading: "कोई पाठ्यक्रम उपलब्ध नहीं है",
  empty_description: "वर्तमान में कोई प्रकाशित पाठ्यक्रम उपलब्ध नहीं है",
  heading: "हमारे पाठ्यक्रमों का अन्वेषण करें"
};
const delete_modal = {
  label: "मिटाना",
  content: "क्या आपको यकीन है?",
  no: "नहीं",
  yes: "हाँ"
};
const hi = {
  content,
  snackbar,
  exercises,
  my_learning,
  lms_navigation,
  upgrade,
  audience,
  community,
  course,
  courses,
  ai,
  dashboard,
  schedule,
  components,
  markdown_editor,
  navigation,
  add_org,
  setup,
  pricing,
  org_navigation,
  settings,
  login,
  welcome_modal,
  onboarding,
  verify_email_modal,
  generic,
  specialization,
  profileMenu,
  validations,
  explore,
  delete_modal
};

export { add_org, ai, audience, community, components, content, course, courses, dashboard, hi as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=hi-acf3f460.js.map
