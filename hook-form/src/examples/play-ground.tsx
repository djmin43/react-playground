import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z
      .string()
      .min(1, "please write user name")
      .max(5, "your name is too long!"),
    phoneNumber: z.string(),
    email: z.string().email(),
    menu: z.string(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "please check the terms" }),
    }),
  })
  .required();

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
          {errors.name?.message}
        </div>
        <div>
          <label>phone number:</label>
          <input {...register("phoneNumber")} />
          {errors.phoneNumber?.message}
        </div>
        <div>
          <label>menu:</label>
          <input {...register("menu")} />
          {errors.menu && errors.menu?.message}
        </div>
        <div>
          <label>terms:</label>
          <input {...register("terms")} type={"checkbox"} />
          {errors.terms && errors.terms?.message}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
