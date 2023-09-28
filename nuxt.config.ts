// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    app: {
      grpcApiUrl: process.env.NUXT_APP_GRPC_API_URL,
      logoType: process.env.NUXT_APP_LOGO_TYPE,
      logoLight: process.env.NUXT_APP_LOGO_LIGHT,
      logoDark: process.env.NUXT_APP_LOGO_DARK,
      tokenSymbol: process.env.NUXT_APP_TOKEN_SYMBOL,
      tokenDecimals: process.env.NUXT_APP_TOKEN_DECIMALS
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons'
  ]
})
