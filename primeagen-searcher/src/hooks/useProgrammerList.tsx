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
          image {
            file {
              url
            }
          }
          url
          name
          description
        }
      }
    }
  `);
  return nodes;
};
