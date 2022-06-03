import { useQuery } from "react-query";
import axios from "axios";

async function fetchPokemon(pokeId: string): Promise<unknown> {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`
  );
  return response.data;
}
export function usePokemonQuery(state: string) {
  return useQuery(["pokemon", state], () => fetchPokemon(state));
}
