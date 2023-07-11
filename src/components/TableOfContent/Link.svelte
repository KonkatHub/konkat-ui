<script lang="ts" context="module">
  export type LinkInfo =
    | {
        href: string;
        text: string;
        child?: LinkInfo[];
        isActive?: boolean;
      }
    | 'divider';
</script>

<script lang="ts">
  import { spy } from '$lib/actions/spy';
  import Button from '$lib/components/button/Button.svelte';
  import { scrollIntoView } from '$lib/utils';
  import Table from './Table.svelte';
  import type { Writable } from 'svelte/store';

  export let link: LinkInfo;
  export let isNested = false;
  export let activeId: Writable<string | null>;

  const id = crypto.randomUUID();
</script>

{#if link === 'divider'}
  <div class="block w-full border-b" />
{:else}
  <li
    use:spy={{
      target: link.href.slice(1),
      intel: ['data-in-view'],
    }}
    on:signal={(event) => {
      if (event.detail.value === 'true') {
        $activeId = id;
      }
    }}
  >
    <Button
      href={link.href}
      size={isNested ? 'xs' : 'sm'}
      variant="ghost"
      active={$activeId === id}
      class="w-full justify-start"
      on:click={scrollIntoView}
    >
      {link.text}
    </Button>
    {#if link.child}
      <Table isNested links={link.child} class="pl-4" />
    {/if}
  </li>
{/if}
