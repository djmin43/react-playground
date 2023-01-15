import React from "react";
import { useCount } from "@/context/CountProvider";

const ServiceComponent = () => {
  const { count, addCount } = useCount();
  return (
    <div className={"center"}>
      <h1>I am here to add count: {count}</h1>
      <label>add count:</label>
      <button onClick={addCount}>add</button>
    </div>
  );
};

export default ServiceComponent;
