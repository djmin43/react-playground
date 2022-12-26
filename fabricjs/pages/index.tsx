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
    const circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
    });
    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50,
    });
    canvas.add(rect);
    canvas.add(circle);
    canvas.add(triangle);
    rect.set({ left: 20, top: 50 });
    canvas.renderAll();
  }, []);
  return (
    <>
      <canvas width={"300"} height={"300"} ref={canvasEl} />
    </>
  );
}
