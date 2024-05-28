import React, { useEffect, useState } from 'react'
import BottomNavigation from '../../components/BottomNavigation'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav/SideNav'
import { VscListFilter } from 'react-icons/vsc'
import Search from '../../components/Search'
import { NoRecordFound, TableFetch } from '../../components/Options'
import { getPatients } from '../../hooks/getPatient'
import moment from 'moment'

const Patient = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [patient, setPatient] = useState<any>([]);



	useEffect(() => {
		setIsLoading(true);
		getPatients()
			.then(data => {
				setPatient(data); // Process the Patient data here
				setIsLoading(false);
			})
			.catch(error => {
				// toastRef.current.error(error);
				// Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
				setIsLoading(false);
			});
	}, []);

	console.log('patient', patient)


	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<h3 className='page_header_h3'>Payment</h3>
				<div className='page_search_continer'>
					<Search placeholder="Search Users" />
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
											<th>Booking ID</th>
											<th>Email</th>
											<th>Address</th>
											<th>Date</th>
											<th>Phone Number</th>
										</tr>
									</thead>
									<tbody>
										{isLoading ? (
											<TableFetch colSpan={8} />
										) : patient?.length === 0 || patient?.length === undefined ? (
											<NoRecordFound
												colSpan={8}
												children={"No Tickets record found!"}
											/>
										) : (
											patient?.map((user: any) => (
												<tr key={user?._id}>
													<td className="Reference" data-title="Reference">
														{user?.display_name}
													</td>
													<td data-title="ticket type">{user.bookingID}</td>
													<td data-title="severity">
														{user?.email}
													</td>
													<td data-title="description">
														{user?.address?.street1}
													</td>
													<td data-title="affected users">
														{moment(user?.created_time?.nanoseconds)?.format("DD-MMM-YY H:mm:ss")}
													</td>
													<td >
														{user?.phone_number}
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

export default Patient
