import { Path, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import React from "react";

type FormValues = {
  "First Name": string;
  Age: number;
};

type InputProps = {
  label: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
};

const Input = ({ label, required, register }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );
};

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<FormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));
export const ExistingForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
  );
};
