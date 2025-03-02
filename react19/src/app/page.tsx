import Link from "next/link";

export default function Home() {
  return (
      <div>
        <ul>
          <li>
            <Link href={"/action-state"}>action state</Link>
          </li>
        </ul>
      </div>
  );
}
