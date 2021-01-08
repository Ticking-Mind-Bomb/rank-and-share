import styled from "styled-components";
import { Link } from "react-router-dom";

export const LandingWrapper = styled.div`
  text-align: center;
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
`;

export const LandingButton = styled(Link)`
  text-decoration: none;
  background-color: var(--yellow);
  padding: 1rem;
  display: block;
  color: white;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  &:hover {
    background-color: var(--darkYellow);
  }
`;
