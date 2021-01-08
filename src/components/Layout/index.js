import React from "react";
import { Header } from "./styles";
import { RiMovie2Line } from "react-icons/ri";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <div className="icon">
          <RiMovie2Line size="4rem" />
        </div>
        <h1>Rank and Share</h1>
      </Header>
      {children}
    </div>
  );
};
