import React from "react";

/**
 * Props for the Dropdown component.
 */
export interface DropdownProps {
  /**
   * An array of strings representing the dropdown options.
   */
  options?: string[];

  /**
   * The callback function to be executed when an option is selected.
   */
  onSelect: () => void;
}

export interface DropdownItemProps {
  isSelected?: boolean;
}
