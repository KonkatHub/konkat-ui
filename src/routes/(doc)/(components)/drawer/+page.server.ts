export const load = async () => {
  const basicDrawer = `<Drawer>
  <DrawerTrigger content="Open drawer" />
  <DrawerPanel>
    <DrawerHeader title="My title" description="My description" />
    <DrawerContent>Content</DrawerContent>
    <DrawerFooter>Footer</DrawerFooter>
  </DrawerPanel>
</Drawer>`;

  return {
    basicDrawer,
  };
};
