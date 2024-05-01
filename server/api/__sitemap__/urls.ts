import { serverQueryContent } from "#content/server";
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { categories, revenueModels, status } from "~/utils/filters";
import { ParsedProduct } from "~/utils/types.client";

export default defineSitemapEventHandler(async (e) => {
  const content = (await serverQueryContent(e)
    .without("body")
    .find()) as ParsedContent[];
  const contentUrls = content.map((c) =>
    asSitemapUrl({
      loc: c._path,
      images: c.image ? [{ loc: c.image.src, title: c.image.alt }] : undefined,
      _i18nTransform: true,
    })
  );

  const productContent = content.filter((c) =>
    c._path?.startsWith("/product")
  ) as ParsedProduct[];
  const allTags = productContent.reduce(
    (all: string[], p) => [...all, ...p.hashtags],
    []
  );
  const tags = Array.from(new Set(allTags));
  const tagUrls = tags.map((tag) =>
    asSitemapUrl({ loc: `/browse/tag/${tag}`, _i18nTransform: true })
  );

  const statusUrls = status.map((status) =>
    asSitemapUrl({ loc: `/browse/status/${status}`, _i18nTransform: true })
  );

  const modelUrls = revenueModels.map((model) =>
    asSitemapUrl({ loc: `/browse/model/${model}`, _i18nTransform: true })
  );

  const categoryUrls = Object.keys(categories).map((category) =>
    asSitemapUrl({ loc: `/browse/${category}`, _i18nTransform: true })
  );

  return [
    ...categoryUrls,
    ...statusUrls,
    ...modelUrls,
    ...tagUrls,
    ...contentUrls,
  ];
});
