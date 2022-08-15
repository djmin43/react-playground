import React, { useEffect, useState } from "react";
import {
  MainPageLayout,
  PokeIdLayout,
  StyledErrorMessage,
  StyledSearchInput,
  StyledPokemonTitle,
} from "../../styles/pokemon/pokemon-styles";
import { Form, Formik, useField } from "formik";
import SearchButton from "./ui/SearchButton";
import Card from "./ui/Card";

import { pokeListKr } from "../../constants/pokemon/pokemon-kr";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";
import Loading from "./ui/Loading";
import Error from "./ui/Error";

function PokeIdInput({ label, ...props }: any) {
  const [field, meta] = useField(props);

  return (
    <PokeIdLayout>
      <div className="input">
        <label htmlFor={props.name}>{label}: </label>
        <StyledSearchInput className="text-input" {...field} {...props} />
        <SearchButton type="submit" />
      </div>
      <div className="error">
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </div>
    </PokeIdLayout>
  );
}

function Pokemon(): JSX.Element {
  const [pokeIds, setPokeIds] = useState<string[]>([""]);

  const pokemonList = usePokemonQuery(pokeIds);

  // TODO: translate this to useReducer
  function handlePokeIdSearch(id: string) {
    if (isNaN(+id)) {
      setPokeIds(pokeIdFinder(id));
      return;
    }
    setPokeIds([id]);
  }

  useEffect(() => console.log("pokemonlist", pokemonList), [pokeIds]);

  return (
    <MainPageLayout>
      <StyledPokemonTitle>search your pokemon</StyledPokemonTitle>
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={(values) => {
          handlePokeIdSearch(values.id);
        }}
      >
        <Form>
          <PokeIdInput label="poke-id" name="id" type="text" placeholder="id" />
        </Form>
      </Formik>
      {pokemonList.map((pokemon: any, index) => {
        if (pokemon.isLoading) return <Loading key={index} />;
        if (pokemon.error) return <Error key={index} />;
        return <Card key={index} pokemon={pokemon.data} />;
      })}
    </MainPageLayout>
  );
}

function pokeIdFinder(key: string) {
  return pokeListKr.reduce((memo: string[], pokemon) => {
    if (pokemon.name.includes(key)) {
      memo.push(pokemon.id);
    }
    return memo;
  }, []);
}

export default Pokemon;
