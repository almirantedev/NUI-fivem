import styled, { css } from "styled-components";
import { TextProps } from "./interfaces";

const TextComponent = styled.p<Omit<TextProps, "children">>`
  color: ${({ textColor }) => (textColor === "string" ? textColor : "#fff")};
  font-size: ${({ size }) => (size === "string" ? size : "16px")};
  font-weight: ${({ weight }) => (weight ? weight : "regular")};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}

  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "none"};
`;

export default TextComponent;
