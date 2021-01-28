import React from "react";
import { Button } from "../Button";
import { NavDiv } from "./styles";
import { useAuth } from "../../context/AuthContext";

export const Nav = () => {
  const { handleLogout, currentUser } = useAuth();

  return (
    <NavDiv>
      {currentUser && <Button onClick={handleLogout}>Sign Out</Button>}
    </NavDiv>
  );
};
