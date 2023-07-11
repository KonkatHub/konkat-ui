<script lang="ts" context="module">
  export type LinkInfo =
    | {
        href: string;
        text: string;
        child?: LinkInfo[];
      }
    | 'divider';
</script>

<script lang="ts">
  import { spy } from '$lib/actions/spy';

  import Button from '$lib/components/button/Button.svelte';
  import { scrollIntoView } from '$lib/utils';
  import Table from './Table.svelte';

  export let link: LinkInfo;
  export let isNested = false;

  let isTargetInView = false;
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
      isTargetInView = event.detail.value === 'true';
    }}
  >
    <Button
      href={link.href}
      size={isNested ? 'xs' : 'sm'}
      variant="ghost"
      active={isTargetInView}
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
