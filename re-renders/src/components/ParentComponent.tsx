import React from "react";
import HeavyComponent from "@/components/HeavyComponent";
import ServiceComponent from "@/components/ServiceComponent";

const ParentComponent = () => {
  return (
    <div>
      <HeavyComponent />
      <HeavyComponent />
      <ServiceComponent />
      <ServiceComponent />
      <HeavyComponent />
    </div>
  );
};

export default ParentComponent;
