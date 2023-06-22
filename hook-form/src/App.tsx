import "./App.css";
import { z } from "zod";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainApp } from "./components/main-app";

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

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <MainApp />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}

export default App;
