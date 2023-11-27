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

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  return {
    count,
    start,
    stop,
    reset,
    isRunning,
  };
};
