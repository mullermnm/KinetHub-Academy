!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a56faeff-4b82-4bfa-971c-214ce7b3f56e", e._sentryDebugIdIdentifier = "sentry-dbid-a56faeff-4b82-4bfa-971c-214ce7b3f56e");
  } catch (e2) {
  }
}();
const content = {
  heading: "Internationalisierung in SvelteKit",
  toggle_label: "Wählen Sie Bevorzugte Sprache"
};
const snackbar = {
  success: "Erfolg",
  something: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal",
  update: "Aktualisieren",
  setup: {
    info_lesson: "Sie müssen eine Lektion erstellen",
    info_course: "Sie müssen einen Kurs erstellen"
  },
  upgrade: {
    generate_fail: "Es konnte kein Erfolg generiert werden",
    failed: "Fehlgeschlagen, bitte versuchen Sie es später noch einmal"
  },
  signup: {
    disposable: "Die von Ihnen angegebene E-Mail-Adresse ist entbehrlich"
  },
  community: {
    success: {
      comment_submitted: "Kommentar eingereicht!",
      success_delete: "Erfolgreich gelöscht",
      question_submitted: "Frage eingereicht!"
    },
    error: {
      try_again: "Fehler – Bitte versuchen Sie es später noch einmal",
      deleting_comments: "Fehler beim Löschen der Kommentare",
      deleting_question: "Fehler beim Löschen der Frage"
    }
  },
  invite: {
    failed_join: "Der Beitritt ist fehlgeschlagen. Bitte wenden Sie sich an Ihren Administrator"
  },
  submissions: {
    success: {
      grading: "Bewertung gespeichert und Schüler benachrichtigt"
    }
  },
  marks: {
    error: "Fehler beim Abrufen der Markierungen"
  },
  lessons: {
    error: {
      try_later: "Etwas stimmt nicht. Bitte versuchen Sie es später"
    },
    success: {
      complete_marked: "Als abgeschlossen markiert",
      complete_download: "Download abgeschlossen",
      version_restored: "Version erfolgreich wiederhergestellt"
    }
  },
  attendance: {
    error: {
      reload: "Etwas stimmt nicht. Bitte laden Sie die Seite neu und nehmen Sie erneut teil"
    }
  },
  course: {
    error: {
      reaction_error: "Beim Reagieren auf den Newsfeed ist ein Fehler aufgetreten",
      commenting_error: "Beim Erstellen des Kommentars ist ein Fehler aufgetreten",
      toggle_error: "Der angeheftete Feed konnte nicht umgeschaltet werden",
      news_feed_fail: "Newsfeeds konnten nicht abgerufen werden",
      feed_fetch_error: "Beim Abrufen des Feeds ist ein Fehler aufgetreten"
    },
    success: {
      comment_deleted: "Kommentar gelöscht",
      comment_added: "Kommentar hinzugefügt",
      pinned: "Angepinnt",
      unpinned: "Nicht angepinnt",
      successfully: "Erfolgreich",
      feed_delete_success: "Feed erfolgreich gelöscht"
    }
  },
  landing_page_settings: {
    success: {
      complete: "Vollständig :)"
    },
    error: {
      file_size: "Die Dateigröße darf 500 KB nicht überschreiten",
      try_again: "Versuchen Sie es erneut",
      label: "Bild hochladen",
      fetch_error: "Fehler beim Abrufen von Bildern von Unsplash"
    }
  },
  team_members: {
    invite_sent: "Einladung gesendet!",
    user_exists: "Benutzer existiert bereits",
    invite_fail: "Die Einladung konnte nicht gesendet werden. Bitte versuchen Sie es erneut",
    remove_fail: "Der Benutzer konnte nicht entfernt werden. Bitte versuchen Sie es erneut"
  },
  lms: {
    error: {
      username_exists: "Benutzername existiert bereits",
      update: "Update fehlgeschlagen:",
      try_again: "Bitte versuche es erneut"
    }
  },
  course_settings: {
    error: {
      not_right: "Etwas stimmt nicht. Bitte versuchen Sie es später",
      went_wrong: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal",
      title: "Der Titel darf nicht leer sein",
      description: "Beschreibung darf nicht leer sein",
      failed_integration: "Die Integration ist fehlgeschlagen. Bitte versuchen Sie es später noch einmal",
      failed_deletion: "Fehler beim Löschen. Bitte versuchen Sie es später noch einmal"
    },
    success: {
      download: "Download abgeschlossen",
      saved: "Erfolgreich gespeichert",
      successful_integration: "Integration erfolgreich",
      successful_deletion: "Integration gelöscht",
      update_successful: "Aktualisierung erfolgreich"
    }
  },
  people: {
    success: {
      copied: "In die Zwischenablage kopiert"
    },
    error: {
      missing_data: "Organisationsdaten fehlen. Bitte laden Sie die Seite neu",
      no: "Keine aktuelle Organisationsdomäne"
    }
  },
  newsfeed: {
    error: {
      error: "Ein Fehler ist aufgetreten während",
      editing: "Feed bearbeiten",
      creating: "Feed erstellen"
    },
    success: {
      edit: "Feed erfolgreich bearbeitet",
      add: "Neuer Feed erfolgreich hinzugefügt"
    }
  },
  materials: {
    apology: "Es tut uns leid, beim Speichern Ihrer Lektion ist ein Fehler aufgetreten.",
    update_translations: "Das Aktualisieren der Übersetzungen ist fehlgeschlagen",
    creating_new: "Das Erstellen neuer Übersetzungen ist fehlgeschlagen"
  },
  exercise: {
    success: "Erfolgreich gespeichert",
    submission_updated: "Einreichung aktualisiert auf",
    error_fetching: "Das Abrufen der Übungen ist fehlgeschlagen. Bitte laden Sie die Seite neu"
  },
  poll: {
    info: {
      not_published: "Die Umfrage ist noch nicht veröffentlicht",
      vote_once: "Sie können nur einmal abstimmen"
    },
    error: {
      creating_poll: "Beim Erstellen der Umfrage ist ein Fehler aufgetreten",
      updating_poll: "Beim Aktualisieren des Umfragestatus ist ein Fehler aufgetreten",
      submitting_poll: "Beim Absenden der Umfrage ist ein Fehler aufgetreten"
    }
  },
  success_update: "Erfolgreich geupdated",
  generic: {
    success_delete: "Erfolgreich gelöscht",
    try_again: "Fehler – Bitte versuchen Sie es später noch einmal"
  }
};
const exercises = {
  heading: "Übungen",
  not_submitted: "Nicht eingereicht",
  submitted: "Eingereicht",
  in_progress: "Benotung läuft",
  graded: "Benotet",
  lesson: "Lektion"
};
const my_learning = {
  heading: "Mein Lernen",
  progress: "Im Gange",
  complete: "Vollständig",
  search: "Kurse suchen",
  not_in_progress: "Kein Kurs in Bearbeitung",
  any_progress: "Jeder Kurs, den Sie starten, wird hier angezeigt",
  not_completed: "Kein Kurs abgeschlossen",
  any_course: "Alle von Ihnen abgeschlossenen Kurse werden hier angezeigt"
};
const lms_navigation = {
  home: "Heim",
  my_learning: "Mein Lernen",
  exercise: "Übung",
  community: "Gemeinschaft",
  help: "Helfen",
  settings: "Einstellungen",
  explore: "Erkunden"
};
const upgrade = {
  certificate: "Aktualisieren Sie Ihren Plan, um Zertifikate zu generieren",
  team: "Aktualisieren Sie Ihren Plan, um Teammitglieder hinzuzufügen",
  team_members: "Teammitglieder",
  back: "Zurück zu den Einstellungen",
  download_lessons: "Führen Sie ein Upgrade durch, um Lektionen herunterzuladen",
  download_course: "Upgrade zum Download-Kurs",
  domain: "Aktualisieren Sie Ihren Plan, um benutzerdefinierte Domänen hinzuzufügen"
};
const audience = {
  title: "Publikum",
  "export": "Export",
  no_audience: "Kein Publikum, das verwaltet werden muss",
  manage: "Verwalten Sie hier alle Ihre Schüler und bleiben Sie mit ihnen in Verbindung",
  name: "Name",
  email: "Email",
  date_joined: "Datum des Beitritts",
  upgrade: "Aktualisieren Sie Ihren Plan, um mehr Studenten einzuladen"
};
const community = {
  title: "Gemeinschaft",
  ask_button: "Fragen Sie die Community",
  find_question: "Frage finden",
  asked: "fragte",
  answers: "Antworten",
  no_question: "Keine Fragen gefragt",
  ask_a_question: "Stellen Sie der Community eine Frage",
  "delete": {
    title: "Löschen",
    question: "Frage",
    comment: "Kommentar",
    sure: "Sind Sie sicher, dass Sie dies löschen möchten?",
    no: "Nein, behalte es",
    yes: "Ja, löschen"
  },
  ask: {
    go_back: "Geh zurück",
    ask_the: "Fragen Sie die Gemeinde",
    publish: "Veröffentlichen",
    title: "Titel",
    select_course: "Wählen Sie Kurs",
    ask_community: "Stellen Sie der Community Ihre Fragen",
    question: "Frage",
    save: "Speichern",
    edit: "Bearbeiten",
    cancel: "Stornieren",
    give: "Eine Antwort geben",
    comment: "Kommentar"
  },
  all: "Alle"
};
const course = {
  navItem: {
    settings: {
      heading: "Einstellungen",
      cover_image: "Titelbild",
      optional_image: "Dieses optionale Bild wird auf Ihrer Begrüßungsseite angezeigt. Wenn Sie eines hinzufügen, sollte es mindestens 280 x 200 groß sein",
      replace: "Ersetzen",
      del: "Löschen",
      course_details: "Kursdetails",
      course_title: "Kursname",
      course_description: "Kursbeschreibung",
      placeholder: "Schreiben Sie hier Ihre Kursbeschreibung",
      link: "Kurslink",
      grading: "Benotung",
      reports: "Stellen Sie Benotungsberichte für den Unterricht zur Verfügung",
      disabled: "Deaktiviert",
      enabled: "Ermöglicht",
      order: "Registerkarte „Lektionen bestellen“.",
      drag: "Ziehen Sie die Beschriftungen per Drag-and-Drop, um Ihre Materialregisterkarten neu anzuordnen",
      lesson_download: "Lektionen herunterladen",
      available: "Stellen Sie die Lektion für registrierte Studierende zum Download im PDF-Format zur Verfügung",
      course_download: "Kurs-Download",
      course_avail: "Stellen Sie den Kurs für registrierte Studierende zum Download bereit",
      download: "Herunterladen",
      allow: "Erlauben Sie neue Studenten",
      access: "Ermöglichen Sie neuen Studierenden den Zugang zu diesem Kurs",
      publish: "Kurs veröffentlichen",
      determines: "Dies bestimmt, ob Ihr Kurs auf Ihrer Zielseite angezeigt wird",
      published: "Veröffentlicht",
      unpublished: "Unveröffentlicht",
      "delete": "Kurs löschen",
      delete_text: "Löschen Sie diesen Kurs. Diese Aktion kann nicht rückgängig gemacht werden",
      save: "Änderungen speichern",
      type: "Kurstyp",
      course_type_desc: "Aktualisieren Sie den Kurstyp für ein persönlicheres Erlebnis",
      live_class: "Live-Klasse",
      self_paced: "Eigenständig"
    },
    landing_page: {
      start_course: "Kurs starten",
      requirement: "Erfordernis",
      description: "Kursbeschreibung",
      learn: "Was Sie lernen werden",
      certificate: "Zertifikat",
      certificate_text: "Wenn Sie alle Kurse des Programms abschließen, erhalten Sie ein Zertifikat, das Sie mit Ihrem beruflichen Netzwerk teilen können.",
      content: "Kursinhalt",
      slide: "1 Folie",
      note: "Notiz",
      video: "Video",
      reviews: "Rezensionen",
      see_all: "Alles sehen",
      header_video: "Header-Video",
      no_course_published: "Kein Kurs veröffentlicht",
      coming_your_way: "Wir haben tolle Kurse für Sie parat, bleiben Sie dran!!!",
      view_less: "Weniger anzeigen",
      view_all: "Alle ansehen",
      thank_you: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden",
      name: "Ihr Name",
      email: "Deine E-Mail",
      phone: "Dein Telefon",
      message: "Ihre Nachricht",
      your_message: "Ihre Nachricht hier",
      submit: "Einreichen",
      successful_sub: "Sie wurden erfolgreich hinzugefügt. Danke fürs Abonnieren.",
      enter: "Geben sie ihre E-Mail Adresse ein...",
      powered_by: "Angetrieben von",
      landing_page: "Landingpage",
      explore: "Entdecken Sie Kurse",
      find: "Finden Sie Kurse von den besten Lehrern auf der ganzen Welt, die Ihnen gefallen werden",
      find_course: "Finden Sie einen Kurs...",
      instructor: "Lehrer",
      courses: "Kurse",
      reviews_modal: {
        title: "Rezensionen",
        rating: "Bewertung",
        ratings: "Bewertungen"
      },
      pricing_section: {
        free: "Frei",
        not_accepting: "Dieser Kurs nimmt derzeit keine neuen Studierenden auf.",
        discount: "Rabatt",
        enroll: "Melden Sie sich jetzt an",
        buy: "Kaufe jetzt",
        bird: "Frühbucherangebot. Kaufen Sie so schnell wie möglich"
      },
      upload_widget: {
        title: "Banner-Widget",
        width: "Am besten funktionieren Bilder, die breiter als 1500 Pixel sind.",
        size: "Die maximale Größe pro Datei beträgt 500 KB.",
        submit: "Einreichen",
        no_images: "Keine Bilder verfügbar."
      },
      editor: {
        save: "Speichern",
        page_builder: "Seitenersteller",
        section: "Abschnitt",
        pricing_form: {
          currency: "Währung",
          cost: "Kosten",
          payment: "Zahlungslink",
          discount: "Rabatt",
          no: "NEIN",
          yes: "Ja",
          percent: "Rabattprozentsatz",
          gift: "Über Geschenk"
        },
        instructor_form: {
          upload: "Lehrerlogo",
          name: "Name des Kursleiters",
          name_placeholder: "Ihr Firmenname",
          role: "Rolle des Ausbilders",
          about: "Über den Lehrer",
          about_placeholder: "Ein kurzer Hintergrund zur Ausbildung",
          total: "Gesamtzahl der Kurse"
        },
        reviews_form: {
          add_reviews: "Bewertungen hinzufügen",
          fullname: "Vollständiger Name",
          description: "Beschreibung",
          rating: "Bewertung",
          hide: "Bewertung ausblenden",
          validations: {
            invalid_type_error: "Darf nicht leer sein",
            description: {
              min_char: "„Beschreibung ist zu kurz, mindestens 5 Zeichen.“"
            },
            rating: {
              message: "Die Bewertung muss zwischen 1 und 5 liegen"
            },
            avatar_url: {
              message: "Lade ein Bild hoch"
            },
            name: {
              min_char: "Der Name ist zu kurz, mindestens 5 Zeichen"
            }
          }
        },
        header_form: {
          title: "Titel",
          description: "Beschreibung",
          short_video: "Kurzes Video",
          replace_cover: "Titelbild ersetzen",
          replace: "Ersetzen",
          helper: "Geben Sie einen Link zu einem YouTube-Video ein"
        },
        title: {
          header: "Header",
          requirement: "Erfordernis",
          description: "Beschreibung",
          goals: "Ziele",
          reviews: "Rezensionen",
          instructor: "Lehrer",
          pricing: "Preisgestaltung",
          certificate: "Zertifikat"
        },
        display_section: "Anzeigebereich",
        certificate_form: {
          upload_template: "Zertifikatsvorlage"
        }
      },
      course_content: "Kursinhalte",
      modules: "module",
      lessons: "Unterricht",
      exercises: "Übungen"
    },
    certificates: {
      title: "Zertifikate",
      certificate_settings: "Zertifikatseinstellungen",
      theme: "Wähle ein Thema",
      logo: "Markenlogo",
      to_update: "Um Ihr Markenimage zu aktualisieren, gehen Sie zu",
      settings: "Einstellungen > Organisationseinstellungen",
      and_upload: "und laden Sie Ihr Markenlogo hoch",
      goto_settings: "Gehe zu den Einstellungen",
      description: "Kursbeschreibung",
      placeholder: "eine kleine Beschreibung zum Kurs",
      allow: "Erlauben Sie Schülern, Zertifikate herunterzuladen",
      locked: "Gesperrt",
      unlocked: "Entsperrt",
      save: "Änderungen speichern",
      locked_certificate: "Zertifikate nicht verfügbar",
      instructor_unlock: "Ihr Dozent muss Ihr Zertifikat entsperren.",
      contact_instructor: "Wenn Sie Ihr Zertifikat benötigen, wenden Sie sich bitte an Ihren Dozenten.",
      download_certificate: "Zertifikat herunterladen",
      unlocked_certificate: "Glückwunsch! 🎉 Dein Zertifikat ist fertig",
      unlocked_certificate_subtitle: "Sie haben diesen Kurs abgeschlossen und Ihr Engagement ist offensichtlich. Laden Sie das Zertifikat herunter und teilen Sie es mit Ihrem Netzwerk als Beweis für Ihre neu erworbenen Fähigkeiten",
      complete_to_download_subtitle: "Ihr Zertifikat ist verfügbar, sobald Sie alle Lektionen und Übungen dieses Kurses abgeschlossen haben",
      complete_to_download_title: "Kurs nicht abgeschlossen 😔",
      description_error: "Die Beschreibung darf 200 Zeichen nicht überschreiten",
      characters: "Figuren",
      unexpected_error: "Ein unerwarteter Fehler ist aufgetreten"
    },
    people: {
      title: "Menschen",
      add: "Hinzufügen",
      search: "Suchen Sie nach Personen",
      you: "Du",
      pending: "Ausstehend",
      name: "Name",
      role: "Rolle",
      action: "Aktion",
      feedback: "E-Mail in die Zwischenablage kopiert",
      roles: {
        admin: "Administrator",
        tutor: "Tutor",
        student: "Student",
        filter: "Filter"
      },
      delete_confirmation: {
        title: "Löschen",
        sure: "Sind Sie sicher, dass Sie löschen möchten",
        no: "NEIN",
        yes: "Ja"
      },
      invite_modal: {
        title: "Menschen einladen",
        invite: "Laden Sie Tutoren ein",
        select: "Wählen Sie Tutoren in der Organisation aus...",
        to_add: "Um Ihrer Organisation einen Tutor hinzuzufügen,",
        go_to: "Gehen Sie zu den Organisationseinstellungen",
        invite_students: "Laden Sie Studierende ein",
        via_link: "Sie können Studierende über einen Einladungslink einladen",
        copy_link: "Link kopieren",
        success: "Erfolgreich kopiert",
        finish: "Beenden",
        via_qr: "Sie können Studierende per QR einladen",
        download_qr: "Laden Sie den QR-Code herunter",
        qr_downloading_snackbar: "Der QR-Code wurde erfolgreich generiert. Bitte warten Sie, während er heruntergeladen wird"
      },
      teams: {
        add: "Hinzufügen",
        add_team: "Fügen Sie Ihre Teamkollegen oder Mitarbeiter zu Ihrer Organisation hinzu. Beginnen Sie mit der Zusammenarbeit",
        invite: "Einladen",
        placeholder: "E-Mail durch Komma getrennt",
        role: "Rolle",
        send_invite: "Sende Einladung",
        members: "Mitglieder",
        invite_sent: "Einladung gesendet",
        you: "Du",
        remove: "Entfernen"
      }
    },
    marks: {
      title: "Markierungen",
      student: "Student",
      total: "Gesamt",
      no_student: "Kein Student hinzugefügt",
      "export": {
        csv: "Als CSV exportieren",
        pdf: "Als PDF exportieren"
      }
    },
    submissions: {
      title: "Eingereichte Übungen",
      submission_status: {
        submitted: "Eingereicht",
        in_progress: "Im Gange",
        graded: "Benotet"
      },
      grading_modal: {
        details: "Einzelheiten",
        early: "Früh",
        late: "Spät",
        total_grade: "Gesamtnote",
        student: "Student",
        status: "Status",
        add_comment: "Einen Kommentar hinzufügen",
        grade_with_ai: "Benoten Sie mit KI",
        submit_grades: "Noten einreichen",
        accept_grade: "Akzeptieren",
        reject_grade: "Ablehnen",
        add_comment_placeholder: "Hinterlasse einen Kommentar",
        questions_tried: "Diese Punktzahl wurde aufgrund der Gesamtzahl der Versuche vergeben:",
        delete_prompt: "Löschen",
        delete_error: "Die Übermittlung konnte nicht gelöscht werden",
        delete_success: "Einreichung erfolgreich gelöscht"
      }
    },
    attendance: {
      title: "Teilnahme",
      present: "Gegenwärtig",
      absent: "Abwesend",
      search_students: "Suchen Sie nach Studenten",
      student: "Student",
      lesson: "Lektion",
      no_student: "Kein Student hinzugefügt"
    },
    lessons: {
      heading: "Unterricht",
      join_lesson: "Nehmen Sie an der Lektion teil",
      no_link: "Keine Verbindung",
      no_tutor: "Kein Tutor hinzugefügt",
      body_header: "Noch kein Unterricht",
      body_content: "Teilen Sie Ihr Wissen mit der Welt, indem Sie ansprechende Lektionen erstellen. Klicken Sie zunächst auf die Schaltfläche „Hinzufügen“.",
      download_pdf: "PDF Herunterladen",
      autosaving: "Automatisches Speichern...",
      done: "Erledigt",
      edit: "Bearbeiten",
      mark_as: "markieren als",
      incomplete: "Unvollständig",
      complete: "Vollständig",
      poll: {
        voted: "Abgestimmt",
        created_by: "Erstellt von",
        status: "Status",
        draft: "Entwurf",
        publish: "Veröffentlichen",
        expiration: "Ablauf",
        total_voted: "Gesamte stimmen",
        responses: "Antworten",
        expires: "Läuft ab",
        today: "Heute",
        back: "Zurück",
        result: "Ergebnis",
        "delete": "Löschen",
        create_poll: "Umfrage erstellen",
        question: "Frage",
        options: "Optionen",
        option_label: "Optionsbeschriftung",
        cancel: "Stornieren",
        poll_question: "Umfrage"
      },
      polls: {
        title: "Umfrage",
        active_polls: "Aktive Umfragen",
        expired_polls: "Abgelaufene Umfragen",
        loading: "Wird geladen...",
        no_polls: "Keine Umfragen zum Anzeigen"
      },
      comments: {
        title: "Kommentare",
        you: "Du",
        placeholder: "Sag etwas"
      },
      exercises: {
        heading: "Alle Übungen",
        add_button: "Hinzufügen",
        no_exercises: "Für diese Lektion wurden keine Übungen hinzugefügt",
        no_assigned_exercises: "Ihr Tutor hat dieser Lektion keine Übung zugewiesen. Für die Hauptzeit können Sie",
        chill: "Entspannen Sie sich mit den großen Jungs",
        add_exercise: "Teilen Sie Ihr Wissen mit der Welt, indem Sie spannende Übungen erstellen. Jetzt eine Übung hinzufügen.",
        all_exercises: {
          heading: "Alle Übungen",
          questions: "Fragen",
          submissions: "Einsendungen",
          save: "Speichern",
          preview: "Vorschau",
          reorder: "Fragen neu anordnen",
          delete_exercise: "Übung löschen",
          order_questions: "Bestellfragen",
          write_your_answer: "Schreibe deine Antwort",
          write_your_answer_here: "Schreiben Sie hier Ihre Antwort",
          write_your_question_here: "Schreiben Sie hier Ihre Frage",
          write_your_title: "Schreiben Sie hier Ihren Titel",
          write_your_subtitle: "Schreiben Sie hier Ihren Untertitel",
          highlight: "Schreiben Sie hier Ihr Titel-Highlight",
          content: "Schreiben Sie hier Ihren Inhalt",
          video: "Schreiben Sie hier Ihren Videolink",
          link: "Schreiben Sie hier Ihren Link",
          label: "Schreiben Sie hier Ihr Etikett",
          email: "Schreiben Sie hier Ihre E-Mail",
          facebook: "Schreiben Sie hier Ihren Facebook-Link",
          twitter: "Schreiben Sie hier Ihren Twitter-Link",
          linkedin: "Schreiben Sie hier Ihren LinkedIn-Link",
          number: "Geben Sie hier Ihre Telefonnummer ein",
          previous: "Vorherige",
          finish: "Beenden",
          next: "Nächste",
          analytics: {
            submissions: "Einsendungen",
            individual: {
              heading: "Individuell",
              answers: "Individuelle Antworten",
              no: "Es wurde keine Antwort gegeben"
            },
            summary: {
              heading: "Zusammenfassung",
              question_chart: "Fragendiagramme"
            }
          },
          view_mode: {
            no_question: "Für diese Übung wurde keine Frage hinzugefügt",
            edit: "Bearbeiten",
            button: "Schaltfläche zum Hinzufügen",
            questions: "Fragen",
            points: "Punkte",
            all: "Alles erforderlich",
            due: "Fällig bis",
            no_description: "Keine Beschreibung",
            start: "Start",
            graded: "Benotet",
            pending: "Ausstehend",
            submitted: "Eingereicht",
            status_pending: "Status: Ausstehende Überprüfung",
            status_graded: "Status: Überprüfung abgeschlossen",
            status_submitted: "Status: Eingereicht"
          },
          edit_mode: {
            delete_modal: "Modal löschen",
            sure: "Möchten Sie diese Übung wirklich löschen?",
            no: "Nein, abbrechen",
            yes: "Ja, löschen",
            deleting: "Löschen...",
            error: "Sie haben einige Fehler",
            question: "Frage",
            write: "Schreiben Sie Ihren Code",
            option: "Option hinzufügen",
            question_types: {
              single: "Einzelne Antwort",
              multiple: "Mehrere Antworten",
              paragraph: "Absatz"
            }
          },
          delete_confirmation: {
            title: "Frage löschen",
            sure: "Sind Sie sicher, dass Sie diese Frage löschen möchten?",
            no: "Nein, bitte nicht",
            yes: "Ja, löschen"
          },
          description: {
            title: "Titel",
            heading: "Beschreibung",
            describe: "Beschreiben Sie Ihrem Schüler die Übung",
            no: "Keine Beschreibung"
          },
          no_answer: "Es wurde keine Antwort gegeben",
          check: "Überprüfen"
        },
        new_exercise_modal: {
          heading: "Neue Übung",
          how: "Wie möchten Sie Ihre Übung gestalten?",
          coming_soon: "Demnächst",
          next: "Nächste",
          title: "Geben Sie Ihrer Übung einen Titel",
          title_placeholder: "Übungsname",
          finish: "Beenden",
          select_template: "Wählen Sie eine Vorlage aus",
          questions: "Fragen",
          points: "Punkte",
          back: "Zurück",
          create_exercises: "Erstellen Sie Übungen aus Notizen mit KI",
          choose_questions: "Wählen Sie aus, wie viele Fragen und Optionen Sie möchten, und die KI hilft Ihnen dabei, aus Ihrer Notiz eine Übung zu erstellen. Lass uns gehen.",
          how_many_questions: "Wie viele Fragen möchten Sie erstellen?",
          how_many_options: "Wie viele Optionen pro Frage möchten Sie?",
          add_note: "Bitte fügen Sie eine Notiz hinzu, um diese Funktion zu nutzen",
          generate: "Generieren",
          completion: "KI-Generierung abgeschlossen",
          click_generate: "Klicken Sie für etwas Magie auf „Generieren“.",
          options: {
            from_scratch: "Von Grund auf neu",
            from_scratch_subtitle: "Erstellen Sie Ihre Übung von Grund auf, wenn Sie Ihre Fragen bereits vorbereitet haben",
            use_template: "Verwenden Sie eine Vorlage",
            use_template_subtitle: "Wählen Sie aus über 100 Vorlagen vordefinierter Übungen, um Ihnen den Einstieg zu erleichtern",
            use_ai: "Nutzen Sie KI",
            use_ai_subtitle: "Sie können aus Ihren Notizen eine Übung mit KI generieren"
          }
        }
      },
      materials: {
        body_heading: "Für diese Lektion wurden noch keine Notizen, Videos oder Folien hinzugefügt",
        body_content: "Teilen Sie Ihr Wissen mit Ihren Schülern, indem Sie ansprechende Inhalte erstellen. Klicken Sie zunächst auf",
        get_started: "Loslegen",
        no_translation: "Keine Übersetzung für die ausgewählte Sprache",
        button: "Taste",
        button_done: "Erledigt",
        tabs: {
          video: {
            title: "Video",
            embed_link: "Link einbetten",
            upload: "Hochladen",
            button: "Video(s) hinzufügen/bearbeiten",
            add_video: {
              title: "Fügen Sie ein Video hinzu",
              add_by: "Hinzufügen von",
              youtube_link: "Youtube-Link",
              videos_added: "Videos hinzugefügt",
              add_video: "Video hinzufügen",
              upload_video: "Video hochladen",
              select_file: "Wählen Sie die Datei (MP4, MOV, AVI) aus, die Sie in Ihre Lektion hochladen möchten.",
              size: "(Max. 500 MB)",
              oops: "Hoppla 😬, Video konnte nicht hochgeladen werden",
              big_file: "Es tut uns leid, dass das Video nicht hochgeladen wurde. Die Dateigröße ist zu groß,",
              maximum_size: "Die maximale Größe beträgt 30 MB. Versuchen Sie es erneut!",
              button: "Versuchen Sie es mit einer anderen Datei",
              try_again: "Bitte versuche es erneut",
              unsupported_format: "Es tut uns leid, dass das Video nicht hochgeladen wurde, das Dateiformat nicht unterstützt wird oder auf dem Server ein Fehler aufgetreten ist.",
              format: "Laden Sie MP4-, MOV- und AVI-Dateien hoch.",
              upgrade: "Aktualisieren Sie Ihren Plan, um Videos hochzuladen",
              uploading: "Hochladen...",
              invalid_youtube: "Ungültige YouTube-Link(s)",
              invalid_link: "Ungültige Links"
            }
          },
          slide: {
            title: "Gleiten",
            slide_link: "Folienlink",
            helper_message: "Sie können Google Slides oder Canva-Präsentationen einbetten"
          },
          note: {
            title: "Notiz",
            placeholder: "Schreiben Sie hier Ihre Unterrichtsnotiz",
            ai: {
              outline: "Erstellen Sie eine Unterrichtsübersicht",
              note: "Unterrichtsnotiz erstellen",
              activities: "Unterrichtsaktivitäten erstellen"
            }
          }
        }
      },
      lesson_nav: {
        materials: "Materialien",
        exercises: "Übungen"
      },
      add_lesson: {
        button_title: "Hinzufügen",
        modal_heading: "Neue Lektion hinzufügen",
        lesson_title: "Titel der Lektion",
        click_to: "Klicke um",
        fullname: "vollständiger Name",
        save: "Speichern",
        edit: "Bearbeiten",
        "delete": "Löschen",
        lock: "Sperren",
        unlock: "Freischalten",
        start_reorder: "Neu anordnen",
        end_reorder: "Nachbestellung beenden",
        modal_heading_section: "Neuen Abschnitt hinzufügen",
        lesson_section_title: "Abschnittstitel",
        cancel: "Stornieren"
      },
      disabled: "Funktion ist deaktiviert",
      next: "Nächste",
      prev: "Vorher",
      version_history: {
        title: "Versionsgeschichte",
        fetch_more_versions: "Weitere Versionen abrufen",
        current_version: "Aktuelle Version",
        restore_version: "Stellen Sie diese Version wieder her"
      },
      drag: "Ziehen Sie eine Karte, um sie neu anzuordnen",
      no_lesson: "Noch kein Unterricht",
      share_your_knowledge: "Teilen Sie Ihr Wissen mit der Welt, indem Sie ansprechende Lektionen erstellen. Klicken Sie zunächst auf die Schaltfläche „Hinzufügen“.",
      heading_v2: "Inhalt",
      section_prompt: {
        cta: "Abschnitte aktivieren",
        header: "Abschnitte aktivieren",
        title: "Wir haben Kursabschnitte eingeführt",
        description: "Sie können Lektionen jetzt in Abschnitte gruppieren, um Ihre Inhalte zu organisieren und das Lernen für Ihre Schüler reibungsloser zu gestalten.",
        activate: "Aktivieren",
        cancel: "Stornieren"
      }
    },
    news_feed: {
      heading: "Neuigkeiten",
      body_header: "Noch kein Beitrag",
      body_content: "Verfassen Sie einen Beitrag für Ihre Klasse. Klicken Sie zunächst auf die Schaltfläche „Hinzufügen“.",
      pinned: "Angepinnt",
      snackbar: {
        comment_deleted: "Kommentar gelöscht",
        reaction_error: "Beim Reagieren auf den Newsfeed ist ein Fehler aufgetreten",
        comment_creation_error: "Beim Erstellen des Kommentars ist ein Fehler aufgetreten",
        add_comment_success: "Kommentar hinzugefügt",
        toggle_pin_error: "Der angeheftete Feed konnte nicht umgeschaltet werden",
        unpinned: "Nicht angepinnt",
        successfully: "Erfolgreich",
        feed_delete_success: "Feed erfolgreich gelöscht",
        fetch_feed_fail: "Newsfeeds konnten nicht abgerufen werden",
        fetching_error: "Beim Abrufen des Feeds ist ein Fehler aufgetreten"
      },
      heading_button: {
        title: "Hinzufügen",
        edit_post: "Beitrag bearbeiten",
        make_a_post: "Machen Sie einen Beitrag",
        placeholder: "Teilen Sie ein Update mit Ihren Schülern",
        cancel: "Stornieren",
        post: "Post"
      }
    }
  },
  navItems: {
    nav_news_feed: "Neuigkeiten",
    nav_attendance: "Teilnahme",
    nav_submissions: "Einsendungen",
    nav_marks: "Markierungen",
    nav_people: "Menschen",
    nav_certificates: "Zertifikate",
    nav_landing_page: "Landingpage",
    nav_settings: "Einstellungen",
    nav_content: "Inhalt"
  },
  not_permitted: {
    header: "Keine Erlaubnis",
    body: "Leider haben Sie keinen Zugriff auf diesen Kurs.",
    button: "Nach Hause gehen"
  }
};
const courses = {
  heading: "Kurse",
  heading_button: "Kurs erstellen",
  search_placeholder: "Kurs finden",
  new_course_modal: {
    heading: "Erstellen Sie einen Kurs",
    course_name: "Kursname",
    course_name_placeholder: "Ihr Kursname",
    short_description: "kurze Beschreibung",
    short_description_placeholder: "Eine kleine Beschreibung zu diesem Kurs",
    button: "Beenden",
    type: "Kurstyp",
    type_selector_title: "Welche Art von Kurs suchen Sie?",
    back: "Zurück",
    next: "Nächste"
  },
  course_card: {
    empty_title: "Keine Kurse erstellt",
    empty_description: "Teilen Sie Ihr Wissen mit der Welt, indem Sie ansprechende Kurse für Ihre Schüler erstellen.",
    error_message: "Ein Fehler ist aufgetreten.",
    lessons_number: "Unterricht",
    students: "Studenten",
    published: "Veröffentlicht",
    unpublished: "Unveröffentlicht",
    continue_course: "Kurs fortsetzen",
    list_view: {
      title: "Titel",
      description: "Beschreibung",
      lessons: "Unterricht",
      students: "Studenten",
      published: "Veröffentlicht",
      type: "Typ"
    },
    context_menu: {
      clone: "Klon",
      share: "Aktie",
      invite: "Einladen",
      "delete": "Löschen"
    },
    get_course: "Holen Sie sich Kurs",
    learn_more: "Erfahren Sie mehr"
  },
  course_filter: {
    date_created: "Datum erstellt",
    published: "Veröffentlicht",
    lessons: "Unterricht"
  }
};
const ai = {
  help_me: "Hilf mir zu schreiben",
  placeholder: "Helfen Sie mir, eine kurze Beschreibung zu schreiben",
  text: "Anfangen zu tippen...",
  reset: "Zurücksetzen",
  rephrase: "Umformulieren",
  insert: "Einfügen",
  can_you: "Können Sie das bitte umformulieren?",
  requirements: "Bitte schreiben Sie einige Anforderungen auf, die für die Teilnahme an diesem Kurs erforderlich sind:",
  description: "Bitte verfassen Sie eine ausführliche Kursbeschreibung für diesen Kurs:",
  expectation: "Was sollte ein Student von diesem Kurs erwarten:"
};
const dashboard = {
  morning_heading: "Guten Morgen",
  afternoon_heading: "Guten Tag",
  evening_heading: "Guten Abend",
  create_course: "Kurs erstellen",
  view_site: "Website ansehen",
  visit_site: "Besuche die Website",
  hero_content: "Vielen Dank für das, was Sie tun ❤️. Sie verändern das Leben von Klassenzimmer zu Klassenzimmer und dank Ihnen ist die Welt ein besserer Ort. 😊",
  hero_button: "Bauen Sie weiter 🚀",
  your_schedule: "Dein Zeitplan",
  today: "Heute",
  yesterday: "Gestern",
  tomorrow: "Morgen",
  no_schedule: "An diesem Tag gibt es keinen Unterricht",
  join_call: "Nehmen Sie am Anruf teil",
  click_to_join: "Klicken Sie hier, um am Anruf teilzunehmen",
  no_call_link: "Für diese Lektion wurde kein Anruflink hinzugefügt. Fragen Sie Ihren Trainer",
  current_lesson: "Derzeit lernen",
  your_progress: "Dein Fortschritt",
  "continue": "Weitermachen",
  no_courses: "Es sind noch keine Kurse im Gange",
  start_course: "Sobald Sie einen Kurs beginnen, werden Ihre Fortschritte hier angezeigt",
  lms_dashboard_hero: "Heute ist ein weiterer Tag, um Sie Ihren Lernzielen näher zu bringen. Geben Sie nicht auf, je mehr Sie lernen, desto besser werden Sie.",
  dont: "Gib nicht auf",
  lessons_completed: "Lektionen abgeschlossen",
  No_courses_started: "Es wurden keine Kurse gestartet"
};
const schedule = {
  title: "Dein Zeitplan",
  essence: "Die Essenz der Design-Zusammenarbeit",
  figma: "Figma-Einführung",
  join: "Nehmen Sie am Anruf teil",
  no: "An diesem Tag gibt es keinen Unterricht"
};
const components = {
  settings: {
    domains: {
      add: "Hinzufügen",
      url: "URL",
      update: "Domäne aktualisieren",
      custom: "Benutzerdefinierten Domain",
      domain: "Fügen Sie Ihren eigenen Domainnamen hinzu",
      title: "Benutzerdefinierten Domain",
      save: "Speichern",
      your_domain: "Ihre Domain",
      custom_domain_error: "Sie können eine Top-Level-Domain nicht als benutzerdefinierte Domain hinzufügen. Verwenden Sie stattdessen eine Subdomain wie „Kurse.[IhreWebsite].com“ oder „www.[IhreWebsite].com“.",
      custom_domain_success: "Benutzerdefinierte Domäne erfolgreich hinzugefügt",
      dns_description: "Legen Sie bei Ihrem DNS-Anbieter den folgenden Eintrag fest, um fortzufahren:",
      dns_type: "Typ",
      dns_value: "Wert",
      dns_name: "Name",
      refresh: "Aktualisieren",
      remove: "Entfernen",
      custom_favicon: "Benutzerdefiniertes Favicon",
      custom_code: "Benutzerdefinierter Code"
    },
    "customize-lms": {
      title: "LMS anpassen",
      disabled: "deaktiviert",
      enabled: "Ermöglicht",
      save: "Änderungen speichern",
      apps: {
        title: "Apps",
        poll: "Umfrage",
        live_comment: "Live-Kommentare"
      },
      course: {
        title: "Kurs",
        newsfeed: "Neuigkeiten",
        grading: "Benotung"
      },
      dashboard: {
        title: "Armaturenbrett",
        community: "Gemeinschaft",
        exercises: "Übungen",
        banner_image: "Bannerbild",
        banner_image_btn: "Bannerbild aktualisieren",
        banner_text: "Bannertext",
        banner_text_label: "Bannertext aktualisieren",
        banner_text_placeholder: "Schreiben Sie hier den Text"
      }
    },
    customize_lms: {
      title: "LMS anpassen",
      enabled: "Ermöglicht",
      save: "Änderungen speichern",
      apps: {
        title: "Apps",
        poll: "Umfrage",
        live_comment: "Live-Kommentare"
      },
      course: {
        title: "Kurs",
        newsfeed: "Neuigkeiten",
        grading: "Benotung"
      },
      dashboard: {
        title: "Armaturenbrett",
        community: "Gemeinschaft",
        exercises: "Übungen",
        banner_image: "Bannerbild",
        banner_image_btn: "Bannerbild aktualisieren",
        banner_text: "Bannertext",
        banner_text_label: "Bannertext aktualisieren",
        banner_text_placeholder: "Schreiben Sie hier den Text"
      },
      disabled: "Deaktiviert"
    }
  },
  quiz: {
    title: "Quiz",
    second: "Sekunde(n)",
    answer: "Antwort(en)",
    question_delete: "Frage löschen",
    add_more: "+ Weitere Antworten hinzufügen",
    remove_last: "- Letzte Antwort entfernen",
    quiz_delete: "Quiz löschen",
    delete_question: "Sind Sie sicher, dass Sie diese Frage löschen möchten?",
    delete_quiz: "Möchten Sie dieses Quiz wirklich löschen?",
    lose_content: "Ihre Inhalte gehen verloren und diese Aktion kann nicht rückgängig gemacht werden.",
    "delete": "Löschen",
    update: "Aktualisieren",
    create: "Erstellen",
    a_quiz: "ein Quiz",
    quiz_title: "Quiz Titel",
    placeholder: "Ihr Quiztitel",
    save: "Änderungen speichern",
    "continue": "Weitermachen",
    rename: "Umbenennen",
    updated: "Aktualisiert",
    start: "Quiz starten",
    start_typing: "Beginnen Sie mit der Eingabe Ihrer Frage",
    required_field: "Dieses Feld ist erforderlich",
    type_answer: "Antwort eingeben",
    label: "Bitte geben Sie eine Bezeichnung ein",
    no_quizz: "Kein Quiz erstellt",
    interactive: "Erstellen Sie interaktive Tests mit Punktestand für Ihre Schüler."
  }
};
const markdown_editor = {
  write: "Schreiben",
  preview: "Vorschau"
};
const navigation = {
  goto: "Gehe zu",
  courses: "Kurse",
  home: "Heim",
  classroomio_home: "KinetsHub Home",
  dashboard: "Armaturenbrett",
  discussion: "Diskussion",
  people: "Menschen",
  goto_lms: "Gehen Sie zu LMS",
  goto_home: "Gehen Sie zur KinetsHub-Startseite",
  login: "Anmeldung",
  signup: "Melden Sie sich an",
  redirecting: "Umleiten",
  loading_state: "Bitte warten Sie, um zur nächsten Seite zu gelangen.",
  org_loading_state: "Wir bringen Sie zu Ihrer Organisation...",
  add_organization: "+ Organisation hinzufügen"
};
const add_org = {
  create_org: "Organisation erstellen",
  name: "Name der Organisation",
  org_sitename: "Name der Organisationssite",
  create: "Erstellen",
  sitename: "Sitename existiert bereits",
  error_organization: "Beim Erstellen dieser Organisation ist ein Fehler aufgetreten. Bitte laden Sie es neu und versuchen Sie es erneut"
};
const setup = {
  get_started: "Loslegen",
  publish_course: {
    title: "Veröffentlichen Sie einen Kurs",
    desc: "Machen Sie Ihren Kurs öffentlich und käuflich",
    button_label: "Kurs veröffentlichen"
  },
  exercise: {
    title: "Erstellen Sie eine Übung",
    desc: "Testen Sie Ihre Schüler und lassen Sie sie ihr Verständnis des Themas unter Beweis stellen",
    button_label: "Aufgabe erstellen"
  },
  lesson: {
    title: "Erstellen Sie eine Lektion",
    desc: "Teilen Sie Ihren Kurs in Lektionen auf, die Ihre Schüler leicht verstehen können",
    button_label: "Lektion erstellen"
  },
  course: {
    title: "Kurs erstellen",
    desc: "Erstellen Sie einen Kurs, den Sie mit Ihren Schülern teilen",
    button_label: "Kurs erstellen"
  },
  organization_profile: {
    title: "Aktualisieren Sie das Profilbild der Organisation",
    desc: "Schaffen Sie eine professionelle und wiedererkennbare Identität für Ihr Unternehmen",
    button_label: "Organisationsprofil aktualisieren"
  },
  personal_profile: {
    title: "Laden Sie ein Profilbild hoch und aktualisieren Sie den Benutzernamen",
    desc: "Personalisierung und eine menschliche Note machen Interaktionen persönlicher und unvergesslicher",
    button_label: "Profil aktualisieren"
  }
};
const pricing = {
  modal: {
    heading: "Upgrade-Plan",
    thanks: "Danke für Ihre Unterstützung",
    plan: "Ihr Plan beinhaltet coole Vergünstigungen und Vorteile, einschließlich Zugriff auf alle zukünftigen Funktionen, die wir veröffentlichen.",
    close: "Schließen",
    learn: "Erfahren Sie mehr",
    month: "Monat",
    monthly: "Monatlich",
    annually: "Jährlich",
    save: "Sparen Sie 2 Monate"
  },
  plan_names: {
    free: "Frei",
    early: "Frühzeitiger Anwender",
    enterprise: "Unternehmen"
  }
};
const org_navigation = {
  dashboard: "Armaturenbrett",
  courses: "Kurse",
  community: "Gemeinschaft",
  audience: "Publikum",
  setup: "Aufstellen",
  help: "Helfen",
  settings: "Einstellungen",
  early_adopter: "Werden Sie ein Early Adopter",
  unlock: "Schalten Sie unbegrenzte Funktionen frei und investieren Sie in unsere Zukunft",
  upgrade: "Jetzt upgraden"
};
const settings = {
  heading: "Einstellungen",
  billing: {
    sub_title: "Rechnungsdetails",
    manage: "Verwalten Sie Ihre Abrechnung",
    active: "Sie haben keine aktive Abrechnung",
    lemonsqueezy: "Wir verwenden Lemonsqueezy, um Sie bei der Verwaltung Ihrer Abrechnung zu unterstützen",
    open_billing: "Abrechnung öffnen"
  },
  integrations: {
    heading: "Telegramm",
    sub_heading: "Verbinden Sie Ihr Konto mit Telegram, um über jede Änderung innerhalb der Anwendung benachrichtigt zu werden.",
    step_authenticate: "Schritt 1: Authentifizieren Sie Ihr Konto über den ClassroomIO-Bot.",
    open_bot_button: "Bot öffnen",
    step_chatId: "Schritt 2: Geben Sie die Chat-ID ein, die Ihnen der Bot gegeben hat.",
    connect_button: "Verbinden",
    success_message: "Integration erfolgreich",
    disconnect: "Trennen"
  },
  landing_page: {
    heading: "Landingpage",
    show_section: "Abschnitt anzeigen",
    hide_section: "Abschnitt ausblenden",
    title: "Titel",
    title_highlight: "Titel-Highlight",
    subtitle: "Untertitel",
    save_changes: "Änderungen speichern",
    footer: {
      heading: "Fusszeile",
      show_section: "Abschnitt anzeigen",
      hide_section: "Abschnitt ausblenden",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn"
    },
    mailing_list: {
      heading: "Mailingliste",
      show_section: "Abschnitt anzeigen",
      hide_section: "Abschnitt ausblenden",
      title: "Titel",
      subtitle: "Untertitel",
      button_label: "Knopfbeschriftung"
    },
    contact_us: {
      heading: "Kontaktiere uns",
      show_section: "Abschnitt anzeigen",
      hide_section: "Abschnitt ausblenden",
      title: "Titel",
      title_highlight: "Titel-Highlight",
      subtitle: "Untertitel",
      phone_number: "Telefonnummer",
      email: "Email"
    },
    faq: {
      heading: "Häufig gestellte Fragen",
      show_section: "Abschnitt anzeigen",
      hide_section: "Abschnitt ausblenden",
      title: "Titel",
      question: "Frage",
      answer: "Antwort",
      button: "Neue FAQ hinzufügen",
      save: "Speichern",
      cancel: "Stornieren"
    },
    courses: {
      heading: "Kurse",
      show_section: "Abschnitt anzeigen",
      hide_section: "Abschnitt ausblenden",
      title: "Titel",
      title_highlight: "Titel-Highlight",
      subtitle: "Untertitel"
    },
    about: {
      heading: "Um",
      title: "Titel",
      content: "Inhalt",
      upload_an_image: "Lade ein Bild hoch",
      select_image: "Bild auswählen"
    },
    actions: {
      heading: "Aktionen",
      label: "Etikett",
      link: "Verknüpfung",
      no_redirect: "Keine Weiterleitung",
      redirect: "Umleiten",
      show_banner: "Banner anzeigen",
      hide_banner: "Banner ausblenden",
      banner_type: {
        heading: "Bannertyp",
        video: "Video",
        image: "Bild"
      }
    },
    background: {
      title: "Hintergrundbild",
      show_background: "Hintergrund anzeigen",
      hide_background: "Hintergrund ausblenden"
    }
  },
  organization: {
    organization_profile: {
      heading: "Organisationsprofil",
      organization_name: "Name der Organisation",
      upload_image: "Bild hochladen",
      update_organization: "Organisation aktualisieren",
      team: {
        heading: "Team",
        body: "Fügen Sie Ihrer Organisation Teamkollegen hinzu, damit Sie beide an Projekten zusammenarbeiten können.",
        button: "Team verwalten",
        sub_heading: "Stellen Sie Ihr Team zusammen"
      },
      custom_domain: {
        heading: "Benutzerdefinierten Domain",
        sub_heading: "Passen Sie Ihre Domain an",
        body: "Erstellen Sie eine benutzerdefinierte URL, damit Ihre Zielgruppe problemlos zu Ihrer Organisation gelangen kann",
        button: "Domäne bearbeiten"
      },
      theme: {
        heading: "Thema",
        sub_heading: "Legen Sie Ihre Markenfarbe fest",
        custom_theme: "Benutzerdefiniertes Thema",
        add_theme: "Thema hinzufügen"
      },
      customize_lms: {
        heading: "LMS anpassen",
        sub_heading: "Personalisieren Sie Ihr Organisations-LMS",
        button: "LMS anpassen",
        body: "Kontrollieren Sie die Lernerfahrung Ihrer Schüler. Sie können Registerkarten und Seiten aktivieren oder deaktivieren, LMS-Banner und In-App-Kommentare entsprechend den Anforderungen Ihres Unternehmens aktualisieren"
      }
    }
  },
  profile: {
    update_profile: "Profil aktualisieren",
    logout: "Ausloggen",
    personal_information: {
      heading: "Persönliche Angaben",
      full_name: "Vollständiger Name",
      username: "Nutzername",
      email: "Email"
    },
    profile_picture: {
      heading: "Profilbild",
      upload_image: "Bild hochladen",
      file_size: "Maximale Dateigröße:",
      accepted: "Akzeptiert:",
      validation_error: "Die Dateigröße überschreitet die maximale Grenze:"
    }
  },
  tabs: {
    profile_tab: "Profil",
    organization_tab: "Organisation",
    landing_page_tab: "Landingpage",
    billing_tab: "Abrechnung",
    integrations_tab: "Integrationen",
    language_tab: "Sprache"
  },
  subheadings: {
    view_site: "Website ansehen"
  }
};
const login = {
  welcome: "Willkommen zurück",
  email: "Deine E-Mail",
  password: "Ihr Passwort",
  forgot: "Passwort vergessen?",
  login: "Anmeldung"
};
const welcome_modal = {
  we_at: "Wir bei",
  small_team: "sind ein kleines Team mit der großen Mission, Pädagogen mit großartiger Technologie auszustatten, um ihnen bei der Ausbildung der zukünftigen Generation zu helfen. Bildung ist das größte Geschenk, das Sie jedem machen können, und es macht so viel Sinn, Ihnen alle Werkzeuge an die Hand zu geben, die Sie brauchen, um mehr Menschen dieses GESCHENK zu machen.",
  thank_you: "Danke, daß Sie uns gewählt haben",
  deeply_appreciate: "Wir wissen das sehr zu schätzen und stehen Ihnen gerne zur Verfügung."
};
const onboarding = {
  sell: "Kurse online verkaufen",
  teach: "Unterrichte meine derzeitigen Schüler online",
  expanding: "Auf einer anderen Plattform, hier erweitert",
  explore: "Nur zum Erkunden hier",
  articles: "Artikel",
  search: "Suchmaschine",
  social: "Sozialen Medien",
  friends: "Freunde und Familie",
  fullname: "Vollständiger Name",
  name: "Name der Organisation",
  organisation_sitename: "Name der Organisationssite",
  what_brings: "Was bringt dich dazu",
  how: "Wie sind Sie auf uns aufmerksam geworden?",
  back: "Zurück",
  "continue": "Weitermachen",
  employees: "Bilden Sie meine Mitarbeiter aus",
  customers: "Erstellen Sie Kurse für meine Kunden"
};
const verify_email_modal = {
  heading: "Bestätigen Sie Ihre E-Mail",
  sent_verification: "Wir haben eine Bestätigungs-E-Mail an gesendet",
  to_confirm: "um die Gültigkeit der angegebenen E-Mail zu bestätigen.",
  loading: "Wird geladen...",
  resend: "Bestätigungscode nochmal versenden",
  resend_in: "Bestätigung erneut senden",
  seconds: "Sekunden",
  snackbar_error: "Fehler beim Senden des Codes"
};
const generic = {
  locked: "Gesperrt",
  unlocked: "Entsperrt"
};
const specialization = {
  course_tag: "Spezialisierung"
};
const profileMenu = {
  profile: "PROFIL",
  current_org: "AKTUELLE ORGANISATION",
  free_tools: "KOSTENLOSE WERKZEUGE",
  progress: "Fortschrittsbericht",
  timer: "Aktivitätstimer",
  tic_tac: "Tictac-Zehe",
  see_more: "Mehr sehen",
  whats_new: "Was ist neu",
  launch_week: "Startwoche"
};
const validations = {
  invalid_type_error: "Darf nicht leer sein",
  email: {
    not_valid: "Ungültige E-Mail-Adresse"
  },
  course_payment: {
    email: {
      invalid_email: "Ungültige E-Mail-Adresse"
    },
    full_name: {
      min_char: "Muss mindestens 6 Zeichen lang sein"
    }
  },
  confirm_password: {
    not_match: "Passt nicht zum Passwort"
  },
  onboarding: {
    step_two: {
      source: {
        required: "Wähle eine Option"
      },
      goal: {
        required: "Wähle eine Option"
      }
    },
    step_one: {
      full_name: {
        min_char: "Der vollständige Name muss mindestens 5 Zeichen enthalten"
      }
    }
  },
  reset: {
    password: {
      min_char: "Muss mindestens 6 Zeichen lang sein"
    }
  },
  auth: {
    password: {
      min_char: "Muss mindestens 6 Zeichen lang sein"
    },
    email: {
      invalid_email: "Ungültige E-Mail-Adresse"
    }
  },
  forgot: {
    invalid_email: "Ungültige E-Mail-Adresse"
  },
  org_landing_page: {
    message: {
      min_char: "Muss mindestens 10 Zeichen lang sein"
    },
    phone: {
      min_char: "Muss mindestens 6 Zeichen lang sein"
    },
    email: {
      invalid_email: "Ungültige E-Mail-Adresse"
    },
    name: {
      min_char: "Muss mindestens 6 Zeichen lang sein"
    }
  },
  comment_in_community: {
    min_char: "Muss mindestens 6 Zeichen lang sein"
  },
  ask_community: {
    course_id: {
      select_course: "Wählen Sie einen Kurs aus"
    },
    body: {
      min_char: "Muss mindestens 10 Zeichen lang sein"
    },
    title: {
      min_char: "Muss mindestens 6 Zeichen lang sein"
    }
  },
  create_quiz: {
    min_char: "Muss mindestens 6 Zeichen lang sein"
  },
  lesson_schema: {
    empty_title: "Der Titel darf nicht leer sein"
  },
  news_feed: {
    min_char: "Das Feld muss 5 oder mehr Zeichen enthalten"
  },
  site_name: {
    min_char: "Der Site-Name muss mindestens 5 Zeichen enthalten",
    hyphen_rule: "Der Site-Name darf nicht mit einem Bindestrich beginnen oder enden"
  },
  organization_name: {
    min_char: "Die Organisation muss 5 oder mehr Zeichen enthalten",
    hyphen_rule: "Der Name der Organisation darf nicht mit einem Bindestrich beginnen oder enden"
  },
  user_profile: {
    email: "Ungültige E-Mail-Adresse",
    username: "Benutzername darf nicht leer sein",
    fullname: "Der Name sollte mindestens 5 Zeichen lang sein"
  }
};
const explore = {
  empty_heading: "Kein Kurs verfügbar",
  empty_description: "Derzeit sind keine veröffentlichten Kurse verfügbar",
  heading: "Entdecken Sie unsere Kurse"
};
const delete_modal = {
  label: "Löschen",
  content: "Bist du sicher?",
  no: "NEIN",
  yes: "Ja"
};
const de = {
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

export { add_org, ai, audience, community, components, content, course, courses, dashboard, de as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=de-a85f678c.js.map
