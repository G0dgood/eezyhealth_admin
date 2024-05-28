import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { InputField, customId } from '../Options';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import { Form } from 'react-bootstrap';
import { convertToISOString } from '../../hooks/date';


const AdminChangeStatus = ({ show, setShow, id, data }: any) => {


	const [input, setInput] = useState({
		taskStatus: "",
		description: "",
		dueDate: "",
		priority: "",
	})
	const [severityStyle, setSeverityStyle] = useState<any>({
		background: "transparent",
		width: "0%",
	});






	const value = {
		input: input,
		id: id
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Convert the expiryDate to ISO format using convertToISOString
		input.dueDate = !input.dueDate ? '' : convertToISOString(input.dueDate);
		// @ts-ignore
		dispatch(adminUpdateTask(value));
	}

	const handleClose = () => setShow(false);

	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				taskStatus: data?.status === "new" ? "NEW" :
					data.status === "inprogress" ? "IN_PROGRESS" :
						data.status === "completed" ? "COMPLETED" :
							data.status === "outdated" ? "OUTDATED" : "NEW",
				description: data?.description,
				dueDate: data?.date,
				priority: data?.priority,
			});
		});
	}, [data?.description, data?.date, data?.priority, data?.status, id, setInput]);

	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	useEffect(() => {
		if (input.priority === "LOW") {
			setSeverityStyle(() => ({
				background: "green",
				width: "25%",
			}));
		} else if (input.priority === "MEDIUM") {
			setSeverityStyle(() => ({
				background: "#7149eb",
				width: "50%",
			}));
		} else if (input.priority === "HIGH") {
			setSeverityStyle(() => ({
				background: "red",
				width: "100%",
			}));
		} else {
			setSeverityStyle(() => ({
				background: "#eee9fd",
				width: "100%",
			}));
		}
	}, [input.priority]);




	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={show} onHide={handleClose} centered>
				<ModalHeader setShow={setShow} headerTitle={"Update Task"} />
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<div className={"input mb-4"}>
							<label htmlFor="severity" className={"input__label"} >Change Status</label>
							<select name="priority" value={input.taskStatus} onChange={(e: any) => handleOnChange("taskStatus", e.target.value)}  >
								<option value="">Select priority</option>
								<option value="NEW">NEW</option>
								<option value="IN_PROGRESS">IN PROGRESS</option>
								<option value="COMPLETED">COMPLETED</option>
								<option value="OUTDATED">OUTDATED</option>
							</select>
						</div>


						<div className='flex-date-input mb-4'>
							<InputField label={"Due date"} type={"date"} className={"100%"}
								value={input.dueDate}
								onChange={(e: any) => handleOnChange("dueDate", e.target.value)} />
						</div>

						<div className={"input"}>
							<label htmlFor="severity" className={"input__label"} >Priority</label>
							<select name="priority" value={input.priority} onChange={(e: any) => handleOnChange("priority", e.target.value)}  >
								<option value="">Select priority</option>
								<option value="LOW">Low</option>
								<option value="MEDIUM">Medium</option>
								<option value="HIGH">High</option>
							</select>
						</div>

						<label htmlFor="severity" style={{ display: "flex", marginBottom: "20px" }} className={"input__label"}>
							Severity
							<span
								style={{
									backgroundColor: severityStyle.background,
									width: severityStyle.width,
									height: 7,
									marginLeft: 7.5,
									borderRadius: 5,
									alignSelf: "center",
									transition: "all .75s",
								}}
							/>
						</label>
						<textarea
							name="message"
							id="message-textarea"
							value={input.description}
							onChange={(e: any) => handleOnChange("description", e.target.value)}
							placeholder="description..."
							rows={4}
						/>
						<button id='custom-btn' className='mt-4' disabled={false} >{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Create"}</button>
					</Form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default AdminChangeStatus;
