import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ContinaerBar from "../components/container-bar/ContinaerBar";
import SimpleSelect from "../components/input/simple-selct";
import ConatinerFoo from "../components/container-foo";

const Home: NextPage = () => {
  const [count, setCount] = useState(10);
  const [selectValue, setSelectValue] = useState<number>(2);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((previousValue) => previousValue + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  function handleClick() {
    setCount((previousCount) => previousCount + 1);
  }
  function handleOnChange(e: unknown) {
    console.log(e);
  }

  return (
    <div>
      <SimpleSelect />
    </div>
  );
};

export default Home;
