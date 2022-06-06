import React, { useEffect, useState } from "react";
import { usePokemonQuery } from "../../queries/pokemon/pokemonQueries";
import Image from "next/image";
import { useFormikContext, Formik, Field, Form } from "formik";
import * as Yup from "yup";

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("1");
  const { data: currentPokemon, isLoading } = usePokemonQuery(pokeId);

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      <Formik
        initialValues={{ pokeId: "1" }}
        validationSchema={Yup.object({
          pokeId: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log("hello!", values);
          console.log(values.pokeId);
          setPokeId(values.pokeId);
        }}
      >
        <Form>
          <AutoSubmitToken />
          <label htmlFor="pokeId">Poke Id</label>
          <Field name="pokeId" type="text" />
        </Form>
      </Formik>
      <div>
        <Image
          src={currentPokemon?.sprites.other["official-artwork"].front_default}
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
      <p>{currentPokemon.name}</p>
    </div>
  );
}

function AutoSubmitToken() {
  const { values, submitForm }: any = useFormikContext();
  useEffect(() => {
    const pokeId = +values.pokeId;
    if (pokeId > 0 && pokeId < 200) {
      submitForm();
    }
  }, [values, submitForm]);
  return null;
}

export default Pokemon;
