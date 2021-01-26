import React, { useState } from "react";
import {
  SignUpPageWrapper,
  SignUpForm,
  FormContainer,
  SignUpButton,
  SignInLink,
} from "./styles";
import { useFirebase } from "../../context/FirebaseContext";
import { useHistory } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

export const SignUp = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid =
    password !== verifyPassword || password === "" || email === "";

  const handleInput = (e) => {
    switch (e.target.name) {
      case "first-name":
        setFirst(e.target.value);
        break;
      case "last-name":
        setLast(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "verify-password":
        setVerifyPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setFirst("");
        setLast("");
        setEmail("");
        setPassword("");
        setVerifyPassword("");
        history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <SignUpPageWrapper>
      <h1>Join Rank and Share</h1>
      <FormContainer>
        <SignUpForm onSubmit={handleSubmit}>
          <input
            value={first}
            name="first-name"
            type="text"
            placeholder="First Name"
            onChange={handleInput}
          />
          <input
            value={last}
            name="last-name"
            type="text"
            placeholder="Last Name"
            onChange={handleInput}
          />
          <input
            value={email}
            className="wide"
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={handleInput}
          />
          <input
            value={password}
            className="wide"
            name="password"
            type="password"
            placeholder="Choose a password"
            onChange={handleInput}
          />
          <input
            value={verifyPassword}
            className="wide"
            name="verify-password"
            type="password"
            placeholder="Verify your password"
            onChange={handleInput}
          />
          <SignUpButton disabled={isInvalid}>Sign Up</SignUpButton>

          {!!error && <p>{error.message}</p>}
        </SignUpForm>
      </FormContainer>
      <SignInLink to={ROUTES.SIGN_IN}>
        Already registered? Click here to sign in.
      </SignInLink>
    </SignUpPageWrapper>
  );
};
