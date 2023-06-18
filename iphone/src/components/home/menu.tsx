import { ReactNode } from "react";
import { Iphone14Pro } from "@/components/icons/iphone-14-pro";
import { Iphone14 } from "@/components/icons/iphone-14";
import { Iphone13 } from "@/components/icons/iphone-13";
import { IphoneSe } from "@/components/icons/iphone-se";
import { Iphone12 } from "@/components/icons/iphone-12";
import Link from "next/link";
import { routes } from "../../constants/routes";
import { iphoneColor, modelName, product } from "@/data-model/iphone";

export const Menu = () => {
  return (
    <nav className={"bg-gray-50 flex justify-center items-start p-2"}>
      {iphoneList.map((iphone) => (
        <Link
          href={`${routes.product.root}/${iphone.targetUrl}`}
          key={iphone.modelName}
        >
          <div className={"flex flex-col justify-start items-center px-2"}>
            {iphone.icon}
            <span className={"text-xs hover:text-blue-600"}>
              {iphone.modelName}
            </span>
            {iphone.isNew && (
              <span className={"text-xs text-red-700"}>New</span>
            )}
          </div>
        </Link>
      ))}
    </nav>
  );
};

type IPhone = {
  modelName: string;
  icon: ReactNode;
  isNew: boolean;
  targetUrl: string;
};

export const iphoneList: IPhone[] = [
  {
    modelName: "iPhone 14 Pro",
    icon: <Iphone14Pro />,
    isNew: true,
    targetUrl: product["14pro"],
  },
  {
    modelName: "iPhone 14",
    icon: <Iphone14 />,
    isNew: true,
    targetUrl: product["14"],
  },
  {
    modelName: "iPhone 13",
    icon: <Iphone13 />,
    isNew: false,
    targetUrl: product["13"],
  },
  {
    modelName: "iPhone SE",
    icon: <IphoneSe />,
    isNew: false,
    targetUrl: product.se,
  },
  {
    modelName: "iPhone 12",
    icon: <Iphone12 />,
    isNew: false,
    targetUrl: product["12"],
  },
];
