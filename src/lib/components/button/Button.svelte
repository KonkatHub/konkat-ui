<script lang="ts">
  import { ButtonPrimitive, type ButtonProps } from '@konkat/konkat-ui-primitives';
  import { buttonVariants } from './index.js';
  import type { VariantProps } from 'class-variance-authority';
  import { cn } from '$lib/utils.js';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let variant: VariantProps<typeof buttonVariants>['variant'] = 'default';
  export let size: VariantProps<typeof buttonVariants>['size'] = 'default';

  type Props = {
    class?: string | null;
    variant?: VariantProps<typeof buttonVariants>['variant'];
    size?: VariantProps<typeof buttonVariants>['size'];
  };

  type $$Props = ButtonProps & Props;
</script>

<!-- class="rounded bg-purple-800 px-4 py-2 text-purple-100 transition-all hover:bg-purple-900 active:enabled:scale-95 disabled:cursor-not-allowed disabled:bg-purple-800/50 disabled:text-purple-100/50" -->
<ButtonPrimitive
  class={cn(buttonVariants({ variant, size, className }))}
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
