<script lang="ts">
  import { createCheckbox } from '@melt-ui/svelte';

  export let checked: boolean | 'indeterminate' = false;
  export let disabled = false;
  export let required = false;
  export let name: string | undefined = undefined;
  export let value: string | undefined = undefined;

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
</script>

<div class="flex items-center justify-center">
  <button
    {...$root}
    use:root.action
    class="flex h-5 w-5 appearance-none items-center justify-center rounded border border-primary-700 text-primary-700 hover:border-primary-500"
    id="checkbox"
  >
    <span
      class="flex h-full w-full items-center justify-center rounded transition-[background-color] hover:bg-primary-50"
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
    </span>
    <input {...$input} />
  </button>
  <label class="pl-2 text-primary-950" for="checkbox">
    <slot />
  </label>
</div>
