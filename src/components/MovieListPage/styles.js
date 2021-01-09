import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MovieListHeader = styled.div`
  text-align: center;
`;

export const MovieListButton = styled(Link)`
  color: white;
  padding: 1rem;
  background-color: var(--yellow);
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  display: block;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;

  &:hover {
    background-color: var(--darkYellow);
  }
`;
