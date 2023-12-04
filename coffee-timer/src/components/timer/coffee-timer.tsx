import React from "react";
import { TimeFormatterUtils } from "@/utils/time-formatter.utils";

type CoffeeTimerProps = {
  count: number;
};
export const CoffeeTimer = ({ count }: CoffeeTimerProps) => {
  return (
    <div>
      {count === 0 ? <p>start!</p> : TimeFormatterUtils.secondsToMMSS(count)}
    </div>
  );
};
