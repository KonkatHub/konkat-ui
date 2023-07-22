<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
  import Sanbox from './Sanbox.svelte';

  let isKonkatTheme = true;
</script>

<div class="flex min-h-screen w-screen justify-between">
  <div class="flex flex-1 flex-col gap-16 bg-base-300 px-12 py-24" data-theme="konkat">
    <Sanbox />
  </div>
  <div class="flex flex-1 flex-col gap-16 bg-base-300 px-12 py-24" data-theme="dark">
    <Sanbox />
  </div>
</div>
<div data-theme={isKonkatTheme ? 'konkat' : 'dark'}>
  <div class="flex h-screen w-screen flex-row {isKonkatTheme ? 'bg-white' : 'bg-base-200'}">
    <Button on:click={() => (isKonkatTheme = !isKonkatTheme)}>Toggle</Button>
  </div>
</div>
