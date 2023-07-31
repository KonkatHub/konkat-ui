<script lang="ts">
  import Article from '$components/Article.svelte';
  import Button from '$lib/components/button/Button.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';
  import { Drawer, DrawerContent } from '$lib/components/drawer/index.js';
  import CodeInline from '$components/CodeInline.svelte';

  export let data;
</script>

<Article title="Drawer">
  <svelte:fragment slot="description">
    A drawer provide an effective way to display content that needs to be accessed easily but that
    is not the main focus of the page
    <br />
    <br />
    Drawers are often used for navigation, search, and data filters. They can also be used to display
    additional content such as a shopping cart or to provide a form for gathering user information.
  </svelte:fragment>
  <DocSection title="Basic Drawer">
    <svelte:fragment slot="description">
      To create a basic drawer, you need to use the <CodeInline>Drawer</CodeInline> component and the
      <CodeInline>DrawerContent</CodeInline> component. The <CodeInline>DrawerContent</CodeInline> component
      must be a child of the <CodeInline>Drawer</CodeInline> component or an error will be thrown.
    </svelte:fragment>
    <Codeblock code={data.simplestExample} language="svelte">
      <Drawer let:states={{ trigger }}>
        <Button melted={trigger}>Open drawer</Button>
        <DrawerContent
          slot="content"
          title="Drawer title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          let:states={{ close }}
        >
          <Button melted={close}>Close drawer</Button>
        </DrawerContent>
      </Drawer>
    </Codeblock>
  </DocSection>
  <DocSection title="Components" class="mb-0">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas optio nemo quas!
      Officiis commodi illum debitis, magni porro incidunt tempora cupiditate quisquam mollitia iste
      voluptates, praesentium velit a vel.
    </svelte:fragment>
  </DocSection>
  <DocSection title="Drawer" class="mb-0" childLevel={1}>
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas optio nemo quas!
      Officiis commodi illum debitis, magni porro incidunt tempora cupiditate quisquam mollitia iste
      voluptates, praesentium velit a vel.
    </svelte:fragment>
  </DocSection>
  <DocSection title="DrawerContent" childLevel={1}>
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas optio nemo quas!
      Officiis commodi illum debitis, magni porro incidunt tempora cupiditate quisquam mollitia iste
      voluptates, praesentium velit a vel.
    </svelte:fragment>
  </DocSection>
</Article>
