import "@/styles/home.scss";
import { Timer } from "@/component/timer";
export default function Home() {
  return (
    <main className={"home-container"}>
      <h1 className={"title"}>coffee timer</h1>
      <p>best timer for your best coffee recipe!</p>
      <Timer />
    </main>
  );
}
