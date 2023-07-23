import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollIntoView(e: MouseEvent, offset = 100) {
  e.preventDefault();

  const target = e.target as HTMLAnchorElement;
  const href = target.href;
  const id = href.split('#')[1];

  const element = document.querySelector('#' + id);
  if (!element) {
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Type that is used to pass arbitrary MeltUI store to a component. Works
 * with the preprocessor to assign the store to an element.
 */
export type Melted = Record<string, unknown> & { action: (node: HTMLElement) => void };

/**
 * An helper function that returns a default value for Melted. It is used
 * to avoid null checks when using Melted.
 */
export function resolveMelted(melted?: Melted) {
  return (
    melted ?? {
      action: () => {
        /** no-op **/
      },
    }
  );
}
