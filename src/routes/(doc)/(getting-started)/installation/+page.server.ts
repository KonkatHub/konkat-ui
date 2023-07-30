export const load = async () => {
  const sveltekit = 'npm create svelte@latest my-app';

  const dependencies = `npm install tailwindcss @melt-ui/svelte
yarn add tailwindcss @melt-ui/svelte
pnpm install tailwindcss @melt-ui/svelte`;

  const install = `npm install @konkat/konkat-ui
yarn add @konkat/konkat-ui
pnpm install @konkat/konkat-ui`;

  const tailwind = `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      extend: {
        textColor: ['group-hover'],
      },
      colors: {
        background: 'rgb(var(--konkat-background))',
        text: 'rgb(var(--konkat-text))',
        border: 'rgb(var(--konkat-border))',
        base: {
          100: 'rgb(var(--konkat-base-100) / <alpha-value>)',
          200: 'rgb(var(--konkat-base-200) / <alpha-value>)',
          300: 'rgb(var(--konkat-base-300) / <alpha-value>)',
          400: 'rgb(var(--konkat-base-400) / <alpha-value>)',
          500: 'rgb(var(--konkat-base-500) / <alpha-value>)',
          DEFAULT: 'rgb(var(--konkat-base) / <alpha-value>)',
          focus: 'rgb(var(--konkat-base-focus) / <alpha-value>)',
          content: 'rgb(var(--konkat-base-content) / <alpha-value>)',
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
          DEFAULT: 'rgb(var(--konkat-neutral) / <alpha-value>)',
          focus: 'rgb(var(--konkat-neutral-focus) / <alpha-value>)',
          content: 'rgb(var(--konkat-neutral-content) / <alpha-value>)',
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
          DEFAULT: 'rgb(var(--konkat-primary) / <alpha-value>)',
          focus: 'rgb(var(--konkat-primary-focus) / <alpha-value>)',
          content: 'rgb(var(--konkat-primary-content) / <alpha-value>)',
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
          DEFAULT: 'rgb(var(--konkat-secondary) / <alpha-value>)',
          focus: 'rgb(var(--konkat-secondary-focus) / <alpha-value>)',
          content: 'rgb(var(--konkat-secondary-content) / <alpha-value>)',
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
          DEFAULT: 'rgb(var(--konkat-accent) / <alpha-value>)',
          focus: 'rgb(var(--konkat-accent-focus) / <alpha-value>)',
          content: 'rgb(var(--konkat-accent-content) / <alpha-value>)',
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
          DEFAULT: 'rgb(var(--konkat-destructive) / <alpha-value>)',
          focus: 'rgb(var(--konkat-destructive-focus) / <alpha-value>)',
          content: 'rgb(var(--konkat-destructive-content) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};`;

  const css = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root,
  [data-theme='konkat'] {
    --konkat-base-100: 247 249 252;
    --konkat-base-200: 243 245 248;
    --konkat-base-300: 237 239 242;
    --konkat-base-400: 232 233 237;
    --konkat-base-500: 227 228 233;

    --konkat-neutral-50: 245 246 246;
    --konkat-neutral-100: 228 231 233;
    --konkat-neutral-200: 205 211 212;
    --konkat-neutral-300: 169 179 183;
    --konkat-neutral-400: 127 140 145;
    --konkat-neutral-500: 100 113 118;
    --konkat-neutral-600: 85 96 101;
    --konkat-neutral-700: 73 80 85;
    --konkat-neutral-800: 65 70 73;
    --konkat-neutral-900: 57 61 64;
    --konkat-neutral-950: 45 49 52;

    --konkat-primary-50: 247 244 254;
    --konkat-primary-100: 240 235 252;
    --konkat-primary-200: 229 218 250;
    --konkat-primary-300: 208 188 246;
    --konkat-primary-400: 186 150 239;
    --konkat-primary-500: 154 94 228;
    --konkat-primary-600: 149 76 219;
    --konkat-primary-700: 133 58 199;
    --konkat-primary-800: 111 48 167;
    --konkat-primary-900: 93 41 137;
    --konkat-primary-950: 59 25 92;

    --konkat-secondary-50: 254 245 254;
    --konkat-secondary-100: 252 235 251;
    --konkat-secondary-200: 249 213 248;
    --konkat-secondary-300: 243 180 239;
    --konkat-secondary-400: 235 135 227;
    --konkat-secondary-500: 219 81 208;
    --konkat-secondary-600: 192 57 179;
    --konkat-secondary-700: 159 44 145;
    --konkat-secondary-800: 130 38 118;
    --konkat-secondary-900: 107 36 96;
    --konkat-secondary-950: 70 12 61;

    --konkat-accent-50: 242 251 248;
    --konkat-accent-100: 210 245 233;
    --konkat-accent-200: 165 234 213;
    --konkat-accent-300: 113 215 188;
    --konkat-accent-400: 67 190 161;
    --konkat-accent-500: 42 162 136;
    --konkat-accent-600: 31 130 110;
    --konkat-accent-700: 29 104 90;
    --konkat-accent-800: 27 84 74;
    --konkat-accent-900: 27 70 62;
    --konkat-accent-950: 10 41 38;

    --konkat-destructive-50: 255 241 241;
    --konkat-destructive-100: 255 226 225;
    --konkat-destructive-200: 255 201 199;
    --konkat-destructive-300: 255 163 160;
    --konkat-destructive-400: 255 111 106;
    --konkat-destructive-500: 248 64 58;
    --konkat-destructive-600: 230 34 28;
    --konkat-destructive-700: 193 25 20;
    --konkat-destructive-800: 160 24 20;
    --konkat-destructive-900: 132 27 24;
    --konkat-destructive-950: 72 9 7;

    --konkat-base: var(--konkat-base-300);
    --konkat-base-focus: var(--konkat-base-400);
    --konkat-base-content: var(--konkat-neutral-900);

    --konkat-neutral: var(--konkat-neutral-500);
    --konkat-neutral-focus: var(--konkat-neutral-700);
    --konkat-neutral-content: var(--konkat-neutral-100);

    --konkat-primary: var(--konkat-primary-500);
    --konkat-primary-focus: var(--konkat-primary-700);
    --konkat-primary-content: var(--konkat-primary-100);

    --konkat-secondary: var(--konkat-secondary-500);
    --konkat-secondary-focus: var(--konkat-secondary-700);
    --konkat-secondary-content: var(--konkat-secondary-100);

    --konkat-accent: var(--konkat-accent-500);
    --konkat-accent-focus: var(--konkat-accent-700);
    --konkat-accent-content: var(--konkat-accent-50);

    --konkat-destructive: var(--konkat-destructive-500);
    --konkat-destructive-focus: var(--konkat-destructive-700);
    --konkat-destructive-content: var(--konkat-destructive-50);

    --konkat-background: 255 255 255;
    --konkat-text: var(--konkat-base-content);
    --konkat-border: var(--konkat-base-500);
  }

  [data-theme='dark'] {
    --konkat-base-100: 45 42 51;
    --konkat-base-200: 37 35 41;
    --konkat-base-300: 33 31 36;
    --konkat-base-400: 27 25 29;
    --konkat-base-500: 20 18 22;

    --konkat-neutral-50: 246 246 247;
    --konkat-neutral-100: 226 227 229;
    --konkat-neutral-200: 196 198 203;
    --konkat-neutral-300: 159 161 169;
    --konkat-neutral-400: 123 124 134;
    --konkat-neutral-500: 96 98 108;
    --konkat-neutral-600: 76 77 85;
    --konkat-neutral-700: 63 64 70;
    --konkat-neutral-800: 53 53 58;
    --konkat-neutral-900: 47 47 50;
    --konkat-neutral-950: 25 25 28;

    --konkat-primary-50: 239 242 254;
    --konkat-primary-100: 226 229 253;
    --konkat-primary-200: 203 207 250;
    --konkat-primary-300: 171 177 246;
    --konkat-primary-400: 139 138 239;
    --konkat-primary-500: 118 109 231;
    --konkat-primary-600: 116 97 221;
    --konkat-primary-700: 88 66 192;
    --konkat-primary-800: 72 56 155;
    --konkat-primary-900: 62 52 123;
    --konkat-primary-950: 37 30 72;

    --konkat-secondary-50: 251 244 248;
    --konkat-secondary-100: 248 235 243;
    --konkat-secondary-200: 243 215 232;
    --konkat-secondary-300: 234 183 213;
    --konkat-secondary-400: 221 137 185;
    --konkat-secondary-500: 203 91 151;
    --konkat-secondary-600: 186 72 128;
    --konkat-secondary-700: 160 54 102;
    --konkat-secondary-800: 133 47 86;
    --konkat-secondary-900: 112 43 74;
    --konkat-secondary-950: 67 20 41;

    --konkat-accent-50: 243 250 249;
    --konkat-accent-100: 216 239 238;
    --konkat-accent-200: 177 222 222;
    --konkat-accent-300: 130 196 198;
    --konkat-accent-400: 81 155 159;
    --konkat-accent-500: 62 136 142;
    --konkat-accent-600: 47 108 114;
    --konkat-accent-700: 41 87 92;
    --konkat-accent-800: 37 69 74;
    --konkat-accent-900: 34 60 63;
    --konkat-accent-950: 15 32 36;

    --konkat-destructive-50: 252 245 244;
    --konkat-destructive-100: 250 231 230;
    --konkat-destructive-200: 247 212 209;
    --konkat-destructive-300: 241 181 176;
    --konkat-destructive-400: 231 137 130;
    --konkat-destructive-500: 214 85 75;
    --konkat-destructive-600: 197 71 61;
    --konkat-destructive-700: 165 56 48;
    --konkat-destructive-800: 137 50 43;
    --konkat-destructive-900: 115 46 41;
    --konkat-destructive-950: 62 20 17;

    --konkat-base: var(--konkat-base-400);
    --konkat-base-focus: var(--konkat-base-500);
    --konkat-base-content: var(--konkat-neutral-200);

    --konkat-neutral: var(--konkat-neutral-500);
    --konkat-neutral-focus: var(--konkat-neutral-600);
    --konkat-neutral-content: var(--konkat-neutral-100);

    --konkat-primary: var(--konkat-primary-500);
    --konkat-primary-focus: var(--konkat-primary-700);
    --konkat-primary-content: var(--konkat-primary-50);

    --konkat-secondary: var(--konkat-secondary-500);
    --konkat-secondary-focus: var(--konkat-secondary-700);
    --konkat-secondary-content: var(--konkat-secondary-50);

    --konkat-accent: var(--konkat-accent-500);
    --konkat-accent-focus: var(--konkat-accent-700);
    --konkat-accent-content: var(--konkat-accent-50);

    --konkat-destructive: var(--konkat-destructive-500);
    --konkat-destructive-focus: var(--konkat-destructive-700);
    --konkat-destructive-content: var(--konkat-destructive-50);

    --konkat-background: var(--konkat-base-300);
    --konkat-text: var(--konkat-base-content);
    --konkat-border: var(--konkat-base-100);
  }

  body {
    background-color: rgb(var(--konkat-background));
    color: rgb(var(--konkat-text));
  }

  *,
  ::before,
  ::after {
    border-color: rgb(var(--konkat-border));
  }
}`;

  return {
    sveltekit,
    dependencies,
    install,
    tailwind,
    css,
  };
};
