import React from "react";

type CountDownTimerProps = {
  count: number;
};

export const CountDownTimer = ({ count }: CountDownTimerProps) => {
  return <div>{count}</div>;
};
