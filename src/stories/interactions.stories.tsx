import type { Meta, StoryObj } from '@storybook/react';
import interactions from '../components/interactions';

const meta: Meta<typeof interactions> = {
  title: 'interations',  
  component: interactions,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof interactions>;

//exporting primary varient of button
export const Primary: Story = {

}