import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import TicketForm from './TicketForm'
import ModalHeader from '../Modals/ModalHeader'

const ServiceRequestModal = ({ headerTitle }: any) => {
	const [show, setShow] = useState(false);


	return (
		<div>
			<button onClick={() => setShow(true)} className='btn'>
				Raise Service
			</button>
			<Modal
				size="lg"
				show={show}
				backdrop="static"
				keyboard={false}>
				<ModalHeader setShow={setShow} headerTitle={headerTitle} />
				<Modal.Body>
					<TicketForm
						type={"SERVICE"}
						setShow={setShow}
					/>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default ServiceRequestModal