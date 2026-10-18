import React, { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / documentHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}

export default ScrollProgress;