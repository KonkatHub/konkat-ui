<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
</script>

<div class="flex gap-4">
  <div class="flex flex-col gap-2">
    <Button size="sm">Default - sm</Button>
    <Button>Default - md</Button>
    <Button size="lg">Default - lg</Button>
  </div>
  <div class="flex flex-col gap-2">
    <Button size="sm" variant="destructive">Destructive - sm</Button>
    <Button variant="destructive">Destructive - md</Button>
    <Button size="lg" variant="destructive">Destructive - lg</Button>
  </div>
</div>
