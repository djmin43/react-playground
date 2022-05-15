import React, { useState, useEffect, useReducer } from "react";

const StateTester = () => {
  const [count, dispatch] = useReducer(countReducer, 0);

  useEffect(() => {
    dispatch({
      type: "add",
    });
  }, []);

  return <div>{count}</div>;
};

function countReducer(count: any, action: any) {
  switch (action.type) {
    case "add": {
      console.log(count);
      return 2;
    }
    case "subtract": {
      console.log("subtract");
      return 3;
    }
    case "double": {
      return 4;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default StateTester;
