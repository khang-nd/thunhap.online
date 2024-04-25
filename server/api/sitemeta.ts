import { useSupabaseClient } from "~/composables/supabase";

export default defineEventHandler(async (e) => {
  const supabase = useSupabaseClient();
  const { urls } = await readBody<{ urls: string[] }>(e);

  if (!urls) {
    throw createError({
      status: 400,
      statusMessage: "Bad Request",
    });
  }

  let result = await supabase
    .from("sitemeta")
    .select("domain,name,icon")
    .in("domain", urls);

  if (result.data && result.data.length < urls.length) {
    const missingData = urls
      .filter((url) => !result.data.find((data) => data.domain === url))
      .map((domain) => ({ domain }));
    return [...result.data, ...missingData];
  }

  return result.data;
});
