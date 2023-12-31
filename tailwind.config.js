import { konkatPlugin } from './src/lib/konkatPlugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [konkatPlugin],
};
