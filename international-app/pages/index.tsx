import type { NextPage } from "next";
import { useEffect } from "react";
import fetchGraphQL from "../src/fetchGraphQL";

const Home: NextPage = () => {
  useEffect(() => {
    const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;
    const res = fetchGraphQL(query);
  }, []);

  return <div>hello world</div>;
};

export default Home;
