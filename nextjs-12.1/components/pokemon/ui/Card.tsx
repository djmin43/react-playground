import React, { useEffect, useReducer } from "react";
import {
  StyledErrorMessage,
  LoadingMessageLayout,
} from "../../../styles/pokemon/pokemon-styles";
import { usePokemonQuery } from "../../../queries/pokemon/pokemonQueries";

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
      <StyledErrorMessage>
        sorry man, <br />
        you sure you got the right pokemon id?
      </StyledErrorMessage>
    );

  if (!pokemon) return null;

  return <div>{pokemon.name}</div>;
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
