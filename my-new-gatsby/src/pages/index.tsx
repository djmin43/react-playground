import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
      <main>hello world</main>
   )
}

export default IndexPage

export const Head: HeadFC = () => <title>my home page</title>
