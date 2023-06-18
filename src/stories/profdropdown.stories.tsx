import type { Meta, StoryObj } from '@storybook/react';
import profile from '../components/profdropdown';
import Profile from '../components/Profile';

const meta: Meta<typeof profile> = {
  title: 'profile',  
  component: profile,
};


export default meta;

export const Card1=()=><Profile/>

type Story = StoryObj<typeof profile>;

export const Dropdown: Story = {

}