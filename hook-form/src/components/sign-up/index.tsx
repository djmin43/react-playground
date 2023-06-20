import { Member, memberSchema } from "../../App.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

type SignUpProps = {
  addMember: (newMember: Member) => void;
};
export const SignUp = ({ addMember }: SignUpProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Member>({
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
    resolver: zodResolver(memberSchema),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const onSubmit = (newMember: Member) => {
    addMember(newMember);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>대기자 추가하기</h2>
      <div>
        <label>이름:</label>
        <input {...register("name")} />
        <ErrorMessage errorMessage={errors.name?.message} />
      </div>
      <div>
        <label>전화번호:</label>
        <input {...register("phoneNumber")} />
        <ErrorMessage errorMessage={errors.phoneNumber?.message} />
      </div>
      <div>
        <label>약관동의:</label>
        <input {...register("terms")} type="checkbox" />
        <ErrorMessage errorMessage={errors.terms?.message} />
      </div>
      <input type="submit" value={"대기자 추가"} />
      <DevTool control={control} />
    </form>
  );
};

type ErrorMessageProps = {
  errorMessage?: string;
};

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <span
      style={{
        color: "red",
      }}
    >
      {errorMessage}
    </span>
  );
};
