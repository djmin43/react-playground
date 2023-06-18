"use client";
import React from "react";
import { IphoneDataModel, IphoneProduct } from "@/types/model/iphone";
import { Models } from "@/components/product/models";
import { Colors } from "@/components/product/colors";
import { useProductSelect } from "@/hooks/use-product-select";

type Props = {
  params: {
    product: IphoneProduct;
  };
  productDataModal: IphoneDataModel;
};

export const Product = ({ params, productDataModal }: Props) => {
  const product = useProductSelect({
    initialModel: productDataModal.models[0],
    initialColor: "silver",
  });

  return (
    <div>
      <Models
        models={productDataModal.models}
        model={product.model}
        product={params.product}
        color={product.color}
        selectModel={product.selectModel}
      />
      <Colors
        model={product.model}
        product={params.product}
        colors={productDataModal.colors}
        selectedColor={product.color}
        selectColor={product.selectColor}
      />
    </div>
  );
};
