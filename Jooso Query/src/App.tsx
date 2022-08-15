import React from "react";
import JusoQuery from "./hook/JusoQuery";

function App() {
  console.log(import.meta.env.VITE_JOOSO_API_KEY);
  return (
    <JusoQuery>
      <></>
    </JusoQuery>
  );
}

export default App;
