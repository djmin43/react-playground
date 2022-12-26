import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const kenImage =
  "https://media.licdn.com/dms/image/D5612AQFImzcZb43-3g/article-cover_image-shrink_720_1280/0/1670831920407?e=2147483647&v=beta&t=LM6hVOXFdSyNK40isUdFj-Yi89xVM0j4g0ntNYG52oE";

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

export default function Home() {
  const canvasEl = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);
    canvas.add(rect);
    canvas.add(circle);
    canvas.add(triangle);
    rect.set({ left: 20, top: 50 });
    rect.set("fill", "yellow");
    rect.set({ strokeWidth: 5, stroke: "rgba(100, 200, 200, 0.5)" });
    fabric.Image.fromURL(kenImage, (image) => canvas.add(image));
    const path = new fabric.Path("M 0 0 L 200 100 L 170 200 z");
    path.set({ left: 120, top: 120 });
    canvas.add(path);

    canvas.renderAll();
  }, []);
  return (
    <>
      <canvas width={"300"} height={"300"} ref={canvasEl} />
    </>
  );
}
