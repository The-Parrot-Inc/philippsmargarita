// Per-language seasonal drinks map keyed by YYYY-MM
export type SeasonalItem = { season: string; title: string; description: string; image?: string; enabled?: boolean };
export type SeasonalMap = Record<string, SeasonalItem>;

const seasonal: Record<string, SeasonalMap> = {
  en: {
    '2024-10': { season: 'October & November', title: 'Tequila', description: 'Our seasonal muse.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: 'December', title: 'Glühwein', description: 'Reimagined with warmth.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: 'January', title: 'The Fresh Start', description: 'A Winter Citrus Spritz', image: '/images/the-fresh-start.webp', enabled: true }
  },
  de: {
    '2024-10': { season: 'Oktober & November', title: 'Tequila', description: 'Unsere saisonale Muse.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: 'Dezember', title: 'Glühwein', description: 'Neu interpretiert mit Wärme.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: 'Januar', title: 'Der Neuanfang', description: 'Ein Winter Zitrus Spritz', image: '/images/o.webp', enabled: true }
  },
  es: {
    '2024-10': { season: 'Octubre y Noviembre', title: 'Tequila', description: 'Nuestra musa estacional.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: 'Diciembre', title: 'Glühwein', description: 'Reinventado con calidez.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: 'Enero', title: 'El Nuevo Comienzo', description: 'Un Spritz de Cítricos de Invierno', image: '/images/the-fresh-start.webp', enabled: true }
  },
  ko: {
    '2024-10': { season: '10월 & 11월', title: '데킬라', description: '우리의 계절 뮤즈.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: '12월', title: '글뤼바인', description: '따뜻함으로 재해석.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: '1월', title: '새로운 시작', description: '겨울 감귤 스프리츠', image: '/images/the-fresh-start.webp', enabled: true }
  },
  fr: {
    '2024-10': { season: 'Octobre et Novembre', title: 'Tequila', description: 'Notre muse saisonnière.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: 'Décembre', title: 'Glühwein', description: 'Réinventé avec chaleur.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: 'Janvier', title: 'Le Nouveau Départ', description: 'Un Spritz d\'Agrumes d\'Hiver', image: '/images/the-fresh-start.webp', enabled: true }
  },
  it: {
    '2024-10': { season: 'Ottobre e Novembre', title: 'Tequila', description: 'La nostra musa stagionale.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: 'Dicembre', title: 'Glühwein', description: 'Reinterpretato con calore.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: 'Gennaio', title: 'Il Nuovo Inizio', description: 'Uno Spritz di Agrumi Invernali', image: '/images/the-fresh-start.webp', enabled: true }
  },
  ca: {
    '2024-10': { season: 'Octubre i Novembre', title: 'Tequila', description: 'La nostra musa estacional.', image: '/images/tequila.webp', enabled: false },
    '2024-12': { season: 'Desembre', title: 'Glühwein', description: 'Reinventat amb calidesa.', image: '/images/gluhwein.webp', enabled: true },
    '2025-01': { season: 'Gener', title: 'El Nou Inici', description: 'Un Spritz de Cítrics d\'Hivern', image: '/images/the-fresh-start.webp', enabled: true }
  }
};

export default seasonal;
