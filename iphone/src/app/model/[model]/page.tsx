import React from "react";
import { IphoneModel } from "@/types/iphone";
import Header from "@/components/model/header";
import { Iphone } from "@/model/iphone";

type Params = {
  params: {
    model: IphoneModel;
  };
};

const Page = ({ params }: Params) => {
  const iphone = new Iphone(params.model);
  return (
    <div>
      <Header header={iphone.getHeader()} />
    </div>
  );
};

export default Page;
