import { useQuery } from "react-query";
import axios from "axios";

async function fetchPokemon(pokeId: string): Promise<unknown> {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  );
  return response.data;
}
export function usePokemonQuery(pokeId: string) {
  return useQuery(["pokemon", pokeId], () => fetchPokemon(pokeId), {
    enabled: !!pokeId,
  });
}
