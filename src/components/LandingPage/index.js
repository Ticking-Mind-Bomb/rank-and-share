import React from "react";
import { LandingWrapper, LandingButton, ButtonDiv } from "./styles";

import * as ROUTES from "../../constants/routes";

export const LandingPage = () => {
  return (
    <LandingWrapper>
      <h1>The best place to rank your favorite movie series</h1>
      <ButtonDiv>
        <LandingButton to={ROUTES.SERIES_PAGE}>Login</LandingButton>
        <LandingButton>Sign up</LandingButton>
      </ButtonDiv>
    </LandingWrapper>
  );
};
