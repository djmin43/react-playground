import React, { useState, useEffect, useReducer } from "react";

const StateTester = () => {
  const [state, dispatch] = useReducer(countReducer, { value: 0 });

  useEffect(() => {
    console.log(state.value, "before");
    dispatch({
      type: "add",
      value: 3,
    });
    console.log(state.value, "after");
  }, []);

  return <div>{state.value}</div>;
};

function countReducer(state: any, action: any) {
  switch (action.type) {
    case "add": {
      console.log(state);
      return {
        value: 3,
      };
    }
    case "subtract": {
      console.log("subtract");
      return state;
    }
    case "double": {
      return state;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default StateTester;
