import React, { useReducer } from "react";

function Reducer() {
  const [count, setCount] = useReducer((count) => count + 1, 0);
  const [information, setInformation] = useReducer(reducer, "asdf");

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

function reducer(state: string, action: string) {
  console.log(state, action);
  state = "1asdjfasjdfo";
  return state;
}

export default Reducer;
