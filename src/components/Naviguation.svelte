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
          href: '/usage',
          text: 'Usage',
        },
        {
          href: '/customization',
          text: 'Customization',
        },
        {
          href: '/faq',
          text: 'FAQ',
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
        {
          href: '/checkbox',
          text: 'Checkbox',
        },
      ],
    },
  ];
</script>

<!-- TODO: Use drawer menu -->
<aside class="hidden min-h-full w-1/4 border-r px-8 py-8 sm:block">
  <nav>
    <Sidebar {sections} />
  </nav>
</aside>
