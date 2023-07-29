import type { createDialog } from '@melt-ui/svelte';
import { setContext, getContext } from 'svelte';

export { default as Drawer } from './Drawer.svelte';
export { default as DrawerContent } from './DrawerContent.svelte';

export type Dialog = ReturnType<typeof createDialog>;
export type DialogContext = {
  close: Dialog['close'];
  title: Dialog['title'];
  description: Dialog['description'];
};

const key = Symbol();

export function drawerContext() {
  function set({ close, title, description }: DialogContext) {
    setContext<DialogContext>(key, { close, title, description });
  }

  function get(componentName: string) {
    const context = getContext<DialogContext | undefined>(key);
    if (!context) {
      throw new Error(
        `Drawer context is undefined. Please use ${componentName} only inside a Drawer component`
      );
    }
    return context;
  }

  return {
    set,
    get,
  };
}
