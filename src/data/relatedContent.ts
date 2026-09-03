import type { ArticlePreview } from "../types/content";

type PublishedContent = ArticlePreview & { publishedAt: string };
import focaccia from "../assets/images/genuss/focaccia-titel.jpg";
import hugoEistee from "../assets/images/genuss/eistee-titel.png";
import zimtschnecken from "../assets/images/genuss/zimtschnecken-titel.png";
import stroganoffTitle from "../assets/images/genuss/stroganoff-titel.png";
import plumStreuselCake from "../assets/images/genuss/zwetschgen-streusel-kuchen.png";
import quieterFamilyLife from "../assets/images/journal/leiser-leichter/leiser-lauter-titel.png";
import kitchenFavorites from "../assets/images/journal/kuechenlieblinge/mara-kocht.png";
import sourdoughBread from "../assets/images/journal/brot-backen/sauerteig-titel.png";



export const recipes = {
  focaccia: {
    title: "Sourdough focaccia",
    excerpt: "A crisp golden crust, a soft, airy middle, and every reason to gather around the table.",
    category: "Baking",
    image: focaccia,
    href: "/kitchen/sourdough-focaccia",
    publishedAt: "2026-07-30",
  },
  hugoEistee: {
    title: "Elderflower & mint iced tea",
    excerpt: "Inspired by Hugo: elderflower, lime and mint in a refreshing iced tea, without the alcohol.",
    category: "Drinks",
    image: hugoEistee,
    href: "/kitchen/elderflower-mint-iced-tea",
    publishedAt: "2026-07-30",
  },
  zimtschnecken: {
    title: "Soft cinnamon rolls",
    excerpt: "Soft spirals of cinnamon, made for slow afternoons, a fresh cup of coffee and someone to share them with.",
    category: "Baking",
    image: zimtschnecken,
    href: "/kitchen/sourdough-cinnamon-rolls",
    publishedAt: "2026-07-30",
  },
  boeufStroganoff: {
    title: "Beef stroganoff",
    excerpt: "Tender beef in a rich, creamy sauce. A comforting family meal that makes an ordinary evening feel special.",
    category: "Cooking",
    image: stroganoffTitle,
    href: "/kitchen/beef-stroganoff",
    publishedAt: "2026-07-30",
  },
  plumStreuselCake: {
    title: "Plum streusel cake",
    excerpt: "A soft base, plenty of Zwetschgen and buttery streusel — in the smaller, round version we make at home.",
    category: "Baking",
    image: plumStreuselCake,
    href: "/kitchen/plum-streusel-cake",
    publishedAt: "2026-09-02",
  },
} satisfies Record<string, PublishedContent>;

const journalArticle = {
  title: "Gentler Family Life",
  excerpt: "These seven habits bring a little more rhythm, less pressure and more room to enjoy family life.",
  category: "Family",
  image: quieterFamilyLife,
  href: "/journal/gentle-family-life",
  publishedAt: "2026-08-05",
} satisfies PublishedContent;

const kitchenArticle = {
  title: "Kitchen Essentials",
  excerpt: "No trendy gadgets, no cupboard clutter. Just seven things we’ve used for years and would happily choose all over again.",
  category: "Kitchen",
  image: kitchenFavorites,
  href: "/journal/kitchen-essentials",
  publishedAt: "2026-08-09",
} satisfies PublishedContent;

const sourdoughArticle = {
  title: "No-Fuss Sourdough",
  excerpt: "A simpler approach to sourdough, made for real life and the pleasure of homemade bread.",
  category: "Kitchen",
  image: sourdoughBread,
  href: "/journal/simple-sourdough-guide",
  publishedAt: "2026-08-11",
} satisfies PublishedContent;

const publishedContent = [
  sourdoughArticle,
  kitchenArticle,
  journalArticle,
  recipes.focaccia,
  recipes.zimtschnecken,
  recipes.boeufStroganoff,
  recipes.hugoEistee,
  recipes.plumStreuselCake,
] satisfies PublishedContent[];

export const recipePreviews: ArticlePreview[] = Object.values(recipes);
export const journalPreviews: ArticlePreview[] = [sourdoughArticle, kitchenArticle, journalArticle];

export const latestContent: ArticlePreview[] = publishedContent
  .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 4);

export const relatedContent = {
  focaccia: [recipes.zimtschnecken, recipes.boeufStroganoff, recipes.hugoEistee, journalArticle],
  zimtschnecken: [recipes.focaccia, recipes.boeufStroganoff, recipes.hugoEistee, journalArticle],
  boeufStroganoff: [recipes.focaccia, recipes.zimtschnecken, recipes.hugoEistee, journalArticle],
  hugoEistee: [recipes.focaccia, recipes.zimtschnecken, recipes.boeufStroganoff, journalArticle],
  plumStreuselCake: [recipes.zimtschnecken, recipes.focaccia, recipes.hugoEistee, journalArticle],
} satisfies Record<string, ArticlePreview[]>;
