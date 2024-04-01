const baseUrl = "https://thunhap.online";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    experimental: {
      search: {},
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-gtag",
  ],
  site: {
    url: baseUrl,
    name: "Thu Nhập Online",
    description: "Khám phá các sản phẩm online thành công, mang lại thu nhập",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
    cacheMaxAgeSeconds: 86400, // 1 day
  },
  ogImage: {
    enabled: false,
  },
  i18n: {
    baseUrl,
    langDir: "locales",
    locales: [
      { code: "vi", iso: "vi-VN", file: "vi.json" },
      { code: "en", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "vi",
    strategy: "no_prefix",
  },
});
