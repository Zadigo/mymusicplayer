// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@vueuse/motion'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { ssr: true },
    '/explorer/**': { ssr: false },
    '/playlists/**': { ssr: false },
    '/artists/**': { ssr: false },
    '/settings/**': { ssr: false }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ui: {
    prefix: 'Nuxt'
  },

  fonts: {
    families: [
      {
        name: 'Albert Sans'
        // weights: [400, 700]
      },
      {
        name: 'Barlow'
        // weights: [400, 700]
      }
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})