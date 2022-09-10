import { useState } from "react";
import "./App.css";
import { useMachine } from "@xstate/react";
import { promiseMachine } from "./state-machine";

function App() {
  const [state, send] = useMachine(promiseMachine);

  return (
    <div className="App">
      {state.matches("pending") && <p>Loading...</p>}
      {state.matches("rejected") && <p>Promise Rejected</p>}
      {state.matches("resolved") && <p>Promise Resolved</p>}
      <div>
        <button onClick={() => send("RESOLVE")}>Resolve</button>
        <button onClick={() => send("REJECT")}>Reject</button>
      </div>
    </div>
  );
}

export default App;
