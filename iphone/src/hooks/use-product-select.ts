import { useState } from "react";
import { IphoneColor, IphoneModelType } from "@/types/model/iphone";

type Props = {
  initialModel: IphoneModelType;
  initialColor: IphoneColor;
};

export const useProductSelect = ({ initialModel, initialColor }: Props) => {
  const [color, setColor] = useState(initialColor);
  const [model, setModel] = useState(initialModel);

  const selectModel = (model: IphoneModelType) => {
    setModel(model);
  };

  const selectColor = (color: IphoneColor) => {
    setColor(color);
  };
  return {
    color,
    selectColor,
    model,
    selectModel,
  };
};
