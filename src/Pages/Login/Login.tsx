import { Carousel, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { Formik } from 'formik';
import { useEffect, useState, } from 'react';
import { login, reset } from '../../features/Auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import Copyright from '../../components/Copyright';
import logo from '../../assets/img/eezy.png';
import { SVGLoader } from '../../components/SVGLoader';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../shared/firebase';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { useAppDispatch } from '../../store/useStore';
import { apiKey, client_id, googleUrl } from '../../shared/baseUrl';

const Login = () => {
	const provider = new GoogleAuthProvider();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [isLoading, setisLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState<boolean>(true);
	// Create an instance of DataService
	const [passwordShown, setPasswordShown] = useState(false);
	const [forget, setForget] = useState(false);
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};


	const onSubmitFormlogin = (values: any) => {
		navigate('/dashboard')
		// const value = { ...values };

		// @ts-ignore
		// dispatch(login(value))
	}




	const loginValidationSchema = yup.object().shape({
		email: yup
			.string()
			.email("Please enter valid email")
			.required('Email Address is Required'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
	})

	const handleForget = () => {
		setForget(!forget);
	};
	const handleForgetPassword = () => {
		// @ts-ignore
		dispatch(forgetPassword(email))
	};

	const [title, setTitle] = useState("eezy Health  | Dashboard");
	document.title = title;

	useEffect(() => {
		// This will run when the page first loads and whenever the title changes
		if (window.location.pathname === "/") {
			setTitle("eezy Health | Login ");
		}
	}, [title]);



	const auth = getAuth(app);

	const handleSignInWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
			// Handle successful sign-in
			navigate('/dashboard')
			dispatch(login())
		} catch (error: any) {
			// Handle sign-in error
			console.error('Error signing in with Google:', error.message);
		}
	};


	const loginHandler = async () => {
		setisLoading(true);
		try {
			let url = `${googleUrl}/accounts:signInWithPassword?key=` + apiKey;
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
					client_id: client_id
				})
			});
			const parsedRes = await response.json();
			setisLoading(false);
			if (parsedRes.idToken) {
				// await AsyncStorage.setItem('eezy-user-info', JSON.stringify(parsedRes));
				// toastRef.current.success('Login Successful!');
				// Dispatch login action or navigate to home screen
				// @ts-ignore 
				dispatch(login())
			} else {
				// handleAuthError(parsedRes);
			}
		} catch (error) {
			setisLoading(false);
			// handleAuthError(error);
		}
	};

	return (
		<div  >

			{/* <ToastContainer position="top-right" /> */}
			{/* <section className="log-in-page">
				<div className="main-page"> */}
			{/* <div className="welcome">
						<img src={logo} alt='super_task' crossOrigin="anonymous" /> */}
			{/* <h6>ISN MEDICAL</h6>
						<span className="guide">Please enter your details.</span> */}
			{/* </div>


					<button className="btn" disabled={false} type='submit' style={{ marginBottom: "2rem" }} >
						{false ? <SVGLoader size={"sm"} /> : 'Sign In'}</button>   */}
			{/* <Copyright className={"cp-text1"} /> */}
			{/* <div className="cardd">
						<form>
							<h2 className="title"> Log in</h2>
							<p className="subtitle">Don't have an account? <a href="#"> sign Up</a></p>

							<div className="social-login">
								<button className="google-btn" onClick={handleSignInWithGoogle}>
									<FcGoogle />
									<p className="btn-text">Sign in with Google</p>
								</button>
								<button className="fb-btn">
									<BsFacebook />
								</button>
							</div>

							<p className="or_one"><span>or</span></p>

							<div className="email-login">
								<label htmlFor="email"> <b>Email</b></label>
								<input type="text" placeholder="Enter Email" name="uname" required />
								<label htmlFor="psw"><b>Password</b></label>
								<input type="password" placeholder="Enter Password" name="psw" required />
							</div>
							<button className="cta-btn">Log In</button>
							<a className="forget-pass" href="#">Forgot password?</a>
						</form>
					</div>

				</div>
				<div className="sub-page">
					<Carousel fade>
						<Carousel.Item interval={8000}>
							<div id='login-body1' />
						</Carousel.Item>
						<Carousel.Item interval={8000}>
							<div id='login-body2' />
						</Carousel.Item>
						<Carousel.Item interval={8000}>
							<div id='login-body3' />
						</Carousel.Item>
						<Carousel.Item interval={8000}>
							<div id='login-body4' />
						</Carousel.Item>
						<Carousel.Item interval={8000}>
							<div id='login-body5' />
						</Carousel.Item>
					</Carousel>
				</div>
			</section > */}

			<div className="login-page">
				<section className="left-side">
					<div className="content">
						<h2 className="login-title">
							{/* Create Account */}
							Login to eezyhealth
						</h2>

						<nav className="social-network">
							<ul className="social-network-list">
								<li className="social-network-item">
									<a className="social-network-link" onClick={handleSignInWithGoogle}>
										<FcGoogle />
									</a>
								</li>

								<li className="social-network-item">
									<a className="social-network-link" href="#">
										<BsFacebook />
									</a>
								</li>

								<li className="social-network-item">
									<a className="social-network-link" href="#">
										<BsApple />
									</a>
								</li>
							</ul>
						</nav>

						<p className="login-sub-title">
							or use your email for registration:
						</p>

						<form className="login-form">
							<div className="login-form-group">
								<input className="login-form-input" type="email" placeholder="Email" />
							</div>

							<div className="login-form-group">
								<input className="login-form-input" type="password" placeholder="Password" autoComplete="off" />
							</div>

							<div className="login-form-group privacy-policy">
								<input className="input-checkbox" id="privacy-policy-input" type="checkbox" />

								<label className="label-checkbox" htmlFor="privacy-policy-input">
									I egree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
								</label>
							</div>

							<footer className="login-form-footer">
								<button className="btn-primary" type="button">
									Sign Up
								</button>

								<button className="btn-primary-outline" type="button">
									Sign In
								</button>
							</footer>
						</form>
					</div>
				</section>

				<section className="right-side"></section>
			</div>

		</div >
	)
}
export default Login



