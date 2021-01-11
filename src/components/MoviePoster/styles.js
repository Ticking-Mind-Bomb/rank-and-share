import styled from "styled-components";

export const MoviePosterWrapper = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 275px;
  width: 185px;

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

  > img {
    filter: ${(props) => (props.ranked ? "grayscale(100%) blur(1px)" : "none")};
    position: absolute;
    top: 0;
    left: 0;
  }
`;
