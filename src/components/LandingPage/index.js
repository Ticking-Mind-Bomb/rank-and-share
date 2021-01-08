import React from "react";
import { LandingWrapper, LandingButton } from "./styles";

import * as ROUTES from "../../constants/routes";

export const LandingPage = () => {
  return (
    <LandingWrapper>
      <h1>The best place to rank your favorite movie series</h1>
      <LandingButton to={ROUTES.SERIES_PAGE}>Start Ranking</LandingButton>
    </LandingWrapper>
  );
};
