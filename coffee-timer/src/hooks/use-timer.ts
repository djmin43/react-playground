import { useState } from "react";
import { useInterval } from "@/hooks/use-interval";

type UseTimerProps = {
  initialCount: number;
  isIncreasing: boolean;
};

export const useTimer = ({
  initialCount,
  isIncreasing = true,
}: UseTimerProps) => {
  const [count, setCount] = useState(initialCount);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(
    () => {
      setCount(() => (isIncreasing ? count + 1 : count - 1));
    },
    isRunning ? 1000 : null,
  );

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setCount(0);
  };

  return {
    count,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
