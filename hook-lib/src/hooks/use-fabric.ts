import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getGradientCoords } from "../utils/get-gradient-coords";
import { fabric } from "fabric";
import {
  Gradient,
  ICanvasOptions,
  IEvent,
  ITextboxOptions,
} from "fabric/fabric-impl";
import { convertBase64ToFile } from "../utils/convert-base64-to-file";
import { convertOpacityToHex } from "../utils/convert-opacity-to-hex";
import { ColorStop, studioColors } from "../constants/studio-colors";

// NOTE: (James) should revisit this type
export interface SelectedObject extends Object {
  fontWeight: "bold" | "normal";
  fontStyle: "italic" | "normal";
  underline: boolean;
  linethrough: boolean;
  isInverse: boolean;
  textAlign: "left" | "center" | "right" | "justify";
  fontFamily: string;
}

// does this go to the host library?
const dimension = {
  longWidth: 970,
  shortHeight: 616,
  shortWidth: 392,
  longHeight: 616,
};

type BrushSettingType = {
  type: BrushType;
  color: string;
  width: number;
  webPaintOpacity?: number;
};

type ImageLayoutSetting = {
  scale: number;
  left: number;
  top: number;
};

export const useFabric = () => {
  // TODO: (James) change dimension for bigger canvas. also try 'scale' feature for responsiveness
  const canvas = useRef<fabric.Canvas>(new window.fabric.Canvas(""));
  const [history, setHistory] = useState<unknown[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isObjectSelected, setIsObjectSelected] = useState<boolean>(false);
  const [selectedObjects, setSelectedObjects] = useState<fabric.Object[]>([]);

  useEffect(() => {
    const addObjectHistory = () => {
      addHistory(JSON.stringify(canvas.current), currentIndex);
    };

    const addDrawingHistory = () => {
      addHistory(JSON.stringify(canvas.current), currentIndex);
    };
    const activateSelection = (object: IEvent<Event>) => {
      if (object.selected) {
        setSelectedObjects(object.selected);
      }
      setIsObjectSelected(true);
    };
    const deactivateSelection = () => {
      setSelectedObjects([]);
      setIsObjectSelected(false);
    };
    canvas.current.on("object:modified", addObjectHistory);
    canvas.current.on("path:created", addDrawingHistory);
    canvas.current.on("selection:created", activateSelection);
    canvas.current.on("selection:updated", activateSelection);
    canvas.current.on("selection:cleared", deactivateSelection);
    return () => {
      canvas.current.off("object:modified", addObjectHistory);
      canvas.current.off("path:created", addDrawingHistory);
      canvas.current.off("selection:created", activateSelection);
      canvas.current.off("selection:updated", activateSelection);
      canvas.current.off("selection:cleared", deactivateSelection);
    };
  }, [currentIndex]);

  const setCanvas = (
    element: HTMLCanvasElement,
    canvasOptions: ICanvasOptions = {
      selection: true,
      backgroundColor: studioColors.white + "FF",
      width: 500,
      height: 500,
    }
  ) => {
    canvas.current = new window.fabric.Canvas(element, canvasOptions);
  };

  const reset = (backgroundColor: string = studioColors.white + "FF") => {
    canvas.current.setBackgroundColor(backgroundColor, () =>
      canvas.current.requestRenderAll()
    );
    canvas.current
      .getObjects()
      .forEach((object) => canvas.current.remove(object));
    canvas.current.requestRenderAll();
    addHistory(JSON.stringify(canvas.current), currentIndex);
  };

  const activateDrawingMode = () => {
    canvas.current.isDrawingMode = true;
  };
  const disableDrawingMode = () => {
    canvas.current.isDrawingMode = false;
  };

  const setBrush = ({
    type,
    color,
    width,
    webPaintOpacity = 0.5,
  }: BrushSettingType) => {
    const brush = canvas.current.freeDrawingBrush;
    brush.color = color;
    brush.shadow = "";
    brush.width = width;
    if (type === "wet-paint") {
      brush.color = color + convertOpacityToHex(webPaintOpacity);
    }
    if (type === "highlight") {
      brush.color = studioColors.white;
      brush.shadow = new window.fabric.Shadow({
        blur: parseInt(brush.width.toString()),
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: color,
      });
    }
  };

  const addImage = (
    imageUrl: string,
    imageLayout: ImageLayoutSetting = {
      scale: 300,
      top: 0,
      left: 100,
    }
  ) => {
    window.fabric.Image.fromURL(
      imageUrl,
      function (oImg: fabric.Image) {
        const image = oImg.set({
          left: imageLayout.left,
          top: imageLayout.top,
        });
        image.scaleToWidth(imageLayout.scale);
        image.scaleToHeight(imageLayout.scale);
        canvas.current.add(image);
        addHistory(JSON.stringify(canvas.current), currentIndex);
        canvas.current.requestRenderAll();
      },
      {
        crossOrigin: "anonymous",
      }
    );
  };

  const addText = (
    placeholder: string = "내용을 입력해주세요",
    options: ITextboxOptions = {
      width: 100,
      left: 100,
      top: 50,
      fontSize: 16,
    }
  ) => {
    const text = new window.fabric.Textbox(placeholder, {
      width: options.width,
      left: options.left,
      top: options.top,
      fontSize: options.fontSize,
    });
    canvas.current.add(text);
    canvas.current.setActiveObject(text);
    text.enterEditing();
    text.selectAll();
    canvas.current.requestRenderAll();
    addHistory(JSON.stringify(canvas.current), currentIndex);
  };

  const setTextColor = (color: string) => {
    canvas.current.getActiveObjects().forEach((item) => {
      if (item.type === "textbox") {
        item.set({ fill: color });
      }
    });
    canvas.current.requestRenderAll();
    addHistory(JSON.stringify(canvas.current), currentIndex);
  };

  const setTextStyle = (style: FabricOptionType) => {
    canvas.current.getActiveObjects().forEach((item: fabric.Object) => {
      if (item.type === "textbox") {
        // TODO: (James) should rework inverse
        // const activeItem = item;
        // if (style.isInverse && !activeItem.isInverse) {
        //   item.set({
        //     backgroundColor: item.fill as string,
        //     fill: studioColors.white,
        //   });
        // }

        // if (style.isInverse === false) {
        //   item.set({
        //     backgroundColor: "transparent",
        //     fill: item.backgroundColor,
        //   });
        // }

        item.set(style);
      }
    });
    setSelectedObjects(canvas.current.getActiveObjects());
    canvas.current.requestRenderAll();
    addHistory(JSON.stringify(canvas.current), currentIndex);
  };

  const getCanvasImageFile = async (
    canvas: MutableRefObject<fabric.Canvas>,
    maximumSizeInMb: number = 1
  ) => {
    const format = "png";
    let multiplier = 1;
    let sizeInMb = maximumSizeInMb;
    let canvasUrl;
    while (sizeInMb >= 1) {
      canvasUrl = convertToUrl(format, canvas, multiplier);
      const buffer = Buffer.from(
        canvasUrl.substring(canvasUrl.indexOf(",") + 1)
      );
      sizeInMb = buffer.length / 1e6;
      multiplier -= 0.1;
    }
    const fileName = `${crypto.randomUUID()}.${format}`;
    return await convertBase64ToFile({
      fileName,
      base64ImageString: convertToUrl(format, canvas, multiplier),
    });
  };

  const convertToUrl = (
    format: string,
    canvas: MutableRefObject<fabric.Canvas>,
    multiplier: number
  ) => {
    return canvas.current.toDataURL({
      format,
      enableRetinaScaling: true,
      multiplier,
    });
  };

  const injectContent = (content: unknown) => {
    canvas.current.loadFromJSON(content, () => {
      canvas.current.requestRenderAll();
    });
  };

  const setDimension = (isHorizontal: boolean) => {
    canvas.current.setDimensions({
      width: isHorizontal ? dimension.longWidth : dimension.shortWidth,
      height: isHorizontal ? dimension.shortHeight : dimension.longHeight,
    });
  };

  const changeBackgroundColor = (backgroundColor: string | Gradient) => {
    canvas.current.setBackgroundColor(backgroundColor, () => {
      addHistory(JSON.stringify(canvas.current), currentIndex);
      canvas.current.requestRenderAll();
    });
  };

  const setBackgroundColor = (backgroundColor: string | Gradient) => {
    changeBackgroundColor(backgroundColor);
  };

  const getGradient = (
    coords: ReturnType<typeof getGradientCoords>,
    colorStops: ColorStop[]
  ) => {
    return new window.fabric.Gradient({
      type: "linear",
      gradientUnits: "percentage",
      coords,
      colorStops,
    });
  };

  const addHistory = (content: unknown, currentIndex: number) => {
    setCurrentIndex((previousIndex) => previousIndex + 1);
    setHistory((previousHistory) => {
      if (history.length !== currentIndex) {
        const newHistory = previousHistory.slice(0, currentIndex);
        return [...newHistory, content];
      }
      return [...previousHistory, content];
    });
  };

  const clearHistory = () => {
    setCurrentIndex(0);
    setHistory([]);
  };

  const undo = () => {
    if (currentIndex > 0) {
      injectContent(history[currentIndex - 2]);
      setCurrentIndex((previousIndex) => previousIndex - 1);
    }
  };

  const redo = () => {
    if (currentIndex <= history.length) {
      injectContent(history[currentIndex]);
      setCurrentIndex((previousIndex) => previousIndex + 1);
    }
  };

  const hasUndoHistory = currentIndex !== 1;
  const hasRedoHistory = currentIndex !== history.length;

  const deleteObjects = () => {
    canvas.current
      .getActiveObjects()
      .forEach((object) => canvas.current.remove(object));
    canvas.current.requestRenderAll();
    addHistory(JSON.stringify(canvas.current), currentIndex);
  };

  return {
    canvas,
    setCanvas,
    addImage,
    getCanvasImageFile,
    injectContent,
    setDimension,
    setBackgroundColor,
    dimension,
    undo,
    redo,
    addHistory,
    clearHistory,
    hasUndoHistory,
    hasRedoHistory,
    deleteObjects,
    isObjectSelected,
    selectedObjects,
    getGradient,
    activateDrawingMode,
    disableDrawingMode,
    setBrush,
    addText,
    setTextColor,
    setTextStyle,
    currentIndex,
    reset,
  };
};

export type BrushType = "pencil" | "spray" | "wet-paint" | "highlight";

export type FabricOptionType = {
  [key: string]: string | boolean;
};
