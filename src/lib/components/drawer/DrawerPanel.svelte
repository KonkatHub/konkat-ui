<script lang="ts">
  import { melt } from '@melt-ui/svelte';
  import { DrawerPortal, ctx } from '.';
  import { fade, fly, type FlyParams } from 'svelte/transition';
  import { Button } from '../button';

  let flyParams: FlyParams = {
    x: -350,
    duration: 300,
    opacity: 1,
  };
  export { flyParams as fly };

  export let hideCloseButton = false;

  const { content, close, overlay } = ctx.getPanel();
</script>

<DrawerPortal>
  <div
    use:melt={$overlay}
    class="fixed inset-0 z-50 bg-black/50"
    transition:fade={{
      duration: 150,
    }}
  />
  <div
    use:melt={$content}
    class="fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-background p-4 shadow-lg focus:outline-none"
    transition:fly={flyParams}
  >
    {#if !hideCloseButton}
      <Button melted={$close} shape="square" variant="ghost" class="absolute right-2 top-2">
        <iconify-icon icon="ph:x" height="20px" />
      </Button>
    {/if}
    <slot />
  </div>
</DrawerPortal>
