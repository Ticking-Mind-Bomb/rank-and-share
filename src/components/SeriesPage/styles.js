import styled from "styled-components";

export const SeriesWrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  padding: 2rem;
  margin: 0 auto;
  .title {
    margin: 0 auto;
    text-align: center;
  }
`;

export const SeriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  > a {
    text-align: center;
  }
`;
