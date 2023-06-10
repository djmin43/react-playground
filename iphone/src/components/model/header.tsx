import React from "react";
import { ProductHeader } from "@/model/iphone/productHeader";

type HeaderProps = {
  header?: ProductHeader;
};

const Header = ({ header }: HeaderProps) => {
  if (!header) {
    return <div>test123</div>;
  }
  return (
    <div>
      <p>{header.title}</p>
    </div>
  );
};

export default Header;
