import type { ArticlePreview } from "../types/content";
import focaccia from "../assets/images/focaccia.png";
import hugoEistee from "../assets/images/geniessen-hugo-eistee.png";
import zimtschnecken from "../assets/images/geniessen-zimtschnecken.png";
import familyLife from "../assets/images/entspanntes-familienleben.png";



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

const journalArticle = {
  title: "10 Dinge für einen ruhigeren Familienalltag",
  excerpt: "Kleine Routinen, die den Familienalltag spürbar leichter machen.",
  category: "Artikel · Ordnen",
  image: familyLife,
  href: "/ordnen/familienleben-ruhiger",
} satisfies ArticlePreview;

export const relatedContent = {
  focaccia: [recipes.hugoEistee, recipes.zimtschnecken, journalArticle],
  zimtschnecken: [recipes.hugoEistee, recipes.focaccia, journalArticle],
  boeufStroganoff: [recipes.focaccia, recipes.zimtschnecken, journalArticle],
  hugoEistee: [recipes.zimtschnecken, recipes.focaccia, journalArticle],
} satisfies Record<string, ArticlePreview[]>;
