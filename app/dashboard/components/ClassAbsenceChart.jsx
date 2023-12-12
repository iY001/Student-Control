"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['C4', 'C3', 'C2'],
  datasets: [
    {
      data: [15, 5, 3, ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
    },
  ],
};


export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Most Absent Classes Today',
    },
  },
};


const ClassAbsenceChart = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Pie options={options} data={data} />
    </div>
  );
}

export default ClassAbsenceChart;
