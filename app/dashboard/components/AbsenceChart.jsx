"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Absence',
      data: labels.map(() => Math.floor(Math.random() * 1001)),
      backgroundColor: '#592c8c',
    },
  ],
};

const AbsenceChart = () => {
  
  return (
    <div className="w-[700px]">
      <h2>Absences in the Week</h2>
      <Bar options={options} data={data} />;
    </div>
  );
}

export default AbsenceChart;
