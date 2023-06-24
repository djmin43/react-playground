import { useState } from "react";
import {
  IphoneColor,
  IphoneModelType,
  IphoneStorageType,
} from "@/types/model/iphone";

type Props = {
  initialModel: IphoneModelType;
  initialColor: IphoneColor;
  initialStorage: IphoneStorageType;
};

export const useProductSelect = ({
  initialModel,
  initialColor,
  initialStorage,
}: Props) => {
  const [color, setColor] = useState(initialColor);
  const [model, setModel] = useState(initialModel);
  const [storage, setStorage] = useState(initialStorage);

  const selectModel = (model: IphoneModelType) => {
    setModel(model);
  };

  const selectColor = (color: IphoneColor) => {
    setColor(color);
  };

  const selectStorage = (storage: IphoneStorageType) => {
    setStorage(storage);
  };

  return {
    color,
    selectColor,
    model,
    selectModel,
    storage,
    selectStorage,
  };
};
