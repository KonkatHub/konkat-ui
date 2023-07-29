import type { Section } from '$components/Sidebar/Sidebar.svelte';

export const docSections: (Section | 'divider')[] = [
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
