import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 128px;
  line-height: 36px;  
  border: none;
  color: white;
  border-radius: 18px;
  background: #424242;
  cursor: pointer;
`;

const Button = ({
  text,
  click,
  className,
}: {
  text: string;
  click: () => void;
  className?: string;
}) => {
  return (
    <StyledButton className={className} onClick={click}>
      {text}
    </StyledButton>
  );
};

export default Button;
