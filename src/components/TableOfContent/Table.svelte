<script lang="ts">
  import { cn } from '$lib/utils';
  import Link, { type LinkInfo } from './Link.svelte';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let links: LinkInfo[];
</script>

<ul class={cn('space-y-4', className)}>
  {#each links as link}
    <Link {link} />
  {/each}
</ul>
