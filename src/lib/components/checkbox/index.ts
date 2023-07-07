import { cva } from 'class-variance-authority';

export { default as Checkbox } from './Checkbox.svelte';

export const boxVariants = cva(
  [
    'flex appearance-none items-center justify-center ring-offset-slate-300 rounded border transition-[background-color]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'data-[state=checked]:text-white',
    'data-[state=indeterminate]:text-white',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      theme: {
        primary: [
          'border-primary-700',
          'data-[state=checked]:bg-primary-700 data-[state=checked]:border-primary-700',
          'data-[state=indeterminate]:bg-primary-700 data-[state=indeterminate]:border-primary-700',
          'focus-visible:outline-primary-700',
          'disabled:bg-primary-200 disabled:data-[state=checked]:bg-primary-200 disabled:data-[state=checked]:border-primary-200 disabled:border-primary-200 disabled:text-primary-500 ',
        ],
        secondary: [
          'border-secondary',
          'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary',
          'data-[state=indeterminate]:bg-secondary data-[state=indeterminate]:border-secondary',
          'focus-visible:outline-secondary',
          'disabled:bg-secondary-200 disabled:data-[state=checked]:bg-secondary-200 disabled:data-[state=checked]:border-secondary-200 disabled:border-secondary-200 disabled:text-secondary-500',
        ],
        accent: [
          'border-accent',
          'data-[state=checked]:bg-accent data-[state=checked]:border-accent',
          'data-[state=indeterminate]:bg-accent data-[state=indeterminate]:border-accent',
          'focus-visible:outline-accent',
          'disabled:bg-accent-200 disabled:data-[state=checked]:bg-accent-200 disabled:data-[state=checked]:border-accent-200 disabled:border-accent-200 disabled:text-accent-500',
        ],
        destructive: [
          'border-destructive',
          'data-[state=checked]:bg-destructive data-[state=checked]:border-destructive',
          'data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:border-destructive',
          'focus-visible:outline-destructive',
          'disabled:bg-destructive-200 disabled:data-[state=checked]:bg-destructive-200 disabled:data-[state=checked]:border-destructive-200 disabled:border-destructive-200 disabled:text-destructive-500',
        ],
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-7 w-7',
      },
    },
    defaultVariants: {
      theme: 'primary',
      size: 'md',
    },
  }
);
