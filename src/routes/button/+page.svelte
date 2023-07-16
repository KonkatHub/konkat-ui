<script lang="ts">
  import Article from '$components/Article.svelte';
  import type { LinkInfo } from '$components/TableOfContent/Link.svelte';
  import Button from '$lib/components/button/Button.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';

  export let data;

  const links: LinkInfo[] = [
    {
      href: '#themes',
      text: 'Themes',
    },
    {
      href: '#active',
      text: 'Active',
    },
    {
      href: '#disabled',
      text: 'Disabled',
    },
    {
      href: '#variants',
      text: 'Variants',
    },
    {
      href: '#sizes',
      text: 'Sizes',
    },
    {
      href: '#shapes',
      text: 'Shapes',
    },
    {
      href: '#icons',
      text: 'Icons',
    },
    {
      href: '#element',
      text: 'Element',
    },
    {
      href: '#events',
      text: 'Events',
    },
  ];
</script>

<Article title="Button" {links}>
  <div class="flex flex-col gap-4">
    <DocSection title="Themes" id="themes">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.themes} metadata="Svelte">
        <div class="flex w-full flex-wrap items-center justify-center gap-2 p-4">
          <Button theme="base">Base</Button>
          <Button theme="neutral">Neutral</Button>
          <Button theme="primary">Primary</Button>
          <Button theme="secondary">Secondary</Button>
          <Button theme="accent">Accent</Button>
          <Button theme="destructive">Destructive</Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Active" id="active">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.active} metadata="Svelte">
        <div class="flex w-full flex-wrap items-center justify-center gap-2 p-4">
          <Button theme="base" active>Base</Button>
          <Button theme="neutral" active>Neutral</Button>
          <Button theme="primary" active>Primary</Button>
          <Button theme="secondary" active>Secondary</Button>
          <Button theme="accent" active>Accent</Button>
          <Button theme="destructive" active>Destructive</Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Disabled" id="disabled">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.disabled} metadata="Svelte">
        <div class="flex w-full flex-wrap items-center justify-center gap-2 p-4">
          <Button theme="base" disabled>Base</Button>
          <Button theme="neutral" disabled>Neutral</Button>
          <Button theme="primary" disabled>Primary</Button>
          <Button theme="secondary" disabled>Secondary</Button>
          <Button theme="accent" disabled>Accent</Button>
          <Button theme="destructive" disabled>Destructive</Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Variants" id="variants">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.variants} metadata="Svelte">
        <div class="flex items-center justify-center gap-2 p-4">
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Sizes" id="sizes">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.sizes} metadata="Svelte">
        <div class="flex items-center justify-center gap-2 p-4">
          <Button size="xs">Tiny</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Shapes" id="shapes">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.shapes} metadata="Svelte">
        <div class="flex items-center justify-center gap-2 p-4">
          <Button>Button</Button>
          <Button shape="pill">Button</Button>
          <Button shape="square">
            <iconify-icon icon="mdi:check" width="24" />
          </Button>
          <Button shape="circle">
            <iconify-icon icon="mdi:check" width="24" />
          </Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Icons" id="icons">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.icons} metadata="Svelte">
        <div class="flex items-center justify-center gap-2 p-4">
          <Button>
            <iconify-icon icon="mdi:cart" width="20" />
            Checkout
          </Button>
          <Button>
            Checkout
            <iconify-icon icon="mdi:cart" width="20" />
          </Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Element" id="element">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.element} metadata="Svelte">
        <div class="flex items-center justify-center gap-2 p-4">
          <Button href="https://github.com/KonkatHub/konkat-ui" target="_blank">
            Github
            <iconify-icon icon="mdi:open-in-new" width="18" />
          </Button>
        </div>
      </Codeblock>
    </DocSection>
    <DocSection title="Events" id="events">
      <svelte:fragment slot="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eaque ipsa harum
        asperiores voluptatibus magnam deserunt quidem molestias magni? Nostrum reprehenderit ipsum
        iusto, officiis est sequi atque amet laborum similique.
      </svelte:fragment>
      <Codeblock code={data.events} metadata="Svelte" />
    </DocSection>
  </div>
</Article>
