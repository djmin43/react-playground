import React, { useState } from "react";
import { MainPageLayout } from "../../styles/pokemon/pokemon-styles";
import { Form, Formik, useField } from "formik";

interface Values {
  id: string;
}

const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Pokemon(): JSX.Element {
  const [pokeId, setPokeId] = useState<string>("1");

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
          <MyTextInput label="id" name="id" type="text" placeholder="id" />
        </Form>
      </Formik>
    </MainPageLayout>
  );
}

export default Pokemon;
