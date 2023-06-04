import React from "react";
import Image from "next/image";

export const MainHeader = () => {
  return (
    <div className={"w-full flex justify-center bg-gray-100"}>
      <Image
        src={"/logos/apple-logo.svg"}
        alt={"apple logo"}
        width={52}
        height={52}
      />
    </div>
  );
};
