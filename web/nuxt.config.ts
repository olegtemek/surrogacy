// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@formkit/nuxt'
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru-RU.json',

      },
      {
        code: 'en',
        file: 'en-US.json'
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ru'
  },

  css: ['@/assets/styles/main.scss'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  ssr: false,
  runtimeConfig: {
    public: {
      api: 'http://localhost:3001/api',
      image: 'http://localhost:3001/',
    },
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }]
    }
  },
})
