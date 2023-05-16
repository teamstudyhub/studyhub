import type { Meta, StoryObj } from '@storybook/react';
import Filter from '../components/Filter';

const meta: Meta<typeof Filter> = {
  title: 'examples/Filter',  
  component: Filter,
};

//exporting meta of Filterbutton story
export default meta;

type Story = StoryObj<typeof Filter>;

//exporting primary varient of button
export const Filterbutton: Story = {
 
   }