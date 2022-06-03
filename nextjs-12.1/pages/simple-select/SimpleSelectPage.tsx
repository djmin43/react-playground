import React, { useState } from "react";
import SimpleSelect from "../../components/input/simple-selct";
import styles from "../../styles/Home.module.css";
import { itemList } from "../../components/simple-select/itemList";

const SimpleSelectPage = () => {
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

  function getAnimals(animalCount: number): Array<"🦁"> {
    return new Array(animalCount).fill("🦁");
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

export default SimpleSelectPage;
