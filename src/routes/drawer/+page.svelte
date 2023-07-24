<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Drawer from '$lib/components/drawer/Drawer.svelte';
  import DrawerContent from '$lib/components/drawer/DrawerContent.svelte';
  import { writable } from 'svelte/store';

  const isOpen = writable(false);

  function closeAfter1s() {
    $isOpen = true;
    setTimeout(() => ($isOpen = false), 1000);
  }
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <Drawer let:states={{ trigger }} isOpen={$isOpen}>
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
    <DrawerContent slot="content" let:elements={{ title, description }}>
      <h2 melt={title.melt} class={title.class}>My Title</h2>
      <p melt={description.melt} class={description.class}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <Button
        on:click={() => {
          $isOpen = true;
          new Promise(closeAfter1s);
        }}
      >
        Will close after 1s
      </Button>
    </DrawerContent>
  </Drawer>
</div>
