import { iphoneModel } from "@/components/home/menu";
import { modelName } from "@/data-model/iphone";

export const modelImage = {
  iphone: {
    "14pro": {
      silver: "/product/iphone/14-pro/iphone-14-pro-silver.jpeg",
    },
    "14proMax": {
      silver: "/product/iphone/14-pro/iphone-14-pro-max-silver.jpeg",
    },
  },
};

export const productImage = {
  [iphoneModel["14pro"]]: {
    silver: modelImage.iphone["14pro"].silver,
  },
  [iphoneModel["14ProMax"]]: {
    silver: modelImage.iphone["14proMax"].silver,
  },
};
