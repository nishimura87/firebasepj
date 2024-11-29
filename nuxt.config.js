export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'firebasepj',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    },
  
    env: {
        VUE_APP_apiKey: process.env.VUE_APP_apiKey,
        VUE_APP_authDomain: process.env.VUE_APP_authDomain,
        VUE_APP_projectId: process.env.VUE_APP_projectId,
        VUE_APP_storageBucket: process.env.VUE_APP_storageBucket,
        VUE_APP_messagingSenderId: process.env.VUE_APP_messagingSenderId,
        VUE_APP_appId: process.env.VUE_APP_appId,
        VUE_APP_measurementId: process.env.VUE_APP_measurementId,
      },
}
