import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        (scrollTop / documentHeight) * 100
      );
    };

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return progress;
}