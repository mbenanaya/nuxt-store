// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: 'Nuxt Store',
			meta: [
				{ name: 'description', content: 'Nuxt 3 eCommerce Store' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
			]
		},
	},
	runtimeConfig:{
		currencyKey: process.env.CURRENCY_API_KEY
	}
});
