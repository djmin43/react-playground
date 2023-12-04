import React from "react";

type CoffeeTimerProps = {
  count: string;
};
export const CoffeeTimer = ({ count }: CoffeeTimerProps) => {
  return <div>{count}</div>;
};
