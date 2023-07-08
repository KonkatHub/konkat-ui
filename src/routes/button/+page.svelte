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
      href: '#variants',
      text: 'Variants',
    },
    {
      href: '#size',
      text: 'Size',
    },
    {
      href: '#disabled',
      text: 'Disabled',
    },
    {
      href: '#icons',
      text: 'Icons',
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
        <div class="flex items-center justify-center gap-2 p-4">
          <Button theme="base">Base</Button>
          <Button theme="neutral">Neutral</Button>
          <Button theme="primary">Primary</Button>
          <Button theme="secondary">Secondary</Button>
          <Button theme="accent">Accent</Button>
          <Button theme="destructive">Destructive</Button>
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

    <!-- <div class="flex gap-2">
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="base" variant="link">Link</Button>
      <Button theme="neutral" variant="link">Link</Button>
      <Button theme="primary" variant="link">Link</Button>
      <Button theme="secondary" disabled variant="link">Link</Button>
      <Button theme="accent" variant="link">Link</Button>
      <Button theme="destructive" variant="link">Link</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="base" variant="ghost">Ghost</Button>
      <Button theme="neutral" variant="ghost">Ghost</Button>
      <Button theme="primary" variant="ghost">Ghost</Button>
      <Button theme="secondary" variant="ghost">Ghost</Button>
      <Button theme="accent" variant="ghost">Ghost</Button>
      <Button theme="destructive" variant="ghost">Ghost</Button>
    </div>
    <div class="flex gap-2">
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="outline" disabled>Button</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="neutral">Button</Button>
      <Button theme="neutral" disabled>Button</Button>
      <Button theme="neutral" variant="outline">Button</Button>
      <Button theme="neutral" variant="outline" disabled>Button</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="primary">Button</Button>
      <Button theme="primary" disabled>Button</Button>
      <Button theme="primary" variant="outline">Button</Button>
      <Button theme="primary" variant="outline" disabled>Button</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="secondary">Button</Button>
      <Button theme="secondary" disabled>Button</Button>
      <Button theme="secondary" variant="outline">Button</Button>
      <Button theme="secondary" variant="outline" disabled>Button</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="accent">Button</Button>
      <Button theme="accent" disabled>Button</Button>
      <Button theme="accent" variant="outline">Button</Button>
      <Button theme="accent" variant="outline" disabled>Button</Button>
    </div>
    <div class="flex gap-2">
      <Button theme="destructive">Button</Button>
      <Button theme="destructive" disabled>Button</Button>
      <Button theme="destructive" variant="outline">Button</Button>
      <Button theme="destructive" variant="outline" disabled>Button</Button>
    </div> -->
  </div>
</Article>
