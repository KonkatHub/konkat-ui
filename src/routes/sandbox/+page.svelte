<script lang="ts">
  import {
    Drawer,
    DrawerTrigger,
    DrawerPanel,
    DrawerHeader,
    DrawerContent,
    DrawerFooter,
  } from '$lib/components/drawer/index.js';
</script>

<div class="flex h-screen w-screen items-center justify-center gap-2">
  <Drawer>
    <DrawerTrigger content="Open drawer" />
    <DrawerPanel>
      <DrawerHeader title="My title" description="My description" />
      <DrawerContent>Content</DrawerContent>
      <DrawerFooter>Footer</DrawerFooter>
    </DrawerPanel>
  </Drawer>
</div>
