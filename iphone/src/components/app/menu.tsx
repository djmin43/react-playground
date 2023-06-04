import React from "react";
import Image from "next/image";

export const Menu = () => {
  return (
    <nav className={"bg-gray-50 flex justify-center items-center"}>
      {iphoneList.map((iphone) => (
        <div key={iphone.modelName}>
          <span>{iphone.modelName}</span>
          <Image
            src={iphone.src}
            alt={iphone.modelName}
            width={12}
            height={12}
          />
        </div>
      ))}
    </nav>
  );
};

export const iphoneList: IPhone[] = [
  {
    modelName: "iPhone 14 Pro",
    src: "/iphones/iphone-14-pro.svg",
    isNew: true,
  },
  {
    modelName: "iPhone 14",
    src: "/iphones/iphone-14.svg",
    isNew: true,
  },
  {
    modelName: "iPhone 13",
    src: "/iphones/iphone-13.svg",
    isNew: false,
  },
  {
    modelName: "iPhone SE",
    src: "/iphones/iphone-se.svg",
    isNew: false,
  },
  {
    modelName: "iPhone 12",
    src: "/iphones/iphone-12.svg",
    isNew: false,
  },
];

type IPhone = {
  modelName: string;
  src: string;
  isNew: boolean;
};
