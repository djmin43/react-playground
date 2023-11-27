"use client";
import React, { useEffect } from "react";
import { useTimer } from "@/hooks/use-timer";
import { TimeFormatterUtils } from "@/utils/time-formatter.utils";

export const Timer = () => {
  const coffeeTimer = useTimer({ initialCount: 0, isIncreasing: true });
  const countDownTimer = useTimer({ initialCount: 3, isIncreasing: false });

  useEffect(() => {
    if (countDownTimer.count === 0) {
      coffeeTimer.start();
      countDownTimer.reset();
      return;
    }
  }, [coffeeTimer.count, countDownTimer.count]);

  return (
    <div className={"timer-container"}>
      <div className={"timer"}>
        {!countDownTimer.isRunning && !coffeeTimer.isRunning ? (
          <button onClick={countDownTimer.start} className={"start-button"}>
            click to start
          </button>
        ) : (
          <p>
            {coffeeTimer.isRunning
              ? TimeFormatterUtils.secondsToMMSS(coffeeTimer.count)
              : countDownTimer.count}
          </p>
        )}
      </div>
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
