import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ContinaerBar from "../components/container-bar/ContinaerBar";

const Home: NextPage = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((previousValue) => previousValue + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  function handleClick() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <ContinaerBar />
      <button onClick={handleClick}>add!</button>
      {count}
    </div>
  );
};

export default Home;
