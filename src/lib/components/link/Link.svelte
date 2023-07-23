<script lang="ts">
  import { cn } from '$lib/utils';
  import type { SvelteHTMLElements } from 'svelte/elements';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let href: string;
  export let target: SvelteHTMLElements['a']['target'] = undefined;
  export let blank = false;

  if (blank) {
    target = '_blank';
  }
</script>

<a {href} {target} class={cn('underline', className)}>
  <slot />
</a>
