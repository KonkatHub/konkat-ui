import { createDialog, type Dialog, type CreateDialogProps } from '@melt-ui/svelte';
import { getContext, setContext } from 'svelte';

const KEY = Symbol();

function set(props: CreateDialogProps) {
  const dialog = createDialog({ ...props });
  setContext(KEY, dialog);
  return dialog;
}

function get() {
  return getContext<Dialog>(KEY);
}

function getPortal() {
  const {
    elements: { portalled },
    states: { open },
  } = get();

  return { portal: portalled, open };
}

function getPanel() {
  const {
    elements: { content, overlay, close },
  } = get();

  return { content, overlay, close };
}

// Export components
export { default as Drawer } from './Drawer.svelte';
export { default as DrawerPortal } from './DrawerPortal.svelte';
export { default as DrawerPanel } from './DrawerPanel.svelte';

// Export context
export const ctx = {
  set,
  get,
  getPortal,
  getPanel,
  getElements: () => get().elements,
  getStates: () => get().states,
  getOptions: () => get().options,
};

// Export types
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
