import React from "react";
import { LandingWrapper, LandingButton, ButtonDiv } from "./styles";

import * as ROUTES from "../../constants/routes";

export const LandingPage = () => {
  return (
    <LandingWrapper>
      <h1>The best place to rank your favorite movie series</h1>
      <ButtonDiv>
        <LandingButton to={ROUTES.SIGN_IN}>Login</LandingButton>
        <LandingButton to={ROUTES.SIGN_UP}>Sign up</LandingButton>
      </ButtonDiv>
    </LandingWrapper>
  );
};
