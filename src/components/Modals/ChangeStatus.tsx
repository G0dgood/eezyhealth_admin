import Modal from 'react-bootstrap/Modal';
import { customId } from '../Options';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';


const ChangeStatus = ({ show, setShow, id }: any) => {



	const navigate = useNavigate();
	const handleClose = () => setShow(false);


	const [input, setInput] = useState({
		status: "",
	})





	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	const value = {
		input: input,
		id: id
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		// @ts-ignore 
		dispatch(updateTask(value))
	}


	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Add Team Member"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<div className={"input"}>
								<label htmlFor="severity" className={"input__label"} >Change Status</label>
								<select name="priority" value={input.status} onChange={(e: any) => handleOnChange("status", e.target.value)}  >
									<option value="">Select priority</option>
									<option value="NEW">NEW</option>
									<option value="IN_PROGRESS">IN PROGRESS</option>
									<option value="COMPLETED">COMPLETED</option>
									<option value="OUTDATED">OUTDATED</option>
								</select>
							</div>
						</div>
						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={false} >{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Update"}</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default ChangeStatus;