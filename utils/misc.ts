import { NuxtLink, NuxtLinkLocale } from "#components";

export const countElements = <T>(array: T[]): { [key: string]: number } => {
  let counts: { [key: string]: number } = {};
  array.forEach((element) => {
    const key = String(element);
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
};

export const isExternalLink = (href: string) => /^(https?|mailto)/.test(href);

export const resolveLinkComponent = (href: string) =>
  isExternalLink(href) ? NuxtLink : NuxtLinkLocale;
