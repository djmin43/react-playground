import { ReactNode } from "react";
import { Iphone14Pro } from "@/components/icons/iphone-14-pro";
import { Iphone14 } from "@/components/icons/iphone-14";
import { Iphone13 } from "@/components/icons/iphone-13";
import { IphoneSe } from "@/components/icons/iphone-se";
import { Iphone12 } from "@/components/icons/iphone-12";

export const Menu = () => {
  return (
    <nav className={"bg-gray-50 flex justify-center items-center"}>
      {iphoneList.map((iphone) => (
        <div
          key={iphone.modelName}
          className={"flex flex-col justify-center items-center p-4"}
        >
          {iphone.icon}
          <span>{iphone.modelName}</span>
        </div>
      ))}
    </nav>
  );
};

export const iphoneList: IPhone[] = [
  {
    modelName: "iPhone 14 Pro",
    icon: <Iphone14Pro />,
    isNew: true,
  },
  {
    modelName: "iPhone 14",
    icon: <Iphone14 />,
    isNew: true,
  },
  {
    modelName: "iPhone 13",
    icon: <Iphone13 />,
    isNew: false,
  },
  {
    modelName: "iPhone SE",
    icon: <IphoneSe />,
    isNew: false,
  },
  {
    modelName: "iPhone 12",
    icon: <Iphone12 />,
    isNew: false,
  },
];

type IPhone = {
  modelName: string;
  icon: ReactNode;
  isNew: boolean;
};
