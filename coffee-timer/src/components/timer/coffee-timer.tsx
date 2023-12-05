import React from "react";
import { TimeFormatterUtils } from "@/utils/time-formatter.utils";

type CoffeeTimerProps = {
  count: number;
};
export const CoffeeTimer = ({ count }: CoffeeTimerProps) => {
  // bloom
  // 1st pour
  // 2nd pour
  // 3rd pour
  // 4th pour
  // 5th pour
  // ...
  // pulse

  return (
    <div>
      {count === 0 ? <p>start!</p> : TimeFormatterUtils.secondsToMMSS(count)}
    </div>
  );
};
