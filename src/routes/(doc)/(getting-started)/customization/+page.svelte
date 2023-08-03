<script lang="ts">
  import Article from '$components/Article.svelte';
  import CodeInline from '$components/CodeInline.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';

  export let data;
</script>

<Article title="Customization">
  <DocSection title="Theme">
    <svelte:fragment slot="description">
      By default, <CodeInline>Konkat/UI</CodeInline> comes with two themes:
      <ul class="my-2 ml-4 list-disc">
        <li><CodeInline>konkat</CodeInline></li>
        <li><CodeInline>dark</CodeInline></li>
      </ul>

      To change the applied theme, update <CodeInline>data-theme</CodeInline> attribute of the
      <CodeInline>html</CodeInline> tag in <CodeInline>src/app.html</CodeInline> file.
    </svelte:fragment>
    <Codeblock code={data.theme} language="markup" />
  </DocSection>
  <DocSection title="Custom theme">
    <svelte:fragment slot="description">
      You can also create your own theme by adding more <CodeInline>CSS</CodeInline> variables to your
      project. You can do this by adding the following line to your
      <CodeInline>src/app.postcss</CodeInline> file:
    </svelte:fragment>
    <Codeblock code={data.css} language="css" />
  </DocSection>
</Article>
