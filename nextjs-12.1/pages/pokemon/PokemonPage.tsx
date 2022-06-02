import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function PokemonPage() {
  const { isLoading, isError, data } = usePokemonQuery();

  if (isLoading) {
    return <div>this is loading</div>;
  }

  if (isError) {
    return <div>Loading...</div>;
  }

  return <div>{data.name}</div>;
}

function usePokemonQuery() {
  return useQuery("pokemon", () =>
    axios
      .get("https://pokeapi.co/api/v2/pokemon-species/2")
      .then((res) => res.data)
  );
}

export default PokemonPage;
