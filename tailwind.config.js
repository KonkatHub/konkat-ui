/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        base: {
          100: 'rgb(var(--konkat-base-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-base-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-base-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-base-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-base-500) / <alpha-value>)',
        },
        neutral: {
          50: 'rgb(var(--konkat-neutral-50) / <alpha-value>)',
          100: 'rgb(var(--konkat-neutral-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-neutral-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-neutral-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-neutral-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-neutral-500) / <alpha-value>)',
          600: 'rgb(var(--konkat-neutral-600) / <alpha-value>)',
          700: 'rgb(var(--konkat-neutral-700) / <alpha-value>)',
          800: 'rgb(var(--konkat-neutral-800) / <alpha-value>)',
          900: 'rgb(var(--konkat-neutral-900) / <alpha-value>)',
          950: 'rgb(var(--konkat-neutral-950) / <alpha-value>)',
        },
        primary: {
          50: 'rgb(var(--konkat-primary-50) / <alpha-value>)',
          100: 'rgb(var(--konkat-primary-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-primary-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-primary-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-primary-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-primary-500) / <alpha-value>)',
          600: 'rgb(var(--konkat-primary-600) / <alpha-value>)',
          700: 'rgb(var(--konkat-primary-700) / <alpha-value>)',
          800: 'rgb(var(--konkat-primary-800) / <alpha-value>)',
          900: 'rgb(var(--konkat-primary-900) / <alpha-value>)',
          950: 'rgb(var(--konkat-primary-950) / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(var(--konkat-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--konkat-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--konkat-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--konkat-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--konkat-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--konkat-secondary-900) / <alpha-value>)',
          950: 'rgb(var(--konkat-secondary-950) / <alpha-value>)',
        },
        accent: {
          50: 'rgb(var(--konkat-accent-50) / <alpha-value>)',
          100: 'rgb(var(--konkat-accent-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-accent-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-accent-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-accent-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-accent-500) / <alpha-value>)',
          600: 'rgb(var(--konkat-accent-600) / <alpha-value>)',
          700: 'rgb(var(--konkat-accent-700) / <alpha-value>)',
          800: 'rgb(var(--konkat-accent-800) / <alpha-value>)',
          900: 'rgb(var(--konkat-accent-900) / <alpha-value>)',
          950: 'rgb(var(--konkat-accent-950) / <alpha-value>)',
        },
        destructive: {
          50: 'rgb(var(--konkat-destructive-50) / <alpha-value>)',
          100: 'rgb(var(--konkat-destructive-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-destructive-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-destructive-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-destructive-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-destructive-500) / <alpha-value>)',
          600: 'rgb(var(--konkat-destructive-600) / <alpha-value>)',
          700: 'rgb(var(--konkat-destructive-700) / <alpha-value>)',
          800: 'rgb(var(--konkat-destructive-800) / <alpha-value>)',
          900: 'rgb(var(--konkat-destructive-900) / <alpha-value>)',
          950: 'rgb(var(--konkat-destructive-950) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
