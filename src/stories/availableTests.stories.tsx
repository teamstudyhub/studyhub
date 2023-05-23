import type { Meta, StoryObj } from '@storybook/react';
import AvailableTest from '../components/availableTests';

const meta: Meta<typeof AvailableTest> = {
  title: 'AvailableTest',  
  component: AvailableTest,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof AvailableTest>;

//exporting primary varient of button
export const Primary: Story = {
 
   }