import React from "react";
import { IphoneProduct } from "../../../types/model/iphone";
import { iphoneDataModel } from "@/data-model/iphone";
import Header from "@/components/product/header";
import { Product } from "@/components/product";

type Props = {
  params: {
    product: IphoneProduct;
  };
};

const Page = ({ params }: Props) => {
  const productDataModel = iphoneDataModel[params.product];
  return (
    <div className={"py-12 px-6"}>
      <Header isNew={productDataModel.isNew} title={productDataModel.title} />
      <Product params={params} productDataModal={productDataModel} />
    </div>
  );
};

export default Page;
