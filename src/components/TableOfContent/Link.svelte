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

  function scrollIntoView(e: MouseEvent) {
    e.preventDefault();

    const headerOffset = 100;

    const href = (e.target as HTMLAnchorElement).href;
    const id = href.split('#')[1];

    const element = document.querySelector('#' + id);
    if (!element) {
      return;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
</script>

{#if link === 'divider'}
  <div class="block w-full border-b" />
{:else}
  <li>
    <Button
      href={link.href}
      size={isNested ? 'xs' : 'sm'}
      theme="base"
      variant="ghost"
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
