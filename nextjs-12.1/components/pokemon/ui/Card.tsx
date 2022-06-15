import React from "react";
import Loading from "./Loading";
import {
  StyledErrorMessage,
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

  if (isLoading) return <Loading />;

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

export default Card;
