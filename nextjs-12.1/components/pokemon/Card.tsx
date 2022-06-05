import React from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";

function Card() {
  const { data, isLoading } = usePokemonQuery("19");
  console.log(data);
  if (isLoading) return <div>Loading</div>;

  return <div>{data.name}</div>;
}

export default Card;
