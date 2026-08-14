export type JournalCategory = "ankommen" | "geniessen" | "ordnen" | "zusammen";
export type RecipeCategory = "familienkueche" | "brot-gebaeck" | "spassgetraenke" | "gastfreundschaft";

export type CategoryLink<Category extends string> = {
  label: string;
  href: string;
  category: Category;
  pageTitle: string;
};

export const mainNavigation = [
  { label: "Journal", href: "/journal" },
  { label: "Genuss", href: "/genuss" },
  { label: "Über Domaće", href: "/willkommen" },
] as const;

export const journalCategories = [
  { label: "Ankommen", href: "/journal/ankommen", category: "ankommen", pageTitle: "Ankommen im Journal – Domaće" },
  { label: "Genießen", href: "/journal/geniessen", category: "geniessen", pageTitle: "Genießen im Journal – Domaće" },
  { label: "Ordnen", href: "/journal/ordnen", category: "ordnen", pageTitle: "Ordnen im Journal – Domaće" },
  { label: "Zusammen", href: "/journal/zusammen", category: "zusammen", pageTitle: "Zusammen im Journal – Domaće" },
] as const satisfies ReadonlyArray<CategoryLink<JournalCategory>>;

export const recipeCategories = [
  { label: "Familienküche", href: "/genuss/familienkueche", category: "familienkueche", pageTitle: "Familienküche – Genuss – Domaće" },
  { label: "Brot & Gebäck", href: "/genuss/brot-gebaeck", category: "brot-gebaeck", pageTitle: "Brot & Gebäck – Genuss – Domaće" },
  { label: "Spaßgetränke", href: "/genuss/spassgetraenke", category: "spassgetraenke", pageTitle: "Spaßgetränke – Genuss – Domaće" },
  { label: "Gastfreundschaft", href: "/genuss/gastfreundschaft", category: "gastfreundschaft", pageTitle: "Gastfreundschaft – Genuss – Domaće" },
] as const satisfies ReadonlyArray<CategoryLink<RecipeCategory>>;

export const informationNavigation = [
  { label: "Über Domaće", href: "/willkommen" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
