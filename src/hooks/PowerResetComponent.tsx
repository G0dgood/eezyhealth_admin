import React from 'react'
import { GrPowerReset } from 'react-icons/gr';
import createHttpService from '../helpers/HttpService';

const PowerResetComponent: React.FC<{ setIsLoading: React.Dispatch<React.SetStateAction<boolean>>; isLoading: boolean; email: string }> = ({ setIsLoading, email }) => {

	const handleResetEmail = async () => {
		setIsLoading(true);
		try {
			const HttpService = createHttpService(); // Instantiate your HTTP service
			const { data } = await HttpService.post('/api/v2/auth/resend-email-verification', {
				email: email,
			});
			console.log(data); // Handle success response
		} catch (error) {
			console.error('Error:', error); // Handle error
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='power-reset'>
			<span>If you did not get any email click</span>
			<GrPowerReset size={20} onClick={handleResetEmail} />
			<span>to reset.</span>
		</div>
	);
};


export default PowerResetComponent