export type GradientTypes =
  | "linear"
  | "vertical"
  | "diagonal"
  | "reverse-linear";

export const getGradientCoords = (
  width: number,
  height: number,
  type: GradientTypes
) => {
  switch (type) {
    case "linear":
      return {
        x1: 0,
        y1: 0,
        x2: width,
        y2: 0,
      };
    case "vertical":
      return {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: height,
      };
    case "diagonal":
      return {
        x1: 0,
        y1: 0,
        x2: width,
        y2: height,
      };
    case "reverse-linear":
      return {
        x1: width,
        y1: 0,
        x2: 0,
        y2: 0,
      };
  }
};
