import { useEffect, useState } from 'react';
import ModalHeaderIcon from '../ModalHeaderIcon';
import { AiOutlineNotification } from "react-icons/ai";


const Notification = ({ isOpen, onClose }: any) => {
	const drawerclassNameName = `drawer-container ${isOpen ? 'drawer-open' : ''}`;
	const [edit, setEdit] = useState(false);



	const [input, setInput] = useState<any>({
		firstname: "",
		lastname: "",
		email: "",
		address: "",
		phoneNumber: "",
		role: "",
	})




	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};




	const handelSubmitProfile = (e: any) => {
		e.preventDefault()
		const value: any = input;
		// @ts-ignore
		dispatch(updateProfile(value))
	}


	return (
		<div>
			<div className={drawerclassNameName}>
				<ModalHeaderIcon setShow={onClose} icon={<AiOutlineNotification size={30} />} title={"Notification"} subtitle={"Update & Change your profile "} />
				<div>
					<div className="side-wrapper">
					</div>
				</div>
			</div>
		</div>
	);
}

export default Notification;

