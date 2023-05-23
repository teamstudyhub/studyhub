
import Dropdown from "../components/dropdown";
import { Meta,StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
    title: 'dropdown',
    component: Dropdown,
  };
  export default meta;

  type Story = StoryObj<typeof Dropdown>;
  export const Primary: Story = {
    args: {
      items_list: ["item 1", "item 2", "item 3"],
      placeholder: "default placeholder",
    }, 
  };
