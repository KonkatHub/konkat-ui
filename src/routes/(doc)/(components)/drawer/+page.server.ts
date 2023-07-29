export const load = async () => {
  const simplestExample = `<Drawer let:states={{ trigger }}>
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

  return {
    simplestExample,
  };
};
