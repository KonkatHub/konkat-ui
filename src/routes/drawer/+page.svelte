<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Drawer from '$lib/components/drawer/Drawer.svelte';
  import DrawerContent from '$lib/components/drawer/DrawerContent.svelte';
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <Drawer let:trigger>
    <Button melted={trigger}>Open Drawer</Button>
    <DrawerContent slot="content" let:builders={{ close, title, description }}>
      <h2 slot="title" let:defaults melt={title} class={defaults.class}>Title</h2>
      <p slot="description" let:defaults melt={description} class={defaults.class}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <Button melted={close}>Will close</Button>
    </DrawerContent>
  </Drawer>
</div>
