import React, { useState, useRef, useEffect } from "react";
import moment from "moment";

import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import ProgressChat from "./ProgressChat";
import { useAppDispatch, useAppSelector } from "../../store/useStore";


const TicketProgress = () => {
	const { id }: any = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const form: any = useRef();
	const { data, isLoading, isSuccess, message } = useAppSelector((state: any) => state.comment)
	const [ticket, setTicket] = useState<any>({});
	const [ticketStatus, setTicketStatus] = useState("");
	const [email, setEmail] = useState("");
	const [updatemessage, setUpdateMessage] = useState("");
	const [to, setTo] = useState("");
	const [from, setFrom] = useState("");

	// const { data } = useSelector((state: any) => state.ticketByID);

	console.log('data-data-@ts-ignore', data)

	useEffect(() => {

		// If success is true, fetch data again 
	}, [isSuccess, dispatch, id]);


	// useEffect(() => {
	// 	// dispatch(getTicketByIDAction(id));
	// 	if (successUpdateTicketStatus) {
	// 		setTicketStatus("");
	// 	}
	// }, [dispatch, id, successUpdateTicketStatus]);

	// useEffect(() => {
	// 	if (data?.ticket) {
	// 		setTicket(data?.ticket);
	// 	}
	// }, [data]);

	const handleUpdateTicketStatus = (e: any) => {
		e.preventDefault();
		if (ticketStatus) {
			// dispatch(updateTicketAction(id, ticketStatus));
		}
	};

	console.log('tickeidt', id)

	return (
		<div>
			<header className="ChatProgressView-header">
				<div>
					<span className="in-progresss">
						{ticket?.ticketType === "INCIDENT"
							? "INCIDENT"
							: ticket?.ticketType === "SERVICE"
								? "SERVICE"
								: "CHANGE"}
					</span>
				</div>
				<div className="ChatProgressView-close" >
					<div onClick={() => navigate(-1)}>
						<MdOutlineClose
							size={25}
							style={{ color: "white", backgroundColor: "" }}
							className="ChatProgressView-close-icon"
						/>
					</div>
				</div>
			</header>
			<div id="tp-header"></div>
			<main className="container">
				<div className="tp-main-grid">
					<div className="tp-activity-section">
						<ProgressChat id={id} ticket={ticket} />
						<h5 className="page-title">STATUS</h5>
						<div className="tp-status-area">
							{ticket?.status?.map((item: any, i: any) => (
								<p key={i}>
									Request status changed to <strong>{item?.status}</strong> on{" "}
									<span>
										{moment(item?.createdAt).format("MMM Do YYYY, h:mm A")}
									</span>
								</p>
							))}
						</div>
					</div>
					<div className="tp-shared-section">
						<div className="tp-shared-container">
							<div>
								{ticket?.finalStatus === "Assigned" ? (
									<div className="finalStatus-assigned">IN PROGRESS</div>
								) : ticket?.finalStatus === "Unassigned" ? (
									<div className="admin-btn-unassigned ">
										{ticket?.finalStatus}
									</div>
								) : ticket?.finalStatus === "Completed" ? (
									<div className="finalStatus-Resolved">Resolved</div>
								) : ticket?.finalStatus === "Reopen" ? (
									<div className="finalStatus-reopned">Reopened</div>
								) : (
									<div className="finalStatus-Closed">Closed</div>
								)}
							</div>
							<div className="tp-shared-with">
								<h6>Created By:</h6>
								<strong>
									{ticket?.createdBy?.firstname} {ticket?.createdBy?.lastname}
								</strong>
								<h6>Assigned to:</h6>
								<strong>
									{ticket?.assignedTo?.firstname} {ticket?.assignedTo?.lastname}
								</strong>
								<p>{ticket?.assignedTo?.email}</p>
								{ticket?.finalStatus === "Closed" ? (
									""
								) : (
									<form className="tp-update" ref={form}>
										<select
											id="js-select"
											onChange={(e) => setTicketStatus(e.target.value)}>
											<option value=" "> </option>
											{ticket?.finalStatus === "Completed" ? (
												""
											) : (
												<option value="Completed">Resolved</option>
											)}
											<option value="Closed">Closed</option>
											<option value="Reopen">Reopen</option>
										</select>
										{/* <button
											type="button"
											disabled={false}
											onClick={handleUpdateTicketStatus}>
											{false ? "Updating.." : "Update"}
										</button> */}


									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default TicketProgress;
