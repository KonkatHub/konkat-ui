import { cva } from 'class-variance-authority';

export { default as Button } from './Button.svelte';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md ring-offset-slate-300 transition-[transform,_background-color]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400',
    'active:enabled:scale-[98%]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
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
        accent: [
          'bg-accent text-white',
          'hover:bg-accent-600',
          'active:bg-accent-700',
          'disabled:bg-accent-200 disabled:text-accent-700',
        ],
        destructive: [
          'bg-destructive text-white',
          'hover:bg-destructive-600',
          'active:bg-destructive-700',
          'disabled:bg-destructive-200 disabled:text-destructive-700',
        ],
      },
      variant: {
        default: '',
        outline: 'border border-solid',
      },
      size: {
        sm: 'h-9 px-3',
        default: 'h-10 py-2 px-4',
        lg: 'h-11 px-8',
      },
    },
    compoundVariants: [
      {
        theme: 'default',
        variant: 'outline',
        class: [
          'text-primary-700 border-primary-700 bg-white',
          'hover:bg-primary-50',
          'active:bg-primary-100',
          'disabled:border-primary-500 disabled:bg-white disabled:text-primary-500',
        ],
      },
      {
        theme: 'secondary',
        variant: 'outline',
        class: [
          'text-secondary-700 border-secondary-700 bg-white',
          'hover:bg-secondary-50',
          'active:bg-secondary-100',
          'disabled:border-secondary-500 disabled:bg-white disabled:text-secondary-500',
        ],
      },
      {
        theme: 'accent',
        variant: 'outline',
        class: [
          'text-accent-700 border-accent-700 bg-white',
          'hover:bg-accent-50',
          'active:bg-accent-100',
          'disabled:border-accent-500 disabled:bg-white disabled:text-accent-500',
        ],
      },
      {
        theme: 'destructive',
        variant: 'outline',
        class: [
          'text-destructive-700 border-destructive-700 bg-white',
          'hover:bg-destructive-50',
          'active:bg-destructive-100',
          'disabled:border-destructive-500 disabled:bg-white disabled:text-destructive-500',
        ],
      },
    ],
    defaultVariants: {
      theme: 'default',
      size: 'default',
      variant: 'default',
    },
  }
);
