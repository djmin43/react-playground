"use client";
import React from "react";
import { IphoneDataModel, IphoneModel } from "@/types/model/iphone";
import { iphoneColor, modelName } from "@/data-model/iphone";
import { Models } from "@/components/product/models";
import { Colors } from "@/components/product/colors";

type Props = {
  params: {
    product: IphoneModel;
  };
  searchParams: {
    model: (typeof modelName)[keyof typeof modelName];
    color: keyof typeof iphoneColor;
  };
  productDataModal: IphoneDataModel;
};

export const Product = ({ params, searchParams, productDataModal }: Props) => {
  return (
    <div>
      <Models
        models={productDataModal.models}
        modelName={searchParams.model}
        product={params.product}
        color={searchParams.color}
      />
      <Colors
        modelName={searchParams.model}
        product={params.product}
        colors={productDataModal.colors}
        color={searchParams.color}
      />
    </div>
  );
};
