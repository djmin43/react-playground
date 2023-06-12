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
        src={modelImage.iphone["14proMax"].silver}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
      />
      {models.map((model) => (
        <div key={model.name}>
          <Link href={`${routes.product.root}/${product}?model=${model.name}`}>
            <span
              className={
                modelName === model.name ? "text-blue-600" : "text-black"
              }
            >
              {modelTitle[model.name]}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Models;
