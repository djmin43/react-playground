import React from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { modelName } from "@/data-model/iphone";
import { IphoneModel, IphoneModelType } from "@/types/model/iphone";
import Image from "next/image";
import { modelImage } from "@/components/product/models/model-image";

type ModelsProps = {
  models: IphoneModelType[];
  product: IphoneModel;
  modelName: (typeof modelName)[keyof typeof modelName];
};

const modelTitle = {
  [modelName["14pro"]]: "iPhone 14 Pro",
  [modelName["14proMax"]]: "iPhone 14 Pro Max",
};

const Models = ({ models, product, modelName }: ModelsProps) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>모델.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          당신에게 딱 맞는 모델은?
        </span>
      </div>
      <Image
        src={modelImage[product][modelName].silver}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
      />
      {models.map((model) => (
        <Link
          key={model.name}
          href={`${routes.product.root}/${product}?model=${model.name}`}
        >
          <div
            className={`p-3.5 border rounded-md flex justify-between items-center ${
              modelName === model.name ? "border-blue-600" : "border-gray-600"
            }`}
          >
            <div className={"flex flex-col"}>
              <span className={"text-base font-extrabold"}>
                {modelTitle[model.name]}
              </span>
              <span className={"text-xs font-light"}>{model.description}</span>
            </div>
            <span className={"text-xs font-light"}>
              ₩{model.price.toLocaleString()}부터
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Models;