import BottomNavigation from '../../components/BottomNavigation'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav/SideNav'
import { VscListFilter } from 'react-icons/vsc'
import Search from '../../components/Search'
import { Calendars } from '../../components/Calender/Calender'


const Bookings = () => {


	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<BottomNavigation />
			<main>
				<h3 className='page_header_h3'>Bookings</h3>
				<div className='page_search_continer'>
					<Search placeholder={"Search Bookings"} />
					<div className='page_header_filter'>
						<VscListFilter />
						<p>filter</p>
					</div>
				</div>
				<div>
					<Calendars />
				</div>
			</main>
		</div>
	)
}

export default Bookings
