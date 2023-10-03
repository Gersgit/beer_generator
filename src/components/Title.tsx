import React, { useRef } from "react";
import styled from "styled-components";

const Title = ({
  tag,
  title,
  color,
}: {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  color?: string;
}) => {
  const HeadingTag = tag;

  return (
    <StyledTitle $color={color} $headingtag={HeadingTag}>
      <HeadingTag>{title}</HeadingTag>
    </StyledTitle>
  );
};

const StyledTitle = styled.div.attrs({ className: "title", tabIndex: 0 })<{
  $color?: string;
  $headingtag?: string;
}>`
  ${({ $color, $headingtag }) => `${$headingtag} {
  color: ${$color || "black"};
  margin: 0px 32px 80px 32px;
  text-transform: capitalize;  
}`}
`;

export default Title;
