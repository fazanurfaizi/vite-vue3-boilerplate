<template>
	<component
		:is="props.component"
		:class="[
			classes,
			'inline-block font-medium leading-tight uppercase rounded focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out',
			{
				'shadow-md hover:shadow-lg focus:shadow-lg': !props.outline,
				'border-2': props.outline,
				'rounded-full': props.rounded,
				'px-4 py-1.5 text-xs': props.size === 'sm',
				'px-6 py-2.5 text-xs': props.size === 'md',
				'px-7 py-3 text-sm': props.size === 'lg',
				'not-allowed': props.disabled
			}
		]"
		:disabled="props.disabled && props.component !== 'a'"
		:aria-disabled="props.component === 'a' && props.disabled"
		:tabindex="(props.component === 'a' && props.disabled) ? -1 : 1"
		:type="props.component === 'button' ? props.type : undefined"
		:href="props.component === 'a' && props.href ? props.href : ''"
		:target="props.component === 'a' && '_blank'"
		@click="handleClick"
	>
		<slot></slot>
	</component>
</template>

<script setup lang="ts">
import { Colors } from '@/app/types/Styles';
import { computed } from 'vue';
import { Color, Size } from '../props';

const props = defineProps({
	/**
	 * Toggle the active state for the component.
	 */
		active: {
		type: Boolean,
		default: false,
		required: false,
	},
	/**
	 * Sets the color context of the component to one of CoreUI’s themed colors.
	 *
	 * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
	 */
	color: Color,
	/**
	 * Component used for the root node. Either a string to use a HTML element or a component.
	 */
	component: {
		type: String,
		default: 'button',
		required: false
	},
	/**
	 * Toggle the disabled state for the component
	 */
	disabled: {
		type: Boolean,
		required: false
	},
	/**
	 * The href attribute specifies the URL of the page link goes to
	 */
	href: {
		type: String,
		default: undefined,
		required: false
	},
	/**
	 * Select the rounded of the component.
	 *
	 */
	rounded: {
		type: Boolean,
		required: false
	},
	/**
	 * Size the component
	 *
	 * @values 'sm', 'md', 'lg
	 */
	size: Size,
	/**
	 * Specifies the type of button. Always specify the type attribute for the `<button>` element.
	 * Different browsers may use different default types for the `<button>` element.
	 *
	 * @values 'button', 'submit', 'reset'
	 */
	type: {
		type: String,
		default: 'button',
		required: false,
		validator: (value: string) => {
			return ['button', 'submit', 'reset'].includes(value)
		},
	},
	/**
	 * Set the button variant to an outlined button or a ghost button.
	 *
	 * @values 'ghost', 'outline'
	 */
	outline: {
		type: Boolean,
		default: false,
		required: false
	},
})

const emits = defineEmits(['click'])

// const tabindex = computed(() => (props.component === 'a' && props.disabled) ? -1 : 1)

const handleClick = (event: Event) => {
	if(props.disabled) {
		return
	}

	emits('click', event)
}

const getClasses = () => {
	const color: Colors = props.color
	switch (color) {
		case 'primary':
			return !props.outline
				? 'bg-primary text-white hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
				: 'border-primary text-primary hover:bg-gray-100';
		case 'secondary':
			return !props.outline
				? 'bg-secondary text-white hover:bg-hover-secondary focus:bg-focus-secondary active:bg-active-secondary'
				: 'border-secondary text-secondary hover:bg-gray-100';
		case 'success':
			return !props.outline
				? 'bg-success text-white hover:bg-hover-success focus:bg-focus-success active:bg-active-success'
				: 'border-success text-success hover:bg-gray-100';
		case 'danger':
			return !props.outline
				? 'bg-danger text-white hover:bg-hover-danger focus:bg-focus-danger active:bg-active-danger'
				: 'border-danger text-danger hover:bg-gray-100';
		case 'warning':
			return !props.outline
				? 'bg-warning text-white hover:bg-hover-warning focus:bg-focus-warning active:bg-active-warning'
				: 'border-warning text-warning hover:bg-gray-100';
		case 'info':
			return !props.outline
				? 'bg-info text-white hover:bg-hover-info focus:bg-focus-info active:bg-active-info'
				: 'border-info text-info hover:bg-gray-100';
		case 'light':
			return !props.outline
				? 'bg-light text-white hover:bg-hover-light focus:bg-focus-light active:bg-active-light'
				: 'border-light text-light hover:bg-gray-100';
		case 'dark':
			return !props.outline
				? 'bg-dark text-white hover:bg-hover-dark focus:bg-focus-dark active:bg-active-dark'
				: 'border-dark text-dark hover:bg-gray-100';
		case 'link':
			return 'bg-link text-link hover:bg-hover-link focus:bg-focus-link active:bg-active-link';
	}
}

const classes = computed(() => getClasses())
</script>
