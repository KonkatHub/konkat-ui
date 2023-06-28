<script lang="ts">
  import Button from '$lib/components/button/Button.svelte';
</script>

<div class="flex flex-col gap-16 py-24">
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Primary</h1>
    <div class="flex h-20 w-full items-center justify-center gap-4 rounded-xl bg-white px-4 py-16">
      <div class="flex flex-col gap-2">
        <Button>Button</Button>
        <Button disabled>Button</Button>
      </div>
      <div class="flex flex-col gap-2">
        <Button variant="outline">Button</Button>
        <Button disabled variant="outline">Button</Button>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Secondary</h1>
    <div class="flex h-20 w-full items-center justify-center gap-4 rounded-xl bg-white px-4 py-16">
      <div class="flex flex-col gap-2">
        <Button theme="secondary">Button</Button>
        <Button disabled theme="secondary">Button</Button>
      </div>
      <div class="flex flex-col gap-2">
        <Button variant="outline" theme="secondary">Button</Button>
        <Button disabled variant="outline" theme="secondary">Button</Button>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Accent</h1>
    <div class="flex h-20 w-full items-center justify-center gap-4 rounded-xl bg-white px-4 py-16">
      <div class="flex flex-col gap-2">
        <Button theme="accent">Button</Button>
        <Button disabled theme="accent">Button</Button>
      </div>
      <div class="flex flex-col gap-2">
        <Button variant="outline" theme="accent">Button</Button>
        <Button disabled variant="outline" theme="accent">Button</Button>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Destructive</h1>
    <div class="flex h-20 w-full items-center justify-center gap-4 rounded-xl bg-white px-4 py-16">
      <div class="flex flex-col gap-2">
        <Button theme="destructive">Button</Button>
        <Button disabled theme="destructive">Button</Button>
      </div>
      <div class="flex flex-col gap-2">
        <Button variant="outline" theme="destructive">Button</Button>
        <Button disabled variant="outline" theme="destructive">Button</Button>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Sizes</h1>
    <div class="flex h-20 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-16">
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button>Button</Button>
      <Button size="lg">Button</Button>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Shapes</h1>
    <div class="flex h-20 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-16">
      <Button>Button</Button>
      <Button shape="square">
        <iconify-icon icon="uil:plus" width="25" />
      </Button>
      <Button shape="pill">Button</Button>
      <Button shape="circle">
        <iconify-icon icon="uil:plus" width="25" />
      </Button>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl text-slate-700">Sizes</h1>
    <div
      class="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-white px-4 py-4"
    >
      <Button>
        <iconify-icon icon="material-symbols:person-outline" width="25" />
        Button
      </Button>
      <Button>
        Button
        <iconify-icon icon="material-symbols:person-outline" width="25" />
      </Button>
    </div>
  </div>
</div>
