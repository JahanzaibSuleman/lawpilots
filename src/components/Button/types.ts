import React, { ButtonHTMLAttributes } from "react";

/**
 * Props for the Button component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The label text to display inside the button.
   */
  label?: string;

  /**
   * The style variant of the button. Available options: "primary", "secondary".
   */
  variant?: "primary" | "secondary";

  /**
   * The size of the button. Available options: "small", "medium", "large".
   */
  size?: "small" | "medium" | "large";

  /**
   * Custom CSS styles for the button.
   */
  style?: React.CSSProperties;

  /**
   * Event handler for the button click event.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
