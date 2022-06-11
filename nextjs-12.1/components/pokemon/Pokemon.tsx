import React, { useEffect, useState } from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";
import { MainPageLayout } from "../../styles/pokemon/pokemon-styles";
import { Form, Formik, useField, useFormikContext } from "formik";
import { StyledSearchInput } from "../../styles/pokemon/pokemon-styles";
import SearchButton from "./ui/SearchButton";
import Card from "./ui/Card";

interface Values {
  id: string;
}

const PokeIdInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <StyledSearchInput className="text-input" {...field} {...props} />
      {/*  this is error message*/}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      <SearchButton type="submit" />
    </>
  );
};

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("");

  function handlePokeIdSearch(id: string) {
    setPokeId(id);
  }

  return (
    <MainPageLayout>
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={(values) => {
          handlePokeIdSearch(values.id);
        }}
      >
        <Form>
          <PokeIdInput label="id" name="id" type="text" placeholder="id" />
        </Form>
      </Formik>
      <Card pokeId={pokeId} />
    </MainPageLayout>
  );
}

export default Pokemon;
