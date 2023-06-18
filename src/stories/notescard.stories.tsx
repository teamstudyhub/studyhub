import type { Meta, StoryObj } from '@storybook/react';
import Ncard from "../components/notesCard"

const meta: Meta<typeof Ncard > = {
    title: 'Notes card',
    component: Ncard ,
  };
  
export default meta;
type Story = StoryObj<typeof Ncard >;
export const Primary: Story = {
    args:{
        title:"OS week 1",
        dislikes:10,
        likes:20
    
    }
}