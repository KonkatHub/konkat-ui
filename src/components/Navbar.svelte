<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';

  let theme = 'konkat';

  function changeTheme() {
    theme = theme === 'konkat' ? 'dark' : 'konkat';
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }
</script>

<header
  class="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-4 sm:px-8"
>
  <div>
    <a href="/" class="text-2xl font-bold">
      <h3 class="text-mathis-base">Konkat/UI</h3>
    </a>
  </div>
  <div class="flex items-center gap-2">
    <Button variant="ghost" shape="square" on:click={changeTheme}>
      <iconify-icon icon="mdi:theme-light-dark" width="28" height="28" />
    </Button>
    <Button
      href="https://github.com/KonkatHub/konkat-ui"
      target="_blank"
      variant="ghost"
      shape="square"
    >
      <iconify-icon icon="mdi:github" width="28" height="28" />
    </Button>
  </div>
</header>
