import Comments from "@/app/comments";
import React from "react";

const fetchDescription = () =>
  new Promise<string>((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 100)
  );

export default async function Home() {
  const description = await fetchDescription();

  return (
    <>
      <header>Header</header>
      <h2>Product Description</h2>
      <p>{description}</p>
      {/*  @ts-expect-error Async Server Component */}
      <Comments />

      <footer>Footer</footer>
    </>
  );
}
