import { cva } from 'class-variance-authority';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

interface AnchorElement extends HTMLAnchorAttributes {
  href?: HTMLAnchorAttributes['href'];
  type?: never;
}

interface ButtonElement extends HTMLButtonAttributes {
  type?: HTMLButtonAttributes['type'];
  href?: never;
}

export type ButtonProps = AnchorElement | ButtonElement;
export { default as Button } from './Button.svelte';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md transition-[transform,_background-color]',
    'active:enabled:scale-[98%]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      theme: {
        default: [
          'bg-primary text-white ',
          'hover:bg-primary-600',
          'active:bg-primary-700',
          'focus-visible:outline-primary',
          'disabled:bg-primary-200 disabled:text-primary-700',
        ],
        secondary: [
          'bg-secondary text-white',
          'hover:bg-secondary-600',
          'active:bg-secondary-700',
          'focus-visible:outline-secondary',
          'disabled:bg-secondary-200 disabled:text-secondary-700',
        ],
        accent: [
          'bg-accent text-white',
          'hover:bg-accent-600',
          'active:bg-accent-700',
          'focus-visible:outline-accent',
          'disabled:bg-accent-200 disabled:text-accent-700',
        ],
        destructive: [
          'bg-destructive text-white',
          'hover:bg-destructive-600',
          'active:bg-destructive-700',
          'focus-visible:outline-destructive',
          'disabled:bg-destructive-200 disabled:text-destructive-700',
        ],
      },
      variant: {
        default: '',
        outline: 'border border-solid',
      },
      shape: {
        default: '',
        pill: 'rounded-full',
        square: 'aspect-square',
        circle: 'rounded-full aspect-square',
      },
      size: {
        xs: 'h-8 px-2 text-sm',
        sm: 'h-9 px-3',
        default: 'h-10 px-4',
        lg: 'h-12 px-8 text-lg',
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
          'focus-visible:outline-primary-700',
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
          'focus-visible:outline-secondary-700',
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
          'focus-visible:outline-accent-700',
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
          'focus-visible:outline-destructive-700',
          'disabled:border-destructive-500 disabled:bg-white disabled:text-destructive-500',
        ],
      },
    ],
    defaultVariants: {
      theme: 'default',
      variant: 'default',
      shape: 'default',
      size: 'default',
    },
  }
);
