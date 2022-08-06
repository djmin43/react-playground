import React, { ReactNode } from "react";
import { styled } from "@stitches/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout>
      <header>header</header>
      <nav>navbar</nav>

      {children}

      <footer>this is footer</footer>
    </MainLayout>
  );
};

const MainLayout = styled("main", {
  backgroundColor: "#edf0f2",
});

export default Layout;
