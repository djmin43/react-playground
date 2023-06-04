import "./globals.css";
import { Inter } from "next/font/google";
import { mainFont } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "아이폰 중고가 검색기",
  description: "아이폰 중고가를 찾아드립니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
