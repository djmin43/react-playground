import React from "react";
import Link from "next/link";
<<<<<<< HEAD
=======
import { useRouter } from "next/router";
>>>>>>> 0135634d (trying out different nextjs render strategy)

export default function Home() {
  const router = useRouter();
  return (
    <div>
<<<<<<< HEAD
      <Link href={"/csr"}>csr</Link>
      <Link href={"/ssr"}>ssr</Link>
      <Link href={"/ssg"}>ssg</Link>
=======
      hello this is index
      <Link href={"/link"}>route to link</Link>
      <button onClick={() => router.push("/router")}>route to router</button>
>>>>>>> 0135634d (trying out different nextjs render strategy)
    </div>
  );
}
