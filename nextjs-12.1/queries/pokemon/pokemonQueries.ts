import { useMutation, useQuery } from "react-query";
import axios from "axios";

enum PokeImage {
  FRONT_DEFAULT = "front_default",
  FRONT_SHINY = "front_shiny",
  BACK_DEFAULT = "back_default",
  BACK_SHINY = "back_shiny",
}

async function fetchPokemon(pokeId: string): Promise<any> {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  );
  return response.data;
}
export function usePokemonQuery(pokeId: string) {
  return useQuery<any, any>(["pokemon", pokeId], () => fetchPokemon(pokeId), {
    enabled: !!pokeId,
    select: (data) => {
      return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
      };
    },
  });
}
