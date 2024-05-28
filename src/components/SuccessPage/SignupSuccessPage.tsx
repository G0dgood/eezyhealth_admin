import { useNavigate } from "react-router-dom";

const SignupSuccessPage = () => {
	const navigate = useNavigate();


	return (
		<div className="container-page">

			<div>
				<div className="heading">
					<span className="tick-container"><i className="tick">&nbsp;</i></span>
					<span>Account creation sucessful!</span>
				</div>
				<div className="text-container">
					<div>Click the button below.</div>
					<button className="primary-button" onClick={() => navigate("/")}>Login</button>
				</div>
			</div>
		</div>
	)
}

export default SignupSuccessPage

