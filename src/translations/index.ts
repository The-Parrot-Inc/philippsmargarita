export type Language = 'en' | 'de' | 'es' | 'ko' | 'fr' | 'it' | 'ca';

export interface Translations {
  nav: {
    scroll: string;
  };
  hero: {
    subtitle: string;
    tagline1: string;
    tagline2: string;
    cta: string;
  };
  about: {
    subtitle: string;
    title1: string;
    title2: string;
    paragraph1: string;
    paragraph2: string;
  };
  drinks: {
    subtitle: string;
    title1: string;
    title2: string;
    margarita: {
      title: string;
      description1: string;
      description2: string;
    };
    tequila: {
      season: string;
      title: string;
      description: string;
    };
    gluhwein: {
      season: string;
      title: string;
      description: string;
    };
  };
  philosophy: {
    subtitle: string;
    title1: string;
    title2: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  invitation: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      reason: string;
      reasonPlaceholder: string;
      submit: string;
      successTitle: string;
      successMessage1: string;
      successMessage2: string;
    };
  };
  footer: {
    description: string;
    tagline: string;
    copyright: string;
  };
  languages: {
    en: string;
    de: string;
    es: string;
    ko: string;
    fr: string;
    it: string;
    ca: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      scroll: 'Scroll',
    },
    hero: {
      subtitle: "Mainz's Hidden Bar",
      tagline1: 'A place where exclusivity meets craftsmanship.',
      tagline2: 'Access only by invitation.',
      cta: 'Request Invitation',
    },
    about: {
      subtitle: 'The Experience',
      title1: 'Where Mystery',
      title2: 'Meets Mastery',
      paragraph1: "Philipp's Margarita is a hidden bar nestled in the heart of Mainz, Germany — known only to those who seek more than just a drink. This invitation-only experience celebrates the art of mixology, with each evening crafted around exclusivity, conversation, and timeless flavor.",
      paragraph2: 'Here, craft cocktails meet refined ambiance. Our signature margarita is just the beginning of a journey through seasonal drinks and luxury nightlife that redefines what it means to enjoy an exclusive cocktail experience.',
    },
    drinks: {
      subtitle: 'Our Selection',
      title1: 'Crafted for',
      title2: 'the Few',
      margarita: {
        title: 'The Margarita',
        description1: 'Our signature creation defines our story: classic, balanced, unforgettable.',
        description2: 'Discover flavors that evolve, yet remain timeless.',
      },
      tequila: {
        season: 'October & November',
        title: 'Tequila',
        description: 'Our seasonal muse.',
      },
      gluhwein: {
        season: 'December',
        title: 'Glühwein',
        description: 'Reimagined with warmth.',
      },
    },
    philosophy: {
      subtitle: 'Our Philosophy',
      title1: 'More Than',
      title2: 'a Bar',
      paragraph1: "Philipp's Margarita is not a place you find — it finds you.",
      paragraph2: 'Hidden behind an unmarked door in Mainz, it represents a community of refined taste and quiet luxury.',
      paragraph3: 'No noise. No crowds. Only presence.',
    },
    invitation: {
      subtitle: 'Invitation Only',
      title1: 'Join the',
      title2: 'List',
      description: "Philipp's Margarita is accessible only by personal invitation. To express your interest, fill in the form below. Our concierge will review requests and reach out if a seat becomes available.",
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        reason: 'Why should we invite you?',
        reasonPlaceholder: 'Tell us about your appreciation for refined experiences...',
        submit: 'Request Invitation',
        successTitle: 'Request Received',
        successMessage1: 'Your request has been received.',
        successMessage2: "If selected, you'll receive an invitation soon.",
      },
    },
    footer: {
      description: 'An exclusive hidden bar in Mainz, Germany.\nInvitation-only. Fine cocktails, seasonal experiences.',
      tagline: 'Follow the whispers.',
      copyright: "© 2025 Philipp's Margarita. All rights reserved.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
  de: {
    nav: {
      scroll: 'Scrollen',
    },
    hero: {
      subtitle: "Mainz' versteckte Bar",
      tagline1: 'Ein Ort, an dem Exklusivität auf Handwerkskunst trifft.',
      tagline2: 'Zugang nur auf Einladung.',
      cta: 'Einladung anfordern',
    },
    about: {
      subtitle: 'Das Erlebnis',
      title1: 'Wo Mysterium',
      title2: 'auf Meisterschaft trifft',
      paragraph1: "Philipp's Margarita ist eine versteckte Bar im Herzen von Mainz, Deutschland — bekannt nur denen, die mehr als nur einen Drink suchen. Dieses Erlebnis nur auf Einladung zelebriert die Kunst der Mixologie, wobei jeder Abend um Exklusivität, Konversation und zeitlosen Geschmack gestaltet ist.",
      paragraph2: 'Hier treffen Craft-Cocktails auf raffiniertes Ambiente. Unsere charakteristische Margarita ist nur der Anfang einer Reise durch saisonale Getränke und luxuriöses Nachtleben, das neu definiert, was es bedeutet, ein exklusives Cocktail-Erlebnis zu genießen.',
    },
    drinks: {
      subtitle: 'Unsere Auswahl',
      title1: 'Kreiert für',
      title2: 'die Wenigen',
      margarita: {
        title: 'Die Margarita',
        description1: 'Unsere charakteristische Kreation definiert unsere Geschichte: klassisch, ausgewogen, unvergesslich.',
        description2: 'Entdecken Sie Aromen, die sich entwickeln und doch zeitlos bleiben.',
      },
      tequila: {
        season: 'Oktober & November',
        title: 'Tequila',
        description: 'Unsere saisonale Muse.',
      },
      gluhwein: {
        season: 'Dezember',
        title: 'Glühwein',
        description: 'Neu interpretiert mit Wärme.',
      },
    },
    philosophy: {
      subtitle: 'Unsere Philosophie',
      title1: 'Mehr als',
      title2: 'eine Bar',
      paragraph1: "Philipp's Margarita ist kein Ort, den Sie finden — er findet Sie.",
      paragraph2: 'Versteckt hinter einer unauffälligen Tür in Mainz repräsentiert es eine Gemeinschaft von raffiniertem Geschmack und stillem Luxus.',
      paragraph3: 'Kein Lärm. Keine Menschenmassen. Nur Präsenz.',
    },
    invitation: {
      subtitle: 'Nur auf Einladung',
      title1: 'Treten Sie',
      title2: 'der Liste bei',
      description: "Philipp's Margarita ist nur durch persönliche Einladung zugänglich. Um Ihr Interesse zu bekunden, füllen Sie bitte das untenstehende Formular aus. Unser Concierge wird die Anfragen prüfen und sich melden, falls ein Platz verfügbar wird.",
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr vollständiger Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre@email.de',
        reason: 'Warum sollten wir Sie einladen?',
        reasonPlaceholder: 'Erzählen Sie uns von Ihrer Wertschätzung für raffinierte Erlebnisse...',
        submit: 'Einladung anfordern',
        successTitle: 'Anfrage erhalten',
        successMessage1: 'Ihre Anfrage wurde empfangen.',
        successMessage2: 'Falls ausgewählt, erhalten Sie bald eine Einladung.',
      },
    },
    footer: {
      description: 'Eine exklusive versteckte Bar in Mainz, Deutschland.\nNur auf Einladung. Edle Cocktails, saisonale Erlebnisse.',
      tagline: 'Folgen Sie dem Flüstern.',
      copyright: "© 2025 Philipp's Margarita. Alle Rechte vorbehalten.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
  es: {
    nav: {
      scroll: 'Desplazar',
    },
    hero: {
      subtitle: 'El Bar Oculto de Mainz',
      tagline1: 'Un lugar donde la exclusividad se encuentra con la artesanía.',
      tagline2: 'Acceso solo por invitación.',
      cta: 'Solicitar Invitación',
    },
    about: {
      subtitle: 'La Experiencia',
      title1: 'Donde el Misterio',
      title2: 'Encuentra la Maestría',
      paragraph1: "Philipp's Margarita es un bar oculto ubicado en el corazón de Mainz, Alemania — conocido solo por aquellos que buscan más que una simple bebida. Esta experiencia solo por invitación celebra el arte de la mixología, con cada noche diseñada en torno a la exclusividad, la conversación y el sabor atemporal.",
      paragraph2: 'Aquí, los cócteles artesanales se encuentran con un ambiente refinado. Nuestro margarita característico es solo el comienzo de un viaje a través de bebidas de temporada y vida nocturna de lujo que redefine lo que significa disfrutar de una experiencia exclusiva de cócteles.',
    },
    drinks: {
      subtitle: 'Nuestra Selección',
      title1: 'Creado para',
      title2: 'los Pocos',
      margarita: {
        title: 'La Margarita',
        description1: 'Nuestra creación característica define nuestra historia: clásica, equilibrada, inolvidable.',
        description2: 'Descubre sabores que evolucionan pero permanecen atemporales.',
      },
      tequila: {
        season: 'Octubre y Noviembre',
        title: 'Tequila',
        description: 'Nuestra musa estacional.',
      },
      gluhwein: {
        season: 'Diciembre',
        title: 'Glühwein',
        description: 'Reinventado con calidez.',
      },
    },
    philosophy: {
      subtitle: 'Nuestra Filosofía',
      title1: 'Más que',
      title2: 'un Bar',
      paragraph1: "Philipp's Margarita no es un lugar que encuentres — te encuentra a ti.",
      paragraph2: 'Escondido detrás de una puerta sin marcar en Mainz, representa una comunidad de gusto refinado y lujo discreto.',
      paragraph3: 'Sin ruido. Sin multitudes. Solo presencia.',
    },
    invitation: {
      subtitle: 'Solo por Invitación',
      title1: 'Únete a',
      title2: 'la Lista',
      description: "Philipp's Margarita es accesible solo por invitación personal. Para expresar tu interés, completa el formulario a continuación. Nuestro conserje revisará las solicitudes y se pondrá en contacto si hay un asiento disponible.",
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        email: 'Correo electrónico',
        emailPlaceholder: 'tu@email.com',
        reason: '¿Por qué deberíamos invitarte?',
        reasonPlaceholder: 'Cuéntanos sobre tu aprecio por las experiencias refinadas...',
        submit: 'Solicitar Invitación',
        successTitle: 'Solicitud Recibida',
        successMessage1: 'Tu solicitud ha sido recibida.',
        successMessage2: 'Si eres seleccionado, recibirás una invitación pronto.',
      },
    },
    footer: {
      description: 'Un bar exclusivo oculto en Mainz, Alemania.\nSolo por invitación. Cócteles refinados, experiencias de temporada.',
      tagline: 'Sigue los susurros.',
      copyright: "© 2025 Philipp's Margarita. Todos los derechos reservados.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
  ko: {
    nav: {
      scroll: '스크롤',
    },
    hero: {
      subtitle: '마인츠의 숨겨진 바',
      tagline1: '독점성과 장인정신이 만나는 곳.',
      tagline2: '초대장으로만 입장 가능.',
      cta: '초대 요청',
    },
    about: {
      subtitle: '경험',
      title1: '신비가',
      title2: '숙련을 만나는 곳',
      paragraph1: "Philipp's Margarita는 독일 마인츠 중심부에 자리한 숨겨진 바입니다 — 단순한 음료 이상을 찾는 사람들만이 알고 있습니다. 이 초대 전용 경험은 믹솔로지 예술을 기념하며, 매일 저녁 독점성, 대화, 그리고 시대를 초월한 맛을 중심으로 만들어집니다.",
      paragraph2: '여기서는 수제 칵테일이 세련된 분위기와 만납니다. 우리의 시그니처 마르가리타는 계절 음료와 럭셔리 나이트라이프를 통한 여정의 시작일 뿐이며, 독점적인 칵테일 경험을 즐기는 것의 의미를 재정의합니다.',
    },
    drinks: {
      subtitle: '우리의 선택',
      title1: '소수를 위해',
      title2: '만들어진',
      margarita: {
        title: '마르가리타',
        description1: '우리의 시그니처 창작물은 우리의 이야기를 정의합니다: 클래식하고, 균형잡힌, 잊을 수 없는.',
        description2: '진화하지만 시대를 초월한 맛을 발견하세요.',
      },
      tequila: {
        season: '10월 & 11월',
        title: '데킬라',
        description: '우리의 계절 뮤즈.',
      },
      gluhwein: {
        season: '12월',
        title: '글뤼바인',
        description: '따뜻함으로 재해석.',
      },
    },
    philosophy: {
      subtitle: '우리의 철학',
      title1: '바 그 이상',
      title2: '',
      paragraph1: "Philipp's Margarita는 당신이 찾는 곳이 아닙니다 — 그것이 당신을 찾습니다.",
      paragraph2: '마인츠의 표시 없는 문 뒤에 숨겨져 있으며, 세련된 취향과 조용한 럭셔리의 커뮤니티를 나타냅니다.',
      paragraph3: '소음 없음. 군중 없음. 오직 존재만.',
    },
    invitation: {
      subtitle: '초대 전용',
      title1: '리스트에',
      title2: '참여하세요',
      description: "Philipp's Margarita는 개인 초대장으로만 접근할 수 있습니다. 관심을 표현하려면 아래 양식을 작성하세요. 우리의 컨시어지가 요청을 검토하고 자리가 생기면 연락드립니다.",
      form: {
        name: '이름',
        namePlaceholder: '성함',
        email: '이메일',
        emailPlaceholder: 'your@email.com',
        reason: '왜 당신을 초대해야 할까요?',
        reasonPlaceholder: '세련된 경험에 대한 당신의 감상을 말씀해주세요...',
        submit: '초대 요청',
        successTitle: '요청 접수됨',
        successMessage1: '귀하의 요청이 접수되었습니다.',
        successMessage2: '선택되시면 곧 초대장을 받으실 것입니다.',
      },
    },
    footer: {
      description: '독일 마인츠의 독점 숨겨진 바.\n초대 전용. 고급 칵테일, 계절 경험.',
      tagline: '속삭임을 따르세요.',
      copyright: "© 2025 Philipp's Margarita. 모든 권리 보유.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
  fr: {
    nav: {
      scroll: 'Défiler',
    },
    hero: {
      subtitle: 'Le Bar Caché de Mayence',
      tagline1: 'Un lieu où l\'exclusivité rencontre l\'artisanat.',
      tagline2: 'Accès sur invitation uniquement.',
      cta: 'Demander une Invitation',
    },
    about: {
      subtitle: 'L\'Expérience',
      title1: 'Où le Mystère',
      title2: 'Rencontre la Maîtrise',
      paragraph1: "Philipp's Margarita est un bar caché niché au cœur de Mayence, en Allemagne — connu seulement de ceux qui cherchent plus qu'un simple verre. Cette expérience sur invitation célèbre l'art de la mixologie, avec chaque soirée conçue autour de l'exclusivité, de la conversation et de la saveur intemporelle.",
      paragraph2: 'Ici, les cocktails artisanaux rencontrent une ambiance raffinée. Notre margarita signature n\'est que le début d\'un voyage à travers des boissons de saison et une vie nocturne de luxe qui redéfinit ce que signifie profiter d\'une expérience cocktail exclusive.',
    },
    drinks: {
      subtitle: 'Notre Sélection',
      title1: 'Créé pour',
      title2: 'les Rares',
      margarita: {
        title: 'La Margarita',
        description1: 'Notre création signature définit notre histoire : classique, équilibrée, inoubliable.',
        description2: 'Découvrez des saveurs qui évoluent tout en restant intemporelles.',
      },
      tequila: {
        season: 'Octobre et Novembre',
        title: 'Tequila',
        description: 'Notre muse saisonnière.',
      },
      gluhwein: {
        season: 'Décembre',
        title: 'Glühwein',
        description: 'Réinventé avec chaleur.',
      },
    },
    philosophy: {
      subtitle: 'Notre Philosophie',
      title1: 'Plus qu\'un',
      title2: 'Bar',
      paragraph1: "Philipp's Margarita n'est pas un endroit que vous trouvez — il vous trouve.",
      paragraph2: 'Caché derrière une porte sans indication à Mayence, il représente une communauté de goût raffiné et de luxe discret.',
      paragraph3: 'Pas de bruit. Pas de foule. Seulement la présence.',
    },
    invitation: {
      subtitle: 'Sur Invitation Uniquement',
      title1: 'Rejoignez',
      title2: 'la Liste',
      description: "Philipp's Margarita est accessible uniquement sur invitation personnelle. Pour exprimer votre intérêt, remplissez le formulaire ci-dessous. Notre concierge examinera les demandes et vous contactera si une place se libère.",
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom complet',
        email: 'Email',
        emailPlaceholder: 'votre@email.fr',
        reason: 'Pourquoi devrions-nous vous inviter ?',
        reasonPlaceholder: 'Parlez-nous de votre appréciation pour les expériences raffinées...',
        submit: 'Demander une Invitation',
        successTitle: 'Demande Reçue',
        successMessage1: 'Votre demande a été reçue.',
        successMessage2: 'Si vous êtes sélectionné, vous recevrez bientôt une invitation.',
      },
    },
    footer: {
      description: 'Un bar caché exclusif à Mayence, Allemagne.\nSur invitation uniquement. Cocktails raffinés, expériences de saison.',
      tagline: 'Suivez les murmures.',
      copyright: "© 2025 Philipp's Margarita. Tous droits réservés.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
  it: {
    nav: {
      scroll: 'Scorri',
    },
    hero: {
      subtitle: 'Il Bar Nascosto di Magonza',
      tagline1: 'Un luogo dove l\'esclusività incontra l\'artigianato.',
      tagline2: 'Accesso solo su invito.',
      cta: 'Richiedi Invito',
    },
    about: {
      subtitle: 'L\'Esperienza',
      title1: 'Dove il Mistero',
      title2: 'Incontra la Maestria',
      paragraph1: "Philipp's Margarita è un bar nascosto nel cuore di Magonza, Germania — conosciuto solo da coloro che cercano più di un semplice drink. Questa esperienza su invito celebra l'arte della mixology, con ogni serata creata intorno all'esclusività, alla conversazione e al sapore senza tempo.",
      paragraph2: 'Qui, i cocktail artigianali incontrano un ambiente raffinato. Il nostro margarita caratteristico è solo l\'inizio di un viaggio attraverso drink stagionali e vita notturna di lusso che ridefinisce cosa significa godere di un\'esperienza esclusiva di cocktail.',
    },
    drinks: {
      subtitle: 'La Nostra Selezione',
      title1: 'Creato per',
      title2: 'i Pochi',
      margarita: {
        title: 'Il Margarita',
        description1: 'La nostra creazione caratteristica definisce la nostra storia: classico, equilibrato, indimenticabile.',
        description2: 'Scopri sapori che evolvono pur rimanendo senza tempo.',
      },
      tequila: {
        season: 'Ottobre e Novembre',
        title: 'Tequila',
        description: 'La nostra musa stagionale.',
      },
      gluhwein: {
        season: 'Dicembre',
        title: 'Glühwein',
        description: 'Reinterpretato con calore.',
      },
    },
    philosophy: {
      subtitle: 'La Nostra Filosofia',
      title1: 'Più di',
      title2: 'un Bar',
      paragraph1: "Philipp's Margarita non è un posto che trovi — ti trova.",
      paragraph2: 'Nascosto dietro una porta senza indicazioni a Magonza, rappresenta una comunità di gusto raffinato e lusso discreto.',
      paragraph3: 'Niente rumore. Niente folla. Solo presenza.',
    },
    invitation: {
      subtitle: 'Solo su Invito',
      title1: 'Unisciti alla',
      title2: 'Lista',
      description: "Philipp's Margarita è accessibile solo su invito personale. Per esprimere il tuo interesse, compila il modulo sottostante. Il nostro concierge esaminerà le richieste e ti contatterà se un posto diventa disponibile.",
      form: {
        name: 'Nome',
        namePlaceholder: 'Il tuo nome completo',
        email: 'Email',
        emailPlaceholder: 'tua@email.it',
        reason: 'Perché dovremmo invitarti?',
        reasonPlaceholder: 'Raccontaci del tuo apprezzamento per le esperienze raffinate...',
        submit: 'Richiedi Invito',
        successTitle: 'Richiesta Ricevuta',
        successMessage1: 'La tua richiesta è stata ricevuta.',
        successMessage2: 'Se selezionato, riceverai presto un invito.',
      },
    },
    footer: {
      description: 'Un bar nascosto esclusivo a Magonza, Germania.\nSolo su invito. Cocktail raffinati, esperienze stagionali.',
      tagline: 'Segui i sussurri.',
      copyright: "© 2025 Philipp's Margarita. Tutti i diritti riservati.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
  ca: {
    nav: {
      scroll: 'Desplaçar',
    },
    hero: {
      subtitle: 'El Bar Ocult de Magúncia',
      tagline1: 'Un lloc on l\'exclusivitat es troba amb l\'artesania.',
      tagline2: 'Accés només per invitació.',
      cta: 'Sol·licitar Invitació',
    },
    about: {
      subtitle: 'L\'Experiència',
      title1: 'On el Misteri',
      title2: 'Troba la Mestria',
      paragraph1: "Philipp's Margarita és un bar ocult ubicat al cor de Magúncia, Alemanya — conegut només per aquells que busquen més que una simple beguda. Aquesta experiència només per invitació celebra l'art de la mixologia, amb cada vespre dissenyat al voltant de l'exclusivitat, la conversa i el sabor atemporal.",
      paragraph2: 'Aquí, els còctels artesanals es troben amb un ambient refinat. El nostre margarita característic és només el començament d\'un viatge a través de begudes de temporada i vida nocturna de luxe que redefineix el que significa gaudir d\'una experiència exclusiva de còctels.',
    },
    drinks: {
      subtitle: 'La Nostra Selecció',
      title1: 'Creat per',
      title2: 'als Pocs',
      margarita: {
        title: 'El Margarita',
        description1: 'La nostra creació característica defineix la nostra història: clàssic, equilibrat, inoblidable.',
        description2: 'Descobreix sabors que evolucionen però romanen atemporals.',
      },
      tequila: {
        season: 'Octubre i Novembre',
        title: 'Tequila',
        description: 'La nostra musa estacional.',
      },
      gluhwein: {
        season: 'Desembre',
        title: 'Glühwein',
        description: 'Reinventat amb calidesa.',
      },
    },
    philosophy: {
      subtitle: 'La Nostra Filosofia',
      title1: 'Més que',
      title2: 'un Bar',
      paragraph1: "Philipp's Margarita no és un lloc que trobis — et troba a tu.",
      paragraph2: 'Amagat darrere una porta sense senyals a Magúncia, representa una comunitat de gust refinat i luxe discret.',
      paragraph3: 'Sense soroll. Sense multituds. Només presència.',
    },
    invitation: {
      subtitle: 'Només per Invitació',
      title1: 'Uneix-te a',
      title2: 'la Llista',
      description: "Philipp's Margarita és accessible només per invitació personal. Per expressar el teu interès, omple el formulari a continuació. El nostre conserge revisarà les sol·licituds i es posarà en contacte si hi ha un seient disponible.",
      form: {
        name: 'Nom',
        namePlaceholder: 'El teu nom complet',
        email: 'Correu electrònic',
        emailPlaceholder: 'el-teu@email.cat',
        reason: 'Per què t\'hauríem d\'invitar?',
        reasonPlaceholder: 'Explica\'ns sobre la teva apreciació per les experiències refinades...',
        submit: 'Sol·licitar Invitació',
        successTitle: 'Sol·licitud Rebuda',
        successMessage1: 'La teva sol·licitud ha estat rebuda.',
        successMessage2: 'Si ets seleccionat, rebràs una invitació aviat.',
      },
    },
    footer: {
      description: 'Un bar exclusiu ocult a Magúncia, Alemanya.\nNomés per invitació. Còctels refinats, experiències de temporada.',
      tagline: 'Segueix els xiuxiueigs.',
      copyright: "© 2025 Philipp's Margarita. Tots els drets reservats.",
    },
    languages: {
      en: 'English',
      de: 'Deutsch',
      es: 'Español',
      ko: '한국어',
      fr: 'Français',
      it: 'Italiano',
      ca: 'Català',
    },
  },
};
