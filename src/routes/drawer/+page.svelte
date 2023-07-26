<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Drawer from '$lib/components/drawer/Drawer.svelte';
  import DrawerContent from '$lib/components/drawer/DrawerContent.svelte';
  import Link from '$lib/components/link/Link.svelte';
  import { writable } from 'svelte/store';
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <Drawer let:states={{ trigger }}>
    <Button melted={trigger}>Open Drawer</Button>
    <DrawerContent
      slot="content"
      title="My Title"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      let:states={{ close }}
    >
      <Button melted={close}>Will close</Button>
    </DrawerContent>
  </Drawer>

  <Drawer let:states={{ trigger }}>
    <Button melted={trigger}>Open Drawer</Button>
    <DrawerContent slot="content" title="My Title" let:states={{ close }}>
      <svelte:fragment slot="description">
        Lorem <Link blank href="https://github.com/KonkatHub/konkat-ui">ipsum</Link> dolor sit, amet
        consectetur adipisicing elit.
      </svelte:fragment>
      <Button melted={close}>Will close</Button>
    </DrawerContent>
  </Drawer>

  <Drawer let:states={{ trigger }}>
    <Button melted={trigger}>Open Drawer</Button>
    <DrawerContent slot="content" let:states={{ setOpen }}>
      <svelte:fragment slot="title">My Title</svelte:fragment>
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </svelte:fragment>
      <Button
        on:click={() => {
          setTimeout(() => setOpen(false), 1000);
        }}
      >
        Will close after 1s
      </Button>
    </DrawerContent>
  </Drawer>
</div>
