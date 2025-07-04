import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
  ],

  css: [
    "~/assets/css/main.css",
    "~/assets/css/common/imports.scss",
    "@picocss/pico",
  ],

  vite: {
    plugins: [svgLoader()],
  },

  components: [
    {
      path: "shared/ui",
      extensions: [".vue"],
      prefix: "Shared",
    },
    {
      path: "features",
      extensions: [".vue"],
      prefix: "Feature",
    },
    {
      path: "widgets",
      extensions: [".vue"],
      prefix: "Widget",
    },
    {
      path: "entities",
      extensions: [".vue"],
      prefix: "Entity",
    },
  ],

  future: {
    compatibilityVersion: 4,
  },

  imports: {
    dirs: [
      "../shared/index.ts",
      "shared/index.ts",
      "features/index.ts",
      "widgets/index.ts",
      "entities/index.ts",
    ],
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
        as: "tv",
      },
    ],
  },

  nitro: {
    imports: {
      dirs: ["../shared/index.ts"],
    },
  },

  compatibilityDate: "2025-05-28",
});
