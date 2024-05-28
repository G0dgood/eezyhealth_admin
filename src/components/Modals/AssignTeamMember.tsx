import Modal from 'react-bootstrap/Modal';
import { customId, customStyles } from '../Options';
import ModalHeader from './ModalHeader';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { SVGLoader } from '../SVGLoader';
import Select from 'react-select'


const AssignTeamMember = ({ showAssignMember, setShowAssignMember, TeamId }: any) => {



	const navigate = useNavigate();
	const handleClose = () => setShowAssignMember(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [teamid, setTeamid] = useState<any>(TeamId)


	useEffect(() => {
		setTeamid(TeamId)
	}, [TeamId]);







	// const allAgents = [] as any;
	// dataAll &&
	// 	dataAll?.forEach((employee: any) =>
	// 		allAgents?.push({
	// 			value: employee?.id,
	// 			label: employee?.firstName + " " + employee?.LastName,
	// 		})
	// 	);

	const handleSelectedChange = (selectedOption: any) => {
		setSelectedOption(selectedOption);
		setTeamid(TeamId)
	};



	const [userId, setUserId] = useState<any>(null)

	useEffect(() => {
		// @ts-ignore  
		setUserId(selectedOption?.value)
	}, [selectedOption])




	const handleSubmit = (e: any) => {
		e.preventDefault()
		const inputs = {
			id: teamid,
			value: { "userId": userId }
		};
		// @ts-ignore 
		dispatch(createTeamMembers(inputs))
	}

	return (
		<>
			<ToastContainer position="top-right" />
			<Modal show={showAssignMember} onHide={handleClose} centered>
				<ModalHeader setShow={setShowAssignMember} headerTitle={"Add Team Member"} />
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<div className='mb-4'>
							<Select name="AssignedTo" id="register-select"
								value={selectedOption}
								onChange={handleSelectedChange}
								// options={allAgents}
								// isDisabled={isLoadingAll}
								// isLoading={isLoadingAll}
								styles={customStyles} />
						</div>
						<button
							type="submit"
							id='custom-btn'
							className='mt-4'
							disabled={false} >{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Assign"}</button>
					</form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default AssignTeamMember;