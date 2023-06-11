import React from "react";
import Image from "next/image";
import Link from "next/link";

export const MainHeader = () => {
  return (
    <div className={"w-full flex justify-between bg-gray-100"}>
      <Link href={"/"}>
        <Image
          src={"/logos/apple-logo.svg"}
          alt={"apple logo"}
          width={52}
          height={52}
        />
      </Link>
    </div>
  );
};
