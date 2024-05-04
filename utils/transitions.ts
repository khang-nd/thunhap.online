import type { TransitionProps } from "vue";

type PageTransition = 'Auth';

/**
 * Page transition styles are defined globally in [app.vue](../app.vue).
 */
export const PageTransition: Record<PageTransition, TransitionProps> = {
  Auth: { name: "auth", mode: "out-in" },
};
