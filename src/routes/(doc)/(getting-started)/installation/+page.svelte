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
      href: '#tailwind-plugin',
      text: 'Tailwind plugin',
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
  <DocSection title="Tailwind plugin" id="tailwind-plugin">
    <svelte:fragment slot="description">
      You will need to add <CodeInline>Konkat/UI</CodeInline>'s plugin to your Tailwind plugins.
      This plugin will inject css variables into your project and will extends your Tailwind
      configuration to add more utility classes.
      <ul class="my-2 ml-4 list-disc">
        <li>
          <CodeInline>konkatPlugin</CodeInline>: Contains the Tailwind plugin.
        </li>
        <li>
          <CodeInline>konkatContent</CodeInline>: Contains the path to
          <CodeInline>Konkat/UI</CodeInline> files so that the Tailwind compiler can extract the utility
          classes used. (path =
          <CodeInline>./node_modules/@konkat/konkat-ui/**/*.{'{html,js,svelte,ts}'}</CodeInline>)
        </li>
      </ul>
      You can do this by modifing you
      <CodeInline>tailwind.config.js</CodeInline> file:
    </svelte:fragment>
    <Codeblock code={data.plugin} language="javascript" />
  </DocSection>
</Article>
