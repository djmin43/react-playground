import * as React from "react";
import Layout from "../components/Layout";
import { useProgrammerList } from "../hooks/useProgrammerList";
import Card from "../components/common/Card";

const IndexPage = () => {
  const programmersList = useProgrammerList();
  return (
    <Layout>
      {programmersList.map((programmer) => (
        <Card key={programmer.id} programmerData={programmer} />
      ))}
    </Layout>
  );
};

export default IndexPage;
