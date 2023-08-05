<script lang="ts">
  import { melt } from '@melt-ui/svelte';
  import { getDrawer } from '.';

  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;

  const {
    elements: { title: meltTitle, description: meltDescription },
  } = getDrawer();
</script>

{#if title || $$slots.titleAsChild || $$slots.title}
  <slot name="titleAsChild" title={$meltTitle}>
    <h3 class="mb-2 text-3xl font-bold" use:melt={$meltTitle}>
      <slot name="title">{title}</slot>
    </h3>
  </slot>
{/if}
{#if description || $$slots.descriptionAsChild || $$slots.description}
  <slot name="descriptionAsChild" description={$meltDescription}>
    <p class="opacity-70" use:melt={$meltDescription}>
      <slot name="description">{description}</slot>
    </p>
  </slot>
{/if}
