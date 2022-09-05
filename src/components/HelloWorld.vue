<script setup lang="ts">
	// import { computed, ref } from 'vue'
	// import { useStore } from 'vuex'
	// import { RootState } from '@/store/types'

	// import { TButton } from '@/components/atoms/button'
	// import { TAlert } from '@/components/atoms/alert'

	// defineProps<{ msg: string }>()

	// const store = useStore<RootState>()
	// const count = computed(() => store.state.counter.counter)
	// const increment = () => store.commit('counter/increment')
	// const decrement = () => store.commit('counter/decrement')

	// const visible = ref<boolean>(false)

	// const handleAlert = () => {
	// 	visible.value = !visible.value
	// }
	import { TBadge } from '@/components/atoms/badge';
	import TCheckbox from './atoms/checkbox/TCheckbox.vue';

	const handleChange = (e: Event) => {
		console.log(e)
	}
</script>

<template>
	<div class="card">
		<TCheckbox color="primary" title="Ardhin" @change="handleChange" />
		<TCheckbox color="secondary" title="Ardhin" />
		<TCheckbox color="success" title="Ardhin" />
		<TCheckbox color="danger" title="Ardhin" />
		<TCheckbox color="warning" title="Ardhin" />
		<TCheckbox color="dark" title="Ardhin" />
		<TCheckbox color="light" title="Ardhin" readonly />
		<TCheckbox color="link" title="Ardhin" disabled />
	</div>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>
