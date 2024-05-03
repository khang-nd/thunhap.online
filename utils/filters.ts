import type {
  CategoryType,
  RevenueModelType,
  StatusType,
} from "./types.client";

export const categories: Record<CategoryType, any> = {
  ai: "uil:robot",
  automation: "uil:cog",
  marketing: "uil:megaphone",
  design: "uil:palette",
  website: "uil:web-grid",
  form: "uil:file-plus-alt",
  mobile: "uil:mobile-android",
  analytics: "uil:chart-pie",
  editor: "uil:image-edit",
  template: "uil:box",
  utility: "uil:wrench",
  service: "uil:calling",
  entertainment: "uil:play-circle",
  jobs: "uil:briefcase-alt",
  education: "uil:books",
};

export const revenueModels: RevenueModelType[] = [
  "subscription",
  "advertising",
  "transaction",
  "sponsorship",
  "affiliate",
];

export const status: StatusType[] = [
  "active",
  "inactive",
  "acquired",
  "unknown",
];
