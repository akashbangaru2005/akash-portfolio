import { useEffect, useRef, useState } from "react";

export function useIntersection(options = {}) {
  const ref = useRef(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold: 0.12,
          ...options
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, visible];
}