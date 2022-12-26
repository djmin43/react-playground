import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export default function Home() {
  const canvasEl = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "red",
      width: 20,
      height: 20,
      angle: 45,
    });
    canvas.add(rect);
  }, []);
  return (
    <>
      <canvas width={"300"} height={"300"} ref={canvasEl} />
    </>
  );
}
