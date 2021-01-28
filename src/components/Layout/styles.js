import styled from "styled-components";

export const Header = styled.div`
  text-align: center;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  .icon {
    color: var(--yellow);
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
