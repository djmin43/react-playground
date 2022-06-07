import React from "react";
import { MainPageLayout } from "../../styles/pokemon/pokemon-styles";
import { Field, Form, Formik, FormikProps, useField } from "formik";

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
