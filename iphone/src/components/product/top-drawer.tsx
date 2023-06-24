import React from "react";

type TopDrawerProps = {
  inView: boolean;
};

export const TopDrawer = ({ inView }: TopDrawerProps) => {
  return (
    <div>
      {window.scrollY !== 0 && (
        <div
          className={`top-0 fixed bg-white h-20 w-full border-2 border-amber-500 ${
            inView ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          디테일 페이지로 가기
        </div>
      )}
    </div>
  );
};
