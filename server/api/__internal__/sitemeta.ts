import Queue from "p-queue";
import { useSupabaseClient } from "~/composables/supabase";
import { uploadFile } from "~/server/utils/aws";
import { Sitemeta } from "~/utils/types.server";

const iconSizes = [32, 48, 64, 128, 256];

interface QueryProps {
  urls: string;
  secret: string;
}

const fetchSitemeta = async (url: string): Promise<Sitemeta["Insert"]> => {
  const config = useRuntimeConfig();

  // title
  const searchSite = await $fetch<any>(
    `https://api.search.brave.com/res/v1/web/search?q=${url}&count=1&result_filter=web`,
    { headers: { "X-Subscription-Token": config.searchApiKey } }
  );
  const name: string = searchSite.web.results[0].profile.name;

  // favicon
  const fetchFavicons = iconSizes.map((size) =>
    $fetch<Blob>(
      `https://www.google.com/s2/favicons?domain=${url}&sz=${size}`,
      { responseType: "blob" }
    )
  );
  const favicons = await Promise.all(fetchFavicons);
  const fetchIconUrls = favicons.map(async (icon, i) => {
    const ext = icon.type === "image/ico" ? ".ico" : ".png";
    return uploadFile({
      folder: "favicon",
      filename: `${url}/${iconSizes[i]}${ext}`,
      content: Buffer.from(await icon.arrayBuffer()),
      contentType: icon.type,
    });
  });
  const iconUrls = await Promise.all(fetchIconUrls);

  return { domain: url, name, icon: iconUrls[0] };
};

export default defineEventHandler(async (e) => {
  const { urls: _urls, secret } = getQuery<QueryProps>(e);
  const supabase = useSupabaseClient();
  const urls = _urls.split(",");

  if (!urls || !secret || secret !== "tno") {
    throw createError({
      status: 400,
      statusMessage: "Bad Request",
    });
  }

  const queue = new Queue({ concurrency: 1, intervalCap: 1, interval: 1500 });
  const metaResults: Sitemeta["Insert"][] = [];
  queue.addAll(urls.map((url) => () => fetchSitemeta(url)));
  queue.on("completed", (result) => metaResults.push(result));
  return new Promise((resolve) => {
    queue.on("idle", async () => {
      const result = await supabase
        .from("sitemeta")
        .insert(metaResults)
        .select("domain, name, icon");
      resolve(result);
    });
  });
});
