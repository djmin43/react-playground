"use client";
import React, { useEffect, useState } from "react";
import { useTimer } from "@/hooks/use-timer";
import { CoffeeTimer } from "@/components/timer/coffee-timer";
import { CountDownTimer } from "@/components/timer/count-down-timer";

type Recipe = {
  type: string;
  count: number;
  duration: number;
};

export const Timer = () => {
  const coffeeTimer = useTimer({ initialCount: 0, isIncreasing: true });
  const countDownTimer = useTimer({ initialCount: 3, isIncreasing: false });
  const recipeList = useState<Recipe[]>([]);

  useEffect(() => {
    if (countDownTimer.count === 0) {
      coffeeTimer.start();
      countDownTimer.reset();
      return;
    }
  }, [coffeeTimer.count, countDownTimer.count]);

  const isTimerIdle = !countDownTimer.isRunning && !coffeeTimer.isRunning;

  return (
    <div className={"timer-container"}>
      <div className={"timer"}>
        {isTimerIdle ? (
          <button onClick={countDownTimer.start} className={"start-button"}>
            click to start
          </button>
        ) : (
          <>
            {coffeeTimer.isRunning ? (
              <CoffeeTimer count={coffeeTimer.count} />
            ) : (
              <CountDownTimer count={countDownTimer.count} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
