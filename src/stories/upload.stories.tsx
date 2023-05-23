import { Meta, StoryObj } from "@storybook/react";
import Unotescard from "../components/upload";
const meta: Meta<typeof Unotescard> = {
    title: 'upload notes area',  
    component: Unotescard,
  };
  
  //exporting meta of button story
  export default meta;
  
  type Story = StoryObj<typeof Unotescard>;
  
  //exporting primary varient of button
  export const Primary: Story = {
  
  }