import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation<T extends HTMLElement>(
  options: {
    y?: number;
    opacity?: number;
    duration?: number;
    stagger?: number;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<T>(null);
  const { y = 40, opacity = 0, duration = 0.8, stagger = 0.1, childSelector } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    gsap.set(targets, { y, opacity });

    const tl = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration,
      stagger: childSelector ? stagger : 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [y, opacity, duration, stagger, childSelector]);

  return ref;
}
