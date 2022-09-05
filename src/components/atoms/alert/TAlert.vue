<template>
<transition appear name="slide-fade">
    <div v-if="visible" class="float-right">
		<div
			class="relative items-center p-4 border-l-4 rounded shadow-sm"
			:class="bodyClasses"
			role="alert"
		>
			<button
				@click="handleDismiss()"
				aria-label="Close panel"
				class="relative flex items-center align-middle justify-center flex-shrink-0 w-6 h-6 ml-4 transition duration-100 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-opacity-50 float-right"
				:class="buttonClasses"
				style="outline: none;"
				v-show="props.dismissible"
			>
				<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
			<div class="flex-grow">
				<slot></slot>
			</div>
		</div>
    </div>
</transition>
</template>

<script setup lang="ts">
import { Colors } from '@/app/types/Styles';
import { computed, ref, watch } from 'vue';
import { Color } from '../props';

const props = defineProps({
	/**
	 * Sets the color context of the component to one of CoreUI’s themed colors.
	 *
	 * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
	 */
	color: Color,
	/**
	 * Optionally add a close button to alert and allow it to self dismisss.
	 */
	dismissible: {
		type: Boolean,
		default: false,
		required: false,
	},
	/**
	 * Toggle the visibility of alert component.
	 */
	visible: {
		type: Boolean,
		default: true,
		required: false,
	},
})

const emits = defineEmits(['close'])

const visible = ref(props.visible)

const getBodyClasses = () => {
	const color: Colors = props.color
	switch (color) {
		case 'primary':
			return 'bg-blue-100 border-blue-600'
		case 'secondary':
			return 'bg-purple-100 border-purple-600'
		case 'success':
			return 'bg-green-100 border-green-600'
		case 'danger':
			return 'bg-red-100 border-red-600'
		case 'warning':
			return 'bg-yellow-50 border-yellow-500'
		case 'info':
			return 'bg-blue-50 border-blue-400'
		default:
			return 'bg-blue-100 border-blue-600'
	}
}

const bodyClasses = computed(() => getBodyClasses())

const getButtonClasses = () => {
	const color: Colors = props.color
	switch (color) {
		case 'primary':
			return 'text-primary hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
		case 'secondary':
			return 'text-secondary hover:bg-hover-secondary focus:bg-focus-secondary active:bg-active-secondary'
		case 'success':
			return 'text-success hover:bg-hover-success focus:bg-focus-success active:bg-active-success'
		case 'danger':
			return 'text-danger hover:bg-hover-danger focus:bg-focus-danger active:bg-active-danger'
		case 'warning':
			return 'text-warning hover:bg-hover-warning focus:bg-focus-warning active:bg-active-warning'
		case 'info':
			return 'text-info hover:bg-hover-info focus:bg-focus-info active:bg-active-info'
		default:
			return 'text-primary hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
	}
}

const buttonClasses = computed(() => getButtonClasses())

watch(() => props.visible, () => {
	visible.value = props.visible
})

const handleDismiss = () => {
	visible.value = false
	emits('close')
}
</script>

<style scoped>
.slide-fade-enter-active {
  	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
