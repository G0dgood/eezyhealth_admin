import React from 'react'



const HeaderDate = () => {
	const formatDate = (date: { toLocaleDateString: (arg0: string, arg1: { weekday: string; day: string; month: string; }) => any; }) => {
		const options = { weekday: 'long', day: 'numeric', month: 'long' };
		return date.toLocaleDateString('en-US', options);
	};
	const currentDate = new Date();
	const formattedDate = formatDate(currentDate);
	return (
		<h6>{formattedDate}</h6>
	)
}

export default HeaderDate