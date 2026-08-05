import type { ArticlePreview } from "../types/content";
import focaccia from "../assets/images/genuss/focaccia-titel.jpg";
import hugoEistee from "../assets/images/genuss/eistee-titel.png";
import zimtschnecken from "../assets/images/genuss/zimtschnecken-titel.png";
import stroganoffTitle from "../assets/images/genuss/stroganoff-titel.png";
import quieterFamilyLife from "../assets/images/journal/leiser-leichter/leiser-lauter-titel.png";



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
    image: stroganoffTitle,
    href: "/genuss/boeuf-stroganoff",
  },
} satisfies Record<string, ArticlePreview>;

const journalArticle = {
  title: "Nicht leiser, aber leichter.",
  excerpt: "Sieben Gewohnheiten, die den Familienalltag spürbar ruhiger machen.",
  category: "Artikel · Zusammen",
  image: quieterFamilyLife,
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
