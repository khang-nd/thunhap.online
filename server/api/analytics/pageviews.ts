import { PageviewsResponse } from "~/utils/types.server";

const PROJECT_ID = 63546;

export default defineEventHandler(async (e): Promise<PageviewsResponse> => {
  const { page } = getQuery(e);

  if (!page) {
    throw createError({
      status: 400,
      statusMessage: "Bad request",
    });
  }

  const config = useRuntimeConfig(e);
  const params = new URLSearchParams({
    date_from: "all",
    date_to: "null",
    display: "BoldNumber",
    filter_test_accounts: "true",
    events: JSON.stringify([{ id: "$pageview" }]),
    properties: JSON.stringify({
      type: "AND",
      values: [
        {
          type: "AND",
          values: [
            {
              key: "$pathname",
              type: "event",
              value: [page],
              operator: "exact",
            },
          ],
        },
      ],
    }),
  });
  try {
    const data = await $fetch(
      `${config.public.posthogHost}/api/projects/${PROJECT_ID}/insights/trend?${params}`,
      { headers: { Authorization: `Bearer ${config.posthogApiKey}` } }
    );
    // return data;
    return { result: (data as any).result[0].aggregated_value };
  } catch (error) {
    return { result: 0 };
  }
});
