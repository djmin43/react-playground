import React from "react";
import { IphoneModel } from "@/types/iphone";
import ProductHeader from "@/components/model/product-header";

type Params = {
  params: {
    model: IphoneModel;
  };
};

const Page = ({ params }: Params) => {
  return (
    <div>
      <ProductHeader />
    </div>
  );
};

export default Page;
