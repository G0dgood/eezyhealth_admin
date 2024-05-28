import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { InputField } from '../Options';
import ModalHeader from './ModalHeader';

const CraeteBoardTask = ({ showTask, setShowTask }: any) => {


	const handleClose = () => setShowTask(false);
	const handleShow = () => setShowTask(true);

	return (
		<>
			<Modal show={showTask} onHide={handleClose} centered>
				{/* <div className='modal-close'>
					<h3>Create Board Task</h3>
					<AiOutlineClose size={25} />
				</div> */}
				<ModalHeader setShowTask={setShowTask} headerTitle={"Create Board Task"} />
				<Modal.Body>
					<Form>
						<InputField label={"Task Name"} placeholder={"Design new draft"} className={"mb-4"} />

						<InputField label={"Description"} placeholder={"it's a new task"} className={"mb-4"} />

						<div className='flex-date-input '>
							<InputField label={"Date date"} type={"date"} className={"100%"} />

							<InputField label={"Due Time"} type={"time"} className={"100%"} />
						</div>
						<button id='custom-btn' className='mt-4' > Create</button>
					</Form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default CraeteBoardTask;

