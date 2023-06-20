import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "your name is invalid!",
    })
    .max(5, "your name is too long!"),
  phoneNumber: z.string({
    required_error: "phone number is required",
    description: "this is phone number",
    invalid_type_error: "your phone number is invalid!",
  }),
  menu: z.string(),
});

type Schema = z.infer<typeof schema>;

export const PlayGround = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div style={{ fontSize: 18 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>name:</label>
          <input {...register("name")} />
          {errors.name && errors.name?.message}
        </div>
        <div>
          <label>phone number:</label>
          <input {...register("phoneNumber")} />
          {errors.phoneNumber && errors.phoneNumber?.message}
        </div>
        <div>
          <label>menu:</label>
          <input {...register("menu")} />
          {errors.menu && errors.menu?.message}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
