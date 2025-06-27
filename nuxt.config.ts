// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/index.css'],
  app: {
    head: {
      title: 'Julian Kiel – Webentwickler & Designer für moderne Unternehmen',
      meta: [
        { name: 'description', content: 'Professionelles Webdesign und moderne Webentwicklung für Unternehmen. Maßgeschneiderte Lösungen für eine starke Online-Präsenz.' },
        { name: 'keywords', content: 'Webdesign, Webentwicklung, Firmenwebsite, moderne Webseiten, responsive Design, Frontend, Full-Stack, JavaScript, TypeScript, SEO' },
        { name: 'author', content: 'Julian Kiel' },
        { name: 'robots', content: 'index, follow, noarchive, noimageindex' },
        { property: 'og:title', content: 'Julian Kiel – Webentwickler & Designer' },
        { property: 'og:description', content: 'Maßgeschneiderte Webseiten für Unternehmen – Professionelles Webdesign & moderne Entwicklung für maximale Online-Präsenz.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://juliankiel.dev' },
        // { property: 'og:image', content: 'https://juliankiel.dev/**VORSCHAU-BILD.JPG**' } 
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preload', href: '/fonts/Inter-VariableFont_opsz,wght.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/Inter-Italic-VariableFont_opsz,wght.ttf', as: 'font', type: 'font/ttf', crossorigin: 'anonymous' }
      ],
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
    disableTransition: true
  },

  image: {
    format: ['webp'],
    quality: 85
  }
});
