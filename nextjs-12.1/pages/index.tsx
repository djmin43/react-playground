import type { NextPage } from "next";
import React from "react";
import { PAGE_INDEX } from "../constants/page-index";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section>
      <h1>my playground</h1>
      <ul>
        {PAGE_INDEX.map((page) => {
          return (
            <li key={page.value}>
              <Link href={`/${page.value}`}>
                <a>{page.value}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
