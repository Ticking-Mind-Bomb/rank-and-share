import React from "react";
import { Header, NavContainer } from "./styles";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Nav } from "../Nav";

import * as ROUTES from "../../constants/routes";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavContainer>
        <Header>
          <Link to={ROUTES.LANDING}>
            <div className="icon">
              <RiMovie2Line size="4rem" />
            </div>
          </Link>
          <Link to={ROUTES.LANDING}>
            <h1 className="title">Rank and Share</h1>
          </Link>
        </Header>
        <Nav />
      </NavContainer>
      {children}
    </div>
  );
};
