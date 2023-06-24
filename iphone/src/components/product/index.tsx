"use client";
import React, { useEffect } from "react";
import { IphoneDataModel, IphoneProduct } from "@/types/model/iphone";
import { Models } from "@/components/product/models";
import { Colors } from "@/components/product/colors";
import { useProductSelect } from "@/hooks/use-product-select";
import { Storage } from "@/components/product/storage";
import { useInView } from "react-intersection-observer";
import { TopDrawer } from "@/components/product/top-drawer";

type Props = {
  params: {
    product: IphoneProduct;
  };
  productDataModal: IphoneDataModel;
};

export const Product = ({ params, productDataModal }: Props) => {
  const { ref: topDrawerRef, inView, entry } = useInView();
  const product = useProductSelect({
    initialModel: productDataModal.models[0],
    initialColor: "silver",
    initialStorage: productDataModal.storage[0],
  });

  return (
    <div className={"flex flex-col gap-4"}>
      <TopDrawer inView={inView} />
      <Models
        models={productDataModal.models}
        selectedModel={product.model}
        product={params.product}
        selectedColor={product.color}
        selectModel={product.selectModel}
      />
      <Colors
        selectedModel={product.model}
        product={params.product}
        colors={productDataModal.colors}
        selectedColor={product.color}
        selectColor={product.selectColor}
      />
      <div ref={topDrawerRef} />
      <Storage
        selectedModel={product.model}
        storages={productDataModal.storage}
        selectStorage={product.selectStorage}
        selectedStorage={product.storage}
      />
    </div>
  );
};
