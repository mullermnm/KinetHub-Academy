!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "92692b1e-1896-4888-9237-8cfdd6a7766d", e._sentryDebugIdIdentifier = "sentry-dbid-92692b1e-1896-4888-9237-8cfdd6a7766d");
  } catch (e2) {
  }
}();
const content = {
  heading: "Quốc tế hóa trong SvelteKit",
  toggle_label: "Chọn ngôn ngữ ưa thích"
};
const snackbar = {
  success: "Thành công",
  something: "Đã xảy ra lỗi - Vui lòng thử lại sau",
  update: "Cập nhật",
  setup: {
    info_lesson: "Bạn cần tạo một bài học",
    info_course: "Bạn cần tạo một khóa học"
  },
  upgrade: {
    generate_fail: "Không tạo được thành công",
    failed: "Không thành công, vui lòng thử lại sau"
  },
  signup: {
    disposable: "Email bạn cung cấp chỉ dùng một lần"
  },
  community: {
    success: {
      comment_submitted: "Đã gửi bình luận!",
      success_delete: "Đã xoá thành công",
      question_submitted: "Câu hỏi đã được gửi!"
    },
    error: {
      try_again: "Lỗi - Vui lòng thử lại sau",
      deleting_comments: "Lỗi xóa bình luận",
      deleting_question: "Lỗi xóa câu hỏi"
    }
  },
  invite: {
    failed_join: "Tham gia không thành công, vui lòng liên hệ với quản trị viên của bạn"
  },
  submissions: {
    success: {
      grading: "Đã lưu điểm và thông báo cho học viên"
    }
  },
  marks: {
    error: "Lỗi khi lấy điểm"
  },
  lessons: {
    error: {
      try_later: "Đã xảy ra sự cố - Vui lòng thử lại sau"
    },
    success: {
      complete_marked: "Được đánh dấu là hoàn thành",
      complete_download: "Hoan thanh tải",
      version_restored: "Đã khôi phục phiên bản thành công"
    }
  },
  attendance: {
    error: {
      reload: "Có gì đó không ổn. Vui lòng tải lại và điểm danh lại"
    }
  },
  course: {
    error: {
      reaction_error: "Đã xảy ra lỗi khi phản hồi với nguồn cấp tin tức",
      commenting_error: "Đã xảy ra lỗi khi tạo bình luận",
      toggle_error: "Không thể chuyển đổi nguồn cấp dữ liệu được ghim",
      news_feed_fail: "Không tìm nạp được nguồn cấp tin tức",
      feed_fetch_error: "Đã xảy ra lỗi khi tìm nạp nguồn cấp dữ liệu"
    },
    success: {
      comment_deleted: "Bình luận đã bị xóa",
      comment_added: "Đã thêm nhận xét",
      pinned: "Đã ghim",
      unpinned: "Đã bỏ ghim",
      successfully: "thành công",
      feed_delete_success: "Đã xóa nguồn cấp dữ liệu thành công"
    }
  },
  landing_page_settings: {
    success: {
      complete: "Hoàn thành :)"
    },
    error: {
      file_size: "Kích thước tệp không được lớn hơn 500kb",
      try_again: "Thử lại",
      label: "Tải hình ảnh lên",
      fetch_error: "Lỗi tìm nạp hình ảnh từ Unsplash"
    }
  },
  team_members: {
    invite_sent: "Đã gửi lời mời!",
    user_exists: "Người dùng đã tồn tại",
    invite_fail: "Không gửi được lời mời, vui lòng thử lại",
    remove_fail: "Không xóa được người dùng, vui lòng thử lại"
  },
  lms: {
    error: {
      username_exists: "tên này đã có người dùng",
      update: "Cập nhật không thành công:",
      try_again: "Vui lòng thử lại"
    }
  },
  course_settings: {
    error: {
      not_right: "Đã xảy ra sự cố - Vui lòng thử lại sau",
      went_wrong: "Đã xảy ra lỗi - Vui lòng thử lại sau",
      title: "tiêu đề không được để trống",
      description: "mô tả không được để trống",
      failed_integration: "Tích hợp không thành công, vui lòng thử lại sau",
      failed_deletion: "Xóa không thành công, vui lòng thử lại sau"
    },
    success: {
      download: "Hoan thanh tải",
      saved: "đã lưu thành công",
      successful_integration: "Tích hợp thành công",
      successful_deletion: "Đã xóa tích hợp",
      update_successful: "Cập nhật thành công"
    }
  },
  people: {
    success: {
      copied: "Sao chép vào clipboard"
    },
    error: {
      missing_data: "Thiếu dữ liệu tổ chức, vui lòng tải lại trang",
      no: "Không có miền tổ chức hiện tại"
    }
  },
  newsfeed: {
    error: {
      error: "Đã xảy ra lỗi khi",
      editing: "chỉnh sửa nguồn cấp dữ liệu",
      creating: "tạo nguồn cấp dữ liệu"
    },
    success: {
      edit: "Đã chỉnh sửa nguồn cấp dữ liệu thành công",
      add: "Đã thêm nguồn cấp dữ liệu mới thành công"
    }
  },
  materials: {
    apology: "Chúng tôi xin lỗi, đã xảy ra lỗi khi lưu bài học của bạn.",
    update_translations: "Cập nhật bản dịch không thành công",
    creating_new: "Tạo bản dịch mới không thành công"
  },
  exercise: {
    success: "Đã lưu thành công",
    submission_updated: "Đã cập nhật bài nộp vào",
    error_fetching: "Tìm nạp bài tập không thành công, vui lòng tải lại trang"
  },
  poll: {
    info: {
      not_published: "Cuộc thăm dò chưa được công bố",
      vote_once: "Bạn chỉ có thể bỏ phiếu một lần"
    },
    error: {
      creating_poll: "Đã xảy ra lỗi khi tạo cuộc thăm dò ý kiến",
      updating_poll: "Đã xảy ra lỗi khi cập nhật trạng thái cuộc thăm dò ý kiến",
      submitting_poll: "Đã xảy ra lỗi khi gửi cuộc thăm dò ý kiến"
    }
  },
  success_update: "Cập nhật thành công",
  generic: {
    success_delete: "Đã xoá thành công",
    try_again: "Lỗi - Vui lòng thử lại sau"
  }
};
const exercises = {
  heading: "Bài tập",
  not_submitted: "Chưa gửi",
  submitted: "Đã gửi",
  in_progress: "Đang tiến hành chấm điểm",
  graded: "Đã chấm điểm",
  lesson: "Bài học"
};
const my_learning = {
  heading: "Việc học của tôi",
  progress: "Trong tiến trình",
  complete: "Hoàn thành",
  search: "Tìm kiếm khóa học",
  not_in_progress: "Không có khóa học nào đang diễn ra",
  any_progress: "Bất kỳ khóa học nào bạn bắt đầu sẽ được hiển thị ở đây",
  not_completed: "Không có khóa học nào hoàn thành",
  any_course: "Bất kỳ khóa học nào bạn hoàn thành sẽ được hiển thị ở đây"
};
const lms_navigation = {
  home: "Trang chủ",
  my_learning: "Việc học của tôi",
  exercise: "Bài tập",
  community: "Cộng đồng",
  help: "Giúp đỡ",
  settings: "Cài đặt",
  explore: "Khám phá"
};
const upgrade = {
  certificate: "Nâng cấp gói của bạn để tạo chứng chỉ",
  team: "Nâng cấp kế hoạch của bạn để thêm thành viên nhóm",
  team_members: "Thành viên của nhóm",
  back: "Quay lại Cài đặt",
  download_lessons: "Nâng cấp để tải bài học",
  download_course: "Nâng cấp để tải xuống khóa học",
  domain: "Nâng cấp gói của bạn để thêm miền tùy chỉnh"
};
const audience = {
  title: "Khán giả",
  "export": "Xuất khẩu",
  no_audience: "Không có khán giả để quản lý",
  manage: "Quản lý tất cả sinh viên của bạn ở đây và duy trì kết nối với họ",
  name: "Tên",
  email: "E-mail",
  date_joined: "Ngày tham gia",
  upgrade: "Nâng cấp kế hoạch của bạn để mời thêm sinh viên"
};
const community = {
  title: "Cộng đồng",
  ask_button: "Hỏi cộng đồng",
  find_question: "Tìm câu hỏi",
  asked: "yêu cầu",
  answers: "câu trả lời",
  no_question: "Không có câu hỏi nào được hỏi",
  ask_a_question: "Đặt câu hỏi cho cộng đồng",
  "delete": {
    title: "Xóa bỏ",
    question: "câu hỏi",
    comment: "bình luận",
    sure: "Bạn có chắc chắn muốn xóa cái này không",
    no: "Không, giữ nó",
    yes: "Có, xóa"
  },
  ask: {
    go_back: "Quay lại",
    ask_the: "Hỏi cộng đồng",
    publish: "Công bố",
    title: "Tiêu đề",
    select_course: "Chọn khóa học",
    ask_community: "Hỏi cộng đồng bất kỳ câu hỏi nào bạn có thể có",
    question: "Câu hỏi",
    save: "Cứu",
    edit: "Biên tập",
    cancel: "Hủy bỏ",
    give: "Đưa ra một câu trả lời",
    comment: "Bình luận"
  },
  all: "Tất cả"
};
const course = {
  navItem: {
    settings: {
      heading: "Cài đặt",
      cover_image: "Ảnh bìa",
      optional_image: "Hình ảnh tùy chọn này sẽ hiển thị trên trang chào mừng của bạn. Nếu bạn bao gồm một cái, nó phải có kích thước tối thiểu là 280 x 200",
      replace: "Thay thế",
      del: "Xóa bỏ",
      course_details: "chi tiết khóa học",
      course_title: "Tên khóa học",
      course_description: "Mô tả khóa học",
      placeholder: "Viết mô tả khóa học của bạn ở đây",
      link: "Liên kết khóa học",
      grading: "Chấm điểm",
      reports: "Cung cấp báo cáo chấm điểm cho bài học",
      disabled: "Tàn tật",
      enabled: "Đã bật",
      order: "Đặt hàng tab bài học",
      drag: "Kéo và thả nhãn để sắp xếp lại các tab tài liệu của bạn",
      lesson_download: "Bài học Tải về",
      available: "Cung cấp Bài học để tải xuống dưới dạng pdf cho học viên đã đăng ký",
      course_download: "Tải xuống khóa học",
      course_avail: "Cung cấp Khóa học để tải xuống cho sinh viên đã đăng ký",
      download: "Tải xuống",
      allow: "Cho phép sinh viên mới",
      access: "Cho phép sinh viên mới truy cập khóa học này",
      publish: "Xuất bản khóa học",
      determines: "Điều này xác định xem khóa học của bạn có hiển thị trên trang đích hay không",
      published: "Được phát hành",
      unpublished: "Chưa được xuất bản",
      "delete": "Xóa khóa học",
      delete_text: "Xóa khóa học này, hành động này không thể hoàn tác",
      save: "Lưu thay đổi",
      type: "Loại khóa học",
      course_type_desc: "Cập nhật loại khóa học để có trải nghiệm cá nhân hóa hơn",
      live_class: "Lớp học trực tiếp",
      self_paced: "Tự nhịp độ"
    },
    landing_page: {
      start_course: "Bắt đầu khóa học",
      requirement: "Yêu cầu",
      description: "Mô tả khóa học",
      learn: "Bạn sẽ học được gì",
      certificate: "Giấy chứng nhận",
      certificate_text: "Khi hoàn thành tất cả các khóa học trong chương trình, bạn sẽ nhận được Chứng chỉ để chia sẻ với mạng lưới chuyên nghiệp của mình.",
      content: "Nội dung khóa học",
      slide: "1 slide",
      note: "ghi chú",
      video: "băng hình",
      reviews: "Đánh giá",
      see_all: "Nhìn thấy tất cả",
      header_video: "Video tiêu đề",
      no_course_published: "Không có khóa học nào được xuất bản",
      coming_your_way: "Chúng tôi có những khóa học tuyệt vời sắp tới dành cho bạn, hãy chú ý theo dõi nhé!!!",
      view_less: "Xem ít hơn",
      view_all: "Xem tất cả",
      thank_you: "Cảm ơn bạn đã gửi tin nhắn, chúng tôi sẽ liên hệ lại với bạn ngay",
      name: "Tên của bạn",
      email: "Email của bạn",
      phone: "Điện thoại của bạn",
      message: "Tin nhắn của bạn",
      your_message: "Tin nhắn của bạn ở đây",
      submit: "Nộp",
      successful_sub: "Bạn đã được thêm thành công. Cảm ơn đã đăng kí.",
      enter: "Nhập email của bạn...",
      powered_by: "Được cung cấp bởi",
      landing_page: "Trang đích",
      explore: "Khám phá các khóa học",
      find: "Tìm các khóa học bạn sẽ yêu thích từ những giáo viên giỏi nhất trên toàn thế giới",
      find_course: "Tìm một khóa học...",
      instructor: "Người hướng dẫn",
      courses: "các khóa học",
      reviews_modal: {
        title: "Đánh giá",
        rating: "Xếp hạng",
        ratings: "Xếp hạng"
      },
      pricing_section: {
        free: "Miễn phí",
        not_accepting: "Khóa học này hiện không nhận học viên mới.",
        discount: "Giảm giá",
        enroll: "Đăng ký ngay",
        buy: "Mua ngay",
        bird: "Ưu đãi chim sớm. Mua càng sớm càng tốt"
      },
      upload_widget: {
        title: "Tiện ích biểu ngữ",
        width: "Hình ảnh rộng hơn 1500 pixel hoạt động tốt nhất.",
        size: "Kích thước tối đa cho mỗi tập tin là 500kb.",
        submit: "Nộp",
        no_images: "Không có hình ảnh có sẵn."
      },
      editor: {
        save: "Cứu",
        page_builder: "Trình tạo trang",
        section: "phần",
        pricing_form: {
          currency: "Tiền tệ",
          cost: "Trị giá",
          payment: "Liên kết thanh toán",
          discount: "Giảm giá",
          no: "KHÔNG",
          yes: "Đúng",
          percent: "Phần trăm chiết khấu",
          gift: "Về quà tặng"
        },
        instructor_form: {
          upload: "Logo giảng viên",
          name: "Tên giảng viên",
          name_placeholder: "Tên công ty của bạn",
          role: "Vai trò của người hướng dẫn",
          about: "Giới thiệu về người hướng dẫn",
          about_placeholder: "Sơ lược về hướng dẫn",
          total: "Tổng số khóa học"
        },
        reviews_form: {
          add_reviews: "Thêm đánh giá",
          fullname: "Họ và tên",
          description: "Sự miêu tả",
          rating: "Xếp hạng",
          hide: "Ẩn đánh giá",
          validations: {
            invalid_type_error: "Không được để trống",
            description: {
              min_char: "'Mô tả quá ngắn, tối thiểu 5 ký tự"
            },
            rating: {
              message: "Đánh giá phải từ 1-5"
            },
            avatar_url: {
              message: "Tải lên một hình ảnh"
            },
            name: {
              min_char: "Tên quá ngắn, tối thiểu 5 ký tự"
            }
          }
        },
        header_form: {
          title: "Tiêu đề",
          description: "Sự miêu tả",
          short_video: "Video ngắn",
          replace_cover: "Thay thế ảnh bìa",
          replace: "Thay thế",
          helper: "Nhập liên kết tới video youtube"
        },
        title: {
          header: "tiêu đề",
          requirement: "Yêu cầu",
          description: "Sự miêu tả",
          goals: "Bàn thắng",
          reviews: "Đánh giá",
          instructor: "Người hướng dẫn",
          pricing: "Định giá",
          certificate: "Giấy chứng nhận"
        },
        display_section: "Phần hiển thị",
        certificate_form: {
          upload_template: "Mẫu chứng chỉ"
        }
      },
      course_content: "Nội dung khóa học",
      modules: "mô-đun",
      lessons: "bài học",
      exercises: "bài tập"
    },
    certificates: {
      title: "Chứng chỉ",
      certificate_settings: "Cài đặt chứng chỉ",
      theme: "Chọn một chủ đề",
      logo: "Biểu tượng thương hiệu",
      to_update: "Để cập nhật hình ảnh thương hiệu của bạn, hãy truy cập",
      settings: "Cài đặt > Cài đặt tổ chức",
      and_upload: "và tải lên logo thương hiệu của bạn",
      goto_settings: "Đi tới Cài đặt",
      description: "Mô tả khóa học",
      placeholder: "một chút mô tả về khóa học",
      allow: "Cho phép sinh viên tải xuống chứng chỉ",
      locked: "Đã khóa",
      unlocked: "Đã mở khóa",
      save: "Lưu thay đổi",
      locked_certificate: "Chứng chỉ không có sẵn",
      instructor_unlock: "Người hướng dẫn của bạn cần mở khóa chứng chỉ của bạn.",
      contact_instructor: "Nếu bạn cần chứng chỉ của mình, vui lòng liên hệ với người hướng dẫn của bạn.",
      download_certificate: "Tải xuống chứng chỉ",
      unlocked_certificate: "Chúc mừng! 🎉 chứng chỉ của bạn đã sẵn sàng",
      unlocked_certificate_subtitle: "Bạn đã hoàn thành khóa học này và sự cống hiến của bạn là điều hiển nhiên. Tải xuống chứng chỉ và chia sẻ với mạng của bạn như một bằng chứng về kỹ năng mới có được của bạn",
      complete_to_download_subtitle: "Chứng chỉ của bạn sẽ có sau khi bạn hoàn thành tất cả bài học và bài tập trong khóa học này",
      complete_to_download_title: "Khóa học chưa hoàn thành 😔",
      description_error: "Mô tả không thể vượt quá 200 ký tự",
      characters: "nhân vật",
      unexpected_error: "Đã xảy ra lỗi không mong muốn"
    },
    people: {
      title: "Mọi người",
      add: "Thêm vào",
      search: "Tìm kiếm mọi người",
      you: "Bạn",
      pending: "Chưa giải quyết",
      name: "Tên",
      role: "Vai trò",
      action: "Hoạt động",
      feedback: "Đã sao chép email vào clipboard",
      roles: {
        admin: "Quản trị viên",
        tutor: "Gia sư",
        student: "Học sinh",
        filter: "Lọc"
      },
      delete_confirmation: {
        title: "Xóa bỏ",
        sure: "Bạn có chắc chắn muốn xóa",
        no: "KHÔNG",
        yes: "Đúng"
      },
      invite_modal: {
        title: "Mời mọi người",
        invite: "Mời gia sư",
        select: "Lựa chọn gia sư trong tổ chức...",
        to_add: "Để thêm gia sư vào tổ chức của bạn,",
        go_to: "đi tới cài đặt tổ chức",
        invite_students: "Mời sinh viên",
        via_link: "Bạn có thể mời sinh viên thông qua liên kết mời",
        copy_link: "Sao chép đường dẫn",
        success: "Đã sao chép thành công",
        finish: "Hoàn thành",
        via_qr: "Bạn có thể mời sinh viên qua QR",
        download_qr: "Tải xuống mã QR",
        qr_downloading_snackbar: "Mã QR được tạo thành công, vui lòng đợi trong khi tải xuống"
      },
      teams: {
        add: "Thêm vào",
        add_team: "Thêm đồng đội hoặc cộng tác viên vào tổ chức của bạn. Bắt đầu làm việc cùng nhau",
        invite: "Mời",
        placeholder: "email được phân tách bằng dấu phẩy",
        role: "Vai trò",
        send_invite: "Gửi lời mời",
        members: "Các thành viên",
        invite_sent: "Lời mời đã gửi",
        you: "Bạn",
        remove: "Di dời"
      }
    },
    marks: {
      title: "Điểm",
      student: "Học sinh",
      total: "Tổng cộng",
      no_student: "Không có sinh viên nào được thêm vào",
      "export": {
        csv: "Xuất dưới dạng CSV",
        pdf: "Xuất dưới dạng PDF"
      }
    },
    submissions: {
      title: "Bài tập đã gửi",
      submission_status: {
        submitted: "Đã gửi",
        in_progress: "Trong tiến trình",
        graded: "Đã chấm điểm"
      },
      grading_modal: {
        details: "Chi tiết",
        early: "Sớm",
        late: "Muộn",
        total_grade: "Tổng điểm",
        student: "Học sinh",
        status: "Trạng thái",
        add_comment: "Thêm bình luận",
        grade_with_ai: "Chấm điểm bằng AI",
        submit_grades: "Gửi điểm",
        accept_grade: "Chấp nhận",
        reject_grade: "Từ chối",
        add_comment_placeholder: "Để lại một bình luận",
        questions_tried: "Phân bổ số điểm này dựa trên tổng số lần thử:",
        delete_prompt: "Xóa bỏ",
        delete_error: "Không thể xóa bài nộp",
        delete_success: "Đã xóa bài nộp thành công"
      }
    },
    attendance: {
      title: "Sự tham dự",
      present: "Hiện tại",
      absent: "Vắng mặt",
      search_students: "Tìm kiếm sinh viên",
      student: "Học sinh",
      lesson: "Bài học",
      no_student: "Không có sinh viên nào được thêm vào"
    },
    lessons: {
      heading: "Những bài học",
      join_lesson: "Tham gia bài học",
      no_link: "Không có liên kết",
      no_tutor: "Không có gia sư nào được thêm vào",
      body_header: "Chưa có bài học nào",
      body_content: "Chia sẻ kiến ​​thức của bạn với thế giới bằng cách tạo ra những bài học hấp dẫn. Bắt đầu bằng cách nhấp vào nút Thêm.",
      download_pdf: "tải PDF",
      autosaving: "Tự động tiết kiệm...",
      done: "Xong",
      edit: "Biên tập",
      mark_as: "Đánh dấu là",
      incomplete: "chưa hoàn thiện",
      complete: "Hoàn thành",
      poll: {
        voted: "Đã bình chọn",
        created_by: "Được tạo bởi",
        status: "Trạng thái",
        draft: "Bản nháp",
        publish: "Công bố",
        expiration: "Hết hạn",
        total_voted: "Tổng số phiếu bầu",
        responses: "Phản hồi",
        expires: "Hết hạn",
        today: "Hôm nay",
        back: "Mặt sau",
        result: "Kết quả",
        "delete": "Xóa bỏ",
        create_poll: "Tạo cuộc thăm dò",
        question: "Câu hỏi",
        options: "Tùy chọn",
        option_label: "Nhãn tùy chọn",
        cancel: "Hủy bỏ",
        poll_question: "Câu hỏi thăm dò ý kiến"
      },
      polls: {
        title: "Thăm dò ý kiến",
        active_polls: "Cuộc thăm dò đang hoạt động",
        expired_polls: "Cuộc thăm dò đã hết hạn",
        loading: "Đang tải...",
        no_polls: "Không có cuộc thăm dò nào để hiển thị"
      },
      comments: {
        title: "Bình luận",
        you: "Bạn",
        placeholder: "Nói gì đó đi"
      },
      exercises: {
        heading: "Tất cả các bài tập",
        add_button: "Thêm vào",
        no_exercises: "Không có bài tập nào được thêm vào cho bài học này",
        no_assigned_exercises: "Gia sư của bạn chưa giao bất kỳ bài tập nào cho bài học này. Trong thời gian chính, bạn có thể",
        chill: "thư giãn với các chàng trai lớn",
        add_exercise: "Chia sẻ kiến ​​thức của bạn với thế giới bằng cách tạo ra các bài tập hấp dẫn. Thêm một bài tập bây giờ.",
        all_exercises: {
          heading: "Tất cả bài tập",
          questions: "Câu hỏi",
          submissions: "bài nộp",
          save: "Cứu",
          preview: "Xem trước",
          reorder: "Sắp xếp lại câu hỏi",
          delete_exercise: "Xóa bài tập",
          order_questions: "Đặt câu hỏi",
          write_your_answer: "Viết câu trả lời của bạn",
          write_your_answer_here: "Viết câu trả lời của bạn ở đây",
          write_your_question_here: "Viết câu hỏi của bạn ở đây",
          write_your_title: "Viết tiêu đề của bạn ở đây",
          write_your_subtitle: "Viết phụ đề của bạn ở đây",
          highlight: "Viết tiêu đề nổi bật của bạn ở đây",
          content: "Viết nội dung của bạn ở đây",
          video: "Viết liên kết video của bạn ở đây",
          link: "Viết liên kết của bạn ở đây",
          label: "Viết nhãn của bạn ở đây",
          email: "Viết email của bạn ở đây",
          facebook: "Viết liên kết Facebook của bạn ở đây",
          twitter: "Viết liên kết Twitter của bạn ở đây",
          linkedin: "Viết liên kết LinkedIn của bạn ở đây",
          number: "Viết số điện thoại của bạn vào đây",
          previous: "Trước",
          finish: "Hoàn thành",
          next: "Kế tiếp",
          analytics: {
            submissions: "bài nộp",
            individual: {
              heading: "Cá nhân",
              answers: "Câu trả lời cá nhân",
              no: "Không có câu trả lời nào được đưa ra"
            },
            summary: {
              heading: "Bản tóm tắt",
              question_chart: "Biểu đồ câu hỏi"
            }
          },
          view_mode: {
            no_question: "Không có câu hỏi nào được thêm vào cho bài tập này",
            edit: "Biên tập",
            button: "nút để thêm",
            questions: "câu hỏi",
            points: "điểm",
            all: "Tất cả được yêu cầu",
            due: "Do bởi",
            no_description: "Không có mô tả",
            start: "Bắt đầu",
            graded: "Đã chấm điểm",
            pending: "Chưa giải quyết",
            submitted: "Đã gửi",
            status_pending: "Trạng thái: Đang chờ xem xét",
            status_graded: "Trạng thái: Đánh giá đã hoàn thành",
            status_submitted: "Trạng thái: Đã gửi"
          },
          edit_mode: {
            delete_modal: "Xóa phương thức",
            sure: "Bạn có chắc chắn muốn xóa bài tập này không?",
            no: "Không, hủy",
            yes: "Có, xóa",
            deleting: "Đang xóa...",
            error: "Bạn có một số lỗi",
            question: "Câu hỏi",
            write: "Viết mã của bạn",
            option: "Thêm tùy chọn",
            question_types: {
              single: "Câu trả lời duy nhất",
              multiple: "Nhiều câu trả lời",
              paragraph: "Đoạn văn"
            }
          },
          delete_confirmation: {
            title: "Xóa câu hỏi",
            sure: "Bạn có chắc chắn muốn xóa câu hỏi này",
            no: "Không, làm ơn đừng",
            yes: "Có, xóa"
          },
          description: {
            title: "Tiêu đề",
            heading: "Sự miêu tả",
            describe: "Mô tả bài tập cho học sinh của bạn",
            no: "Không có mô tả"
          },
          no_answer: "Không có câu trả lời nào được đưa ra",
          check: "Kiểm tra"
        },
        new_exercise_modal: {
          heading: "Bài tập mới",
          how: "Bạn muốn tạo bài tập của mình như thế nào",
          coming_soon: "Sắp ra mắt",
          next: "Kế tiếp",
          title: "Đặt tiêu đề cho bài tập của bạn",
          title_placeholder: "Tên bài tập",
          finish: "Hoàn thành",
          select_template: "Chọn một mẫu",
          questions: "Câu hỏi",
          points: "Điểm",
          back: "Mặt sau",
          create_exercises: "Tạo bài tập từ Notes bằng AI",
          choose_questions: "Chọn số lượng câu hỏi và tùy chọn bạn muốn và AI sẽ giúp bạn tạo một bài tập từ ghi chú của bạn. Đi nào.",
          how_many_questions: "Bạn muốn tạo bao nhiêu câu hỏi?",
          how_many_options: "Bạn muốn có bao nhiêu lựa chọn cho mỗi câu hỏi?",
          add_note: "Vui lòng thêm ghi chú để sử dụng tính năng này",
          generate: "Phát ra",
          completion: "Thế hệ AI hoàn chỉnh",
          click_generate: "Nhấp vào 'Tạo' để có một số phép thuật",
          options: {
            from_scratch: "Từ đầu",
            from_scratch_subtitle: "Tạo bài tập của bạn từ đầu nếu bạn đã chuẩn bị sẵn câu hỏi của mình",
            use_template: "Sử dụng mẫu",
            use_template_subtitle: "Chọn từ hơn 100 mẫu bài tập được xác định trước để giúp bạn bắt đầu",
            use_ai: "Sử dụng AI",
            use_ai_subtitle: "Bạn có thể tạo bài tập với AI từ ghi chú của mình"
          }
        }
      },
      materials: {
        body_heading: "Chưa có ghi chú, video hoặc slide nào được thêm vào cho bài học này",
        body_content: "Chia sẻ kiến ​​thức của bạn với học sinh bằng cách tạo nội dung hấp dẫn. Bắt đầu bằng cách nhấp vào",
        get_started: "Bắt đầu",
        no_translation: "Không có bản dịch cho ngôn ngữ đã chọn",
        button: "cái nút",
        button_done: "Xong",
        tabs: {
          video: {
            title: "Băng hình",
            embed_link: "Nhúng liên kết",
            upload: "Tải lên",
            button: "Thêm/Chỉnh sửa Video",
            add_video: {
              title: "Thêm một video",
              add_by: "Thêm vào",
              youtube_link: "Liên kết Youtube",
              videos_added: "Video đã thêm",
              add_video: "Thêm video",
              upload_video: "Tải video lên",
              select_file: "Chọn tệp (Mp4, MOV, AVI) để tải lên bài học của bạn.",
              size: "(Tối đa 500 MB)",
              oops: "Rất tiếc `😬, không thể tải video lên",
              big_file: "Rất tiếc, video của chúng tôi chưa được tải lên. Kích thước tập tin quá lớn,",
              maximum_size: "kích thước tối đa là 30 MB. Thử lại!",
              button: "Hãy thử một tập tin khác",
              try_again: "Vui lòng thử lại",
              unsupported_format: "Rất tiếc, video của chúng tôi không được tải lên, định dạng tệp không được hỗ trợ hoặc đã xảy ra lỗi trên máy chủ.",
              format: "Tải lên các tệp MP4, MOV và AVI.",
              upgrade: "Nâng cấp kế hoạch tải video lên của bạn",
              uploading: "Đang tải lên...",
              invalid_youtube: "(Các) liên kết YouTube không hợp lệ",
              invalid_link: "(Các) liên kết không hợp lệ"
            }
          },
          slide: {
            title: "Cầu trượt",
            slide_link: "Liên kết trượt",
            helper_message: "Bạn có thể nhúng Google Trang trình bày hoặc Bản trình bày Canva"
          },
          note: {
            title: "Ghi chú",
            placeholder: "Viết ghi chú bài học của bạn ở đây",
            ai: {
              outline: "Tạo dàn ý bài học",
              note: "Tạo ghi chú bài học",
              activities: "Tạo hoạt động bài học"
            }
          }
        }
      },
      lesson_nav: {
        materials: "Nguyên vật liệu",
        exercises: "Bài tập"
      },
      add_lesson: {
        button_title: "Thêm vào",
        modal_heading: "Thêm bài học mới",
        lesson_title: "Tiêu đề bài học",
        click_to: "Bấm vào để",
        fullname: "Họ và tên",
        save: "Cứu",
        edit: "Biên tập",
        "delete": "Xóa bỏ",
        lock: "Khóa",
        unlock: "Mở khóa",
        start_reorder: "Sắp xếp lại",
        end_reorder: "Kết thúc sắp xếp lại",
        modal_heading_section: "Thêm phần mới",
        lesson_section_title: "Tiêu đề phần",
        cancel: "Hủy bỏ"
      },
      disabled: "Tính năng bị vô hiệu hóa",
      next: "Kế tiếp",
      prev: "Trước đó",
      version_history: {
        title: "Lịch sử phiên bản",
        fetch_more_versions: "Tìm nạp thêm phiên bản",
        current_version: "Phiên bản hiện tại",
        restore_version: "Khôi phục phiên bản này"
      },
      drag: "kéo thẻ để sắp xếp lại",
      no_lesson: "Chưa có bài học nào",
      share_your_knowledge: "Chia sẻ kiến ​​thức của bạn với thế giới bằng cách tạo ra những bài học hấp dẫn. Bắt đầu bằng cách nhấp vào nút Thêm.",
      heading_v2: "Nội dung",
      section_prompt: {
        cta: "Bật phần",
        header: "Bật phần",
        title: "Chúng tôi đã ra mắt các phần khóa học",
        description: "Giờ đây, bạn có thể nhóm các bài học thành các phần để sắp xếp nội dung và giúp học sinh học tập suôn sẻ hơn.",
        activate: "Kích hoạt",
        cancel: "Hủy bỏ"
      }
    },
    news_feed: {
      heading: "Nguồn cấp tin tức",
      body_header: "Chưa có bài đăng nào",
      body_content: "Tạo một bài đăng cho lớp học của bạn. Bắt đầu bằng cách nhấp vào nút Thêm.",
      pinned: "Đã ghim",
      snackbar: {
        comment_deleted: "Bình luận đã bị xóa",
        reaction_error: "Đã xảy ra lỗi khi phản hồi với nguồn cấp tin tức",
        comment_creation_error: "Đã xảy ra lỗi khi tạo bình luận",
        add_comment_success: "Đã thêm nhận xét",
        toggle_pin_error: "Không thể chuyển đổi nguồn cấp dữ liệu được ghim",
        unpinned: "Đã bỏ ghim",
        successfully: "thành công",
        feed_delete_success: "Đã xóa nguồn cấp dữ liệu thành công",
        fetch_feed_fail: "Không tìm nạp được nguồn cấp tin tức",
        fetching_error: "Đã xảy ra lỗi khi tìm nạp nguồn cấp dữ liệu"
      },
      heading_button: {
        title: "Thêm vào",
        edit_post: "Chỉnh sửa bài",
        make_a_post: "Tạo một bài đăng",
        placeholder: "Chia sẻ thông tin cập nhật với học sinh của bạn",
        cancel: "Hủy bỏ",
        post: "Bưu kiện"
      }
    }
  },
  navItems: {
    nav_news_feed: "Nguồn cấp tin tức",
    nav_attendance: "Sự tham dự",
    nav_submissions: "bài nộp",
    nav_marks: "Điểm",
    nav_people: "Mọi người",
    nav_certificates: "Chứng chỉ",
    nav_landing_page: "Trang đích",
    nav_settings: "Cài đặt",
    nav_content: "Nội dung"
  },
  not_permitted: {
    header: "Không cho phép",
    body: "Rất tiếc, bạn không có quyền truy cập vào khóa học này.",
    button: "Về nhà"
  }
};
const courses = {
  heading: "Khóa học",
  heading_button: "Tạo khóa học",
  search_placeholder: "Tìm khóa học",
  new_course_modal: {
    heading: "Tạo một khóa học",
    course_name: "Tên khóa học",
    course_name_placeholder: "Tên khóa học của bạn",
    short_description: "Mô tả ngắn",
    short_description_placeholder: "Một chút mô tả về khóa học này",
    button: "Hoàn thành",
    type: "Loại khóa học",
    type_selector_title: "Bạn đang xem loại khóa học nào?",
    back: "Mặt sau",
    next: "Kế tiếp"
  },
  course_card: {
    empty_title: "Không có khóa học nào được tạo",
    empty_description: "Chia sẻ kiến ​​thức của bạn với thế giới bằng cách tạo các khóa học hấp dẫn cho sinh viên của bạn.",
    error_message: "Đã xảy ra lỗi.",
    lessons_number: "Những bài học",
    students: "sinh viên",
    published: "Được phát hành",
    unpublished: "Chưa xuất bản",
    continue_course: "Tiếp tục khóa học",
    list_view: {
      title: "Tiêu đề",
      description: "Sự miêu tả",
      lessons: "Những bài học",
      students: "Sinh viên",
      published: "Được phát hành",
      type: "Kiểu"
    },
    context_menu: {
      clone: "Dòng vô tính",
      share: "Chia sẻ",
      invite: "Mời",
      "delete": "Xóa bỏ"
    },
    get_course: "Nhận khóa học",
    learn_more: "Tìm hiểu thêm"
  },
  course_filter: {
    date_created: "Ngày tạo",
    published: "Được phát hành",
    lessons: "Những bài học"
  }
};
const ai = {
  help_me: "Giúp tôi viết",
  placeholder: "Giúp tôi viết một mô tả ngắn",
  text: "Bắt đầu gõ...",
  reset: "Cài lại",
  rephrase: "diễn đạt lại",
  insert: "Chèn",
  can_you: "Bạn có thể vui lòng diễn đạt lại điều này",
  requirements: "Vui lòng viết một số yêu cầu cần thiết để tham gia khóa học này:",
  description: "Vui lòng viết mô tả khóa học chi tiết cho khóa học này:",
  expectation: "Học viên nên mong đợi học được gì từ khóa học này:"
};
const dashboard = {
  morning_heading: "Chào buổi sáng",
  afternoon_heading: "Chào buổi chiều",
  evening_heading: "Buổi tối vui vẻ",
  create_course: "Tạo khóa học",
  view_site: "Xem trang web",
  visit_site: "Truy cập trang web",
  hero_content: "Cảm ơn vì những gì bạn làm ❤️. Bạn đang thay đổi cuộc sống của từng lớp học và nhờ có bạn, thế giới trở thành một nơi tốt đẹp hơn. 😊",
  hero_button: "Tiếp tục xây dựng 🚀",
  your_schedule: "Lịch trình của bạn",
  today: "Hôm nay",
  yesterday: "Hôm qua",
  tomorrow: "Ngày mai",
  no_schedule: "Không có bài học vào ngày này",
  join_call: "Tham gia cuộc gọi",
  click_to_join: "Bấm để tham gia cuộc gọi",
  no_call_link: "Không có liên kết cuộc gọi nào được thêm vào bài học này. Hỏi huấn luyện viên của bạn",
  current_lesson: "Hiện đang học",
  your_progress: "Sự tiến bộ của bạn",
  "continue": "Tiếp tục",
  no_courses: "Chưa có khóa học nào đang diễn ra",
  start_course: "Khi bạn bắt đầu một khóa học, sự tiến bộ của bạn sẽ phản ánh ở đây",
  lms_dashboard_hero: "Hôm nay là một ngày khác để đưa bạn đến gần hơn với mục tiêu học tập của mình. Đừng bỏ cuộc, bạn càng học nhiều thì bạn càng tiến bộ hơn.",
  dont: "Đừng bỏ cuộc",
  lessons_completed: "Bài học đã hoàn thành",
  No_courses_started: "Không có khóa học nào bắt đầu"
};
const schedule = {
  title: "Lịch trình của bạn",
  essence: "Bản chất của sự hợp tác thiết kế",
  figma: "Giới thiệu Figma",
  join: "Tham gia cuộc gọi",
  no: "Không có bài học vào ngày này"
};
const components = {
  settings: {
    domains: {
      add: "Thêm vào",
      url: "URL",
      update: "Cập nhật tên miền",
      custom: "Tên miền tùy chọn",
      domain: "Thêm tên miền của riêng bạn",
      title: "Tên miền tùy chọn",
      save: "Cứu",
      your_domain: "Tên miền của bạn",
      custom_domain_error: "Bạn không thể thêm miền cấp cao nhất làm miền tùy chỉnh. Thay vào đó, hãy sử dụng tên miền phụ như 'courses.[yourwebsite].com' hoặc 'www.[yourwebsite].com'.",
      custom_domain_success: "Đã thêm miền tùy chỉnh thành công",
      dns_description: "Đặt bản ghi sau trên nhà cung cấp DNS của bạn để tiếp tục:",
      dns_type: "Kiểu",
      dns_value: "Giá trị",
      dns_name: "Tên",
      refresh: "Làm cho khỏe lại",
      remove: "Di dời",
      custom_favicon: "Biểu tượng yêu thích tùy chỉnh",
      custom_code: "Mã tùy chỉnh"
    },
    "customize-lms": {
      title: "Tùy chỉnh LMS",
      disabled: "tàn tật",
      enabled: "Đã bật",
      save: "Lưu thay đổi",
      apps: {
        title: "Ứng dụng",
        poll: "Thăm dò ý kiến",
        live_comment: "Bình luận trực tiếp"
      },
      course: {
        title: "Khóa học",
        newsfeed: "Nguồn cấp tin tức",
        grading: "Chấm điểm"
      },
      dashboard: {
        title: "bảng điều khiển",
        community: "Cộng đồng",
        exercises: "Bài tập",
        banner_image: "Hình ảnh biểu ngữ",
        banner_image_btn: "Cập nhật hình ảnh biểu ngữ",
        banner_text: "Văn bản biểu ngữ",
        banner_text_label: "Cập nhật văn bản biểu ngữ",
        banner_text_placeholder: "Viết văn bản ở đây"
      }
    },
    customize_lms: {
      title: "Tùy chỉnh LMS",
      enabled: "Đã bật",
      save: "Lưu thay đổi",
      apps: {
        title: "Ứng dụng",
        poll: "Thăm dò ý kiến",
        live_comment: "Bình luận trực tiếp"
      },
      course: {
        title: "Khóa học",
        newsfeed: "Nguồn cấp tin tức",
        grading: "Chấm điểm"
      },
      dashboard: {
        title: "bảng điều khiển",
        community: "Cộng đồng",
        exercises: "Bài tập",
        banner_image: "Hình ảnh biểu ngữ",
        banner_image_btn: "Cập nhật hình ảnh biểu ngữ",
        banner_text: "Văn bản biểu ngữ",
        banner_text_label: "Cập nhật văn bản biểu ngữ",
        banner_text_placeholder: "Viết văn bản ở đây"
      },
      disabled: "Tàn tật"
    }
  },
  quiz: {
    title: "Câu đố",
    second: "(Các) giây",
    answer: "(Các) câu trả lời",
    question_delete: "Xóa câu hỏi",
    add_more: "+ Thêm câu trả lời khác",
    remove_last: "- Xóa câu trả lời cuối cùng",
    quiz_delete: "Xóa bài kiểm tra",
    delete_question: "Bạn có chắc chắn muốn xóa câu hỏi này?",
    delete_quiz: "Bạn có chắc chắn muốn xóa bài kiểm tra này không?",
    lose_content: "Bạn sẽ mất nội dung của mình và không thể hoàn tác hành động này.",
    "delete": "Xóa bỏ",
    update: "Cập nhật",
    create: "Tạo nên",
    a_quiz: "một câu đố",
    quiz_title: "Tiêu đề bài kiểm tra",
    placeholder: "Tiêu đề bài kiểm tra của bạn",
    save: "Lưu thay đổi",
    "continue": "Tiếp tục",
    rename: "Đổi tên",
    updated: "Đã cập nhật",
    start: "Bắt đầu bài kiểm tra",
    start_typing: "Bắt đầu nhập câu hỏi của bạn",
    required_field: "Trường này là bắt buộc",
    type_answer: "Viết câu trả lời",
    label: "Vui lòng nhập nhãn",
    no_quizz: "Không có bài kiểm tra nào được tạo",
    interactive: "Tạo các câu đố tương tác với bảng điểm cho học sinh của bạn."
  }
};
const markdown_editor = {
  write: "Viết",
  preview: "Xem trước"
};
const navigation = {
  goto: "Đi đến",
  courses: "Khóa học",
  home: "Trang chủ",
  classroomio_home: "Lớp họcIO Trang chủ",
  dashboard: "bảng điều khiển",
  discussion: "Cuộc thảo luận",
  people: "Mọi người",
  goto_lms: "Đi tới LMS",
  goto_home: "Đi tới Lớp họcIO Trang chủ",
  login: "Đăng nhập",
  signup: "Đăng ký",
  redirecting: "Chuyển hướng",
  loading_state: "Đang đưa bạn đến trang tiếp theo, vui lòng đợi.",
  org_loading_state: "Đưa bạn đến tổ chức của bạn...",
  add_organization: "+ Thêm tổ chức"
};
const add_org = {
  create_org: "Tạo tổ chức",
  name: "Tên tổ chức",
  org_sitename: "Tên trang web của tổ chức",
  create: "Tạo nên",
  sitename: "Tên trang web đã tồn tại",
  error_organization: "Đã xảy ra lỗi khi tạo tổ chức này. Vui lòng tải lại và thử lại"
};
const setup = {
  get_started: "Bắt đầu",
  publish_course: {
    title: "Xuất bản một khóa học",
    desc: "Làm cho khóa học của bạn trở nên công khai và có thể mua được",
    button_label: "Xuất bản khóa học"
  },
  exercise: {
    title: "Tạo một bài tập",
    desc: "Kiểm tra học sinh của bạn cho phép họ thể hiện sự hiểu biết của mình về vấn đề này",
    button_label: "Tạo bài tập"
  },
  lesson: {
    title: "Tạo một bài học",
    desc: "Chia khóa học của bạn thành bài học mà học sinh có thể dễ dàng hiểu được",
    button_label: "Tạo bài học"
  },
  course: {
    title: "Tạo khóa học",
    desc: "Tạo một khóa học mà bạn sẽ chia sẻ với học viên của mình",
    button_label: "Tạo khóa học"
  },
  organization_profile: {
    title: "Cập nhật ảnh hồ sơ tổ chức",
    desc: "Thiết lập nhận diện chuyên nghiệp và dễ nhận biết cho tổ chức của bạn",
    button_label: "Cập nhật hồ sơ tổ chức"
  },
  personal_profile: {
    title: "Tải lên ảnh hồ sơ và cập nhật tên người dùng",
    desc: "Cá nhân hóa và mang tính nhân văn giúp cho các tương tác trở nên cá nhân và đáng nhớ hơn",
    button_label: "Cập nhật hồ sơ"
  }
};
const pricing = {
  modal: {
    heading: "Kế hoạch nâng cấp",
    thanks: "cảm ơn sự hỗ trợ của bạn",
    plan: "Gói của bạn đi kèm với các đặc quyền và lợi ích thú vị, bao gồm quyền truy cập vào tất cả các tính năng trong tương lai mà chúng tôi sẽ phát hành.",
    close: "Đóng",
    learn: "Tìm hiểu thêm",
    month: "tháng",
    monthly: "hàng tháng",
    annually: "Hàng năm",
    save: "Tiết kiệm 2 tháng"
  },
  plan_names: {
    free: "Miễn phí",
    early: "Áp dụng sớm",
    enterprise: "Doanh nghiệp"
  }
};
const org_navigation = {
  dashboard: "bảng điều khiển",
  courses: "Khóa học",
  community: "Cộng đồng",
  audience: "Khán giả",
  setup: "Cài đặt",
  help: "Giúp đỡ",
  settings: "Cài đặt",
  early_adopter: "Trở thành người áp dụng sớm",
  unlock: "Mở khóa các tính năng không giới hạn và đầu tư vào tương lai của chúng tôi",
  upgrade: "Nâng cấp ngay bây giờ"
};
const settings = {
  heading: "Cài đặt",
  billing: {
    sub_title: "Chi tiết thanh toán",
    manage: "Quản lý thanh toán của bạn",
    active: "Bạn không có bất kỳ thanh toán nào đang hoạt động",
    lemonsqueezy: "Chúng tôi sử dụng Lemonsqueezy để giúp quản lý hóa đơn của bạn",
    open_billing: "Thanh toán mở"
  },
  integrations: {
    heading: "điện tín",
    sub_heading: "Kết nối tài khoản của bạn với điện tín để nhận thông báo về bất kỳ thay đổi nào trong ứng dụng.",
    step_authenticate: "Bước 1: Xác thực tài khoản của bạn thông qua bot ClassroomIO.",
    open_bot_button: "Mở Bot",
    step_chatId: "Bước 2: Nhập ID trò chuyện được bot cung cấp cho bạn.",
    connect_button: "Kết nối",
    success_message: "Tích hợp thành công",
    disconnect: "Ngắt kết nối"
  },
  landing_page: {
    heading: "Trang đích",
    show_section: "Hiển thị phần",
    hide_section: "Ẩn phần",
    title: "Tiêu đề",
    title_highlight: "Tiêu đề-Đánh dấu",
    subtitle: "Phụ đề",
    save_changes: "Lưu thay đổi",
    footer: {
      heading: "Chân trang",
      show_section: "Hiển thị phần",
      hide_section: "Ẩn phần",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn"
    },
    mailing_list: {
      heading: "Danh sách gửi thư",
      show_section: "Hiển thị phần",
      hide_section: "Ẩn phần",
      title: "Tiêu đề",
      subtitle: "Phụ đề",
      button_label: "Nhãn nút"
    },
    contact_us: {
      heading: "Liên hệ chúng tôi",
      show_section: "Hiển thị phần",
      hide_section: "Ẩn phần",
      title: "Tiêu đề",
      title_highlight: "Tiêu đề-Đánh dấu",
      subtitle: "Phụ đề",
      phone_number: "Số điện thoại",
      email: "E-mail"
    },
    faq: {
      heading: "Các câu hỏi thường gặp",
      show_section: "Hiển thị phần",
      hide_section: "Ẩn phần",
      title: "Tiêu đề",
      question: "Câu hỏi",
      answer: "Trả lời",
      button: "Thêm câu hỏi thường gặp mới",
      save: "Cứu",
      cancel: "Hủy bỏ"
    },
    courses: {
      heading: "Khóa học",
      show_section: "Hiển thị phần",
      hide_section: "Ẩn phần",
      title: "Tiêu đề",
      title_highlight: "Tiêu đề-Đánh dấu",
      subtitle: "Phụ đề"
    },
    about: {
      heading: "Về",
      title: "Tiêu đề",
      content: "Nội dung",
      upload_an_image: "Tải lên một hình ảnh",
      select_image: "Chọn ảnh"
    },
    actions: {
      heading: "hành động",
      label: "Nhãn",
      link: "liên kết",
      no_redirect: "Không có chuyển hướng",
      redirect: "Chuyển hướng",
      show_banner: "Hiển thị biểu ngữ",
      hide_banner: "Ẩn biểu ngữ",
      banner_type: {
        heading: "Loại biểu ngữ",
        video: "Băng hình",
        image: "Hình ảnh"
      }
    },
    background: {
      title: "Hình nền",
      show_background: "Hiển thị nền",
      hide_background: "Ẩn nền"
    }
  },
  organization: {
    organization_profile: {
      heading: "Hồ sơ tổ chức",
      organization_name: "tên tổ chức",
      upload_image: "Tải hình ảnh lên",
      update_organization: "Cập nhật tổ chức",
      team: {
        heading: "Đội",
        body: "Thêm đồng đội vào tổ chức của bạn để cả hai có thể cộng tác trong các dự án.",
        button: "Quản lý nhóm",
        sub_heading: "Thiết lập nhóm của bạn"
      },
      custom_domain: {
        heading: "Tên miền tùy chọn",
        sub_heading: "Tùy chỉnh tên miền của bạn",
        body: "Tạo một URL tùy chỉnh để khán giả có thể truy cập tổ chức của bạn một cách dễ dàng",
        button: "Chỉnh sửa tên miền"
      },
      theme: {
        heading: "chủ đề",
        sub_heading: "Đặt màu thương hiệu của bạn",
        custom_theme: "Chủ đề tùy chỉnh",
        add_theme: "Thêm chủ đề"
      },
      customize_lms: {
        heading: "Tùy chỉnh LMS",
        sub_heading: "Cá nhân hóa tổ chức của bạn LMS",
        button: "Tùy chỉnh LMS",
        body: "Kiểm soát trải nghiệm học tập của học sinh. Bạn có thể bật hoặc tắt các tab và trang, cập nhật biểu ngữ LMS và nhận xét trong ứng dụng theo yêu cầu của tổ chức"
      }
    }
  },
  profile: {
    update_profile: "Cập nhật hồ sơ",
    logout: "Đăng xuất",
    personal_information: {
      heading: "Thông tin cá nhân",
      full_name: "Họ và tên",
      username: "tên tài khoản",
      email: "E-mail"
    },
    profile_picture: {
      heading: "Ảnh đại diện",
      upload_image: "Tải hình ảnh lên",
      file_size: "Kích thước tệp tối đa:",
      accepted: "Đã chấp nhận:",
      validation_error: "Kích thước tệp vượt quá giới hạn tối đa:"
    }
  },
  tabs: {
    profile_tab: "Hồ sơ",
    organization_tab: "Tổ chức",
    landing_page_tab: "Trang đích",
    billing_tab: "Thanh toán",
    integrations_tab: "Tích hợp",
    language_tab: "Ngôn ngữ"
  },
  subheadings: {
    view_site: "Xem trang web"
  }
};
const login = {
  welcome: "Chào mừng trở lại",
  email: "Email của bạn",
  password: "Mật khẩu của bạn",
  forgot: "Quên mật khẩu?",
  login: "Đăng nhập"
};
const welcome_modal = {
  we_at: "Chúng tôi ở",
  small_team: "là một nhóm nhỏ có sứ mệnh lớn là hỗ trợ các nhà giáo dục bằng công nghệ tuyệt vời để giúp họ đào tạo thế hệ tương lai. Giáo dục là món quà mạnh mẽ nhất mà bạn có thể tặng cho bất kỳ ai và thật ý nghĩa khi cung cấp cho bạn tất cả các công cụ bạn cần để tặng QUÀ TẶNG này cho nhiều người hơn.",
  thank_you: "Cảm ơn vì đã chọn chúng tôi",
  deeply_appreciate: "chúng tôi đánh giá cao điều đó và sẵn sàng phục vụ bạn."
};
const onboarding = {
  sell: "Bán các khóa học trực tuyến",
  teach: "Dạy học sinh hiện tại của tôi trực tuyến",
  expanding: "Trên nền tảng khác, mở rộng ở đây",
  explore: "Chỉ ở đây để khám phá",
  articles: "Bài viết",
  search: "Máy tìm kiếm",
  social: "Truyền thông xã hội",
  friends: "Những người bạn và gia đình",
  fullname: "Họ và tên",
  name: "Tên tổ chức",
  organisation_sitename: "Tên trang web của tổ chức",
  what_brings: "Điều gì đưa bạn đến",
  how: "Bạn đã nghe về chúng tôi như thế nào?",
  back: "Mặt sau",
  "continue": "Tiếp tục",
  employees: "Đào tạo nhân viên của tôi",
  customers: "Tạo khóa học cho khách hàng của tôi"
};
const verify_email_modal = {
  heading: "Xác nhận email của bạn",
  sent_verification: "Chúng tôi đã gửi email xác minh tới",
  to_confirm: "để xác nhận tính hợp lệ của email được cung cấp.",
  loading: "Đang tải...",
  resend: "Gửi lại mã xác minh",
  resend_in: "Gửi lại xác minh trong",
  seconds: "giây",
  snackbar_error: "lỗi khi gửi mã"
};
const generic = {
  locked: "Đã khóa",
  unlocked: "Đã mở khóa"
};
const specialization = {
  course_tag: "Chuyên môn"
};
const profileMenu = {
  profile: "HỒ SƠ",
  current_org: "TỔ CHỨC HIỆN TẠI",
  free_tools: "CÔNG CỤ MIỄN PHÍ",
  progress: "Báo cáo tiến trình",
  timer: "Hẹn giờ hoạt động",
  tic_tac: "TIC Tac Toe",
  see_more: "Xem thêm",
  whats_new: "Có gì mới",
  launch_week: "Tuần ra mắt"
};
const validations = {
  invalid_type_error: "Không được để trống",
  email: {
    not_valid: "Email không hợp lệ"
  },
  course_payment: {
    email: {
      invalid_email: "địa chỉ email không hợp lệ"
    },
    full_name: {
      min_char: "Phải dài từ 6 ký tự trở lên"
    }
  },
  confirm_password: {
    not_match: "Không khớp với mật khẩu"
  },
  onboarding: {
    step_two: {
      source: {
        required: "Chọn một tùy chọn"
      },
      goal: {
        required: "Chọn một tùy chọn"
      }
    },
    step_one: {
      full_name: {
        min_char: "Tên đầy đủ phải chứa 5 ký tự trở lên"
      }
    }
  },
  reset: {
    password: {
      min_char: "Phải dài từ 6 ký tự trở lên"
    }
  },
  auth: {
    password: {
      min_char: "Phải dài từ 6 ký tự trở lên"
    },
    email: {
      invalid_email: "địa chỉ email không hợp lệ"
    }
  },
  forgot: {
    invalid_email: "địa chỉ email không hợp lệ"
  },
  org_landing_page: {
    message: {
      min_char: "Phải dài từ 10 ký tự trở lên"
    },
    phone: {
      min_char: "Phải dài từ 6 ký tự trở lên"
    },
    email: {
      invalid_email: "địa chỉ email không hợp lệ"
    },
    name: {
      min_char: "Phải dài từ 6 ký tự trở lên"
    }
  },
  comment_in_community: {
    min_char: "Phải dài từ 6 ký tự trở lên"
  },
  ask_community: {
    course_id: {
      select_course: "Chọn một khóa học"
    },
    body: {
      min_char: "Phải dài từ 10 ký tự trở lên"
    },
    title: {
      min_char: "Phải dài từ 6 ký tự trở lên"
    }
  },
  create_quiz: {
    min_char: "Phải dài từ 6 ký tự trở lên"
  },
  lesson_schema: {
    empty_title: "Tiêu đề không được để trống"
  },
  news_feed: {
    min_char: "Trường phải chứa 5 ký tự trở lên"
  },
  site_name: {
    min_char: "Tên trang web phải chứa 5 ký tự trở lên",
    hyphen_rule: "Tên trang web không thể bắt đầu hoặc kết thúc bằng dấu gạch nối"
  },
  organization_name: {
    min_char: "Tổ chức phải chứa 5 ký tự trở lên",
    hyphen_rule: "Tên tổ chức không thể bắt đầu hoặc kết thúc bằng dấu gạch nối"
  },
  user_profile: {
    email: "địa chỉ email không hợp lệ",
    username: "Tên ngươi dung không được để trông",
    fullname: "Tên phải có tối thiểu 5 ký tự"
  }
};
const explore = {
  empty_heading: "Không có khóa học nào",
  empty_description: "Hiện tại chưa có khóa học nào được xuất bản",
  heading: "Khám phá các khóa học của chúng tôi"
};
const delete_modal = {
  label: "Xóa bỏ",
  content: "Bạn có chắc không?",
  no: "KHÔNG",
  yes: "Đúng"
};
const vi = {
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

export { add_org, ai, audience, community, components, content, course, courses, dashboard, vi as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=vi-b6bbcf06.js.map