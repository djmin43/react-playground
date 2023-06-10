import { Menu } from "@/components/app/menu";
import SubHeader from "@/components/app/sub-header";
import Hero from "@/components/app/hero";

export default function Home() {
  return (
    <main className={"flex flex-col w-full"}>
      <Menu />
      <SubHeader />
      <Hero />
    </main>
  );
}
