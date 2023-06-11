import { iphoneModel } from "@/components/home/menu";

const iphoneColor = {
  deepPurple: "#635A6C",
  gold: "#F4E7CE",
  silver: "#F0F3F2",
  spaceBlack: "#504F4D",
};

export const modelName = {
  "14pro": "14-pro",
  "14proMax": "14-pro-max",
};
const iphone14ProDataModel = {
  isNew: true,
  title: "iPhone 14 구입하기",
  models: [
    {
      name: modelName["14pro"],
      description: "15.5cm 디스플레이",
      price: 1_550_000,
    },
    {
      name: modelName["14proMax"],
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
  storage: [
    {
      amount: 128,
      unit: "GB",
      price: 0,
    },
    {
      amount: 256,
      unit: "GB",
      price: 150_000,
    },
    {
      amount: 512,
      unit: "GB",
      price: 450_000,
    },
    {
      amount: 1,
      unit: "TB",
      price: 750_000,
    },
  ],
};

export const iphoneDataModel = {
  [iphoneModel["14pro"]]: iphone14ProDataModel,
};
