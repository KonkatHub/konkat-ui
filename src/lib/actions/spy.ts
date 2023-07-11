import type { Action } from 'svelte/action';

type SpyOptions = {
  target: string;
  intel: string[];
};

type SpyEventDetail = {
  spy: HTMLElement;
  intel: string;
  value: string | null;
  target: string;
  targetElement: HTMLElement;
};

type SpyEvents = {
  'on:signal': (e: CustomEvent<SpyEventDetail>) => void;
};

type SpyAction = Action<HTMLElement, SpyOptions, SpyEvents>;

export const spy: SpyAction = (node: HTMLElement, options: SpyOptions) => {
  const targetElement = document.getElementById(options.target);

  if (!targetElement) {
    return;
  }

  const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type !== 'attributes') {
        return;
      }

      options.intel.forEach((intel) => {
        if (mutation.attributeName !== intel || !(node instanceof HTMLElement)) {
          return;
        }
        const targetElement = mutation.target as HTMLElement;
        const value = targetElement.getAttribute(intel);

        const detail: SpyEventDetail = {
          spy: node,
          intel,
          target: options.target,
          targetElement,
          value,
        };
        node.dispatchEvent(new CustomEvent('signal', { detail }));
      });
    });
  });

  const config: MutationObserverInit = {
    attributes: true,
    attributeFilter: options.intel,
  };

  observer.observe(targetElement, config);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
