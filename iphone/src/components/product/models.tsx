import React from "react";
import { modelName } from "@/data-model/iphone";
import {
  IphoneColor,
  IphoneModelType,
  IphoneProduct,
} from "@/types/model/iphone";
import Image from "next/image";
import { modelImage } from "@/components/product/model-image";

type ModelsProps = {
  models: IphoneModelType[];
  product: IphoneProduct;
  selectedModel: IphoneModelType;
  selectedColor: IphoneColor;
  selectModel: (model: IphoneModelType) => void;
};

const modelTitle = {
  [modelName["14pro"]]: "iPhone 14 Pro",
  [modelName["14proMax"]]: "iPhone 14 Pro Max",
};

export const Models = ({
  models,
  product,
  selectedModel,
  selectedColor,
  selectModel,
}: ModelsProps) => {
  return (
    <div className={"flex flex-col gap-2 my-4 px-6"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>모델.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          당신에게 딱 맞는 모델은?
        </span>
      </div>
      <Image
        src={modelImage[product][selectedModel.name][selectedColor]}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
        priority
      />
      {models.map((model) => (
        <button
          key={model.name}
          className={`px-3.5 h-20 rounded-md flex justify-between items-center ${
            selectedModel.name === model.name
              ? "border-blue-600 border-2"
              : "border-gray-600 border"
          }`}
          onClick={() => selectModel(model)}
        >
          <div className={"flex flex-col items-start"}>
            <span className={"text-lg font-extrabold"}>
              {modelTitle[model.name]}
            </span>
            <span className={"text-xs font-light"}>{model.description}</span>
          </div>
          <span className={"text-xs font-light"}>
            ₩ {model.price.toLocaleString()}부터
          </span>
        </button>
      ))}
    </div>
  );
};
