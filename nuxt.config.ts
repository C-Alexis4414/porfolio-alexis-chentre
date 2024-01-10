// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@tailwindcss/typography',
    '@nuxtjs/apollo',
    '@vueuse/nuxt',
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      userId: process.env.USER_ID
  
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: 'nord',
      preload: ['ts','js','css','java','json','bash','vue']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    }
  }
})
