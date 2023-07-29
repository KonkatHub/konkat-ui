<script lang="ts">
  import Article from '$components/Article.svelte';
  import type { LinkInfo } from '$components/TableOfContent/Link.svelte';
  import Button from '$lib/components/button/Button.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';
  import { Drawer, DrawerContent } from '$lib/components/drawer/index.js';

  export let data;

  const links: LinkInfo[] = [
    {
      href: '#simplest-example',
      text: 'Simplest Example',
    },
  ];
</script>

<Article title="Button" {links}>
  <DocSection title="Simplest example" id="simplest-example">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
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
</Article>
