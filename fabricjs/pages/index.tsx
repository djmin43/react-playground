import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const kenImage =
  "https://media.licdn.com/dms/image/D5612AQFImzcZb43-3g/article-cover_image-shrink_720_1280/0/1670831920407?e=2147483647&v=beta&t=LM6hVOXFdSyNK40isUdFj-Yi89xVM0j4g0ntNYG52oE";

export default function Home() {
  const canvasEl = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);

    const someText = new fabric.Text("hello spring", {
      fontSize: 40,
    });
    canvas.add(someText);
  }, []);
  return (
    <>
      <canvas width={"300"} height={"300"} ref={canvasEl} />
    </>
  );
}
