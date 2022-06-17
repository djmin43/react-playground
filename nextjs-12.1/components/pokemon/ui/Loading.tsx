import React, { useEffect, useReducer } from "react";
import { LoadingMessageLayout } from "../../../styles/pokemon/pokemon-styles";

const Loading = () => {
  const dots = useDots();

  return (
    <LoadingMessageLayout>
      <p className="loading">Loading data{dots}</p>
    </LoadingMessageLayout>
  );
};

function initialState(item: string): { count: string[] } {
  return {
    count: [item],
  };
}

function useDots(item = ".", maximumItems = 5, interval = 800) {
  const [state, dispatch] = useReducer(reducer, initialState(item));
  const { count } = state;

  useEffect(() => {
    const dotInterval = setInterval(() => {
      dispatch({
        type: "INCREMENT",
        payload: {
          item,
          maximumItems,
        },
      });
    }, interval);
    return () => window.clearInterval(dotInterval);
  });

  return count;
}

// get types for reducer
interface Action {
  type: string;
  payload: {
    item: string;
    maximumItems: number;
  };
}

interface State {
  count: string[];
}

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  const { count } = state;
  switch (type) {
    case "INCREMENT":
      if (count.length > payload.maximumItems) {
        return {
          count: [payload.item],
        };
      }
      return {
        count: count.concat(payload.item),
      };
    default:
      return state;
  }
}

export default Loading;
