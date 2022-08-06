import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }: unknown) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export const data = graphql`
    query pageQuery($id: String) {
        contentfulPage(id: { eq: $id }) {
            url
            title
            description 
            image {
                file {
                    url
                }
            }
        }
    }
`;

export default Page;
