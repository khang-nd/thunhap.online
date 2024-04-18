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
  | "jobs";

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

export interface AppError {
  statusCode: number;
  fatal?: boolean;
  unhandled?: boolean;
  statusMessage?: string;
  data?: unknown;
  cause?: unknown;
}
