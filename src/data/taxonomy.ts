export type JournalCategory = "home" | "kitchen" | "rhythm" | "family";
export type RecipeCategory = "cooking" | "baking" | "drinks" | "entertaining";

export type CategoryLink<Category extends string> = {
  label: string;
  href: string;
  category: Category;
  pageTitle: string;
};

export const mainNavigation = [
  { label: "Journal", href: "/journal" },
  { label: "Kitchen", href: "/kitchen" },
  { label: "About Domaće", href: "/about" },
] as const;

export const journalCategories = [
  { label: "Kitchen", href: "/journal/kitchen", category: "kitchen", pageTitle: "Kitchen in the Journal – Domaće" },
  { label: "Home", href: "/journal/home", category: "home", pageTitle: "Home in the Journal – Domaće" },
  { label: "Rhythm", href: "/journal/rhythm", category: "rhythm", pageTitle: "Rhythm in the Journal – Domaće" },
  { label: "Family", href: "/journal/family", category: "family", pageTitle: "Family in the Journal – Domaće" },
] as const satisfies ReadonlyArray<CategoryLink<JournalCategory>>;

export const recipeCategories = [
  { label: "Cooking", href: "/kitchen/cooking", category: "cooking", pageTitle: "Cooking – Kitchen – Domaće" },
  { label: "Baking", href: "/kitchen/baking", category: "baking", pageTitle: "Baking – Kitchen – Domaće" },
  { label: "Drinks", href: "/kitchen/drinks", category: "drinks", pageTitle: "Drinks – Kitchen – Domaće" },
  { label: "Entertaining", href: "/kitchen/entertaining", category: "entertaining", pageTitle: "Entertaining – Kitchen – Domaće" },
] as const satisfies ReadonlyArray<CategoryLink<RecipeCategory>>;

export const informationNavigation = [
  { label: "About Domaće", href: "/about" },
  { label: "Imprint", href: "/imprint" },
  { label: "Privacy", href: "/privacy" },
] as const;
