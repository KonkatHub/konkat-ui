<script lang="ts">
  import Article from '$components/Article.svelte';
  import type { LinkInfo } from '$components/TableOfContent/Link.svelte';

  const links: LinkInfo[] = [];
</script>

<Article title="FAQ" {links} />
