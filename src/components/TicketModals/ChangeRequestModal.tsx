

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import TicketForm from './TicketForm'
import ModalHeader from '../Modals/ModalHeader'

const ChangeRequestModal = ({ headerTitle }: any) => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<button onClick={() => setShow(true)} className='btn'>
				Raise Change
			</button>
			<Modal
				size="lg"
				show={show}
				backdrop="static"
				keyboard={false}>
				<ModalHeader setShow={setShow} headerTitle={headerTitle} />
				<Modal.Body>
					<TicketForm
						type={"CHANGE"}
						setShow={setShow}
					/>
				</Modal.Body>
			</Modal>
		</div>
	)
}

export default ChangeRequestModal