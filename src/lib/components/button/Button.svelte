<script lang="ts">
  import { ButtonPrimitive, type ButtonProps } from '@konkat/konkat-ui-primitives';
  import { buttonVariants } from './index.js';
  import type { VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils.js';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let theme: VariantProps<typeof buttonVariants>['theme'] = 'default';
  export let variant: VariantProps<typeof buttonVariants>['variant'] = 'default';
  export let shape: VariantProps<typeof buttonVariants>['shape'] = 'default';
  export let size: VariantProps<typeof buttonVariants>['size'] = 'default';

  type Props = {
    class?: string | null;
    theme?: VariantProps<typeof buttonVariants>['theme'];
    variant?: VariantProps<typeof buttonVariants>['variant'];
    shape?: VariantProps<typeof buttonVariants>['shape'];
    size?: VariantProps<typeof buttonVariants>['size'];
  };

  type $$Props = ButtonProps & Props;
</script>

<ButtonPrimitive
  class={cn(buttonVariants({ theme, variant, shape, size, className }))}
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:touchstart
  on:touchend
  on:touchcancel
  on:mouseenter
  on:mouseleave
>
  <slot />
</ButtonPrimitive>
