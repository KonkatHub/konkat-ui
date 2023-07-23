<script lang="ts">
  import { inview } from 'svelte-inview';
  import { scrollIntoView } from '$lib/utils.js';

  export let title: string;
  export let id: string;

  let inView = false;
</script>

<div
  {id}
  class="mb-8"
  data-in-view={inView}
  use:inview={{ rootMargin: '-10% 0px -70%' }}
  on:inview_change={(event) => {
    inView = event.detail.inView;
  }}
>
  <a href="#{id}" class="group" on:click|preventDefault={scrollIntoView}>
    <h3 class="pointer-events-none relative mb-2 text-3xl">
      <span class="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-20">#</span>
      {title}
    </h3>
  </a>
  <p class="mb-4">
    <slot name="description" />
  </p>
  <slot />
</div>
