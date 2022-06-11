import React, { useEffect, useState } from "react";
import { StyledErrorMessage } from "../../../styles/pokemon/pokemon-styles";
import { usePokemonQuery } from "../../../queries/pokemon/pokemonQueries";

interface PokeCardProps {
  pokeId: string;
}

function Card({ pokeId }: PokeCardProps) {
  const { data: pokemon, isLoading, error, isError } = usePokemonQuery(pokeId);

  if (isLoading)
    return (
      <div>
        Loading data <LoadingDots />
      </div>
    );

  if (error)
    return (
      <StyledErrorMessage>
        sorry man, <br />
        you sure you got the right pokemon id?
      </StyledErrorMessage>
    );

  if (!pokemon) return null;

  return <div>{pokemon.name}</div>;
}

function LoadingDots({ item = ".", maximumItems = 3, interval = 1000 }: any) {
  const [items, setItems] = useState<string[]>([item]);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      console.log();
    }, interval);
    return () => window.clearInterval(dotInterval);
  }, [interval]);

  return <div>{items.join(" ")}</div>;
}

export default Card;
