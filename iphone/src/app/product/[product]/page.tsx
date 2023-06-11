import React from "react";
import { IphoneModel } from "@/types/iphone";
import { iphoneDataModel, modelName } from "@/data-model/iphone";
import Link from "next/link";
import { routes } from "@/constants/routes";
import Header from "@/components/product/header";

type Props = {
  params: {
    product: IphoneModel;
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
      <Header isNew={product.isNew} title={product.title} />
      {product.models.map((model) => (
        <div key={model.name}>
          <Link
            href={`${routes.product.root}/${params.product}?model=${model.name}`}
          >
            <span
              className={
                searchParams.model === model.name
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
