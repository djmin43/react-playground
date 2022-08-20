import type { NextPage } from "next";
import { useEffect } from "react";
import fetchGraphQL from "../src/fetchGraphQL";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const contentfulId = "3fbtgFlWlft8VWCoDLRuCC";

const Home: NextPage = (props) => {
  const { data } = useQuery(QUERY, {
    variables: {
      id: contentfulId,
      locale: "en-US",
    },
  });
  return <div>hello world</div>;
};

const QUERY = gql`
  #  query ($id: String!, $locale: String!) {
  query HarmonyMain($id: String!, $locale: String) {
    harmonyMain(id: $id, locale: $locale) {
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
