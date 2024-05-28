import { IoArrowBackSharp } from "react-icons/io5";

const AddEmployeeNav = ({ active, setActive }: any) => {


	return (
		<div className="Stepper">
			<div className="Stepper_text_container">
				<div className="stepper_in_progrss_icon_container">
					<IoArrowBackSharp />
				</div>
				<h5>Account verification</h5>
				<span className="stepper_in_progrss_container">
					<p className="stepper_in_progrss">In progress</p>
				</span>
			</div>
			<div className="stepper_main_sup">
				<div className="stepper_main_container">
					<ol className="stepper_main_container_ol">
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ol>
					<ol className="stepper_main_container_ol2">
						<li>Bank details</li>
						<li>Bank details</li>
						<li>2 step authentication</li>
						<li>Overview</li>
					</ol>
				</div>
				<div className="stepper_main_container_two">ddd</div>
			</div>
		</div>

	)
}

export default AddEmployeeNav
