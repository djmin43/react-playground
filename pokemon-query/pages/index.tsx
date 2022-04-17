import type { NextPage } from "next";
import { useQuery } from "react-query";
import useDebounce from "../utils/useDebounce";
import searchPokemons from "../utils/searchPokemons";
import { useState } from "react";
import PokemonsSearchResult from "../components/PokemonSearchResult";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ["searchPokemons", debouncedSearchValue],
    () => searchPokemons(debouncedSearchValue),
    {
      enabled: debouncedSearchValue.length > 0,
    }
  );

  const renderResult = () => {
    if (isLoading) {
      return <div className="search-message">Loading...</div>;
    }
    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }
    if (isSuccess) {
      return <PokemonsSearchResult pokemons={data} />;
    }
    return <></>;
  };
  return (
    <div className="home">
      <h1>Search Your Pokemon</h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchValue(value)}
        value={searchValue}
      />
      {renderResult()}
    </div>
  );
};

export default Home;
