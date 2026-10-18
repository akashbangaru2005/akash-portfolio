function MagneticButton({
  children,
  href,
  onClick,
  secondary = false
}) {
  const handleMove = (event) => {
    const button =
      event.currentTarget;

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform =
      `translate(${x * 0.12}px, ${
        y * 0.12
      }px)`;
  };

  const reset = (event) => {
    event.currentTarget.style.transform =
      "translate(0, 0)";
  };

  const content = (
    <span>{children}</span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`magnetic-button ${
          secondary
            ? "button-secondary"
            : ""
        }`}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`magnetic-button ${
        secondary
          ? "button-secondary"
          : ""
      }`}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {content}
    </button>
  );
}

export default MagneticButton;