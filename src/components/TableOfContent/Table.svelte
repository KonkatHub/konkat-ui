<script lang="ts">
  import { writable } from 'svelte/store';
  import Link, { type LinkInfo } from './Link.svelte';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let links: LinkInfo[];
  export let isNested = false;

  const activeId = writable<string | null>(null);
</script>

<ul class={className}>
  {#each links as link}
    <Link {link} {isNested} {activeId} />
  {/each}
</ul>
