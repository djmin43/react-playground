import React from "react";
import { IphoneModel } from "@/types/iphone";
import ProductHeader from "@/components/model/product-header";
import { iphoneProductModel } from "@/proudct-model/iphone";

type Params = {
  params: {
    model: IphoneModel;
  };
};

const Page = ({ params }: Params) => {
  const productModel = iphoneProductModel[params.model];
  return (
    <div>
      <ProductHeader />
    </div>
  );
};

export default Page;
