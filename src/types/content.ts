import type { ImageMetadata } from "astro";

export type ArticlePreview = {
  title: string;
  excerpt: string;
  category: string;
  image?: ImageMetadata;
  href: string;
  date?: string;
  duration?: string;
  servings?: string;
};
