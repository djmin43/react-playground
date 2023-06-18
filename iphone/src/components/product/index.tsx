"use client";
import React, { useState } from "react";
import { IphoneDataModel, IphoneProduct } from "@/types/model/iphone";
import { iphoneColor, modelName } from "@/data-model/iphone";
import { Models } from "@/components/product/models";
import { Colors } from "@/components/product/colors";

type Props = {
  params: {
    product: IphoneProduct;
  };
  searchParams: {
    model: (typeof modelName)[keyof typeof modelName];
    color: keyof typeof iphoneColor;
  };
  productDataModal: IphoneDataModel;
};

export const Product = ({ params, searchParams, productDataModal }: Props) => {
  const [color, setColor] = useState(iphoneColor.gold);
  const [model, setModel] = useState(productDataModal.models[0]);
  return (
    <div>
      <Models
        models={productDataModal.models}
        model={model}
        product={params.product}
        color={color}
      />
      <Colors
        model={model}
        product={params.product}
        colors={productDataModal.colors}
        color={color}
      />
    </div>
  );
};
