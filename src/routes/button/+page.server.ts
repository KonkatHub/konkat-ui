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

  const variants = `<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

  const sizes = `<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

  return {
    themes,
    active,
    variants,
    sizes,
  };
};
