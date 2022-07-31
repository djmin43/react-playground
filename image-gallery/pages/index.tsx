import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <ol>
        <li>
          <Link href="/csr">
            <a className="hover:text-red-700">1. CSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <a className="hover:text-red-700">2. SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            <a className="hover:text-red-700">3. SSG</a>
          </Link>
        </li>
      </ol>
    </main>
  );
};

export default Index;
