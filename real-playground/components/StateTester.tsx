import React, { useState, useEffect } from "react";

const StateTester = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {}, []);

  return <div>{count}</div>;
};

export default StateTester;
