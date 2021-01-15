import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 1rem 2rem;
  padding: 1rem;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  align-items: center;
  justify-items: center;
`;

export const MovieInfo = styled.div`
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;
