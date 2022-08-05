import * as React from "react";
import type { HeadFC } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";



const IndexPage = () => {
  return <main>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    />

  </main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
