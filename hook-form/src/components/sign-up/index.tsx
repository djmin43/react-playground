import { Member, memberSchema } from "../../App.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpProps = {
  addMember: (newMember: Member) => void;
};
export const SignUp = ({ addMember }: SignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Member>({
    resolver: zodResolver(memberSchema),
  });

  return (
    <form onSubmit={handleSubmit(addMember)}>
      <h2>대기자 추가</h2>
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
