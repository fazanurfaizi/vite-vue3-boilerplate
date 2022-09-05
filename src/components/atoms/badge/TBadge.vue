<template>
	<component
		:is="component"
		class="font-medium leading-tight"
		:class="[textSizeClass]"
	>
    	<span
			class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-boldrounded"
			:class="[classes, {
				'rounded': !props.pills,
				'rounded-full': props.pills
			}]"
		>
			{{ props.label }}
		</span>
    </component>
</template>

<script setup lang="ts">
import { Colors } from '@/app/types/Styles';
import { computed } from 'vue';
import { Color, Size } from '../props';

const props = defineProps({
	label: {
		type: String,
		required: true
	},
	/**
	 * Size the component
	 *
	 * @values 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
	 */
	size: Size,
	/**
	 * Sets the color context of the component to one of Tailwind css themed colors.
	 *
	 * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
	 */
	color: Color,
	/**
	 * Use the .rounded-full utility class to make badges more rounded with a larger border-radius.
	 *
	 */
	pills: {
		type: Boolean,
		default: false,
		required: false
	},
})

const component = computed(() => {
	switch (props.size) {
		case 'xs':
			return 'h6'
		case 'sm':
			return 'h5'
		case 'md':
			return 'h4'
		case 'lg':
			return 'h3'
		case 'xl':
			return 'h2'
		case 'xxl':
			return 'h1'
		default:
			return 'h6'
	}
})

const textSizeClass = computed(() => {
	switch (props.size) {
		case 'xs':
			return 'text-base'
		case 'sm':
			return 'text-xl'
		case 'md':
			return 'text-2xl'
		case 'lg':
			return 'text-3xl'
		case 'xl':
			return 'text-4xl'
		case 'xxl':
			return 'text-5xl'
		default:
			return 'text-base'
	}
})

const getClasses = () => {
	const color: Colors = props.color
	switch (color) {
		case 'primary':
			return 'bg-primary text-white hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
		case 'secondary':
			return 'bg-secondary text-white hover:bg-hover-secondary focus:bg-focus-secondary active:bg-active-secondary'
		case 'success':
			return 'bg-success text-white hover:bg-hover-success focus:bg-focus-success active:bg-active-success'
		case 'danger':
			return 'bg-danger text-white hover:bg-hover-danger focus:bg-focus-danger active:bg-active-danger'
		case 'warning':
			return 'bg-warning text-white hover:bg-hover-warning focus:bg-focus-warning active:bg-active-warning'
		case 'info':
			return 'bg-info text-white hover:bg-hover-info focus:bg-focus-info active:bg-active-info'
		case 'light':
			return 'bg-light text-dark hover:bg-hover-light focus:bg-focus-light active:bg-active-light'
		case 'dark':
			return 'bg-dark text-light hover:bg-hover-dark focus:bg-focus-dark active:bg-active-dark'
		case 'link':
			return 'bg-link text-link hover:bg-hover-link focus:bg-focus-link active:bg-active-link';
		default:
			return 'bg-primary text-white hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
	}
}

const classes = computed(() => getClasses())
</script>
