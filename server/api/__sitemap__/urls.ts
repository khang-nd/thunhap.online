import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { serverQueryContent } from "#content/server";

export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[];
  return contentList.map((c) =>
    asSitemapUrl({
      loc: c._path,
      images: c.image ? [{ loc: c.image.src, title: c.image.alt }] : undefined,
    })
  );
});
