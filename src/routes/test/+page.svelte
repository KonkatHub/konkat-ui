<script lang="ts">
  import { spy } from '$lib/actions/spy';

  let clicked = false;
</script>

<button id="button" data-click={clicked} on:click={() => (clicked = !clicked)}> Click me </button>

<div
  use:spy={{
    target: 'button',
    intel: ['data-click', 'data-second'],
  }}
  on:signal={(event) => {
    console.log(event.detail);
  }}
/>
