import type { NextPage } from "next";
import Card from "../components/Card";

const tree = {
  id: "1",
  name: "project",
  child: {
    id: "2",
    name: "first",
    child: {
      id: "3",
      name: "second",
    },
  },
};

const Home: NextPage = () => {
  return (
    <section>
      <Card tree={tree} />
      <p>hello world</p>
    </section>
  );
};

export default Home;
