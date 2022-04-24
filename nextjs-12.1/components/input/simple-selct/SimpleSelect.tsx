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
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  function handleSelectOpen() {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <div className={styles.container} onClick={handleSelectOpen}>
      <div className={`${styles.select} `}>{value}</div>
      <span className={`${styles.arrow} ${isSelectOpen && styles.activeArrow}`}>
        arrow
      </span>
      {isSelectOpen && (
        <div className={styles.options}>
          {itemSelectList.map((item) => (
            <span
              key={item.value}
              data-value={item.value}
              onClick={onChange}
              className={styles.option}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleSelect;
