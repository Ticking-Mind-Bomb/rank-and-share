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

export const MoviePosterWrapper = styled.div`
  cursor: pointer;
  .ranked + img {
    filter: grayscale(100%) blur(1px);
  }
`;

export const MoviePoster = styled.div`
  position: relative;
  overflow: hidden;
  height: 275px;
  width: 185px;

  > img {
    position: absolute;
    top: 0;
    left: 0;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    color: var(--yellow);
    z-index: 9999;
  }
`;

export const MoviePosterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  border-right: 1px solid black;
  padding-right: 1rem;
`;

export const RankedListWrapper = styled.div`
  padding: 2rem;

  > div:first-of-type {
    border-top: 1px solid black;
  }
`;

export const RankedListItem = styled.div`
  text-align: left;
  font-size: 1.25rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid black;
`;
