import posthog from "posthog-js";

export default defineNuxtPlugin((app) => {
  const router = useRouter();
  const runtimeConfig = useRuntimeConfig();
  const posthogClient = posthog.init(runtimeConfig.public.posthogKey, {
    api_host: runtimeConfig.public.posthogHost || "https://app.posthog.com",
    capture_pageview: false, // capture page views manually
    loaded: () => {
      if (import.meta.env.DEV) posthog.debug();
    },
  });

  router.afterEach((to) => {
    nextTick(() => posthog.capture("$pageview", { current_url: to.fullPath }));
  });

  return {
    provide: { posthog: () => posthogClient },
  };
});
