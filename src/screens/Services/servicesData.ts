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
    "id": "gros-oeuvre",
    "title": "Assurance Décennale Gros Œuvre",
    "description": "Le contrat d’Assurance Décennale Bâtiment Gros Œuvre est obligatoire pour les travaux relatifs au gros œuvre : il couvre la solidité de l’ouvrage pendant 10 ans après réception des travaux.",  
    "icon": "build",
    "tags": [ /* non listés explicitement sur le site, tags suggérés */ "Maçonnerie", "Charpente", "Couverture", "Fondations", "Terrassement" ],
    "coverages": [ /* basé sur définition du gros œuvre */ 
      "Éléments porteurs (murs porteurs, ossature)",
      "Clos et couvert (charpente, couverture, étanchéité)",
      "Fondations et terrains (terrassements)",
      "Dallage et planchers",
      "Soubassement et murs porteurs"
    ],
    "advantages": [
      /* infos générales – le site évoque devis en ligne rapide, accompagnement */
      "Devis en ligne en 24 h",
      "Accompagnement personnalisé",
      "Couverture décennale obligatoire",
      "Accès plateforme de gestion"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Gros Oeuvre", "Les plus consultés"]
  },
  {
    "id": "dommage-ouvrage",
    "title": "Assurance Dommages Ouvrage",
    "description": "L’Assurance Dommages Ouvrage prend en charge tous les travaux de réparation des dommages affectant la solidité d’un ouvrage ou le rendant impropre à sa destination, pendant 10 ans après réception des travaux.",
    "icon": "brick",
    "tags": ["Préfinancement", "Propriétaire", "Obligatoire", "Sinistre rapide"],
    "coverages": [
      "Travaux de réparation des dommages relevant de la garantie décennale",
      "Solidité de l’ouvrage",
      "Impraticabilité ou impropriété à destination",
      "Équipements indissociables (canalisations encastrées, etc.)"
    ],
    "advantages": [
      "Préfinancement rapide des réparations sans recherche de responsabilité",
      "Couverture dès la réception de l’ouvrage",
      "Transmission aux propriétaires successifs"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Dommage Ouvrage"]
  },
  {
    "id": "ossature-bois",
    "title": "Assurance Décennale Maison Ossature Bois",
    "description": "L’assurance décennale pour constructeur de maison à ossature bois couvre pendant 10 ans les dommages compromettant la solidité de l’ouvrage ou le rendant impropre à sa destination, applicables aux constructions à structure bois.",
    "icon": "carpenter",
    "tags": ["Construction bois", "Solidité", "Responsabilité décennale", "Obligatoire"],
    "coverages": [
      "Structure bois (parois, ossature, bardage)",
      "Fondations et charpente bois indissociables",
      "Effondrement ou affaissement de la structure",
      "Infiltrations liées à l’isolation ou étanchéité bois",
      "Équipements techniques indissociables au bâti"
    ],
    "advantages": [
      "Spécialisation pour les professionnels bois",
      "Devis en ligne rapide",
      "Accompagnement dans la souscription",
      "Couverture valable dès réception des travaux"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Maison Ossature Bois"]
  },
  {
    "id": "etancheur-pisciniste",
    "title": "Assurance Décennale Étancheur & Pisciniste",
    "description": "Assurance décennale spécialisée couvrant les travaux d’étanchéité toiture/terrasse et de réalisation ou rénovation de piscines, garantissant les dommages compromettant la solidité ou l’utilisation pendant 10 ans.",
    "icon": "waves",
    "tags": ["Étanchéité", "Piscine", "Obligatoire", "Professionnels spécialisés"],
    "coverages": [
      "Travaux d’étanchéité toitures ou terrasses",
      "Construction ou rénovation de piscines",
      "Fissures, infiltrations et défauts d’étanchéité",
      "Défaillance structurelle ou impropriété à l’usage"
    ],
    "advantages": [
      "Devis en ligne spécialisé",
      "Couverture technique adaptée aux piscinistes et étancheurs",
      "Expertise courtier pour risques complexes",
      "Accompagnement jusqu’en cas de sinistre"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Étanchéité & Piscine"]
  },
  {
    "id": "jamais-assure",
    "title": "Assurance Décennale Jamais Assuré",
    "description": "Solution d’assurance décennale destinée aux professionnels du bâtiment n’ayant jamais été assurés, afin de répondre à l’obligation légale même en l’absence d’antécédents d’assurance.",
    "icon": "cancel",
    "tags": ["Nouvelle entreprise", "Sans antécédents", "Obligatoire", "Devis gratuit"],
    "coverages": [
      "Responsabilité civile décennale obligatoire",
      "Couverture même sans historique d’assurance",
      "Garanties adaptées à un profil sans antécédents"
    ],
    "advantages": [
      "Comparateur d’offres permis aux profils ‘jamais assuré’",
      "Large choix de garanties adaptées",
      "Dévis gratuit en ligne",
      "Réponse offerte en 24h"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Jamais Assuré"]
  },
  {
    "id": "refus-compagnie",
    "title": "Assurance Décennale Refus Compagnie",
    "description": "Solution décennale dédiée aux professionnels du bâtiment refusés par une ou plusieurs compagnies d’assurance (absence d’antécédents, sinistralité élevée, coût travaux, etc.), avec garantie trouvée dans tous les cas.",
    "icon": "cancel",
    "tags": ["Profil à risque", "Refus assureur", "Obligatoire", "Devis gratuit"],
    "coverages": [
      "Responsabilité civile décennale obligatoire",
      "Couverture malgré les refus des assureurs classiques",
      "Adaptée aux profils à risque ou sinistres fréquents"
    ],
    "advantages": [
      "Solution assurantielle trouvée 100 % des cas",
      "Devis gratuit en ligne",
      "Accompagnement spécifique pour casse‑tête assurantiel",
      "Accès à un comparateur de partenariats spécialisés"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Refus Compagnies"]
  },
  {
    "id": "redressement-judiciaire",
    "title": "Assurance Décennale en Cas de Redressement Judiciaire",
    "description": "Solution d’assurance décennale spécialement étudiée pour les constructeurs et artisans en redressement judiciaire, permettant de maintenir l’activité malgré les difficultés financières.",
    "icon": "gavel",
    "tags": ["Redressement judiciaire", "Entreprises en difficulté", "Obligatoire", "Devis gratuit"],
    "coverages": [
      "Responsabilité civile décennale obligatoire",
      "Couverture malgré la procédure collective",
      "Continuité des garanties pendant la restructuration"
    ],
    "advantages": [
      "Devis en ligne même en redressement judiciaire",
      "Accès à une garantie décennale malgré situation fragile",
      "Accompagnement dédié pour dossiers complexes",
      "Solution assurantielle maintenue en phase collective"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Redressement Judiciaire"]
  },
  {
    "id": "resilie-non-paiement",
    "title": "Assurance Décennale Résilié Non‑Paiement",
    "description": "Assurance décennale permettant aux professionnels du bâtiment de retrouver une couverture même après une résiliation de contrat pour non‑paiement de la prime.",
    "icon": "money_off",
    "tags": ["Non‑paiement", "Résilié", "Obligatoire", "Devis gratuit"],
    "coverages": [
      "Responsabilité civile décennale obligatoire",
      "Couverture malgré résiliation pour non‑paiement",
      "Adaptée aux profils financièrement sensibles"
    ],
    "advantages": [
      "Devis en ligne accessible même après résiliation",
      "Solutions via partenaires acceptant ce profil",
      "Accompagnement dédié pour retrouver une assurance décennale"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Résilié Non-Paiement"]
  },
  {
    "id": "entreprises-etrangeres",
    "title": "Assurance Décennale Entreprises Étrangères",
    "description": "L’assurance décennale est obligatoire en France pour toute entreprise intervenant sur le territoire, y compris les entreprises étrangères, qu’elles disposent ou non d’un numéro de SIRET.",
    "icon": "globe",
    "tags": ["Entreprise étrangère", "Obligatoire", "Sans SIRET", "Devis gratuit"],
    "coverages": [
      "Responsabilité civile décennale obligatoire en France",
      "Couverture pour les entreprises sans immatriculation française",
      "Applicable à tous travaux de construction ou rénovation"
    ],
    "advantages": [
      "Solution assurantielle disponible 100 % des cas",
      "Devis en ligne accessible même sans SIRET",
      "Permet d’intervenir légalement en France"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Entreprises Étrangères"]
  },
  {
    "id": "professions-intellectuelles",
    "title": "Assurance Décennale Professions Intellectuelles du Bâtiment",
    "description": "Assurance décennale obligatoire pour les professions intellectuelles du bâtiment (architectes, maîtres d’œuvre, bureaux d’études, économistes, etc.) dont l’activité peut compromettre la solidité ou la destination d’un ouvrage.",
    "icon": "cognition",
    "tags": ["Architecte", "Maîtrise d’œuvre", "Bureau d’études", "Obligatoire", "Responsabilité professionnelle"],
    "coverages": [
      "Erreurs ou omissions compromettant la solidité ou l’usage du bâtiment",
      "Coordination défaillante du chantier",
      "Conseils incorrects conduisant à sinistre",
      "Dommages affectant la destination ou la structure d’un ouvrage"
    ],
    "advantages": [
      "Devis en ligne avec réponse sous 24 h",
      "Tarifs compétitifs pour professionnels intellectuels",
      "Couverture RC pro et décennale adaptée à votre métier",
      "Accompagnement courtier personnalisé"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Professions Intellectuelles"]
  },
  {
    "id": "photovoltaique",
    "title": "Assurance Décennale & RC Pro Photovoltaïque",
    "description": "Assurance dédiée aux professionnels du photovoltaïque (installateurs, bureaux d’études, mainteneurs, fabricants), incluant contrats décennale, RC pro, Tous Risques Chantier, transport et dommages matériel.",
    "icon": "solar_power",
    "tags": ["Photovoltaïque", "Installateurs", "Bureaux d’études", "Obligatoire", "Devis en ligne"],
    "coverages": [
      "Assurance décennale (RCD) bâtiment / génie civil",
      "Responsabilité Civile Professionnelle (RC/ RCP)",
      "Tous Risques Chantier Montage‑Essais (TRCME)",
      "Dommages aux matériels en entreprise",
      "Garanties transport des équipements photovoltaïques"
    ],
    "advantages": [
      "Solution complète pour tous les acteurs du photovoltaïque",
      "Devis en ligne disponible",
      "Couverture construite selon activité (développeurs, installateurs, fabricants)",
      "Assistance courtier spécialisée"
    ],
    "price": "",
    "coverageAmount": "",
    "categories": ["Les plus consultés", "Photovoltaïque"]
  }



];
