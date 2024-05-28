import React, { useEffect, useState } from 'react'
import BottomNavigation from '../../components/BottomNavigation'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav/SideNav'
import { VscListFilter } from 'react-icons/vsc'
import Search from '../../components/Search'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import img from "../../assets/svg/card_doctor.svg";
import { useNavigate } from 'react-router-dom'
import { getDoctorsCollection } from '../../hooks/getDoctors'
import { SVGLoader } from '../../components/SVGLoader'
import { NoRecordFound } from '../../components/Options'

const Doctor = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [doctors, setDoctors] = useState<any>([]);
	// Array of predefined color class names and their corresponding numbers
	const colorClasses = [
		{ colorClass: 'colors_card_one', number: 1 },
		{ colorClass: 'colors_card_two', number: 2 },
		{ colorClass: 'colors_card_three', number: 3 },
		{ colorClass: 'colors_card_four', number: 4 },
		{ colorClass: 'colors_card_five', number: 5 },
		{ colorClass: 'colors_card_six', number: 6 },
		{ colorClass: 'colors_card_seven', number: 7 },
		{ colorClass: 'colors_card_eight', number: 8 }
	];
	// Function to select a random color object
	const getRandomColorObject = () => {
		// Generate a random index within the range of the colorClasses array
		const randomIndex = Math.floor(Math.random() * colorClasses.length);
		// Return the color object at the randomly selected index
		return colorClasses[randomIndex];
	};


	console.log('doctors', doctors)




	useEffect(() => {
		setIsLoading(true);
		getDoctorsCollection()
			.then(data => {
				setDoctors(data); // Process the Doctors data here
				setIsLoading(false);
			})
			.catch(error => {
				// toastRef.current.error(error);
				// Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
				setIsLoading(false);
			});
	}, []);


	const handleClick = (item: any) => {
		console.log('handleClick', item)
		navigate("/doctordetails", { state: { item: JSON.parse(JSON.stringify(item)) } });
	};


	const renderUserCard = (data: any[]) => {
		// Get a random color object 
		return data?.map((item, index) => {
			const { colorClass, number } = getRandomColorObject();
			return (
				<div className={`user_card_image_container ${colorClass}`} key={index} onClick={() => handleClick(item)}>
					<div className='user_card_image_top'>
						{item?.isTop &&
							<div className={`top_doctor${number}`}>Top Doctor</div>
						}
						<div className='user_card_image'>
							{/* @ts-ignore  */}
							<img src="https://storage.googleapis.com/eezyhealth-2023.appspot.com/a8d6dd65-d69d-461b-8890-6bc63f51fffb.jpeg" alt='doctor' crossOrigin="anonymous" className="photo_uri" />
						</div>
						<p className='user_card_image_two_text'>Dr {item?.first_name} {item?.last_name}</p>
						<div className='user_card_image_two'>
							<p>{item?.specialization}</p>
							<p>{item?.experience_yrs} years experience</p>
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
					<div className='user_card_text_mail_container'>
						<div className='user_card_text_container'>
							<IoMdMail />
							<h6>prospermatt@gmail.com</h6>
						</div>
						<div className='user_card_text_container'>
							<FaPhoneAlt />
							<h6>+234144236775</h6>
						</div>
					</div>
				</div>
			)
		});
	};

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<h3 className='page_header_h3'>Doctor</h3>
				<div className='page_search_continer'>
					<Search placeholder={"Search Doctor"} />
					<div className='page_header_filter'>
						<VscListFilter />
						<p>filter</p>
					</div>
				</div>
				{isLoading ?
					<div className='svgloader_container'>
						<SVGLoader width={"50px"} height={"50px"} color={"#44CE2D"} />
					</div> : !doctors || doctors?.length === 0 ? <div className='svgloader_container'>
						<NoRecordFound />
					</div> :
						<div className='user_card_container'>
							{renderUserCard(doctors)}
						</div>}

			</main>
		</div>
	)
}

export default Doctor