import { SupabaseClient, createClient } from "@supabase/supabase-js";
import type { EventHandlerRequest, H3Event } from "h3";
import type { Database } from "~/supabase/types";

let client: SupabaseClient<Database>;

export const useSupabaseClient = (e?: H3Event<EventHandlerRequest>) => {
  if (client) return client;

  const config = useRuntimeConfig(e);

  client = createClient(config.supabaseUrl, config.supabaseKey);

  return client;
};
