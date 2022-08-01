import React, { useState } from "react";

const TestMemo = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={addCount}>increment</button>
    </div>
  );
};

export default TestMemo;
