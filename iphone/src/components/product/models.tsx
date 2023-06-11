import React from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { modelName } from "@/data-model/iphone";
import { IphoneModel, IphoneModelType } from "@/types/model/iphone";

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
    <>
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
    </>
  );
};

export default Models;
