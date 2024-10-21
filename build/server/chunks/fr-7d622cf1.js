!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b1bdb834-8298-4400-97c5-8764fe73b2b1", e._sentryDebugIdIdentifier = "sentry-dbid-b1bdb834-8298-4400-97c5-8764fe73b2b1");
  } catch (e2) {
  }
}();
const content = {
  heading: "Internationalisation dans SvelteKit",
  toggle_label: "Sélectionnez la langue préférée"
};
const snackbar = {
  success: "Succès",
  something: "Quelque chose s'est mal passé - Veuillez réessayer plus tard",
  update: "Mise à jour",
  setup: {
    info_lesson: "Vous devez créer une leçon",
    info_course: "Vous devez créer un cours"
  },
  upgrade: {
    generate_fail: "N'a pas réussi à générer du succès",
    failed: "Échec, veuillez réessayer plus tard"
  },
  signup: {
    disposable: "L'e-mail que vous avez fourni est jetable"
  },
  community: {
    success: {
      comment_submitted: "Commentaire soumis !",
      success_delete: "Supprimé avec succès",
      question_submitted: "Question soumise !"
    },
    error: {
      try_again: "Erreur - Veuillez réessayer plus tard",
      deleting_comments: "Erreur lors de la suppression des commentaires",
      deleting_question: "Erreur lors de la suppression de la question"
    }
  },
  invite: {
    failed_join: "Échec de l'adhésion, veuillez contacter votre administrateur"
  },
  submissions: {
    success: {
      grading: "Note enregistrée et élève averti"
    }
  },
  marks: {
    error: "Erreur lors de la récupération des marques"
  },
  lessons: {
    error: {
      try_later: "Quelque chose ne va pas – Veuillez réessayer plus tard"
    },
    success: {
      complete_marked: "Marqué comme terminé",
      complete_download: "Téléchargement complet",
      version_restored: "Version restaurée avec succès"
    }
  },
  attendance: {
    error: {
      reload: "Quelque chose ne va pas. Veuillez recharger et reprendre la participation"
    }
  },
  course: {
    error: {
      reaction_error: "Une erreur s'est produite lors de la réaction au fil d'actualité",
      commenting_error: "Une erreur s'est produite lors de la création du commentaire",
      toggle_error: "Échec de l'activation du flux épinglé",
      news_feed_fail: "Échec de la récupération des flux d'actualités",
      feed_fetch_error: "Une erreur s'est produite lors de la récupération du flux"
    },
    success: {
      comment_deleted: "Commentaire supprimé",
      comment_added: "Commentaire ajouté",
      pinned: "Épinglé",
      unpinned: "Désépinglé",
      successfully: "Avec succès",
      feed_delete_success: "Flux supprimé avec succès"
    }
  },
  landing_page_settings: {
    success: {
      complete: "Complet :)"
    },
    error: {
      file_size: "La taille du fichier ne doit pas dépasser 500 Ko",
      try_again: "Essayer à nouveau",
      label: "Télécharger une image",
      fetch_error: "Erreur lors de la récupération des images depuis Unsplash"
    }
  },
  team_members: {
    invite_sent: "Invitation envoyée!",
    user_exists: "L'utilisateur existe déjà",
    invite_fail: "Échec de l'envoi de l'invitation, veuillez réessayer",
    remove_fail: "Échec de la suppression de l'utilisateur, veuillez réessayer"
  },
  lms: {
    error: {
      username_exists: "Ce nom d'utilisateur existe déjà",
      update: "Mise à jour a échoué:",
      try_again: "Veuillez réessayer"
    }
  },
  course_settings: {
    error: {
      not_right: "Quelque chose ne va pas - Veuillez réessayer plus tard",
      went_wrong: "Quelque chose s'est mal passé - Veuillez réessayer plus tard",
      title: "le titre ne peut pas être vide",
      description: "la description ne peut pas être vide",
      failed_integration: "Échec de l'intégration, veuillez réessayer plus tard",
      failed_deletion: "Échec de la suppression, veuillez réessayer plus tard"
    },
    success: {
      download: "Téléchargement complet",
      saved: "Enregistré avec succès",
      successful_integration: "Intégration réussie",
      successful_deletion: "Intégration supprimée",
      update_successful: "Mise à jour réussie"
    }
  },
  people: {
    success: {
      copied: "Copié dans le presse-papier"
    },
    error: {
      missing_data: "Données de l'organisation manquantes, veuillez recharger la page",
      no: "Aucun domaine d'organisation actuel"
    }
  },
  newsfeed: {
    error: {
      error: "Une erreur est survenue lors de",
      editing: "modification du flux",
      creating: "création de flux"
    },
    success: {
      edit: "Flux modifié avec succès",
      add: "Nouveau flux ajouté avec succès"
    }
  },
  materials: {
    apology: "Nous nous excusons, une erreur s'est produite lors de l'enregistrement de votre leçon.",
    update_translations: "Échec de la mise à jour des traductions",
    creating_new: "La création de nouvelles traductions a échoué"
  },
  exercise: {
    success: "Enregistré avec succès",
    submission_updated: "Soumission mise à jour pour",
    error_fetching: "La récupération des exercices a échoué, veuillez recharger la page"
  },
  poll: {
    info: {
      not_published: "Le sondage n'est pas encore publié",
      vote_once: "Vous pouvez voter seulement une fois"
    },
    error: {
      creating_poll: "Une erreur s'est produite lors de la création du sondage",
      updating_poll: "Une erreur s'est produite lors de la mise à jour de l'état du sondage",
      submitting_poll: "Une erreur s'est produite lors de la soumission du sondage"
    }
  },
  success_update: "Mis à jour avec succés",
  generic: {
    success_delete: "Supprimé avec succès",
    try_again: "Erreur - Veuillez réessayer plus tard"
  }
};
const exercises = {
  heading: "Des exercices",
  not_submitted: "Pas transmis",
  submitted: "Soumis",
  in_progress: "Classement en cours",
  graded: "Noté",
  lesson: "Leçon"
};
const my_learning = {
  heading: "Mon apprentissage",
  progress: "En cours",
  complete: "Complet",
  search: "Rechercher des cours",
  not_in_progress: "Aucun cours en cours",
  any_progress: "Tout cours que vous commencez sera affiché ici",
  not_completed: "Aucun cours terminé",
  any_course: "Tout cours que vous terminez sera affiché ici"
};
const lms_navigation = {
  home: "Maison",
  my_learning: "Mon apprentissage",
  exercise: "Exercice",
  community: "Communauté",
  help: "Aide",
  settings: "Paramètres",
  explore: "Explorer"
};
const upgrade = {
  certificate: "Mettez à niveau votre plan pour générer des certificats",
  team: "Mettez à niveau votre forfait pour ajouter des membres à l'équipe",
  team_members: "Membres de l'équipe",
  back: "Retour aux paramètres",
  download_lessons: "Mettre à niveau pour télécharger les leçons",
  download_course: "Mettre à niveau pour télécharger le cours",
  domain: "Mettez à niveau votre forfait pour ajouter des domaines personnalisés"
};
const audience = {
  title: "Public",
  "export": "Exporter",
  no_audience: "Aucune audience à gérer",
  manage: "Gérez tous vos étudiants ici et restez connecté avec eux",
  name: "Nom",
  email: "E-mail",
  date_joined: "Date d'adhésion",
  upgrade: "Améliorez votre forfait pour inviter plus d'étudiants"
};
const community = {
  title: "Communauté",
  ask_button: "Demander à la communauté",
  find_question: "Rechercher une question",
  asked: "demandé",
  answers: "réponses",
  no_question: "Aucune question posée",
  ask_a_question: "Poser une question à la communauté",
  "delete": {
    title: "Supprimer",
    question: "question",
    comment: "commentaire",
    sure: "Etes-vous sûr de vouloir supprimer ceci",
    no: "Non, garde-le",
    yes: "Oui, supprimer"
  },
  ask: {
    go_back: "Retourner",
    ask_the: "Demandez à la communauté",
    publish: "Publier",
    title: "Titre",
    select_course: "Sélectionnez un cours",
    ask_community: "Posez à la communauté toutes vos questions",
    question: "Question",
    save: "Sauvegarder",
    edit: "Modifier",
    cancel: "Annuler",
    give: "Donnez une réponse",
    comment: "Commentaire"
  },
  all: "Tous"
};
const course = {
  navItem: {
    settings: {
      heading: "Paramètres",
      cover_image: "Image de couverture",
      optional_image: "Cette image facultative apparaîtra sur votre page d'accueil. Si vous en incluez un, il doit mesurer au moins 280 x 200.",
      replace: "Remplacer",
      del: "Supprimer",
      course_details: "Détails du cours",
      course_title: "Titre de cours",
      course_description: "Description du cours",
      placeholder: "Écrivez ici la description de votre cours",
      link: "Lien du cours",
      grading: "Classement",
      reports: "Rendre les rapports de notation disponibles pour les leçons",
      disabled: "Désactivé",
      enabled: "Activé",
      order: "Onglet Commander des leçons",
      drag: "Faites glisser et déposez les étiquettes pour réorganiser vos onglets de matériaux",
      lesson_download: "Téléchargement des leçons",
      available: "Rendre la leçon disponible en téléchargement en pdf pour les étudiants inscrits",
      course_download: "Téléchargement du cours",
      course_avail: "Rendre le cours disponible en téléchargement pour les étudiants inscrits",
      download: "Télécharger",
      allow: "Autoriser les nouveaux étudiants",
      access: "Autoriser les nouveaux étudiants à accéder à ce cours",
      publish: "Publier le cours",
      determines: "Cela détermine si votre cours s'affiche sur votre page de destination",
      published: "Publié",
      unpublished: "Inédit",
      "delete": "Supprimer un cours",
      delete_text: "Supprimer ce cours, cette action est irréversible",
      save: "Sauvegarder les modifications",
      type: "Type de cours",
      course_type_desc: "Mettez à jour le type de cours pour une expérience plus personnalisée",
      live_class: "Cours en direct",
      self_paced: "À votre rythme"
    },
    landing_page: {
      start_course: "Commencer le cours",
      requirement: "Exigence",
      description: "Description du cours",
      learn: "Ce que vous apprendrez",
      certificate: "Certificat",
      certificate_text: "Lorsque vous aurez terminé tous les cours du programme, vous obtiendrez un certificat à partager avec votre réseau professionnel.",
      content: "Le contenu des cours",
      slide: "1 diapositive",
      note: "note",
      video: "vidéo",
      reviews: "Commentaires",
      see_all: "Voir tout",
      header_video: "Vidéo d'en-tête",
      no_course_published: "Aucun cours publié",
      coming_your_way: "Nous avons d'excellents cours à venir, restez à l'écoute !!!",
      view_less: "Voir moins",
      view_all: "Voir tout",
      thank_you: "Merci d'avoir laissé un message, nous vous répondrons sous peu",
      name: "votre nom",
      email: "Votre e-mail",
      phone: "Ton téléphone",
      message: "Votre message",
      your_message: "Votre message ici",
      submit: "Soumettre",
      successful_sub: "Vous avez été ajouté avec succès. Merci pour votre subscription.",
      enter: "Entrer votre Email...",
      powered_by: "Alimenté par",
      landing_page: "Page de destination",
      explore: "Explorer les cours",
      find: "Trouvez des cours que vous allez adorer dispensés par les meilleurs professeurs du monde entier",
      find_course: "Trouver un cours...",
      instructor: "Instructeur",
      courses: "cours",
      reviews_modal: {
        title: "Commentaires",
        rating: "Notation",
        ratings: "Notes"
      },
      pricing_section: {
        free: "Gratuit",
        not_accepting: "Ce cours n'accepte actuellement pas de nouveaux étudiants.",
        discount: "Rabais",
        enroll: "Inscrivez-vous maintenant",
        buy: "Acheter maintenant",
        bird: "Offre pour inscription anticipée. Achetez dès que possible"
      },
      upload_widget: {
        title: "Widget de bannière",
        width: "Les images plus larges que 1 500 pixels fonctionnent mieux.",
        size: "La taille maximale par fichier est de 500 Ko.",
        submit: "Soumettre",
        no_images: "Aucune image disponible."
      },
      editor: {
        save: "Sauvegarder",
        page_builder: "Générateur de pages",
        section: "section",
        pricing_form: {
          currency: "Devise",
          cost: "Coût",
          payment: "Lien de paiement",
          discount: "Rabais",
          no: "Non",
          yes: "Oui",
          percent: "Pourcentage de remise",
          gift: "À propos du cadeau"
        },
        instructor_form: {
          upload: "Logo de l'instructeur",
          name: "Nom de l'instructeur",
          name_placeholder: "Le nom de votre société",
          role: "Rôle d'instructeur",
          about: "À propos de l'instructeur",
          about_placeholder: "Un bref aperçu de l'instructure",
          total: "Nombre total de cours"
        },
        reviews_form: {
          add_reviews: "Ajouter des avis",
          fullname: "Nom et prénom",
          description: "Description",
          rating: "Notation",
          hide: "Masquer l'avis",
          validations: {
            invalid_type_error: "Ne doit pas être vide",
            description: {
              min_char: "'La description est trop courte, minimum 5 caractères"
            },
            rating: {
              message: "La note doit être comprise entre 1 et 5"
            },
            avatar_url: {
              message: "Télécharger une image"
            },
            name: {
              min_char: "Le nom est trop court, minimum 5 caractères"
            }
          }
        },
        header_form: {
          title: "Titre",
          description: "Description",
          short_video: "Courte vidéo",
          replace_cover: "Remplacer l'image de couverture",
          replace: "Remplacer",
          helper: "Entrez un lien vers une vidéo YouTube"
        },
        title: {
          header: "Entête",
          requirement: "Exigence",
          description: "Description",
          goals: "Objectifs",
          reviews: "Commentaires",
          instructor: "Instructeur",
          pricing: "Tarifs",
          certificate: "Certificat"
        },
        display_section: "Section d'affichage",
        certificate_form: {
          upload_template: "Modèle de certificat"
        }
      },
      course_content: "Contenu du cours",
      modules: "modules",
      lessons: "leçons",
      exercises: "exercices"
    },
    certificates: {
      title: "Certificats",
      certificate_settings: "Paramètres du certificat",
      theme: "Choisissez un thème",
      logo: "Logo de la marque",
      to_update: "Pour mettre à jour votre image de marque, rendez-vous sur",
      settings: "Paramètres > Paramètres de l'organisation",
      and_upload: "et téléchargez le logo de votre marque",
      goto_settings: "Aller aux paramètres",
      description: "Description du cours",
      placeholder: "une petite description du cours",
      allow: "Autoriser les étudiants à télécharger le certificat",
      locked: "Fermé à clé",
      unlocked: "Débloqué",
      save: "Sauvegarder les modifications",
      locked_certificate: "Certificats non disponibles",
      instructor_unlock: "Votre instructeur doit débloquer votre certificat.",
      contact_instructor: "Si vous avez besoin de votre certificat, veuillez contacter votre instructeur.",
      download_certificate: "Télécharger le certificat",
      unlocked_certificate: "Bravo! 🎉 votre attestation est prête",
      unlocked_certificate_subtitle: "Vous avez terminé ce cours et votre dévouement est évident. Téléchargez le certificat et partagez-le avec votre réseau comme preuve de vos compétences nouvellement acquises",
      complete_to_download_subtitle: "Votre certificat sera disponible une fois que vous aurez terminé toutes les leçons et exercices de ce cours.",
      complete_to_download_title: "Cours non terminé 😔",
      description_error: "La description ne peut pas dépasser 200 caractères",
      characters: "personnages",
      unexpected_error: "une erreur inattendue est apparue"
    },
    people: {
      title: "Personnes",
      add: "Ajouter",
      search: "Rechercher des personnes",
      you: "Toi",
      pending: "En attente",
      name: "Nom",
      role: "Rôle",
      action: "Action",
      feedback: "E-mail copié dans le presse-papiers",
      roles: {
        admin: "Administrateur",
        tutor: "Tuteur",
        student: "Étudiant",
        filter: "Filtre"
      },
      delete_confirmation: {
        title: "Supprimer",
        sure: "Etes-vous sûr que vous voulez supprimer",
        no: "Non",
        yes: "Oui"
      },
      invite_modal: {
        title: "Inviter des gens",
        invite: "Inviter des tuteurs",
        select: "Sélectionnez les tuteurs dans l'organisation...",
        to_add: "Pour ajouter un tuteur à votre organisation,",
        go_to: "accéder aux paramètres de l'organisation",
        invite_students: "Inviter des étudiants",
        via_link: "Vous pouvez inviter des étudiants via un lien d'invitation",
        copy_link: "Copier le lien",
        success: "Copié avec succès",
        finish: "Finition",
        via_qr: "Vous pouvez inviter des étudiants via QR",
        download_qr: "Télécharger le code QR",
        qr_downloading_snackbar: "Code QR généré avec succès, veuillez patienter pendant le téléchargement"
      },
      teams: {
        add: "Ajouter",
        add_team: "Ajoutez vos coéquipiers ou collaborateurs à votre organisation. Commencez à travailler ensemble",
        invite: "Inviter",
        placeholder: "email séparé par des virgules",
        role: "Rôle",
        send_invite: "Envoyer une invitation",
        members: "Membres",
        invite_sent: "Invitation envoyée",
        you: "Toi",
        remove: "Retirer"
      }
    },
    marks: {
      title: "Des marques",
      student: "Étudiant",
      total: "Total",
      no_student: "Aucun étudiant ajouté",
      "export": {
        csv: "Exporter au format CSV",
        pdf: "Exporter au format PDF"
      }
    },
    submissions: {
      title: "Exercices soumis",
      submission_status: {
        submitted: "Soumis",
        in_progress: "En cours",
        graded: "Noté"
      },
      grading_modal: {
        details: "Détails",
        early: "Tôt",
        late: "En retard",
        total_grade: "Note totale",
        student: "Étudiant",
        status: "Statut",
        add_comment: "Ajouter un commentaire",
        grade_with_ai: "Noter avec l'IA",
        submit_grades: "Soumettre les notes",
        accept_grade: "Accepter",
        reject_grade: "Rejeter",
        add_comment_placeholder: "laissez un commentaire",
        questions_tried: "Attribué ce score en raison du nombre total d'essais :",
        delete_prompt: "Supprimer",
        delete_error: "Échec de la suppression de la soumission",
        delete_success: "Soumission supprimée avec succès"
      }
    },
    attendance: {
      title: "Présence",
      present: "Présent",
      absent: "Absent",
      search_students: "Rechercher des étudiants",
      student: "Étudiant",
      lesson: "Leçon",
      no_student: "Aucun étudiant ajouté"
    },
    lessons: {
      heading: "Cours",
      join_lesson: "Rejoindre la leçon",
      no_link: "Pas de lien",
      no_tutor: "Aucun tuteur ajouté",
      body_header: "Pas encore de cours",
      body_content: "Partagez vos connaissances avec le monde en créant des leçons engageantes. Commencez par cliquer sur le bouton Ajouter.",
      download_pdf: "Télécharger le PDF",
      autosaving: "Sauvegarde automatique...",
      done: "Fait",
      edit: "Modifier",
      mark_as: "Marquer comme",
      incomplete: "Incomplet",
      complete: "Complet",
      poll: {
        voted: "Voté",
        created_by: "Créé par",
        status: "Statut",
        draft: "Brouillon",
        publish: "Publier",
        expiration: "Expiration",
        total_voted: "Total des votes",
        responses: "Réponses",
        expires: "Expire",
        today: "Aujourd'hui",
        back: "Dos",
        result: "Résultat",
        "delete": "Supprimer",
        create_poll: "Créer un sondage",
        question: "Question",
        options: "Possibilités",
        option_label: "Étiquette d'option",
        cancel: "Annuler",
        poll_question: "Question de sondage"
      },
      polls: {
        title: "Sondage",
        active_polls: "Sondages actifs",
        expired_polls: "Sondages expirés",
        loading: "Chargement...",
        no_polls: "Aucun sondage à afficher"
      },
      comments: {
        title: "commentaires",
        you: "Toi",
        placeholder: "Dire quelque chose"
      },
      exercises: {
        heading: "Tous les exercices",
        add_button: "Ajouter",
        no_exercises: "Aucun exercice ajouté pour cette leçon",
        no_assigned_exercises: "Votre tuteur n'a assigné aucun exercice à cette leçon. Pour la plupart, vous pouvez",
        chill: "chill avec les grands",
        add_exercise: "Partagez vos connaissances avec le monde en créant des exercices engageants. Ajoutez un exercice maintenant.",
        all_exercises: {
          heading: "Tous les exercices",
          questions: "Des questions",
          submissions: "Soumissions",
          save: "Sauvegarder",
          preview: "Aperçu",
          reorder: "Réorganiser les questions",
          delete_exercise: "Supprimer l'exercice",
          order_questions: "Questions de commande",
          write_your_answer: "Ecrivez votre réponse",
          write_your_answer_here: "Écrivez votre réponse ici",
          write_your_question_here: "Écrivez votre question ici",
          write_your_title: "Écrivez votre titre ici",
          write_your_subtitle: "Écrivez votre sous-titre ici",
          highlight: "Écrivez ici le surlignage de votre titre",
          content: "Écrivez votre contenu ici",
          video: "Écrivez votre lien vidéo ici",
          link: "Écrivez votre lien ici",
          label: "Écrivez votre étiquette ici",
          email: "Écrivez votre email ici",
          facebook: "Écrivez votre lien Facebook ici",
          twitter: "Écrivez votre lien Twitter ici",
          linkedin: "Écrivez votre lien LinkedIn ici",
          number: "Écrivez votre numéro de téléphone ici",
          previous: "Précédent",
          finish: "Finition",
          next: "Suivant",
          analytics: {
            submissions: "Soumissions",
            individual: {
              heading: "Individuel",
              answers: "Réponses individuelles",
              no: "Aucune réponse n'a été fournie"
            },
            summary: {
              heading: "Résumé",
              question_chart: "Tableaux de questions"
            }
          },
          view_mode: {
            no_question: "Aucune question ajoutée pour cet exercice",
            edit: "Modifier",
            button: "bouton pour ajouter",
            questions: "des questions",
            points: "points",
            all: "Tout est requis",
            due: "Due par",
            no_description: "Pas de description",
            start: "Commencer",
            graded: "Noté",
            pending: "En attente",
            submitted: "Soumis",
            status_pending: "Statut : En attente d'examen",
            status_graded: "Statut : Examen terminé",
            status_submitted: "Statut : Soumis"
          },
          edit_mode: {
            delete_modal: "Supprimer le modal",
            sure: "Êtes-vous sûr de vouloir supprimer cet exercice ?",
            no: "Non, annule",
            yes: "Oui, supprimer",
            deleting: "Suppression...",
            error: "Vous avez des erreurs",
            question: "Question",
            write: "Écrivez votre code",
            option: "Ajouter une option",
            question_types: {
              single: "Réponse unique",
              multiple: "Plusieurs réponses",
              paragraph: "Paragraphe"
            }
          },
          delete_confirmation: {
            title: "Supprimer la question",
            sure: "Êtes-vous sûr de vouloir supprimer cette question",
            no: "Non, s'il te plaît, ne le fais pas",
            yes: "Oui, supprimer"
          },
          description: {
            title: "Titre",
            heading: "Description",
            describe: "Décrivez l'exercice à votre élève",
            no: "Pas de description"
          },
          no_answer: "Aucune réponse n'a été fournie",
          check: "Vérifier"
        },
        new_exercise_modal: {
          heading: "Nouvel exercice",
          how: "Comment voulez-vous créer votre exercice",
          coming_soon: "À venir",
          next: "Suivant",
          title: "Donnez un titre à votre exercice",
          title_placeholder: "Nom de l'exercice",
          finish: "Finition",
          select_template: "Sélectionnez un modèle",
          questions: "Des questions",
          points: "Points",
          back: "Dos",
          create_exercises: "Créez des exercices à partir de Notes avec l'IA",
          choose_questions: "Choisissez le nombre de questions et d'options que vous souhaitez et l'IA vous aidera à créer un exercice à partir de votre note. Allons-y.",
          how_many_questions: "Combien de questions souhaitez-vous créer ?",
          how_many_options: "Combien d’options par question souhaitez-vous ?",
          add_note: "Veuillez ajouter une note pour utiliser cette fonctionnalité",
          generate: "Générer",
          completion: "Génération d'IA terminée",
          click_generate: "Cliquez sur « Générer » pour un peu de magie",
          options: {
            from_scratch: "De zéro",
            from_scratch_subtitle: "Créez votre exercice à partir de zéro si vous avez déjà préparé vos questions",
            use_template: "Utiliser un modèle",
            use_template_subtitle: "Choisissez parmi plus de 100 modèles d'exercices prédéfinis pour vous aider à démarrer",
            use_ai: "Utiliser l'IA",
            use_ai_subtitle: "Vous pouvez générer un exercice avec l'IA à partir de vos notes"
          }
        }
      },
      materials: {
        body_heading: "Aucune note, vidéo ou diapositive ajoutée pour cette leçon pour le moment",
        body_content: "Partagez vos connaissances avec vos élèves en créant du contenu engageant. Commencez par cliquer sur",
        get_started: "Commencer",
        no_translation: "Aucune traduction pour la langue sélectionnée",
        button: "bouton",
        button_done: "Fait",
        tabs: {
          video: {
            title: "Vidéo",
            embed_link: "Intégrer le lien",
            upload: "Télécharger",
            button: "Ajouter/Modifier des vidéos",
            add_video: {
              title: "Ajouter une vidéo",
              add_by: "Ajouter par",
              youtube_link: "Lien Youtube",
              videos_added: "Vidéos ajoutées",
              add_video: "Ajouter une vidéo",
              upload_video: "Télécharger une video",
              select_file: "Sélectionnez le fichier (Mp4, MOV, AVI) à télécharger dans votre leçon.",
              size: "(Maximum 500 Mo)",
              oops: "Oups 😬, impossible de télécharger la vidéo",
              big_file: "Désolé, la vidéo n'a pas été téléchargée. La taille du fichier est trop grande,",
              maximum_size: "la taille maximale est de 30 Mo. Essayer à nouveau!",
              button: "Essayez un autre fichier",
              try_again: "Veuillez réessayer",
              unsupported_format: "Désolé, notre vidéo n'a pas été téléchargée, le format de fichier n'est pas pris en charge ou quelque chose s'est mal passé sur le serveur.",
              format: "Téléchargez des fichiers MP4, MOV et AVI.",
              upgrade: "Mettez à niveau votre forfait pour télécharger des vidéos",
              uploading: "Téléchargement...",
              invalid_youtube: "Lien(s) YouTube invalide(s)",
              invalid_link: "Lien(s) invalide(s)"
            }
          },
          slide: {
            title: "Glisser",
            slide_link: "Lien de diapositive",
            helper_message: "Vous pouvez intégrer Google Slides ou Canva Présentation"
          },
          note: {
            title: "Note",
            placeholder: "Écrivez votre note de cours ici",
            ai: {
              outline: "Générer un plan de leçon",
              note: "Générer une note de cours",
              activities: "Générer des activités de cours"
            }
          }
        }
      },
      lesson_nav: {
        materials: "Matériaux",
        exercises: "Des exercices"
      },
      add_lesson: {
        button_title: "Ajouter",
        modal_heading: "Ajouter une nouvelle leçon",
        lesson_title: "Titre de la leçon",
        click_to: "Cliquez pour",
        fullname: "nom et prénom",
        save: "Sauvegarder",
        edit: "Modifier",
        "delete": "Supprimer",
        lock: "Verrouillage",
        unlock: "Ouvrir",
        start_reorder: "Réorganiser",
        end_reorder: "Terminer la réapprovisionnement",
        modal_heading_section: "Ajouter une nouvelle section",
        lesson_section_title: "Titre de la section",
        cancel: "Annuler"
      },
      disabled: "La fonctionnalité est désactivée",
      next: "Suivant",
      prev: "Précédent",
      version_history: {
        title: "Historique des versions",
        fetch_more_versions: "Récupérer plus de versions",
        current_version: "Version actuelle",
        restore_version: "Restaurer cette version"
      },
      drag: "faites glisser une carte pour réorganiser",
      no_lesson: "Pas encore de cours",
      share_your_knowledge: "Partagez vos connaissances avec le monde en créant des leçons engageantes. Commencez par cliquer sur le bouton Ajouter.",
      heading_v2: "Contenu",
      section_prompt: {
        cta: "Activer les sections",
        header: "Activer les sections",
        title: "Nous avons lancé des sections de cours",
        description: "Vous pouvez désormais regrouper les leçons en sections pour organiser votre contenu et rendre l'apprentissage plus fluide pour vos élèves.",
        activate: "Activer",
        cancel: "Annuler"
      }
    },
    news_feed: {
      heading: "Fil d'actualité",
      body_header: "Pas encore de message",
      body_content: "Faites un message dans votre classe. Commencez par cliquer sur le bouton Ajouter.",
      pinned: "Épinglé",
      snackbar: {
        comment_deleted: "Commentaire supprimé",
        reaction_error: "Une erreur s'est produite lors de la réaction au fil d'actualité",
        comment_creation_error: "Une erreur s'est produite lors de la création du commentaire",
        add_comment_success: "Commentaire ajouté",
        toggle_pin_error: "Échec de l'activation du flux épinglé",
        unpinned: "Désépinglé",
        successfully: "Avec succès",
        feed_delete_success: "Flux supprimé avec succès",
        fetch_feed_fail: "Échec de la récupération des flux d'actualités",
        fetching_error: "Une erreur s'est produite lors de la récupération du flux"
      },
      heading_button: {
        title: "Ajouter",
        edit_post: "Modifier le message",
        make_a_post: "Créer un message",
        placeholder: "Partagez une mise à jour avec vos étudiants",
        cancel: "Annuler",
        post: "Poste"
      }
    }
  },
  navItems: {
    nav_news_feed: "Fil d'actualité",
    nav_attendance: "Présence",
    nav_submissions: "Soumissions",
    nav_marks: "Des marques",
    nav_people: "Personnes",
    nav_certificates: "Certificats",
    nav_landing_page: "Page de destination",
    nav_settings: "Paramètres",
    nav_content: "Contenu"
  },
  not_permitted: {
    header: "Aucune autorisation",
    body: "Malheureusement, vous n'avez pas accès à ce cours.",
    button: "rentrer chez soi"
  }
};
const courses = {
  heading: "Cours",
  heading_button: "Créer un cours",
  search_placeholder: "Trouver un cours",
  new_course_modal: {
    heading: "Créer un cours",
    course_name: "Nom du cours",
    course_name_placeholder: "Le nom de votre cours",
    short_description: "brève description",
    short_description_placeholder: "Une petite description de ce cours",
    button: "Finition",
    type: "Type de cours",
    type_selector_title: "Quel type de cours envisagez-vous ?",
    back: "Dos",
    next: "Suivant"
  },
  course_card: {
    empty_title: "Aucun cours créé",
    empty_description: "Partagez vos connaissances avec le monde en créant des cours attrayants pour vos étudiants.",
    error_message: "Une erreur s'est produite.",
    lessons_number: "cours",
    students: "étudiants",
    published: "Publié",
    unpublished: "Inédit",
    continue_course: "Continuer le cours",
    list_view: {
      title: "Titre",
      description: "Description",
      lessons: "Cours",
      students: "Étudiants",
      published: "Publié",
      type: "Taper"
    },
    context_menu: {
      clone: "Cloner",
      share: "Partager",
      invite: "Inviter",
      "delete": "Supprimer"
    },
    get_course: "Obtenir un cours",
    learn_more: "Apprendre encore plus"
  },
  course_filter: {
    date_created: "date créée",
    published: "Publié",
    lessons: "Cours"
  }
};
const ai = {
  help_me: "Aide-moi à écrire",
  placeholder: "Aide-moi à rédiger une brève description",
  text: "Commencer à écrire...",
  reset: "Réinitialiser",
  rephrase: "Reformuler",
  insert: "Insérer",
  can_you: "Pouvez-vous s'il vous plaît reformuler ceci",
  requirements: "Veuillez écrire quelques exigences nécessaires pour suivre ce cours :",
  description: "Veuillez rédiger une description détaillée de ce cours :",
  expectation: "Que doit espérer apprendre un étudiant de ce cours :"
};
const dashboard = {
  morning_heading: "Bonjour",
  afternoon_heading: "Bon après-midi",
  evening_heading: "Bonne soirée",
  create_course: "Créer un cours",
  view_site: "Voir le site",
  visit_site: "Visitez le site Web",
  hero_content: "Merci pour ce que vous faites ❤️. Vous changez des vies, une classe à la fois et grâce à vous, le monde est meilleur. 😊",
  hero_button: "Continuez à construire 🚀",
  your_schedule: "Votre emploi du temps",
  today: "Aujourd'hui",
  yesterday: "Hier",
  tomorrow: "Demain",
  no_schedule: "Pas de cours ce jour",
  join_call: "Rejoindre l'appel",
  click_to_join: "Cliquez pour rejoindre l'appel",
  no_call_link: "Aucun lien d'appel n'a été ajouté pour cette leçon. Demandez à votre entraîneur",
  current_lesson: "En cours d'apprentissage",
  your_progress: "Votre progression",
  "continue": "Continuer",
  no_courses: "Aucun cours en cours pour le moment",
  start_course: "Une fois que vous aurez commencé un cours, vos progrès seront reflétés ici",
  lms_dashboard_hero: "Aujourd'hui est un autre jour pour vous rapprocher de vos objectifs d'apprentissage. N'abandonnez pas, plus vous apprenez, mieux vous vous améliorez.",
  dont: "N'abandonne pas",
  lessons_completed: "Leçons terminées",
  No_courses_started: "Aucun cours n'a commencé"
};
const schedule = {
  title: "Votre emploi du temps",
  essence: "L’essence de la collaboration en matière de conception",
  figma: "Présentation de Figma",
  join: "Rejoindre l'appel",
  no: "Pas de cours ce jour"
};
const components = {
  settings: {
    domains: {
      add: "Ajouter",
      url: "URL",
      update: "Mettre à jour le domaine",
      custom: "Domaine personnalisé",
      domain: "Ajoutez votre propre nom de domaine",
      title: "Domaine personnalisé",
      save: "Sauvegarder",
      your_domain: "Votre domaine",
      custom_domain_error: "Vous ne pouvez pas ajouter un domaine de premier niveau en tant que domaine personnalisé. Utilisez plutôt un sous-domaine tel que « courses.[votresite Web].com » ou « www.[votre site Web].com ».",
      custom_domain_success: "Domaine personnalisé ajouté avec succès",
      dns_description: "Définissez l'enregistrement suivant sur votre fournisseur DNS pour continuer :",
      dns_type: "Taper",
      dns_value: "Valeur",
      dns_name: "Nom",
      refresh: "Rafraîchir",
      remove: "Retirer",
      custom_favicon: "Icône de favori personnalisée",
      custom_code: "Code personnalisé"
    },
    "customize-lms": {
      title: "Personnaliser le LMS",
      disabled: "désactivé",
      enabled: "Activé",
      save: "Sauvegarder les modifications",
      apps: {
        title: "applications",
        poll: "Sondage",
        live_comment: "Commentaires en direct"
      },
      course: {
        title: "Cours",
        newsfeed: "Fil d'actualité",
        grading: "Classement"
      },
      dashboard: {
        title: "Tableau de bord",
        community: "Communauté",
        exercises: "Des exercices",
        banner_image: "Image de la bannière",
        banner_image_btn: "Mettre à jour l'image de la bannière",
        banner_text: "Texte de la bannière",
        banner_text_label: "Mettre à jour le texte de la bannière",
        banner_text_placeholder: "Écrivez le texte ici"
      }
    },
    customize_lms: {
      title: "Personnaliser le LMS",
      enabled: "Activé",
      save: "Sauvegarder les modifications",
      apps: {
        title: "applications",
        poll: "Sondage",
        live_comment: "Commentaires en direct"
      },
      course: {
        title: "Cours",
        newsfeed: "Fil d'actualité",
        grading: "Classement"
      },
      dashboard: {
        title: "Tableau de bord",
        community: "Communauté",
        exercises: "Des exercices",
        banner_image: "Image de la bannière",
        banner_image_btn: "Mettre à jour l'image de la bannière",
        banner_text: "Texte de la bannière",
        banner_text_label: "Mettre à jour le texte de la bannière",
        banner_text_placeholder: "Écrivez le texte ici"
      },
      disabled: "Désactivé"
    }
  },
  quiz: {
    title: "Quiz",
    second: "Seconde(s)",
    answer: "Réponses)",
    question_delete: "Supprimer la question",
    add_more: "+ Ajouter plus de réponses",
    remove_last: "- Supprimer la dernière réponse",
    quiz_delete: "Supprimer le questionnaire",
    delete_question: "Êtes-vous sûr de vouloir supprimer cette question ?",
    delete_quiz: "Etes-vous sûr de vouloir supprimer ce quiz ?",
    lose_content: "Vous perdrez votre contenu et cette action ne pourra pas être annulée.",
    "delete": "Supprimer",
    update: "Mise à jour",
    create: "Créer",
    a_quiz: "un quiz",
    quiz_title: "Titre du quiz",
    placeholder: "Titre de votre quiz",
    save: "Sauvegarder les modifications",
    "continue": "Continuer",
    rename: "Renommer",
    updated: "Mis à jour",
    start: "Démarrer le quiz",
    start_typing: "Commencez à taper votre question",
    required_field: "Ce champ est obligatoire",
    type_answer: "Tapez la réponse",
    label: "Veuillez saisir un libellé",
    no_quizz: "Aucun quiz créé",
    interactive: "Créez des quiz interactifs avec tableau de bord pour vos élèves."
  }
};
const markdown_editor = {
  write: "Écrire",
  preview: "Aperçu"
};
const navigation = {
  goto: "Aller à",
  courses: "Cours",
  home: "Maison",
  classroomio_home: "Accueil ClassroomIO",
  dashboard: "Tableau de bord",
  discussion: "Discussion",
  people: "Personnes",
  goto_lms: "Aller au LMS",
  goto_home: "Accéder à l'accueil ClassroomIO",
  login: "Se connecter",
  signup: "S'inscrire",
  redirecting: "Redirection",
  loading_state: "Vous passez à la page suivante, veuillez patienter.",
  org_loading_state: "Vous emmener dans votre organisation...",
  add_organization: "+ Ajouter une organisation"
};
const add_org = {
  create_org: "Créer une organisation",
  name: "Nom de l'organisation",
  org_sitename: "Nom du site de l'organisation",
  create: "Créer",
  sitename: "Le nom du site existe déjà",
  error_organization: "Quelque chose s'est mal passé lors de la création de cette organisation. Veuillez recharger et réessayer"
};
const setup = {
  get_started: "Commencer",
  publish_course: {
    title: "Publier un cours",
    desc: "Rendre votre cours public et achetable",
    button_label: "Publier un cours"
  },
  exercise: {
    title: "Créer un exercice",
    desc: "Testez vos élèves pour leur permettre de démontrer leur compréhension du sujet",
    button_label: "Créer une affectation"
  },
  lesson: {
    title: "Créer une leçon",
    desc: "Divisez votre cours en leçons que vos élèves peuvent facilement comprendre",
    button_label: "Créer une leçon"
  },
  course: {
    title: "Créer un cours",
    desc: "Créez un cours que vous partagerez avec vos étudiants",
    button_label: "Créer un cours"
  },
  organization_profile: {
    title: "Mettre à jour la photo de profil de l'organisation",
    desc: "Établissez une identité professionnelle et reconnaissable pour votre organisation",
    button_label: "Mettre à jour le profil de l'organisation"
  },
  personal_profile: {
    title: "Téléchargez une photo de profil et mettez à jour le nom d'utilisateur",
    desc: "Personnaliser et apporter une touche humaine rendant les interactions plus personnelles et mémorables",
    button_label: "Mettre à jour le profil"
  }
};
const pricing = {
  modal: {
    heading: "Plan de mise à niveau",
    thanks: "Merci pour votre soutien",
    plan: "Votre forfait s'accompagne d'avantages et d'avantages intéressants, notamment l'accès à toutes les futures fonctionnalités que nous publions.",
    close: "Fermer",
    learn: "Apprendre encore plus",
    month: "mois",
    monthly: "Mensuel",
    annually: "Annuellement",
    save: "Économisez 2 mois"
  },
  plan_names: {
    free: "Gratuit",
    early: "Adopteur précoce",
    enterprise: "Entreprise"
  }
};
const org_navigation = {
  dashboard: "Tableau de bord",
  courses: "Cours",
  community: "Communauté",
  audience: "Public",
  setup: "Installation",
  help: "Aide",
  settings: "Paramètres",
  early_adopter: "Devenez un adopteur précoce",
  unlock: "Débloquez des fonctionnalités illimitées et investissez dans notre avenir",
  upgrade: "Mettre à jour maintenant"
};
const settings = {
  heading: "Paramètres",
  billing: {
    sub_title: "Détails de la facturation",
    manage: "Gérez votre facturation",
    active: "Vous n'avez aucune facturation active",
    lemonsqueezy: "Nous utilisons Lemonsqueezy pour vous aider à gérer votre facturation",
    open_billing: "Facturation ouverte"
  },
  integrations: {
    heading: "Télégramme",
    sub_heading: "Connectez votre compte à Telegram pour être informé de tout changement dans l'application.",
    step_authenticate: "Étape 1 : Authentifiez votre compte via le bot ClassroomIO.",
    open_bot_button: "Ouvrir le robot",
    step_chatId: "Étape 2 : Saisissez l’ID de chat qui vous a été fourni par le bot.",
    connect_button: "Connecter",
    success_message: "Intégration réussie",
    disconnect: "Déconnecter"
  },
  landing_page: {
    heading: "Page de destination",
    show_section: "Afficher la section",
    hide_section: "Section cachée",
    title: "Titre",
    title_highlight: "Titre-Point culminant",
    subtitle: "Sous-titre",
    save_changes: "Sauvegarder les modifications",
    footer: {
      heading: "Bas de page",
      show_section: "Afficher la section",
      hide_section: "Section cachée",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn"
    },
    mailing_list: {
      heading: "Liste de diffusion",
      show_section: "Afficher la section",
      hide_section: "Section cachée",
      title: "Titre",
      subtitle: "Sous-titre",
      button_label: "Étiquette de bouton"
    },
    contact_us: {
      heading: "Contactez-nous",
      show_section: "Afficher la section",
      hide_section: "Section cachée",
      title: "Titre",
      title_highlight: "Titre-Point culminant",
      subtitle: "Sous-titre",
      phone_number: "Numéro de téléphone",
      email: "E-mail"
    },
    faq: {
      heading: "Questions fréquemment posées",
      show_section: "Afficher la section",
      hide_section: "Section cachée",
      title: "Titre",
      question: "Question",
      answer: "Répondre",
      button: "Ajouter une nouvelle FAQ",
      save: "Sauvegarder",
      cancel: "Annuler"
    },
    courses: {
      heading: "Cours",
      show_section: "Afficher la section",
      hide_section: "Section cachée",
      title: "Titre",
      title_highlight: "Titre-Point culminant",
      subtitle: "Sous-titre"
    },
    about: {
      heading: "À propos",
      title: "Titre",
      content: "Contenu",
      upload_an_image: "Télécharger une image",
      select_image: "Sélectionnez une image"
    },
    actions: {
      heading: "Actions",
      label: "Étiquette",
      link: "Lien",
      no_redirect: "Pas de redirection",
      redirect: "Réorienter",
      show_banner: "Afficher la bannière",
      hide_banner: "Masquer la bannière",
      banner_type: {
        heading: "Type de bannière",
        video: "Vidéo",
        image: "Image"
      }
    },
    background: {
      title: "Image d'arrière-plan",
      show_background: "Afficher l'arrière-plan",
      hide_background: "Masquer l'arrière-plan"
    }
  },
  organization: {
    organization_profile: {
      heading: "Profil de l'organisation",
      organization_name: "nom de l'organisation",
      upload_image: "Télécharger une image",
      update_organization: "Mettre à jour l'organisation",
      team: {
        heading: "Équipe",
        body: "Ajoutez des coéquipiers à votre organisation afin que vous puissiez tous les deux collaborer sur des projets.",
        button: "Gérer l'équipe",
        sub_heading: "Configurez votre équipe"
      },
      custom_domain: {
        heading: "Domaine personnalisé",
        sub_heading: "Personnalisez votre domaine",
        body: "Créez une URL personnalisée pour que votre public puisse accéder facilement à votre organisation",
        button: "Modifier le domaine"
      },
      theme: {
        heading: "Thème",
        sub_heading: "Définissez la couleur de votre marque",
        custom_theme: "Thème personnalisé",
        add_theme: "Ajouter un thème"
      },
      customize_lms: {
        heading: "Personnaliser le LMS",
        sub_heading: "Personnalisez le LMS de votre organisation",
        button: "Personnaliser le LMS",
        body: "Contrôlez l’expérience d’apprentissage de vos étudiants. Vous pouvez activer ou désactiver les onglets et les pages, mettre à jour la bannière LMS et les commentaires dans l'application en fonction des besoins de votre organisation."
      }
    }
  },
  profile: {
    update_profile: "Mettre à jour le profil",
    logout: "Se déconnecter",
    personal_information: {
      heading: "Informations personnelles",
      full_name: "Nom et prénom",
      username: "Nom d'utilisateur",
      email: "E-mail"
    },
    profile_picture: {
      heading: "Image de profil",
      upload_image: "Télécharger une image",
      file_size: "Taille maximale du fichier :",
      accepted: "Accepté:",
      validation_error: "La taille du fichier dépasse la limite maximale :"
    }
  },
  tabs: {
    profile_tab: "Profil",
    organization_tab: "Organisation",
    landing_page_tab: "Page de destination",
    billing_tab: "Facturation",
    integrations_tab: "Intégrations",
    language_tab: "Langue"
  },
  subheadings: {
    view_site: "Voir le site"
  }
};
const login = {
  welcome: "Content de te revoir",
  email: "Votre email",
  password: "Votre mot de passe",
  forgot: "Mot de passe oublié?",
  login: "Se connecter"
};
const welcome_modal = {
  we_at: "Nous à",
  small_team: "est une petite équipe avec une grande mission : doter les éducateurs d'une technologie de pointe pour les aider à former la génération future. L’éducation est le cadeau le plus puissant que vous puissiez offrir à quiconque, et il est tout à fait logique de vous donner tous les outils dont vous avez besoin pour offrir ce CADEAU à davantage de personnes.",
  thank_you: "Merci de nous avoir choisi",
  deeply_appreciate: "nous l'apprécions profondément et sommes à votre service."
};
const onboarding = {
  sell: "Vendre des cours en ligne",
  teach: "Enseigner en ligne à mes étudiants actuels",
  expanding: "Sur une autre plateforme, en expansion ici",
  explore: "Juste ici pour explorer",
  articles: "Des articles",
  search: "Moteur de recherche",
  social: "Réseaux sociaux",
  friends: "Amis et famille",
  fullname: "Nom et prénom",
  name: "Nom de l'organisation",
  organisation_sitename: "Nom du site de l'organisation",
  what_brings: "Qu'est-ce qui t'amène à",
  how: "Comment avez-vous entendu parler de nous?",
  back: "Dos",
  "continue": "Continuer",
  employees: "Former mes collaborateurs",
  customers: "Créer des cours pour mes clients"
};
const verify_email_modal = {
  heading: "Vérifiez votre e-mail",
  sent_verification: "Nous avons envoyé un e-mail de vérification à",
  to_confirm: "pour confirmer la validité de l'e-mail fourni.",
  loading: "Chargement...",
  resend: "Renvoyer le code de vérification",
  resend_in: "Renvoyer la vérification dans",
  seconds: "secondes",
  snackbar_error: "erreur lors de l'envoi du code"
};
const generic = {
  locked: "Fermé à clé",
  unlocked: "Débloqué"
};
const specialization = {
  course_tag: "Spécialisation"
};
const profileMenu = {
  profile: "PROFIL",
  current_org: "ORGANISATION ACTUELLE",
  free_tools: "OUTILS GRATUITS",
  progress: "Rapport d'étape",
  timer: "Minuterie d'activité",
  tic_tac: "Tic-tac",
  see_more: "Voir plus",
  whats_new: "Quoi de neuf",
  launch_week: "Semaine de lancement"
};
const validations = {
  invalid_type_error: "Ne doit pas être vide",
  email: {
    not_valid: "E-mail non valide"
  },
  course_payment: {
    email: {
      invalid_email: "Adresse e-mail invalide"
    },
    full_name: {
      min_char: "Doit contenir au moins 6 caractères"
    }
  },
  confirm_password: {
    not_match: "Ne correspond pas au mot de passe"
  },
  onboarding: {
    step_two: {
      source: {
        required: "Choisir une option"
      },
      goal: {
        required: "Choisir une option"
      }
    },
    step_one: {
      full_name: {
        min_char: "Le nom complet doit contenir 5 caractères ou plus"
      }
    }
  },
  reset: {
    password: {
      min_char: "Doit contenir au moins 6 caractères"
    }
  },
  auth: {
    password: {
      min_char: "Doit contenir au moins 6 caractères"
    },
    email: {
      invalid_email: "Adresse e-mail invalide"
    }
  },
  forgot: {
    invalid_email: "Adresse e-mail invalide"
  },
  org_landing_page: {
    message: {
      min_char: "Doit contenir au moins 10 caractères"
    },
    phone: {
      min_char: "Doit contenir au moins 6 caractères"
    },
    email: {
      invalid_email: "Adresse e-mail invalide"
    },
    name: {
      min_char: "Doit contenir au moins 6 caractères"
    }
  },
  comment_in_community: {
    min_char: "Doit contenir au moins 6 caractères"
  },
  ask_community: {
    course_id: {
      select_course: "Sélectionnez un cours"
    },
    body: {
      min_char: "Doit contenir au moins 10 caractères"
    },
    title: {
      min_char: "Doit contenir au moins 6 caractères"
    }
  },
  create_quiz: {
    min_char: "Doit contenir au moins 6 caractères"
  },
  lesson_schema: {
    empty_title: "Le titre ne peut pas être vide"
  },
  news_feed: {
    min_char: "Le champ doit contenir 5 caractères ou plus"
  },
  site_name: {
    min_char: "Le nom du site doit contenir 5 caractères ou plus",
    hyphen_rule: "Le nom du site ne peut pas commencer ou se terminer par un trait d'union"
  },
  organization_name: {
    min_char: "L'organisation doit contenir 5 caractères ou plus",
    hyphen_rule: "Le nom de l'organisation ne peut pas commencer ou se terminer par un trait d'union"
  },
  user_profile: {
    email: "Adresse e-mail invalide",
    username: "Le nom d'utilisateur ne peut pas être vide",
    fullname: "Le nom doit comporter au minimum 5 caractères"
  }
};
const explore = {
  empty_heading: "Aucun cours disponible",
  empty_description: "Il n'y a actuellement aucun cours publié disponible",
  heading: "Découvrez nos cours"
};
const delete_modal = {
  label: "Supprimer",
  content: "Es-tu sûr?",
  no: "Non",
  yes: "Oui"
};
const fr = {
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

export { add_org, ai, audience, community, components, content, course, courses, dashboard, fr as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=fr-7d622cf1.js.map
