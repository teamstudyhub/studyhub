import type { Meta, StoryObj } from '@storybook/react';
import FCard from '../components/featurescard';


const meta: Meta<typeof FCard> = {
  title:  'FCard',
  component: FCard,
};

export default meta;

type Story = StoryObj<typeof FCard>;


export const Primary: Story = {}