import Comments from "@/app/comments";
import React, { Suspense } from "react";

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
      <Suspense fallback={<div>loading...</div>}>
        {/*  @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>

      <footer>Footer</footer>
    </>
  );
}
