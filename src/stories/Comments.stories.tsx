import type { Meta, StoryObj } from '@storybook/react';
import Comments from '../components/Comments';

const meta: Meta<typeof Comments> = {
  title: 'Comments',
  component: Comments,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Comments>;

export const Primary: Story = {}