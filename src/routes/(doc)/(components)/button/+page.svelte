<script lang="ts">
  import Article from '$components/Article.svelte';
  import Button from '$lib/components/button/Button.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';

  export let data;
</script>

<Article title="Button">
  <DocSection title="Themes">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.themes} language="svelte">
      <Button theme="base">Base</Button>
      <Button theme="neutral">Neutral</Button>
      <Button theme="primary">Primary</Button>
      <Button theme="secondary">Secondary</Button>
      <Button theme="accent">Accent</Button>
      <Button theme="destructive">Destructive</Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Active">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.active} language="svelte">
      <Button theme="base" active>Base</Button>
      <Button theme="neutral" active>Neutral</Button>
      <Button theme="primary" active>Primary</Button>
      <Button theme="secondary" active>Secondary</Button>
      <Button theme="accent" active>Accent</Button>
      <Button theme="destructive" active>Destructive</Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Disabled">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.disabled} language="svelte">
      <Button theme="base" disabled>Base</Button>
      <Button theme="neutral" disabled>Neutral</Button>
      <Button theme="primary" disabled>Primary</Button>
      <Button theme="secondary" disabled>Secondary</Button>
      <Button theme="accent" disabled>Accent</Button>
      <Button theme="destructive" disabled>Destructive</Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Variants">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.variants} language="svelte">
      <Button variant="outline">Outline</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Sizes">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.sizes} language="svelte">
      <Button size="xs">Tiny</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Shapes">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.shapes} language="svelte">
      <Button>Button</Button>
      <Button shape="pill">Button</Button>
      <Button shape="square">
        <iconify-icon icon="mdi:check" width="24" />
      </Button>
      <Button shape="circle">
        <iconify-icon icon="mdi:check" width="24" />
      </Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Icons">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.icons} language="svelte">
      <Button>
        <iconify-icon icon="mdi:cart" width="20" />
        Checkout
      </Button>
      <Button>
        Checkout
        <iconify-icon icon="mdi:cart" width="20" />
      </Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Element">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.element} language="svelte">
      <Button href="https://github.com/KonkatHub/konkat-ui" target="_blank">
        Github
        <iconify-icon icon="mdi:open-in-new" width="18" />
      </Button>
    </Codeblock>
  </DocSection>
  <DocSection title="Events">
    <svelte:fragment slot="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum asperiores
      voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum iusto,
      officiis est sequi atque amet laborum similique.
    </svelte:fragment>
    <Codeblock code={data.events} language="svelte" />
  </DocSection>
</Article>
