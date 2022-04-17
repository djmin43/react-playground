import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import PokemonCard from "../../components/PokemonCard";

const fetchPokemon = (id: string) =>
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(({ data }) => data);

export default function Pokemon() {
  const router = useRouter();
  const pokemonID = typeof router.query?.id === "string" ? router.query.id : "";

  const {
    isSuccess,
    data: pokemon,
    isLoading,
    isError,
  } = useQuery(["getPokemon", pokemonID], () => fetchPokemon(pokemonID), {
    enabled: pokemonID.length > 0,
  });

  if (isSuccess) {
    return (
      <div className="container">
        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites?.other?.["official-artwork"]?.front_default}
          weight={pokemon.weight}
          xp={pokemon.base_experience}
          abilities={pokemon.abilities?.map((item: any) => item.ability.name)}
        />
      </div>
    );
  }

  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="center">
        We could not find your pokemon
        <span role="img" aria-label="sad">
          😢
        </span>
      </div>
    );
  }

  return <></>;
}
