import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation utility that checks if an element is in view
export function onViewportEnter(element: HTMLElement, callback: () => void) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.1 }
  );
  
  observer.observe(element);
  
  return () => {
    observer.disconnect();
  };
}
