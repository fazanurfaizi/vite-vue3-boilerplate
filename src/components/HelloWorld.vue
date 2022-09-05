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
	import { TAvatar } from '@/components/atoms/avatar'
</script>

<template>
	<div class="card">
		<TAvatar size="sm" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" shadow variant="square" />
	</div>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>
