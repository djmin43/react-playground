import React, { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>add</button>
      {state}
    </>
  );
}

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "INCREMENT":
      console.log("inc", state);
      return state + 1;
    case "DECREMENT":
      console.log("dec", state);
      return state - 1;
    default:
      return state;
  }
}

export default App;
