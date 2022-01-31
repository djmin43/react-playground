import React, { useReducer, ReducerState } from "react";

function App() {
  const [count, setCount] = useReducer((count) => count + 1, 0);
  const [information, setInformation] = useReducer(
    (information: string, newInformation: string) =>
      (information = newInformation),
    "asdf"
  );

  return (
    <>
      <div>
        <p>count</p>
        {count}
        <button onClick={setCount}>count</button>
      </div>
      <div>change information</div>
      {information}
      <button onClick={() => setInformation("hello")}>add information</button>
    </>
  );
}

export default App;
