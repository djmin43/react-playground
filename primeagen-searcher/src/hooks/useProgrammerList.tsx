import { graphql, useStaticQuery } from "gatsby";
import { IProgrammer } from "../types/programmer";

export const useProgrammerList = (): IProgrammer[] => {
  const {
    allContentfulPage: { nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      allContentfulPage {
        nodes {
          id
          name
          url
          description
          mainLanguage
          image {
            gatsbyImage(width: 200)
          }
        }
      }
    }
  `);
  return nodes;
};
