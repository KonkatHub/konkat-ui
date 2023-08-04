import { createDialog, type Dialog, type CreateDialogProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';

export { default as Drawer } from './Drawer.svelte';
export { default as DrawerContent } from './DrawerContent.svelte';

const KEY = Symbol();

export const context = {
  setDrawerRoot,
  getDrawer,
  getDrawerRoot,
  getDrawerContent,
};

function setDrawerRoot(props: CreateDialogProps) {
  setContext(KEY, createDialog({ ...props }));

  const builder = getContext<Dialog>(KEY);

  return builder;
}

function getDrawer() {
  return getContext<Dialog>(KEY);
}

function getDrawerRoot() {
  const {
    elements: { content, overlay, portalled, trigger },
  } = getContext<Dialog>(KEY);

  return { content, overlay, portalled, trigger };
}

function getDrawerContent() {
  const {
    elements: { title, description, close },
  } = getContext<Dialog>(KEY);

  return { title, description, close };
}

export type { CreateDialogProps, Dialog };
export const defaultCreateDialogProps: CreateDialogProps = {
  role: 'dialog',
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  portal: 'body',
  forceVisible: false,
  defaultOpen: false,
  open: undefined,
  onOpenChange: undefined,
};
