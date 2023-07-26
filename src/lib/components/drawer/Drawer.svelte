<script lang="ts" context="module">
  type OverlayOptions = {
    class?: string | undefined | null;
    duration?: number;
  };

  type DrawerOptions = {
    class?: string | undefined | null;
    x?: number;
    duration?: number;
    opacity?: number;
  };
</script>

<script lang="ts">
  import { createDialog } from '@melt-ui/svelte';
  import { fade, fly } from 'svelte/transition';
  import { cn } from '$lib/utils';
  import { drawerContext } from '.';

  const {
    trigger,
    portal,
    overlay: meltOverlay,
    content,
    title,
    description,
    close,
    open,
  } = createDialog();

  export let overlay: OverlayOptions = {};
  export let drawer: DrawerOptions = {};

  export let isOpen = false;

  const { set } = drawerContext();
  set({ close, title, description });

  function setOpen(value: boolean) {
    $open = value;
  }

  $: $open = isOpen;
</script>

<slot states={{ trigger: $trigger }} />
<div use:portal>
  {#if $open}
    <div
      melt={$meltOverlay}
      class={cn('fixed inset-0 z-20 bg-black/50', overlay.class)}
      transition:fade={{
        duration: overlay.duration ?? 200,
      }}
    />
    <div
      melt={$content}
      class={cn(
        'fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-background p-4 shadow-lg focus:outline-none',
        drawer.class
      )}
      transition:fly={{
        x: drawer.x ?? -350,
        duration: drawer.duration ?? 400,
        opacity: drawer.opacity ?? 1,
      }}
    >
      <slot
        name="content"
        elements={{
          title: $title,
          description: $description,
        }}
        states={{
          close: $close,
          setOpen,
        }}
      />
    </div>
  {/if}
</div>
