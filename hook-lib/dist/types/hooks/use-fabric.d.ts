import { MutableRefObject } from "react";
import { getGradientCoords } from "../utils/get-gradient-coords";
import { fabric } from "fabric";
import { Gradient } from "fabric/fabric-impl";
import { ColorStop } from "../constants/studio-colors";
export interface SelectedObject extends Object {
  fontWeight: "bold" | "normal";
  fontStyle: "italic" | "normal";
  underline: boolean;
  linethrough: boolean;
  isInverse: boolean;
  textAlign: "left" | "center" | "right" | "justify";
  fontFamily: string;
}
type FabricProps = {
  canvasHeight: number;
  canvasWidth: number;
};
export declare const useFabric: ({
  canvasHeight,
  canvasWidth,
}: FabricProps) => {
  canvas: MutableRefObject<fabric.Canvas>;
  setCanvas: (canvasElement: HTMLCanvasElement) => void;
  addImage: (imageUrl: string) => void;
  getCanvasImageFile: (
    canvas: MutableRefObject<fabric.Canvas>
  ) => Promise<File>;
  injectContent: (content: unknown) => void;
  setDimension: (isHorizontal: boolean) => void;
  setBackgroundColor: (backgroundColor: string | Gradient) => void;
  dimension: {
    longWidth: number;
    shortHeight: number;
    shortWidth: number;
    longHeight: number;
  };
  undo: () => void;
  redo: () => void;
  addHistory: (content: unknown, currentIndex: number) => void;
  clearHistory: () => void;
  hasUndoHistory: boolean;
  hasRedoHistory: boolean;
  deleteObjects: () => void;
  isObjectSelected: boolean;
  selectedObjects: fabric.Object[];
  getGradient: (
    coords: ReturnType<typeof getGradientCoords>,
    colorStops: ColorStop[]
  ) => fabric.Gradient;
  activateDrawingMode: () => void;
  disableDrawingMode: () => void;
  setBrush: (type: BrushType, color: string, width: number) => void;
  addText: () => void;
  setTextColor: (color: string) => void;
  setTextStyle: (style: FabricOptionType) => void;
  currentIndex: number;
  reset: () => void;
};
export type BrushType = "pencil" | "spray" | "wet-paint" | "highlight";
export type FabricOptionType = {
  [key: string]: string | boolean;
};
export {};
