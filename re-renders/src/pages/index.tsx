import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/csr"}>csr</Link>
      <Link href={"/ssr"}>ssr</Link>
      <Link href={"/ssg"}>ssg</Link>
    </div>
  );
}
