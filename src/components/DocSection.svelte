<script lang="ts">
  import { inview } from 'svelte-inview';
  import { cn, scrollIntoView } from '$lib/utils.js';
  import { getHrefFromString } from './utils';

  let className: string | undefined | null = undefined;
  export { className as class };

  export let title: string;
  export let childLevel: 0 | 1 | 2 = 0;

  const id = getHrefFromString(title);

  let inView = false;

  function getTitleClasses() {
    if (childLevel === 0) {
      return 'text-3xl font-bold';
    } else if (childLevel === 1) {
      return 'text-2xl font-semibold';
    } else if (childLevel === 2) {
      return 'text-xl font-medium';
    }
  }
</script>

<div
  {id}
  class={cn('mb-8', className)}
  data-section-title={title}
  data-section-id={id}
  data-section-child-level={childLevel === 0 ? undefined : childLevel}
  data-in-view={inView}
  use:inview={{ rootMargin: '-10% 0px -70%' }}
  on:inview_change={(event) => {
    inView = event.detail.inView;
  }}
>
  <a href="#{id}" class="group" on:click|preventDefault={scrollIntoView}>
    <h3 class="pointer-events-none relative mb-2 {getTitleClasses()}">
      <span class="absolute -left-6 opacity-0 transition-opacity group-hover:opacity-20">#</span>
      {title}
    </h3>
  </a>
  {#if childLevel === 0}
    <hr class="my-2" />
  {/if}
  <p class="mb-4">
    <slot name="description" />
  </p>
  <slot />
</div>
