import { MainHeader } from "@/components/app/main-header";
import { Menu } from "@/components/app/menu";

export default function Home() {
  return (
    <main className={"flex flex-col w-full"}>
      <MainHeader />
      <Menu />
    </main>
  );
}
