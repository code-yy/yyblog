import React from "react";
import { Footer } from "src/Layout/Footer";
import { Header } from "src/Layout/Header";

export const Layout = (props: any) => {
  return (
    <div className="bg-gray-100">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
