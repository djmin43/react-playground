export const studioColors = {
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0E8DE9",
  green: "#5BB84E",
  yellow: "#FFC45C",
  orange: "#FF8238",
  pink: "#FF747F",
  deepPink: "#D50E5E",
  purple: "#9F0EAE",
  transparent: "transparent",
};

export const studioSolidColorList = [
  studioColors.black,
  studioColors.white,
  studioColors.blue,
  studioColors.green,
  studioColors.yellow,
  studioColors.orange,
  studioColors.pink,
  studioColors.deepPink,
  studioColors.purple,
];

export const studioGradientColorList: GradientColor[] = [
  {
    order: 0,
    primaryColor: "#FF9A9E",
    colorStops: [
      { offset: 0, color: "#FF9A9E" },
      {
        offset: 0.99,
        color: "#FAD0C4",
      },
      {
        offset: 0.99,
        color: "#FAD0C4",
      },
    ],
  },
  {
    order: 1,
    primaryColor: "#FFECD2",
    colorStops: [
      { offset: 0, color: "#FFECD2" },
      {
        offset: 1,
        color: "#FCB69F",
      },
    ],
  },
  {
    order: 2,
    primaryColor: "#DF89B5",
    colorStops: [
      { offset: 0, color: "#DF89B5" },
      {
        offset: 1,
        color: "#BFD9FE",
      },
    ],
  },
  {
    order: 3,
    primaryColor: "#E3FDF5",
    colorStops: [
      { offset: 0, color: "#E3FDF5" },
      {
        offset: 1,
        color: "#FFE6FA",
      },
    ],
  },
  {
    order: 4,
    primaryColor: "#A1C4FD",
    colorStops: [
      { offset: 0, color: "#A1C4FD" },
      {
        offset: 1,
        color: "#C2E9FB",
      },
    ],
  },
  {
    order: 5,
    primaryColor: "#FFAFBD",
    colorStops: [
      { offset: 0, color: "#FFAFBD" },
      {
        offset: 1,
        color: "#C9FFBF",
      },
    ],
  },
  {
    order: 6,
    primaryColor: "#D4FC79",
    colorStops: [
      { offset: 0, color: "#D4FC79" },
      {
        offset: 1,
        color: "#96E6A1",
      },
    ],
  },
  {
    order: 7,
    primaryColor: "#E8198B",
    colorStops: [
      { offset: 0, color: "#E8198B" },
      {
        offset: 1,
        color: "#C7EAFD",
      },
    ],
  },
  {
    order: 8,
    primaryColor: "#00DBDE",
    colorStops: [
      { offset: 0, color: "#00DBDE" },
      {
        offset: 1,
        color: "#FC00FF",
      },
    ],
  },
];

export type GradientColor = {
  order: number;
  primaryColor: string;
  colorStops: ColorStop[];
};

export type ColorStop = {
  offset: number;
  color: string;
};
