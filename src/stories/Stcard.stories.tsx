import type { Meta, StoryObj } from '@storybook/react';
import Stcard from '../components/Stcard';

const meta: Meta<typeof Stcard> = {
  title: 'Staff test history(created test)',
  component: Stcard,
};
export default meta;

type Story = StoryObj<typeof Stcard>;

export const Python: Story = {
    args:{
      title:"Python",
      duration:"90 mins",
      staff:"Pankaja",
      date:"12th july 2023"
    }
  }