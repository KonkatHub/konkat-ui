export const load = async () => {
  const basicDrawer = `<Drawer let:states={{ trigger }}>
  <Button melted={trigger}>Open drawer</Button>
  <DrawerContent
    slot="content"
    title="Drawer title"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    let:states={{ close }}
  >
    <Button melted={close}>Close drawer</Button>
  </DrawerContent>
</Drawer>`;

  const drawerMainSlot = `<Drawer let:states={{ trigger }}>
  <Button melted={trigger}>Open drawer</Button>
  ...
</Drawer>`;

  const drawerContentSlot = `<Drawer let:states={{ trigger }}>
  ...
  <div 
    slot="content" 
    let:elements={{ title, description }} 
    let:states={{ close, setOpen }}
  >
    <h3 melt={title}>My Title</h3>
    <p melt={description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <Button melted={close}>Close drawer</Button>
    <Button on:click={() => setOpen(false)}>Close drawer</Button>
  </div>
</Drawer>`;

  return {
    basicDrawer,
    drawerMainSlot,
    drawerContentSlot,
  };
};
