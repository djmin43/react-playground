import React, { useState } from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";
import Image from "next/image";

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("1");
  const { data: currentPokemon, isLoading, isError } = usePokemonQuery(pokeId);

  function handlePokeIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newPokeId = e.target.value;
    if (+newPokeId > 0) {
      setPokeId(newPokeId);
    }
    return;
  }

  if (isLoading) return <div>Loading</div>;

  if (isError) {
    setPokeId("1");
  }

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
}

export default Pokemon;
