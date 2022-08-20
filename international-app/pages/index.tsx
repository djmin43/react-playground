import type { NextPage } from "next";
import { useEffect } from "react";
import fetchGraphQL from "../src/fetchGraphQL";

const Home: NextPage = () => {
  useEffect(() => {
    fetchGraphQL();
  }, []);

  return <div>hello world</div>;
};

export default Home;
