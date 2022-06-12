import React, { useEffect, useReducer } from "react";
import {
  StyledErrorMessage,
  LoadingMessageLayout,
  CardLayout,
  CenterContainer,
} from "../../../styles/pokemon/pokemon-styles";
import { usePokemonQuery } from "../../../queries/pokemon/pokemonQueries";
import Image from "next/image";

interface PokeCardProps {
  pokeId: string;
}

function Card({ pokeId }: PokeCardProps) {
  const { data: pokemon, isLoading, error, isError } = usePokemonQuery(pokeId);

  if (isLoading)
    return (
      <LoadingMessageLayout>
        <p className="loading">
          Loading data
          <LoadingDots />
        </p>
      </LoadingMessageLayout>
    );

  if (error)
    return (
      <CenterContainer>
        <StyledErrorMessage>
          sorry man, <br />
          you sure you got the right pokemon id?
        </StyledErrorMessage>
      </CenterContainer>
    );

  if (pokemon?.id)
    return (
      <CardLayout>
        <p className="pokemon-id">#{pokemon.id}</p>
        <div>
          <Image
            src={pokemon.sprites?.other["official-artwork"].front_default}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <p className="pokemon-name">{pokemon.name}</p>
      </CardLayout>
    );
  return null;
}

function initialState<T>(item: T): T[] {
  return [item];
}

function LoadingDots({ item = ".", maximumItems = 5, interval = 1000 }: any) {
  const [state, dispatch] = useReducer(reducer, initialState<string>(item));

  useEffect(() => {
    const dotInterval = setInterval(() => {
      dispatch({
        type: "INCREMENT",
        payload: {
          item,
          maximumItems,
        },
      });
    }, interval);
    return () => window.clearInterval(dotInterval);
  });

  return <span className="dots">{state}</span>;
}

// get types for reducer
function reducer(state: any, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      if (state.length > payload.maximumItems) {
        return [payload.item];
      }
      return state.concat(payload.item);
    default:
      return state;
  }
}

export default Card;
