import React from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

const CustomizedButton = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 10px;

  ${(props) => {
    const { size } = props;

    switch (size) {
      case "small":
        return css`
          padding: 5px 10px;
          font-size: 12px;
        `;
      case "medium":
        return css`
          padding: 10px 20px;
          font-size: 14px;
        `;
      case "large":
        return css`
          padding: 15px 30px;
          font-size: 16px;
        `;
    }
  }}

  /* Variant styles */
  ${(props) =>
    props.variant === "primary" &&
    css`
      color: #ffffff;
      background-color: #4caf50;
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      color: #000000;
      background-color: #e7e7e7;
    `}

  /* Hover styles */
  &:hover {
    color: #ffffff;

    ${(props) =>
    props.variant === "primary" &&
    css`
        background-color: #0056b3;
      `}

    ${(props) =>
    props.variant === "secondary" &&
    css`
        background-color: #4e555b;
      `}
  }

  /* Active styles */
  &:active {
    ${(props) =>
    props.variant === "primary" &&
    css`
        background-color: #003d80;
      `}

    ${(props) =>
    props.variant === "secondary" &&
    css`
        background-color: #3b4248;
      `}
  }

  /* Disabled styles */
  &:disabled {
    background-color: #ced4da;
    color: #adb5bd;
    cursor: not-allowed;
  }
`;

/**
 * A customizable button component that supports different styles, sizes, and user interactions.
 */
export const Button: React.FC<ButtonProps> = ({
  size = "small",
  label = "",
  variant = "primary",
  ...props
}) => {
  return (
    <CustomizedButton size={size} variant={variant} {...props}>
      {label}
    </CustomizedButton>
  );
};
