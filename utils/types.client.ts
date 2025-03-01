import type { ParsedContent } from "@nuxt/content/types";

export type CategoryType =
  | "ai"
  | "automation"
  | "marketing"
  | "design"
  | "website"
  | "form"
  | "mobile"
  | "analytics"
  | "editor"
  | "template"
  | "utility"
  | "service"
  | "entertainment"
  | "jobs"
  | "education"
  | "review";

export type RevenueModelType =
  | "subscription"
  | "advertising"
  | "transaction"
  | "sponsorship"
  | "affiliate";

export type StatusType = "active" | "inactive" | "acquired" | "unknown";

export interface Product {
  image: { src: string; alt: string };
  title: string;
  description: string;
  homepage: string;
  status: StatusType;
  categories: CategoryType | CategoryType[];
  revenue: number;
  models: RevenueModelType | RevenueModelType[];
  year: number;
  hashtags: string[];
  publishedAt: number;
  affiliate?: string;
}

export type ParsedProduct = ParsedContent & Product;

export type SponsorProduct = Partial<ParsedProduct> & {
  title: string;
  description: string;
  icon: string;
  image: { src: string; alt: string };
  _path: string;
  _sponsor: boolean;
};

export interface AppError {
  statusCode: number;
  fatal?: boolean;
  unhandled?: boolean;
  statusMessage?: string;
  data?: unknown;
  cause?: unknown;
}

export interface ListingCategory {
  icon: string;
  description: string;
}

export type ParsedListingCategory = ParsedContent & ListingCategory;
