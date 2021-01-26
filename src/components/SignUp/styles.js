import styled from "styled-components";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const SignUpPageWrapper = styled.div`
  display: grid;
  gap: 16px;
  place-items: center;
`;

export const FormContainer = styled.div`
  background-color: hsla(46, 100%, 84%, 0.5);
  padding: 24px;
  width: 50%;
  border-radius: 15px;
`;

export const SignUpForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  > input {
    height: 40px;
    padding: 0 8px;
    box-shadow: none;
    border: 1px solid hsla(0, 0%, 0%, 0.2);
    border-radius: 5px;
  }

  .wide {
    grid-column: 1 / span 2;
  }
`;

export const SignUpButton = styled(Button)`
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  grid-column: 1 / span 2;
  width: 100%;
  background-color: ${(props) => (props.disabled ? "grey" : "var(--yellow)")};
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "grey" : "var(--darkYellow)"};
  }
`;

export const SignInLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  color: hsl(208, 14%, 18%);
  &:hover {
    color: hsl(208, 14%, 38%);
  }
`;
