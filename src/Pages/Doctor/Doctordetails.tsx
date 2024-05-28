import React from 'react'
import { IoIosStar } from 'react-icons/io'
import img from '../../assets/svg/card_doctor.svg'
import Boards from './Boards'
import { useLocation } from 'react-router-dom'

const Doctordetails = () => {
	const { state } = useLocation();
	const { item } = state || {};
	// const { item } = location?.state;
	// const { item } = props.location.state;


	console.log('item-item', item)
	return (
		<main>
			<div className='doctor_details_container'>
				<div className='doctor_details_container_sub'>
					<div className='user_card_image'>
						<img src={img} alt='logo' crossOrigin="anonymous" className=" " />
					</div>
					<div>
						<h1>Dr  {item?.first_name} {item?.last_name}</h1>
						<p>{item?.specialization}</p>
						<div>{item?.experience_yrs} years experience</div>
						<div className='user_card_image_three'>
							<div className='user_card_image_star'>
								<IoIosStar color='#EDF115' />
								<IoIosStar color='#EDF115' />
								<IoIosStar color='#EDF115' />
								<IoIosStar color='#EDF115' />
								<IoIosStar color='#D9D9D9' />
							</div>
							<p>{item?.rating}</p>
						</div>
					</div>
				</div>
				<div className='file_container_main'>
					<div className='file_container'></div>
					<div className='file_container_sub'><small>Joined:</small>  <p>23rd July 2021</p></div>
				</div>
			</div>

			<div className='biography_container'>
				<h3>Biography</h3>
				<p>
					{item?.About}
				</p>
			</div>
			<div>
				<Boards />
			</div>
		</main>
	)
}

export default Doctordetails