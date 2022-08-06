import * as React from "react";
import Layout from "../components/Layout";
import { useProgrammerList } from "../hooks/useProgrammerList";

const IndexPage = () => {
  const programmersList = useProgrammerList();
  return <Layout>this will have list of programmers</Layout>;
};

export default IndexPage;
