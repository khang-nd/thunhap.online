import type { status } from "./filters";

export type CategoryType = keyof typeof categories;

export type RevenueModelType = keyof typeof revenueModels;

export type StatusType = keyof typeof status;

export interface Product {
  image: { src: string; alt: string };
  title: string;
  description: string;
  homepage: string;
  status: StatusType;
  categories: CategoryType[];
  revenue: number;
  models: RevenueModelType[];
  year: number;
  hashtags: string[];
  publishedAt: number;
}
