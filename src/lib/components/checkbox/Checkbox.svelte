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
        <iconify-icon icon="ic:round-minus" width="24" height="24" />
      {:else if $isChecked}
        <iconify-icon icon="ic:round-check" width="24" height="24" />
      {/if}
      <input {...$input} />
    </button>
  </span>
  <label class="pl-2 {disabled ? 'cursor-not-allowed' : 'cursor-pointer'}" for={id}>
    <slot />
  </label>
</div>
