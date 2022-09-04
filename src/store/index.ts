import { createStore, createLogger } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { RootState } from './types'

// Modules
import { counter } from './modules/counter.module'

const debug = import.meta.env.NODE_ENV !== 'production'

export const store = createStore<RootState>({
	modules: {
		counter,
	},
	strict: debug,
	plugins: debug
		? [createPersistedState(), createLogger()]
		: [createPersistedState()],
})

export default store
