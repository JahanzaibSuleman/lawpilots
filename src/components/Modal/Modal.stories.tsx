import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalPrimary: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <h1>Hello from MyComponent!</h1>
        <p>This is a sample component.</p>
      </div>
    ),
  },
};
