import { BiHelpCircle } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SVGLoader } from "./SVGLoader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { customId } from "./Options";
import { logout, reset, setUserInfo } from "../features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import axios from "axios";
import DataService from "../features/Auth/dataService";
import { auth } from "../shared/firebase";
import { onAuthStateChanged } from "firebase/auth";



const ProfileDropDown = () => {
	const { isLoadinglogout, isErrorlogout, messagelogout, isSuccesslogout } = useAppSelector((state: { auth: any; }) => state.auth)
	const [isLoading, setisLoading] = useState(false);
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState<boolean>(true);
	// Create an instance of DataService
	const dataService = DataService();
	const navigate = useNavigate();
	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("eezy-user-info"));

	const handleLogout = () => {
		navigate("/");
		dispatch(logout());
	};

	// useEffect(() => {
	// 	if (!userInfo || userInfo == null) {
	// 		navigate("/");
	// 		dispatch(reset());
	// 	}
	// }, [dispatch, navigate, userInfo]);

	useEffect(() => {
		if (isSuccesslogout) {
			// localStorage.removeItem("eezy-user-info");
			delete axios.defaults.headers.common['Authorization'];
			dispatch(logout());
			dataService.clearData()
		} else if (isErrorlogout) {
			toast.error(messagelogout, {
				toastId: customId
			});
			dispatch(logout());
			dataService.clearData()
		}
		dispatch(reset());
	}, [dataService, dispatch, isErrorlogout, isSuccesslogout, messagelogout, navigate])
	useEffect(() => {
		const unsubscribeAuth = onAuthStateChanged(
			auth,
			async (authenticatedUser) => {
				console.log('authenticatedUser', authenticatedUser)
				authenticatedUser ? setUserInfo(authenticatedUser) : setUserInfo(null);
				// setIsLoading(false);
			}
		);
		return unsubscribeAuth; // Unsubscribe auth listener on unmount
	}, [userInfo]);





	return (
		<div className='notification-profile'>
			<div className='notification-card' onClick={() => navigate("/settings")}>
				<div className='notification-icon-profile'>
					{userInfo?.user?.firstName?.charAt(0)}
				</div>
				<div>
					<p className='notification-text-profile'>My profile</p>
				</div>
			</div>
			<div className='notification-card' onClick={() => navigate("/support")}>
				<div className='notification-icon-profile-sup'>
					<BiHelpCircle size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Help and Support</p>
				</div>
			</div>
			{/* <div className='notification-card'>
				<div className='notification-icon-profile-sup'>
					<TiUserAddOutline size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Invite Friends</p>
				</div>
			</div> */}
			<div className='notification-card' onClick={handleLogout} >
				<div className='notification-icon-profile-sup'>
					<MdLogout size={25} />
				</div>
				<div>
					{isLoadinglogout ? <SVGLoader width={"30px"} height={"30px"} color={"#000"} /> : <p className='notification-text-profile'>Logout</p>}

				</div>
			</div>
		</div>
	)
}

export default ProfileDropDown