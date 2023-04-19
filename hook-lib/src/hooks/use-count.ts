import { useEffect, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello");
  }, []);

  const add = () => {
    setCount((prev) => prev + 5);
  };

  const subtract = () => {
    setCount((prev) => prev - 1);
  };

  return {
    count,
    add,
    subtract,
  };
};
