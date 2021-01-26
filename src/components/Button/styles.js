import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--yellow);
  padding: 1rem;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: var(--darkYellow);
  }
`;
