import React from "react";
import styled, { css } from "styled-components";
import { InputProps } from "./types";

const CustomizedInput = styled.input<InputProps>`
  padding: 5px;
  border-radius: 3px;
  border: none;
  outline: 1px solid #000000;
  ${(props) =>
    !props.isValid &&
    css`
      outline: 2px solid #ff0101;
    `}
`;

/**
 * 
 * An input component with various input types, placeholder text, and optional validation support.
 * 
 **/
export const Input: React.FC<InputProps> = ({
  isValid = true,
  ...props
}) => {
  return (
    <CustomizedInput isValid={isValid}  {...props} />
  );
};
