<script lang="ts">
  import { melt } from '@melt-ui/svelte';
  import { getDrawer } from '.';

  const {
    elements: { portalled: portal },
    states: { open },
  } = getDrawer();
</script>

<div use:melt={$portal}>
  {#if $open}
    <slot />
  {/if}
</div>
