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
import * as Yup from "yup";

import { pokeListKr } from "../../constants/pokemon/pokemon-kr";

interface Values {
  id: string;
}

const PokeIdInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  const [testValue, setTestValue] = useState(1);

  useEffect(() => {
    setTestValue((prevState) => {
      console.log("prevstate", prevState);
      return 2;
    });
    console.log(testValue);
  }, []);

  return (
    <PokeIdLayout>
      {testValue}
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
};

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("");

  function handlePokeIdSearch(id: string) {
    setPokeId(id);
  }

  return (
    <MainPageLayout>
      <StyledPokemonTitle>search your pokemon</StyledPokemonTitle>
      <Formik
        initialValues={{
          id: "",
        }}
        validationSchema={Yup.object({
          id: Yup.number().typeError("please enter poke id"),
        })}
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
