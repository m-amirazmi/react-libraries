import type { Meta, StoryObj } from "@storybook/react";
import { NestedMenu } from "./nested-menu";
import menu from "./nested-menu.data.json";

const meta: Meta<typeof NestedMenu> = {
  title: "Components/Nested Menu",
  component: NestedMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultView: Story = {
  args: {
    menu,
  },
};
