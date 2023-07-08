<script lang="ts">
  import Link, { type LinkInfo } from './Link.svelte';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let links: LinkInfo[];
  export let isNested = false;
</script>

<ul class={className}>
  {#each links as link}
    <Link {link} {isNested} />
  {/each}
</ul>
