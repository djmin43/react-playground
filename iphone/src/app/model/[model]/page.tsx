import React from "react";
import { IphoneModel } from "@/types/iphone";

type Params = {
  params: {
    model: IphoneModel;
  };
};

const Page = ({ params }: Params) => {
  return <div>{params.model}</div>;
};

export default Page;
