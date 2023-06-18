import React from 'react';
import {  Meta, StoryObj } from '@storybook/react';
import DoughnutChart from '../components/DoughnutChart';

export default {
  title: 'DoughnutChart',
  component: DoughnutChart,
} as Meta;

type Template= StoryObj <typeof DoughnutChart>;

export const Default:Template ={
args :{
  initialData: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  },
}};