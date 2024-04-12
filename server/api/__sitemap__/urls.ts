import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { serverQueryContent } from "#content/server";
import { categories } from "~/utils/filters";

export default defineSitemapEventHandler(async (e) => {
  const content = (await serverQueryContent(e).find()) as ParsedContent[];
  const contentUrls = content.map((c) =>
    asSitemapUrl({
      loc: c._path,
      images: c.image ? [{ loc: c.image.src, title: c.image.alt }] : undefined,
      _i18nTransform: true,
    })
  );

  const categoryUrls = Object.keys(categories).map((category) =>
    asSitemapUrl({ loc: `/browse/${category}`, _i18nTransform: true })
  );

  return [...categoryUrls, ...contentUrls];
});
