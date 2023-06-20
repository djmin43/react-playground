import React from "react";
import { iphoneColor } from "@/data-model/iphone";
import {
  IphoneColor,
  IphoneModelType,
  IphoneProduct,
} from "@/types/model/iphone";
import Image from "next/image";
import { modelImage } from "@/components/product/models/model-image";
import { iphoneColorPalette } from "@/components/product/colors/color-palette";

type ModelsProps = {
  product: IphoneProduct;
  selectedModel: IphoneModelType;
  colors: (typeof iphoneColor)[keyof typeof iphoneColor][];
  selectedColor: IphoneColor;
  selectColor: (color: IphoneColor) => void;
};

export const Colors = ({
  product,
  selectedModel,
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
        src={modelImage[product][selectedModel.name][selectedColor]}
        alt={"iphone"}
        style={{ objectFit: "contain", borderRadius: "16px" }}
        width={350}
        height={246}
      />
      <div className={"flex gap-4"}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: iphoneColorPalette[color],
              boxShadow: selectedColor === color ? "0 0 0 1.5px blue" : "",
            }}
            className={`p-3.5 rounded-full flex border-2 border-white `}
            onClick={() => selectColor(color)}
          />
        ))}
      </div>
    </div>
  );
};
