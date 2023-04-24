export declare const studioColors: {
  black: string;
  white: string;
  blue: string;
  green: string;
  yellow: string;
  orange: string;
  pink: string;
  deepPink: string;
  purple: string;
  transparent: string;
};
export declare const studioSolidColorList: string[];
export declare const studioGradientColorList: GradientColor[];
export type GradientColor = {
  order: number;
  primaryColor: string;
  colorStops: ColorStop[];
};
export type ColorStop = {
  offset: number;
  color: string;
};
