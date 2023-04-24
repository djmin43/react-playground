export type GradientTypes =
  | "linear"
  | "vertical"
  | "diagonal"
  | "reverse-linear";
export declare const getGradientCoords: (
  width: number,
  height: number,
  type: GradientTypes
) => {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};
