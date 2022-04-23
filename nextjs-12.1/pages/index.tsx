import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import ContinaerBar from "../components/container-bar/ContinaerBar";
import SimpleSelect from "../components/input/SimpleSelect";

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
  function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e.target.value);
    setSelectValue(+e.target.value);
  }

  return (
    <div>
      {selectValue}
      <SimpleSelect value={selectValue} onChange={handleOnChange} />
    </div>
  );
};

export default Home;
