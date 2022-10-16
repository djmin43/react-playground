import type { NextPage } from "next";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [canvas, setCanvas] = useState("");

  useEffect(() => {
    const newCanvas = new fabric.Canvas("canvas", {
      height: 800,
      width: 800,
      backgroundColor: "blue",
    });
    console.log(newCanvas);
    // setCanvas(newCanvas);
  }, []);

  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <canvas id="canvas" />
    </div>
  );
};

export default Home;
