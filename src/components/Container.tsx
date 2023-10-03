import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = ({
  imageUrl,
  backgroundColor,
  children,
}: {
  imageUrl?: string;
  backgroundColor?: string;
  children?: ReactNode;
}) => {
  return (
    <StyledContainer $imageurl={imageUrl} $backgroundcolor={backgroundColor}>
      {children}
      <span className="cir light" />
      <span className="cir dark" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div.attrs({ className: "container" })<{
  $imageurl?: string;
  $backgroundcolor?: string;
}>`
  background: ${({ $backgroundcolor }) => $backgroundcolor};
  width: 100%;
  max-width: 1408px;
  padding: 30px 50px;
  box-sizing: border-box;
  border-radius: 32px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (min-width: 600px) {
    padding: 100px 80px;
  }

  .cir {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    border-radius: 100%;
    pointer-events: none;
  }

  .light {
    width: 2000px;
    height: 2000px;
    border: 5px solid white;
    transform: translate(-1500px, 1550px);
  }

  .dark {
    width: 2000px;
    height: 2000px;
    border: 3px solid #424242;
    transform: translate(-1400px, 1500px);
  }

  ${({ $imageurl }) =>
    $imageurl &&
    `   &:before {
      content: "";
      background-image: url("${$imageurl}");
      background-size: cover;
      background-position: right center;
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      border-radius: 32px;
      top: 0;
      left: 0;
      z-index: -1;
    }`}

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 32px;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    z-index: 1;
    position: relative;

    li {
      flex: 1 auto;

      @media (min-width: 884px) {
        flex: inherit;
      }
    }
  }
`;

export default Container;
