<script lang="ts">
  import { buttonVariants, type ButtonProps } from './index.js';
  import type { VariantProps } from 'class-variance-authority';
  import { cn, resolveMelted, type Melted } from '$lib/utils.js';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let theme: VariantProps<typeof buttonVariants>['theme'] = undefined;
  export let variant: VariantProps<typeof buttonVariants>['variant'] = undefined;
  export let shape: VariantProps<typeof buttonVariants>['shape'] = undefined;
  export let size: VariantProps<typeof buttonVariants>['size'] = undefined;
  export let active = false;
  export let melted: Melted | undefined = undefined;

  $: resolvedMelted = resolveMelted(melted);

  export let type: ButtonProps['type'] = 'button';
  export let href: ButtonProps['href'] = undefined;

  type Props = {
    theme?: VariantProps<typeof buttonVariants>['theme'];
    variant?: VariantProps<typeof buttonVariants>['variant'];
    shape?: VariantProps<typeof buttonVariants>['shape'];
    size?: VariantProps<typeof buttonVariants>['size'];
    active?: boolean;
    melted?: Melted;
  };

  type $$Props = ButtonProps & Props;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={href ? 'a' : 'button'}
  type={href ? undefined : type}
  {href}
  class={cn(buttonVariants({ theme, variant, shape, size, className }))}
  data-active={active}
  melt={resolvedMelted}
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
</svelte:element>
