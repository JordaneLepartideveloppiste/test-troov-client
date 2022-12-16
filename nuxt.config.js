export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-troov-client',
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
  server: {
    port: 3000,
  },

  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_KEY_PUBLIC: process.env.API_KEY_PUBLIC,
    API_KEY_PRIVATE: process.env.API_KEY_PRIVATE,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/moment',
    '@nuxtjs/dotenv'
    
  ],

  moment: {
    defaultLocale: 'fr',
    locales: ['fr']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/moment'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/session', method: 'post' },
          logout: { url: '/session', method: 'delete' },
          user: { url: '/user', method: 'get'}
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/dashboard'
    }
  },




  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
