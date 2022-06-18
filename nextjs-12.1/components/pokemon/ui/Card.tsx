import React, { useEffect } from "react";
import { CardLayout } from "../../../styles/pokemon/pokemon-styles";
import Image from "next/image";

interface PokeCardProps {
  pokemon: any;
}

function Card({ pokemon }: PokeCardProps) {
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
