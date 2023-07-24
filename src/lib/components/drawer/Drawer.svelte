<script lang="ts">
  import { createDialog } from '@melt-ui/svelte';
  import { fade, fly } from 'svelte/transition';
  import { cn } from '$lib/utils';
  import { descriptionClasses, drawerContext, titleClasses } from '.';

  const { trigger, portal, overlay, content, title, description, close, open } = createDialog();

  let className: string | undefined | null = undefined;
  export { className as class };
  export let overlayClass: string | undefined | null = undefined;

  export let isOpen = false;

  const { set } = drawerContext();
  set({ close, title, description });

  $: $open = isOpen;
</script>

<slot states={{ trigger: $trigger }} />
<div use:portal>
  {#if $open}
    <div
      melt={$overlay}
      class={cn('fixed inset-0 z-20 bg-black/50', overlayClass)}
      transition:fade={{ duration: 200 }}
    />
    <div
      melt={$content}
      class={cn(
        'fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-background p-4 shadow-lg focus:outline-none',
        className
      )}
      transition:fly={{
        x: -350,
        duration: 400,
        opacity: 1,
      }}
    >
      <slot
        name="content"
        elements={{
          title: {
            class: titleClasses,
            melt: $title,
          },
          description: {
            class: descriptionClasses,
            melt: $description,
          },
        }}
        states={{
          close: $close,
        }}
      />
    </div>
  {/if}
</div>
