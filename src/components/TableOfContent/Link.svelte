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
  import { spy } from '@konkat/svelte-spy';
  import Button from '$lib/components/button/Button.svelte';
  import { scrollIntoView } from '$lib/utils';
  import Table from './Table.svelte';
  import type { Writable } from 'svelte/store';

  export let link: LinkInfo;
  export let isNested = false;
  export let activeId: Writable<string | null> | undefined = undefined;

  const id = crypto.randomUUID();
</script>

{#if link === 'divider'}
  <div class="block w-full border-b" />
{:else}
  {@const isActive = $activeId === id}
  <li
    use:spy={{
      target: link.href,
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
      theme={isActive ? 'primary' : 'base'}
      variant={isActive ? 'flat' : 'ghost'}
      class="w-full justify-start {isActive ? 'pointer-events-none' : ''}"
      on:click={scrollIntoView}
    >
      {link.text}
    </Button>
    {#if link.child}
      <Table isNested links={link.child} class="pl-4" />
    {/if}
  </li>
{/if}
