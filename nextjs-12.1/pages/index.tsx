import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ContinaerBar from "../components/container-bar/ContinaerBar";
import SimpleSelect from "../components/input/SimpleSelect";

const Home: NextPage = () => {
  const [count, setCount] = useState(10);
  const [selectValue, setSelectValue] = useState(4);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((previousValue) => previousValue + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  function handleClick() {
    setCount((previousCount) => previousCount + 1);
  }
  function handleOnChange() {
    console.log(e.target.value);
  }

  return (
    <div>
      <ContinaerBar />
      <button onClick={handleClick}>add!</button>
      {count}
      <SimpleSelect value={selectValue} onChange={handleOnChange} />
    </div>
  );
};

export default Home;
