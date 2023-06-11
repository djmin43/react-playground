import React from "react";
import { IphoneModel } from "@/types/iphone";
import { iphoneDataModel, modelName } from "@/data-model/iphone";
import Link from "next/link";
import { routes } from "@/constants/routes";

type Props = {
  params: {
    model: IphoneModel;
  };
  searchParams: {
    model: (typeof modelName)[keyof typeof modelName];
  };
};

const modelTitle = {
  [modelName["14pro"]]: "iPhone 14 Pro",
  [modelName["14proMax"]]: "iPhone 14 Pro Max",
};

const Page = ({ params, searchParams }: Props) => {
  const product = iphoneDataModel[params.product];
  return (
    <div className={"px-4 py-12"}>
      <div className={"flex flex-col gap-2 py-2"}>
        {product.isNew && <span className={"text-sm text-red-700 "}>New</span>}
        <span className={"text-4xl font-extrabold"}>
          {modelTitle[searchParams.product]}
        </span>
        <span className={"text-4xl font-extrabold"}>구입하기</span>
      </div>
      {product.models.map((model) => (
        <div key={model.name}>
          <Link
            href={`${routes.product.root}/${params.product}?model=${model.name}`}
          >
            <span
              className={
                searchParams.product === model.name
                  ? "text-blue-600"
                  : "text-black"
              }
            >
              {modelTitle[model.name]}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
