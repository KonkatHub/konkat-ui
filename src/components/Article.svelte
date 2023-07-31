<script lang="ts">
  import type { Action } from 'svelte/action';
  import type { LinkInfo } from './TableOfContent/Link.svelte';
  import Table from './TableOfContent/Table.svelte';
  import { writable, type Writable } from 'svelte/store';

  export let title: string;
  export let description: string | undefined = undefined;
  const links: Writable<LinkInfo[]> = writable([]);

  const findLinks: Action<HTMLElement> = (node) => {
    const sections = node.querySelectorAll('[data-section-title]');

    sections.forEach((section) => {
      const sectionTitle = section.getAttribute('data-section-title');
      const sectionId = section.getAttribute('data-section-id');
      const childLevel = section.getAttribute('data-section-child-level') as unknown as number;

      if (!sectionTitle || !sectionId) {
        return;
      }

      const newLink = { text: sectionTitle, href: `#${sectionId}` };
      if (childLevel) {
        let lastLink = $links[$links.length - 1];

        // TODO: Needs to be refactored ask ChatGPT
        if (!lastLink || lastLink === 'divider') {
          return;
        }

        if (childLevel > 1 && Array.isArray(lastLink.child)) {
          lastLink = lastLink.child[lastLink.child.length - 1];
        }

        if (!lastLink || lastLink === 'divider') {
          return;
        }

        if (Array.isArray(lastLink.child)) {
          lastLink.child = [...lastLink.child, newLink];
        } else {
          lastLink.child = [newLink];
        }
      } else {
        $links = [...$links, newLink];
      }
    });
  };
</script>

<article class="w-full xl:w-3/4" use:findLinks>
  <h1 class="text-5xl font-bold">{title}</h1>
  {#if description || $$slots.description}
    <p class="mt-4 text-base-content/75">
      <slot name="description">
        {description}
      </slot>
    </p>
  {/if}
  <hr class="mb-8 mt-6" />
  <div class="flex flex-col gap-4">
    <slot />
  </div>
</article>
<aside class="hidden w-1/4 xl:block">
  <Table links={$links} class="sticky top-28" />
</aside>
