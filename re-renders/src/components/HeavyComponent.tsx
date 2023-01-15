import React from "react";
import SubHeavyComponent from "@/components/SubHeavyComponent";

const HeavyComponent = () => {
  return (
    <div className={"center"}>
      <h1>I am some heavy component with expensive logic</h1>
      <SubHeavyComponent />
    </div>
  );
};

export default HeavyComponent;
