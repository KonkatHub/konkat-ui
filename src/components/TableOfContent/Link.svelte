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
  import Table from './Table.svelte';

  export let link: LinkInfo;
</script>

{#if link === 'divider'}
  <div class="my-2 h-0.5 w-full rounded-full bg-slate-400/20" />
{:else}
  <li>
    <a class="text-blue-500 underline transition-colors hover:text-blue-800" href={link.href}>
      {link.text}
    </a>
    {#if link.child}
      <Table links={link.child} class="space-y-0 pl-4" />
    {/if}
  </li>
{/if}
