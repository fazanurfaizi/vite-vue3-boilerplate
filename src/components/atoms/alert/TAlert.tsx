import { defineComponent, h, ref, Transition, watch } from "vue";
import { Color } from "../props";

export const TAlert = defineComponent({
	name: 'TAlert',
	props: {
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
		 * Set the alert variant to a solid.
		 *
		 * @values 'solid'
		 */
		variant: {
			type: String,
			default: undefined,
			required: false,
			validator: (value: string) => {
				return value === 'solid'
			},
		},
		/**
		 * Toggle the visibility of alert component.
		 */
		visible: {
			type: Boolean,
			default: true,
			required: false,
		},
	},
	emits: [
		/**
		 * Callback fired when the component requests to be closed.
		 */
		'close',
	],
	setup(props, { slots, emit }) {
		const visible = ref(props.visible)

		watch(() => props.visible, () => {
			visible.value = props.visible
		})

		const handleDismiss = () => {
			visible.value = false
			emit('close')
		}

		return () => h(
			Transition,
			{
				name: 'fade',
				duration: 350,
				enterFromClass: '',
				enterActiveClass: 'fade',
				enterToClass: 'fade show',
				leaveActiveClass: 'fade'
			},
			{
				default: () => visible.value && h(
					'div', {
						class: [
							'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative',
						],
						role: 'alert'
					},
					[
						slots.default && slots.default(),
						props.dismissible && h('span', {
							class: 'absolute top-0 bottom-0 right-0 px-4 py-3',
							'aria-label': 'Close',
							onClick: handleDismiss
						}, h('svg', {
							class: 'fill-current h-6 w-6 text-red-500',
							role: 'button',
							xmlns: 'http://www.w3.org/2000/svg',
							viewBox: '0 0 20 20'
						}, h('path', {
							d: 'M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'
						})))
					]
				)
			}
		)
	}
})
