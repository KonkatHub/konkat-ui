<script lang="ts">
  import Article from '$components/Article.svelte';
  import Table from '$components/TableOfContent/Table.svelte';
  import type { LinkInfo } from '$components/TableOfContent/Link.svelte';

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
  <Table slot="sidebar" {links} />
</Article>
