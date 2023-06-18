import Ccard from "../components/Ccard";
import { Meta,StoryObj } from "@storybook/react";

const meta: Meta<typeof Ccard> = {
    title: 'Comment card',
    component: Ccard,
  };
  export default meta;

  type Story = StoryObj<typeof Ccard>;
  export const Primary: Story = {}