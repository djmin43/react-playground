import type { NextPage } from "next";
import { useQuery } from "react-query";
import useDebounce from "../utils/useDebounce";
import searchPokemons from "../utils/searchPokemons";
import { useState } from "react";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchPokemons", debouncedSearchValue],
    () => searchPokemons(debouncedSearchValue)
  );
  return (
    <div className="home">
      <h1>Search Your Pokemon</h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
    </div>
  );
};

export default Home;
