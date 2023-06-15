import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

type FormInput = {
  firstName: string;
  gender: GenderEnum;
};
export const RegisterFields = () => {
  const { register, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      gender: GenderEnum.other,
    },
  });
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
};
