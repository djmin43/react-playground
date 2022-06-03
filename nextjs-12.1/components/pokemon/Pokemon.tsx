import React, { useState } from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";

const Pokemon = () => {
  const [pokeId] = useState<string>("1");

  const { data } = usePokemonQuery(pokeId);

  return <div>hello world</div>;
};

export default Pokemon;
