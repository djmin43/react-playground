import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <header>header</header>
      <nav>navbar</nav>

      {children}

      <footer>this is footer</footer>
    </main>
  );
};

export default Layout;
