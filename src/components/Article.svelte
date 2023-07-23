<script lang="ts">
  import type { LinkInfo } from './TableOfContent/Link.svelte';
  import Table from './TableOfContent/Table.svelte';

  export let title: string;
  export let links: LinkInfo[];
</script>

<article class="w-full">
  <h1 class="text-5xl font-bold">{title}</h1>
  <hr class="my-8" />
  <div class="flex flex-col gap-4">
    <slot />
  </div>
</article>
<aside class="w-full sm:w-1/5">
  <Table {links} class="sticky top-28" />
</aside>
