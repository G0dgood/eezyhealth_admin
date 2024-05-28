import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = ({ datas }: any) => {

	const completedTasks = datas?.filter((task: { taskStatus: string; }) => task?.taskStatus === 'COMPLETED');

	// Group completed tasks by the day of the months
	const groupedTasks = completedTasks?.reduce((grouped: any, task: any) => {
		const completedDate = new Date(task.updatedAt);
		const dayOfMonth = completedDate.getDate();

		if (!grouped[dayOfMonth]) {
			grouped[dayOfMonth] = [];
		}

		grouped[dayOfMonth].push(task);

		return grouped;
	}, {});




	const today = new Date();
	const currentDay = today.getDate();
	const lastSixDays = Array.from({ length: 7 }, (_, index) => currentDay - index).reverse();
	const data: any = {
		labels: lastSixDays,
		datasets: [
			{
				fill: false,
				lineTension: 0.3,
				backgroundColor: '#C4B4F7',
				borderColor: '#6F47EB',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#6F47EB',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#6F47EB',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: lastSixDays?.map(day => groupedTasks[day]?.length || 0),
			},
		],
	};



	const options: any = {
		plugins: {
			legend: {
				display: false, // Set display property of legend to false
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<div className='Linestyle'>
			<Line data={data} options={options} />
		</div>
	);
};

export default LineChart;
