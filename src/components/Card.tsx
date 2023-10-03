import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = ({
  title,
  text,
  backgroundColor,
  buttonText,
  animation = false,
  click,
}: {
  title?: string;
  text?: string;
  backgroundColor?: string;
  buttonText: string;
  animation: boolean;
  click: () => void;
}) => {
  return (
    <StyledCard
      $backgroundcolor={backgroundColor}
      $animatecards={animation.toString()}
    >
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Button className="card-button" text={buttonText} click={click} />
    </StyledCard>
  );
};

const StyledCard = styled.div.attrs({ className: "card", tabIndex: 0 })<{
  $animatecards?: string;
  $backgroundcolor?: string;
}>`
  height: 264px;
  padding: 40px 32px;
  border-radius: 32px;
  gap: 8px;
  background: ${({ $backgroundcolor }) => $backgroundcolor || "white"};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 884px) {
    max-width: 286px;
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 24px;
  }

  p {
    margin: 0px;
    font-size: 16px;
  }

  ${({ $animatecards }) =>
    $animatecards &&
    `border-top: 0px solid black;
    transition: 1s;

    &:hover, &:focus {
      background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,186,76,1) 50%, rgba(196,159,82,1) 100%);
      border-top: 20px solid white;
    }`}
`;
export default Card;
