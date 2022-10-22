import type { NextPage } from "next";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [canvas, setCanvas] = useState<any>();

  useEffect(() => {
    const newCanvas = new fabric.Canvas("canvas", {
      height: 600,
      width: 800,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      backgroundColor: "green",
      backgroundImage: undefined,
      selection: true,
    });
    setCanvas(newCanvas);
    const circle = new fabric.Circle({
      radius: 100,
      fill: "#eef",
      scaleY: 0.5,
      originX: "center",
      originY: "center",
    });
    const text = new fabric.Text("java is the best", {
      fontSize: 30,
      originX: "center",
      originY: "center",
    });

    const heart = new fabric.Path(
      "M10,6 Q10,0 15,0 T20,6 Q20,10 15,14 T10,20 Q10,18 5,14 T0,6 Q0,0 5,0 T10,6 Z",
      {
        fill: "#D81B60",
        scaleX: 15,
        scaleY: 15,
        backgroundColor: "rgba(69,90,100,0.1)",
        originX: "center",
        originY: "center",
      }
    );

    const letter = new fabric.Text("박상현에게 보내는 편지", {
      fontSize: 30,
      originX: "left",
      originY: "top",
    });

    const group = new fabric.Group([circle, text], {
      left: 150,
      top: 100,
      angle: -10,
    });

    const letterGroup = new fabric.Group([heart, letter], {
      left: 150,
      top: 200,
      angle: 10,
    });

    newCanvas.add(group);
    newCanvas.add(letterGroup);
    newCanvas.renderAll();
  }, []);

  function createAHeart() {
    const heart = new fabric.Path(
      "M10,6 Q10,0 15,0 T20,6 Q20,10 15,14 T10,20 Q10,18 5,14 T0,6 Q0,0 5,0 T10,6 Z",
      {
        fill: "blue",
        scaleX: Math.random() * 15,
        scaleY: Math.random() * 15,
        backgroundColor: "rgba(69,90,100,0.1)",
        originX: "center",
        originY: "center",
        top: Math.random() * 600,
        left: Math.random() * 800,
      }
    );
    const letter = new fabric.Text("박상현에게 보내는 편지", {
      fontSize: 30,
      originX: "left",
      originY: "top",
    });
    const letterGroup = new fabric.Group([heart, letter], {
      left: 150,
      top: 200,
      angle: 10,
    });
    canvas.add(letterGroup);
    canvas.renderAll();
  }

  return (
    <div>
      <h1>GTO</h1>
      <button onClick={createAHeart}>create a heart</button>
      <canvas id="canvas" />
    </div>
  );
};

export default Home;
