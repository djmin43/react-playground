import { useState, useEffect } from "react";
import styles from "./SimpleSelect.module.css";

interface SimpleSelectProps {
  value: number;
  itemSelectList: ItemType[];
  onChange: (e: unknown) => void;
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
  return <div className={styles.test}>select</div>;
};

export default SimpleSelect;
