import React, { useState } from "react";
import {
  SignInPageWrapper,
  FormContainer,
  SignInForm,
  SignInButton,
  SignUpLink,
} from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

export const SignIn = () => {
  const history = useHistory();
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleLogin(email, password)
  //     .then(() => {
  //       setPassword("");
  //       setEmail("");
  //     })
  //     .then(() => {
  //       history.push(ROUTES.DASHBOARD);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await handleLogin(email, password);
      setPassword("");
      setEmail("");
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setError(error);
    }
  }

  const isInvalid = email === "" || password === "";

  return (
    <SignInPageWrapper>
      <h1>Sign in to see your profile</h1>
      <FormContainer>
        <SignInForm onSubmit={handleSubmit}>
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
          {!!error && <p>{error.message}</p>}
        </SignInForm>
      </FormContainer>
      <SignUpLink to={ROUTES.SIGN_UP}>
        Not registered? Click here to sign up
      </SignUpLink>
    </SignInPageWrapper>
  );
};
