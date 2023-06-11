import React from "react";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/constants/routes";

export const MainHeader = () => {
  return (
    <div className={"w-full flex justify-between bg-gray-100"}>
      <Link href={routes.root}>
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
