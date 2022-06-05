import { useQuery } from "react-query";
import axios from "axios";

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
        image: data.sprites.front_default,
      };
    },
  });
}
