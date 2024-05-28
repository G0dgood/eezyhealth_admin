
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';

import { BiFilterAlt } from 'react-icons/bi';
import moment from 'moment';
import ModalHeader from './Modals/ModalHeader';

const FilterModal = ({ setEndDates, setStartDates, handleCustomFilters, show, setShow }: any) => {

	const handleClose = () => setShow(false);
	const handleShow = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		setShow(true);
	}


	const [selectedRadio, setSelectedRadio] = useState("All-time");
	const [dateRangeStart, setDateRangeStart] = useState("");
	const [dateRangeEnd, setDateRangeEnd] = useState("");




	const currentDate = moment().format("YYYY-MM-DD");
	const thirtyDays = moment().subtract(30, "days").format("YYYY-MM-DD");
	const sevenDays = moment().subtract(7, "days").format("YYYY-MM-DD");
	const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
	const allTime = "2023-05-30";

	useEffect(() => {
		if (selectedRadio === "All-time") {
			setStartDates(allTime);
			setEndDates(currentDate);
		} else if (selectedRadio === "30-Days") {
			setStartDates(thirtyDays);
			setEndDates(currentDate);
		} else if (selectedRadio === "7-Days") {
			setStartDates(sevenDays);
			setEndDates(currentDate);
		} else if (selectedRadio === "Yesterday") {
			setStartDates(yesterday);
			setEndDates(yesterday);
		} else if (selectedRadio === "Today") {
			setStartDates(currentDate);
			setEndDates(currentDate);
		} else if (selectedRadio === "DateRange") {
			setStartDates(moment(dateRangeStart)?.format("YYYY-MM-DD"));
			setEndDates(moment(dateRangeEnd)?.format("YYYY-MM-DD"));
		}
	}, [selectedRadio, dateRangeStart, dateRangeEnd, currentDate, yesterday, sevenDays, thirtyDays, setStartDates, setEndDates]);


	return (
		<>
			<button className="btn" onClick={handleShow}>
				Filter
			</button>
			<Modal show={show} centered  >
				<ModalHeader setShow={setShow} icon={<BiFilterAlt size={30} />} headerTitle={"Filter  Options"} />
				<Modal.Body>
					<div className="filter-dropdown">
						<form className="checkbox-grp"  >
							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-all-time"
									value="All-time"
									checked={selectedRadio === "All-time" && true}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor="filter-all-time" className="radio-label">All Time Record</label>
							</div>
							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-all-time2"
									value="30-Days"
									checked={selectedRadio === "30-Days" && true}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor="filter-all-time2" className="radio-label">Last 30 Days</label>
							</div>
							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-7-Days"
									value="7-Days"
									checked={selectedRadio === "7-Days" && true}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor="filter-7-Days" className="radio-label">Last 7 Days</label>
							</div>
							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-yesterday"
									value="Yesterday"
									checked={selectedRadio === "Yesterday" && true}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor="filter-yesterday" className="radio-label">Yesterday</label>
							</div>
							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-today"
									value="Today"
									checked={selectedRadio === "Today" && true}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor="filter-today" className="radio-label">Today</label>
							</div>

							<div className="radio">
								<input
									type="radio"
									name="filter"
									id="filter-dateRange"
									value="DateRange"
									checked={selectedRadio === "DateRange" && true}
									onChange={(e) => setSelectedRadio(e.target.value)}
								/>
								<label htmlFor="filter-dateRange" className="radio-label">Date Range</label>
							</div>

							<div className="filter-date-range">
								<input
									type="text"
									disabled={selectedRadio !== "DateRange" && true}
									onFocus={(e) => (e.currentTarget.type = "date")}
									onBlur={(e) => (e.currentTarget.type = "text")}
									placeholder="From..."
									value={selectedRadio !== "DateRange" ? "" : dateRangeStart}
									onChange={(e) => setDateRangeStart(e.target.value)}
								/>
								<input
									type="text"
									disabled={selectedRadio !== "DateRange" && true}
									onFocus={(e) => (e.currentTarget.type = "date")}
									onBlur={(e) => (e.currentTarget.type = "text")}
									placeholder="To..."
									value={selectedRadio !== "DateRange" ? "" : dateRangeEnd}
									onChange={(e) => setDateRangeEnd(e.target.value)}
								/>
							</div>
						</form>
					</div>
					<button
						id='custom-btn'
						className="mt-4"
						onClick={handleCustomFilters}>
						Filter
					</button>
				</Modal.Body>

			</Modal>
		</>
	)
}

export default FilterModal