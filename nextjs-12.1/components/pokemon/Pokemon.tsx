import React, { useState } from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";
import Image from "next/image";

const Pokemon: any = () => {
  const [pokeId, setPokeId] = useState<string>("1");
  const { data: currentPokemon, isLoading } = usePokemonQuery(pokeId);

  function handlePokeIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newPokeId = e.target.value.toString();
    setPokeId(newPokeId);
  }

  if (isLoading) return "Loading...";

  return (
    <div>
      {currentPokemon.name}
      <input type="number" onChange={handlePokeIdChange} value={+pokeId} />
      <Image
        src={currentPokemon.sprites.front_default}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Pokemon;
