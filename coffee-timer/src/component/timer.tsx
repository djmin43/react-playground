"use client";
import React, { useState } from "react";
import { useInterval } from "@/hooks/use-interval";

export const Timer = () => {
  const [count, setcount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setcount(count + 1);
    },
    isRunning ? 1000 : null,
  );

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      return;
    }
    setIsRunning(true);
  };

  return (
    <div>
      <button onClick={toggleTimer}>toggle timer</button>
      {count}
      {/*  let's start with a pre-made recipe */}
      {/*  use nosleep for keep this awake */}
      {/*  total time: 2:30 */}
      {/*  customer */}
      {/*  0:00 ~ 0:30 bloom */}
      {/*  0:45 ~ 1:00 first pour */}
      {/*  1:30 ~ 1:45 second pour */}
      {/*    2:30 done */}
    </div>
  );
};
