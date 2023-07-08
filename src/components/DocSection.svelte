<script lang="ts">
  import { scrollIntoView } from '$lib/utils';

  export let title: string;
  export let id: string;
</script>

<div class="mb-8">
  <a href="#{id}" class="group" on:click|preventDefault={scrollIntoView}>
    <h3 class="group pointer-events-none relative mb-2 text-3xl" {id}>
      <span class="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-20">#</span>
      {title}
    </h3>
  </a>
  <p class="mb-4">
    <slot name="description" />
  </p>
  <slot />
</div>
