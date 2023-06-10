import { Menu } from "@/components/home/menu";
import SubHeader from "@/components/home/sub-header";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className={"flex flex-col w-full"}>
      <Menu />
      <SubHeader />
      <Hero />
    </main>
  );
}
