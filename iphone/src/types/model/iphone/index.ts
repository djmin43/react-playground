import { iphoneColor, modelName } from "@/data-model/iphone";

export type IphoneModel =
  | "iphone14-pro"
  | "iphone14"
  | "iphone13"
  | "iphone-se"
  | "iphone12";

type IphoneTitle = "iPhone 14 Pro" | "iPhone 14";

export type IphoneModelType = {
  name: (typeof modelName)[keyof typeof modelName];
  description: string;
  price: number;
};

type StorageType = {
  amount: number;
  unit: "GB" | "TB";
  price: number;
};

export type IphoneDataModel = {
  isNew: boolean;
  title: IphoneTitle;
  models: IphoneModelType[];
  colors: (typeof iphoneColor)[keyof typeof iphoneColor][];
  storage: StorageType[];
};
