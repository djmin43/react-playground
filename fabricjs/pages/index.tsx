import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export default function Home() {
  const canvasEl = useRef(null);
  const canvas = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasEl.current && !canvas.current) {
      canvas.current = new fabric.Canvas(canvasEl.current);
        const rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20,
            angle: 45
        });

        canvas.current.add(rect);
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
