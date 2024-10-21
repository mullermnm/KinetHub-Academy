!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9d81100e-71e4-4c7e-a235-c9e87af6c6b5", e._sentryDebugIdIdentifier = "sentry-dbid-9d81100e-71e4-4c7e-a235-c9e87af6c6b5");
  } catch (e2) {
  }
}();
const content = {
  heading: "Internacionalização no SvelteKit",
  toggle_label: "Selecione o idioma preferido"
};
const snackbar = {
  success: "Sucesso",
  something: "Algo deu errado - tente mais tarde",
  update: "Atualizar",
  setup: {
    info_lesson: "Você precisa criar uma lição",
    info_course: "Você precisa criar um curso"
  },
  upgrade: {
    generate_fail: "Falha ao gerar sucesso",
    failed: "Falha, tente novamente mais tarde"
  },
  signup: {
    disposable: "O e-mail que você forneceu é descartável"
  },
  community: {
    success: {
      comment_submitted: "Comentário enviado!",
      success_delete: "Apagado com sucesso",
      question_submitted: "Pergunta enviada!"
    },
    error: {
      try_again: "Erro - Tente novamente mais tarde",
      deleting_comments: "Erro ao excluir comentários",
      deleting_question: "Erro ao excluir a pergunta"
    }
  },
  invite: {
    failed_join: "Falha ao ingressar, entre em contato com seu administrador"
  },
  submissions: {
    success: {
      grading: "Nota salva e aluno notificado"
    }
  },
  marks: {
    error: "Erro ao buscar marcas"
  },
  lessons: {
    error: {
      try_later: "Algo não está certo - tente mais tarde"
    },
    success: {
      complete_marked: "Marcado como concluído",
      complete_download: "Download completo",
      version_restored: "Versão restaurada com sucesso"
    }
  },
  attendance: {
    error: {
      reload: "Algo não está certo. Por favor, recarregue e registre presença novamente"
    }
  },
  course: {
    error: {
      reaction_error: "Ocorreu um erro ao reagir ao feed de notícias",
      commenting_error: "Ocorreu um erro ao criar o comentário",
      toggle_error: "Falha ao alternar feed fixado",
      news_feed_fail: "Falha ao buscar feeds de notícias",
      feed_fetch_error: "Ocorreu um erro ao buscar o feed"
    },
    success: {
      comment_deleted: "Comentário deletado",
      comment_added: "Comentário adicionado",
      pinned: "Fixado",
      unpinned: "Desafixado",
      successfully: "Com sucesso",
      feed_delete_success: "Feed excluído com sucesso"
    }
  },
  landing_page_settings: {
    success: {
      complete: "Completo :)"
    },
    error: {
      file_size: "O tamanho do arquivo não deve ser superior a 500kb",
      try_again: "Tente novamente",
      label: "Enviar Imagem",
      fetch_error: "Erro ao buscar imagens do Unsplash"
    }
  },
  team_members: {
    invite_sent: "Convite enviado!",
    user_exists: "Usuário já existe",
    invite_fail: "Falha ao enviar o convite. Tente novamente",
    remove_fail: "Falha ao remover usuário. Tente novamente"
  },
  lms: {
    error: {
      username_exists: "nome de usuário já existe",
      update: "Atualização falhou:",
      try_again: "Por favor, tente novamente"
    }
  },
  course_settings: {
    error: {
      not_right: "Algo não está certo - tente mais tarde",
      went_wrong: "Algo deu errado - tente mais tarde",
      title: "o título não pode ficar vazio",
      description: "a descrição não pode ficar vazia",
      failed_integration: "Falha na integração, tente novamente mais tarde",
      failed_deletion: "Falha ao excluir, tente novamente mais tarde"
    },
    success: {
      download: "Download completo",
      saved: "Salvo com sucesso",
      successful_integration: "Integração bem-sucedida",
      successful_deletion: "Integração excluída",
      update_successful: "Atualização bem sucedida"
    }
  },
  people: {
    success: {
      copied: "Copiado para a área de transferência"
    },
    error: {
      missing_data: "Faltam dados da organização. Atualize a página",
      no: "Nenhum domínio organizacional atual"
    }
  },
  newsfeed: {
    error: {
      error: "Um erro ocorreu enquanto",
      editing: "editando feed",
      creating: "criando feed"
    },
    success: {
      edit: "Feed editado com sucesso",
      add: "Novo feed adicionado com sucesso"
    }
  },
  materials: {
    apology: "Pedimos desculpas, ocorreu um erro ao salvar sua aula.",
    update_translations: "Falha ao atualizar traduções",
    creating_new: "Falha ao criar novas traduções"
  },
  exercise: {
    success: "Salvo com sucesso",
    submission_updated: "Envio atualizado para",
    error_fetching: "Falha ao buscar exercícios. Atualize a página"
  },
  poll: {
    info: {
      not_published: "A enquete ainda não foi publicada",
      vote_once: "Você só pode votar uma vez"
    },
    error: {
      creating_poll: "Ocorreu um erro ao criar a enquete",
      updating_poll: "Ocorreu um erro ao atualizar o status da enquete",
      submitting_poll: "Ocorreu um erro ao enviar a enquete"
    }
  },
  success_update: "Atualizado com sucesso",
  generic: {
    success_delete: "Apagado com sucesso",
    try_again: "Erro - Tente novamente mais tarde"
  }
};
const exercises = {
  heading: "Exercícios",
  not_submitted: "Não submetido",
  submitted: "Submetido",
  in_progress: "Avaliação em andamento",
  graded: "Classificado",
  lesson: "Lição"
};
const my_learning = {
  heading: "Meu aprendizado",
  progress: "Em andamento",
  complete: "Completo",
  search: "Pesquisar cursos",
  not_in_progress: "Nenhum curso em andamento",
  any_progress: "Qualquer curso que você iniciar será exibido aqui",
  not_completed: "Nenhum curso concluído",
  any_course: "Qualquer curso que você concluir será exibido aqui"
};
const lms_navigation = {
  home: "Lar",
  my_learning: "Meu aprendizado",
  exercise: "Exercício",
  community: "Comunidade",
  help: "Ajuda",
  settings: "Configurações",
  explore: "Explorar"
};
const upgrade = {
  certificate: "Atualize seu plano para gerar certificados",
  team: "Atualize seu plano para adicionar membros à equipe",
  team_members: "Membros do time",
  back: "Voltar para configurações",
  download_lessons: "Atualize para baixar lições",
  download_course: "Atualize para baixar o curso",
  domain: "Atualize seu plano para adicionar domínios personalizados"
};
const audience = {
  title: "Público",
  "export": "Exportar",
  no_audience: "Nenhum público para gerenciar",
  manage: "Gerencie todos os seus alunos aqui e fique conectado com eles",
  name: "Nome",
  email: "E-mail",
  date_joined: "Data de adesão",
  upgrade: "Atualize seu plano para convidar mais alunos"
};
const community = {
  title: "Comunidade",
  ask_button: "Pergunte à comunidade",
  find_question: "Encontrar pergunta",
  asked: "perguntado",
  answers: "respostas",
  no_question: "Sem perguntas",
  ask_a_question: "Faça uma pergunta para a comunidade",
  "delete": {
    title: "Excluir",
    question: "pergunta",
    comment: "Comente",
    sure: "Tem certeza de que deseja excluir isto",
    no: "Não, guarde",
    yes: "Sim, excluir"
  },
  ask: {
    go_back: "Volte",
    ask_the: "Pergunte à comunidade",
    publish: "Publicar",
    title: "Título",
    select_course: "Selecione o curso",
    ask_community: "Faça à comunidade qualquer pergunta que você possa ter",
    question: "Pergunta",
    save: "Salvar",
    edit: "Editar",
    cancel: "Cancelar",
    give: "Dê uma resposta",
    comment: "Comente"
  },
  all: "Todos"
};
const course = {
  navItem: {
    settings: {
      heading: "Configurações",
      cover_image: "Imagem de capa",
      optional_image: "Esta imagem opcional aparecerá na sua página de boas-vindas. Se você incluir um, ele deverá ter pelo menos 280 x 200",
      replace: "Substituir",
      del: "Excluir",
      course_details: "detalhes do curso",
      course_title: "Título do curso",
      course_description: "Descrição do Curso",
      placeholder: "Escreva a descrição do seu curso aqui",
      link: "Link do curso",
      grading: "Classificação",
      reports: "Disponibilizar relatórios de notas para aulas",
      disabled: "Desabilitado",
      enabled: "Habilitado",
      order: "Guia Solicitar aulas",
      drag: "Arraste e solte os rótulos para reordenar suas guias de materiais",
      lesson_download: "Lições baixadas",
      available: "Disponibilizar a Lição para Download em PDF para alunos matriculados",
      course_download: "Download do curso",
      course_avail: "Disponibilizar o Curso para Download para alunos cadastrados",
      download: "Baixar",
      allow: "Permitir novos alunos",
      access: "Permitir que novos alunos acessem este curso",
      publish: "Publicar curso",
      determines: "Isso determina se o seu curso será exibido na sua página de destino",
      published: "Publicados",
      unpublished: "Não publicado",
      "delete": "Excluir curso",
      delete_text: "Exclua este curso, esta ação não pode ser desfeita",
      save: "Salvar alterações",
      type: "Tipo de curso",
      course_type_desc: "Atualize o tipo de curso para uma experiência mais personalizada",
      live_class: "Aula ao vivo",
      self_paced: "Individualizado"
    },
    landing_page: {
      start_course: "Iniciar curso",
      requirement: "Requerimento",
      description: "Descrição do Curso",
      learn: "O que você aprenderá",
      certificate: "Certificado",
      certificate_text: "Ao concluir todos os cursos do programa, você ganhará um Certificado para compartilhar com sua rede profissional.",
      content: "Conteúdo do curso",
      slide: "1 diapositivo",
      note: "observação",
      video: "vídeo",
      reviews: "Avaliações",
      see_all: "Ver tudo",
      header_video: "Vídeo de cabeçalho",
      no_course_published: "Nenhum curso publicado",
      coming_your_way: "Temos ótimos cursos chegando até você, fique ligado!!!",
      view_less: "Ver menos",
      view_all: "Ver tudo",
      thank_you: "Obrigado por deixar uma mensagem, entraremos em contato em breve",
      name: "Seu nome",
      email: "Seu email",
      phone: "Seu telefone",
      message: "Sua mensagem",
      your_message: "Sua mensagem aqui",
      submit: "Enviar",
      successful_sub: "Você foi adicionado com sucesso. Grato pela assinatura.",
      enter: "Digite seu e-mail...",
      powered_by: "Distribuído por",
      landing_page: "Página inicial",
      explore: "Explorar cursos",
      find: "Encontre cursos que você vai adorar dos melhores professores de todo o mundo",
      find_course: "Encontre um curso...",
      instructor: "Instrutor",
      courses: "cursos",
      reviews_modal: {
        title: "Avaliações",
        rating: "Avaliação",
        ratings: "Avaliações"
      },
      pricing_section: {
        free: "Livre",
        not_accepting: "Este curso não está aceitando novos alunos no momento.",
        discount: "Desconto",
        enroll: "Inscreva-se agora",
        buy: "Comprar agora",
        bird: "Oferta antecipada. Compre o mais rápido possível"
      },
      upload_widget: {
        title: "Widget de banner",
        width: "Imagens maiores que 1.500 pixels funcionam melhor.",
        size: "O tamanho máximo por arquivo é 500kb.",
        submit: "Enviar",
        no_images: "Nenhuma imagem disponível."
      },
      editor: {
        save: "Salvar",
        page_builder: "Construtor de páginas",
        section: "seção",
        pricing_form: {
          currency: "Moeda",
          cost: "Custo",
          payment: "Link de pagamento",
          discount: "Desconto",
          no: "Não",
          yes: "Sim",
          percent: "Porcentagem de desconto",
          gift: "Sobre presente"
        },
        instructor_form: {
          upload: "Logotipo do instrutor",
          name: "Nome do instrutor",
          name_placeholder: "O nome da sua empresa",
          role: "Função do instrutor",
          about: "Sobre o instrutor",
          about_placeholder: "Um breve histórico sobre a estrutura",
          total: "Número total de cursos"
        },
        reviews_form: {
          add_reviews: "Adicionar comentários",
          fullname: "Nome completo",
          description: "Descrição",
          rating: "Avaliação",
          hide: "Ocultar revisão",
          validations: {
            invalid_type_error: "Não deve estar vazio",
            description: {
              min_char: "'A descrição é muito curta, com no mínimo 5 caracteres"
            },
            rating: {
              message: "A classificação deve ser de 1 a 5"
            },
            avatar_url: {
              message: "Carregar uma imagem"
            },
            name: {
              min_char: "O nome é muito curto, com no mínimo 5 caracteres"
            }
          }
        },
        header_form: {
          title: "Título",
          description: "Descrição",
          short_video: "Vídeo curto",
          replace_cover: "Substituir imagem da capa",
          replace: "Substituir",
          helper: "Insira um link para um vídeo do YouTube"
        },
        title: {
          header: "Cabeçalho",
          requirement: "Requerimento",
          description: "Descrição",
          goals: "Metas",
          reviews: "Avaliações",
          instructor: "Instrutor",
          pricing: "Preços",
          certificate: "Certificado"
        },
        display_section: "Seção de exibição",
        certificate_form: {
          upload_template: "Modelo de certificado"
        }
      },
      course_content: "Conteúdo do curso",
      modules: "módulos",
      lessons: "lições",
      exercises: "exercícios"
    },
    certificates: {
      title: "Certificados",
      certificate_settings: "Configurações de certificado",
      theme: "Escolha um tema",
      logo: "Logotipo da marca",
      to_update: "Para atualizar a imagem da sua marca, acesse",
      settings: "Configurações > Configurações da organização",
      and_upload: "e carregue o logotipo da sua marca",
      goto_settings: "Vá para as configurações",
      description: "Descrição do Curso",
      placeholder: "uma pequena descrição sobre o curso",
      allow: "Permitir que os alunos baixem o certificado",
      locked: "Bloqueado",
      unlocked: "Desbloqueado",
      save: "Salvar alterações",
      locked_certificate: "Certificados não disponíveis",
      instructor_unlock: "Seu instrutor precisa desbloquear seu certificado.",
      contact_instructor: "Se precisar do seu certificado, entre em contato com seu instrutor.",
      download_certificate: "Certificado de download",
      unlocked_certificate: "Parabéns! 🎉 seu certificado está pronto",
      unlocked_certificate_subtitle: "Você concluiu este curso e sua dedicação é evidente. Baixe o certificado e compartilhe com sua rede como prova de sua habilidade recém-adquirida",
      complete_to_download_subtitle: "Seu certificado estará disponível assim que você concluir todas as lições e exercícios deste curso",
      complete_to_download_title: "Curso não concluído 😔",
      description_error: "A descrição não pode exceder 200 caracteres",
      characters: "personagens",
      unexpected_error: "Um erro inesperado ocorreu"
    },
    people: {
      title: "Pessoas",
      add: "Adicionar",
      search: "Pesquisar pessoas",
      you: "Você",
      pending: "Pendente",
      name: "Nome",
      role: "Papel",
      action: "Ação",
      feedback: "E-mail copiado para a área de transferência",
      roles: {
        admin: "Administrador",
        tutor: "Tutor",
        student: "Estudante",
        filter: "Filtro"
      },
      delete_confirmation: {
        title: "Excluir",
        sure: "Tem certeza de que deseja excluir",
        no: "Não",
        yes: "Sim"
      },
      invite_modal: {
        title: "Convidar pessoas",
        invite: "Convidar tutores",
        select: "Selecione tutores na organização...",
        to_add: "Para adicionar um tutor à sua organização,",
        go_to: "vá para as configurações da organização",
        invite_students: "Convidar alunos",
        via_link: "Você pode convidar alunos por meio de um link de convite",
        copy_link: "Link de cópia",
        success: "Copiado com sucesso",
        finish: "Terminar",
        via_qr: "Você pode convidar alunos via QR",
        download_qr: "Baixe o código QR",
        qr_downloading_snackbar: "Código QR gerado com sucesso. Aguarde enquanto o download"
      },
      teams: {
        add: "Adicionar",
        add_team: "Adicione seus companheiros de equipe ou colaboradores à sua organização. Comece a trabalhar juntos",
        invite: "Convidar",
        placeholder: "e-mail separado por vírgula",
        role: "Papel",
        send_invite: "Mandar convite",
        members: "Membros",
        invite_sent: "Convite enviado",
        you: "Você",
        remove: "Remover"
      }
    },
    marks: {
      title: "Marcas",
      student: "Estudante",
      total: "Total",
      no_student: "Nenhum aluno adicionado",
      "export": {
        csv: "Exportar como CSV",
        pdf: "Exportar como PDF"
      }
    },
    submissions: {
      title: "Exercícios enviados",
      submission_status: {
        submitted: "Submetido",
        in_progress: "Em andamento",
        graded: "Classificado"
      },
      grading_modal: {
        details: "Detalhes",
        early: "Cedo",
        late: "Tarde",
        total_grade: "Nota total",
        student: "Estudante",
        status: "Status",
        add_comment: "Adicionar comentário",
        grade_with_ai: "Nota com IA",
        submit_grades: "Enviar notas",
        accept_grade: "Aceitar",
        reject_grade: "Rejeitar",
        add_comment_placeholder: "Deixe um comentário",
        questions_tried: "Alocada esta pontuação por causa do total de tentativas:",
        delete_prompt: "Excluir",
        delete_error: "Falha ao excluir o envio",
        delete_success: "Envio excluído com sucesso"
      }
    },
    attendance: {
      title: "Comparecimento",
      present: "Presente",
      absent: "Ausente",
      search_students: "Pesquisar alunos",
      student: "Estudante",
      lesson: "Lição",
      no_student: "Nenhum aluno adicionado"
    },
    lessons: {
      heading: "Lições",
      join_lesson: "Participar da aula",
      no_link: "Sem link",
      no_tutor: "Nenhum tutor adicionado",
      body_header: "Ainda não há aulas",
      body_content: "Compartilhe seu conhecimento com o mundo criando aulas envolventes. Comece clicando no botão Adicionar.",
      download_pdf: "baixar PDF",
      autosaving: "Salvamento automático...",
      done: "Feito",
      edit: "Editar",
      mark_as: "marca como",
      incomplete: "Incompleto",
      complete: "Completo",
      poll: {
        voted: "Votado",
        created_by: "Criado por",
        status: "Status",
        draft: "Rascunho",
        publish: "Publicar",
        expiration: "Expiração",
        total_voted: "Votos totais",
        responses: "Respostas",
        expires: "Expira",
        today: "Hoje",
        back: "Voltar",
        result: "Resultado",
        "delete": "Excluir",
        create_poll: "Criar enquete",
        question: "Pergunta",
        options: "Opções",
        option_label: "Etiqueta de opção",
        cancel: "Cancelar",
        poll_question: "Pergunta da enquete"
      },
      polls: {
        title: "Enquete",
        active_polls: "Enquetes Ativas",
        expired_polls: "Enquetes expiradas",
        loading: "Carregando...",
        no_polls: "Nenhuma enquete para exibir"
      },
      comments: {
        title: "Comentários",
        you: "Você",
        placeholder: "Dizer algo"
      },
      exercises: {
        heading: "Todos os exercícios",
        add_button: "Adicionar",
        no_exercises: "Nenhum exercício adicionado para esta lição",
        no_assigned_exercises: "Seu tutor não atribuiu nenhum exercício a esta lição. Na maior parte do tempo, você pode",
        chill: "relaxe com os garotos grandes",
        add_exercise: "Compartilhe seu conhecimento com o mundo criando exercícios envolventes. Adicione um exercício agora.",
        all_exercises: {
          heading: "Todos os exercícios",
          questions: "Questões",
          submissions: "Envios",
          save: "Salvar",
          preview: "Visualização",
          reorder: "Reordenar perguntas",
          delete_exercise: "Excluir exercício",
          order_questions: "Perguntas sobre pedidos",
          write_your_answer: "Escreva sua resposta",
          write_your_answer_here: "Escreva sua resposta aqui",
          write_your_question_here: "Escreva sua pergunta aqui",
          write_your_title: "Escreva seu título aqui",
          write_your_subtitle: "Escreva sua legenda aqui",
          highlight: "Escreva o destaque do seu título aqui",
          content: "Escreva seu conteúdo aqui",
          video: "Escreva o link do seu vídeo aqui",
          link: "Escreva seu link aqui",
          label: "Escreva aqui sua etiqueta",
          email: "Escreva seu e-mail aqui",
          facebook: "Escreva seu link do Facebook aqui",
          twitter: "Escreva seu link do Twitter aqui",
          linkedin: "Escreva seu link do LinkedIn aqui",
          number: "Escreva aqui seu número de telefone",
          previous: "Anterior",
          finish: "Terminar",
          next: "Próximo",
          analytics: {
            submissions: "Envios",
            individual: {
              heading: "Individual",
              answers: "Respostas individuais",
              no: "Nenhuma resposta foi fornecida"
            },
            summary: {
              heading: "Resumo",
              question_chart: "Gráficos de perguntas"
            }
          },
          view_mode: {
            no_question: "Nenhuma pergunta adicionada para este exercício",
            edit: "Editar",
            button: "botão para adicionar",
            questions: "questões",
            points: "pontos",
            all: "Tudo necessário",
            due: "Vencido até",
            no_description: "Sem descrição",
            start: "Começar",
            graded: "Classificado",
            pending: "Pendente",
            submitted: "Submetido",
            status_pending: "Status: revisão pendente",
            status_graded: "Status: Revisão concluída",
            status_submitted: "Status: Enviado"
          },
          edit_mode: {
            delete_modal: "Excluir Modal",
            sure: "Tem certeza de que deseja excluir este exercício?",
            no: "Não, cancelar",
            yes: "Sim, excluir",
            deleting: "Excluindo...",
            error: "Você tem alguns erros",
            question: "Pergunta",
            write: "Escreva seu código",
            option: "Adicionar opção",
            question_types: {
              single: "Resposta única",
              multiple: "Múltiplas respostas",
              paragraph: "Parágrafo"
            }
          },
          delete_confirmation: {
            title: "Excluir pergunta",
            sure: "Tem certeza de que deseja excluir esta pergunta",
            no: "Não, por favor, não",
            yes: "Sim, excluir"
          },
          description: {
            title: "Título",
            heading: "Descrição",
            describe: "Descreva o exercício para seu aluno",
            no: "Sem descrição"
          },
          no_answer: "Nenhuma resposta foi fornecida",
          check: "Verificar"
        },
        new_exercise_modal: {
          heading: "Novo exercício",
          how: "Como você deseja criar seu exercício",
          coming_soon: "Em breve",
          next: "Próximo",
          title: "Dê um título ao seu exercício",
          title_placeholder: "Nome do exercício",
          finish: "Terminar",
          select_template: "Selecione um modelo",
          questions: "Questões",
          points: "Pontos",
          back: "Voltar",
          create_exercises: "Crie exercícios a partir do Notes com IA",
          choose_questions: "Escolha quantas perguntas e opções você deseja e a IA o ajudará a criar um exercício a partir de sua anotação. Vamos.",
          how_many_questions: "Quantas perguntas você deseja criar?",
          how_many_options: "Quantas opções por pergunta você deseja?",
          add_note: "Adicione uma observação para usar este recurso",
          generate: "Gerar",
          completion: "Geração de IA concluída",
          click_generate: "Clique em 'Gerar' para um pouco de mágica",
          options: {
            from_scratch: "Do princípio",
            from_scratch_subtitle: "Crie seu exercício do zero se você já tiver suas dúvidas preparadas",
            use_template: "Use um modelo",
            use_template_subtitle: "Selecione entre mais de 100 modelos de exercícios predefinidos para ajudá-lo a começar",
            use_ai: "Usar IA",
            use_ai_subtitle: "Você pode gerar um exercício com IA a partir de suas anotações"
          }
        }
      },
      materials: {
        body_heading: "Nenhuma nota, vídeo ou slide adicionado para esta lição ainda",
        body_content: "Compartilhe seu conhecimento com seus alunos criando conteúdo envolvente. Comece clicando em",
        get_started: "Iniciar",
        no_translation: "Nenhuma tradução para o idioma selecionado",
        button: "botão",
        button_done: "Feito",
        tabs: {
          video: {
            title: "Vídeo",
            embed_link: "Incorporar link",
            upload: "Carregar",
            button: "Adicionar/editar vídeo(s)",
            add_video: {
              title: "Adicionar um vídeo",
              add_by: "Adicionar por",
              youtube_link: "Link do YouTube",
              videos_added: "Vídeos adicionados",
              add_video: "Adicionar vídeo",
              upload_video: "Envio vídeo",
              select_file: "Selecione o arquivo (Mp4, MOV, AVI) para enviar para sua aula.",
              size: "(Máximo de 500 MB)",
              oops: "Ops `😬, não foi possível enviar o vídeo",
              big_file: "Desculpe, o vídeo não foi enviado. O tamanho do arquivo é muito grande,",
              maximum_size: "o tamanho máximo é 30 MB. Tente novamente!",
              button: "Tente outro arquivo",
              try_again: "Por favor, tente novamente",
              unsupported_format: "Desculpe, o vídeo não foi enviado, o formato do arquivo não é compatível ou algo deu errado no servidor.",
              format: "Carregue arquivos MP4, MOV e AVI.",
              upgrade: "Atualize seu plano para enviar vídeos",
              uploading: "Enviando...",
              invalid_youtube: "Links inválidos do YouTube",
              invalid_link: "Links inválidos"
            }
          },
          slide: {
            title: "Deslizar",
            slide_link: "Link do slide",
            helper_message: "Você pode incorporar Apresentações Google ou Apresentação Canva"
          },
          note: {
            title: "Observação",
            placeholder: "Escreva aqui sua nota de aula",
            ai: {
              outline: "Gerar esboço da lição",
              note: "Gerar nota de aula",
              activities: "Gerar atividades de aula"
            }
          }
        }
      },
      lesson_nav: {
        materials: "Materiais",
        exercises: "Exercícios"
      },
      add_lesson: {
        button_title: "Adicionar",
        modal_heading: "Adicionar nova lição",
        lesson_title: "Título da lição",
        click_to: "Clique para",
        fullname: "nome completo",
        save: "Salvar",
        edit: "Editar",
        "delete": "Excluir",
        lock: "Trancar",
        unlock: "Desbloquear",
        start_reorder: "Reordenar",
        end_reorder: "Finalizar novo pedido",
        modal_heading_section: "Adicionar nova seção",
        lesson_section_title: "Título da seção",
        cancel: "Cancelar"
      },
      disabled: "O recurso está desativado",
      next: "Próximo",
      prev: "Anterior",
      version_history: {
        title: "Histórico de versões",
        fetch_more_versions: "Buscar mais versões",
        current_version: "Versão Atual",
        restore_version: "Restaurar esta versão"
      },
      drag: "arraste um cartão para reordenar",
      no_lesson: "Ainda não há aulas",
      share_your_knowledge: "Compartilhe seu conhecimento com o mundo criando aulas envolventes. Comece clicando no botão Adicionar.",
      heading_v2: "Contente",
      section_prompt: {
        cta: "Habilitar seções",
        header: "Habilitar seções",
        title: "Lançamos seções do curso",
        description: "Agora você pode agrupar aulas em seções para organizar seu conteúdo e tornar o aprendizado mais fácil para seus alunos.",
        activate: "Ativar",
        cancel: "Cancelar"
      }
    },
    news_feed: {
      heading: "Notícias",
      body_header: "Nenhuma postagem ainda",
      body_content: "Faça uma postagem para sua turma. Comece clicando no botão Adicionar.",
      pinned: "Fixado",
      snackbar: {
        comment_deleted: "Comentário deletado",
        reaction_error: "Ocorreu um erro ao reagir ao feed de notícias",
        comment_creation_error: "Ocorreu um erro ao criar o comentário",
        add_comment_success: "Comentário adicionado",
        toggle_pin_error: "Falha ao alternar feed fixado",
        unpinned: "Desafixado",
        successfully: "Com sucesso",
        feed_delete_success: "Feed excluído com sucesso",
        fetch_feed_fail: "Falha ao buscar feeds de notícias",
        fetching_error: "Ocorreu um erro ao buscar o feed"
      },
      heading_button: {
        title: "Adicionar",
        edit_post: "Editar post",
        make_a_post: "Faça uma postagem",
        placeholder: "Compartilhe uma atualização com seus alunos",
        cancel: "Cancelar",
        post: "Publicar"
      }
    }
  },
  navItems: {
    nav_news_feed: "Notícias",
    nav_attendance: "Comparecimento",
    nav_submissions: "Envios",
    nav_marks: "Marcas",
    nav_people: "Pessoas",
    nav_certificates: "Certificados",
    nav_landing_page: "Página inicial",
    nav_settings: "Configurações",
    nav_content: "Contente"
  },
  not_permitted: {
    header: "Sem permissão",
    body: "Infelizmente você não tem acesso a este curso.",
    button: "Ir para casa"
  }
};
const courses = {
  heading: "Cursos",
  heading_button: "Criar curso",
  search_placeholder: "Encontrar curso",
  new_course_modal: {
    heading: "Crie um curso",
    course_name: "Nome do curso",
    course_name_placeholder: "Nome do seu curso",
    short_description: "Pequena descrição",
    short_description_placeholder: "Uma pequena descrição sobre este curso",
    button: "Terminar",
    type: "Tipo de curso",
    type_selector_title: "Que tipo de curso você está procurando?",
    back: "Voltar",
    next: "Próximo"
  },
  course_card: {
    empty_title: "Nenhum curso criado",
    empty_description: "Compartilhe seu conhecimento com o mundo criando cursos envolventes para seus alunos.",
    error_message: "Um erro ocorreu.",
    lessons_number: "lições",
    students: "estudantes",
    published: "Publicados",
    unpublished: "Não publicado",
    continue_course: "Continuar curso",
    list_view: {
      title: "Título",
      description: "Descrição",
      lessons: "Lições",
      students: "Alunos",
      published: "Publicados",
      type: "Tipo"
    },
    context_menu: {
      clone: "Clone",
      share: "Compartilhar",
      invite: "Convidar",
      "delete": "Excluir"
    },
    get_course: "Obter curso",
    learn_more: "Saber mais"
  },
  course_filter: {
    date_created: "Data Criada",
    published: "Publicados",
    lessons: "Lições"
  }
};
const ai = {
  help_me: "Ajude-me a escrever",
  placeholder: "Ajude-me a escrever uma breve descrição",
  text: "Começe a digitar...",
  reset: "Reiniciar",
  rephrase: "Reformular",
  insert: "Inserir",
  can_you: "Você pode reformular isso",
  requirements: "Por favor, escreva alguns requisitos necessários para fazer este curso:",
  description: "Por favor, escreva uma descrição detalhada do curso para este curso:",
  expectation: "O que um aluno deve esperar aprender com este curso:"
};
const dashboard = {
  morning_heading: "Bom dia",
  afternoon_heading: "Boa tarde",
  evening_heading: "Boa noite",
  create_course: "Criar curso",
  view_site: "Ver site",
  visit_site: "Visite o site",
  hero_content: "Obrigado pelo que você faz ❤️. Você está mudando vidas, uma sala de aula de cada vez e, graças a você, o mundo é um lugar melhor. 😊",
  hero_button: "Continue construindo 🚀",
  your_schedule: "Sua programação",
  today: "Hoje",
  yesterday: "Ontem",
  tomorrow: "Amanhã",
  no_schedule: "Nenhuma lição neste dia",
  join_call: "Participar da chamada",
  click_to_join: "Clique para participar da chamada",
  no_call_link: "Nenhum link de chamada foi adicionado para esta lição. Pergunte ao seu treinador",
  current_lesson: "Atualmente aprendendo",
  your_progress: "Seu progresso",
  "continue": "Continuar",
  no_courses: "Nenhum curso em andamento ainda",
  start_course: "Depois de iniciar um curso, seu progresso será refletido aqui",
  lms_dashboard_hero: "Hoje é mais um dia para aproximar você de seus objetivos de aprendizagem. Não desista, quanto mais você aprende melhor você fica.",
  dont: "Não desista",
  lessons_completed: "Lições concluídas",
  No_courses_started: "Nenhum curso iniciado"
};
const schedule = {
  title: "Sua programação",
  essence: "A essência da colaboração em design",
  figma: "Introdução à Figma",
  join: "Junte-se à chamada",
  no: "Nenhuma lição neste dia"
};
const components = {
  settings: {
    domains: {
      add: "Adicionar",
      url: "URL",
      update: "Atualizar domínio",
      custom: "Domínio personalizado",
      domain: "Adicione seu próprio nome de domínio",
      title: "Domínio personalizado",
      save: "Salvar",
      your_domain: "Seu domínio",
      custom_domain_error: "Você não pode adicionar um domínio de nível superior como domínio personalizado. Em vez disso, use um subdomínio como 'cursos.[seusite].com' ou 'www.[seusite].com'.",
      custom_domain_success: "Domínio personalizado adicionado com sucesso",
      dns_description: "Defina o seguinte registro em seu provedor DNS para continuar:",
      dns_type: "Tipo",
      dns_value: "Valor",
      dns_name: "Nome",
      refresh: "Atualizar",
      remove: "Remover",
      custom_favicon: "Favicon personalizado",
      custom_code: "Código personalizado"
    },
    "customize-lms": {
      title: "Personalizar LMS",
      disabled: "desabilitado",
      enabled: "Habilitado",
      save: "Salvar alterações",
      apps: {
        title: "Aplicativos",
        poll: "Enquete",
        live_comment: "Comentários ao vivo"
      },
      course: {
        title: "Curso",
        newsfeed: "Notícias",
        grading: "Classificação"
      },
      dashboard: {
        title: "Painel",
        community: "Comunidade",
        exercises: "Exercícios",
        banner_image: "Imagem do banner",
        banner_image_btn: "Atualizar imagem do banner",
        banner_text: "Texto do banner",
        banner_text_label: "Atualizar texto do banner",
        banner_text_placeholder: "Escreva o texto aqui"
      }
    },
    customize_lms: {
      title: "Personalizar LMS",
      enabled: "Habilitado",
      save: "Salvar alterações",
      apps: {
        title: "Aplicativos",
        poll: "Enquete",
        live_comment: "Comentários ao vivo"
      },
      course: {
        title: "Curso",
        newsfeed: "Notícias",
        grading: "Classificação"
      },
      dashboard: {
        title: "Painel",
        community: "Comunidade",
        exercises: "Exercícios",
        banner_image: "Imagem do banner",
        banner_image_btn: "Atualizar imagem do banner",
        banner_text: "Texto do banner",
        banner_text_label: "Atualizar texto do banner",
        banner_text_placeholder: "Escreva o texto aqui"
      },
      disabled: "Desabilitado"
    }
  },
  quiz: {
    title: "Testes",
    second: "Segundo(s)",
    answer: "Respostas)",
    question_delete: "Excluir pergunta",
    add_more: "+ Adicione mais respostas",
    remove_last: "- Remover última resposta",
    quiz_delete: "Excluir questionário",
    delete_question: "Tem certeza de que deseja excluir esta pergunta?",
    delete_quiz: "Tem certeza de que deseja excluir este teste?",
    lose_content: "Você perderá seu conteúdo e esta ação não poderá ser desfeita.",
    "delete": "Excluir",
    update: "Atualizar",
    create: "Criar",
    a_quiz: "um teste",
    quiz_title: "Titúlo do Quiz",
    placeholder: "O título do seu questionário",
    save: "Salvar as mudanças",
    "continue": "Continuar",
    rename: "Renomear",
    updated: "Atualizada",
    start: "Iniciar questionário",
    start_typing: "Comece a digitar sua pergunta",
    required_field: "Este campo é obrigatório",
    type_answer: "Digite a resposta",
    label: "Insira um rótulo",
    no_quizz: "Nenhum questionário criado",
    interactive: "Crie questionários interativos com placar para seus alunos."
  }
};
const markdown_editor = {
  write: "Escrever",
  preview: "Visualização"
};
const navigation = {
  goto: "Vá para",
  courses: "Cursos",
  home: "Lar",
  classroomio_home: "Página inicial do ClassroomIO",
  dashboard: "Painel",
  discussion: "Discussão",
  people: "Pessoas",
  goto_lms: "Acesse o LMS",
  goto_home: "Vá para a página inicial do ClassroomIO",
  login: "Conecte-se",
  signup: "Inscrever-se",
  redirecting: "Redirecionando",
  loading_state: "Levando você para a próxima página, aguarde.",
  org_loading_state: "Levando você para sua organização...",
  add_organization: "+ Adicionar organização"
};
const add_org = {
  create_org: "Criar organização",
  name: "Nome da Organização",
  org_sitename: "Nome do site da organização",
  create: "Criar",
  sitename: "O nome do site já existe",
  error_organization: "Algo deu errado durante a criação desta organização. Atualize e tente novamente"
};
const setup = {
  get_started: "Iniciar",
  publish_course: {
    title: "Publicar um curso",
    desc: "Torne seu curso público e comprável",
    button_label: "Publicar curso"
  },
  exercise: {
    title: "Crie um exercício",
    desc: "Teste seus alunos, permitindo que eles demonstrem sua compreensão do assunto",
    button_label: "Criar tarefa"
  },
  lesson: {
    title: "Crie uma lição",
    desc: "Divida seu curso em lições que seus alunos possam entender facilmente",
    button_label: "Criar lição"
  },
  course: {
    title: "Criar curso",
    desc: "Crie um curso que você compartilhará com seus alunos",
    button_label: "Criar curso"
  },
  organization_profile: {
    title: "Atualizar foto do perfil da organização",
    desc: "Estabeleça uma identidade profissional e reconhecível para sua organização",
    button_label: "Atualizar perfil da organização"
  },
  personal_profile: {
    title: "Carregue uma foto de perfil e atualize o nome de usuário",
    desc: "Personalize e dê um toque humano tornando as interações mais pessoais e memoráveis",
    button_label: "Atualizar perfil"
  }
};
const pricing = {
  modal: {
    heading: "Plano de atualização",
    thanks: "Obrigado pelo seu apoio",
    plan: "Seu plano vem com vantagens e benefícios interessantes, incluindo acesso a todos os recursos futuros que lançaremos.",
    close: "Fechar",
    learn: "Saber mais",
    month: "mês",
    monthly: "Por mês",
    annually: "Anualmente",
    save: "Economize 2 meses"
  },
  plan_names: {
    free: "Livre",
    early: "Adepto pioneiro",
    enterprise: "Empreendimento"
  }
};
const org_navigation = {
  dashboard: "Painel",
  courses: "Cursos",
  community: "Comunidade",
  audience: "Público",
  setup: "Configurar",
  help: "Ajuda",
  settings: "Configurações",
  early_adopter: "Torne-se um dos primeiros a adotar",
  unlock: "Desbloqueie recursos ilimitados e invista em nosso futuro",
  upgrade: "Atualize agora"
};
const settings = {
  heading: "Configurações",
  billing: {
    sub_title: "Detalhes de cobrança",
    manage: "Gerencie seu faturamento",
    active: "Você não tem nenhum faturamento ativo",
    lemonsqueezy: "Usamos Lemonsqueezy para ajudar a gerenciar seu faturamento",
    open_billing: "Faturamento aberto"
  },
  integrations: {
    heading: "Telegrama",
    sub_heading: "Conecte sua conta ao Telegram para ser notificado sobre qualquer alteração no aplicativo.",
    step_authenticate: "Passo 1: Autentique sua conta por meio do bot ClassroomIO.",
    open_bot_button: "Abrir bot",
    step_chatId: "Passo 2: Insira o ID de bate-papo fornecido pelo bot.",
    connect_button: "Conectar",
    success_message: "Integração bem-sucedida",
    disconnect: "desconectar"
  },
  landing_page: {
    heading: "Página inicial",
    show_section: "Mostrar seção",
    hide_section: "Ocultar seção",
    title: "Título",
    title_highlight: "Destaque do título",
    subtitle: "Legenda",
    save_changes: "Salvar alterações",
    footer: {
      heading: "Rodapé",
      show_section: "Mostrar seção",
      hide_section: "Ocultar seção",
      facebook: "Facebook",
      twitter: "Twitter",
      linkedin: "LinkedIn"
    },
    mailing_list: {
      heading: "Lista de discussão",
      show_section: "Mostrar seção",
      hide_section: "Ocultar seção",
      title: "Título",
      subtitle: "Legenda",
      button_label: "Etiqueta do botão"
    },
    contact_us: {
      heading: "Contate-nos",
      show_section: "Mostrar seção",
      hide_section: "Ocultar seção",
      title: "Título",
      title_highlight: "Destaque do título",
      subtitle: "Legenda",
      phone_number: "Número de telefone",
      email: "E-mail"
    },
    faq: {
      heading: "perguntas frequentes",
      show_section: "Mostrar seção",
      hide_section: "Ocultar seção",
      title: "Título",
      question: "Pergunta",
      answer: "Responder",
      button: "Adicionar novas perguntas frequentes",
      save: "Salvar",
      cancel: "Cancelar"
    },
    courses: {
      heading: "Cursos",
      show_section: "Mostrar seção",
      hide_section: "Ocultar seção",
      title: "Título",
      title_highlight: "Destaque do título",
      subtitle: "Legenda"
    },
    about: {
      heading: "Sobre",
      title: "Título",
      content: "Contente",
      upload_an_image: "Carregar uma imagem",
      select_image: "Selecione a imagem"
    },
    actions: {
      heading: "Ações",
      label: "Rótulo",
      link: "Link",
      no_redirect: "Sem redirecionamento",
      redirect: "Redirecionar",
      show_banner: "Mostrar faixa",
      hide_banner: "Ocultar faixa",
      banner_type: {
        heading: "Tipo de faixa",
        video: "Vídeo",
        image: "Imagem"
      }
    },
    background: {
      title: "Imagem de fundo",
      show_background: "Mostrar plano de fundo",
      hide_background: "Ocultar plano de fundo"
    }
  },
  organization: {
    organization_profile: {
      heading: "Perfil da organização",
      organization_name: "Nome da organização",
      upload_image: "Enviar Imagem",
      update_organization: "Atualizar organização",
      team: {
        heading: "Equipe",
        body: "Adicione colegas de equipe à sua organização para que ambos possam colaborar em projetos.",
        button: "Gerenciar equipe",
        sub_heading: "Monte sua equipe"
      },
      custom_domain: {
        heading: "Domínio personalizado",
        sub_heading: "Personalize seu domínio",
        body: "Crie um URL personalizado para que seu público possa acessar sua organização facilmente",
        button: "Editar domínio"
      },
      theme: {
        heading: "Tema",
        sub_heading: "Defina a cor da sua marca",
        custom_theme: "Tema personalizado",
        add_theme: "Adicionar tema"
      },
      customize_lms: {
        heading: "Personalizar LMS",
        sub_heading: "Personalize o LMS da sua organização",
        button: "Personalizar LMS",
        body: "Controle a experiência de aprendizagem de seus alunos. Você pode ativar ou desativar guias e páginas, atualizar o banner do LMS e os comentários no aplicativo de acordo com os requisitos da sua organização"
      }
    }
  },
  profile: {
    update_profile: "Atualizar perfil",
    logout: "Sair",
    personal_information: {
      heading: "Informações pessoais",
      full_name: "Nome completo",
      username: "Nome de usuário",
      email: "E-mail"
    },
    profile_picture: {
      heading: "Foto do perfil",
      upload_image: "Enviar Imagem",
      file_size: "Tamanho máximo do arquivo:",
      accepted: "Aceito:",
      validation_error: "O tamanho do arquivo excede o limite máximo:"
    }
  },
  tabs: {
    profile_tab: "Perfil",
    organization_tab: "Organização",
    landing_page_tab: "Página inicial",
    billing_tab: "Cobrança",
    integrations_tab: "Integrações",
    language_tab: "Linguagem"
  },
  subheadings: {
    view_site: "Ver site"
  }
};
const login = {
  welcome: "bem vindo de volta",
  email: "Seu email",
  password: "Sua senha",
  forgot: "Esqueceu sua senha?",
  login: "Conecte-se"
};
const welcome_modal = {
  we_at: "Nós em",
  small_team: "somos uma pequena equipe com a grande missão de capacitar educadores com excelente tecnologia para ajudá-los a treinar a geração futura. A educação é o presente mais poderoso que você pode dar a alguém, e faz muito sentido dar a você todas as ferramentas necessárias para dar esse PRESENTE a mais pessoas.",
  thank_you: "Obrigado por nos escolher",
  deeply_appreciate: "agradecemos profundamente e estamos ao seu serviço."
};
const onboarding = {
  sell: "Venda cursos online",
  teach: "Ensine meus alunos atuais on-line",
  expanding: "Em outra plataforma, expandindo aqui",
  explore: "Só estou aqui para explorar",
  articles: "Artigos",
  search: "Mecanismo de busca",
  social: "Mídia social",
  friends: "Amigos e família",
  fullname: "Nome completo",
  name: "Nome da Organização",
  organisation_sitename: "Nome do site da organização",
  what_brings: "O que leva você a",
  how: "Como você ficou sabendo sobre nós?",
  back: "Voltar",
  "continue": "Continuar",
  employees: "Treinar meus funcionários",
  customers: "Criar cursos para meus clientes"
};
const verify_email_modal = {
  heading: "Verifique seu e-mail",
  sent_verification: "Enviamos um e-mail de verificação para",
  to_confirm: "para confirmar a validade do e-mail fornecido.",
  loading: "Carregando...",
  resend: "Reenviar código de verificação",
  resend_in: "Reenviar verificação em",
  seconds: "segundos",
  snackbar_error: "erro ao enviar código"
};
const generic = {
  locked: "Bloqueado",
  unlocked: "Desbloqueado"
};
const specialization = {
  course_tag: "Especialização"
};
const profileMenu = {
  profile: "PERFIL",
  current_org: "ORGANIZAÇÃO ATUAL",
  free_tools: "FERRAMENTAS GRATUITAS",
  progress: "Relatório de progresso",
  timer: "Temporizador de atividade",
  tic_tac: "Jogo da velha",
  see_more: "Ver mais",
  whats_new: "O que há de novo",
  launch_week: "Semana de lançamento"
};
const validations = {
  invalid_type_error: "Não deve estar vazio",
  email: {
    not_valid: "E-mail inválido"
  },
  course_payment: {
    email: {
      invalid_email: "Endereço de email invalido"
    },
    full_name: {
      min_char: "Deve ter 6 ou mais caracteres"
    }
  },
  confirm_password: {
    not_match: "Não corresponde à senha"
  },
  onboarding: {
    step_two: {
      source: {
        required: "Selecione uma opção"
      },
      goal: {
        required: "Selecione uma opção"
      }
    },
    step_one: {
      full_name: {
        min_char: "O nome completo deve conter 5 ou mais caracteres"
      }
    }
  },
  reset: {
    password: {
      min_char: "Deve ter 6 ou mais caracteres"
    }
  },
  auth: {
    password: {
      min_char: "Deve ter 6 ou mais caracteres"
    },
    email: {
      invalid_email: "Endereço de email invalido"
    }
  },
  forgot: {
    invalid_email: "Endereço de email invalido"
  },
  org_landing_page: {
    message: {
      min_char: "Deve ter 10 ou mais caracteres"
    },
    phone: {
      min_char: "Deve ter 6 ou mais caracteres"
    },
    email: {
      invalid_email: "Endereço de email invalido"
    },
    name: {
      min_char: "Deve ter 6 ou mais caracteres"
    }
  },
  comment_in_community: {
    min_char: "Deve ter 6 ou mais caracteres"
  },
  ask_community: {
    course_id: {
      select_course: "Selecione um curso"
    },
    body: {
      min_char: "Deve ter 10 ou mais caracteres"
    },
    title: {
      min_char: "Deve ter 6 ou mais caracteres"
    }
  },
  create_quiz: {
    min_char: "Deve ter 6 ou mais caracteres"
  },
  lesson_schema: {
    empty_title: "O título não pode ficar vazio"
  },
  news_feed: {
    min_char: "O campo deve conter 5 ou mais caracteres"
  },
  site_name: {
    min_char: "O nome do site deve conter cinco ou mais caracteres",
    hyphen_rule: "O nome do site não pode começar ou terminar com um hífen"
  },
  organization_name: {
    min_char: "A organização deve conter 5 ou mais caracteres",
    hyphen_rule: "O nome da organização não pode começar ou terminar com um hífen"
  },
  user_profile: {
    email: "Endereço de email invalido",
    username: "O nome de usuário não pode ficar vazio",
    fullname: "O nome deve ter no mínimo 5 caracteres"
  }
};
const explore = {
  empty_heading: "Nenhum curso disponível",
  empty_description: "Atualmente não há nenhum curso publicado disponível",
  heading: "Explore nossos cursos"
};
const delete_modal = {
  label: "Excluir",
  content: "Tem certeza?",
  no: "Não",
  yes: "Sim"
};
const pt = {
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

export { add_org, ai, audience, community, components, content, course, courses, dashboard, pt as default, delete_modal, exercises, explore, generic, lms_navigation, login, markdown_editor, my_learning, navigation, onboarding, org_navigation, pricing, profileMenu, schedule, settings, setup, snackbar, specialization, upgrade, validations, verify_email_modal, welcome_modal };
//# sourceMappingURL=pt-e02e127c.js.map