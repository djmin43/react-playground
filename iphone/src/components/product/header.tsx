import React from "react";

type HeaderProps = {
  isNew: boolean;
  title: string;
};
const Header = ({ isNew, title }: HeaderProps) => {
  return (
    <div className={"flex flex-col py-2"}>
      {isNew && <span className={"text-sm text-red-700 "}>New</span>}
      <span className={"text-4xl font-extrabold"}>{title}</span>
      <span className={"text-4xl font-extrabold"}>구입하기</span>
    </div>
  );
};

export default Header;
