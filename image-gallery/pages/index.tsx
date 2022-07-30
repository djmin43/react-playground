import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <ul>
      <li>
        <Link href="/csr">
          <a>CSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssg">
          <a>SSG</a>
        </Link>
      </li>
    </ul>
  );
};

export default Index;
