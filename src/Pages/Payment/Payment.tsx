
import BottomNavigation from '../../components/BottomNavigation'
import SideNav from '../../components/SideNav/SideNav'
import Header from '../../components/Header'
import { VscListFilter } from "react-icons/vsc";
import { NoRecordFound, TableFetch } from '../../components/Options';
import Search from '../../components/Search';
import { useEffect, useState } from 'react';
import { getPaymentsCollection } from '../../hooks/getPayments';
import moment from 'moment';


const Payment = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [payment, setPayment] = useState<any>([]);



	useEffect(() => {
		setIsLoading(true);
		getPaymentsCollection()
			.then(data => {
				setPayment(data); // Process the Patient data here
				setIsLoading(false);
			})
			.catch(error => {
				// toastRef.current.error(error);
				// Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
				setIsLoading(false);
			});
	}, []);



	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<h3 className='page_header_h3'>Payment</h3>
				<div className='page_search_continer'>
					<Search placeholder="Search Payments" />
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
											<th>Payment Method</th>
											<th>Amount</th>
											<th>Transaction ID</th>
											<th>Country</th>
											<th>Date</th>
											<th>Service Rendered</th>
											<th>Transaction ID</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{isLoading ? (
											<TableFetch colSpan={8} />
										) : payment?.length === 0 || payment?.length === undefined ? (
											<NoRecordFound
												colSpan={8}
												children={"No Tickets record found!"}
											/>
										) : (
											payment?.map((user: any) => (
												<tr key={user?._id}>
													<td className="Reference" data-title="Reference">
														{user?.paymentMethod}
													</td>
													<td data-title="ticket type">{user.amount}</td>
													<td data-title="severity">
														{user?.transactionid}
													</td>
													<td data-title="description">
														{user.country}
													</td>
													<td data-title="affected users">
														{moment(user?.createdAt?.seconds)?.format("DD-MMM-YY H:mm:ss")}
													</td>
													<td >
														{user.servicerendered}
													</td>
													<td data-title="createdAt">
														{user.transactionid}
													</td>
													<td  >
														{user.status}
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

export default Payment
