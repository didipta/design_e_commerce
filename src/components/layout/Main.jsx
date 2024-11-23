import React from "react";
import Header from "./Header";

const Main = ({ children }) => {
  return (
    <div>
      <div className=" fixed z-[1000] w-full">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Main;
