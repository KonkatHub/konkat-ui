export const load = async () => {
  const sveltekit = 'npm create svelte@latest my-app';

  const dependencies = `npm install tailwindcss @melt-ui/svelte
yarn add tailwindcss @melt-ui/svelte
pnpm install tailwindcss @melt-ui/svelte`;

  const install = `npm install @konkat/konkat-ui
yarn add @konkat/konkat-ui
pnpm install @konkat/konkat-ui`;

  const plugin = `// Import plugin & content from @konkat/konkat-ui/tailwind-plugin
import { konkatPlugin, konkatContent } from '@konkat/konkat-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    konkatContent // <--------- Add konkatContent to your content array
  ],

  theme: {
    extend: {},
  },

  plugins: [konkatPlugin], // <--------- Add konkatPlugin to your plugins array
};

export default config;`;

  return {
    sveltekit,
    dependencies,
    install,
    plugin,
  };
};
