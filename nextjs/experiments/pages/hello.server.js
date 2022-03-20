import { Suspense } from "react";

export default function Hello() {
  return (
    <div>
      <h1>Welcome to React Server Components</h1>
      <Suspense fallback={"Loading..."}>hello</Suspense>
    </div>
  );
}
