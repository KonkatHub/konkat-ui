<script lang="ts">
  import Article from '$components/Article.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';
  import {
    Drawer,
    DrawerTrigger,
    DrawerPanel,
    DrawerHeader,
    DrawerContent,
    DrawerFooter,
  } from '$lib/components/drawer/index.js';

  export let data;
</script>

<Article title="Drawer">
  <svelte:fragment slot="description">
    A drawer provides an effective way to display content that needs to be accessed easily but that
    is not the main focus of the page
    <br />
    <br />
    Drawers are often used for navigation, search, and data filters. They can also be used to display
    additional content such as a shopping cart or to provide a form for gathering user information.
  </svelte:fragment>
  <DocSection title="Basic Drawer">
    <svelte:fragment slot="description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates debitis dignissimos
      magnam impedit enim, possimus laborum eligendi voluptatem sed quidem ducimus ad asperiores.
      Voluptatum obcaecati optio officia laborum blanditiis ipsum.
    </svelte:fragment>
    <Codeblock code={data.basicDrawer} language="svelte">
      <Drawer>
        <DrawerTrigger content="Open drawer" />
        <DrawerPanel>
          <DrawerHeader title="My title" description="My description" />
          <DrawerContent>Content</DrawerContent>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerPanel>
      </Drawer>
    </Codeblock>
  </DocSection>
</Article>
