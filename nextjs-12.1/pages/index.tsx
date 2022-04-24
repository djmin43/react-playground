import type { NextPage } from "next";
import React, { MouseEventHandler, useEffect, useState } from "react";
import ContinaerBar from "../components/container-bar/ContinaerBar";
import SimpleSelect from "../components/input/simple-selct";
import ConatinerFoo from "../components/container-foo";
import styles from "../styles/Home.module.css";

interface Item {
  label: string;
  value: number;
}

const itemList: Item[] = [
  {
    label: "5개씩 보기",
    value: 5,
  },
  {
    label: "10개씩 보기",
    value: 10,
  },
  {
    label: "20개씩 보기",
    value: 20,
  },
  {
    label: "50개씩 보기",
    value: 50,
  },
  {
    label: "100개씩 보기",
    value: 100,
  },
  {
    label: "500개씩 보기",
    value: 500,
  },
  {
    label: "1000개씩 보기",
    value: 1000,
  },
  {
    label: "10000개씩 보기",
    value: 10000,
  },
];

const Home: NextPage = () => {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [count, setCount] = useState<number>(5);
  const [lionSize, setLionSize] = useState<number>(24);

  function handleOnChange(event: React.MouseEvent<HTMLSpanElement>): void {
    const indexSelected = event.currentTarget.dataset.value as string;
    setSelectIndex(+indexSelected);
    const newValue = itemList[+indexSelected].value;
    setCount(+newValue);
  }

  function handleRange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newSize: number = +event.target.value;
    setLionSize(newSize);
  }

  function getAnimals(count: number): Array<"🦁"> {
    const animalList = new Array(count).fill("🦁");
    return animalList;
  }

  return (
    <div className={styles.mainPage}>
      <p className={styles.title}>my fun weekend</p>
      <SimpleSelect
        itemSelectList={itemList}
        index={selectIndex}
        onChange={handleOnChange}
      />
      <input
        className={styles.range}
        type="range"
        onChange={handleRange}
        min="12"
        max="128"
        value={lionSize}
      />
      <div className={styles.lionBox}>
        <span style={{ fontSize: lionSize + "px" }}>{getAnimals(count)}</span>
      </div>
    </div>
  );
};

export default Home;
