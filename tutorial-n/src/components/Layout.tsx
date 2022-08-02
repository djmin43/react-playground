import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <footer>
        <p>Copyright 2022 web warrior</p>
      </footer>
    </div>
  );
};

export default Layout;
