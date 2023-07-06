<script lang="ts">
  import { createCheckbox } from '@melt-ui/svelte';
  import { boxVariants } from '.';
  import { cn } from '$lib/utils';
  import type { VariantProps } from 'class-variance-authority';

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
</script>

<div class="flex items-center justify-center">
  <span class="group">
    <button
      {...$root}
      {disabled}
      class={cn(boxVariants({ theme, size, className }))}
      use:root.action
      {id}
    >
      {#if $isIndeterminate}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 12.998H5v-2h14z" />
        </svg>
      {:else if $isChecked}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
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
