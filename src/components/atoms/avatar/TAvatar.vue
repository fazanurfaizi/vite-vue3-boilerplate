<template>
	<div class="text-center">
		<img
			:src="props.src"
			:class="[sizeClass, {
				'rounded-lg': props.variant === 'square',
				'rounded-full': props.variant === 'rounded',
				'shadow-lg': props.shadow
			}]"
			alt="Avatar"
		/>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Size } from '../props';

const props = defineProps({
	/**
	 * Image source
	 */
	src: {
		type: String,
		required: true
	},
	/**
	 * Size the component
	 *
	 * @values 'sm', 'md', 'lg
	 */
	size: Size,
	/**
	 * Avatar variant type
	 *
	 * @values 'rounded', 'square'
	 */
	variant: {
		type: String,
		required: false,
		default: 'rounded',
		validator: (value: string): boolean => {
			// The value must match one of these strings
			return ['rounded', 'square'].includes(value)
		},
	},
	/**
	 * With shadow
	 */
	shadow: {
		type: Boolean,
		required: false
	}
})

const sizeClass = computed(() => {
	switch (props.size) {
		case 'sm':
			return 'w-16'
		case 'md':
			return 'w-24'
		case 'lg':
			return 'w-32'
		default:
			return 'w-16'
	}
})
</script>
