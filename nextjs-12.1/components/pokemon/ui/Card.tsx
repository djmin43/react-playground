import React from "react";
import { usePokemonQuery } from "../../../queries/pokemon/pokemonQueries";

interface PokeCardProps {
  pokeId: string;
}

function Card({ pokeId }: PokeCardProps) {
  const { data: pokemon, isLoading } = usePokemonQuery(pokeId);

  if (isLoading) return <div>Loading data</div>;

  if (!pokeId) return null;

  return <div>{pokemon.name}</div>;
}

export default Card;
