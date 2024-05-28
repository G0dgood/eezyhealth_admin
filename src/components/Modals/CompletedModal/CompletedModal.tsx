import { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { BsXLg } from "react-icons/bs";
import { customId } from '../../Options';
import { SVGLoader } from '../../SVGLoader';

const CompletedModal = ({ id, show, setShow }: any) => {







	const handelfalse = () => {
		setShow(false)
	}
	const handeltrue = () => {
		const input = {
			"id": id,
			inputs: { "isCompleted": true }
		}
		// @ts-ignore 
		dispatch(markTask(input))
	}


	return (
		<div >
			<ToastContainer position="top-right" />
			<Modal show={show} centered>
				<div className='exit-modal' onClick={() => setShow(false)}>
					<BsXLg size={20} className='close-span-icon' />
				</div>
				<div className="popup__container">
					<div className="popup__modal">
						<div className="popup__modal_header">
							<div className="popup__modal_title_accent">
								<h5>Mark as completed?</h5>
							</div>
						</div>
						<div className="popup__modal_footer">
							<button id="button-modal-cancel" className="popup__modal_button" onClick={handelfalse}>Cancel</button>
							<button id="button-modal-continue" className="popup__modal_button_accent" disabled={false} onClick={handeltrue}>
								{false ? <SVGLoader width={"40px"} height={"40px"} color={"#fff"} /> : 'Continue'}</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default CompletedModal
