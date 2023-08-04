<script lang="ts">
  import { melt } from '@melt-ui/svelte';
  import { context, type CreateDialogProps } from '.';
  import { cn } from '$lib/utils';
  import { fade, fly } from 'svelte/transition';

  /**
   * The role attribute of the dialog element.
   * @default 'dialog'
   */
  export let role: CreateDialogProps['role'] = 'dialog';

  /**
   * Whether or not to prevent scrolling of the document when the dialog is open.
   * @default true
   */
  export let preventScroll: CreateDialogProps['preventScroll'] = true;

  /**
   * Whether or not to close the dialog when the escape key is pressed.
   * @default true
   */
  export let closeOnEscape: CreateDialogProps['closeOnEscape'] = true;

  /**
   * Whether or not to close the dialog when the user clicks outside of it.
   * @default true
   */
  export let closeOnOutsideClick: CreateDialogProps['closeOnOutsideClick'] = true;

  /**
   * The element or selector to render the dialog into. Nested floating elements are automatically
   * rendered into their parent if not specified.
   * @default 'body'
   */
  export let portal: CreateDialogProps['portal'] = 'body';

  /**
   * Whether or not to force the dialog to always be visible. This is useful for custom transitions
   * and animations using conditional blocks.
   * @default false
   */
  export let forceVisible: CreateDialogProps['forceVisible'] = false;

  /**
   * Whether the dialog is open by default or not.
   * @default false
   */
  export let defaultOpen: CreateDialogProps['defaultOpen'] = false;

  /**
   * A writable store that controls whether or not the dialog is open
   * @default undefined
   * @see [Bring Your Own Store](https://www.melt-ui.com/docs/controlled#bring-your-own-store)
   */
  export let open: CreateDialogProps['open'] = undefined;

  /**
   * A callback called when the value of the open store should be changed.
   * @default undefined
   * @see [Change Functions](https://www.melt-ui.com/docs/controlled#change-functions)
   */
  export let onOpenChange: CreateDialogProps['onOpenChange'] = undefined;

  context.setDrawerRoot({
    role,
    preventScroll,
    closeOnEscape,
    closeOnOutsideClick,
    portal,
    forceVisible,
    defaultOpen,
    open,
    onOpenChange,
  });

  const { content, overlay, portalled, trigger, open: openState } = context.getDrawerRoot();
  const { title, description, close } = context.getDrawerContent();
</script>

<slot elements={{ trigger: $trigger }} />
<div use:melt={$portalled}>
  {#if $openState}
    <div
      use:melt={$overlay}
      class={cn('fixed inset-0 z-20 bg-black/50')}
      transition:fade={{
        duration: 200,
      }}
    />
    <div
      use:melt={$content}
      class={cn(
        'fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-background p-4 shadow-lg focus:outline-none'
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
          title: $title,
          description: $description,
          close: $close,
        }}
      />
    </div>
  {/if}
</div>
