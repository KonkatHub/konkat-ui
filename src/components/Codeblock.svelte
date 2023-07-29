<script lang="ts">
  import Prism from 'prismjs';
  import 'prismjs/components/prism-bash';
  import 'prismjs/components/prism-typescript.js';
  import 'prismjs/components/prism-css.js';
  import 'prismjs/components/prism-markup.js';
  import 'prism-svelte';
  import Button from '$lib/components/button/Button.svelte';
  import { capitalizeFirstLetter } from './utils';

  export let code: string;
  export let metadata: string[] | string | undefined = undefined;
  export let language: 'svelte' | 'bash' | 'javascript' | 'typescript' | 'css' | 'markup';
  export let slotContainer = true;

  const html = Prism.highlight(code, Prism.languages[language], language);

  if (Array.isArray(metadata)) {
    metadata = [capitalizeFirstLetter(language), ...metadata];
  } else if (typeof metadata === 'string') {
    metadata = [capitalizeFirstLetter(language), metadata];
  } else {
    metadata = capitalizeFirstLetter(language);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(code);
  }
</script>

<div class="flex flex-col">
  <div
    class="flex items-center justify-between rounded-t-xl border border-base-500 bg-base-400 py-2 pl-4 pr-2 text-sm"
  >
    <div class="flex items-center gap-4">
      {#if Array.isArray(metadata)}
        {#if metadata.length === 1}
          <span>{metadata[0]}</span>
        {:else if metadata.length > 1}
          {#each metadata as data, index}
            {#if index > 0}
              <div class="h-6 border-l border-neutral-focus/30" />
            {/if}
            <span>{data}</span>
          {/each}
        {/if}
      {:else if typeof metadata === 'string'}
        <span>{metadata}</span>
      {/if}
    </div>
    <Button theme="neutral" size="xs" variant="ghost" on:click={copyToClipboard}>
      <iconify-icon icon="mdi:content-copy" />
      Copy
    </Button>
  </div>
  {#if $$slots.default}
    <div class="border-x border-base-500">
      {#if slotContainer}
        <div class="flex w-full flex-wrap items-center justify-center gap-2 p-4">
          <slot />
        </div>
      {:else}
        <slot />
      {/if}
    </div>
  {/if}
  <code
    class="overflow-x-auto whitespace-pre rounded-b-xl border {$$slots.default
      ? 'bordor-t'
      : 'border-t-0'} border-base-500 bg-base-200 p-4"
  >
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html html}
  </code>
</div>
