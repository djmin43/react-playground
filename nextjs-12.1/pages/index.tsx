import type { NextPage } from "next";
import React from "react";
import { pageIndex } from "./page-index";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <ul>
      {pageIndex.map((page) => {
        return (
          <li key={page.value}>
            <Link href={`/${page.value}`}>
              <a>{page.value}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
