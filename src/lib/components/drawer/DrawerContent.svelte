<script lang="ts">
  import { cn } from '$lib/utils';
  import { drawerContext } from '.';
  import { Button } from '../button';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let hideCloseButton = false;

  const { get } = drawerContext();
  const { close, title, description } = get('DrawerContent');

  const defaults = {
    class: 'absolute right-2 top-2',
    icon: 'ph:x',
    height: '20px',
  };
</script>

{#if !hideCloseButton}
  <slot name="close" {defaults}>
    <Button melted={$close} shape="square" variant="ghost" class={defaults.class}>
      <iconify-icon icon={defaults.icon} height={defaults.height} />
    </Button>
  </slot>
{/if}
<div class={cn('flex flex-col gap-2', className)}>
  <slot name="title" defaults={{ class: 'mb-0 text-lg font-medium text-base-content' }} />
  <slot name="description" defaults={{ class: 'mb-5 mt-2 leading-normal text-base-content/50' }} />
  <slot />
</div>
