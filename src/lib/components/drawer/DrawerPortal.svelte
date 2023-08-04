<script lang="ts">
  import { melt } from '@melt-ui/svelte';
  import { ctx } from '.';

  const { portal, open } = ctx.getPortal();
</script>

<div use:melt={$portal}>
  {#if $open}
    <slot />
  {/if}
</div>
