import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  mail: string;
};

export const HandleErrors = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 5 })} />
      {errors.firstName?.type === "required" && <p>First name is required</p>}
      {errors.firstName?.type === "maxLength" && <p>max length is 5</p>}

      <input {...register("mail", { required: "Email Address is required" })} />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <input type="submit" />
    </form>
  );
};
