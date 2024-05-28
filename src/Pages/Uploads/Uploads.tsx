import BottomNavigation from '../../components/BottomNavigation'
import SideNav from '../../components/SideNav/SideNav'
import Header from '../../components/Header'
import { VscListFilter } from "react-icons/vsc";
import { NoRecordFound, TableFetch } from '../../components/Options';
import Search from '../../components/Search';


const Uploads = () => {

	// Function to generate a random status
	function getRandomStatus() {
		return Math.random() < 0.5 ? "Verified" : "Unverified";
	}

	// Array to store the appointments
	const appointments: any = [];

	// Create 20 appointments
	for (let i = 0; i < 10; i++) {
		const appointment = {
			name: "Ayra John Smith",
			email: "ayrasmith@gmail.com",
			consultationType: "Careline Hospita",
			consultationDate: "09-04-2022",
			status: getRandomStatus(),
			action: "View Documents",
		};
		appointments.push(appointment);
	}



	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<h3 className='page_header_h3'>Uploads</h3>
				<div className='page_search_continer'>
					<Search placeholder="Search Uploads" />
					<div className='page_header_filter'>
						<VscListFilter />
						<p>filter</p>
					</div>
				</div>
				<div>
					<div id="table-container">
						<div className="table-responsive-vertical ">
							<div className="table-container">
								<table id="table" className={false ? "table" : " table-hover table-mc-light-blue"}>
									<thead>
										<tr>
											<th>Name</th>
											<th>Email</th>
											<th>Hospital Name</th>
											<th>Date Joined</th>
											<th>Documents Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{false ? (
											<TableFetch colSpan={8} />
										) : appointments?.length === 0 || appointments?.length === undefined ? (
											<NoRecordFound
												colSpan={8}
												children={"No Tickets record found!"}
											/>
										) : (
											appointments?.map((user: any) => (
												<tr key={user?._id}>
													<td className="Reference" data-title="Reference">
														{user.name}
													</td>
													<td data-title="severity">
														{user.email}
													</td>
													<td data-title="description">
														{user.consultationType}
													</td>
													<td data-title="affected users">
														{user.consultationDate}
													</td>
													<td>
														{user.status}
													</td>
													<td>
														<button className='btn-case'>
															{user.action}
														</button>
													</td>
												</tr>
											))
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Uploads
