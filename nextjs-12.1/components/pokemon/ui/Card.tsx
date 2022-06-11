import React, { useEffect, useState } from "react";
import { StyledErrorMessage } from "../../../styles/pokemon/pokemon-styles";
import { usePokemonQuery } from "../../../queries/pokemon/pokemonQueries";
import { clearInterval } from "timers";

interface PokeCardProps {
  pokeId: string;
}

function Card({ pokeId }: PokeCardProps) {
  const { data: pokemon, isLoading, error, isError } = usePokemonQuery(pokeId);

  if (isLoading)
    return (
      <div>
        Loading data <LoadingDots item="1" maximumItems={4} interval={100} />
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

function LoadingDots({ item, maximumItems, interval }: any) {
  const [items, setItems] = useState<string>("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      console.log("hello");
    }, interval);
    return () => window.clearInterval(dotInterval);
  }, [interval]);

  return <div>dots</div>;
}

export default Card;
