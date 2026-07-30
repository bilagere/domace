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
    href: "/genuss/focaccia",
  },
  hugoEistee: {
    title: "Hugo-Eistee",
    excerpt: "Eine alkoholfreie Erfrischung mit Holunderblüte, Limette und Minze.",
    category: "Spaßgetränk",
    image: hugoEistee,
    href: "/genuss/hugo-eistee",
  },
  zimtschnecken: {
    title: "Zimtschnecken",
    excerpt: "Weiche Zimtschnecken für Kaffeepause, Besuch und gemütliche Nachmittage.",
    category: "Brot & Gebäck",
    image: zimtschnecken,
    href: "/genuss/zimtschnecken",
  },
  boeufStroganoff: {
    title: "Boeuf Stroganoff",
    excerpt: "Zartes Rindfleisch in cremiger Sauce – ein wärmendes Familiengericht für besondere Alltagstage.",
    category: "Familienküche",
    href: "/genuss/boeuf-stroganoff",
    duration: "45 Min.",
    servings: "4 Portionen",
  },
} satisfies Record<string, ArticlePreview>;

const journalArticle = {
  title: "10 Dinge für einen ruhigeren Familienalltag",
  excerpt: "Kleine Routinen, die den Familienalltag spürbar leichter machen.",
  category: "Artikel · Ordnen",
  image: familyLife,
  href: "/ordnen/familienleben-ruhiger",
} satisfies ArticlePreview;

export const latestContent = [
  recipes.focaccia,
  recipes.zimtschnecken,
  recipes.boeufStroganoff,
  recipes.hugoEistee,
] satisfies ArticlePreview[];

export const relatedContent = {
  focaccia: [recipes.zimtschnecken, recipes.boeufStroganoff, recipes.hugoEistee, journalArticle],
  zimtschnecken: [recipes.focaccia, recipes.boeufStroganoff, recipes.hugoEistee, journalArticle],
  boeufStroganoff: [recipes.focaccia, recipes.zimtschnecken, recipes.hugoEistee, journalArticle],
  hugoEistee: [recipes.focaccia, recipes.zimtschnecken, recipes.boeufStroganoff, journalArticle],
} satisfies Record<string, ArticlePreview[]>;
