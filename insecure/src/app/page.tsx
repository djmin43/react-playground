"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const params = useSearchParams();

  const submitSearch = () => {
    router.push(`/?search=${searchInput}`);
  };

  return (
    <main>
      <h1>This is insecure website</h1>
      <div>
        <label>search</label>
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
        <button onClick={submitSearch}>submit</button>
      </div>
      <div>
        <p>search value:</p>
        <span>{params.get("search")}</span>
        <img src={""} />
      </div>
    </main>
  );
}
