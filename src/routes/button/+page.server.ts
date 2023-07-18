export const load = async () => {
  const themes = `<Button theme="base">Base</Button>
<Button theme="neutral">Neutral</Button>
<Button theme="primary">Primary</Button>
<Button theme="secondary">Secondary</Button>
<Button theme="accent">Accent</Button>
<Button theme="destructive">Destructive</Button>`;

  const active = `<Button theme="base" active>Base</Button>
<Button theme="neutral" active>Neutral</Button>
<Button theme="primary" active>Primary</Button>
<Button theme="secondary" active>Secondary</Button>
<Button theme="accent" active>Accent</Button>
<Button theme="destructive" active>Destructive</Button>`;

  const disabled = `<Button theme="base" disabled>Base</Button>
<Button theme="neutral" disabled>Neutral</Button>
<Button theme="primary" disabled>Primary</Button>
<Button theme="secondary" disabled>Secondary</Button>
<Button theme="accent" disabled>Accent</Button>
<Button theme="destructive" disabled>Destructive</Button>`;

  const variants = `<Button variant="outline">Outline</Button>
<Button variant="flat">Flat</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

  const sizes = `<Button size="xs">Tiny</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

  const shapes = `<Button>Button</Button>
<Button shape="pill">Button</Button>
<Button shape="square">
  <iconify-icon icon="mdi:check" width="24" />
</Button>
<Button shape="circle">
  <iconify-icon icon="mdi:check" width="24" />
</Button>`;

  const icons = `<Button>
  <iconify-icon icon="mdi:cart" width="20" />
  Checkout
</Button>
<Button>
  Checkout
  <iconify-icon icon="mdi:cart" width="20" />
</Button>`;

  const element = `<Button href="https://github.com/KonkatHub/konkat-ui" target="_blank">
  Github
  <iconify-icon icon="mdi:open-in-new" width="18" />
</Button>`;

  const events = `<Button on:click={(e) => console.log(e)}>Button</Button>
<Button on:keydown={(e) => console.log(e)}>Button</Button>
<Button on:keyup={(e) => console.log(e)}>Button</Button>
<Button on:touchstart={(e) => console.log(e)}>Button</Button>
<Button on:touchend={(e) => console.log(e)}>Button</Button>
<Button on:touchcancel={(e) => console.log(e)}>Button</Button>
<Button on:mouseenter={(e) => console.log(e)}>Button</Button>
<Button on:mouseleave={(e) => console.log(e)}>Button</Button>`;

  return {
    themes,
    active,
    disabled,
    variants,
    sizes,
    shapes,
    icons,
    element,
    events,
  };
};
