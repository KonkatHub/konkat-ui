<script lang="ts">
  import type { LinkInfo } from './TableOfContent/Link.svelte';
  import Table from './TableOfContent/Table.svelte';

  export let title: string;
  export let description: string | undefined = undefined;
  export let links: LinkInfo[];
</script>

<article class="w-full xl:w-3/4">
  <h1 class="text-5xl font-bold">{title}</h1>
  {#if description || $$slots.description}
    <p class="mt-2 text-base-content/75">
      <slot name="description">
        {description}
      </slot>
    </p>
  {/if}
  <hr class="mb-8 mt-4" />
  <div class="flex flex-col gap-4">
    <slot />
  </div>
</article>
<aside class="hidden w-1/4 xl:block">
  <Table {links} class="sticky top-28" />
</aside>
