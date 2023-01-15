import ParentComponent from "@/components/ParentComponent";
import { CountProvider } from "@/context/CountProvider";
import React from "react";

const ParentComponentMemo = React.memo(ParentComponent);
export default function Home() {
  return (
    <CountProvider>
      {/*<ParentComponentMemo />*/}
      <ParentComponent />
    </CountProvider>
  );
}
