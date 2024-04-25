import type { Database } from "~/supabase/types";

export type PageviewsResponse = {
  result: number;
};

export type Sitemeta = Database["public"]["Tables"]["sitemeta"];
