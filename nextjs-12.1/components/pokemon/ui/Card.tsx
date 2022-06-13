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
  const { data: pokemon, isLoading, error } = usePokemonQuery(pokeId);

  // const dots = useDots();

  if (isLoading)
    return (
      <LoadingMessageLayout>
        <p className="loading">Loading data</p>
      </LoadingMessageLayout>
    );

  if (error)
    return (
      <CenterContainer>
        <StyledErrorMessage>
          ERROR!
          <br />
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

function initialState(item: string): any {
  return {
    count: [item],
  };
}

function useDots(item = ".", maximumItems = 5, interval = 800) {
  const [state, dispatch] = useReducer(reducer, initialState(item));
  const { count } = state;

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
    console.log(count);
    return () => window.clearInterval(dotInterval);
  });

  return count;
}

// get types for reducer
interface Action {
  type: string;
  payload: {
    item: string;
    maximumItems: number;
  };
}

function reducer(state: any, action: Action) {
  const { type, payload } = action;
  const { count } = state;
  switch (type) {
    case "INCREMENT":
      if (count.length > payload.maximumItems) {
        return {
          count: [payload.item],
        };
      }
      return {
        count: count.concat(payload.item),
      };
    default:
      return state;
  }
}

export default Card;
