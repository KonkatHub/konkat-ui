import { cva } from 'class-variance-authority';

export { default as Button } from './Button.svelte';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md ring-offset-slate-900 transition-[transform,_background-color]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-600',
    'active:scale-[98%]',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        default: 'bg-purple-700 text-white hover:bg-purple-700/80',
        destructive: 'bg-red-700 text-white hover:bg-red-700/80',
      },
      size: {
        sm: 'h-9 px-3',
        default: 'h-10 py-2 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
