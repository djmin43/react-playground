import { useState, useEffect } from "react";
import styles from "./SimpleSelect.module.css";

interface SimpleSelectProps {
  value: number;
  itemSelectList: ItemType[];
  onChange: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

interface ItemType {
  label: string;
  value: number;
}

const SimpleSelect = ({
  value,
  itemSelectList,
  onChange,
}: SimpleSelectProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.select}>{value}</div>
      <div className={styles.options}>
        {itemSelectList.map((item) => (
          <span key={item.value} data-value={item.value} onClick={onChange}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleSelect;
