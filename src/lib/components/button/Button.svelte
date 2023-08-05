<script lang="ts">
  import { buttonVariants, type ButtonProps } from './index.js';
  import { cn, resolveMelted, type Melted } from '$lib/utils.js';
  import { melt } from '@melt-ui/svelte';

  let className: ButtonProps['class'] = undefined;
  export { className as class };
  export let theme: ButtonProps['theme'] = undefined;
  export let variant: ButtonProps['variant'] = undefined;
  export let shape: ButtonProps['shape'] = undefined;
  export let size: ButtonProps['size'] = undefined;
  export let active: ButtonProps['active'] = false;

  export let type: ButtonProps['type'] = 'button';
  export let href: ButtonProps['href'] = undefined;

  export let melted: Melted | undefined = undefined;

  $: resolvedMelted = resolveMelted(melted);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={href ? 'a' : 'button'}
  type={href ? undefined : type}
  {href}
  class={cn(buttonVariants({ theme, variant, shape, size, className }))}
  data-active={active}
  use:melt={resolvedMelted}
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
