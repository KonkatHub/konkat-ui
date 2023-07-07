<script lang="ts">
  import { createCheckbox } from '@melt-ui/svelte';
  import { boxVariants } from '.';
  import { cn } from '$lib/utils';
  import type { VariantProps } from 'class-variance-authority';
  import type { SvelteHTMLElements } from 'svelte/elements';

  let className: string | undefined | null = undefined;
  export { className as class };
  export let theme: VariantProps<typeof boxVariants>['theme'] | undefined = undefined;
  export let size: VariantProps<typeof boxVariants>['size'] | undefined = undefined;

  export let checked: boolean | 'indeterminate' = false;
  export let disabled = false;
  export let required = false;
  export let name: string | undefined = undefined;
  export let value: string | undefined = undefined;

  const id = crypto.randomUUID();

  const {
    root,
    input,
    isChecked,
    isIndeterminate,
    checked: checkedStore,
    options,
  } = createCheckbox({
    checked,
    disabled,
    required,
    name,
    value,
  });

  $: checkedStore.set(checked);
  checkedStore.subscribe((v) => (checked = v));

  $: options.update((o) => ({ ...o, disabled, required, name, value }));

  let iconSize = '24';
  $: if (size === 'sm') iconSize = '16';
  $: if (size === 'md') iconSize = '24';
  $: if (size === 'lg') iconSize = '32';
  $: if (size === 'xl') iconSize = '48';

  type $$Props = Omit<SvelteHTMLElements['button'], 'disabled' | 'name' | 'value'> & {
    theme?: VariantProps<typeof boxVariants>['theme'];
    size?: VariantProps<typeof boxVariants>['size'];
    checked?: boolean | 'indeterminate';
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
  };
</script>

<div class="flex items-center justify-center">
  <span class="group">
    <button
      {...$root}
      {disabled}
      class={cn(boxVariants({ theme, size, className }))}
      use:root.action
      {id}
      {...$$restProps}
    >
      {#if $isIndeterminate}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18 12.998H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z" />
        </svg>
      {:else if $isChecked}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"
          />
        </svg>
      {/if}
      <input {...$input} />
    </button>
  </span>
  <label class="pl-2 {disabled ? 'cursor-not-allowed' : 'cursor-pointer'}" for={id}>
    <slot />
  </label>
</div>
