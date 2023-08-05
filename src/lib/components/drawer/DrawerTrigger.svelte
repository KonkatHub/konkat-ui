<script lang="ts">
  import { getDrawer } from '.';
  import { Button, type ButtonProps } from '../button';

  export let content: string | undefined = undefined;

  const {
    elements: { trigger },
  } = getDrawer();

  type $$Props = ButtonProps & {
    content?: string;
  };
</script>

<slot name="asChild" trigger={$trigger}>
  <Button melted={$trigger} {...$$restProps}>
    <slot>{content}</slot>
  </Button>
</slot>
