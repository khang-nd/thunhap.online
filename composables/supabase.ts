import { SupabaseClient, createClient } from "@supabase/supabase-js";
import type { Database } from "~/supabase/types";

let client: SupabaseClient<Database>;

export const useSupabaseClient = () => {
  if (client) return client;

  const config = useRuntimeConfig();

  client = createClient(config.supabaseUrl, config.supabaseKey);

  return client;
};
