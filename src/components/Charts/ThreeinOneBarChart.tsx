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
import { Bar } from 'react-chartjs-2';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);




const ThreeinOneBarChart = ({ threeinone }: any) => {
	const data = {
		labels: ['Isn', 'Mtn', 'Uba', 'Fair Money', 'Access'],
		datasets: [
			{
				label: 'Completed',
				backgroundColor: '#0240BC',
				borderColor: '#0240BC',
				borderWidth: 1,
				barThickness: 20,
				data: [12, 19, 3, 5, 2],
			},
			{
				label: 'Inprogress',
				backgroundColor: '#0240bc90',
				borderColor: '#0240bc90',
				borderWidth: 1,
				barThickness: 20,
				data: [10, 15, 7, 8, 6],
			},
			{
				label: 'New',
				backgroundColor: '#E5ECFB',
				borderColor: '#E5ECFB',
				borderWidth: 1,
				barThickness: 20,
				data: [5, 8, 12, 9, 10],
			},
		],
	};

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<div className={threeinone}>
			<Bar data={data} options={options} />
		</div>
	);
}

export default ThreeinOneBarChart;




