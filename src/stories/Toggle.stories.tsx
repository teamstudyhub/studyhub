import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '../components/Toggle';


const meta: Meta<typeof Toggle> = {
  title: 'Toggle',
  component: Toggle,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Toggle>;

//exporting primary varient of Toggle
export const Primary: Story = {}