import { routes } from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { IphoneProduct } from "@/types/model/iphone";
import { modelName } from "@/data-model/iphone";

type Props = {
  product: IphoneProduct;
  modelName: (typeof modelName)[keyof typeof modelName];
  color: string;
};
export const ColorButton = ({ product, color, modelName }: Props) => {
  return (
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
  );
};
