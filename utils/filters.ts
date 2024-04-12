import type { CategoryType, RevenueModelType, StatusType } from "./types";

export const categories: Record<CategoryType, any> = {
  ai: {
    icon: "uil:robot",
  },
  automation: {
    icon: "uil:cog",
  },
  marketing: {
    icon: "uil:megaphone",
  },
  design: {
    icon: "uil:palette",
  },
  website: {
    icon: "uil:web-grid",
  },
  form: {
    icon: "uil:file-plus-alt",
  },
  mobile: {
    icon: "uil:mobile-android",
  },
  analytics: {
    icon: "uil:chart-pie",
  },
  editor: {
    icon: "uil:image-edit",
  },
  template: {
    icon: "uil:box",
  },
  utility: {
    icon: "uil:wrench",
  },
  service: {
    icon: "uil:calling",
  },
  entertainment: {
    icon: "uil:play-circle",
  },
  jobs: {
    icon: "uil:briefcase-alt",
  },
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
