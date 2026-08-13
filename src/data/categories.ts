import type { ImageMetadata } from "astro";
import type { ArticlePreview } from "../types/content";
import arrive from "../assets/images/ankommen_homepage.png";
import celebrate from "../assets/images/celebrate.png";
import quieterFamilyLife from "../assets/images/journal/leiser-leichter/leiser-lauter-titel.png";
import kitchenFavorites from "../assets/images/journal/kuechenlieblinge/mara-kocht.png";
import sourdoughBread from "../assets/images/journal/brot-backen/sauerteig-titel.png";
import organize from "../assets/images/organize.png";
import together from "../assets/images/together.png";
import table from "../assets/images/tisch-am-fenster.png";

type FeatureIcon = "heart" | "leaf" | "mail" | "users";

export type CategoryPageData = {
  path: `/${string}`;
  title: string;
  pageTitle: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: ImageMetadata;
  heroAlt: string;
  intro: string;
  features: Array<{
    icon: FeatureIcon;
    title: string;
    description: string;
  }>;
  articles: ArticlePreview[];
  quote: string;
  quoteImage: ImageMetadata;
  quoteAlt: string;
};

export const categories = {
  ordnen: {
    path: "/ordnen",
    title: "Ordnen",
    pageTitle: "Ordnen – Domaće",
    description: "Routinen, Pläne und einfache Systeme für einen leichteren Familienalltag.",
    eyebrow: "Für einen Alltag, der leichter wird",
    heroTitle: "Weniger im Kopf.\nMehr Raum fürs Leben.",
    heroDescription: "Einfache Pläne, Routinen und Systeme, die Entscheidungen abnehmen, ohne den Familienalltag starr zu machen.",
    heroImage: organize,
    heroAlt: "Heller Arbeitsplatz mit Wochenplan und Körben",
    intro: "Ordnung bedeutet für uns nicht, dass immer alles an seinem Platz liegt. Sie bedeutet, dass die wichtigen Dinge einen verlässlichen Rahmen haben – und wir dadurch mehr Ruhe füreinander finden.",
    features: [
      { icon: "leaf", title: "Routinen", description: "Kleine Abläufe, die durch den Tag tragen." },
      { icon: "users", title: "Familienplanung", description: "Übersicht, die alle mitnehmen kann." },
      { icon: "heart", title: "Weniger Druck", description: "Systeme, die dienen statt bestimmen." },
    ],
    articles: [],
    quote: "Weniger Entscheidungen treffen. Mehr Zeit füreinander haben.",
    quoteImage: organize,
    quoteAlt: "Wochenplanung in ruhiger, warmer Atmosphäre",
  },
  ankommen: {
    path: "/ankommen",
    title: "Ankommen",
    pageTitle: "Ankommen – Domaće",
    description: "Ideen für ein warmes Zuhause, natürliche Materialien und Räume, die gut tun.",
    eyebrow: "Für ein Zuhause, das gut tut",
    heroTitle: "Ein Zuhause,\ndas uns auffängt.",
    heroDescription: "Ruhige Räume, kleine Projekte und natürliche Ideen für ein Zuhause, das nicht beeindrucken muss, sondern Geborgenheit schenkt.",
    heroImage: arrive,
    heroAlt: "Helles Zuhause mit natürlichen Materialien und Pflanzen",
    intro: "Zuhause ist für uns weniger ein Stil als ein Gefühl. Es entsteht durch vertraute Dinge, ehrliche Materialien und Räume, in denen das Familienleben wirklich stattfinden darf.",
    features: [
      { icon: "leaf", title: "Natürlich wohnen", description: "Warme Materialien und ruhige Farben." },
      { icon: "heart", title: "Geborgenheit", description: "Räume, die Nähe und Rückzug erlauben." },
      { icon: "users", title: "Familienräume", description: "Schön und alltagstauglich zugleich." },
    ],
    articles: [
      {
        title: "Unser täglich Brot",
        excerpt: "Warum Sauerteig viel unkomplizierter ist, als das Internet dich glauben lässt – und wie Brotbacken entspannt in den Familienalltag passt.",
        category: "Ankommen",
        image: sourdoughBread,
        href: "/ankommen/unser-taeglich-brot",
        date: "11. August 2026",
      },
      {
        title: "Meine Küchenlieblinge",
        excerpt: "Sieben langlebige Küchenhelfer, die sich bei uns über Jahre im echten Familienalltag bewährt haben.",
        category: "Ankommen",
        image: kitchenFavorites,
        href: "/ordnen/kuechenutensilien",
        date: "9. August 2026",
      },
    ],
    quote: "Zuhause ist kein Ort, der fertig wird. Es wächst mit den Menschen, die darin leben.",
    quoteImage: arrive,
    quoteAlt: "Helles, warm eingerichtetes Zuhause",
  },
  zusammen: {
    path: "/zusammen",
    title: "Zusammen",
    pageTitle: "Zusammen – Domaće",
    description: "Gedanken über Familie, Beziehungen und die kleinen Momente, die verbinden.",
    eyebrow: "Für Beziehungen, die tragen",
    heroTitle: "Nähe wächst\nim echten Alltag.",
    heroDescription: "Ehrliche Gedanken über Familie, Partnerschaft und Freundschaft – und über die kleinen Momente, in denen Verbundenheit entsteht.",
    heroImage: together,
    heroAlt: "Mutter und Kind gehen gemeinsam durch einen Wald",
    intro: "Verbundenheit zeigt sich selten in großen Gesten. Meist wächst sie in wiederkehrenden Gesprächen, gemeinsam verbrachter Zeit und dem Gefühl, auch an unperfekten Tagen gesehen zu werden.",
    features: [
      { icon: "users", title: "Familienleben", description: "Ehrliche Einblicke ohne Perfektionsdruck." },
      { icon: "heart", title: "Beziehungen", description: "Kleine Gesten, die Nähe entstehen lassen." },
      { icon: "mail", title: "Gespräche", description: "Gedanken, die wir miteinander teilen." },
    ],
    articles: [
      {
        title: "Nicht leiser, aber leichter.",
        excerpt: "Sieben Gewohnheiten, die Druck herausnehmen und unserem Familienalltag mehr Ruhe und einen verlässlichen Rhythmus geben.",
        category: "Zusammen",
        image: quieterFamilyLife,
        href: "/ordnen/familienleben-ruhiger",
        date: "5. August 2026",
      },
    ],
    quote: "Am Ende erinnern wir uns nicht an perfekte Tage, sondern daran, wie wir uns miteinander gefühlt haben.",
    quoteImage: together,
    quoteAlt: "Familie unterwegs in ruhiger Natur",
  },
  feiern: {
    path: "/feiern",
    title: "Feiern",
    pageTitle: "Feiern – Domaće",
    description: "Feste, Jahreszeiten und Rituale für Erinnerungen, die bleiben.",
    eyebrow: "Für Erinnerungen, die bleiben",
    heroTitle: "Das Leben feiern.\nGanz ohne großes Müssen.",
    heroDescription: "Saisonale Ideen, vertraute Rituale und unkomplizierte Feste, bei denen die Menschen wichtiger bleiben als die Dekoration.",
    heroImage: celebrate,
    heroAlt: "Festlich gedeckter Tisch in warmem Licht",
    intro: "Feiern darf leicht sein. Ein vertrautes Rezept, Kerzen auf dem Tisch und Menschen, die gern zusammenkommen, reichen oft aus, damit aus einem gewöhnlichen Tag eine Erinnerung wird.",
    features: [
      { icon: "heart", title: "Familienfeste", description: "Persönlich, herzlich und unkompliziert." },
      { icon: "leaf", title: "Jahreszeiten", description: "Rituale, die durch das Jahr begleiten." },
      { icon: "users", title: "Gastfreundschaft", description: "Ideen, bei denen alle entspannen dürfen." },
    ],
    articles: [],
    quote: "Die schönsten Feste beginnen lange vor dem ersten Gast.",
    quoteImage: celebrate,
    quoteAlt: "Festliche Details in warmen Naturtönen",
  },
} satisfies Record<string, CategoryPageData>;
