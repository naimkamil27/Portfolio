// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
      app: {
        head: {
            title: 'Naim Kamil',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3' }
            ],
            link: [
                { rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css'},
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    }
      
})
