<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import { Drawer, DrawerPanel } from '$lib/components/drawer/index.js';
</script>

<div class="flex h-screen w-screen items-center justify-center gap-2">
  <Drawer let:trigger>
    <Button melted={trigger}>Open drawer</Button>
    <DrawerPanel>hello</DrawerPanel>
  </Drawer>
</div>
