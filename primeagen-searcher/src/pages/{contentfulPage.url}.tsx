import React from "react";
import { graphql } from "gatsby";
import { IProgrammer } from "../types/programmer";

interface ProgrammerPageProps {
  data: IProgrammer;
}

const ProgrammerPage = ({ data: programmerData }: ProgrammerPageProps) => {
  return <div>hello world</div>;
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      url
      description
      mainLanguage
      image {
        file {
          url
        }
      }
    }
  }
`;

export default ProgrammerPage;
