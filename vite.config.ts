import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	plugins: [
		vue(),
		vueI18n({
			include: resolve(
				dirname(fileURLToPath(import.meta.url)),
				'./src/locales/lang/**'
			),
			runtimeOnly: false,
		}),
	],
})
