import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.number(),
  age: z.number(),
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

  const [value, setValue] = useState(0);

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div>
      <h1>value: {value}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>amount: </label>
          <input
            {...register("name", {
              value,
              setValueAs: (f) => +f,
              onChange: (e) => setValue(e.target.value),
            })}
          />
          {errors.name?.type}
        </div>
        <div>
          <label>age: </label>
          <input
            {...register("age", { valueAsNumber: true, disabled: true })}
          />
          {errors.age && "error"}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
