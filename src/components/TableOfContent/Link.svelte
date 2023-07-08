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
  import Button from '$lib/components/button/Button.svelte';
  import Table from './Table.svelte';

  export let link: LinkInfo;
  export let isNested = false;
</script>

{#if link === 'divider'}
  <div class="block w-full border-b" />
{:else}
  <li>
    <Button
      href={link.href}
      size={isNested ? 'xs' : 'sm'}
      theme="base"
      variant="link"
      class="w-full justify-start"
    >
      {link.text}
    </Button>
    {#if link.child}
      <Table isNested links={link.child} class="pl-4" />
    {/if}
  </li>
{/if}
