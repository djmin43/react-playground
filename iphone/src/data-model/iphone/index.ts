import { IphoneDataModel, IphoneModel } from "@/types/model/iphone";

export const iphoneColor = {
  deepPurple: "deep-purple",
  gold: "gold",
  silver: "silver",
  spaceBlack: "spaceBlack",
};
export const modelName = {
  "14pro": "14-pro",
  "14proMax": "14-pro-max",
};

export const product = {
  "14pro": "iphone14-pro",
  "14": "iphone14",
  "13": "iphone13",
  se: "iphone-se",
  "12": "iphone12",
};

const iphone14ProDataModel: IphoneDataModel = {
  isNew: true,
  title: "iPhone 14 Pro",
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

export const iphoneDataModel: Record<string, IphoneDataModel> = {
  [product["14pro"]]: iphone14ProDataModel,
};
