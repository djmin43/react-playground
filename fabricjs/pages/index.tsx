import type { NextPage } from "next";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [canvas, setCanvas] = useState("");

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

    const group = new fabric.Group([circle, text], {
      left: 150,
      top: 100,
      angle: -10,
    });

    newCanvas.add(group);
  }, []);

  return (
    <div>
      <h1>GTO</h1>
      <canvas id="canvas" />
    </div>
  );
};

export default Home;
