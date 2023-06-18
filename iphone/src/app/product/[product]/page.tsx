import React from "react";
import { IphoneModel } from "../../../types/model/iphone";
import { iphoneColor, iphoneDataModel, modelName } from "@/data-model/iphone";
import Header from "@/components/product/header";
import { Colors } from "@/components/product/colors";
import { Models } from "@/components/product/models";
import { Product } from "@/components/product";

type Props = {
  params: {
    product: IphoneModel;
  };
  searchParams: {
    model: (typeof modelName)[keyof typeof modelName];
    color: keyof typeof iphoneColor;
  };
};

const Page = ({ params, searchParams }: Props) => {
  const product = iphoneDataModel[params.product];
  return (
    <div className={"px-4 py-12"}>
      <Header isNew={product.isNew} title={product.title} />
      <Models
        models={product.models}
        modelName={searchParams.model}
        product={params.product}
        color={searchParams.color}
      />
      <Colors
        modelName={searchParams.model}
        product={params.product}
        colors={product.colors}
        color={searchParams.color}
      />
    </div>
  );
};

export default Page;
