<script lang="ts" context="module">
  export type Link = {
    href: string;
    text: string;
  };

  export type Section = {
    title: string;
    icon: string;
    links: Link[];
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';

  import Button from '$lib/components/button/Button.svelte';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let sections: (Section | 'divider')[];
</script>

{#each sections as section, index}
  {#if section === 'divider'}
    <div class="my-2 block w-full border-b" />
  {:else}
    <div
      class="mb-2 ml-3 {index > 0 ? 'mt-4' : 'mt-0'} flex items-center gap-2 text-base-content/50"
    >
      <iconify-icon width="24" height="24" icon={section.icon} />
      <h4>{section.title}</h4>
    </div>
    <ul class={className}>
      {#each section.links as link}
        {@const isSelected = link.href === $page.url.pathname}
        <li>
          <Button
            href={link.href}
            size={'sm'}
            variant="ghost"
            active={isSelected}
            class="w-full justify-start {isSelected ? 'pointer-events-none' : ''}"
          >
            {link.text}
          </Button>
        </li>
      {/each}
    </ul>
  {/if}
{/each}
