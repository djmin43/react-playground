import React, { useState, useEffect, useRef } from "react";
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

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const selectDiv = selectRef.current;
      if (selectDiv && !selectDiv.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div
      className={styles.container}
      onClick={handleSelectOpen}
      ref={selectRef}
    >
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
