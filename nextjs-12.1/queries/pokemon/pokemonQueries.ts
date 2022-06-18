import { useMutation, useQueries, useQuery } from "react-query";
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
export function usePokemonQuery(pokeIds: string[]) {
  return useQueries(
    pokeIds.map((pokeId) => {
      return {
        queryKey: ["pokeId", pokeId],
        queryFn: () => fetchPokemon(pokeId),
        select: (data: any) => {
          return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
          };
        },
      };
    })
  );
}
