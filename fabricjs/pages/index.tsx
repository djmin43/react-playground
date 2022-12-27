import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export default function Home() {
  const canvasEl = useRef(null);
  const canvas = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasEl.current && !canvas.current) {
      canvas.current = new fabric.Canvas(canvasEl.current);
      canvas.current.isDrawingMode = true;
      canvas.current.freeDrawingBrush.color = "red";
      canvas.current.freeDrawingBrush.width = 1;
    }
  }, []);

  return (
    <>
      <label>brush width</label>
      <button
        onClick={() => {
          if (canvas.current) {
            canvas.current.freeDrawingBrush.width =
              canvas.current.freeDrawingBrush.width + 1;
            console.log(canvas.current.freeDrawingBrush.width);
          }
        }}
      >
        increase
      </button>
      <button>decrease</button>
      <canvas width={"300"} height={"300"} ref={canvasEl} />
    </>
  );
}
