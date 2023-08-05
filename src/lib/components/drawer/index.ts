import { createDialog, type Dialog, type CreateDialogProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';

const KEY = Symbol();

export function setDrawer(props: CreateDialogProps) {
  const dialog = createDialog({ ...props });
  setContext(KEY, dialog);
  return dialog;
}

export function getDrawer() {
  return getContext<Dialog>(KEY);
}

export { default as Drawer } from './Drawer.svelte';
export { default as DrawerPortal } from './DrawerPortal.svelte';
export { default as DrawerPanel } from './DrawerPanel.svelte';
export { default as DrawerTrigger } from './DrawerTrigger.svelte';
export { default as DrawerHeader } from './DrawerHeader.svelte';
export { default as DrawerContent } from './DrawerContent.svelte';
export { default as DrawerFooter } from './DrawerFooter.svelte';

export type { CreateDialogProps, Dialog };
