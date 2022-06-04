import React, { useState } from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";
import Image from "next/image";

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("1");
  const { data: currentPokemon, isLoading } = usePokemonQuery(pokeId);

  function handlePokeIdChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newPokeId = e.target.value;
    setPokeId(newPokeId);
    console.log(currentPokemon);
  }

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <div>
        <input type="tel" onChange={handlePokeIdChange} value={+pokeId} />
      </div>
      {/*<div>*/}
      {/*  <Image*/}
      {/*    src={currentPokemon.sprites.front_default}*/}
      {/*    alt="Picture of the author"*/}
      {/*    width={500}*/}
      {/*    height={500}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<p>{currentPokemon.name}</p>*/}
    </div>
  );
}

export default Pokemon;
