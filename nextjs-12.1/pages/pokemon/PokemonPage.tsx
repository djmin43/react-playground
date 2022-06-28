import React from "react";
import Pokemon from "../../components/pokemon";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function PokemonPage(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>search your pokemon</title>
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        />
        <meta property="og:title" content="search your pokemon" />
        <meta
          property="og:description"
          content="search your favourite pokemon with poke id"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Pokemon />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default PokemonPage;
