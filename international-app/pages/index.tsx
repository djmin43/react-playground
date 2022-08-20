import type { NextPage } from "next";
import { useEffect } from "react";
import fetchGraphQL from "../src/fetchGraphQL";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const Home: NextPage = (props) => {
  console.log(props);
  const { data } = useQuery(QUERY);
  console.log(data);
  return <div>hello world</div>;
};

const QUERY = gql`
  #  query ($id: String!, $locale: String!) {
  query {
    harmonyMain(id: "3fbtgFlWlft8VWCoDLRuCC", locale: "ko-KR") {
      mainTitle
      mainDescription
      mainButton
      mainButtonLink
    }
  }
`;

export async function getStaticProps({ locale, locales }) {
  return {
    props: {
      locale,
      locales,
    },
  };
}

export default Home;
