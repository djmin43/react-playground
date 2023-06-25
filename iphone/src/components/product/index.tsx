"use client";
import React from "react";
import { IphoneDataModel, IphoneProduct } from "@/types/model/iphone";
import { Models } from "@/components/product/models";
import { Colors } from "@/components/product/colors";
import { useProductSelect } from "@/hooks/use-product-select";
import { Storage } from "@/components/product/storage";
import { useInView } from "react-intersection-observer";
import { TopDrawer } from "@/components/product/top-drawer";

type ProductProps = {
  params: {
    product: IphoneProduct;
  };
  productDataModal: IphoneDataModel;
};

export const Product = ({ params, productDataModal }: ProductProps) => {
  const { ref: topDrawerRef, inView, entry } = useInView();
  const product = useProductSelect({
    initialModel: productDataModal.models[0],
    initialColor: "silver",
    initialStorage: productDataModal.storage[0],
  });

  return (
    <div className={"flex flex-col gap-4 relative"}>
      <TopDrawer
        inView={inView}
        usedPrice={1_000_000}
        newPrice={product.storage.price + product.model.price}
        product={params.product}
        selectedColor={product.color}
        selectedModel={product.model}
        selectedStorage={product.storage}
      />
      <Models
        product={params.product}
        models={productDataModal.models}
        selectModel={product.selectModel}
        selectedModel={product.model}
        selectedColor={product.color}
      />
      <Colors
        product={params.product}
        colors={productDataModal.colors}
        selectColor={product.selectColor}
        selectedColor={product.color}
        selectedModel={product.model}
      />
      <div className={"absolute top-2/4"} ref={topDrawerRef} />
      <Storage
        selectedModel={product.model}
        storages={productDataModal.storage}
        selectStorage={product.selectStorage}
        selectedStorage={product.storage}
      />
    </div>
  );
};
