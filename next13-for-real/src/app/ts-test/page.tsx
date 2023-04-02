import React from "react";

const TsTestPage = () => {
  type HasNames = { readonly names: string[] };
  function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
    return arg.names;
  }

  getNamesExactly({ names: ["tom", "shawn"] });

  return <div>hello</div>;
};

export default TsTestPage;
