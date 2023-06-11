import { iphoneModel } from "@/components/home/menu";

const iphoneColor = {
  deepPurple: "#635A6C",
  gold: "#F4E7CE",
  silver: "#F0F3F2",
  spaceBlack: "#504F4D",
};

export const iphoneProductModel = {
  [iphoneModel["14pro"]]: {
    title: "iPhone 14 구입하기",
    models: [
      {
        title: "iPhone 14 Pro",
        description: "15.5cm 디스플레이",
        price: 1_550_000,
      },
      {
        title: "iPhone 14 Pro Max",
        description: "17.0cm 디스플레이",
        price: 1_750_000,
      },
    ],
    colors: [
      iphoneColor.deepPurple,
      iphoneColor.gold,
      iphoneColor.silver,
      iphoneColor.spaceBlack,
    ],
    storage: [{}],
  },
} as const;
