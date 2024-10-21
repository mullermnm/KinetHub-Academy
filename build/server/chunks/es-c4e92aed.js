!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d0591fb4-9f67-4db9-a524-6cb9d2516a65", e._sentryDebugIdIdentifier = "sentry-dbid-d0591fb4-9f67-4db9-a524-6cb9d2516a65");
  } catch (e2) {
  }
}();
const content = {
  heading: "Internacionalización en SvelteKit",
  toggle_label: "Seleccionar idioma preferido"
};
const snackbar = {
  success: "Éxito",
  something: "Algo salió mal. Inténtelo más tarde.",
  update: "Actualizar",
  setup: {
    info_lesson: "Necesitas crear una lección",
    info_course: "Necesitas crear un curso."
  },
  upgrade: {
    generate_fail: "No se pudo generar éxito",
    failed: "Error, inténtelo de nuevo más tarde"
  },
  signup: {
    disposable: "El correo electrónico que proporcionaste es desechable."
  },
  community: {
    success: {
      comment_submitted: "¡Comentario enviado!",
      success_delete: "Borrado exitosamente",
      question_submitted: "¡Pregunta enviada!"
    },
    error: {
      try_again: "Error: inténtelo de nuevo más tarde",
      deleting_comments: "Error al eliminar comentarios",
      deleting_question: "Error al eliminar la pregunta"
    }
  },
  invite: {
    failed_join: "No se pudo unir, comuníquese con su administrador"
  },
  submissions: {
    success: {
      grading: "Calificación guardada y notificación al estudiante"
    }
  },
  marks: {
    error: "Error al recuperar las marcas"
  },
  lessons: {
    error: {
      try_later: "Algo no está bien. Inténtelo más tarde."
    },
    success: {
      complete_marked: "Marcado como completo",
      complete_download: "Descarga completa",
      version_restored: "Versión restaurada exitosamente"
    }
  },
  attendance: {
    error: {
      reload: "Algo no está bien. Por favor recarga y toma asistencia nuevamente."
    }
  },
  course: {
    error: {
      reaction_error: "Se produjo un error al reaccionar a las noticias.",
      commenting_error: "Se produjo un error al crear el comentario.",
      toggle_error: "No se pudo alternar el feed fijado",
      news_feed_fail: "No se pudieron recuperar las fuentes de noticias",
      feed_fetch_error: "Se produjo un error al obtener el feed."
    },
    success: {
      comment_deleted: "Comentario borrado",
      comment_added: "Comentario añadido",
      pinned: "Fijado",
      unpinned: "Desanclar",
      successfully: "Exitosamente",
      feed_delete_success: "Feed eliminado correctamente"
    }
  },
  landing_page_settings: {
    success: {
      complete: "Completo :)"
    },
    error: {
      file_size: "El tamaño del archivo no debe ser superior a 500 kb.",
      try_again: "Intentar otra vez",
      label: "Cargar imagen",
      fetch_error: "Error al recuperar imágenes de Unsplash"
    }
  },
  team_members: {
    invite_sent: "¡Invitar enviado!",
    user_exists: "El usuario ya existe",
    invite_fail: "No se pudo enviar la invitación, inténtelo de nuevo",
    remove_fail: "No se pudo eliminar el usuario, inténtelo de nuevo"
  },
  lms: {
    error: {
      username_exists: "nombre de usuario ya existe",
      update: "La actualización falló:",
      try_again: "Inténtalo de nuevo"
    }
  },
  course_settings: {
    error: {
      not_right: "Algo no está bien. Inténtelo más tarde.",
      went_wrong: "Algo salió mal. Inténtelo más tarde.",
      title: "el título no puede estar vacío",
      description: "la descripción no puede estar vacía",
      failed_integration: "Error de integración, inténtelo de nuevo más tarde",
      failed_deletion: "Error al eliminar, inténtelo de nuevo más tarde"
    },
    success: {
      download: "Descarga completa",
      saved: "Guardado exitosamente",
      successful_integration: "Integración exitosa",
      successful_deletion: "Integración eliminada",
      update_successful: "Actualización exitosa"
    }
  },
  people: {
    success: {
      copied: "Copiado al portapapeles"
    },
    error: {
      missing_data: "Faltan datos de la organización, por favor recarga la página",
      no: "No hay dominio de organización actual"
    }
  },
  newsfeed: {
    error: {
      error: "Un error ocurrió mientras",
      editing: "editar feed",
      creating: "creando feed"
    },
    success: {
      edit: "Feed editado correctamente",
      add: "Nuevo feed agregado exitosamente"
    }
  },
  materials: {
    apology: "Lo sentimos, hubo un error al guardar tu lección.",
    update_translations: "Error al actualizar las traducciones",
    creating_new: "Error al crear nuevas traducciones"
  },
  exercise: {
    success: "Guardado exitosamente",
    submission_updated: "Envío actualizado a",
    error_fetching: "No se han podido recuperar los ejercicios. Vuelva a cargar la página."
  },
  poll: {
    info: {
      not_published: "La encuesta aún no está publicada",
      vote_once: "Solo puedes votar una vez"
    },
    error: {
      creating_poll: "Se produjo un error al crear la encuesta.",
      updating_poll: "Se produjo un error al actualizar el estado de la encuesta.",
      submitting_poll: "Se produjo un error al enviar la encuesta."
    }
  },
  success_update: "Actualizado exitosamente",
  generic: {
    success_delete: "Borrado exitosamente",
    try_again: "Error: inténtelo de nuevo más tarde"
  }
};
const exercises = {
  heading: "Ejercicios",
  not_submitted: "No presentado",
  submitted: "Enviado",
  in_progress: "Calificación en progreso",
  graded: "Calificado",
  lesson: "Lección"
};
const my_learning = {
  heading: "Mi aprendizaje",
  progress: "En curso",
  complete: "Completo",
  search: "Buscar cursos",
  not_in_progress: "Ningún curso en curso",
  any_progress: "Cualquier curso que inicies se mostrará aquí.",
  not_completed: "Ningún curso completado",
  any_course: "Cualquier curso que completes se mostrará aquí."
};
const lms_navigation = {
  home: "Hogar",
  my_learning: "Mi aprendizaje",
  exercise: "Ejercicio",
  community: "Comunidad",
  help: "Ayuda",
  settings: "Ajustes",
  explore: "Explorar"
};
const upgrade = {
  certificate: "Actualice su plan para generar certificados",
  team: "Actualice su plan para agregar miembros al equipo",
  team_members: "Miembros del equipo",
  back: "Volver a configuración",
  download_lessons: "Actualice para descargar lecciones",
  download_course: "Actualizar para descargar el curso",
  domain: "Actualice su plan para agregar dominios personalizados"
};
const audience = {
  title: "Audiencia",
  "export": "Exportar",
  no_audience: "No hay audiencia para administrar",
  manage: "Administre a todos sus estudiantes aquí y manténgase conectado con ellos",
  name: "Nombre",
  email: "Correo electrónico",
  date_joined: "Fecha de Registro",
  upgrade: "Actualice su plan para invitar a más estudiantes"
};
const community = {
  title: "Comunidad",
  ask_button: "Pregunta a la comunidad",
  find_question: "Buscar pregunta",
  asked: "preguntó",
  answers: "respuestas",
  no_question: "No se hicieron preguntas",
  ask_a_question: "Haz una pregunta a la comunidad.",
  "delete": {
    title: "Borrar",
    question: "pregunta",
    comment: "comentario",
    sure: "Estás seguro que quieres eliminar esto",
    no: "No, mantenlo",
    yes: "Si, borrar"
  },
  ask: {
    go_back: "Regresa",
    ask_the: "pregunta a la comunidad",
    publish: "Publicar",
    title: "Título",
    select_course: "Seleccionar Curso",
    ask_community: "Pregunta a la comunidad cualquier duda que tengas",
    question: "Pregunta",
    save: "Ahorrar",
    edit: "Editar",
    cancel: "Cancelar",
    give: "Da una respuesta",
    comment: "Comentario"
  },
  all: "Todo"
};
const course = {
  navItem: {
    settings: {
      heading: "Ajustes",
      cover_image: "Imagen de portada",
      optional_image: "Esta imagen opcional aparecerá en su página de bienvenida. Si incluyes uno, debe tener al menos 280 x 200",
      replace: "Reemplazar",
      del: "Borrar",
      course_details: "detalles del curso",
      course_title: "Título del curso",
      course_description: "Descripción del curso",
      placeholder: "Escribe aquí la descripción de tu curso",
      link: "Enlace del curso",
      grading: "Calificación",
      reports: "Hacer que los informes de calificaciones estén disponibles para las lecciones",
      disabled: "Desactivado",
      enabled: "Activado",
      order: "Pestaña Ordenar lecciones",
      drag: "Arrastre y suelte las etiquetas para reordenar las pestañas de materiales",
      lesson_download: "Lecciones DescargarCargar",
      available: "Haga que la lección esté disponible para descargar en pdf para estudiantes registrados",
      course_download: "Descarga del curso",
      course_avail: "Hacer que el curso esté disponible para su descarga para los estudiantes registrados",
      download: "Descargar",
      allow: "Permitir nuevos estudiantes",
      access: "Permitir que nuevos estudiantes accedan a este curso",
      publish: "Publicar curso",
      determines: "Esto determina si su curso se muestra en su página de destino.",
      published: "Publicado",
      unpublished: "Inédito",
      "delete": "Eliminar curso",
      delete_text: "Eliminar este curso, esta acción no se puede deshacer",
      save: "Guardar cambios",
      type: "Tipo de curso",
      course_type_desc: "Actualiza el tipo de curso para una experiencia más personalizada",
      live_class: "clase en vivo",
      self_paced: "Ritmo propio"
    },
    landing_page: {
      start_course: "Iniciar curso",
      requirement: "Requisito",
      description: "Descripción del curso",
      learn: "lo que aprenderás",
      certificate: "Certificado",
      certificate_text: "Cuando completes todos los cursos del programa, obtendrás un Certificado para compartir con tu red profesional.",
      content: "Contenido del curso",
      slide: "1 diapositiva",
      note: "nota",
      video: "video",
      reviews: "Reseñas",
      see_all: "Ver todo",
      header_video: "Vídeo de encabezado",
      no_course_published: "Ningún curso publicado",
      coming_your_way: "¡Tenemos excelentes cursos en camino, estad atentos!",
      view_less: "Ver menos",
      view_all: "Ver todo",
      thank_you: "Gracias por dejar un mensaje, nos comunicaremos con usted en breve",
      name: "Su nombre",
      email: "Tu correo electrónico",
      phone: "Su teléfono",
      message: "Tu mensaje",
      your_message: "Su mensaje aquí",
      submit: "Entregar",
      successful_sub: "Has sido agregado exitosamente. Gracias por suscribirte.",
      enter: "Introduce tu correo electrónico...",
      powered_by: "Energizado por",
      landing_page: "Página de destino",
      explore: "Explorar cursos",
      find: "Encuentra cursos que te encantarán de los mejores profesores de todo el mundo",
      find_course: "Encuentra un curso...",
      instructor: "Instructor",
      courses: "cursos",
      reviews_modal: {
        title: "Reseñas",
        rating: "Clasificación",
        ratings: "Calificaciones"
      },
      pricing_section: {
        free: "Gratis",
        not_accepting: "Este curso actualmente no acepta nuevos estudiantes.",
        discount: "Descuento",
        enroll: "Enlístate ahora",
        buy: "Comprar ahora",
        bird: "Oferta por reserva anticipada. Compre lo antes posible"
      },
      upload_widget: {
        title: "Widget de banner",
        width: "Las imágenes con una anchura superior a 1500 píxeles funcionan mejor.",
        size: "El tamaño máximo por archivo es de 500kb.",
        submit: "Entregar",
        no_images: "No hay imágenes disponibles."
      },
      editor: {
        save: "Ahorrar",
        page_builder: "Creador de páginas",
        section: "sección",
        pricing_form: {
          currency: "Divisa",
          cost: "Costo",
          payment: "Enlace de pago",
          discount: "Descuento",
          no: "No",
          yes: "Sí",
          percent: "Porcentaje de descuento",
          gift: "Acerca del regalo"
        },
        instructor_form: {
          upload: "Logotipo del instructor",
          name: "Nombre del Instructor",
          name_placeholder: "El nombre de tu compañía",
          role: "Rol del instructor",
          about: "Acerca del instructor",
          about_placeholder: "Una breve historia sobre la infraestructura.",
          total: "Número total de cursos"
        },
        reviews_form: {
          add_reviews: "Agregar reseñas",
          fullname: "Nombre completo",
          description: "Descripción",
          rating: "Clasificación",
          hide: "Ocultar reseña",
          validations: {
            invalid_type_error: "No debe estar vacío",
            description: {
              min_char: "'La descripción es demasiado corta, mínimo de 5 caracteres."
            },
            rating: {
              message: "La calificación debe ser del 1 al 5."
            },
            avatar_url: {
              message: "Subir una imagen"
            },
            name: {
              min_char: "El nombre es demasiado corto, mínimo de 5 caracteres."
            }
          }
        },
        header_form: {
          title: "Título",
          description: "Descripción",
          short_video: "Video corto",
          replace_cover: "Reemplazar imagen de portada",
          replace: "Reemplazar",
          helper: "Introduce un enlace a un vídeo de youtube."
        },
        title: {
          header: "Encabezamiento",
          requirement: "Requisito",
          description: "Descripción",
          goals: "Objetivos",
          reviews: "Reseñas",
          instructor: "Instructor",
          pricing: "Precios",
          certificate: "Certificado"
        },
        display_section: "Sección de visualización",
        certificate_form: {
          upload_template: "Plantilla de certificado"
        }
      },
      course_content: "Contenido del curso",
      modules: "módulos",
      lessons: "lecciones",
      exercises: "ceremonias"
    },
    certificates: {
      title: "Certificados",
      certificate_settings: "Configuración del certificado",
      theme: "Elige un tema",
      logo: "Logotipo",
      to_update: "Para actualizar su imagen de marca, vaya a",
      settings: "Configuración > Configuración de la organización",
      and_upload: "y sube el logo de tu marca",
      goto_settings: "Ir a la configuración",
      description: "Descripción del curso",
      placeholder: "una pequeña descripción sobre el curso",
      allow: "Permitir a los estudiantes descargar el certificado",
      locked: "bloqueado",
      unlocked: "desbloqueado",
      save: "Guardar cambios",
      locked_certificate: "Certificados no disponibles",
      instructor_unlock: "Su instructor necesita desbloquear su certificado.",
      contact_instructor: "Si necesita su certificado, comuníquese con su instructor.",
      download_certificate: "Descargar certificado",
      unlocked_certificate: "¡Felicitaciones! 🎉 tu certificado está listo",
      unlocked_certificate_subtitle: "Has completado este curso y tu dedicación es evidente. Descargue el certificado y compártalo con su red como prueba de su habilidad recién adquirida",
      complete_to_download_subtitle: "Su certificado estará disponible una vez que complete todas las lecciones y ejercicios de este curso.",
      complete_to_download_title: "Curso no completo 😔",
      description_error: "La descripción no puede exceder los 200 caracteres.",
      characters: "caracteres",
      unexpected_error: "ocurrió un error inesperado"
    },
    people: {
      title: "Gente",
      add: "Agregar",
      search: "Busca gente",
      you: "Tú",
      pending: "Pendiente",
      name: "Nombre",
      role: "Role",
      action: "Acción",
      feedback: "Correo electrónico copiado al portapapeles",
      roles: {
        admin: "Administración",
        tutor: "Tutor",
        student: "Alumno",
        filter: "Filtrar"
      },
      delete_confirmation: {
        title: "Borrar",
        sure: "estas seguro que quieres borrarlo",
        no: "No",
        yes: "Sí"
      },
      invite_modal: {
        title: "Invitar a la gente",
        invite: "Invitar tutores",
        select: "Seleccionar tutores en organización...",
        to_add: "Para agregar un tutor a su organización,",
        go_to: "ir a la configuración de la organización",
        invite_students: "Invitar estudiantes",
        via_link: "Puede invitar a estudiantes a través de un enlace de invitación",
        copy_link: "Copiar link",
        success: "Copiado correctamente",
        finish: "Finalizar",
        via_qr: "Puedes invitar estudiantes a través de QR",
        download_qr: "Descargar código QR",
        qr_downloading_snackbar: "El código QR se generó correctamente. Espere mientras se descarga."
      },
      teams: {
        add: "Agregar",
        add_team: "Agregue sus compañeros de equipo o colaboradores a su organización. Empezar a trabajar juntos",
        invite: "Invitar",
        placeholder: "correo electrónico separado por comas",
        role: "Role",
        send_invite: "Enviar invitación",
        members: "Miembros",
        invite_sent: "Invitar enviado",
        you: "Tú",
        remove: "Eliminar"
      }
    },
    marks: {
      title: "Marcas",
      student: "Alumno",
      total: "Total",
      no_student: "No se agregó ningún estudiante",
      "export": {
        csv: "Exportar como CSV",
        pdf: "Exportar como PDF"
      }
    },
    submissions: {
      title: "Ejercicios enviados",
      submission_status: {
        submitted: "Enviado",
        in_progress: "En curso",
        graded: "Calificado"
      },
      grading_modal: {
        details: "Detalles",
        early: "Temprano",
        late: "Tarde",
        total_grade: "Nota total",
        student: "Alumno",
        status: "Estado",
        add_comment: "Agregar comentario",
        grade_with_ai: "Calificar con IA",
        submit_grades: "Enviar calificaciones",
        accept_grade: "Aceptar",
        reject_grade: "Rechazar",
        add_comment_placeholder: "Deja un comentario",
        questions_tried: "Se asignó esta puntuación debido al total de intentos:",
        delete_prompt: "Borrar",
        delete_error: "No se pudo eliminar el envío",
        delete_success: "Envío eliminado correctamente"
      }
    },
    attendance: {
      title: "Asistencia",
      present: "Presente",
      absent: "Ausente",
      search_students: "Buscar estudiantes",
      student: "Alumno",
      lesson: "Lección",
      no_student: "No se agregó ningún estudiante"
    },
    lessons: {
      heading: "Lecciones",
      join_lesson: "Unirse a la lección",
      no_link: "No hay enlace",
      no_tutor: "No se agregó ningún tutor",
      body_header: "Aún no hay lecciones",
      body_content: "Comparta sus conocimientos con el mundo creando lecciones interesantes. Comience haciendo clic en el botón Agregar.",
      download_pdf: "Descargar PDF",
      autosaving: "Guardado automático...",
      done: "Hecho",
      edit: "Editar",
      mark_as: "marcar como",
      incomplete: "Incompleto",
      complete: "Completo",
      poll: {
        voted: "Votado",
        created_by: "Creado por",
        status: "Estado",
        draft: "Borrador",
        publish: "Publicar",
        expiration: "Vencimiento",
        total_voted: "Total de votos",
        responses: "Respuestas",
        expires: "Vence",
        today: "Hoy",
        back: "Atrás",
        result: "Resultado",
        "delete": "Borrar",
        create_poll: "Crear encuesta",
        question: "Pregunta",
        options: "Opciones",
        option_label: "Etiqueta de opción",
        cancel: "Cancelar",
        poll_question: "Pregunta de la encuesta"
      },
      polls: {
        title: "Encuesta",
        active_polls: "Encuestas activas",
        expired_polls: "Encuestas caducadas",
        loading: "Cargando...",
        no_polls: "No hay encuestas para mostrar"
      },
      comments: {
        title: "Comentarios",
        you: "Tú",
        placeholder: "Di algo"
      },
      exercises: {
        heading: "Todos los ejercicios",
        add_button: "Agregar",
        no_exercises: "No se agregaron ejercicios para esta lección.",
        no_assigned_exercises: "Tu tutor no ha asignado ningún ejercicio a esta lección. Por lo general, puedes",
        chill: "relájate con los grandes",
        add_exercise: "Comparte tus conocimientos con el mundo creando ejercicios atractivos. Añade un ejercicio ahora.",
        all_exercises: {
          heading: "Todo ejercicio",
          questions: "Preguntas",
          submissions: "Envíos",
          save: "Ahorrar",
          preview: "Avance",
          reorder: "Reordenar preguntas",
          delete_exercise: "Eliminar ejercicio",
          order_questions: "Preguntas sobre pedidos",
          write_your_answer: "Escribe tu respuesta",
          write_your_answer_here: "Escribe tu respuesta aquí",
          write_your_question_here: "Escribe tu pregunta aquí",
          write_your_title: "Escribe tu título aquí",
          write_your_subtitle: "Escribe tu subtítulo aquí",
          highlight: "Escribe tu título resaltado aquí",
          content: "Escribe tu contenido aquí",
          video: "Escribe aquí el enlace de tu vídeo",
          link: "Escribe tu enlace aquí",
          label: "Escribe tu etiqueta aquí",
          email: "Escribe tu correo electrónico aquí",
          facebook: "Escribe aquí tu enlace de Facebook",
          twitter: "Escribe aquí tu enlace de Twitter",
          linkedin: "Escribe aquí tu enlace de LinkedIn",
          number: "Escribe aquí tu número de teléfono",
          previous: "Anterior",
          finish: "Finalizar",
          next: "Próximo",
          analytics: {
            submissions: "Envíos",
            individual: {
              heading: "Individual",
              answers: "Respuestas individuales",
              no: "No se proporcionó respuesta"
            },
            summary: {
              heading: "Resumen",
              question_chart: "Cuadros de preguntas"
            }
          },
          view_mode: {
            no_question: "No se agregó ninguna pregunta para este ejercicio.",
            edit: "Editar",
            button: "botón para agregar",
            questions: "preguntas",
            points: "puntos",
            all: "Todo lo requerido",
            due: "Debido por",
            no_description: "Sin descripción",
            start: "Comenzar",
            graded: "Calificado",
            pending: "Pendiente",
            submitted: "Enviado",
            status_pending: "Estado: Pendiente de revisión",
            status_graded: "Estado: Revisión completada",
            status_submitted: "Estado: Enviado"
          },
          edit_mode: {
            delete_modal: "Eliminar modal",
            sure: "¿Estás seguro de que deseas eliminar este ejercicio?",
            no: "No, cancelar",
            yes: "Si, borrar",
            deleting: "Eliminando...",
            error: "Tienes algunos errores",
            question: "Pregunta",
            write: "Escribe tu código",
            option: "Agregar opción",
            question_types: {
              single: "respuesta única",
              multiple: "Múltiples respuestas",
              paragraph: "Párrafo"
            }
          },
          delete_confirmation: {
            title: "Eliminar pregunta",
            sure: "¿Estás seguro de que quieres eliminar esta pregunta?",
            no: "No, por favor no",
            yes: "Si, borrar"
          },
          description: {
            title: "Título",
            heading: "Descripción",
            describe: "Describe el ejercicio a tu estudiante.",
            no: "Sin descripción"
          },
          no_answer: "No se proporcionó respuesta",
          check: "Controlar"
        },
        new_exercise_modal: {
          heading: "Nuevo ejercicio",
          how: "¿Cómo quieres crear tu ejercicio?",
          coming_soon: "Muy pronto",
          next: "Próximo",
          title: "Ponle un título a tu ejercicio.",
          title_placeholder: "Nombre del ejercicio",
          finish: "Finalizar",
          select_template: "Seleccione una plantilla",
          questions: "Preguntas",
          points: "Puntos",
          back: "Atrás",
          create_exercises: "Crea ejercicios desde Notes con IA",
          choose_questions: "Elige cuántas preguntas y opciones quieres y la IA te ayudará a crear un ejercicio a partir de tu nota. Vamos.",
          how_many_questions: "¿Cuántas preguntas quieres crear?",
          how_many_options: "¿Cuántas opciones por pregunta quieres?",
          add_note: "Por favor agregue una nota para usar esta función",
          generate: "Generar",
          completion: "Generación de IA completa",
          click_generate: "Haga clic en 'Generar' para algo de magia",
          options: {
            from_scratch: "Desde cero",
            from_scratch_subtitle: "Crea tu ejercicio desde cero si ya tienes tus preguntas preparadas",
            use_template: "Utilice una plantilla",
            use_template_subtitle: "Seleccione entre más de 100 plantillas de ejercicios predefinidos para ayudarle a comenzar",
            use_ai: "Usa IA",
            use_ai_subtitle: "Puedes generar un ejercicio con IA a partir de tus notas"
          }
        }
      },
      materials: {
        body_heading: "Aún no se ha agregado ninguna nota, video o diapositiva para esta lección",
        body_content: "Comparta sus conocimientos con sus alumnos creando contenido atractivo. Comience haciendo clic en",
        get_started: "Empezar",
        no_translation: "No hay traducción para el idioma seleccionado.",
        button: "botón",
        button_done: "Hecho",
        tabs: {
          video: {
            title: "Video",
            embed_link: "Insertar enlace",
            upload: "Subir",
            button: "Agregar/editar vídeos",
            add_video: {
              title: "Agregar un vídeo",
              add_by: "Agregar por",
              youtube_link: "Enlace de Youtube",
              videos_added: "Vídeos añadidos",
              add_video: "Añadir video",
              upload_video: "Subir vídeo",
              select_file: "Seleccione el archivo (Mp4, MOV, AVI) para cargarlo en su lección.",
              size: "(Máximo 500 MB)",
              oops: "Ups `😬, no se pudo subir el video",
              big_file: "Lo sentimos, el video no fue subido. El tamaño del archivo es demasiado grande,",
              maximum_size: "el tamaño máximo es 30 MB. ¡Intentar otra vez!",
              button: "Prueba con otro archivo",
              try_again: "Inténtalo de nuevo",
              unsupported_format: "Lo sentimos, el video no se subió, el formato de archivo no es compatible o algo salió mal en el servidor.",
              format: "Sube archivos MP4, MOV y AVI.",
              upgrade: "Actualiza tu plan para subir videos",
              uploading: "Subiendo...",
              invalid_youtube: "Enlace(s) de YouTube no válido(s)",
              invalid_link: "Enlace(s) no válido(s)"
            }
          },
          slide: {
            title: "Deslizar",
            slide_link: "Enlace deslizante",
            helper_message: "Puede incrustar presentaciones de Google Slides o Canva"
          },
          note: {
            title: "Nota",
            placeholder: "Escribe tu nota de lección aquí.",
            ai: {
              outline: "Generar esquema de lección",
              note: "Generar nota de lección",
              activities: "Generar actividades lectivas"
            }
          }
        }
      },
      lesson_nav: {
        materials: "Materiales",
        exercises: "Ejercicios"
      },
      add_lesson: {
        button_title: "Agregar",
        modal_heading: "Agregar nueva lección",
        lesson_title: "Título de la lección",
        click_to: "Haga clic para",
        fullname: "nombre completo",
        save: "Ahorrar",
        edit: "Editar",
        "delete": "Borrar",
        lock: "Cerrar",
        unlock: "desbloquear",
        start_reorder: "Reordenar",
        end_reorder: "Finalizar reorden",
        modal_heading_section: "Agregar nueva sección",
        lesson_section_title: "Título de la sección",
        cancel: "Cancelar"
      },
      disabled: "La característica está deshabilitada",
      next: "Próximo",
      prev: "Anterior",
      version_history: {
        title: "Historial de versiones",
        fetch_more_versions: "Obtener más versiones",
        current_version: "Versión actual",
        restore_version: "Restaurar esta versión"
      },
      drag: "arrastra una tarjeta para reordenar",
      no_lesson: "Aún no hay lecciones",
      share_your_knowledge: "Comparta sus conocimientos con el mundo creando lecciones interesantes. Comience haciendo clic en el botón Agregar.",
      heading_v2: "Contenido",
      section_prompt: {
        cta: "Habilitar secciones",
        header: "Habilitar secciones",
        title: "Lanzamos secciones del curso",
        description: "Ahora puede agrupar lecciones en secciones para organizar su contenido y facilitar el aprendizaje de sus alumnos.",
        activate: "Activar",
        cancel: "Cancelar"
      }
    },
    news_feed: {
      heading: "Noticias",
      body_header: "Aún no hay publicaciones",
      body_content: "Haz una publicación en tu clase. Comience haciendo clic en el botón Agregar.",
      pinned: "Fijado",
      snackbar: {
        comment_deleted: "Comentario borrado",
        reaction_error: "Se produjo un error al reaccionar a las noticias.",
        comment_creation_error: "Se produjo un error al crear el comentario.",
        add_comment_success: "Comentario añadido",
        toggle_pin_error: "No se pudo alternar el feed fijado",
        unpinned: "Desanclar",
        successfully: "Exitosamente",
        feed_delete_success: "Feed eliminado correctamente",
        fetch_feed_fail: "No se pudieron recuperar las fuentes de noticias",
        fetching_error: "Se produjo un error al obtener el feed."
      },
      heading_button: {
        title: "Agregar",
        edit_post: "Editar post",
        make_a_post: "Hacer una publicación",
        placeholder: "Comparte una actualización con tus estudiantes",
        cancel: "Cancelar",
        post: "Correo"
      }
    }
  },
  navItems: {
    nav_news_feed: "Noticias",
    nav_attendance: "Asistencia",
    nav_submissions: "Envíos",
    nav_marks: "Marcas",
    nav_people: "Gente",
    nav_certificates: "Certificados",
    nav_landing_page: "Página de destino",
    nav_settings: "Ajustes",
    nav_content: "Contenido"
  },
  not_permitted: {
    header: "Sin autorización",
    body: "Lamentablemente no tienes acceso a este curso.",
    button: "Vete a casa"
  }
};
const courses = {
  heading: "Cursos",
  heading_button: "Crear curso",
  search_placeholder: "Buscar curso",
  new_course_modal: {
    heading: "Crear un curso",
    course_name: "Nombre del curso",
    course_name_placeholder: "Nombre de tu curso",
    short_description: "Breve descripción",
    short_description_placeholder: "Una pequeña descripción sobre este curso.",
    button: "Finalizar",
    type: "Tipo de curso",
    type_selector_title: "¿Qué tipo de curso estás mirando?",
    back: "Atrás",
    next: "Próximo"
  },
  course_card: {
    empty_title: "No hay cursos creados",
    empty_description: "Comparta sus conocimientos con el mundo creando cursos atractivos para sus estudiantes.",
    error_message: "Ocurrió un error.",
    lessons_number: "lecciones",
    students: "estudiantes",
    published: "Publicado",
    unpublished: "Inédito",
    continue_course: "Continuar curso",
    list_view: {
      title: "Título",
      description: "Descripción",
      lessons: "Lecciones",
      students: "Estudiantes",
      published: "Publicado",
      type: "Tipo"
    },
    context_menu: {
      clone: "Clon",
      share: "Compartir",
      invite: "Invitar",
      "delete": "Borrar"
    },
    get_course: "Obtener curso",
    learn_more: "Aprende más"
  },
  course_filter: {
    date_created: "fecha de creacion",
    published: "Publicado",
    lessons: "Lecciones"
  }
};
const ai = {
  help_me: "Ayúdame a escribir",
  placeholder: "Ayúdame a escribir una breve descripción.",
  text: "Empieza a escribir...",
  reset: "Reiniciar",
  rephrase: "Expresar de otro modo",
  insert: "Insertar",
  can_you: "¿Puedes reformular esto?",
  requirements: "Por favor escriba algunos requisitos necesarios para tomar este curso:",
  description: "Por favor escriba una descripción detallada del curso para este curso:",
  expectation: "¿Qué debe esperar un estudiante aprender de este curso?"
};
const dashboard = {
  morning_heading: "Buen día",
  afternoon_heading: "Buenas tardes",
  evening_heading: "Buenas noches",
  create_course: "Crear curso",
  view_site: "Ver sitio",
  visit_site: "Visita el sitio web",
  hero_content: "Gracias por lo que haces ❤️. Estás cambiando vidas aula a aula y gracias a ti, el mundo es un lugar mejor. 😊",
  hero_button: "Sigue construyendo 🚀",
  your_schedule: "Tu agenda",
  today: "Hoy",
  yesterday: "Ayer",
  tomorrow: "Mañana",
  no_schedule: "No hay lección en este día",
  join_call: "Unirse a la llamada",
  click_to_join: "Haga clic para unirse a la llamada",
  no_call_link: "No se agregó ningún enlace de llamada para esta lección. Pregúntale a tu entrenador",
  current_lesson: "Actualmente aprendiendo",
  your_progress: "Su progreso",
  "continue": "Continuar",
  no_courses: "Aún no hay cursos en curso",
  start_course: "Una vez que comiences un curso, tu progreso se reflejará aquí.",
  lms_dashboard_hero: "Hoy es otro día para acercarte a tus objetivos de aprendizaje. No te rindas, cuanto más aprendas, mejor serás.",
  dont: "no te rindas",
  lessons_completed: "Lecciones completadas",
  No_courses_started: "No se iniciaron cursos"
};
const schedule = {
  title: "Tu agenda",
  essence: "La esencia de la colaboración en el diseño.",
  figma: "Introducción a Figma",
  join: "Unirse a la llamada",
  no: "No hay lección en este día"
};
const components = {
  settings: {
    domains: {
      add: "Agregar",
      url: "URL",
      update: "Actualizar dominio",
      custom: "Dominio personalizado",
      domain: "Añade tu propio nombre de dominio",
      title: "Dominio personalizado",
      save: "Ahorrar",
      your_domain: "Tu dominio",
      custom_domain_error: "No puede agregar un dominio de nivel superior como dominio personalizado. En su lugar, utilice un subdominio como 'cursos.[susitio web].com' o 'www.[susitio web].com'.",
      custom_domain_success: "Dominio personalizado agregado exitosamente",
      dns_description: "Establezca el siguiente registro en su proveedor de DNS para continuar:",
      dns_type: "Tipo",
      dns_value: "Valor",
      dns_name: "Nombre",
      refresh: "Refrescar",
      remove: "Eliminar",
      custom_favicon: "favicon personalizado",
      custom_code: "código personalizado"
    },
    "customize-lms": {
      title: "Personalizar LMS",
      disabled: "desactivado",
      enabled: "Activado",
      save: "Guardar cambios",
      apps: {
        title: "Aplicaciones",
        poll: "Encuesta",
        live_comment: "Comentarios en vivo"
      },
      course: {
        title: "Curso",
        newsfeed: "Noticias",
        grading: "Calificación"
      },
      dashboard: {
        title: "Panel",
        community: "Comunidad",
        exercises: "Ejercicios",
        banner_image: "Imagen de banner",
        banner_image_btn: "Actualizar imagen de banner",
        banner_text: "Texto del cartel",
        banner_text_label: "Actualizar texto del banner",
        banner_text_placeholder: "Escribe el texto aquí"
      }
    },
    customize_lms: {
      title: "Personalizar LMS",
      enabled: "Activado",
      save: "Guardar cambios",
      apps: {
        title: "Aplicaciones",
        poll: "Encuesta",
        live_comment: "Comentarios en vivo"
      },
      course: {
        title: "Curso",
        newsfeed: "Noticias",
        grading: "Calificación"
      },
      dashboard: {
        title: "Panel",
        community: "Comunidad",
        exercises: "Ejercicios",
        banner_image: "Imagen de banner",
        banner_image_btn: "Actualizar imagen de banner",
        banner_text: "Texto del cartel",
        banner_text_label: "Actualizar texto del banner",
        banner_text_placeholder: "Escribe el texto aquí"
      },
      disabled: "Desactivado"
    }
  },
  quiz: {
    title: "cuestionarios",
    second: "Segundos)",
    answer: "Respuesta(s)",
    question_delete: "Eliminar pregunta",
    add_more: "+ Agregar más respuestas",
    remove_last: "- Eliminar la última respuesta",
    quiz_delete: "Eliminar cuestionario",
    delete_question: "¿Estás seguro de que deseas eliminar esta pregunta?",
    delete_quiz: "¿Estás seguro de que deseas eliminar este cuestionario?",
    lose_content: "Perderás tu contenido y esta acción no se puede deshacer.",
    "delete": "Borrar",
    update: "Actualizar",
    create: "Crear",
    a_quiz: "una prueba",
    quiz_title: "Título del cuestionario",
    placeholder: "El título de tu cuestionario",
    save: "Guardar cambios",
    "continue": "Continuar",
    rename: "Rebautizar",
    updated: "Actualizado",
    start: "Iniciar prueba",
    start_typing: "Comience a escribir su pregunta",
    required_field: "Este campo es obligatorio",
    type_answer: "Escribe respuesta",
    label: "Por favor introduce una etiqueta",
    no_quizz: "No se creó ninguna prueba",
    interactive: "Cree cuestionarios interactivos con marcador para sus alumnos."
  }
};
const markdown_editor = {
  write: "Escribir",
  preview: "Avance"
};
const navigation = {
  goto: "Ir a",
  courses: "Cursos",
  home: "Hogar",
  classroomio_home: "AulaIO Inicio",
  dashboard: "Panel",
  discussion: "Discusión",
  people: "Gente",
  goto_lms: "Ir a LMS",
  goto_home: "Ir a la página de inicio de ClassroomIO",
  login: "Acceso",
  signup: "Inscribirse",
  redirecting: "Redireccionando",
  loading_state: "Lo llevamos a la página siguiente, espere.",
  org_loading_state: "Llevándote a tu organización...",
  add_organization: "+ Agregar organización"
};
const add_org = {
  create_org: "Crear organización",
  name: "Nombre de la organización",
  org_sitename: "Nombre del sitio de la organización",
  create: "Crear",
  sitename: "El nombre del sitio ya existe",
  error_organization: "Algo salió mal al crear esta organización. Por favor recarga e intenta nuevamente"
};
const setup = {
  get_started: "Empezar",
  publish_course: {
    title: "Publicar un curso",
    desc: "Haz que tu curso sea público y adquirible",
    button_label: "Publicar curso"
  },
  exercise: {
    title: "Crea un ejercicio",
    desc: "Pon a prueba a tus estudiantes, permíteles demostrar su comprensión del tema.",
    button_label: "Crear tarea"
  },
  lesson: {
    title: "crear una lección",
    desc: "Divida su curso en lecciones que sus estudiantes puedan entender fácilmente",
    button_label: "Crear lección"
  },
  course: {
    title: "Crear curso",
    desc: "Crea un curso que compartirás con tus alumnos",
    button_label: "Crear curso"
  },
  organization_profile: {
    title: "Actualizar la imagen de perfil de la organización",
    desc: "Establezca una identidad profesional y reconocible para su organización.",
    button_label: "Actualizar perfil de organización"
  },
  personal_profile: {
    title: "Sube una foto de perfil y actualiza el nombre de usuario",
    desc: "Personalización y un toque humano que hacen que las interacciones sean más personales y memorables.",
    button_label: "Actualización del perfil"
  }
};
const pricing = {
  modal: {
    heading: "Plan de actualización",
    thanks: "Gracias por tu apoyo",
    plan: "Su plan viene con ventajas y beneficios interesantes, incluido el acceso a todas las funciones futuras que lancemos.",
    close: "Cerca",
    learn: "Aprende más",
    month: "mes",
    monthly: "Mensual",
    annually: "Anualmente",
    save: "Ahorra 2 meses"
  },
  plan_names: {
    free: "Gratis",
    early: "Adoptador temprano",
    enterprise: "Empresa"
  }
};
const org_navigation = {
  dashboard: "Panel",
  courses: "Cursos",
  community: "Comunidad",
  audience: "Audiencia",
  setup: "Configuración",
  help: "Ayuda",
  settings: "Ajustes",
  early_adopter: "Conviértase en uno de los primeros en adoptar",
  unlock: "Desbloquee funciones ilimitadas e invierta en nuestro futuro",
  upgrade: "Actualizar ahora"
};
const settings = {
  heading: "Ajustes",
  billing: {
    sub_title: "Detalles de facturación",
    manage: "Gestiona tu facturación",
    active: "No tienes ninguna facturación activa",
    lemonsqueezy: "Usamos Lemonsqueezy para ayudarlo a administrar su facturación",
    open_billing: "Facturación abierta"
  },
  integrations: {
    heading: "Telegrama",
    sub_heading: "Conecte su cuenta a Telegram para recibir notificaciones de cualquier cambio dentro de la aplicación.",
    step_authenticate: "Paso 1: autentica tu cuenta a través del bot ClassroomIO.",
    open_bot_button: "Abrir robot",
    step_chatId: "Paso 2: Ingrese el ID de chat que le proporcionó el bot.",
    connect_button: "Conectar",
    success_message: "Integración exitosa",
    disconnect: "Desconectar"
  },
  landing_page: {
    heading: "Página de destino",
    show_section: "Mostrar sección",
    hide_section: "Sección oculta",
    title: "Título",
    title_highlight: "Título resaltado",
    subtitle: "Subtitular",
    save_changes: "Guardar cambios",
    footer: {
      heading: "Pie de página",
      show_section: "Mostrar sección",
      hide_section: "Sección oculta",
      facebook: "Facebook",
      twitter: "Gorjeo",
      linkedin: "LinkedIn"
    },
    mailing_list: {
      heading: "Lista de correo",
      show_section: "Mostrar sección",
      hide_section: "Sección oculta",
      title: "Título",
      subtitle: "Subtitular",
      button_label: "Etiqueta de botón"
    },
    contact_us: {
      heading: "Contáctenos",
      show_section: "Mostrar sección",
      hide_section: "Sección oculta",
      title: "Título",
      title_highlight: "Título resaltado",
      subtitle: "Subtitular",
      phone_number: "Número de teléfono",
      email: "Correo electrónico"
    },
    faq: {
      heading: "Preguntas frecuentes",
      show_section: "Mostrar sección",
      hide_section: "Sección oculta",
      title: "Título",
      question: "Pregunta",
      answer: "Respuesta",
      button: "Agregar nuevas preguntas frecuentes",
      save: "Ahorrar",
      cancel: "Cancelar"
    },
    courses: {
      heading: "Cursos",
      show_section: "Mostrar sección",
      hide_section: "Sección oculta",
      title: "Título",
      title_highlight: "Título resaltado",
      subtitle: "Subtitular"
    },
    about: {
      heading: "Acerca de",
      title: "Título",
      content: "Contenido",
      upload_an_image: "Subir una imagen",
      select_image: "Seleccionar imagen"
    },
    actions: {
      heading: "Comportamiento",
      label: "Etiqueta",
      link: "Enlace",
      no_redirect: "Sin redireccionamiento",
      redirect: "Redirigir",
      show_banner: "Mostrar banner",
      hide_banner: "Ocultar banner",
      banner_type: {
        heading: "Tipo de banner",
        video: "Video",
        image: "Imagen"
      }
    },
    background: {
      title: "Imagen de fondo",
      show_background: "Mostrar fondo",
      hide_background: "Ocultar fondo"
    }
  },
  organization: {
    organization_profile: {
      heading: "Perfil de la organización",
      organization_name: "Nombre de la Organización",
      upload_image: "Cargar imagen",
      update_organization: "Actualizar organización",
      team: {
        heading: "Equipo",
        body: "Agregue compañeros de equipo a su organización para que ambos puedan colaborar en proyectos.",
        button: "Gestionar equipo",
        sub_heading: "Configura tu equipo"
      },
      custom_domain: {
        heading: "Dominio personalizado",
        sub_heading: "Personaliza tu dominio",
        body: "Cree una URL personalizada para que su audiencia pueda acceder fácilmente a su organización",
        button: "Editar dominio"
      },
      theme: {
        heading: "Tema",
        sub_heading: "Establece el color de tu marca",
        custom_theme: "Tema personalizado",
        add_theme: "Agregar tema"
      },
      customize_lms: {
        heading: "Personalizar LMS",
        sub_heading: "Personalice el LMS de su organización",
        button: "Personalizar LMS",
        body: "Controle la experiencia de aprendizaje de sus estudiantes. Puede habilitar o deshabilitar pestañas y páginas, actualizar el banner de LMS y los comentarios en la aplicación según los requisitos de su organización."
      }
    }
  },
  profile: {
    update_profile: "Actualización del perfil",
    logout: "Cerrar sesión",
    personal_information: {
      heading: "Informacion personal",
      full_name: "Nombre completo",
      username: "Nombre de usuario",
      email: "Correo electrónico"
    },
    profile_picture: {
      heading: "Foto de perfil",
      upload_image: "Cargar imagen",
      file_size: "Tamaño máximo de archivo:",
      accepted: "Aceptado:",
      validation_error: "El tamaño del archivo excede el límite máximo:"
    }
  },
  tabs: {
    profile_tab: "Perfil",
    organization_tab: "Organización",
    landing_page_tab: "Página de destino",
    billing_tab: "Facturación",
    integrations_tab: "Integraciones",
    language_tab: "Idioma"
  },
  subheadings: {
    view_site: "Ver sitio"
  }
};
const login = {
  welcome: "Bienvenido de nuevo",
  email: "Tu correo electrónico",
  password: "Tu contraseña",
  forgot: "¿Has olvidado tu contraseña?",
  login: "Acceso"
};
const welcome_modal = {
  we_at: "nosotros en",
  small_team: "Somos un pequeño equipo con la gran misión de capacitar a los educadores con excelente tecnología para ayudarlos a capacitar a la generación futura. La educación es el regalo más poderoso que le puedes dar a alguien, y tiene mucho sentido brindarte todas las herramientas que necesitas para brindarle a más personas este REGALO.",
  thank_you: "Gracias por elegirnos",
  deeply_appreciate: "lo apreciamos profundamente y estamos a su servicio."
};
const onboarding = {
  sell: "Vender cursos en línea",
  teach: "Enseñar a mis alumnos actuales en línea",
  expanding: "En otra plataforma, ampliando aquí",
  explore: "Sólo aquí para explorar",
  articles: "Artículos",
  search: "Buscador",
  social: "Medios de comunicación social",
  friends: "Amigos y familia",
  fullname: "Nombre completo",
  name: "Nombre de la organización",
  organisation_sitename: "Nombre del sitio de la organización",
  what_brings: "¿Qué te trae a",
  how: "¿Cómo se enteró de nosotros?",
  back: "Atrás",
  "continue": "Continuar",
  employees: "Capacitar a mis empleados",
  customers: "Crear cursos para mis clientes"
};
const verify_email_modal = {
  heading: "Verifica tu correo electrónico",
  sent_verification: "Hemos enviado un correo electrónico de verificación a",
  to_confirm: "para confirmar la validez del correo electrónico proporcionado.",
  loading: "Cargando...",
  resend: "Vuelva a enviar el código de verificación",
  resend_in: "Reenviar verificación en",
  seconds: "segundos",
  snackbar_error: "error al enviar código"
};
const generic = {
  locked: "bloqueado",
  unlocked: "desbloqueado"
};
const specialization = {
  course_tag: "Especialización"
};
const profileMenu = {
  profile: "PERFIL",
  current_org: "ORGANIZACIÓN ACTUAL",
  free_tools: "HERRAMIENTAS GRATUITAS",
  progress: "Informe de progreso",
  timer: "Temporizador de actividad",
  tic_tac: "dedo del pie tres en raya",
  see_more: "Ver más",
  whats_new: "Qué hay de nuevo",
  launch_week: "Semana de lanzamiento"
};
const validations = {
  invalid_type_error: "No debe estar vacío",
  email: {
    not_valid: "Correo electrónico no válido"
  },
  course_payment: {
    email: {
      invalid_email: "Dirección de correo electrónico no válida"
    },
    full_name: {
      min_char: "Debe tener 6 o más caracteres"
    }
  },
  confirm_password: {
    not_match: "No coincide con la contraseña"
  },
  onboarding: {
    step_two: {
      source: {
        required: "Seleccione una opción"
      },
      goal: {
        required: "Seleccione una opción"
      }
    },
    step_one: {
      full_name: {
        min_char: "El nombre completo debe contener 5 o más caracteres."
      }
    }
  },
  reset: {
    password: {
      min_char: "Debe tener 6 o más caracteres"
    }
  },
  auth: {
    password: {
      min_char: "Debe tener 6 o más caracteres"
    },
    email: {
      invalid_email: "Dirección de correo electrónico no válida"
    }
  },
  forgot: {
    invalid_email: "Dirección de correo electrónico no válida"
  },
  org_landing_page: {
    message: {
      min_char: "Debe tener 10 o más caracteres"
    },
    phone: {
      min_char: "Debe tener 6 o más caracteres"
    },
    email: {
      invalid_email: "Dirección de correo electrónico no válida"
    },
    name: {
      min_char: "Debe tener 6 o más caracteres"
    }
  },
  comment_in_community: {
    min_char: "Debe tener 6 o más caracteres"
  },
  ask_community: {
    course_id: {
      select_course: "Seleccione un curso"
    },
    body: {
      min_char: "Debe tener 10 o más caracteres"
    },
    title: {
      min_char: "Debe tener 6 o más caracteres"
    }
  },
  create_quiz: {
    min_char: "Debe tener 6 o más caracteres"
  },
  lesson_schema: {
    empty_title: "El título no puede estar vacío."
  },
  news_feed: {
    min_char: "El campo debe contener 5 o más caracteres."
  },
  site_name: {
    min_char: "El nombre del sitio debe contener 5 o más caracteres.",
    hyphen_rule: "El nombre del sitio no puede comenzar ni terminar con un guión."
  },
  organization_name: {
    min_char: "La organización debe contener 5 o más caracteres.",
    hyphen_rule: "El nombre de la organización no puede comenzar ni terminar con un guión."
  },
  user_profile: {
    email: "Dirección de correo electrónico no válida",
    username: "El nombre de usuario no puede estar vacío",
    fullname: "El nombre debe tener un mínimo de 5 caracteres."
  }
};
const explore = {
  empty_heading: "No hay curso disponible",
  empty_description: "Actualmente no hay ningún curso publicado disponible",
  heading: "Explora nuestros cursos"
};
const delete_modal = {
  label: "Borrar",
  content: "¿Está seguro?",
  no: "No",
  yes: "Sí"
};
const es = {
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

export { add_org, ai, audience, community, components, content, course, courses, dashboard, es as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=es-c4e92aed.js.map
