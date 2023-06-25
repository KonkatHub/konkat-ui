<script lang="ts">
  import { ButtonPrimitive, type ButtonProps } from '@konkat/konkat-ui-primitives';

  type $$Props = ButtonProps;
</script>

<ButtonPrimitive
  class="rounded bg-purple-800 px-4 py-2 text-purple-100 transition-all hover:bg-purple-900 active:enabled:scale-95 disabled:cursor-not-allowed disabled:bg-purple-800/50 disabled:text-purple-100/50"
  {...$$restProps}
  on:click
  on:change
  on:keydown
  on:keyup
  on:touchstart
  on:touchend
  on:touchcancel
  on:mouseenter
  on:mouseleave
>
  <slot />
</ButtonPrimitive>
