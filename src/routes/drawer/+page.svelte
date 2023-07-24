<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Drawer from '$lib/components/drawer/Drawer.svelte';
  import DrawerContent from '$lib/components/drawer/DrawerContent.svelte';
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <Drawer let:trigger>
    <Button melted={trigger}>Open Drawer</Button>
    <DrawerContent slot="content" let:close>
      <svelte:fragment slot="title">Title</svelte:fragment>
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem nesciunt
        tenetur ut aperiam ullam impedit consequatur explicabo inventore aspernatur dignissimos at,
        pariatur natus. Nulla sed molestiae quis deleniti aut!
      </svelte:fragment>
      <Button melted={close} theme="primary">Will close</Button>
    </DrawerContent>
  </Drawer>
</div>
