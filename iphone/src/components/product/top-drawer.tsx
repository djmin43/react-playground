import React, { useEffect, useState } from "react";
import { useDrawerTriggered } from "@/hooks/use-drawer-triggered";
import Link from "next/link";
import { routes } from "@/constants/routes";
import {
  IphoneColor,
  IphoneModelType,
  IphoneProduct,
  IphoneStorageType,
} from "@/types/model/iphone";
import { iphoneColor, modelName } from "@/data-model/iphone";

type TopDrawerProps = {
  inView: boolean;
  newPrice: number;
  usedPrice: number;
  product: IphoneProduct;
  selectedModel: IphoneModelType;
  selectedColor: IphoneColor;
  selectedStorage: IphoneStorageType;
};

const color = {
  [iphoneColor.silver]: "실버",
  [iphoneColor.spaceBlack]: "스페이스블랙",
  [iphoneColor.gold]: "골드",
  [iphoneColor.deepPurple]: "딥퍼플",
};

const model = {
  [modelName["14pro"]]: "아이폰 14 프로",
  [modelName["14proMax"]]: "아이폰 14 프로맥스",
};

export const TopDrawer = ({
  inView,
  newPrice,
  usedPrice,
  product,
  selectedStorage,
  selectedModel,
  selectedColor,
}: TopDrawerProps) => {
  const isDrawerTriggered = useDrawerTriggered(inView);

  if (isDrawerTriggered)
    return (
      <div
        className={`flex flex-col top-0 pt-4 fixed bg-white w-full border-b-2 gap-1.5 ${
          inView ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        <div className={"px-2"}>
          <span className={"text-xl font-extrabold"}>
            {model[selectedModel.name]} {color[selectedColor]}{" "}
            {selectedStorage.amount}
            {selectedStorage.unit}
          </span>
          <div className={"flex flex-col"}>
            <span className={"text-xs"}>
              애플스토어: ₩{newPrice.toLocaleString()}
            </span>
            <span className={"text-xs"}>
              중고평균: ₩{usedPrice.toLocaleString()}
            </span>
            <span className={"text-sm font-extrabold"}>
              차이: ₩{(newPrice - usedPrice).toLocaleString()}
            </span>
          </div>
        </div>
        <div
          className={
            "flex flex-col gap-3 p-2 justify-center items-center w-full"
          }
        >
          <Link href={`${routes.product.root}/${product}/detail`}>
            <button className={"bg-blue-600 h-10 w-80 rounded-2xl"}>
              <span className={"text-white text-sm"}>더 알아보기</span>
            </button>
          </Link>
        </div>
      </div>
    );
};
