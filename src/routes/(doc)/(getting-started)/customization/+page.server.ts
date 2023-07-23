export const load = async () => {
  const theme = `<!DOCTYPE html>
<html lang="en" data-theme="[THEME]">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div>%sveltekit.body%</div>
  </body>
</html>`;

  const css = `@layer base {
  :root,
  [data-theme='[YOUR_CUSTOM_THEME]'] {
    /* Customize the variables using RGB value WITHOUT coma between values */
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

    /* You can also customize more "general purpose" variable. They allow you to customize the color for specific theme. Sometimes, light/dark theme cannot use the same variable for contrast purpose. */
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

    /* These a applied on body to affect every children. Consider them as "defaults". */
    --konkat-background: 255 255 255;
    --konkat-text: var(--konkat-base-content);
    --konkat-border: var(--konkat-base-500);
  }
}`;

  return {
    theme,
    css,
  };
};
