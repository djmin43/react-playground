"use client";
import React, { useEffect, useState } from "react";
import { useTimer } from "@/hooks/use-timer";
import { CoffeeTimer } from "@/components/timer/coffee-timer";
import { CountDownTimer } from "@/components/timer/count-down-timer";

type RecipeStep = {
  type: RecipeType;
  label?: string;
  duration: number;
  startAt: number;
  waterVolume: number;
};

enum RecipeType {
  Bloom = "bloom",
  Pour = "pour",
  Pulse = "pulse",
}

export const Timer = () => {
  const coffeeTimer = useTimer({ initialCount: 0, isIncreasing: true });
  const countDownTimer = useTimer({ initialCount: 3, isIncreasing: false });
  const [recipeSteps, setRecipeSteps] = useState(defaultRecipe);
  const [currentStep, setCurrentStep] = useState<RecipeStep>();

  useEffect(() => {
    if (countDownTimer.count === 0) {
      coffeeTimer.start();
      countDownTimer.reset();
      return;
    }
  }, [coffeeTimer.count, countDownTimer.count]);

  useEffect(() => {}, [coffeeTimer.count, recipeSteps]);

  const isTimerIdle = !countDownTimer.isRunning && !coffeeTimer.isRunning;
  // bloom start at 0
  // first pour starts at 30
  // second pour at 1:00(60)
  // brew finishes at 2:30

  return (
    <div className={"timer-container"}>
      <div className="timer">
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

export const coffeeTimerController = (
  recipeSteps: RecipeStep[],
  count: number,
) => ({
  currentStep: () => {
    let index = 0;
    const recipeTimes = recipeSteps.map((recipe) => recipe.startAt);
    if (count < recipeTimes[1]) {
      return coffeeTimerController([recipeSteps[0]], count);
    }
    recipeTimes.forEach((time, recipeIndex) => {
      if (
        count >= recipeTimes[recipeIndex] &&
        count < recipeTimes[recipeIndex + 1]
      ) {
        index = recipeIndex;
        return;
      }
      if (count >= recipeTimes[recipeIndex]) {
        index = recipeIndex;
      }
    });
    return coffeeTimerController([recipeSteps[index]], count);
  },
  get: () => {
    if (recipeSteps.length === 1) {
      return recipeSteps[0];
    }
    return undefined;
  },
  getAll: () => recipeSteps,
});

export const defaultRecipe: RecipeStep[] = [
  {
    type: RecipeType.Bloom,
    label: "bloom",
    startAt: 0,
    duration: 5,
    waterVolume: 40,
  },
  {
    type: RecipeType.Pour,
    label: "first pour",
    startAt: 30,
    duration: 10,
    waterVolume: 150,
  },
  {
    type: RecipeType.Pour,
    label: "second pour",
    startAt: 60,
    duration: 10,
    waterVolume: 60,
  },
];
