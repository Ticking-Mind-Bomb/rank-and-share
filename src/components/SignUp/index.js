import React from "react";
import { SignUpPageWrapper, SignUpForm, FormContainer } from "./styles";
import { Button } from "../Button";

export const SignUp = () => {
  return (
    <SignUpPageWrapper>
      <h1>Join Rank and Share</h1>
      <FormContainer>
        <SignUpForm>
          <input name="first-name" type="text" placeholder="First Name" />
          <input name="last-name" type="text" placeholder="Last Name" />
          <input
            className="wide"
            name="email"
            type="text"
            placeholder="E-mail"
          />
          <input
            className="wide"
            name="password"
            type="password"
            placeholder="Choose a password"
          />
          <input
            className="wide"
            name="verify-password"
            type="password"
            placeholder="Verify your password"
          />
          <Button text="Sign Up" />
        </SignUpForm>
      </FormContainer>
    </SignUpPageWrapper>
  );
};
