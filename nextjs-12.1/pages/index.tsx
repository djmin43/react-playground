import type { NextPage } from "next";
import React, { MouseEventHandler, useEffect, useState } from "react";
import ContinaerBar from "../components/container-bar/ContinaerBar";
import SimpleSelect from "../components/input/simple-selct";
import ConatinerFoo from "../components/container-foo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(1);

  function handleOnChange(event: React.MouseEvent<HTMLSpanElement>) {
    const value = event.currentTarget.dataset.value as string;
    setCount(+value);
  }

  return (
    <div className={styles.mainPage}>
      <SimpleSelect
        itemSelectList={itemList}
        value={count}
        onChange={handleOnChange}
      />
    </div>
  );
};

const itemList = [
  {
    label: "one",
    value: 1,
  },
  {
    label: "two",
    value: 2,
  },
  {
    label: "three",
    value: 3,
  },
];

export default Home;
