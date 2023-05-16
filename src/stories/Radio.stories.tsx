import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'examples/Filter',  
  component: Radio,
};

//exporting meta of Filterbutton story
export default meta;

type Story = StoryObj<typeof Radio>;

//exporting primary varient of button
export const Radiobutton: Story = {
 
   }