import type { NextPage } from "next";
import { useEffect } from "react";
import fetchGraphQL from "../src/fetchGraphQL";
import { useRouter } from "next/router";

const Home: NextPage = (props) => {
  console.log(props);
  return <div>hello world</div>;
};

const query = `
  query {
harmonyMainCollection(locale: "ko-KR") {
    items {
      description  {
      json
      }
    }
  }
}
    `;

export async function getStaticProps({ locale, locales }) {
  const res = await fetchGraphQL(query);

  return {
    props: {
      res,
      locale,
      locales,
    },
  };
}

export default Home;
