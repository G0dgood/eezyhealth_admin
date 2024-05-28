
import { useState } from 'react'
import { Modal, ProgressBar, Spinner } from 'react-bootstrap';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { toast } from 'react-toastify';
import ModalHeader from './Modals/ModalHeader';


const Uploadfile = () => {

	const customId = "custom-id-yes";
	const shortid = require('shortid');
	const [selectedfile, SetSelectedFile] = useState<any>([]);
	const [Files, SetFiles] = useState<any>([]);
	const [showModal, setLgShow] = useState(false);
	const [file, setFile] = useState([]);
	const [progress, setProgress] = useState(0);



	const filesizes = (bytes: number, decimals = 2) => {
		if (bytes === 0) return "0 Bytes";
		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
	};


	const InputChange = (e: any) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			if (selectedFile.name.endsWith('.csv') || selectedFile.type === 'text/csv') {
				setFile(selectedFile);
				// File is a CSV or has a .csv file extension, you can process it here.  
			} else {
				toast.error('Valid CSV file selected.');
				// Clear the input field
				e.target.value = '';
			}
		}


		// --For Multiple File Input
		let images = [];
		for (let i = 0; i < e.target.files.length; i++) {
			images.push(e.target.files[i]);
			let reader = new FileReader();
			let file = e.target.files[i];
			reader.onloadend = () => {
				SetSelectedFile((preValue: any) => {
					return [
						...preValue,
						{
							id: shortid.generate(),
							filename: e.target.files[i].name,
							filetype: e.target.files[i].type,
							fileimage: reader.result,
							datetime: e.target.files[i].lastModifiedDate.toLocaleString(
								"en-IN"
							),
							filesize: filesizes(e.target.files[i].size)
						}
					];
				});
			};
			if (e.target.files[i]) {
				reader.readAsDataURL(file);
			}
		}
	};

	const DeleteSelectFile = (id: any) => {
		if (window.confirm("Are you sure you want to delete this Image?")) {
			const result = selectedfile.filter((data: any) => data.id !== id);
			SetSelectedFile(result);
		} else {
			// alert('No');
		}
	};

	const FileUploadSubmit = async (e: any) => {
		e.preventDefault();
		// form reset on submit
		e.target.reset();
		if (selectedfile.length > 0) {
			for (let index = 0; index < selectedfile.length; index++) {
				SetFiles((preValue: any) => {
					return [...preValue, selectedfile[index]];
				});
			}
			SetSelectedFile([]);
		} else {
			alert("Please select file");
		}
	};


	const DeleteFile = (id: any) => {
		if (window.confirm("Are you sure you want to delete this Image?")) {
			console.log("Deleting file with id:", id);
			// Filter out the file with the specified id and update the Files state
			// const updatedFiles = Files.filter((data: { id: any; }) => data.id !== id); 
		} else {
			// Handle the case when the user cancels the delete operation
			// You can show a message or perform other actions here
			console.log("Delete operation canceled.");
		}
	}





	// useEffect(() => {

	// 	if (uploadisSuccess) {
	// 		setProgress(0)
	// 		toast.success("Inventory Updated!", {
	// 			toastId: customId
	// 		});
	// 		SetSelectedFile([]);
	// 		setLgShow(false) 
	// 	} else if (uploadisError) {
	// 		toast.error(uploadmessage, {
	// 			toastId: customId
	// 		});
	// 		setProgress(0)

	// 	}
	// }, [dispatch, uploadisError, uploadisSuccess, uploadmessage])



	const submitHandler = () => {
		const vaules = { file, setProgress }
		// @ts-ignore 
		dispatch(UploadInventorys(vaules))
	}

	return (
		<div>
			<button className="custom-btn" onClick={() => setLgShow(true)}>
				UPLOAD
			</button>
			<Modal
				show={showModal}
				size="lg"
				backdrop="static"
				keyboard={false}
				centered
				className="logic-modal">

				<ModalHeader
					setLgShow={setLgShow}
					icon={<MdOutlineCloudUpload
						size={30} />}
					title={"Upload File"}
					subtitle={"Upload a file"}
				/>

				<Modal.Body>
					<div className="card">
						<div className="card-body">
							<div className="kb-data-box">
								<form onSubmit={FileUploadSubmit}>
									<div className="kb-file-upload">
										<div className="file-upload-box">
											<input
												type="file"
												id="fileupload"
												accept=".csv"
												className="file-upload-input"
												onChange={InputChange}
												disabled={selectedfile.length === 1}
											/>
											<span>
												Drag and drop or{" "}
												<span className="file-link">Choose your files</span>
											</span>

										</div>
										<ProgressBar striped variant="info" now={progress} />
									</div>
									<div className="kb-attach-box mb-3">
										{selectedfile.map((data: any, index: any) => {
											const {
												id,
												filename,
												// filetype,
												fileimage,
												datetime,
												filesize
											} = data;
											return (
												<div className="file-atc-box" key={id}>
													{filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
														<div className="file-image">
															{" "}
															<img src={fileimage} alt="" crossOrigin="anonymous" />
														</div>
													) : (
														<div className="file-image">
															<i className="far fa-file-alt"></i>
														</div>
													)}
													<div className="file-detail">
														<h6>{filename}</h6>
														<p></p>
														<p>
															<span>Size : {filesize}</span>
															<span className="ml-2">
																Modified Time : {datetime}
															</span>
														</p>
														<div className="file-actions">
															<button
																type="button"
																className="file-action-btn"
																onClick={() => DeleteSelectFile(id)}
															>
																Delete
															</button>
														</div>
													</div>
												</div>
											);
										})}
									</div>
									{/* <div className="kb-buttons-box">
											<button
												type="submit"
												className="btn btn-primary form-submit"
											>
												Upload
											</button>
										</div> */}
								</form>
								{Files.length > 0 ? (
									<div className="kb-attach-box">
										<hr />
										{Files.map((data: any, index: any) => {
											const {
												id,
												filename,
												// filetype,
												fileimage,
												datetime,
												filesize
											} = data;
											return (
												<div className="file-atc-box" key={index}>
													{filename.match(/.(jpg|jpeg|png|gif|svg |pdf)$/i) ? (
														<div className="file-image">
															<img src={fileimage} alt="" crossOrigin="anonymous" />
														</div>
													) : (
														<div className="file-image">
															<i className="far fa-file-alt"></i>
														</div>
													)}
													<div className="file-detail">
														<h6>{filename}</h6>
														<p>
															<span>Size : {filesize}</span>
															<span className="ml-3">
																Modified Time : {datetime}
															</span>
														</p>
														<div className="file-actions">
															<button
																className="file-action-btn"
																onClick={() => DeleteFile(id)} >
																Delete
															</button>
															<a href={fileimage}
																className="file-action-btn"
																download={filename} 	>
																Download
															</a>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</div>
				</Modal.Body>
				<div className='file-containal p-3 ' style={{ display: "flex", justifyContent: "flex-end" }}>
					<button className="custom-btn"
						onClick={submitHandler}>
						{false ? <Spinner animation="border" /> : "Upload"} </button>

				</div>
			</Modal>
		</div>
	)
}

export default Uploadfile
