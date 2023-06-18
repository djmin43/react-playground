"use client";
import React from "react";
import { iphoneColor } from "@/data-model/iphone";
import {
  IphoneColor,
  IphoneModelType,
  IphoneProduct,
} from "@/types/model/iphone";
import Image from "next/image";
import { modelImage } from "@/components/product/models/model-image";

type ModelsProps = {
  product: IphoneProduct;
  model: IphoneModelType;
  colors: (typeof iphoneColor)[keyof typeof iphoneColor][];
  selectedColor: IphoneColor;
  selectColor: (color: IphoneColor) => void;
};

export const Colors = ({
  product,
  model,
  selectedColor,
  colors,
  selectColor,
}: ModelsProps) => {
  return (
    <div className={"flex flex-col gap-2 my-2"} id={"colors"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>색상.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          맘에 드는 색상을 선택하세요.
        </span>
      </div>
      <Image
        src={modelImage[product][model.name][selectedColor]}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
      />
      {colors.map((color) => (
        <button
          key={color}
          className={`p-3.5 border rounded-md flex justify-between items-center ${
            selectedColor === color ? "border-blue-600" : "border-gray-600"
          }`}
          onClick={() => selectColor(color)}
        >
          <div className={"flex flex-col"}>
            <span className={"text-base font-extrabold"}>{color}</span>
          </div>
        </button>
      ))}
    </div>
  );
};
