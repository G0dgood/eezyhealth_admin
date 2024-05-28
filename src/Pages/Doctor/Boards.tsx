import { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

const Boards = () => {
	const [showTask, setShowTask] = useState(false);






	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '20 Oct, 2022',
			assignee: 'Successful',
			status: 'new',
		},
		{
			id: 2,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '20 Oct, 2022',
			assignee: 'Successful',
			status: 'new',
		},
		{
			id: 3,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '20 Oct, 2022',
			assignee: 'Successful',
			status: 'new',
		},
		{
			id: 4,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '25 Oct, 2022',
			assignee: 'Successful',
			status: 'new',
		},
		{
			id: 5,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '30 Oct, 2022',
			assignee: 'Successful',
			status: 'new',
		},
		{
			id: 6,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '5 Nov, 2022',
			assignee: 'Successful',
			status: 'canceled',
		},
		{
			id: 7,
			title: 'Ayra Smith',
			description: 'Tooth ache consultation',
			date: '10 Nov, 2022',
			assignee: 'David',
			status: 'failed',
		},
	]);

	const handleDragStart = (e: any, id: any) => {
		e.dataTransfer.setData('text/plain', id);
	};

	const handleDragOver = (e: any) => {
		e.preventDefault();
	};

	const handleDrop = (e: any, targetStatus: any) => {
		e.preventDefault();

		const draggedTaskId = e.dataTransfer.getData('text/plain');
		const updatedTasks = tasksData.map((task) =>
			task.id.toString() === draggedTaskId ? { ...task, status: targetStatus } : task
		);

		setTasksData(updatedTasks);
	};

	const renderTasks = (status: any) => {
		const filteredTasks = tasksData.filter((task) => task.status === status);

		return (
			<div
				className="tasks-board-container"
				onDragOver={handleDragOver}
				onDrop={(e) => handleDrop(e, status)}
			>
				<div className="tasks-board-container-sup">
					<div className="BsFillRocketTake">
						{status === 'new' && <BsFillRocketTakeoffFill size={15} />}
						{status === 'working' && <HiComputerDesktop size={15} />}
						{status === 'canceled' && <IoCheckmarkCircleSharp size={16} />}
						{status === 'failed' && <IoCalendarClear size={15} />}
						{status.charAt(0).toUpperCase() + status.slice(1)} {status === 'new' ? "Tasks" : status === 'working' ? "On" : status === 'canceled' ? "" : status === 'failed' && ""}  ({filteredTasks.length})
					</div>
					<div className="tasks-board-container-sup-icon">
						<FiPlus size={18} /> <BsThreeDots size={18} />
					</div>
				</div>

				<div>
					{filteredTasks.map((task) => (
						<div
							key={task.id}
							className="tasks-board-container-sup-card"
							draggable
							onDragStart={(e) => handleDragStart(e, task.id)}
						>
							<div className="tasks-board-container-second">
								<div className="Ugent-container">
									<div className="Ugent-img">
										<FaUserCircle size={35} />
									</div>
									<div>
										<h5 className="Ugent-img-text">{task.title}</h5>
										<p className="tasks-board-container-sup-card-text">{task.description}</p>
									</div>
								</div>
								<div className='ugent_container'>
									<div className="Ugent">{task.assignee} </div>
									<div className="Ugent_num">  5,500</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	};

	return (
		<div  >

			<div  >
				{/* <div className="dashboard-first-card-boards mb-2 mt-2">
					<div>
						<h5 className="dashboard-first-card-h">Leads Board</h5>
						<p className="dashboard-first-card-p">Create and complete leads using boards</p>
					</div>
					<div className="dashboard-first-icon-boards" onClick={() => setShowTask(true)}>
						<FiPlus size={18} /> <span>Add Task</span>
					</div>
				</div> */}

				<div className="tasks-board-items-container mt-4">
					{renderTasks('new')}
					{renderTasks('working')}
					{renderTasks('canceled')}
					{renderTasks('failed')}
				</div>
			</div>
		</div>
	)
}

export default Boards


