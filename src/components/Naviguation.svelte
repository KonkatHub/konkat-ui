<script lang="ts">
  import Sidebar, { type Section } from './Sidebar/Sidebar.svelte';

  const sections: (Section | 'divider')[] = [
    {
      title: 'Getting started',
      icon: 'mdi:lightbulb-on-outline',
      links: [
        {
          href: '/installation',
          text: 'Installation',
        },
        {
          href: '/customization',
          text: 'Customization',
        },
      ],
    },
    'divider',
    {
      title: 'Components',
      icon: 'mdi:code-block-tags',
      links: [
        {
          href: '/button',
          text: 'Button',
        },
      ],
    },
  ];
</script>

<!-- TODO: Use drawer menu -->
<aside class="hidden w-1/4 border-r sm:block">
  <nav class="sticky top-[73px] max-h-[calc(100vh-48px)] overflow-y-auto px-8 py-8">
    <Sidebar {sections} />
  </nav>
</aside>
