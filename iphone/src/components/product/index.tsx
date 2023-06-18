"use client";
import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

export const Product = ({ children }: Props) => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return <div>{children}</div>;
};
