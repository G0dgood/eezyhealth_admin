import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChat = () => {


  const doughnutData = {
    datasets: [
      {
        label: 'Task',
        data: [34, 16, 40],
        backgroundColor: [
          '#44CE2D',
          '#EB3D4D',
          '#E5ECFB'
        ],
        cutout: 50,
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    width: 400, // Set your desired width
    height: 400, // Set your desired height
    cutoutPercentage: 70,
  };
  return (

    <div className='Doughnutcontainer'>
      <Doughnut data={doughnutData} options={chartOptions} />
    </div>
  )
}

export default DoughnutChat;

