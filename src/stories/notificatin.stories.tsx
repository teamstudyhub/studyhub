import type { Meta, StoryObj } from '@storybook/react';
import Notification from '../components/notification';

const meta: Meta<typeof Notification> = {
  title: 'Notification',  
  component: Notification,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Notification>;

//exporting primary varient of button
export const Primary: Story = {
 
   }