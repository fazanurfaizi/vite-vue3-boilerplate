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
</script>

<template>
	<div class="card">
		<TBadge label="Ardhin" color="primary" />
		<TBadge label="Ardhin" color="primary" pills />
		<TBadge label="Ardhin" color="secondary" />
		<TBadge label="Ardhin" color="secondary" pills />
		<TBadge label="Ardhin" color="success" />
		<TBadge label="Ardhin" color="success" pills />
		<TBadge label="Ardhin" color="warning" />
		<TBadge label="Ardhin" color="warning" pills />
		<TBadge label="Ardhin" color="danger" />
		<TBadge label="Ardhin" color="danger" pills />
		<TBadge label="Ardhin" color="dark" />
		<TBadge label="Ardhin" color="dark" pills />
		<TBadge label="Ardhin" color="light" />
		<TBadge label="Ardhin" color="light" pills />
	</div>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>
