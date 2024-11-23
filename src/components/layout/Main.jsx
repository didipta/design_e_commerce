import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <div>
      <div className=" fixed z-[1000] w-full">
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Main;
