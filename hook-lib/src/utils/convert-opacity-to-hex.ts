export const convertOpacityToHex = (opacity: number) => {
  const hex = Math.floor(opacity * 255)
    .toString(16)
    .toUpperCase();
  if (hex.length === 1) {
    return "0" + hex;
  }
  return hex;
};
