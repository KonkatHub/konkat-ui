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
          'bg-base text-base-content',
          'hover:bg-base-focus',
          'active:bg-base-focus data-[active=true]:bg-base-focus',
          'focus-visible:outline-base',
          'disabled:hover:bg-base',
        ],
        neutral: [
          'bg-neutral text-neutral-content',
          'hover:bg-neutral-focus',
          'active:bg-neutral-focus data-[active=true]:bg-neutral-focus',
          'focus-visible:outline-neutral',
          'disabled:bg-opacity-20 disabled:text-neutral-focus',
        ],
        primary: [
          'bg-primary text-primary-content',
          'hover:bg-primary-focus',
          'active:bg-primary-focus data-[active=true]:bg-primary-focus',
          'focus-visible:outline-primary',
          'disabled:bg-opacity-20 disabled:text-primary-focus',
        ],
        secondary: [
          'bg-secondary text-secondary-content',
          'hover:bg-secondary-focus',
          'active:bg-secondary-focus data-[active=true]:bg-secondary-focus',
          'focus-visible:outline-secondary',
          'disabled:bg-opacity-20 disabled:text-secondary-focus',
        ],
        accent: [
          'bg-accent text-accent-content',
          'hover:bg-accent-focus',
          'active:bg-accent-focus data-[active=true]:bg-accent-focus',
          'focus-visible:outline-accent',
          'disabled:bg-opacity-20 disabled:text-accent-focus',
        ],
        destructive: [
          'bg-destructive ext-destructive-content',
          'hover:bg-destructive-focus',
          'active:bg-destructive-focus data-[active=true]:bg-destructive-focus',
          'focus-visible:outline-destructive',
          'disabled:bg-opacity-20 disabled:text-destructive-focus',
        ],
      },
      variant: {
        outline: [
          'border border-solid bg-opacity-0',
          'hover:bg-opacity-10',
          'active:bg-opacity-20 data-[active=true]:bg-opacity-20',
          'disabled:bg-transparent',
        ],
        flat: [
          'bg-opacity-10 border-none',
          'hover:bg-opacity-20',
          'active:bg-opacity-30 data-[active=true]:bg-opacity-30',
          'disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent',
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
          'text-base-content/75 border-base-content/75',
          'hover:bg-base-content/5',
          'active:bg-base-content/10 data-[active=true]:bg-base-content/10',
          'disabled:hover:bg-transparent',
        ],
      },
      {
        theme: 'neutral',
        variant: 'outline',
        // class: ['text-neutral border-neutral'],
        class: [
          'text-neutral border-neutral',
          'hover:bg-neutral/5',
          'active:bg-neutral/10 data-[active=true]:bg-neutral/10',
          'disabled:hover:bg-transparent',
        ],
      },
      {
        theme: 'primary',
        variant: 'outline',
        class: ['text-primary border-primary'],
      },
      {
        theme: 'secondary',
        variant: 'outline',
        class: ['text-secondary border-secondary'],
      },
      {
        theme: 'accent',
        variant: 'outline',
        class: ['text-accent border-accent'],
      },
      {
        theme: 'destructive',
        variant: 'outline',
        class: ['text-destructive border-destructive'],
      },
      {
        theme: 'base',
        variant: 'link',
        class: 'active:bg-base-content/10 data-[active=true]:bg-base-content/10',
      },
      {
        theme: 'base',
        variant: ['ghost'],
        class: [
          'hover:bg-base-content/5',
          'active:bg-base-content/10 data-[active=true]:bg-base-content/10',
        ],
      },
      {
        theme: 'base',
        variant: 'flat',
        class: [
          'bg-base-content/5 text-base-content',
          'hover:bg-base-content/10',
          'active:bg-base-content/20 data-[active=true]:bg-base-content/20',
        ],
      },
      {
        theme: 'neutral',
        variant: ['ghost', 'flat', 'link'],
        class: ['text-neutral'],
      },
      {
        theme: 'primary',
        variant: ['ghost', 'flat', 'link'],
        class: ['text-primary'],
      },
      {
        theme: 'secondary',
        variant: ['ghost', 'flat', 'link'],
        class: ['text-secondary'],
      },
      {
        theme: 'accent',
        variant: ['ghost', 'flat', 'link'],
        class: ['text-accent'],
      },
      {
        theme: 'destructive',
        variant: ['ghost', 'flat', 'link'],
        class: ['text-destructive'],
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
