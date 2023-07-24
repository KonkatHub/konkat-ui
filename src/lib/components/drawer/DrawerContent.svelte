<script lang="ts">
  import { cn } from '$lib/utils';
  import { drawerContext } from '.';
  import { Button } from '../button';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let hideCloseButton = false;

  const { get } = drawerContext();
  const { close, title, description } = get('DrawerContent');
</script>

{#if !hideCloseButton}
  <Button melted={$close} shape="square" variant="ghost" class="absolute right-2 top-2">
    <iconify-icon icon="ph:x" height="20px" />
  </Button>
{/if}
{#if $$slots.title}
  <h2 melt={$title} class="mb-0 text-lg font-medium text-base-content">
    <slot name="title" />
  </h2>
{/if}
{#if $$slots.description}
  <p melt={$description} class="mb-5 mt-2 leading-normal text-base-content/50">
    <slot name="description" />
  </p>
{/if}
<div class={cn('flex flex-col gap-2', className)}>
  <slot close={$close} title={$title} description={$description} />
</div>
