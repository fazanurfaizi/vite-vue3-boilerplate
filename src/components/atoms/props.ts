export const Position = {
	type: String,
	default: 'top',
	required: false,
	validator: (value: string): boolean => {
		return ['top', 'bottom'].includes(value)
	}
}

export const Align = {
	type: String,
	default: '',
	required: false,
	validator: (value: string): boolean => {
		// The value must match one of these strings
		return ['', 'left', 'center', 'right'].includes(value)
	},
}

export const Breakpoint = {
	validator: (value: boolean | number): boolean => {
		if (typeof value == 'boolean' || typeof value == 'number') {
			return true
		} else {
			return false
		}
	},
}

export const Color = {
	type: String,
	default: 'primary',
	required: false,
	validator: (value: string): boolean => {
		// The value must match one of these strings
		return [
			'primary',
			'secondary',
			'success',
			'danger',
			'warning',
			'info',
			'dark',
			'light',
			'link',
			'transparent',
		].includes(value)
	},
}

export const Size = {
	type: String,
	default: 'sm',
	required: false,
	validator: (value: string): boolean => {
		// The value must match one of these strings
		return ['sm', 'md', 'lg'].includes(value)
	},
}

export const TextColor = {
	type: String,
	default: 'primary',
	required: false,
	validator: (value: string): boolean => {
		return [
			'primary',
			'secondary',
			'success',
			'danger',
			'warning',
			'info',
			'dark',
			'light',
			'link',
			'transparent',
		].includes(value)
	},
}

