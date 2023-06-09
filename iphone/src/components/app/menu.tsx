import { ReactNode } from "react";
import { Iphone14Pro } from "@/components/icons/iphone-14-pro";
import { Iphone14 } from "@/components/icons/iphone-14";
import { Iphone13 } from "@/components/icons/iphone-13";
import { IphoneSe } from "@/components/icons/iphone-se";
import { Iphone12 } from "@/components/icons/iphone-12";
import Link from "next/link";
import { iphoneBasePath } from "@/constants/base-url";

export const Menu = () => {
  return (
    <nav className={"bg-gray-50 flex justify-center items-start p-2"}>
      {iphoneList.map((iphone) => (
        <Link
          href={`${iphoneBasePath}?model=${iphone.param}`}
          key={iphone.modelName}
        >
          <div className={"flex flex-col justify-start items-center px-2"}>
            {iphone.icon}
            <span className={"text-xs"}>{iphone.modelName}</span>
            {iphone.isNew && (
              <span className={"text-xs text-red-700"}>New</span>
            )}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export const iphoneList: IPhone[] = [
  {
    modelName: "iPhone 14 Pro",
    icon: <Iphone14Pro />,
    isNew: true,
    param: "iphone14-pro",
  },
  {
    modelName: "iPhone 14",
    icon: <Iphone14 />,
    isNew: true,
    param: "iphone14",
  },
  {
    modelName: "iPhone 13",
    icon: <Iphone13 />,
    isNew: false,
    param: "iphone13",
  },
  {
    modelName: "iPhone SE",
    icon: <IphoneSe />,
    isNew: false,
    param: "iphone-se",
  },
  {
    modelName: "iPhone 12",
    icon: <Iphone12 />,
    isNew: false,
    param: "iphone12",
  },
];

type IPhone = {
  modelName: string;
  icon: ReactNode;
  isNew: boolean;
  param: string;
};
