export const load = async () => {
  const themes = `<Button theme="base">Base</Button>
<Button theme="neutral">Neutral</Button>
<Button theme="primary">Primary</Button>
<Button theme="secondary">Secondary</Button>
<Button theme="accent">Accent</Button>
<Button theme="destructive">Destructive</Button>`;

  const variants = `<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

  return {
    themes,
    variants,
  };
};
