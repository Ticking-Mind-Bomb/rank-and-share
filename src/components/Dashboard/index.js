import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

export const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h1>{currentUser.displayName}'s Dashboard</h1>
      <Link to={ROUTES.PROFILE}>Your Profile</Link>
    </div>
  );
};
