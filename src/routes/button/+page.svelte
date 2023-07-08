<script lang="ts">
  import Article from '$components/Article.svelte';
  import Table from '$components/TableOfContent/Table.svelte';
  import type { LinkInfo } from '$components/TableOfContent/Link.svelte';
  import Button from '$lib/components/button/Button.svelte';

  const links: LinkInfo[] = [
    {
      href: '#theme',
      text: 'Theme',
      child: [
        {
          href: '#primary',
          text: 'Primary',
        },
        {
          href: '#secondary',
          text: 'Secondary',
        },
        {
          href: '#accent',
          text: 'Accent',
        },
        {
          href: '#destructive',
          text: 'Destructive',
        },
      ],
    },
    {
      href: '#size',
      text: 'Size',
    },
  ];
</script>

<Article title="Button">
  <div class="flex flex-col gap-4 py-8">
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
    </div>
  </div>
  <Table slot="sidebar" {links} />
</Article>
