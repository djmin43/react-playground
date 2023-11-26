"use client";
import React from "react";
import { useTimer } from "@/hooks/use-timer";

export const Timer = () => {
  const timer = useTimer({ initialCount: 0, isIncreasing: true });
  return (
    <div>
      <button onClick={timer.startTimer}>start timer</button>
      {timer.count}
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
