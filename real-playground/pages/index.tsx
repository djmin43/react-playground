import type { NextPage } from "next";
import StateTester from "../components/StateTester";
import styles from "./home.module.css";

const Home: NextPage = () => {
  return (
    <section class={""}}>
      <div>some-container</div>
      <p>hello world</p>
      <StateTester />
    </section>
  );
};

export default Home;
