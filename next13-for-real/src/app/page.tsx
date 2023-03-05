import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Counter from "@/app/counter";

export default function Home() {
  return (
    <main className={styles.main}>
      <Counter />
    </main>
  );
}
