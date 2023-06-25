import React, { useEffect, useState } from "react";
import { useDrawerTriggered } from "@/hooks/use-drawer-triggered";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { IphoneProduct } from "@/types/model/iphone";

type TopDrawerProps = {
  inView: boolean;
  newPrice: number;
  usedPrice: number;
  product: IphoneProduct;
};

export const TopDrawer = ({
  inView,
  newPrice,
  usedPrice,
  product,
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
          <span className={"text-lg font-extrabold"}>
            아이폰 14 Pro 실버 128GB
          </span>
          <div className={"flex flex-col"}>
            <span className={"text-xs"}>
              애플스토어: ₩{newPrice.toLocaleString()}
            </span>
            <span className={"text-xs"}>
              중고평균: ₩{usedPrice.toLocaleString()}
            </span>
            <span className={"text-xs font-extrabold"}>
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
