import React, { useEffect, useState } from "react";

type TopDrawerProps = {
  inView: boolean;
  newPrice: number;
  usedPrice: number;
};

export const TopDrawer = ({ inView, newPrice, usedPrice }: TopDrawerProps) => {
  const [isDrawerTriggered, setIsDrawerTriggered] = useState(false);
  useEffect(() => {
    if (inView === true) {
      setIsDrawerTriggered(true);
    }
  }, [inView]);
  if (isDrawerTriggered)
    return (
      <div
        className={`flex flex-col top-0 fixed bg-white h-20 w-full border-2 ${
          inView ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        <span>새 모델 가격: ₩{newPrice.toLocaleString()}</span>
        <span>중고 평균 가격: ₩{usedPrice.toLocaleString()}</span>
        <span>가격차이: ₩{(newPrice - usedPrice).toLocaleString()} </span>
      </div>
    );
};
