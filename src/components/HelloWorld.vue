<script setup lang="ts">
	import { computed, ref } from 'vue'
	import { useStore } from 'vuex'
	import { RootState } from '@/store/types'

	import { TButton } from '@/components/atoms/button'
	import { TAlert } from '@/components/atoms/alert'

	defineProps<{ msg: string }>()

	const store = useStore<RootState>()
	const count = computed(() => store.state.counter.counter)
	const increment = () => store.commit('counter/increment')
	const decrement = () => store.commit('counter/decrement')

	const visible = ref<boolean>(false)

	const handleAlert = () => {
		visible.value = !visible.value
	}
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<!-- <button type="button" @click="increment()">Increment</button> -->
		<TButton @click="increment()" type="button" size="md" color="primary">
			Increment
		</TButton>
		{{ count }}
		<TButton @click="decrement()" type="button" size="md" color="success" rounded outline>
			Decrement
		</TButton>

		<TButton type="button" size="md" color="primary" @click="handleAlert()">Alert</TButton>

		<TAlert color="primary" dismissible :visible="visible">
			<strong class="mr-1">Holy guacamole! </strong> You should check in on some of those fields below.
		</TAlert>

		<TAlert color="secondary" dismissible :visible="visible">
			<strong class="mr-1">Holy guacamole! </strong> You should check in on some of those fields below.
		</TAlert>

		<TAlert color="success" dismissible :visible="visible">
			<strong class="mr-1">Holy guacamole! </strong> You should check in on some of those fields below.
		</TAlert>

		<TAlert color="warning" dismissible :visible="visible">
			<strong class="mr-1">Holy guacamole! </strong> You should check in on some of those fields below.
		</TAlert>

		<TAlert color="danger" dismissible :visible="visible">
			<strong class="mr-1">Holy guacamole! </strong> You should check in on some of those fields below.
		</TAlert>

		<TAlert color="info" dismissible :visible="visible">
			<strong class="mr-1">Holy guacamole! </strong> You should check in on some of those fields below.
		</TAlert>
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
