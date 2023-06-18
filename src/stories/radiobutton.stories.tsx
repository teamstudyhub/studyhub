import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../components/radiobutton';

const meta: Meta<typeof Radio> = {
  title: 'Radio Button',  
  component: Radio,
};

//exporting meta of Filterbutton story
export default meta;

type Story = StoryObj<typeof Radio>;

//exporting primary varient of button
export const Radiobutton: Story = {
 
   }