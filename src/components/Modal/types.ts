import React, { ReactNode } from "react";

/**
 * Props for the Modal component.
 */
export interface ModalProps {
  /**
   * A boolean indicating whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The callback function to be executed when the modal is closed.
   */
  onClose?: () => void;

  /**
   * The content to be displayed inside the modal.
   */
  children?: ReactNode;
}
