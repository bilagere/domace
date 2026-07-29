import type { ArticlePreview } from "../types/content";
import focaccia from "../assets/images/focaccia.png";
import hugoEistee from "../assets/images/geniessen-hugo-eistee.png";
import zimtschnecken from "../assets/images/geniessen-zimtschnecken.png";
import familyLife from "../assets/images/entspanntes-familienleben.png";
import organize from "../assets/images/organize.png";
import together from "../assets/images/together.png";

const recipes = {
  focaccia: {
    title: "Focaccia",
    excerpt: "Außen knusprig, innen luftig – ein unkompliziertes Brot für den Familientisch.",
    category: "Brot & Gebäck",
    image: focaccia,
    href: "/geniessen/focaccia",
  },
  hugoEistee: {
    title: "Hugo-Eistee",
    excerpt: "Eine alkoholfreie Erfrischung mit Holunderblüte, Limette und Minze.",
    category: "Spaßgetränk",
    image: hugoEistee,
    href: "/geniessen/hugo-eistee",
  },
  zimtschnecken: {
    title: "Zimtschnecken",
    excerpt: "Weiche Zimtschnecken für Kaffeepause, Besuch und gemütliche Nachmittage.",
    category: "Brot & Gebäck",
    image: zimtschnecken,
    href: "/geniessen/zimtschnecken",
  },
} satisfies Record<string, ArticlePreview>;

const articles = {
  familienessen: {
    title: "Familienessen entspannt planen",
    excerpt: "Ein einfacher Rhythmus, der Entscheidungen erleichtert und alle öfter an einen Tisch bringt.",
    category: "Artikel · Ordnen",
    image: organize,
    href: "/ordnen/familienessen-entspannt-planen",
  },
  kaffeepause: {
    title: "Die Kaffeepause als kleines Ritual",
    excerpt: "Warum ein kurzer gemeinsamer Moment manchmal mehr verändert als ein perfekter Tagesplan.",
    category: "Artikel · Zusammen",
    image: familyLife,
    href: "/zusammen/kaffeepause-als-ritual",
  },
  gastfreundschaft: {
    title: "Gastfreundschaft ohne Perfektionsdruck",
    excerpt: "Wie Besuch leicht und herzlich wird, ohne dass vorher das ganze Zuhause glänzen muss.",
    category: "Artikel · Zusammen",
    image: together,
    href: "/zusammen/gastfreundschaft-ohne-perfektionsdruck",
  },
} satisfies Record<string, ArticlePreview>;

export const relatedContent = {
  focaccia: [recipes.hugoEistee, articles.gastfreundschaft, articles.familienessen],
  zimtschnecken: [recipes.hugoEistee, articles.kaffeepause, articles.gastfreundschaft],
  boeufStroganoff: [recipes.focaccia, articles.familienessen, articles.gastfreundschaft],
  hugoEistee: [recipes.zimtschnecken, recipes.focaccia, articles.gastfreundschaft],
} satisfies Record<string, ArticlePreview[]>;
