import "./globals.css";
import { mainFont } from "@/fonts";
import { MainHeader } from "@/components/app/main-header";
import Footer from "@/components/app/footer";

export const metadata = {
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
