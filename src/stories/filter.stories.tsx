import type { Meta, StoryObj } from '@storybook/react';
import Filter from '../components/filter';
import Filter2 from '../components/filterstaff';


const meta: Meta<typeof Filter> = {
  title: 'Filter',
  component: Filter,
};

//exporting meta of Filter story
export default meta;

type Story = StoryObj<typeof Filter>;

//exporting primary varient of FIlter
export const Primary: Story = {}
export const StaffFilter=()=><Filter2/>
