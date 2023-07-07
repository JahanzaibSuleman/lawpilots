import React, { InputHTMLAttributes } from "react";

/**
 * Props for the Input component.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The type of the input field.
   */
  type?: string;

  /**
   * The placeholder text for the input field.
   */
  placeholder?: string;

  /**
   * The current value of the input field.
   */
  value?: string;

  /**
   * The callback function to be executed when the input value changes.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /**
   * An optional boolean indicating if the input value is valid.
   */
  isValid?: boolean;
}
