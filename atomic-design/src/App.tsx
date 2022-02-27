import "./App.css";
import styled from "@emotion/styled";

type ObjectType = {
  a: number;
  b?: number;
  c?: number;
};

function App() {
  const testFunc = (obj: ObjectType) => {
    return obj.a;
  };

  testFunc({ a: 1 });
  testFunc({ a: 1, b: 2 });
  testFunc({ a: 1, b: 2, c: 3 });

  return <div>hello world. i'm figuring out atomic design</div>;
}

export default App;
