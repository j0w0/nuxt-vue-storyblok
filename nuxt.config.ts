// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  debug: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@storyblok/nuxt", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    bridge: process.env.STORYBLOK_IS_PREVIEW === "true" ? true : false,
  },
  devServer: {
    https: {
      key: "certs/localhost-key.pem",
      cert: "certs/localhost.pem",
    },
  },
});
