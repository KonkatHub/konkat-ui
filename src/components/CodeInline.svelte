<script lang="ts">
  import { cn } from '$lib/utils';

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<code class={cn('rounded-md bg-base-400 px-2 py-1 text-sm', className)}>
  <slot />
</code>
