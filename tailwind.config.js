function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        base: {
          50: 'rgb(var(--konkat-base-50) / <alpha-value>)',
          100: 'rgb(var(--konkat-base-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-base-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-base-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-base-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-base-500) / <alpha-value>)',
          600: 'rgb(var(--konkat-base-600) / <alpha-value>)',
          700: 'rgb(var(--konkat-base-700) / <alpha-value>)',
          800: 'rgb(var(--konkat-base-800) / <alpha-value>)',
          900: 'rgb(var(--konkat-base-900) / <alpha-value>)',
          950: 'rgb(var(--konkat-base-950) / <alpha-value>)',
        },
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          DEFAULT: 'var(--color-primary-default)', // alias for 500
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          DEFAULT: 'var(--color-secondary-default)', // alias for 500
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
        },
        accent: {
          50: 'var(--color-accent-50)',
          100: 'var(--color-accent-100)',
          200: 'var(--color-accent-200)',
          300: 'var(--color-accent-300)',
          400: 'var(--color-accent-400)',
          500: 'var(--color-accent-500)',
          DEFAULT: 'var(--color-accent-default)', // alias for 500
          600: 'var(--color-accent-600)',
          700: 'var(--color-accent-700)',
          800: 'var(--color-accent-800)',
          900: 'var(--color-accent-900)',
          950: 'var(--color-accent-950)',
        },
        destructive: {
          50: 'var(--color-destructive-50)',
          100: 'var(--color-destructive-100)',
          200: 'var(--color-destructive-200)',
          300: 'var(--color-destructive-300)',
          400: 'var(--color-destructive-400)',
          500: 'var(--color-destructive-500)',
          DEFAULT: 'var(--color-destructive-default)', // alias for 500
          600: 'var(--color-destructive-600)',
          700: 'var(--color-destructive-700)',
          800: 'var(--color-destructive-800)',
          900: 'var(--color-destructive-900)',
          950: 'var(--color-destructive-950)',
        },
      },
    },
  },
  plugins: [],
};
