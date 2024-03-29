import "./globals.css";
import { mainFont } from "@/fonts";
import { MainHeader } from "@/components/layout/main-header";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "아이폰 중고가 검색기",
  description: "가장 최신 아이폰 중고가를 찾아드립니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
