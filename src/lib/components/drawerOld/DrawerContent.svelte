<script lang="ts">
  import { cn } from '$lib/utils';
  import { melt } from '@melt-ui/svelte';
  import { context } from '.';
  import { Button } from '../button';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let hideCloseButton = false;

  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;

  const { close, title: meltTitle, description: meltDescription } = context.getDrawerContent();
</script>

{#if !hideCloseButton}
  <slot name="close">
    <Button melted={$close} shape="square" variant="ghost" class="absolute right-2 top-2">
      <iconify-icon icon="ph:x" height="20px" />
    </Button>
  </slot>
{/if}
<div class={cn('flex flex-col gap-2', className)}>
  {#if title || $$slots.title}
    <h2 use:melt={$meltTitle} class="mb-0 text-lg font-medium text-base-content">
      <slot name="title">{title}</slot>
    </h2>
  {/if}
  {#if description || $$slots.description}
    <p use:melt={$meltDescription} class="mb-5 mt-2 leading-normal text-base-content/50">
      <slot name="description">{description}</slot>
    </p>
  {/if}
  <slot />
</div>
