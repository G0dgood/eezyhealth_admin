import SideNav from '../../components/SideNav/SideNav'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import { FiUsers, FiHeart } from "react-icons/fi";
import { FaChevronDown, FaMoneyBill1Wave } from "react-icons/fa6";
import { BsCalendar2Check } from 'react-icons/bs';
import { VscListFilter } from 'react-icons/vsc';
import { GoDotFill } from "react-icons/go";
import LinePerformanceChart from '../../components/Charts/LinePerformanceChart';
import DoughnutChat from '../../components/DoughnutChat';
import pro_img from "../../assets/img/phone_one.png"
import { IoCheckmark } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";

interface DataType {
	value: number;
	title: string;
	details: string;
	time: string;
}

const Dashboard = () => {

	// Sample data
	const data = [
		{ value: 50, title: 'Ongoing Appointments', details: '25 Online | 25 In person', time: '11:00AM' },
		{ value: 30, title: 'New Appointments', details: '15 Online | 15 In person', time: '12:00PM' },
		{ value: 20, title: 'Completed Appointments', details: '10 Online | 10 In person', time: '1:00PM' },
		{ value: 40, title: 'Pending Appointments', details: '20 Online | 20 In person', time: '2:00PM' },
		// { value: 60, title: 'Approved Appointments', details: '30 Online | 30 In person', time: '3:00PM' },
	];


	const dataArray = [
		{
			name: "Gideon Jerry",
			issue: "Teeth Ache",
			date: "09-09-2023",
			time: "11:00AM-12:00PM",
			status: "PENDING",
		},
		{
			name: "Gideon Jerry",
			issue: "Teeth Ache",
			date: "09-09-2023",
			time: "11:00AM-12:00PM",
			status: "PENDING",
		},
		{
			name: "John Doe",
			issue: "Headache",
			date: "09-10-2023",
			time: "01:00PM-02:00PM",
			status: "ACCEPTED",
		},
		{
			name: "Jane Smith",
			issue: "Back Pain",
			date: "09-11-2023",
			time: "03:00PM-04:00PM",
			status: "DECLINED",
		},
		{
			name: "Michael Brown",
			issue: "Fever",
			date: "09-12-2023",
			time: "09:00AM-10:00AM",
			status: "PENDING",
		},
		{
			name: "Emily Johnson",
			issue: "Cough",
			date: "09-13-2023",
			time: "10:00AM-11:00AM",
			status: "PENDING",
		},
		{
			name: "David Wilson",
			issue: "Sore Throat",
			date: "09-14-2023",
			time: "11:00AM-12:00PM",
			status: "ACCEPTED",
		},
		{
			name: "Sophia Miller",
			issue: "Fatigue",
			date: "09-15-2023",
			time: "01:00PM-02:00PM",
			status: "DECLINED",
		},
		{
			name: "Liam Davis",
			issue: "Stomachache",
			date: "09-16-2023",
			time: "03:00PM-04:00PM",
			status: "ACCEPTED",
		}
	];

	const renderData = () => {
		return dataArray.map((data, index) => (
			<div className="inner_border_two" key={index}>
				<div className="stack_right_container_sub_one">
					<div>
						<img src={pro_img} alt="logo" crossOrigin="anonymous" className="dashboard_stack_right_table_img" />
					</div>
					<div>{data.name}</div>
					<div>{data.issue}</div>
					<div>{data.date}</div>
					<div>{data.time}</div>
					<div className="stack_mark_container">
						{data.status === "PENDING" &&
							<div className="stack_mark_one"> <IoCheckmark size={20} /> </div>
						}
						{data.status === "PENDING" &&
							<div className="stack_mark_two"> <HiXMark size={20} /> </div>
						}
						{data.status === "ACCEPTED" && <div className="stack_mark_one_text">Accepted</div>}
						{data.status === "DECLINED" && <div className="stack_mark_one_text_red">Declined</div>}
					</div>
				</div>
			</div>
		));
	};
	<div className='stack_mark_container'>
		<div className='stack_mark_one_text'>
			Accepted
		</div>
	</div>
	const AppointmentComponent = ({ data, active }: { data: DataType[], active: boolean }) => (
		<div className={`dashboard_stack_left_outter ${active ? 'active' : ''}`}>
			<div className='outter_inner_border_container_active' >
				<div className='inner_border_active'>
					<div className='outter_inner_border_active'>
						<div className='dashboard_stack_left_outter_container_active'>
							<div className='dashboard_stack_left_50_active'>50</div>
							<div className='dashboard_stack_left_50_text_active'>
								<h3>Ongoing Appointments</h3>
								<p>25  0nline | 25  In person</p>
							</div>
						</div>
						<h4 className='left_50_text_active'>11:00AM</h4>
					</div>
				</div>
				<div className='outter_inner_border_sub_active'></div>
			</div>
			{data.map((item, index) => (
				<div className="outter_inner_border_container" key={index}>
					<div className="inner_border">
						<div className="outter_inner_border">
							<div className="dashboard_stack_left_outter_container">
								<div className="dashboard_stack_left_50">{item.value}</div>
								<div className="dashboard_stack_left_50_text">
									<h3>{item.title}</h3>
									<p>{item.details}</p>
								</div>
							</div>
							<h4 className="left_50_text">{item.time}</h4>
						</div>
					</div>
					<div className="outter_inner_border_sub"></div>
				</div>
			))}
		</div>
	);

	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<div className='dashboard_container_grid'>
					<div className='total_card'>
						<div className='total_card_one'>
							<FiUsers size={23} />
						</div>
						<div>
							<p className='total_card_p'>Total Users</p>
							<h4 className='total_card_h'>2000+</h4>
						</div>
					</div>

					<div className='total_card'>
						<div className='total_card_two'>
							<FaMoneyBill1Wave size={23} />
						</div>
						<div>
							<p className='total_card_p'>Total Revenue</p>
							<h4 className='total_card_h'>2000+</h4>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_three'>
							<BsCalendar2Check size={22} />
						</div>
						<div>
							<p className='total_card_p'>Total Bookings</p>
							<h4 className='total_card_h'>2000+</h4>
						</div>
					</div>
					<div className='total_card'>
						<div className='total_card_four'>
							<FiHeart size={23} />
						</div>
						<div>
							<p className='total_card_p'>Treatments</p>
							<h4 className='total_card_h'>2000+</h4>
						</div>
					</div>

				</div>

				<div className='dashboard_container_stack'>
					<div className='dashboard_container_stack_left'>
						<h3 className='dashboard_stack_left'>Today’s Appointment ( 08-04-2023 )</h3>
						<div className='dashboard_stack_left_table'>
							<div className='dashboard_stack_left_inner'>

								<AppointmentComponent data={data} active={true} />
								{/* <div className='dashboard_stack_left_outter '>

									<div className='outter_inner_border_container_active' >
										<div className='inner_border_active'>
											<div className='outter_inner_border_active'>
												<div className='dashboard_stack_left_outter_container_active'>
													<div className='dashboard_stack_left_50_active'>50</div>
													<div className='dashboard_stack_left_50_text_active'>
														<h3>Ongoing Appointments</h3>
														<p>25  0nline | 25  In person</p>
													</div>
												</div>
												<h4 className='left_50_text_active'>11:00AM</h4>
											</div>
										</div>
										<div className='outter_inner_border_sub_active'></div>
									</div>
									<div className='outter_inner_border_container' >
										<div className='inner_border'>
											<div className='outter_inner_border'>
												<div className='dashboard_stack_left_outter_container'>
													<div className='dashboard_stack_left_50'>50</div>
													<div className='dashboard_stack_left_50_text'>
														<h3>Ongoing Appointments</h3>
														<p>25  0nline | 25  In person</p>
													</div>
												</div>
												<h4 className='left_50_text'>11:00AM</h4>
											</div>
										</div>
										<div className='outter_inner_border_sub'></div>
									</div>
									<div className='outter_inner_border_container' >
										<div className='inner_border'>
											<div className='outter_inner_border'>
												<div className='dashboard_stack_left_outter_container'>
													<div className='dashboard_stack_left_50'>50</div>
													<div className='dashboard_stack_left_50_text'>
														<h3>Ongoing Appointments</h3>
														<p>25  0nline | 25  In person</p>
													</div>
												</div>
												<h4 className='left_50_text'>11:00AM</h4>
											</div>
										</div>
										<div className='outter_inner_border_sub'></div>
									</div>
									<div className='outter_inner_border_container' >
										<div className='inner_border'>
											<div className='outter_inner_border'>
												<div className='dashboard_stack_left_outter_container'>
													<div className='dashboard_stack_left_50'>50</div>
													<div className='dashboard_stack_left_50_text'>
														<h3>Ongoing Appointments</h3>
														<p>25  0nline | 25  In person</p>
													</div>
												</div>
												<h4 className='left_50_text'>11:00AM</h4>
											</div>
										</div>
										<div className='outter_inner_border_sub'></div>
									</div>
									<div className='outter_inner_border_container' >
										<div className='inner_border'>
											<div className='outter_inner_border'>
												<div className='dashboard_stack_left_outter_container'>
													<div className='dashboard_stack_left_50'>50</div>
													<div className='dashboard_stack_left_50_text'>
														<h3>Ongoing Appointments</h3>
														<p>25  0nline | 25  In person</p>
													</div>
												</div>
												<h4 className='left_50_text'>11:00AM</h4>
											</div>
										</div>
										<div className='outter_inner_border_sub'></div>
									</div>
									<div className='outter_inner_border_container' >
										<div className='inner_border'>
											<div className='outter_inner_border'>
												<div className='dashboard_stack_left_outter_container'>
													<div className='dashboard_stack_left_50'>50</div>
													<div className='dashboard_stack_left_50_text'>
														<h3>Ongoing Appointments</h3>
														<p>25  0nline | 25  In person</p>
													</div>
												</div>
												<h4 className='left_50_text'>11:00AM</h4>
											</div>
										</div>
										<div className='outter_inner_border_sub'></div>
									</div>
								</div> */}

							</div>
						</div>
					</div>

					<div className='dashboard_stack_right_container'>
						<div className='dashboard_stack_right'>
							<h3>
								Appointment Requests <span>( 08-04-2023 )</span>
							</h3>
							<div className='page_header_filter'>
								<VscListFilter />
								<p>filter</p>
							</div>
						</div>
						<div className='dashboard_stack_right_table'>
							<div className='dashboard_stack_right_container_main'>
								<div className='stack_right_container_sub'>
									<div></div>
									<div>Name</div>
									<div>Type</div>
									<div>Date</div>
									<div>Slot</div>
									<div>Action</div>
								</div>
								<div className="inner_border_two_container">
									{renderData()}
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className='dashboard_graph_averge'>
					<div className='dashboard_graph_averge_one'>
						<div className='dashboard_graph_averge_sup'>
							<h3>Average patient visit</h3>
							<button className='btn'>Monthly <FaChevronDown size={16} /> </button>
						</div>
						<LinePerformanceChart />
					</div>
					<div className='dashboard_graph_averge_two'>
						<p>Product Rating</p>
						<div>
							<DoughnutChat />
						</div>
						<div className='chat_details_container'>
							<div className='chat_details_container_sub'>
								<GoDotFill size={16} color='#EB3D4D' />
								<p>35 bad reviews</p>
							</div>

							<div className='chat_details_container_sub'>
								<GoDotFill size={16} color='#44CE2D' />
								<p>50 good reviews</p>
							</div>
						</div>
					</div>
				</div>
			</main>

		</div>
	)
}

export default Dashboard