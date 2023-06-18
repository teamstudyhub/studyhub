import type { Meta, StoryObj } from '@storybook/react';
import History from '../components/table';

const meta: Meta<typeof History> = {
  title: 'Table',  
  component: History,
};

//exporting meta of Filterbutton story
export default meta;

type Story = StoryObj<typeof History>;

//exporting primary varient of button
export const HistoryTable: Story = {
 
   }