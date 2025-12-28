
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Video, 
  Truck, 
  Search, 
  CreditCard, 
  ShieldCheck, 
  PackageCheck,
  Cpu,
  Layers,
  Zap,
  BarChart3,
  PenTool,
  Clapperboard,
  Users,
  Target,
  Rocket,
  Heart,
  Calendar
} from 'lucide-react';
import { ServiceCard, Step, NavItem, TeamMember, Value, Testimonial } from './types';

export const NAV_ITEMS: (NavItem & { ariaLabel: string })[] = [
  { label: 'Accueil', href: '#', ariaLabel: "Retourner en haut de la page d'accueil" },
  { label: 'Services', href: '#services', ariaLabel: "Découvrir nos services digitaux" },
  { label: 'Importation', href: '#import', ariaLabel: "En savoir plus sur la logistique Alibaba" },
  { label: 'Actualités', href: '#blog', ariaLabel: "Lire nos derniers articles" },
  { label: 'À Propos', href: '#about', ariaLabel: "Découvrir l'histoire de GalsenB2B" },
  { label: 'Contact', href: '#contact', ariaLabel: "Nous contacter pour un projet" },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  category: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Fatou Ndiaye',
    role: "CEO de Mode d'Afrique",
    content: "Grâce à l'expertise IA de GalsenB2B, notre service client WhatsApp tourne désormais 24h/24. C'est un gain de temps et de revenus incroyable pour notre boutique !",
    stars: 5,
    avatar: 'https://image2url.com/r2/bucket3/images/1766884308165-38fee2c0-108a-4af7-a86d-55858db69fa3.png'
  },
  {
    name: 'Moussa Sow',
    role: 'Fondateur de TechSénégal',
    content: "L'importation Alibaba n'a jamais été aussi simple avec GalsenB2B. Une transparence totale sur les coûts et des délais toujours respectés. Indispensable pour tout commerçant.",
    stars: 5,
    avatar: 'https://image2url.com/r2/bucket3/images/1766883361084-cc70e2f6-6732-44e2-8559-6a95111f8f0e.jpeg'
  },
  {
    name: 'Aminata Diallo',
    role: 'Gérante de Teranga Market',
    content: "Une agence qui comprend réellement les défis des entrepreneurs locaux. Mon site WordPress conçu par GalsenB2B est rapide, sécurisé et génère des ventes chaque jour.",
    stars: 5,
    avatar: 'https://image2url.com/r2/bucket3/images/1766884507283-2821623a-63b7-4656-95ad-9f8abd6eafd4.png'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Comment l’IA transforme le E-commerce au Sénégal en 2024 : Le Guide de GalsenB2B',
    excerpt: 'Découvrez comment l\'intelligence artificielle métamorphose le paysage du commerce en ligne dakarois, de la gestion de stock à l\'hyper-personnalisation WhatsApp.',
    content: `En 2024, le paysage du commerce en ligne au Sénégal ne se contente plus de croître ; il se métamorphose. Avec l'explosion du Mobile Money (Wave, Orange Money) et une pénétration mobile record, une nouvelle force propulse les entrepreneurs dakarois vers des sommets inédits : l’Intelligence Artificielle (IA).

GalsenB2B vous explique comment l'IA automatise la gestion de vos stocks et devient votre meilleur allié pour booster vos ventes en ligne.

### 🚀 L’essor fulgurant du E-commerce sénégalais en 2024

Le Sénégal s’impose désormais comme le hub numérique incontournable de l’Afrique de l’Ouest. Cette dynamique est portée par quatre piliers majeurs :
1. L'omniprésence du smartphone dans toutes les couches de la population.
2. La révolution du paiement mobile qui sécurise les transactions instantanément.
3. La puissance des réseaux sociaux (Facebook Marketplace, Instagram et surtout WhatsApp Business).
4. Une nouvelle génération d'entrepreneurs digitaux audacieux accompagnés par GalsenB2B.

Pourtant, la croissance apporte ses propres défis : ruptures de stock imprévues, gestion manuelle épuisante et abandons de paniers. C'est ici que l'IA change la donne.

### 📦 L’IA au service d'une gestion de stock "Zéro Faute"

Pour un e-commerçant au Sénégal, une mauvaise gestion de stock peut couler un business. L'IA apporte une précision chirurgicale là où l'humain tâtonne.

**1. Prévision intelligente de la demande (Machine Learning)**
L'IA n'est pas une boule de cristal, mais elle s'en approche. En analysant les données historiques et les cycles culturels locaux, elle anticipe vos besoins :
*   **Pics saisonniers :** Prévoir l'augmentation des ventes de tissus avant la Tabaski ou des produits alimentaires durant le Ramadan.
*   **Analyse des tendances :** Identifier quel produit "buzz" actuellement sur les réseaux sociaux dakarois.

**2. Réapprovisionnement automatique**
Fini les calculs complexes pour vos commandes en Chine ou en Turquie via Alibaba. Les systèmes d'IA de GalsenB2B peuvent :
*   Calculer le seuil de réapprovisionnement optimal.
*   Générer des alertes automatiques pour éviter la rupture de stock, synonyme de perte de clients.

### 📈 Booster vos ventes : Quand l'IA devient votre meilleur vendeur

L'IA ne se contente pas de ranger vos produits ; elle sait comment les vendre.

**🔍 L'hyper-personnalisation de l'expérience client**
Sur un site e-commerce moderne, chaque visiteur voit une boutique différente. L'IA recommande des articles basés sur les goûts spécifiques de l'utilisateur, ce qui augmente mathématiquement le panier moyen et la fidélité.

**💬 Le règne des Chatbots intelligents sur WhatsApp**
Au Sénégal, WhatsApp est le roi du commerce. L'intégration d'IA comme ChatGPT dans vos boucles de vente permet de :
*   Répondre aux questions courantes (prix, tailles, livraison) 24h/24.
*   Prendre des commandes même quand vous dormez.
*   Offrir un service client instantané, essentiel pour gagner la confiance de l'acheteur.

### 🔮 L’avenir : Pourquoi l’IA est une nécessité, pas une option

L'avenir du e-commerce au Sénégal passera par une automatisation quasi totale de la chaîne de valeur. Les entrepreneurs qui adoptent ces technologies aujourd'hui avec GalsenB2B seront les leaders de demain.

**Conclusion**
En 2024, l'intelligence artificielle n'est plus un concept de science-fiction, c'est le moteur de la réussite économique au Sénégal. Que vous soyez un petit vendeur sur Facebook ou une plateforme établie, l'IA est l'outil qui vous permettra de passer à l'échelle supérieure.`,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    date: '18 Mars 2025',
    category: 'Technologie'
  },
  {
    id: '2',
    title: 'Guide Complet 2026 : Importer depuis Alibaba au Sénégal avec GalsenB2B',
    excerpt: 'Maîtrisez l\'importation directe depuis la Chine, réduisez vos coûts de logistique et maximisez vos profits sur le marché sénégalais cette année.',
    content: `Le commerce international ne dort jamais. En 2026, l'importation directe depuis la Chine est devenue le pilier de l'économie numérique au Sénégal. Grâce à la simplification des processus sur Alibaba et à l'émergence de solutions logistiques GalsenB2B, acheter à la source n'est plus un secret bien gardé, mais une nécessité pour rester compétitif.

### 🌍 Pourquoi l'importation Alibaba est incontournable au Sénégal en 2026 ?

Avec l'essor des zones économiques spéciales et la digitalisation totale des services de douane au Sénégal, importer sans intermédiaire via GalsenB2B est devenu plus sûr et plus rentable que jamais. Les avantages stratégiques en 2026 :
*   **Prix Usine "Direct-to-Consumer" :** Éliminez jusqu'à 3 couches d'intermédiaires.
*   **Fiabilité Accrue :** Les systèmes de vérification de GalsenB2B sur place.
*   **Paiements Facilités :** Intégration optimisée des solutions de paiement locales.

### 🧭 Étape par Étape : Le parcours de l'importateur gagnant avec GalsenB2B

**1. Le Filtrage 4.0 des Fournisseurs**
Ne vous contentez plus du logo "Gold Supplier". Regardez :
*   **Trade Assurance :** Incontournable pour protéger votre argent.
*   **Verified Health :** Le score de santé financière et opérationnelle du fournisseur.

**2. Transport et Logistique : Les nouvelles normes vers Dakar**
En 2026, les délais se sont considérablement raccourcis grâce au réseau GalsenB2B :
*   **Fret Aérien Express (4 à 7 jours) :** Idéal pour l'électronique et la mode.
*   **Cargo Maritime - Groupage LCL (25 à 35 jours) :** Recommandé pour les meubles et le vrac.

**Conclusion : Prenez votre part du gâteau**
L'importation depuis Alibaba avec l'accompagnement de GalsenB2B est le raccourci le plus rapide vers l'indépendance financière au Sénégal en 2026.`,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    date: '12 Mars 2025',
    category: 'Logistique'
  },
  {
    id: '3',
    title: 'Pourquoi votre entreprise a besoin d’un site WordPress professionnel GalsenB2B au Sénégal en 2026',
    excerpt: 'À l’ère du numérique, ne pas avoir de présence en ligne structurée est devenu le frein n°1 à la croissance. Découvrez pourquoi WordPress est le moteur de votre succès.',
    content: `À l’ère du numérique, ne pas avoir de présence en ligne structurée est devenu le frein n°1 à la croissance. En 2026, au Sénégal, tout commence par une recherche Google.

Un site WordPress professionnel conçu par GalsenB2B n’est plus un luxe, c’est le cœur de votre stratégie commerciale pour capter la confiance et générer des revenus en continu.

### 🚀 1. Dominer la visibilité sur Google Sénégal (SEO) avec GalsenB2B

WordPress est mondialement reconnu pour sa structure SEO-friendly. En 2026, apparaître dans les premiers résultats de recherche locale est crucial. GalsenB2B optimise votre contenu pour le marché local.

### 🏆 2. Crédibilité et Professionnalisme : L'image de marque

Au Sénégal, la concurrence est rude. Un site web professionnel est le gage de votre sérieux. GalsenB2B construit des vitrines qui rassurent instantanément vos prospects.

### 📱 3. Une expérience Mobile-First irréprochable

Plus de 85% du trafic internet au Sénégal se fait sur mobile. Les sites GalsenB2B sont ultra-rapides et responsives.

**Conclusion**
En 2026, le site web est devenu le siège social numérique de toute entreprise sénégalaise ambitieuse. Investir dans un site WordPress professionnel avec GalsenB2B, c'est garantir la pérennité de votre activité.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    date: '05 Mars 2025',
    category: 'Marketing'
  }
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: '2020',
    title: 'La Genèse',
    description: 'Lancement de GalsenB2B avec une mission unique : simplifier le sourcing sur Alibaba pour les commerçants de Sandaga.'
  },
  {
    year: '2021',
    title: 'Expansion Digitale',
    description: 'Ouverture du pôle Développement Web & Marketing pour offrir une solution de vente en ligne complète.'
  },
  {
    year: '2022',
    title: 'Bureau à Guangzhou',
    description: 'Ouverture de notre propre entrepôt en Chine pour garantir un contrôle qualité rigoureux avant chaque expédition.'
  },
  {
    year: '2023',
    title: 'Intégration de l\'IA',
    description: 'Modernisation de nos services avec l\'automatisation par IA pour nos clients e-commerce.'
  }
];

export const AGENCY_VALUES: Value[] = [
  {
    title: 'Innovation Continue',
    description: 'Nous ne nous contentons pas de suivre les tendances, nous intégrons l\'IA pour transformer vos processus métier.',
    icon: 'rocket'
  },
  {
    title: 'Transparence Totale',
    description: 'De la négociation en Chine à la livraison à Dakar, vous suivez chaque étape et chaque coût sans surprise.',
    icon: 'shield-check'
  },
  {
    title: 'Impact Local',
    description: 'Nous sommes fiers de contribuer à l\'économie sénégalaise en professionnalisant le commerce de proximité.',
    icon: 'heart'
  },
  {
    title: 'Excellence Client',
    description: 'Votre succès est notre seule métrique de performance. Nous vous accompagnons comme des partenaires, pas des prestataires.',
    icon: 'target'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ousmane Diatta',
    role: 'Fondateur & CEO',
    bio: 'Architecte stratégique chez GalsenB2B avec une vision claire pour la digitalisation du commerce sénégalais.',
    image: 'https://image2url.com/r2/bucket2/images/1766832938619-08b5e5fc-e5dc-47c9-9356-53a3712f5c4a.png'
  },
  {
    name: 'Khoudia Cissé',
    role: 'Directrice des Opérations',
    bio: 'Maîtresse d\'œuvre de notre chaîne logistique. Elle assure la liaison parfaite entre nos équipes de Guangzhou et Dakar.',
    image: 'https://image2url.com/r2/bucket2/images/1766833657068-57441e10-cc52-4808-99b5-dc2e415a5042.png'
  },
  {
    name: 'Moustapha Ndiaye',
    role: 'Chief Technology Officer',
    bio: 'Passionné par l\'IA et le développement WordPress. Il conçoit les écosystèmes digitaux intelligents de GalsenB2B.',
    image: 'https://image2url.com/r2/bucket2/images/1766835828597-f1414a89-f24d-453d-88e8-cfab62073d4d.png'
  }
];

export const DIGITAL_SERVICES: ServiceCard[] = [
  {
    id: 'web',
    title: 'Développement Web & IA',
    description: 'Conception de sites WordPress ultra-performants intégrant des fonctionnalités IA pour automatiser vos processus.',
    benefit: 'Gagnez en productivité et offrez une expérience utilisateur intelligente.',
    icon: 'globe',
    longDescription: 'GalsenB2B ne crée pas seulement des sites web, nous construisons des écosystèmes digitaux intelligents. En utilisant WordPress couplé à l\'IA, nous automatisons votre service client et votre création de contenu.',
    features: [
      { title: 'Intégration Chatbots IA', description: 'Assistance client 24/7 capable de répondre précisément aux questions de vos prospects.' },
      { title: 'SEO Automatisé', description: 'Optimisation sémantique en temps réel pour dominer les résultats Google au Sénégal.' },
      { title: 'Sites E-commerce Pro', description: 'Plateformes de vente robustes avec systèmes de paiement locaux (Wave, Orange Money).' }
    ],
    processSteps: ['Analyse des besoins', 'Maquettage UX/UI', 'Développement & Intégration IA', 'Tests & Mise en ligne'],
    tools: ['WordPress', 'React', 'OpenAI API', 'Tailwind CSS']
  },
  {
    id: 'mobile',
    title: 'Applications Mobiles',
    description: 'Développement d\'applications iOS et Android intuitives pour rester connecté à vos clients en tout temps.',
    benefit: 'Fidélisez votre audience avec une présence mobile native et fluide.',
    icon: 'smartphone',
    longDescription: 'Le futur du business au Sénégal est mobile. GalsenB2B développe des applications performantes qui fonctionnent parfaitement même avec des connexions limitées.',
    features: [
      { title: 'Apps Hybrides (Flutter)', description: 'Une seule base de code pour iOS et Android, réduisant vos coûts de moitié.' },
      { title: 'Mode Hors-ligne', description: 'Permettez à vos utilisateurs d\'accéder à l\'essentiel sans connexion internet.' },
      { title: 'Notifications Push', description: 'Informez instantanément vos clients de vos promotions ou nouveautés.' }
    ],
    processSteps: ['Architecture logicielle', "Design d'interface", 'Développement Agile', 'Publication Stores'],
    tools: ['Flutter', 'React Native', 'Firebase', 'Node.js']
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    description: 'Stratégies publicitaires ciblées (Meta, Google) pour maximiser votre visibilité et vos conversions.',
    benefit: 'Transformez vos prospects en clients récurrents avec un ROI mesurable.',
    icon: 'megaphone',
    longDescription: 'Oubliez les publicités inutiles. GalsenB2B cible précisément les décideurs et acheteurs au Sénégal pour garantir que chaque franc investi vous rapporte des leads qualifiés.',
    features: [
      { title: 'Ads Management', description: 'Campagnes Facebook, Instagram et Google Ads optimisées quotidiennement.' },
      { title: 'Community Management', description: 'Animation de vos réseaux sociaux pour créer une véritable tribu autour de votre marque.' },
      { title: 'Email/WhatsApp Marketing', description: 'Automatisation de vos relances clients via les canaux les plus consultés.' }
    ],
    processSteps: ['Audit digital', 'Définition d\'audience', 'Lancement de campagnes', 'Rapport de performances mensuel'],
    tools: ['Meta Business Suite', 'Google Ads', 'Canva Pro', 'Brevo']
  },
  {
    id: 'design',
    title: 'Design Graphique',
    description: 'Identités visuelles fortes : logos, affiches et flyers qui captent l\'attention dès le premier regard.',
    benefit: 'Démarquez-vous de la concurrence avec une image de marque professionnelle.',
    icon: 'palette',
    longDescription: 'Votre image est votre première promesse. GalsenB2B crée des univers graphiques qui inspirent la confiance et l\'excellence, adaptés à la culture sénégalaise.',
    features: [
      { title: 'Branding Complet', description: 'Logo, charte graphique et guide de style pour une cohérence totale.' },
      { title: 'Print Marketing', description: 'Design de flyers, kakémonos et brochures haute définition pour vos événements.' },
      { title: 'Social Media Kit', description: 'Templates personnalisés pour vos posts quotidiens sur les réseaux sociaux.' }
    ],
    processSteps: ['Brief créatif', 'Recherche iconographique', 'Propositions de concepts', 'Finalisation des fichiers source'],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma']
  },
  {
    id: 'video',
    title: 'Montage Vidéo',
    description: 'Contenus vidéo dynamiques pour vos réseaux sociaux et vos présentations d\'entreprise.',
    benefit: 'Engagez votre communauté avec des visuels percutants et modernes.',
    icon: 'video',
    longDescription: 'La vidéo est le format n°1 pour convertir. GalsenB2B transforme vos idées en films captivants : publicités TikTok/Reels, interviews ou reportages institutionnels.',
    features: [
      { title: 'Short Content (Reels/TikTok)', description: 'Vidéos verticales rythmées avec sous-titres dynamiques pour exploser vos vues.' },
      { title: 'Motion Design', description: 'Animation de textes et graphismes pour expliquer des concepts complexes simplement.' },
      { title: 'Correction Colorimétrique', description: 'Rendu cinématographique professionnel pour toutes vos productions.' }
    ],
    processSteps: ['Scénarisation', 'Dérushage', 'Montage & Effets', 'Mixage audio & Export'],
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro']
  },
  {
    id: 'logistics',
    title: 'Service Logistique Alibaba',
    description: 'Assistance achat Alibaba et importation sécurisée vers le Sénégal par Air et Mer.',
    benefit: 'Importez en toute sécurité sans vous soucier de la douane ou des fraudes.',
    icon: 'truck',
    longDescription: 'GalsenB2B est le pont direct entre les usines chinoises et votre boutique à Dakar. Nous gérons tout jusqu\'à la livraison finale.',
    features: [
      { title: 'Bureau à Guangzhou', description: 'Présence physique pour inspecter vos marchandises avant le départ.' },
      { title: 'Groupage Maritime', description: 'Payez seulement l\'espace que vous utilisez (CBM) pour vos gros colis.' },
      { title: 'Fret Aérien Express', description: 'Réception de vos colis à Dakar en 7 à 10 jours seulement.' }
    ],
    processSteps: ['Envoi des liens produits', 'Négociation & Paiement', 'Réception entrepôt Chine', 'Livraison Dakar'],
    tools: ['Alibaba Assistance', 'Track & Trace', 'Customs Support']
  }
];

export const LOGISTICS_STEPS: Step[] = [
  {
    number: 1,
    title: 'Sourcing & Assistance',
    description: 'Nous vous aidons à trouver les meilleurs fournisseurs sur Alibaba et négocions pour vous.'
  },
  {
    number: 2,
    title: 'Paiement Sécurisé',
    description: 'Réglez vos commandes en toute confiance via nos canaux sécurisés GalsenB2B.'
  },
  {
    number: 3,
    title: 'Contrôle Qualité',
    description: 'Réception de vos colis dans notre entrepôt en Chine pour vérification avant expédition.'
  },
  {
    number: 4,
    title: 'Livraison au Sénégal',
    description: 'Expédition par air ou mer et gestion complète du dédouanement jusqu\'à Dakar.'
  }
];

export const getIcon = (name: string, className?: string) => {
  const props = { className: className || "w-6 h-6" };
  switch (name) {
    case 'globe': return <Globe {...props} />;
    case 'smartphone': return <Smartphone {...props} />;
    case 'megaphone': return <Megaphone {...props} />;
    case 'palette': return <Palette {...props} />;
    case 'video': return <Video {...props} />;
    case 'truck': return <Truck {...props} />;
    case 'search': return <Search {...props} />;
    case 'credit-card': return <CreditCard {...props} />;
    case 'shield-check': return <ShieldCheck {...props} />;
    case 'package-check': return <PackageCheck {...props} />;
    case 'cpu': return <Cpu {...props} />;
    case 'layers': return <Layers {...props} />;
    case 'zap': return <Zap {...props} />;
    case 'bar-chart': return <BarChart3 {...props} />;
    case 'pen-tool': return <PenTool {...props} />;
    case 'clapperboard': return <Clapperboard {...props} />;
    case 'users': return <Users {...props} />;
    case 'target': return <Target {...props} />;
    case 'rocket': return <Rocket {...props} />;
    case 'heart': return <Heart {...props} />;
    case 'calendar': return <Calendar {...props} />;
    default: return <Globe {...props} />;
  }
};
