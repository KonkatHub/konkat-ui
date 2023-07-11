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
    'inline-flex text-white items-center justify-center gap-2 rounded-md transition-[transform,_background-color]',
    'active:enabled:scale-[98%]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ],
  {
    variants: {
      theme: {
        base: [
          'bg-base-300 text-neutral-800',
          'hover:bg-base-400',
          'active:bg-base-500 data-[active=true]:bg-base-500',
          'focus-visible:outline-neutral-700',
          'disabled:hover:bg-base-200',
        ],
        neutral: [
          'bg-neutral-700 text-neutral-50',
          'hover:bg-neutral-900',
          'active:bg-neutral-950 data-[active=true]:bg-neutral-950',
          'focus-visible:outline-neutral-700',
          'disabled:bg-neutral-200 disabled:text-neutral-800',
        ],
        primary: [
          'bg-primary-500',
          'hover:bg-primary-600',
          'active:bg-primary-700 data-[active=true]:bg-primary-700',
          'focus-visible:outline-primary-500',
          'disabled:bg-primary-200 disabled:text-primary-700',
        ],
        secondary: [
          'bg-secondary-500',
          'hover:bg-secondary-600',
          'active:bg-secondary-700 data-[active=true]:bg-secondary-700',
          'focus-visible:outline-secondary-500',
          'disabled:bg-secondary-200 disabled:text-secondary-700',
        ],
        accent: [
          'bg-accent-500',
          'hover:bg-accent-600',
          'active:bg-accent-700 data-[active=true]:bg-accent-700',
          'focus-visible:outline-accent-500',
          'disabled:bg-accent-200 disabled:text-accent-700',
        ],
        destructive: [
          'bg-destructive-500',
          'hover:bg-destructive-600',
          'active:bg-destructive-700 data-[active=true]:bg-destructive-700',
          'focus-visible:outline-destructive-500',
          'disabled:bg-destructive-200 disabled:text-destructive-700',
        ],
      },
      variant: {
        outline: [
          'border border-solid bg-opacity-0',
          'hover:bg-opacity-10',
          'active:bg-opacity-20 data-[active=true]:bg-opacity-20',
          'disabled:bg-transparent',
        ],
        ghost: [
          'bg-transparent border-none',
          'hover:bg-opacity-10',
          'active:bg-opacity-20 data-[active=true]:bg-opacity-20',
          'disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent',
        ],
        link: [
          'underline bg-transparent',
          'hover:bg-transparent',
          'active:bg-opacity-20 data-[active=true]:bg-opacity-20',
          'disabled:bg-transparent disabled:hover:bg-transparenactive:bg-opacity-20',
        ],
      },
      shape: {
        pill: 'rounded-full',
        square: 'aspect-square',
        circle: 'rounded-full aspect-square',
      },
      size: {
        xs: 'h-8 px-2 text-sm',
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-8 text-lg',
      },
    },
    compoundVariants: [
      {
        theme: 'base',
        variant: 'outline',
        class: [
          'text-neutral-700 border-neutral-700',
          'hover:bg-neutral-700',
          'active:bg-neutral-700 data-[active=true]:bg-neutral-700',
          'disabled:hover:bg-transparent',
        ],
      },
      {
        theme: 'neutral',
        variant: 'outline',
        class: ['text-neutral-700 border-neutral-700'],
      },
      {
        theme: 'primary',
        variant: 'outline',
        class: ['text-primary-700 border-primary-700'],
      },
      {
        theme: 'secondary',
        variant: 'outline',
        class: ['text-secondary-700 border-secondary-700'],
      },
      {
        theme: 'accent',
        variant: 'outline',
        class: ['text-accent-700 border-accent-700'],
      },
      {
        theme: 'destructive',
        variant: 'outline',
        class: ['text-destructive-700 border-destructive-700'],
      },
      {
        theme: 'base',
        variant: 'link',
        class: 'active:bg-opacity-100 data-[active=true]:bg-opacity-100',
      },
      {
        theme: 'base',
        variant: 'ghost',
        class: ['hover:bg-opacity-50', 'active:bg-opacity-70 data-[active=true]:bg-opacity-70'],
      },
      {
        theme: 'neutral',
        variant: ['ghost', 'link'],
        class: ['text-neutral-700'],
      },
      {
        theme: 'primary',
        variant: ['ghost', 'link'],
        class: ['text-primary-700'],
      },
      {
        theme: 'secondary',
        variant: ['ghost', 'link'],
        class: ['text-secondary-700'],
      },
      {
        theme: 'accent',
        variant: ['ghost', 'link'],
        class: ['text-accent-700'],
      },
      {
        theme: 'destructive',
        variant: ['ghost', 'link'],
        class: ['text-destructive-700'],
      },
      {
        size: ['xs', 'sm', 'md', 'lg'],
        shape: ['square', 'circle'],
        class: 'px-0',
      },
    ],
    defaultVariants: {
      theme: 'base',
      size: 'md',
    },
  }
);
