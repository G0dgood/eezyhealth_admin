import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CountdownTimer from '../../hooks/CountdownTimer';
import PowerResetComponent from '../../hooks/PowerResetComponent';
import { Spinner } from 'react-bootstrap';

const SuccessPage = () => {
	const navigate = useNavigate();
	const { email } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [domains, setIsDomains] = useState("");

	const emailServiceUrls: any = {
		'gmail.com': 'https://mail.google.com/',
		'yahoo.com': 'https://mail.yahoo.com/',
		'outlook.com': 'https://outlook.live.com/',
		'aol.com': 'https://mail.aol.com/',
		'icloud.com': 'https://www.icloud.com/mail',
		'protonmail.com': 'https://mail.protonmail.com/',
		'zoho.com': 'https://mail.zoho.com/',
		'yandex.com': 'https://mail.yandex.com/',
	};

	useEffect(() => {
		if (email) {
			const domain = email.substring(email.lastIndexOf('@') + 1);
			setIsDomains(domain);
		}
	}, [email])


	const EmailServiceRedirect = (email: string | undefined | any) => {
		// Extract domain from email
		const domain = email.substring(email.lastIndexOf('@') + 1);

		// Check if domain is in the emailServiceUrls mapping
		if (domain in emailServiceUrls) {
			// Open the corresponding email service URL in a new tab
			window.open(emailServiceUrls[domain], '_blank');
		} else {
			navigate('/');
		}

		// This component doesn't render anything, as it redirects immediately
		return null;
	};

	return (
		<div className="container-page">
			{isLoading ? <Spinner /> : (
				<div>
					<div className="heading">
						<span className="tick-container"><i className="tick">&nbsp;</i></span>
						<span>Account not verified!🙁 Verification link has been resent to your mail</span>
					</div>
					<div className="text-container">
						<PowerResetComponent setIsLoading={setIsLoading} isLoading={isLoading} email={email || ''} />
						<CountdownTimer seconds={59} email={email} />
						<div>Click the button below, if you are not redirected to {(domains in emailServiceUrls) ? "the website." : "login."} </div>
						<button
							className="primary-button"
							onClick={(domains in emailServiceUrls) ? () => EmailServiceRedirect(email) : () => navigate('/')}
						>
							{domains in emailServiceUrls ? "Verify Email" : "Login"}
						</button>
					</div>
				</div>
			)}
		</div>

	);
}
export default SuccessPage
