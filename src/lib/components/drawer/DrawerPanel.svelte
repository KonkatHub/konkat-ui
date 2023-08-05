<script lang="ts">
  import { melt } from '@melt-ui/svelte';
  import { DrawerPortal, getDrawer } from '.';
  import { fade, fly, type FlyParams } from 'svelte/transition';
  import { Button } from '../button';
  import { cn } from '$lib/utils';

  let className: string | null | undefined = undefined;
  export { className as class };

  let flyParams: FlyParams = {
    x: -350,
    duration: 300,
    opacity: 1,
  };
  export { flyParams as fly };

  export let hideCloseButton = false;

  const {
    elements: { content, close, overlay },
  } = getDrawer();
</script>

<DrawerPortal>
  <div
    use:melt={$overlay}
    class="fixed inset-0 z-50 bg-black/50 backdrop-blur-[4px]"
    transition:fade={{ duration: 150 }}
  />
  <div
    use:melt={$content}
    transition:fly={flyParams}
    class={cn(
      'fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-background p-4 shadow-lg focus:outline-none',
      className
    )}
  >
    {#if !hideCloseButton}
      <Button
        melted={$close}
        shape="square"
        variant="ghost"
        size="sm"
        class="absolute right-2 top-2"
      >
        <iconify-icon icon="ph:x" height="20px" />
      </Button>
    {/if}
    <div class="flex h-full flex-col">
      <slot />
    </div>
  </div>
</DrawerPortal>
