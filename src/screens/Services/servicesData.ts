export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  coverages: string[];
  advantages: string[];
  price: string;
  coverageAmount: string;
  categories: string[];
}

export const services: Service[] = [
  {
    id: 'second-oeuvre',
    title: 'Assurance Décennale Second Œuvre',
    description:
      "Une protection pour les métiers du second œuvre : plomberie, électricité, menuiserie… avec des garanties solides et adaptées à votre activité.",
    icon: 'shield',
    tags: ['Plomberie', 'Électricité', 'Menuiserie'],
    coverages: [
      'Travaux de plomberie et sanitaire',
      'Installations électriques',
      'Menuiseries intérieures/extérieures',
    ],
    advantages: [
      'Délais rapides',
      'Contrats flexibles',
      'Accompagnement expert',
      'Assistance téléphonique',
    ],
    price: 'À partir de 390€/an',
    coverageAmount: 'Jusqu\'à 1 200 000€',
    categories: ['Les plus consultés', 'Second œuvre']
  },
  {
    id: 'dommages-ouvrage',
    title: 'Dommages Ouvrage',
    description:
      "L'assurance dommages ouvrage vous permet d’être remboursé rapidement en cas de malfaçons sans attendre une décision de justice.",
    icon: 'shield',
    tags: ['Préfinancement', 'Expertise rapide', 'Réparations garanties'],
    coverages: [
      'Malfaçons sur gros œuvre et second œuvre',
      'Défauts affectant la solidité',
      'Garantie préfinancement immédiat',
    ],
    advantages: [
      'Indemnisation sans attendre',
      'Moins de litiges avec les entrepreneurs',
      'Réparation rapide des dommages',
      'Couverture complémentaire à la décennale',
    ],
    price: 'À partir de 650€',
    coverageAmount: 'Selon les travaux déclarés',
    categories: ['Gros œuvre', 'Nouveauté']
  },
  {
    id: 'maison-bois',
    title: 'Maison Ossature Bois',
    description:
      "Une assurance spécifique pour la construction bois, incluant toutes les garanties liées aux structures légères et durables.",
    icon: 'home',
    tags: ['Construction bois', 'Isolation', 'Bardage'],
    coverages: [
      'Ossature bois',
      'Isolation thermique & acoustique',
      'Bardage bois ou composite',
    ],
    advantages: [
      'Protection contre les aléas climatiques',
      'Adapté aux techniques de construction modernes',
      'Couverture des vices cachés',
      'Devis rapide et personnalisé',
    ],
    price: 'À partir de 480€/an',
    coverageAmount: 'Jusqu\'à 1 000 000€',
    categories: ['Les plus consultés', 'Spécialisé']
  },
  {
    id: 'etancheur-pisciniste',
    title: 'Étancheur Pisciniste',
    description:
      "Une couverture sur mesure pour les spécialistes de l’étanchéité, des piscines, toitures, terrasses et bassins.",
    icon: 'water_pump',
    tags: ['Étanchéité toiture', 'Piscines', 'Terrasses'],
    coverages: [
      'Étanchéité de toitures et terrasses',
      'Revêtements étanches piscines',
      'Problèmes d’infiltration ou fuites',
    ],
    advantages: [
      'Spécifique aux métiers de l’eau',
      'Réactivité en cas de sinistre',
      'Contrats multi-activités disponibles',
      'Expertise dédiée aux piscinistes',
    ],
    price: 'À partir de 520€/an',
    coverageAmount: 'Jusqu\'à 900 000€',
    categories: ['Spécialisé', 'Nouveauté']
  },
  {
    id: 'profils-difficiles',
    title: 'Profils Difficiles',
    description:
      "Une solution pour les professionnels ayant déjà eu des sinistres, une radiation ou un refus d’assurance classique.",
    icon: 'people',
    tags: ['Jamais assuré', 'Sinistres passés', 'Activités à risque'],
    coverages: [
      'Reprise de profil avec antécédents',
      'Assurance en cas de radiation',
      'Métiers avec haut niveau de sinistralité',
    ],
    advantages: [
      'Analyse personnalisée de votre dossier',
      'Accès à une couverture malgré un historique compliqué',
      'Contrats adaptés à votre activité',
      'Accompagnement renforcé',
    ],
    price: 'Sur devis',
    coverageAmount: 'Selon étude personnalisée',
    categories: ['Les plus consultés', 'Spécialisé']
  },
  {
    id: 'gros-oeuvre',
    title: 'Assurance Décennale Gros Œuvre',
    description:
      "L'assurance décennale gros œuvre est une assurance obligatoire qui couvre pendant 10 ans les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination.",
    icon: 'build',
    tags: ['Maçonnerie', 'Charpente', 'Couverture', 'Fondations', 'Terrassements'],
    coverages: [
      'Travaux de maçonnerie et béton armé',
      'Construction et réparation de charpentes',
      'Pose et rénovation de couvertures',
      'Fondations et terrassements',
      'Murs porteurs et cloisons',
      'Dallages et planchers',
    ],
    advantages: [
      'Couverture décennale complète',
      'Assistance juridique incluse',
      'Accompagnement sinistre',
      'Devis gratuit en 24h',
    ],
    price: 'À partir de 450€/an',
    coverageAmount: 'Jusqu\'à 1 500 000€',
    categories: ['Les plus consultés', 'Gros œuvre']
  },
];
