import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewMember, getList } from "../../api";
import { SignUp } from "../sign-up";
import { Header } from "../header";
import { MemberList } from "../member-list";

export const memberSchema = z.object({
  name: z
    .string()
    .min(1, "대기자 이름을 입력해주세요.")
    .max(5, "대기자 이름은 6자 이하로 해주세요."),
  phoneNumber: z
    .string()
    .length(11, "전화번호를 아래와 같이 입력해주세요(ex: 01012341234)")
    .regex(/^\d+$/, "전화번호를 아래와 같이 입력해주세요(ex: 01012341234)"),
  terms: z.literal(true, {
    errorMap: () => ({
      message: "도망가지 않는다고 약속해주세요.",
    }),
  }),
});

export type Member = z.infer<typeof memberSchema>;

export function MainApp() {
  const queryClient = useQueryClient();

  const membersQuery = useQuery(["get-list"], getList);
  const addMemberMutation = useMutation(["add-member"], createNewMember, {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["get-list"] }),
  });

  const addMember = (newMember: Member) => {
    addMemberMutation.mutate(newMember);
  };

  if (!membersQuery.isSuccess) {
    return <div>loading..</div>;
  }

  return (
    <main>
      <Header />
      <SignUp addMember={addMember} />
      <MemberList memberList={membersQuery.data} />
    </main>
  );
}
