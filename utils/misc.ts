import { NuxtLink, NuxtLinkLocale } from "#components";
import type { LocationQueryValueRaw, RouteLocationRaw } from "vue-router";

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

export const pushQuery = <F extends string | number>(
  field: F,
  value: LocationQueryValueRaw | LocationQueryValueRaw[]
) => {
  const localeRoute = useLocaleRoute();
  const route = useRoute();
  const router = useRouter();
  const to = localeRoute({
    path: route.params.category ? route.path : "/browse",
    query: { ...route.query, [field]: value || null },
  });
  router.push(to as RouteLocationRaw);
};

export const getFullUrl = (host: string) => {
  if (/^https?:\/\//.test(host)) return host;
  const affiliateLink = affiliateLinks[host as keyof typeof affiliateLinks];
  return affiliateLink || `https://${host}?via=thunhap-online`;
};
