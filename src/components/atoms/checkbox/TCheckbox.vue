<template>
	<label class="flex items-center">
		<input
			:value="props.value"
			type="checkbox"
			:name="props.name"
			:required="props.required"
			:disabled="props.disabled"
			:readonly="props.readonly"
			class="transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
			:class="[classes]"
			@change="handleChange"
		>
		<span class="ml-2 text-sm">{{ props.title }}</span>
	</label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Color } from '../props';

const props = defineProps({
	title: {
		type: [String, Number],
		required: false,
		default: ''
	},
	value: {
		type: [String, Number],
		required: false,
		default: null
	},
	checked: {
		type: Boolean,
		required: false,
		default: false
	},
	name: {
		type: String,
		required: false,
		default: null
	},
	required: {
		type: Boolean,
		required: false,
		default: false
	},
	disabled: {
		type: Boolean,
		required: false,
		default: null
	},
	readonly: {
		type: Boolean,
		required: false,
		default: null
	},
	/**
	 * Sets the color context of the component to one of Tailwind css themed colors.
	 *
	 * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
	 */
	color: Color,
})

const emits = defineEmits(['change'])

const handleChange = (event: Event) => {
	emits('change', event)
}

const classes = computed(() => {
	switch (props.color) {
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
		case 'light':
			return 'text-light hover:bg-hover-light focus:bg-focus-light active:bg-active-light'
		case 'dark':
			return 'text-dark hover:bg-hover-dark focus:bg-focus-dark active:bg-active-dark'
		case 'link':
			return 'text-link hover:bg-hover-link focus:bg-focus-link active:bg-active-link';
		default:
			return 'text-primary hover:bg-hover-primary focus:bg-focus-primary active:bg-active-primary'
	}
})
</script>
