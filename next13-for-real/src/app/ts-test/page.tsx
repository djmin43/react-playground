import React from "react";

const TsTestPage = () => {
  enum E {
    Foo = 10,
    Bar = 20,
    Blah = Math.random(),
  }

  function test(e: E) {
    return e;
  }

  return (
    <div>
      <p>bar: {E.Bar}</p>
      <p>foo: {E.Foo}</p>
      {test(123)}
    </div>
  );
};

export default TsTestPage;
