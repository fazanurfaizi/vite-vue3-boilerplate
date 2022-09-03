import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import i18n from './locales'
import store from './store'

createApp(App)
	.use(store)
	.use(i18n)
	.mount('#app')
