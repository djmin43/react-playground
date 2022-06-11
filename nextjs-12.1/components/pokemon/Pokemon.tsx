import React, { useEffect, useState } from "react";
import { MainPageLayout } from "../../styles/pokemon/pokemon-styles";
import { Form, Formik, useField, useFormikContext } from "formik";

interface Values {
  id: string;
}

const IdInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {/*  this is error message*/}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("");

  return (
    <MainPageLayout>
      <h1>hello</h1>
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <IdInput label="id" name="id" type="text" placeholder="id" />
        </Form>
      </Formik>
    </MainPageLayout>
  );
}

export default Pokemon;
