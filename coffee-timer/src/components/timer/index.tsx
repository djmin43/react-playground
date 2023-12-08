"use client";
import React, { useEffect, useState } from "react";
import { useTimer } from "@/hooks/use-timer";
import { CoffeeTimer } from "@/components/timer/coffee-timer";
import { CountDownTimer } from "@/components/timer/count-down-timer";

type RecipeStep = {
  type: RecipeType;
  duration: number;
  startAt: number;
  waterVolume: number;
};

enum RecipeType {
  Bloom = "bloom",
  pour = "pour",
  pulse = "pulse",
}

export const Timer = () => {
  const coffeeTimer = useTimer({ initialCount: 0, isIncreasing: true });
  const countDownTimer = useTimer({ initialCount: 3, isIncreasing: false });
  const recipeSteps = useState<RecipeStep[]>([]);

  useEffect(() => {
    if (countDownTimer.count === 0) {
      coffeeTimer.start();
      countDownTimer.reset();
      return;
    }
  }, [coffeeTimer.count, countDownTimer.count]);

  const isTimerIdle = !countDownTimer.isRunning && !coffeeTimer.isRunning;
  // bloom start at 0
  // first pour starts at 30
  // second pour at 1:00(60)
  // brew finishes at 2:30

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
