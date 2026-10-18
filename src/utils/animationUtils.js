export function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

export function clamp(value, min, max) {
  return Math.max(
    min,
    Math.min(max, value)
  );
}

export function random(min, max) {
  return Math.random() *
    (max - min) +
    min;
}

export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}