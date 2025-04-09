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
        { name: 'keywords', content: 'Webdesign, Webentwicklung, Firmenwebsite, moderne Webseiten, responsive Design, Nuxt, SEO' },
        { name: 'author', content: 'Julian Kiel' },
        { name: 'robots', content: 'index, follow, noarchive, noimageindex' },
        { property: 'og:title', content: 'Julian Kiel – Webentwickler & Designer' },
        { property: 'og:description', content: 'Maßgeschneiderte Webseiten für Unternehmen – Modernes Webdesign & Entwicklung mit Nuxt.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://juliankiel.dev' },
        // { property: 'og:image', content: 'https://juliankiel.dev/**VORSCHAU-BILD.JPG**' } 
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preload', href: '/fonts/SpaceMono-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/SpaceMono-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', href: '/fonts/SourceCodePro.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ],
    },
  },
  modules: ['@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
    disableTransition: true
  }
});
