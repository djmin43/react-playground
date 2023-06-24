import React from "react";
import { IphoneModelType, IphoneStorageType } from "@/types/model/iphone";

type StorageProps = {
  selectedModel: IphoneModelType;
  storages: IphoneStorageType[];
  selectStorage: (storage: IphoneStorageType) => void;
  selectedStorage: IphoneStorageType;
};

export const Storage = ({
  selectedModel,
  storages,
  selectStorage,
  selectedStorage,
}: StorageProps) => {
  return (
    <div className={"flex flex-col gap-2 my-4"}>
      <div className={"flex gap-2"}>
        <span className={"text-xl font-bold"}>저장 용량.</span>
        <span className={"text-xl font-bold text-gray-500"}>
          당신에게 알맞은 저장 용량은?
        </span>
      </div>
      {storages.map((storage) => (
        <button
          key={storage.amount}
          className={`p-3.5 border rounded-md flex justify-between items-center ${
            selectedStorage.amount === storage.amount
              ? "border-blue-600"
              : "border-gray-600"
          }`}
          onClick={() => selectStorage(storage)}
        >
          <span className={"text-base font-extrabold"}>
            {storage.amount}
            {storage.unit}
          </span>
          <span className={"text-xs font-light"}>
            ₩{selectedModel.price + storage.price}
          </span>
        </button>
      ))}
    </div>
  );
};
