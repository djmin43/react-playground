import { useRouter } from "next/router";

const apiKey = "5752633783078807";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/validate")}>인증하러가기!</button>
    </div>
  );
}
