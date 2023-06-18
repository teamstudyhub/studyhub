import Tcard from '../components/Tcard';
import type { Meta, StoryObj } from '@storybook/react';



const meta: Meta<typeof Tcard> = {
    title: 'Upcoming tests',
    component: Tcard, 
  };
  
  //exporting meta of button story
  export default meta;
  
  type Story = StoryObj<typeof Tcard>;
  
  //exporting primary varient of button
  export const Python: Story = {
    args:{
        title:"Python",
        duration:"90 mins",
        staff:"pankaja",
        date:" 12th April"
    }
    
  }
  export const OS: Story = {
    args:{
        title:"Operating systems",
        duration:"90 mins",
        staff:"Managala",
        date:" 12th April"
    }
    
  }
