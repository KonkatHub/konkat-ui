import { cva } from 'class-variance-authority';

export { default as Checkbox } from './Checkbox.svelte';

export const checkboxVariants = cva([''], {
  variants: {
    theme: {
      default: [
        'bg-primary text-white',
        'hover:bg-primary-600',
        'active:bg-primary-700',
        'disabled:bg-primary-200 disabled:text-primary-700',
      ],
      secondary: [
        'bg-secondary text-white',
        'hover:bg-secondary-600',
        'active:bg-secondary-700',
        'disabled:bg-secondary-200 disabled:text-secondary-700',
      ],
    },
    size: {
      xs: 'h-8 px-2 text-sm',
      sm: 'h-9 px-3',
      default: 'h-10 px-4',
      lg: 'h-12 px-8 text-lg',
    },
  },
  defaultVariants: {
    theme: 'default',
    size: 'default',
  },
});
