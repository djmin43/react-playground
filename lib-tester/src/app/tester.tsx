"use client";
import React from "react";
import { useCount } from "hook-lib-fabric";

const Tester = () => {
  const c = useCount();
  return (
    <div>
      <div>
        <p>count: {c.count}</p>
      </div>
      <div>
        <button onClick={c.add}>add</button>
      </div>
      <div>
        <button onClick={c.subtract}>subtract</button>
      </div>
    </div>
  );
};

export default Tester;
