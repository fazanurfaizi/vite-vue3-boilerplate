<script setup lang="ts">
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import { RootState } from '@/store/types';

	defineProps<{ msg: string }>()

	const store = useStore<RootState>()
	const count = computed(() => store.state.counter.counter)
	const increment = () => store.commit('counter/increment')
	const decrement = () => store.commit('counter/decrement')
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="increment()">Increment</button>
		{{ count }}
		<button type="button" @click="decrement()">Decrement</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a
			href="https://vuejs.org/guide/quick-start.html#local"
			target="_blank"
		>
			create-vue
		</a>
		, the official Vue + Vite starter
	</p>
	<p>
		Install
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">
			Volar
		</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>
