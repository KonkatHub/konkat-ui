<script lang="ts">
  import Article from '$components/Article.svelte';
  import CodeInline from '$components/CodeInline.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';
  import type { LinkInfo } from '$components/TableOfContent/Link.svelte';
  import Link from '$lib/components/link/Link.svelte';

  export let data;

  const links: LinkInfo[] = [
    {
      href: '#sveltekit',
      text: 'SvelteKit',
    },
    {
      href: '#dependencies',
      text: 'Dependencies',
    },
    {
      href: '#installation',
      text: 'Installation',
    },
    {
      href: '#css',
      text: 'CSS',
    },
  ];
</script>

<Article title="Installation" {links}>
  <DocSection title="SvelteKit" id="sveltekit">
    <svelte:fragment slot="description">
      You will need a <CodeInline>SvelteKit</CodeInline> project to use this library. If you don't have
      one, you can
      <Link blank href="https://kit.svelte.dev/docs/creating-a-project">create a new project</Link> by
      running the following command:
    </svelte:fragment>
    <Codeblock code={data.sveltekit} language="bash" />
  </DocSection>
  <DocSection title="Dependencies" id="dependencies">
    <svelte:fragment slot="description">
      To use this library, you will need
      <CodeInline>
        <Link href="https://tailwindcss.com/docs/installation" blank>TailwindCSS</Link>
      </CodeInline> and
      <CodeInline>
        <Link href="https://www.melt-ui.com/docs/installation" blank>MeltUI</Link>
      </CodeInline>
      installed in your project.
    </svelte:fragment>
    <Codeblock code={data.dependencies} language="bash" />
  </DocSection>
  <DocSection title="Installation" id="installation">
    <svelte:fragment slot="description">
      To install <CodeInline>Konkat/UI</CodeInline>, run the following command:
    </svelte:fragment>
    <Codeblock code={data.install} language="bash" />
  </DocSection>
  <DocSection title="CSS" id="css">
    <svelte:fragment slot="description">
      You will need to add <CodeInline>CSS</CodeInline> variables to your project. You can do this by
      adding the following line to your <CodeInline>app.postcss</CodeInline> file:
    </svelte:fragment>
    <Codeblock code={data.css} language="css" />
  </DocSection>
</Article>
