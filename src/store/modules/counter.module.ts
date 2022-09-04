import { Module } from 'vuex'
import { CounterState, RootState } from '../types'

const initialState: CounterState = {
	counter: 0,
}

export const counter: Module<CounterState, RootState> = {
	namespaced: true,
	state: initialState,
	getters: {
		getCounter(state: CounterState) {
			return state.counter
		},
	},
	mutations: {
		increment(state: CounterState) {
			state.counter++
		},
		decrement(state: CounterState) {
			state.counter--
		},
	},
}
