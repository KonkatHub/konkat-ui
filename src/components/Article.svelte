<script lang="ts">
  export let title: string;
</script>

<article class="w-full">
  <h1 class="text-5xl font-bold">{title}</h1>
  <slot />
</article>
<aside class="w-full sm:w-1/5">
  <slot name="sidebar" />
</aside>
