import React, { useState } from "react";
import {
  SignInPageWrapper,
  FormContainer,
  SignInForm,
  SignInButton,
  SignUpLink,
} from "./styles";

import * as ROUTES from "../../constants/routes";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const isInvalid = email === "" || password === "";

  return (
    <SignInPageWrapper>
      <h1>Sign in to see your profile</h1>
      <FormContainer>
        <SignInForm>
          <input
            name="email"
            type="text"
            placeholder="Enter you e-mail"
            value={email}
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleInput}
          />
          <SignInButton disabled={isInvalid}>Sign In</SignInButton>
        </SignInForm>
      </FormContainer>
      <SignUpLink to={ROUTES.SIGN_UP}>
        Not registered? Click here to sign up
      </SignUpLink>
    </SignInPageWrapper>
  );
};
