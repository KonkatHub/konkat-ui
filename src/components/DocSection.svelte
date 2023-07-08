<script lang="ts">
  export let title: string;
  export let id: string;
</script>

<div>
  <h2 class="text-xl" {id}>{title}</h2>
  <slot />
</div>
