
import  { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

interface DoughnutChartProps {
  initialData: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
    }[];
  };
}

  
export default function DoughnutChart   ({ initialData }:DoughnutChartProps)  {
  const [data, setData] = useState(initialData);

  const handleChangeData = () => {
    const newData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    setData(newData);
  };

  return (
    <div className=' flex felx-col py-3  w-[340px] h-[340px]'>
      <h2>Doughnut Chart</h2>
      <Doughnut data={data}  />
      <button onClick={handleChangeData}>Change Data</button>
    </div>
  );
};

DoughnutChart.defaultProps = {
  initialData: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      },
    ],
  },
};





