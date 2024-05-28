import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.svg'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoPricetag, IoHelpCircle, IoLogIn } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";


const LoginHeader = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};



	// Define dropdown options
	const dropdownOptions = [
		{
			icon: <IoPricetag size={18} />,
			label: 'Pricing',
			onClick: () => navigate('/pricing'),
		},
		{
			icon: <FaBuilding size={18} />,
			label: 'Company',
			onClick: () => window.open('https://outcess.com', '_blank'),
		},
		{
			icon: <IoHelpCircle size={18} />,
			label: 'Help',
			onClick: () => navigate('/help'),
		},
		{
			icon: <IoIosLock size={18} />,
			label: 'Sign Up',
			onClick: () => navigate('/signup'),
		},
		{
			icon: <IoLogIn size={18} />,
			label: 'Log in',
			onClick: () => navigate('/'),
		},
	];


	return (
		<div className="login-container-inner">
			<div className="login-logo-container">
				<img src={logo} alt='logo' crossOrigin="anonymous" className="logo-area-img" />
				<h2>Eazy Desk</h2>
			</div>
			<div className="login-text-container">
				{dropdownOptions.map((menuItem, index) => (
					<span key={index} onClick={menuItem.onClick}>{menuItem.label}</span>
				))}
			</div>
			<div className='mobile_login_text_container' onClick={toggleDropdown}>
				<HiMenuAlt3 />
				{isOpen && (
					<div className='mobile-card-dropdown'>
						{dropdownOptions.map((option, index) => (
							<div key={index} className={`mobile-card-option ${index !== dropdownOptions.length - 1 ? 'mobile-card-option-border' : ''}`} onClick={option.onClick}>
								{option.icon}
								<span>{option.label}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default LoginHeader
