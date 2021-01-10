import styled from "styled-components";

export const RankPageWrapper = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
`;

export const RankPageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MoviePoster = styled.img`
  cursor: pointer;
`;

export const MoviePosterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  border-right: 1px solid black;
  padding-right: 1rem;
`;
