export function getImageParticleData(
  image,
  canvasWidth,
  canvasHeight,
  particleGap = 5
) {
  const offscreen = document.createElement("canvas");

  const context = offscreen.getContext("2d", {
    willReadFrequently: true
  });

  const imageRatio = image.width / image.height;

  let width = canvasWidth * 0.72;
  let height = width / imageRatio;

  if (height > canvasHeight * 0.82) {
    height = canvasHeight * 0.82;
    width = height * imageRatio;
  }

  offscreen.width = Math.floor(width);
  offscreen.height = Math.floor(height);

  context.drawImage(
    image,
    0,
    0,
    offscreen.width,
    offscreen.height
  );

  const imageData = context.getImageData(
    0,
    0,
    offscreen.width,
    offscreen.height
  );

  const particles = [];

  const offsetX = (canvasWidth - offscreen.width) / 2;
  const offsetY = (canvasHeight - offscreen.height) / 2;

  for (
    let y = 0;
    y < offscreen.height;
    y += particleGap
  ) {
    for (
      let x = 0;
      x < offscreen.width;
      x += particleGap
    ) {
      const index =
        (y * offscreen.width + x) * 4;

      const r = imageData.data[index];
      const g = imageData.data[index + 1];
      const b = imageData.data[index + 2];
      const a = imageData.data[index + 3];

      const brightness =
        (r + g + b) / 3;

      if (a > 100 && brightness < 245) {
        particles.push({
          targetX: offsetX + x,
          targetY: offsetY + y,

          x:
            Math.random() *
              canvasWidth,

          y:
            Math.random() *
              canvasHeight,

          char:
            Math.random() > 0.5
              ? "0"
              : "1",

          brightness
        });
      }
    }
  }

  return particles;
}