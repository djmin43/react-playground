import React from "react";

export const Storage = () => {
  return (
    <div className={"flex flex-col gap-2 my-4"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>저장 용량.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          당신에게 알맞은 저장 용량은?
        </span>
      </div>
    </div>
  );
};
