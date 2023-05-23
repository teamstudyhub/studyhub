import Attendtest from "../components/attendtest";
import { Meta,StoryObj } from "@storybook/react";

const meta: Meta<typeof Attendtest> = {
    title: 'Attend Test',
    component: Attendtest,
  };
  export default meta;

  type Story = StoryObj<typeof Attendtest>;
  export const Primary: Story = {}