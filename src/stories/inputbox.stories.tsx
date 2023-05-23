import type { Meta, StoryObj } from '@storybook/react';
import inputbox from '../components/inputbox';


const meta: Meta<typeof inputbox> = {
  title: 'inputbox',
  component: inputbox,
};


export default meta;

type Story = StoryObj<typeof inputbox>;


export const Primary: Story = {
    args:{
        heading:"Heading",
        container:"placeholder"
    }
}