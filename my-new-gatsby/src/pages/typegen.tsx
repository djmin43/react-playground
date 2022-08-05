import React from "react";
import { graphql, PageProps } from "gatsby";

const TypegenPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  console.log(data.site?.siteMetadata?.title);
  return (
    <main>
      <p>Site title: TODO</p>
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
};

export const query = graphql`
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TypegenPage;
