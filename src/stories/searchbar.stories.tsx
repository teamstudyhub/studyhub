import { Meta, StoryObj } from '@storybook/react';

import Searchbar from '../components/searchbar2';

const meta: Meta<typeof Searchbar> = {
    title: 'Search bar',
    component: Searchbar, 
  };
  export default meta;
type Story= StoryObj<typeof Searchbar>

export const Primary :Story={}

