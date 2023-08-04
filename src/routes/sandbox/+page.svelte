<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Drawer from '$lib/components/drawer/Drawer.svelte';
  import DrawerContent from '$lib/components/drawer/DrawerContent.svelte';
  import { melt } from '@melt-ui/svelte';
</script>

<div class="flex h-screen w-screen items-center justify-center gap-2">
  <Drawer let:elements={{ trigger }}>
    <!-- <Button melted={trigger}>Open Drawer</Button> -->
    <button use:melt={trigger}>Open Drawer</button>

    <DrawerContent slot="content" let:elements={{ title, description, close }}>
      <h3 slot="title" use:melt={title}>Drawer Title</h3>
      <p slot="description" use:melt={description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab nulla a sed eveniet
        voluptatibus cum nesciunt iste tempora nihil.
      </p>
      <!-- <Button melted={close}>Close</Button> -->
      <button use:melt={close} />
    </DrawerContent>
  </Drawer>
</div>
