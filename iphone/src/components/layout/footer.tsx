import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={
        "w-full flex justify-center items-center bg-gray-100 py-6 text-sm"
      }
    >
      <Link href="mailto:dj.min43@gmail.com">
        <span>Copyright </span>ⓒ mindongjoon
        <span>. All rights reserved.</span>
      </Link>
    </div>
  );
};

export default Footer;
