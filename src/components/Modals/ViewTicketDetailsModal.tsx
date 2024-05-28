import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { NoRecordFound } from '../Options';
import ImageLightbox from '../ImageLightbox';
import ModalHeader from './ModalHeader';
// import { baseUrl } from '../../shared/baseUrl';


const ViewTicketDetailsModal = ({ data }: any) => {
	const [showModal, setLgShow] = useState(false);




	// const { Image } = dataAll
	// const images = Image?.map((item: { image: any; }) => (
	// 	`${baseUrl}/${item.image}` // Replace with the actual path to your original images // Replace with the actual path to your thumbnail images
	// ));



	return (
		<>
			<button className="btn" onClick={() => setLgShow(true)} style={{ whiteSpace: "nowrap" }}>
				View details
			</button>
			{showModal && (
				<Modal
					size="lg"
					show={showModal}
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					{/* modal-header */}
					<ModalHeader setLgShow={setLgShow} setShow={setLgShow} headerTitle={"Ticket Details"} />
					{/* modal-Body */}
					<Modal.Body>
						<div className="pop_box">
							<div className="modal_container">
								<div className="container viewOrderContainer">
									<div className='details_info_title'>
										<span className='form_info'>{data?.issueDescription} </span>
									</div>
								</div>

								<div className="image_gallery">
									<span className='form_info'> Image </span>
									{Image?.length === 0 || Image === undefined ? (
										<div className='ang-dash-notfound'>
											<NoRecordFound colSpan={9} />
										</div>
									) : (

										<ImageLightbox images={data?.images} />
									)}

								</div>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			)}
		</>
	)
}

export default ViewTicketDetailsModal







