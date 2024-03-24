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
  modules: ["@nuxt/content", "@nuxtjs/seo", "nuxt-icon", "nuxt-gtag"],
  site: {
    url: "https://thunhap.online",
    name: "Thu Nhập Online",
    description: "Khám phá các sản phẩm online thành công, mang lại thu nhập",
  },
});
