import React from "react";
import { IphoneProduct } from "../../../types/model/iphone";
import { iphoneColor, iphoneDataModel, modelName } from "@/data-model/iphone";
import Header from "@/components/product/header";
import { Product } from "@/components/product";

type Props = {
  params: {
    product: IphoneProduct;
  };
  searchParams: {
    model: (typeof modelName)[keyof typeof modelName];
    color: keyof typeof iphoneColor;
  };
};

const Page = ({ params, searchParams }: Props) => {
  const productDataModel = iphoneDataModel[params.product];
  return (
    <div className={"px-4 py-12"}>
      <Header isNew={productDataModel.isNew} title={productDataModel.title} />
      <Product
        params={params}
        searchParams={searchParams}
        productDataModal={productDataModel}
      />
    </div>
  );
};

export default Page;
