import React from 'react';
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
import { months } from '../Options';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);




const LinePerformanceChart = () => {



	const data: any = {
		labels: months,

		datasets: [
			{
				fill: false,
				lineTension: 0.3,
				backgroundColor: '#C4B4F7',
				borderColor: '#44CE2D',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#44CE2D',
				pointBackgroundColor: '#f31212',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#44CE2D',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [33, 42, 44, 55, 12, 55, 86, 77, 13.41, 98, 99, 66],
			},
		]
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
		<div className='Linestyle2'>
			<Line
				data={data}
				options={options}
			/>
		</div>
	)
}

export default LinePerformanceChart