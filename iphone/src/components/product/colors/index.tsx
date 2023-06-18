"use client";
import React from "react";
import { iphoneColor } from "@/data-model/iphone";
import { IphoneModelType, IphoneProduct } from "@/types/model/iphone";
import Image from "next/image";
import { modelImage } from "@/components/product/models/model-image";
import { ColorButton } from "@/components/product/colors/color-button";

type ModelsProps = {
  product: IphoneProduct;
  model: IphoneModelType;
  colors: (typeof iphoneColor)[keyof typeof iphoneColor][];
  color: string;
};

export const Colors = ({ product, model, color, colors }: ModelsProps) => {
  return (
    <div className={"flex flex-col gap-2 my-2"} id={"colors"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>색상.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          맘에 드는 색상을 선택하세요.
        </span>
      </div>
      <Image
        src={modelImage[product][model.name][color]}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
      />
      {colors.map((color) => (
        <ColorButton
          key={color}
          color={color}
          product={product}
          modelName={model.name}
        />
      ))}
    </div>
  );
};
