import React from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { iphoneColor, modelName } from "@/data-model/iphone";
import { IphoneModel, IphoneModelType } from "@/types/model/iphone";
import Image from "next/image";
import { modelImage } from "@/components/product/models/model-image";

type ModelsProps = {
  models: IphoneModelType[];
  product: IphoneModel;
  modelName: (typeof modelName)[keyof typeof modelName];
  colors: (typeof iphoneColor)[keyof typeof iphoneColor][];
  color: keyof typeof iphoneColor;
};

export const Colors = ({
  models,
  product,
  modelName,
  color,
  colors,
}: ModelsProps) => {
  return (
    <div className={"flex flex-col gap-2 my-2"} id={"colors"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>색상.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          맘에 드는 색상을 선택하세요.
        </span>
      </div>
      {modelImage[product][modelName][color]}
      <Image
        src={modelImage[product][modelName][color]}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
      />
      {colors.map((color) => (
        <Link
          key={color}
          href={`${routes.product.root}/${product}?model=${modelName}&color=${color}`}
          replace
          scroll={false}
        >
          <div
            className={`p-3.5 border rounded-md flex justify-between items-center ${
              color === color ? "border-blue-600" : "border-gray-600"
            }`}
          >
            <div className={"flex flex-col"}>
              <span className={"text-base font-extrabold"}>{color}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
