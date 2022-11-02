import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <div>
      <button onClick={() => router.push("/validate")}>인증하러가기~</button>
    </div>
  );
}
