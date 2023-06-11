import React from "react";
import { IphoneModel } from "../../../types/model/iphone";
import { iphoneDataModel, modelName } from "@/data-model/iphone";
import Header from "@/components/product/header";
import Models from "@/components/product/models";

type Props = {
  params: {
    product: IphoneModel;
  };
  searchParams: {
    model: (typeof modelName)[keyof typeof modelName];
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
      />
    </div>
  );
};

export default Page;
