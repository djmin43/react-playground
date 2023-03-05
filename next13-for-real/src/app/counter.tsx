"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount((count) => count + 1)}>click me</button>
    </div>
  );
}
